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
  type AgentSessionEvent,
  AuthStorage,
  ModelRegistry,
  SettingsManager,
  getAgentDir,
} from "@mariozechner/pi-coding-agent";
import { streamSimple, type AssistantMessageEvent, type AssistantMessageEventStream, type Model, type Api, type Usage } from "@mariozechner/pi-ai";

import { type AgentControlCommand, type AgentControlResult } from "./agent-control/index.js";
import { SESSIONS_DIR, WORKSPACE_DIR, getAgentRuntimeConfig, getSessionStorageConfig } from "./core/config.js";
import { detectChannel } from "./router.js";
import { createTrackedBashOperations } from "./tools/tracked-bash.js";
import { getAttachmentRegistry, type AttachmentInfo } from "./agent-pool/attachments.js";
import { writeAgentLog } from "./agent-pool/logging.js";
import { pruneOrphanToolResults } from "./agent-pool/orphan-tool-results.js";
import { AgentBranchManager, type ActiveChatAgent } from "./agent-pool/branch-manager.js";
import { AgentRuntimeFacade, type AvailableModelsResult } from "./agent-pool/runtime-facade.js";
import { AgentSessionManager, type PoolEntry } from "./agent-pool/session-manager.js";
import { AgentToolFactory } from "./agent-pool/tool-factory.js";
import { AgentTurnCoordinator } from "./agent-pool/turn-coordinator.js";
import { recordMessageUsage } from "./agent-pool/usage.js";
import { withChatContext } from "./core/chat-context.js";
import { getSessionFileSize, rotateSession } from "./session-rotation.js";
import { type ChatBranchRecord } from "./db.js";
import { createLogger } from "./utils/logger.js";
import { resolveModelRequestAuth } from "./utils/model-auth.js";

const log = createLogger("agent-pool");

/** Output from an agent run: response text, status, and token usage. */
export interface AgentOutput {
  status: "success" | "error";
  result: string | null;
  error?: string;
  attachments?: AttachmentInfo[];
}

/** A single turn's output within a multi-turn agent run. */
export interface TurnOutput {
  text: string;
  attachments: AttachmentInfo[];
}

export interface SidePromptResult {
  status: "success" | "error";
  result: string | null;
  thinking: string | null;
  error?: string;
  model: string | null;
  usage?: Usage;
  stopReason?: string;
}

interface SideAssistantMessage {
  stopReason?: string;
  errorMessage?: string;
  usage?: Usage;
  content?: unknown[];
  provider?: string;
  model?: string;
  api?: string;
}

export interface SidePromptOptions {
  systemPrompt?: string;
  signal?: AbortSignal;
  onEvent?: (event: AssistantMessageEvent | AgentSessionEvent) => void;
  onTextDelta?: (delta: string) => void;
  onThinkingDelta?: (delta: string) => void;
}

/** Options for AgentPool.runAgent(): chatJid, messages, callbacks. */
export interface RunAgentOptions {
  onEvent?: (event: AgentSessionEvent) => void;
  /** Called when a turn completes (text_start → next text_start or end). */
  onTurnComplete?: (turn: TurnOutput) => void;
  /** Override the default timeout (ms). Use 0 or a negative value to disable. */
  timeoutMs?: number;
}

/** Construction options for creating an AgentPool. */
export interface AgentPoolOptions {
  createSession?: (chatJid: string, sessionDir: string) => Promise<AgentSession>;
  createSideSession?: (chatJid: string, sessionDir: string) => Promise<AgentSession>;
  modelRegistry?: ModelRegistry;
  sideStreamSimple?: (
    model: Model<Api>,
    context: Parameters<typeof streamSimple>[1],
    options?: Parameters<typeof streamSimple>[2]
  ) => AssistantMessageEventStream;
}

function formatTimeoutDuration(timeoutMs: number): string {
  if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) return `${timeoutMs}ms`;
  if (timeoutMs % 1000 === 0) return `${Math.round(timeoutMs / 1000)}s`;
  return `${(timeoutMs / 1000).toFixed(1)}s`;
}

function extractAssistantText(message: { content?: unknown[] } | null | undefined): string {
  if (!Array.isArray(message?.content)) return "";
  return message.content
    .map((block) => block && typeof block === "object" && (block as { type?: unknown }).type === "text"
      ? String((block as { text?: unknown }).text ?? "")
      : "")
    .join("")
    .trim();
}

