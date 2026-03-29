/**
 * agent-pool.ts – Manages per-chat pi-agent sessions and orchestrates agent runs.
 *
 * The AgentPool is the central coordinator between inbound messages and the
 * pi-coding-agent SDK. It:
 *   - Maintains a map of chat JID → AgentSession (lazy-initialised).
 *   - Provides runAgent() which prompts the agent, streams events, records
 *     token usage, detects auto-compaction needs, and returns the result.
 *   - Handles slash commands by delegating to agent-pool/slash-command.ts.
 *   - Forwards agent-control commands (model switch, session management, etc.)
 *     to the agent-control module.
 *   - Manages session lifecycle: save/restore position (for scheduled tasks),
 *     clear sessions, reload resources.
 *   - Integrates the attachment registry for file-delivery tools.
 *
 * Consumers:
 *   - runtime.ts / runtime/message-loop.ts creates the AgentPool at startup
 *     and calls runAgent() for each inbound message.
 *   - task-scheduler.ts calls runAgent() for scheduled task execution.
 *   - channels/web.ts uses applyControlCommand() and agent status queries.
 *   - agent-control handlers call methods on AgentPool for session/model ops.
 */

import { mkdirSync } from "fs";
import { join } from "path";
import {
  type AgentSession,
  AuthStorage,
  ModelRegistry,
  SettingsManager,
  getAgentDir,
} from "@mariozechner/pi-coding-agent";

import { type AgentControlCommand, type AgentControlResult } from "./agent-control/index.js";
import { SESSIONS_DIR, WORKSPACE_DIR } from "./core/config.js";
import { createTrackedBashOperations } from "./tools/tracked-bash.js";
import { type ActiveChatAgent } from "./agent-pool/branch-manager.js";
import {
  type AgentOutput,
  type AgentPoolOptions,
  type RunAgentOptions,
  type SidePromptOptions,
  type SidePromptResult,
} from "./agent-pool/contracts.js";
import { runSidePrompt as runSidePromptInternal } from "./agent-pool/side-prompt-runner.js";
import { runAgentPrompt } from "./agent-pool/run-agent-orchestrator.js";
import { type AvailableModelsResult } from "./agent-pool/runtime-facade.js";
import { createAgentPoolServices, type AgentPoolServices } from "./agent-pool/service-factory.js";
import { type PoolEntry } from "./agent-pool/session-manager.js";
import { type ChatBranchRecord } from "./db.js";
import { createLogger } from "./utils/logger.js";

const log = createLogger("agent-pool");

export type {
  AgentOutput,
  AgentPoolOptions,
  RunAgentOptions,
  SidePromptOptions,
  SidePromptResult,
  TurnOutput,
} from "./agent-pool/contracts.js";

/** How long (ms) an idle session stays cached before being disposed. */
const IDLE_TTL = 10 * 60 * 1000; // 10 minutes
const CLEANUP_INTERVAL = 60 * 1000; // check every minute

/**
 * Manages a pool of persistent AgentSession instances keyed by chat JID.
 *
 * First invocation for a JID pays the warm-up cost (resource discovery,
 * model initialisation). Subsequent calls reuse the live session – no
 * process-spawn overhead, conversation context already loaded.
 */
export class AgentPool {
  private pool = new Map<string, PoolEntry>();
  private sidePool = new Map<string, PoolEntry>();
  private activeForkBaseLeafByChat = new Map<string, string | null>();
  private cleanupTimer: ReturnType<typeof setInterval> | null = null;

  // Shared across all sessions (expensive to create, safe to reuse)
  private authStorage: AuthStorage;
  private modelRegistry: ModelRegistry;
  private settingsManager = SettingsManager.create(WORKSPACE_DIR, getAgentDir());
  private logsDir = join(WORKSPACE_DIR, "logs");
  private createSession?: AgentPoolOptions["createSession"];
  private createSideSession?: AgentPoolOptions["createSideSession"];
  private bashOperations = createTrackedBashOperations();
  private attachments: AgentPoolServices["attachments"];
  private sessionBinder: AgentPoolServices["sessionBinder"];
  private toolFactory: AgentPoolServices["toolFactory"];
  private turnCoordinator: AgentPoolServices["turnCoordinator"];
  private sessionManager: AgentPoolServices["sessionManager"];
  private branchManager: AgentPoolServices["branchManager"];
  private runtimeFacade: AgentPoolServices["runtimeFacade"];
  private sideStreamSimple?: NonNullable<AgentPoolOptions["sideStreamSimple"]>;

  constructor(options: AgentPoolOptions = {}) {
    this.createSession = options.createSession;
    this.createSideSession = options.createSideSession;
    this.authStorage = AuthStorage.create();
    this.modelRegistry = options.modelRegistry ?? new ModelRegistry(this.authStorage);
    ({
      attachments: this.attachments,
      sessionBinder: this.sessionBinder,
      toolFactory: this.toolFactory,
      turnCoordinator: this.turnCoordinator,
      sessionManager: this.sessionManager,
      runtimeFacade: this.runtimeFacade,
      branchManager: this.branchManager,
    } = createAgentPoolServices({
      pool: this.pool,
      sidePool: this.sidePool,
      activeForkBaseLeafByChat: this.activeForkBaseLeafByChat,
      authStorage: this.authStorage,
      modelRegistry: this.modelRegistry,
      settingsManager: this.settingsManager,
      workspaceDir: WORKSPACE_DIR,
      bashOperations: this.bashOperations,
      createSession: this.createSession,
      createSideSession: this.createSideSession,
      onInfo: (message, details) => log.info(message, details),
      onWarn: (message, details) => log.warn(message, details),
      onError: (message, details) => log.error(message, details),
    }));
    this.sideStreamSimple = options.sideStreamSimple;
    mkdirSync(SESSIONS_DIR, { recursive: true });
    mkdirSync(this.logsDir, { recursive: true });
    this.cleanupTimer = setInterval(() => this.sessionManager.evictIdle(IDLE_TTL), CLEANUP_INTERVAL);
  }

  setSessionBinder(binder?: (session: AgentSession, chatJid: string) => Promise<void> | void): void {
    this.sessionBinder.setBinder(binder);
  }

  /** Run a prompt against the persistent session for `chatJid`. */
  async runAgent(prompt: string, chatJid: string, options: RunAgentOptions = {}): Promise<AgentOutput> {
    return runAgentPrompt(prompt, chatJid, options, {
      getOrCreate: (nextChatJid) => this.getOrCreate(nextChatJid),
      turnCoordinator: this.turnCoordinator,
      clearAttachments: (nextChatJid) => this.attachments.clear(nextChatJid),
      takeAttachments: (nextChatJid) => this.attachments.take(nextChatJid),
      logsDir: this.logsDir,
      setActiveForkBaseLeaf: (nextChatJid, leafId) => this.activeForkBaseLeafByChat.set(nextChatJid, leafId),
      clearActiveForkBaseLeaf: (nextChatJid) => {
        this.activeForkBaseLeafByChat.delete(nextChatJid);
      },
      onInfo: (message, details) => log.info(message, details),
      onWarn: (message, details) => log.warn(message, details),
      onError: (message, details) => log.error(message, details),
    });
  }

  async applyControlCommand(chatJid: string, command: AgentControlCommand): Promise<AgentControlResult> {
    return this.runtimeFacade.applyControlCommand(chatJid, command);
  }

  async getCurrentModelLabel(chatJid: string): Promise<string | null> {
    return this.runtimeFacade.getCurrentModelLabel(chatJid);
  }

  async runSidePrompt(chatJid: string, prompt: string, options: SidePromptOptions = {}): Promise<SidePromptResult> {
    return runSidePromptInternal(chatJid, prompt, options, {
      getOrCreate: (nextChatJid) => this.getOrCreate(nextChatJid),
      getOrCreateSide: (nextChatJid) => this.getOrCreateSide(nextChatJid),
      syncSideSessionFromMain: (mainSession, sideSession) => this.syncSideSessionFromMain(mainSession, sideSession),
      modelRegistry: this.modelRegistry,
      sideStreamSimple: this.sideStreamSimple,
      onWarn: (message, details) => log.warn(message, details),
    });
  }

  /** Return available model labels and current model for a chat session. */
  async getAvailableModels(chatJid: string): Promise<AvailableModelsResult> {
    return this.runtimeFacade.getAvailableModels(chatJid);
  }

  /** Return the current context token usage for a chat session, or null if unknown. */
  async getContextUsageForChat(chatJid: string): Promise<{
    tokens: number | null;
    contextWindow: number;
    percent: number | null;
  } | null> {
    return this.runtimeFacade.getContextUsageForChat(chatJid);
  }

  /**
   * Save the current session tree position so it can be restored later.
   * Used by the scheduler to isolate task execution in a side branch.
   */
  async saveSessionPosition(chatJid: string): Promise<string | null> {
    return this.runtimeFacade.saveSessionPosition(chatJid);
  }