function extractAssistantThinking(message: { content?: unknown[] } | null | undefined): string {
  if (!Array.isArray(message?.content)) return "";
  return message.content
    .map((block) => block && typeof block === "object" && (block as { type?: unknown }).type === "thinking"
      ? String((block as { thinking?: unknown }).thinking ?? "")
      : "")
    .join("")
    .trim();
}

function toSideReasoning(level: unknown): "minimal" | "low" | "medium" | "high" | "xhigh" | undefined {
  return level === "minimal" || level === "low" || level === "medium" || level === "high" || level === "xhigh"
    ? level
    : undefined;
}

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
  private sessionBinder?: (session: AgentSession, chatJid: string) => Promise<void> | void;
  private bashOperations = createTrackedBashOperations();
  private attachments = getAttachmentRegistry();
  private toolFactory = new AgentToolFactory({
    workspaceDir: WORKSPACE_DIR,
    bashOperations: this.bashOperations,
  });
  private turnCoordinator = new AgentTurnCoordinator({
    takeAttachments: (chatJid) => this.attachments.take(chatJid),
    touchSession: (chatJid) => {
      const entry = this.pool.get(chatJid);
      if (entry) entry.lastUsed = Date.now();
    },
    recordMessageUsage,
    onWarn: (message, details) => log.warn(message, details),
    onError: (message, details) => log.error(message, details),
  });
  private sessionManager: AgentSessionManager;
  private branchManager: AgentBranchManager;
  private runtimeFacade: AgentRuntimeFacade;
  private sideStreamSimple?: NonNullable<AgentPoolOptions["sideStreamSimple"]>;

  constructor(options: AgentPoolOptions = {}) {
    this.createSession = options.createSession;
    this.createSideSession = options.createSideSession;
    this.authStorage = AuthStorage.create();
    this.modelRegistry = options.modelRegistry ?? new ModelRegistry(this.authStorage);
    this.sessionManager = new AgentSessionManager({
      pool: this.pool,
      sidePool: this.sidePool,
      ...(this.createSession ? { createSession: this.createSession } : {}),
      ...(this.createSideSession ? { createSideSession: this.createSideSession } : {}),
      authStorage: this.authStorage,
      modelRegistry: this.modelRegistry,
      settingsManager: this.settingsManager,
      createDefaultTools: () => this.toolFactory.createDefaultTools(),
      bindSession: (session, chatJid) => this.bindSession(session, chatJid),
      ensureBranchRegistration: (chatJid, session) => {
        this.branchManager.ensureBranchRegistration(chatJid, session);
      },
      onInfo: (message, details) => log.info(message, details),
      onWarn: (message, details) => log.warn(message, details),
      onError: (message, details) => log.error(message, details),
    });
    this.runtimeFacade = new AgentRuntimeFacade({
      pool: this.pool,
      getOrCreate: (chatJid) => this.getOrCreate(chatJid),
      modelRegistry: this.modelRegistry,
      authStorage: this.authStorage,
      clearAttachments: (chatJid) => this.attachments.clear(chatJid),
      onWarn: (message, details) => log.warn(message, details),
      onError: (message, details) => log.error(message, details),
    });
    this.branchManager = new AgentBranchManager({
      pool: this.pool,
      sidePool: this.sidePool,
      activeForkBaseLeafByChat: this.activeForkBaseLeafByChat,
      getOrCreate: (chatJid) => this.getOrCreate(chatJid),
      isActive: (chatJid) => this.runtimeFacade.isActive(chatJid),
      onWarn: (message, details) => log.warn(message, details),
    });
    this.sideStreamSimple = options.sideStreamSimple;
    mkdirSync(SESSIONS_DIR, { recursive: true });
    mkdirSync(this.logsDir, { recursive: true });
    this.cleanupTimer = setInterval(() => this.sessionManager.evictIdle(IDLE_TTL), CLEANUP_INTERVAL);
  }

  setSessionBinder(binder?: (session: AgentSession, chatJid: string) => Promise<void> | void): void {
    this.sessionBinder = binder;
    if (!binder) return;
    for (const [jid, entry] of this.pool) {
      try {
        void binder(entry.session, jid);
      } catch (err) {
        log.error("Failed to bind session", {
          operation: "set_session_binder.bind_existing_session",
          chatJid: jid,
          err,
        });
      }
    }
  }

  /** Attempt safe automatic session rotation before the next prompt when configured. */
  private async maybeAutoRotateSession(session: AgentSession, chatJid: string): Promise<void> {
    const sessionStorageConfig = getSessionStorageConfig();
    const autoRotateEnabled = sessionStorageConfig.autoRotate
      || ["1", "true", "yes", "on"].includes((process.env.PICLAW_SESSION_AUTO_ROTATE || "").trim().toLowerCase());
    if (!autoRotateEnabled) return;

    const envThresholdMb = parseInt(process.env.PICLAW_SESSION_MAX_SIZE_MB || "", 10);
    const thresholdBytes = Number.isFinite(envThresholdMb) && envThresholdMb > 0
      ? envThresholdMb * 1024 * 1024
      : sessionStorageConfig.maxSizeBytes;

    const sessionFileSize = getSessionFileSize(session.sessionFile);
    if (sessionFileSize === null || sessionFileSize < thresholdBytes) return;

    const result = await rotateSession(session, { reason: "automatic" });
    if (result.status === "success") {
      log.info("Auto-rotated oversized session", {
        operation: "maybe_auto_rotate_session",
        chatJid,
        previousSize: result.previousSize ?? sessionFileSize,
        nextSize: result.nextSize ?? "unknown",
      });
      return;
    }

    log.warn("Auto-rotation skipped", {
      operation: "maybe_auto_rotate_session",
      chatJid,
      reason: result.message,
    });
  }

  /** Run a prompt against the persistent session for `chatJid`. */
  async runAgent(prompt: string, chatJid: string, options: RunAgentOptions = {}): Promise<AgentOutput> {
    const startTime = Date.now();
    this.attachments.clear(chatJid);

    try {
      const session = await this.getOrCreate(chatJid);
      await this.maybeAutoRotateSession(session, chatJid);
      pruneOrphanToolResults(session, chatJid);
      const forkBaseLeafId = typeof session.sessionManager?.getLeafId === "function"
        ? session.sessionManager.getLeafId()
        : null;
      this.activeForkBaseLeafByChat.set(chatJid, forkBaseLeafId ?? null);
      log.info("Prompting session", {
        operation: "run_agent.prompt",
        chatJid,
        promptLength: prompt.length,
      });

      const tracker = this.turnCoordinator.createTracker(chatJid, options.onTurnComplete);
      const unsub = this.turnCoordinator.subscribe(session, chatJid, tracker, options.onEvent);
      const timeoutMs = typeof options.timeoutMs === "number" ? options.timeoutMs : getAgentRuntimeConfig().timeoutMs;
      const { timeoutId, timedOutRef } = this.turnCoordinator.startPromptTimeout(session, chatJid, timeoutMs);

      const channel = detectChannel(chatJid);
      return await withChatContext(chatJid, channel, async () => {
        try {
          await session.prompt(prompt);
          // Guard against premature waitForRetry() resolution:
          // agent-session._resolveRetry() fires at message_end (first successful LLM
          // response during auto-retry), while the retry _runLoop may still be executing
          // tool calls (isStreaming=true). The upstream design assumes human-paced TUI
          // callers where this is harmless. In our queue-based context it causes the
          // next processChat to call session.prompt() while isStreaming is still true,
          // producing "already processing" errors. Poll until truly idle.
          // Wait until the session is truly idle. Auto-compaction can start
          // after the main response finishes and may kick off a follow-up
          // continue() call (e.g., overflow recovery). Keep listening until
          // streaming + compaction fully settle.
          const idleSettleTicks = 10;
          let idleTicks = 0;
          while (idleTicks < idleSettleTicks) {
            if (!session.isStreaming && !session.isCompacting && !session.isRetrying) {
              idleTicks += 1;
            } else {
              idleTicks = 0;
            }
            await Bun.sleep(50);
          }
        } finally {
          if (timeoutId) clearTimeout(timeoutId);
          unsub();
        }

        const duration = Date.now() - startTime;

        // If onTurnComplete was used, intermediate turns were already flushed.
        // The final turn's text is in tracker.getFinalText().
        const finalText = tracker.getFinalText();
        const finalAttachments = this.attachments.take(chatJid);

        const timedOut = timedOutRef.value;
        writeAgentLog(this.logsDir, chatJid, duration, timedOut, finalText, null);

        if (timedOut) {
          return { status: "error", result: null, error: `Timed out after ${formatTimeoutDuration(timeoutMs)}` };
        }

        log.info("Agent run completed", {
          operation: "run_agent.complete",
          chatJid,
          durationMs: duration,
          outputChars: finalText.length,
          turns: tracker.getTurnCount() + 1,
        });
        return {
          status: "success",
          result: finalText || null,
          attachments: finalAttachments.length ? finalAttachments : undefined,
        };
      });
    } catch (err) {
      this.attachments.clear(chatJid);
      const duration = Date.now() - startTime;
      const errorMsg = err instanceof Error ? err.message : String(err);
      writeAgentLog(this.logsDir, chatJid, duration, false, null, errorMsg);
      log.error("Agent run failed", {
        operation: "run_agent",
        chatJid,
        durationMs: duration,
        errorMessage: errorMsg,
        err,
      });
      return { status: "error", result: null, error: errorMsg };
    } finally {
      this.activeForkBaseLeafByChat.delete(chatJid);
    }
  }

  async applyControlCommand(chatJid: string, command: AgentControlCommand): Promise<AgentControlResult> {
    return this.runtimeFacade.applyControlCommand(chatJid, command);
  }

  async getCurrentModelLabel(chatJid: string): Promise<string | null> {
    return this.runtimeFacade.getCurrentModelLabel(chatJid);
  }

  async runSidePrompt(chatJid: string, prompt: string, options: SidePromptOptions = {}): Promise<SidePromptResult> {
    const session = await this.getOrCreate(chatJid);
    const model = session.model;
    if (!model) {
      return { status: "error", result: null, thinking: null, error: "No active model selected.", model: null };
    }

    if (this.sideStreamSimple) {
      const auth = await resolveModelRequestAuth(this.modelRegistry, model);
      if (!auth.ok) {
        return {
          status: "error",
          result: null,
          thinking: null,
          error: auth.error || `No credentials available for ${model.provider}/${model.id}.`,
          model: `${model.provider}/${model.id}`,
        };
      }

      const stream = this.sideStreamSimple(
        model,
        {
          ...(options.systemPrompt ? { systemPrompt: options.systemPrompt } : {}),
          messages: [
            {
              role: "user",
              content: [{ type: "text", text: prompt }],
              timestamp: Date.now(),
            },
          ],
        },
        {
          apiKey: auth.apiKey,
          headers: auth.headers,
          reasoning: toSideReasoning((session as AgentSession & { thinkingLevel?: unknown }).thinkingLevel),
          signal: options.signal,
        },
      );

      let text = "";
      let thinking = "";
      let finalMessage: SideAssistantMessage | null = null;

      for await (const event of stream) {
        options.onEvent?.(event);
        if (event.type === "text_delta") {
          text += event.delta;
          options.onTextDelta?.(event.delta);
        } else if (event.type === "thinking_delta") {
          thinking += event.delta;
          options.onThinkingDelta?.(event.delta);
        } else if (event.type === "done") {
          finalMessage = event.message;
        } else if (event.type === "error") {
          finalMessage = event.error;
        }
      }

      if (!finalMessage) {
        return {
          status: "error",
          result: null,
          thinking: null,
          error: "Side prompt finished without a response.",
          model: `${model.provider}/${model.id}`,
        };
      }

      try {
        recordMessageUsage(chatJid, finalMessage);
      } catch (err) {
        log.warn("Failed to persist side-prompt usage", {
          operation: "run_side_prompt.persist_usage_stream",
          chatJid,
          err,
        });
      }

      if (finalMessage.stopReason === "error" || finalMessage.stopReason === "aborted") {
        return {
          status: "error",
          result: null,
          thinking: thinking || extractAssistantThinking(finalMessage),
          error: finalMessage.errorMessage || "Side prompt failed.",
          model: `${model.provider}/${model.id}`,
          usage: finalMessage.usage,
          stopReason: finalMessage.stopReason,
        };
      }

      return {
        status: "success",
        result: text || extractAssistantText(finalMessage) || null,
        thinking: thinking || extractAssistantThinking(finalMessage) || null,
        model: `${model.provider}/${model.id}`,
        usage: finalMessage.usage,
        stopReason: finalMessage.stopReason,
      };
    }

    const sideSession = await this.getOrCreateSide(chatJid);
    await this.syncSideSessionFromMain(session, sideSession);

    let text = "";
    let thinking = "";
    let sawText = false;
    let sawThinking = false;
    let finalMessage: SideAssistantMessage | null = null;
    let timedOut = false;
    const channel = detectChannel(chatJid);
    const timeoutMs = getAgentRuntimeConfig().timeoutMs;    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const unsubscribe = sideSession.subscribe((event) => {
      options.onEvent?.(event);

      if (event.type === "message_update") {
        const messageEvent = event.assistantMessageEvent;
        if (messageEvent.type === "text_start") {
          if (sawText && !text.endsWith("\n\n")) text += "\n\n";
        } else if (messageEvent.type === "text_delta") {
          sawText = true;
          text += messageEvent.delta;
          options.onTextDelta?.(messageEvent.delta);
        } else if (messageEvent.type === "thinking_start") {
          if (sawThinking && !thinking.endsWith("\n\n")) thinking += "\n\n";
        } else if (messageEvent.type === "thinking_delta") {
          sawThinking = true;
          thinking += messageEvent.delta;
          options.onThinkingDelta?.(messageEvent.delta);
        }
        return;
      }

      if (event.type === "message_end") {
        const message = event.message as { role?: string; stopReason?: string; errorMessage?: string; usage?: Usage; content?: unknown[] } | undefined;
        if (message?.role === "assistant") {
          finalMessage = message as SideAssistantMessage;
          try {
            recordMessageUsage(chatJid, message);
          } catch (err) {
            log.warn("Failed to persist side-prompt usage", {
              operation: "run_side_prompt.persist_usage_session",
              chatJid,
              err,
            });
          }
        }
      }
    });

    const abortHandler = () => {
      void sideSession.abort().catch(() => {
        /* expected: side session may already be aborting when the outer signal fires. */
      });
    };
    options.signal?.addEventListener("abort", abortHandler, { once: true });
    if (timeoutMs > 0) {
      timeoutId = setTimeout(() => {
        timedOut = true;
        void sideSession.abort().catch(() => {
          /* expected: side session may already be aborting when the timeout fires. */
        });
      }, timeoutMs);
    }

    try {
      await withChatContext(chatJid, channel, async () => {
        const composedPrompt = options.systemPrompt
          ? `${options.systemPrompt}\n\n${prompt}`
          : prompt;
        await sideSession.prompt(composedPrompt);
        const idleSettleTicks = 10;
        let idleTicks = 0;
        while (idleTicks < idleSettleTicks) {
          if (!sideSession.isStreaming && !sideSession.isCompacting && !sideSession.isRetrying) {
            idleTicks += 1;
          } else {
            idleTicks = 0;
          }
          await Bun.sleep(50);
        }
      });
    } catch (err) {
      if (timeoutId) clearTimeout(timeoutId);
      unsubscribe();
      options.signal?.removeEventListener("abort", abortHandler);
      return {
        status: "error",
        result: null,
        thinking: thinking || null,
        error: timedOut ? `Timed out after ${formatTimeoutDuration(timeoutMs)}` : (err instanceof Error ? err.message : String(err)),
        model: `${model.provider}/${model.id}`,
        stopReason: timedOut ? "aborted" : "error",
      };
    }

    if (timeoutId) clearTimeout(timeoutId);
    unsubscribe();
    options.signal?.removeEventListener("abort", abortHandler);

    if (!finalMessage) {
      const fallbackText = text || sideSession.getLastAssistantText() || null;
      if (!fallbackText) {
        return {
          status: "error",
          result: null,
          thinking: thinking || null,
          error: timedOut ? `Timed out after ${formatTimeoutDuration(timeoutMs)}` : "Side prompt finished without a response.",
          model: `${model.provider}/${model.id}`,
          stopReason: timedOut ? "aborted" : "error",
        };
      }
      return {
        status: "success",
        result: fallbackText,
        thinking: thinking || null,
        model: `${model.provider}/${model.id}`,
        stopReason: "stop",
      };
    }

    const completedMessage = finalMessage as SideAssistantMessage;

    if (timedOut || completedMessage.stopReason === "error" || completedMessage.stopReason === "aborted") {
      return {
        status: "error",
        result: null,
        thinking: thinking || extractAssistantThinking(completedMessage) || null,
        error: timedOut ? `Timed out after ${formatTimeoutDuration(timeoutMs)}` : (completedMessage.errorMessage || "Side prompt failed."),
        model: `${model.provider}/${model.id}`,
        usage: completedMessage.usage,
        stopReason: timedOut ? "aborted" : completedMessage.stopReason,
      };
    }

    return {
      status: "success",
      result: text || extractAssistantText(completedMessage) || sideSession.getLastAssistantText() || null,
      thinking: thinking || extractAssistantThinking(completedMessage) || null,
      model: `${model.provider}/${model.id}`,
      usage: completedMessage.usage,
      stopReason: completedMessage.stopReason,
    };
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

  private async bindSession(session: AgentSession, chatJid: string): Promise<void> {
    if (!this.sessionBinder) return;
    try {
      await this.sessionBinder(session, chatJid);
    } catch (err) {
      log.error("Failed to bind session", {
        operation: "bind_session",
        chatJid,
        err,
      });
    }
  }

  private evictIdle(): void {
    this.sessionManager.evictIdle(IDLE_TTL);
  }
}