  /**
   * Restore the session tree to a previously saved position.
   * Navigates back to the saved leaf, leaving the task's output in a side branch.
   */
  async restoreSessionPosition(chatJid: string, leafId: string | null): Promise<void> {
    return this.runtimeFacade.restoreSessionPosition(chatJid, leafId);
  }

  hasProviderModels(provider: string): boolean {
    return this.runtimeFacade.hasProviderModels(provider);
  }

  registerModelProvider(
    providerName: string,
    config: Parameters<ModelRegistry["registerProvider"]>[1]
  ): void {
    this.runtimeFacade.registerModelProvider(providerName, config);
  }

  resolveModelInput(input: string): { model?: string; error?: string } {
    return this.runtimeFacade.resolveModelInput(input);
  }

  isStreaming(chatJid: string): boolean {
    return this.runtimeFacade.isStreaming(chatJid);
  }

  isActive(chatJid: string): boolean {
    return this.runtimeFacade.isActive(chatJid);
  }

  private ensureBranchRegistration(chatJid: string, session?: AgentSession | null): ChatBranchRecord {
    return this.branchManager.ensureBranchRegistration(chatJid, session);
  }

  async renameChatBranch(
    chatJid: string,
    options: { agentName?: string | null } = {},
  ): Promise<ChatBranchRecord> {
    return this.branchManager.renameChatBranch(chatJid, options);
  }

  async pruneChatBranch(chatJid: string): Promise<ChatBranchRecord> {
    return this.branchManager.pruneChatBranch(chatJid);
  }

  async restoreChatBranch(
    chatJid: string,
    options: { agentName?: string | null } = {},
  ): Promise<ChatBranchRecord> {
    return this.branchManager.restoreChatBranch(chatJid, options);
  }

  async createForkedChatBranch(
    sourceChatJid: string,
    options: { agentName?: string | null } = {},
  ): Promise<ChatBranchRecord> {
    return this.branchManager.createForkedChatBranch(sourceChatJid, options);
  }

  listActiveChats(): ActiveChatAgent[] {
    return this.branchManager.listActiveChats();
  }

  listKnownChats(
    rootChatJid?: string | null,
    options?: { includeArchived?: boolean }
  ): ActiveChatAgent[] {
    return this.branchManager.listKnownChats(rootChatJid, options);
  }

  findActiveChatByAgentName(agentName: string): ActiveChatAgent | null {
    return this.branchManager.findActiveChatByAgentName(agentName);
  }

  findChatByAgentName(agentName: string): { chat_jid: string; agent_name: string } | null {
    return this.branchManager.findChatByAgentName(agentName);
  }

  getAgentHandleForChat(chatJid: string): string {
    return this.branchManager.getAgentHandleForChat(chatJid);
  }

  async queueStreamingMessage(
    chatJid: string,
    text: string,
    behavior: "steer" | "followUp"
  ): Promise<{ queued: boolean; error?: string }> {
    return this.runtimeFacade.queueStreamingMessage(chatJid, text, behavior);
  }

  /** Remove one queued follow-up message (first content match) from an active session queue. */
  async removeQueuedFollowupMessage(chatJid: string, queuedContent?: string): Promise<boolean> {
    return this.runtimeFacade.removeQueuedFollowupMessage(chatJid, queuedContent);
  }

  /** Execute a raw slash command in the AgentSession (extension commands). */
  async applySlashCommand(chatJid: string, rawText: string): Promise<AgentControlResult> {
    return this.runtimeFacade.applySlashCommand(chatJid, rawText);
  }

  /** Gracefully shut down all sessions. */
  async shutdown(): Promise<void> {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
      this.cleanupTimer = null;
    }
    await this.sessionManager.shutdown();
  }

  // ── internal ────────────────────────────────────────────

  private async getOrCreate(chatJid: string): Promise<AgentSession> {
    return this.sessionManager.getOrCreate(chatJid);
  }

  private async getOrCreateSide(chatJid: string): Promise<AgentSession> {
    return this.sessionManager.getOrCreateSide(chatJid);
  }

  private async syncSideSessionFromMain(mainSession: AgentSession, sideSession: AgentSession): Promise<void> {
    return this.sessionManager.syncSideSessionFromMain(mainSession, sideSession);
  }

  private evictIdle(): void {
    this.sessionManager.evictIdle(IDLE_TTL);
  }
}
