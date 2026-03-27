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
  createBashTool,
  createEditTool,
  createReadTool,
  createWriteTool,
  ModelRegistry,
  SettingsManager,
  getAgentDir,
} from "@mariozechner/pi-coding-agent";
import { streamSimple, type AssistantMessageEvent, type AssistantMessageEventStream, type Model, type Api, type Usage } from "@mariozechner/pi-ai";

import { applyControlCommand, type AgentControlCommand, type AgentControlResult } from "./agent-control/index.js";
import { SESSIONS_DIR, WORKSPACE_DIR, getAgentRuntimeConfig, getIdentityConfig, getSessionStorageConfig } from "./core/config.js";
import { detectChannel } from "./router.js";
import { createTrackedBashOperations } from "./tools/tracked-bash.js";
import { getAttachmentRegistry, type AttachmentInfo } from "./agent-pool/attachments.js";
import { writeAgentLog } from "./agent-pool/logging.js";
import { pruneOrphanToolResults } from "./agent-pool/orphan-tool-results.js";
import { createDefaultSession, createSessionInDir, ensureNamedSessionDir, ensureSessionDir } from "./agent-pool/session.js";
import { executeSlashCommand } from "./agent-pool/slash-command.js";
import { getProviderUsage } from "./agent-pool/provider-usage.js";
import { recordMessageUsage } from "./agent-pool/usage.js";
import { resolveModelLabel } from "./utils/model-utils.js";
import { withChatContext } from "./core/chat-context.js";
import { getSessionFileSize, rotateSession, seedRotatedSession, forcePersistSessionFile } from "./session-rotation.js";
import {
  archiveChatBranch,
  ensureChatBranch,
  getChatBranchByAgentName,
  getChatBranchByChatJid,
  listChatBranches,
  renameChatBranchIdentity,
  restoreChatBranchIdentity,
  storeChatMetadata,
  type ChatBranchRecord,
} from "./db.js";
import { createUuid } from "./utils/ids.js";
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

interface PoolEntry {
  session: AgentSession;
  lastUsed: number;
}

interface TurnTracker {
  handleMessageUpdate: (event: AgentSessionEvent) => void;
  getFinalText: () => string;
  getTurnCount: () => number;
}

function formatTimeoutDuration(timeoutMs: number): string {
  if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) return `${timeoutMs}ms`;
  if (timeoutMs % 1000 === 0) return `${Math.round(timeoutMs / 1000)}s`;
  return `${(timeoutMs / 1000).toFixed(1)}s`;
}

interface AgentContentBlock {
  type?: unknown;
  id?: unknown;
  text?: unknown;
}

export interface ActiveChatAgent {
  branch_id: string | null;
  chat_jid: string;
  root_chat_jid: string;
  parent_branch_id: string | null;
  agent_name: string;
  archived_at?: string | null;
  session_id: string | null;
  session_name: string | null;
  model: string | null;
  is_active: boolean;
  has_side_session: boolean;
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

function normalizeAgentHandlePart(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function deriveAgentHandle(chatJid: string, sessionName?: string | null): string {
  const sessionHandle = sessionName ? normalizeAgentHandlePart(sessionName) : "";
  if (sessionHandle) return sessionHandle;

  const jidTail = chatJid.split(/[:/]/).filter(Boolean).pop() || chatJid;
  // Use configured assistant name for the root "default" branch
  // instead of the generic "default" derived from web:default.
  if (jidTail === "default") {
    const configHandle = normalizeAgentHandlePart(getIdentityConfig().assistantName || "");
    if (configHandle) return configHandle;
  }

  const jidHandle = normalizeAgentHandlePart(jidTail);
  if (jidHandle) return jidHandle;

  return "agent";
}

function buildForkedChatJid(sourceChatJid: string): string {
  const root = sourceChatJid.startsWith("web:") ? sourceChatJid : `web:${sourceChatJid}`;
  return `${root}:branch:${createUuid("chat").split("-").pop()}`;
}

function createVolatileBranchRecord(chatJid: string, session?: AgentSession | null): ChatBranchRecord {
  return {
    branch_id: `volatile:${chatJid}`,
    chat_jid: chatJid,
    root_chat_jid: chatJid,
    parent_branch_id: null,
    agent_name: deriveAgentHandle(chatJid, session?.sessionName?.trim() || null),
    display_name: null,
    created_at: new Date(0).toISOString(),
    updated_at: new Date(0).toISOString(),
    archived_at: null,
  };
}

function getStableForkSeed(sourceSession: AgentSession, stableLeafId: string | null): {
  branchEntries: any[];
  sessionName: string | null;
  model: { provider: string; modelId: string } | null;
  thinkingLevel: string | null;
} {
  const branchEntries = stableLeafId === null
    ? []
    : (typeof sourceSession.sessionManager?.getBranch === "function"
        ? sourceSession.sessionManager.getBranch(stableLeafId)
        : []);

  let sessionName: string | null = null;
  let model: { provider: string; modelId: string } | null = null;
  let thinkingLevel: string | null = null;

  for (const entry of branchEntries) {
    if (entry?.type === "session_info" && typeof entry.name === "string" && entry.name.trim()) {
      sessionName = entry.name.trim();
    } else if (entry?.type === "model_change" && typeof entry.provider === "string" && typeof entry.modelId === "string") {
      model = { provider: entry.provider, modelId: entry.modelId };
    } else if (entry?.type === "thinking_level_change" && typeof entry.thinkingLevel === "string") {
      thinkingLevel = entry.thinkingLevel;
    } else if (entry?.type === "message" && entry.message?.role === "assistant" && typeof entry.message?.provider === "string" && typeof entry.message?.model === "string") {
      model = { provider: entry.message.provider, modelId: entry.message.model };
    }
  }

  return { branchEntries, sessionName, model, thinkingLevel };
}

function seedSessionManagerFromBranchEntries(
  sessionManager: any,
  branchEntries: any[],
  fallback: { sessionName?: string | null; model?: { provider: string; modelId: string } | null },
): void {
  if (!Array.isArray(branchEntries) || branchEntries.length === 0) {
    if (fallback.sessionName?.trim()) {
      sessionManager.appendSessionInfo(fallback.sessionName.trim());
    }
    if (fallback.model) {
      sessionManager.appendModelChange(fallback.model.provider, fallback.model.modelId);
    }
    return;
  }

  const sourceToNewId = new Map<string, string>();
  for (const entry of branchEntries) {
    let newId: string | null = null;
    if (entry?.type === "message" && entry.message) {
      newId = sessionManager.appendMessage(entry.message);
    } else if (entry?.type === "thinking_level_change" && typeof entry.thinkingLevel === "string") {
      newId = sessionManager.appendThinkingLevelChange(entry.thinkingLevel);
    } else if (entry?.type === "model_change" && typeof entry.provider === "string" && typeof entry.modelId === "string") {
      newId = sessionManager.appendModelChange(entry.provider, entry.modelId);
    } else if (entry?.type === "compaction" && typeof entry.summary === "string") {
      const firstKeptEntryId = sourceToNewId.get(entry.firstKeptEntryId) || sourceToNewId.get(branchEntries[0]?.id) || "rotated-context";
      newId = sessionManager.appendCompaction(entry.summary, firstKeptEntryId, entry.tokensBefore ?? 0, entry.details, entry.fromHook);
    } else if (entry?.type === "session_info" && typeof entry.name === "string" && entry.name.trim()) {
      newId = sessionManager.appendSessionInfo(entry.name.trim());
    } else if (entry?.type === "custom_message" && typeof entry.customType === "string") {
      newId = sessionManager.appendCustomMessageEntry(entry.customType, entry.content, entry.display, entry.details);
    } else if (entry?.type === "custom_entry" && typeof entry.customType === "string") {
      newId = sessionManager.appendCustomEntry(entry.customType, entry.data);
    }

    if (entry?.id && newId) {
      sourceToNewId.set(entry.id, newId);
    }
  }
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
  private sideStreamSimple?: NonNullable<AgentPoolOptions["sideStreamSimple"]>;

  constructor(options: AgentPoolOptions = {}) {
    this.createSession = options.createSession;
    this.createSideSession = options.createSideSession;
    this.authStorage = AuthStorage.create();
    this.modelRegistry = options.modelRegistry ?? new ModelRegistry(this.authStorage);
    this.sideStreamSimple = options.sideStreamSimple;
    mkdirSync(SESSIONS_DIR, { recursive: true });
    mkdirSync(this.logsDir, { recursive: true });
    this.cleanupTimer = setInterval(() => this.evictIdle(), CLEANUP_INTERVAL);
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

      const tracker = this.createTurnTracker(chatJid, options.onTurnComplete);
      const unsub = this.subscribeToSession(session, chatJid, tracker, options.onEvent);
      const timeoutMs = typeof options.timeoutMs === "number" ? options.timeoutMs : getAgentRuntimeConfig().timeoutMs;      const { timeoutId, timedOutRef } = this.startPromptTimeout(session, chatJid, timeoutMs);

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
    const session = await this.getOrCreate(chatJid);
    const channel = detectChannel(chatJid);
    return await withChatContext(chatJid, channel, () => applyControlCommand(session, this.modelRegistry, command));
  }

  async getCurrentModelLabel(chatJid: string): Promise<string | null> {
    const session = await this.getOrCreate(chatJid);
    const model = session.model;
    return model ? `${model.provider}/${model.id}` : null;
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
  async getAvailableModels(chatJid: string): Promise<{
    current: string | null;
    models: string[];
    thinking_level: string | null;
    supports_thinking: boolean;
    provider_usage: Awaited<ReturnType<typeof getProviderUsage>>;
  }> {
    const session = await this.getOrCreate(chatJid);
    const registry = (session as AgentSession & { modelRegistry?: ModelRegistry }).modelRegistry ?? this.modelRegistry;
    const available = registry.getAvailable();
    const models = available.map((model) => `${model.provider}/${model.id}`);
    const currentModel = session.model ? `${session.model.provider}/${session.model.id}` : null;
    const thinkingLevel = session.thinkingLevel ?? null;
    const supportsThinking = typeof (session as AgentSession & { supportsThinking?: () => boolean }).supportsThinking === "function"
      ? (session as AgentSession & { supportsThinking: () => boolean }).supportsThinking()
      : Boolean(session.model?.reasoning);
    const providerUsage = session.model?.provider
      ? await getProviderUsage(this.authStorage, session.model.provider)
      : null;
    return {
      current: currentModel,
      models,
      thinking_level: thinkingLevel,
      supports_thinking: supportsThinking,
      provider_usage: providerUsage,
    };
  }

  /** Return the current context token usage for a chat session, or null if unknown. */
  async getContextUsageForChat(chatJid: string): Promise<{
    tokens: number | null;
    contextWindow: number;
    percent: number | null;
  } | null> {
    const entry = this.pool.get(chatJid);
    if (!entry) return null;
    return entry.session.getContextUsage() ?? null;
  }

  /**
   * Save the current session tree position so it can be restored later.
   * Used by the scheduler to isolate task execution in a side branch.
   */
  async saveSessionPosition(chatJid: string): Promise<string | null> {
    const session = await this.getOrCreate(chatJid);
    return session.sessionManager.getLeafId();
  }

  /**
   * Restore the session tree to a previously saved position.
   * Navigates back to the saved leaf, leaving the task's output in a side branch.
   */
  async restoreSessionPosition(chatJid: string, leafId: string | null): Promise<void> {
    if (leafId === null) return;
    const session = await this.getOrCreate(chatJid);
    const currentLeaf = session.sessionManager.getLeafId();
    if (currentLeaf === leafId) return; // already there
    try {
      await session.navigateTree(leafId);
    } catch (err) {
      log.error("Failed to restore session position", {
        operation: "restore_session_position",
        chatJid,
        leafId,
        err,
      });
    }
  }

  hasProviderModels(provider: string): boolean {
    return this.modelRegistry.getAll().some((model) => model.provider === provider);
  }

  registerModelProvider(
    providerName: string,
    config: Parameters<ModelRegistry["registerProvider"]>[1]
  ): void {
    this.modelRegistry.registerProvider(providerName, config);
  }

  resolveModelInput(input: string): { model?: string; error?: string } {
    return resolveModelLabel(this.modelRegistry, input);
  }

  isStreaming(chatJid: string): boolean {
    return this.pool.get(chatJid)?.session.isStreaming ?? false;
  }

  isActive(chatJid: string): boolean {
    const session = this.pool.get(chatJid)?.session;
    if (!session) return false;
    return Boolean(session.isStreaming || session.isCompacting || session.isRetrying || session.isBashRunning);
  }

  private ensureBranchRegistration(chatJid: string, session?: AgentSession | null): ChatBranchRecord {
    try {
      const existing = getChatBranchByChatJid(chatJid);
      if (existing) return existing;
      const created = ensureChatBranch({
        chat_jid: chatJid,
        agent_name: deriveAgentHandle(chatJid, session?.sessionName?.trim() || null),
      });
      storeChatMetadata(chatJid, new Date().toISOString(), created.agent_name || chatJid);
      return created;
    } catch (err) {
      log.warn("Falling back to volatile branch record", {
        operation: "ensure_branch_registration",
        chatJid,
        err,
      });
      return createVolatileBranchRecord(chatJid, session);
    }
  }

  async renameChatBranch(
    chatJid: string,
    options: { agentName?: string | null } = {},
  ): Promise<ChatBranchRecord> {
    const session = this.pool.get(chatJid)?.session ?? null;
    this.ensureBranchRegistration(chatJid, session);
    const nextAgentName = options.agentName !== undefined ? options.agentName : undefined;
    const renamed = renameChatBranchIdentity({
      chat_jid: chatJid,
      agent_name: nextAgentName,
    });

    if (session) {
      try {
        session.setSessionName(renamed.agent_name);
      } catch (err) {
        log.warn("Failed to sync renamed branch session name", {
          operation: "rename_chat_branch.sync_session_name",
          chatJid,
          err,
        });
      }
    }

    return renamed;
  }

  async pruneChatBranch(chatJid: string): Promise<ChatBranchRecord> {
    const session = this.pool.get(chatJid)?.session ?? null;
    const existing = this.ensureBranchRegistration(chatJid, session);
    if (existing.chat_jid === existing.root_chat_jid) {
      throw new Error("Cannot prune the root chat branch.");
    }
    if (this.isActive(chatJid)) {
      throw new Error("Cannot prune a branch while it is active.");
    }

    const archived = archiveChatBranch(chatJid);
    const mainEntry = this.pool.get(chatJid);
    if (mainEntry) {
      try {
        mainEntry.session.dispose();
      } catch (err) {
        log.warn("Failed to dispose pruned session", {
          operation: "prune_chat_branch.dispose_main",
          chatJid,
          err,
        });
      }
      this.pool.delete(chatJid);
    }
    const sideEntry = this.sidePool.get(chatJid);
    if (sideEntry) {
      try {
        sideEntry.session.dispose();
      } catch (err) {
        log.warn("Failed to dispose pruned side session", {
          operation: "prune_chat_branch.dispose_side",
          chatJid,
          err,
        });
      }
      this.sidePool.delete(chatJid);
    }
    this.activeForkBaseLeafByChat.delete(chatJid);

    return archived;
  }

  async restoreChatBranch(
    chatJid: string,
    options: { agentName?: string | null } = {},
  ): Promise<ChatBranchRecord> {
    const restored = restoreChatBranchIdentity({
      chat_jid: chatJid,
      ...(options.agentName !== undefined ? { agent_name: options.agentName } : {}),
    });

    // Warm session registration for restored branches so switching is immediate.
    try {
      await this.getOrCreate(chatJid);
    } catch (err) {
      // Keep restore resilient even if session warmup fails.
      log.warn("Restored branch but failed to warm its session", {
        operation: "restore_chat_branch.warm_session",
        chatJid,
        err,
      });
    }

    return restored;
  }

  async createForkedChatBranch(
    sourceChatJid: string,
    options: { agentName?: string | null } = {},
  ): Promise<ChatBranchRecord> {
    const sourceSession = await this.getOrCreate(sourceChatJid);
    const sourceIsActive = Boolean(
      sourceSession.isStreaming || sourceSession.isCompacting || sourceSession.isRetrying || sourceSession.isBashRunning,
    );
    const stableForkLeafId = this.activeForkBaseLeafByChat.has(sourceChatJid)
      ? this.activeForkBaseLeafByChat.get(sourceChatJid) ?? null
      : null;
    if (sourceIsActive && !this.activeForkBaseLeafByChat.has(sourceChatJid)) {
      throw new Error("Cannot fork this branch yet because no stable turn boundary is available.");
    }

    const sourceBranch = this.ensureBranchRegistration(sourceChatJid, sourceSession);
    const nextChatJid = buildForkedChatJid(sourceChatJid);
    const requestedAgentName = typeof options.agentName === "string" && options.agentName.trim()
      ? options.agentName.trim()
      : sourceBranch.agent_name;
    storeChatMetadata(nextChatJid, new Date().toISOString(), requestedAgentName || nextChatJid);
    const nextBranch = ensureChatBranch({
      chat_jid: nextChatJid,
      root_chat_jid: sourceBranch.root_chat_jid || sourceBranch.chat_jid,
      parent_branch_id: sourceBranch.branch_id,
      agent_name: requestedAgentName,
    });

    const targetSession = await this.getOrCreate(nextChatJid);
    const stableSeed = sourceIsActive
      ? getStableForkSeed(sourceSession, stableForkLeafId)
      : null;
    const sourceContext = sourceSession.sessionManager.buildSessionContext();
    const parentSession = sourceSession.sessionFile?.trim() || undefined;
    const setupName = nextBranch.agent_name;
    const sourceModel = stableSeed?.model || sourceContext.model || (sourceSession.model
      ? { provider: sourceSession.model.provider, modelId: sourceSession.model.id }
      : null);

    const ok = await targetSession.newSession({
      ...(parentSession ? { parentSession } : {}),
      setup: async (sessionManager) => {
        if (stableSeed) {
          seedSessionManagerFromBranchEntries(sessionManager, stableSeed.branchEntries, {
            sessionName: setupName,
            model: sourceModel,
          });
          return;
        }
        seedRotatedSession(sessionManager, sourceContext, {
          sessionName: setupName,
          model: sourceModel,
        });
      },
    });
    if (!ok) {
      throw new Error("Branch fork was cancelled.");
    }

    if (sourceSession.model) {
      try {
        await targetSession.setModel(sourceSession.model);
      } catch (err) {
        log.warn("Failed to copy model to forked branch", {
          operation: "create_forked_chat_branch.copy_model",
          chatJid: nextChatJid,
          err,
        });
      }
    }
    try {
      targetSession.setThinkingLevel((stableSeed?.thinkingLevel || sourceContext.thinkingLevel || sourceSession.thinkingLevel) as any);
    } catch (err) {
      log.warn("Failed to copy thinking level to forked branch", {
        operation: "create_forked_chat_branch.copy_thinking_level",
        chatJid: nextChatJid,
        err,
      });
    }
    try {
      targetSession.setSessionName(setupName);
    } catch (err) {
      log.warn("Failed to copy session name to forked branch", {
        operation: "create_forked_chat_branch.copy_session_name",
        chatJid: nextChatJid,
        err,
      });
    }
    forcePersistSessionFile(targetSession);

    return ensureChatBranch({
      chat_jid: nextChatJid,
      root_chat_jid: nextBranch.root_chat_jid,
      parent_branch_id: nextBranch.parent_branch_id,
      agent_name: nextBranch.agent_name,
    });
  }

  listActiveChats(): ActiveChatAgent[] {
    const chats = [...this.pool.entries()]
      .flatMap(([chatJid, entry]): ActiveChatAgent[] => {
        const branch = this.ensureBranchRegistration(chatJid, entry.session);
        if (branch.archived_at) {
          return [];
        }
        return [{
          branch_id: branch.branch_id,
          chat_jid: chatJid,
          root_chat_jid: branch.root_chat_jid,
          parent_branch_id: branch.parent_branch_id,
          agent_name: branch.agent_name,
          archived_at: branch.archived_at ?? null,
          session_id: entry.session.sessionId,
          session_name: entry.session.sessionName?.trim() || null,
          model: entry.session.model ? `${entry.session.model.provider}/${entry.session.model.id}` : null,
          is_active: Boolean(entry.session.isStreaming || entry.session.isCompacting || entry.session.isRetrying || entry.session.isBashRunning),
          has_side_session: this.sidePool.has(chatJid),
        }];
      })
      .sort((a, b) => {
        if (a.is_active !== b.is_active) return a.is_active ? -1 : 1;
        return a.chat_jid.localeCompare(b.chat_jid);
      });

    return chats;
  }

  listKnownChats(
    rootChatJid?: string | null,
    options?: { includeArchived?: boolean }
  ): ActiveChatAgent[] {
    const activeChats = this.listActiveChats();
    const activeByChat = new Map(activeChats.map((chat) => [chat.chat_jid, chat]));
    try {
      return listChatBranches(rootChatJid || null, { includeArchived: Boolean(options?.includeArchived) })
        .map((branch) => {
          const active = activeByChat.get(branch.chat_jid);
          return {
            branch_id: branch.branch_id,
            chat_jid: branch.chat_jid,
            root_chat_jid: branch.root_chat_jid,
            parent_branch_id: branch.parent_branch_id,
            agent_name: branch.agent_name,
            archived_at: branch.archived_at ?? null,
            session_id: active?.session_id ?? null,
            session_name: active?.session_name ?? null,
            model: active?.model ?? null,
            is_active: active?.is_active ?? false,
            has_side_session: active?.has_side_session ?? false,
          } satisfies ActiveChatAgent;
        })
        .sort((a, b) => {
          if (a.chat_jid === rootChatJid && b.chat_jid !== rootChatJid) return -1;
          if (b.chat_jid === rootChatJid && a.chat_jid !== rootChatJid) return 1;
          if (Boolean(a.archived_at) !== Boolean(b.archived_at)) return a.archived_at ? 1 : -1;
          if (a.is_active !== b.is_active) return a.is_active ? -1 : 1;
          return a.chat_jid.localeCompare(b.chat_jid);
        });
    } catch (err) {
      log.warn("Failed to list known chats; falling back to active sessions only", {
        operation: "list_known_chats",
        rootChatJid: rootChatJid || null,
        err,
      });
      return activeChats;
    }
  }

  findActiveChatByAgentName(agentName: string): ActiveChatAgent | null {
    const normalized = normalizeAgentHandlePart(agentName);
    if (!normalized) return null;
    return this.listActiveChats().find((chat) => chat.agent_name === normalized) ?? null;
  }

  findChatByAgentName(agentName: string): { chat_jid: string; agent_name: string } | null {
    const normalized = normalizeAgentHandlePart(agentName);
    if (!normalized) return null;
    try {
      const branch = getChatBranchByAgentName(normalized);
      if (branch) return { chat_jid: branch.chat_jid, agent_name: branch.agent_name };
    } catch (err) {
      log.warn("Failed to look up agent handle; falling back to active sessions", {
        operation: "find_chat_by_agent_name",
        agentHandle: normalized,
        err,
      });
    }
    const active = this.listActiveChats().find((chat) => chat.agent_name === normalized) ?? null;
    return active ? { chat_jid: active.chat_jid, agent_name: active.agent_name } : null;
  }

  getAgentHandleForChat(chatJid: string): string {
    try {
      return getChatBranchByChatJid(chatJid)?.agent_name ?? deriveAgentHandle(chatJid);
    } catch (err) {
      log.warn("Failed to read stored handle; deriving one from chat id instead", {
        operation: "get_agent_handle_for_chat",
        chatJid,
        err,
      });
      return deriveAgentHandle(chatJid);
    }
  }

  async queueStreamingMessage(
    chatJid: string,
    text: string,
    behavior: "steer" | "followUp"
  ): Promise<{ queued: boolean; error?: string }> {
    const session = await this.getOrCreate(chatJid);
    if (!session.isStreaming) return { queued: false };

    const channel = detectChannel(chatJid);

    try {
      return await withChatContext(chatJid, channel, async () => {
        await session.prompt(text, { streamingBehavior: behavior });
        return { queued: true };
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      return { queued: false, error: message };
    }
  }

  /** Remove one queued follow-up message (first content match) from an active session queue. */
  async removeQueuedFollowupMessage(chatJid: string, queuedContent?: string): Promise<boolean> {
    const session = await this.getOrCreate(chatJid);
    if (!session.isStreaming) return false;

    const followups = [...session.getFollowUpMessages()];
    if (followups.length === 0) return false;

    const normalized = typeof queuedContent === "string" ? queuedContent.trim() : "";
    let removeIndex = -1;
    if (normalized) {
      removeIndex = followups.findIndex((item) => item === queuedContent || item.trim() === normalized);
    }
    if (removeIndex < 0) removeIndex = 0;

    const channel = detectChannel(chatJid);
    try {
      return await withChatContext(chatJid, channel, async () => {
        const cleared = session.clearQueue();
        const nextFollowups = cleared.followUp.filter((_, idx) => idx !== removeIndex);

        for (const steer of cleared.steering) {
          await session.prompt(steer, { streamingBehavior: "steer" });
        }
        for (const followup of nextFollowups) {
          await session.prompt(followup, { streamingBehavior: "followUp" });
        }

        return true;
      });
    } catch (error) {
      log.warn("Failed to remove queued follow-up", {
        operation: "remove_queued_follow_up",
        chatJid,
        err: error,
      });
      return false;
    }
  }

  /** Execute a raw slash command in the AgentSession (extension commands). */
  async applySlashCommand(chatJid: string, rawText: string): Promise<AgentControlResult> {
    this.attachments.clear(chatJid);
    const session = await this.getOrCreate(chatJid);
    const channel = detectChannel(chatJid);
    const result = await withChatContext(chatJid, channel, () => executeSlashCommand(session, chatJid, rawText));
    this.attachments.clear(chatJid);
    return result;
  }

  /** Gracefully shut down all sessions. */
  async shutdown(): Promise<void> {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
      this.cleanupTimer = null;
    }
    for (const [jid, entry] of this.pool) {
      try {
        entry.session.dispose();
        log.info("Disposed session", {
          operation: "shutdown.dispose_main_session",
          chatJid: jid,
        });
      } catch (err) {
        log.error("Failed to dispose session during shutdown", {
          operation: "shutdown.dispose_main_session",
          chatJid: jid,
          err,
        });
      }
    }
    for (const [jid, entry] of this.sidePool) {
      try {
        entry.session.dispose();
        log.info("Disposed side session", {
          operation: "shutdown.dispose_side_session",
          chatJid: jid,
        });
      } catch (err) {
        log.error("Failed to dispose side session during shutdown", {
          operation: "shutdown.dispose_side_session",
          chatJid: jid,
          err,
        });
      }
    }
    this.pool.clear();
    this.sidePool.clear();
  }

  // ── internal ────────────────────────────────────────────

  private createDefaultTools() {
    return [
      createReadTool(WORKSPACE_DIR),
      createBashTool(WORKSPACE_DIR, { operations: this.bashOperations }),
      createEditTool(WORKSPACE_DIR),
      createWriteTool(WORKSPACE_DIR),
    ];
  }

  private async getOrCreate(chatJid: string): Promise<AgentSession> {
    const existing = this.pool.get(chatJid);
    if (existing) {
      existing.lastUsed = Date.now();
      return existing.session;
    }

    log.info("Creating new session", {
      operation: "get_or_create.create_main_session",
      chatJid,
    });

    const chatSessionDir = ensureSessionDir(chatJid);

    if (this.createSession) {
      const session = await this.createSession(chatJid, chatSessionDir);
      this.pool.set(chatJid, { session, lastUsed: Date.now() });
      await this.applyDefaultModel(session);
      await this.bindSession(session, chatJid);
      this.ensureBranchRegistration(chatJid, session);
      log.info("Session ready", {
        operation: "get_or_create.create_main_session",
        chatJid,
        poolSize: this.pool.size,
      });
      return session;
    }

    const session = await createDefaultSession(chatJid, {
      authStorage: this.authStorage,
      modelRegistry: this.modelRegistry,
      settingsManager: this.settingsManager,
      tools: this.createDefaultTools(),
    });

    this.pool.set(chatJid, { session, lastUsed: Date.now() });
    await this.applyDefaultModel(session);
    await this.bindSession(session, chatJid);
    this.ensureBranchRegistration(chatJid, session);
    log.info("Session ready", {
      operation: "get_or_create.create_default_session",
      chatJid,
      poolSize: this.pool.size,
    });
    return session;
  }

  private async getOrCreateSide(chatJid: string): Promise<AgentSession> {
    const existing = this.sidePool.get(chatJid);
    if (existing) {
      existing.lastUsed = Date.now();
      return existing.session;
    }

    log.info("Creating new side session", {
      operation: "get_or_create_side.create_session",
      chatJid,
    });
    const sideSessionDir = ensureNamedSessionDir(chatJid, "btw-side");

    const session = this.createSideSession
      ? await this.createSideSession(chatJid, sideSessionDir)
      : await createSessionInDir(sideSessionDir, {
          authStorage: this.authStorage,
          modelRegistry: this.modelRegistry,
          settingsManager: this.settingsManager,
          tools: this.createDefaultTools(),
        });

    this.sidePool.set(chatJid, { session, lastUsed: Date.now() });
    return session;
  }

  private async syncSideSessionFromMain(mainSession: AgentSession, sideSession: AgentSession): Promise<void> {
    try {
      const mainContext = mainSession.sessionManager.buildSessionContext();
      await sideSession.newSession({
        setup: async (sessionManager) => {
          seedRotatedSession(sessionManager, mainContext, {
            sessionName: "BTW",
            model: mainContext.model,
          });
        },
      });
    } catch (err) {
      log.warn("Failed to reseed side session from main context", {
        operation: "sync_side_session_from_main.reseed",
        err,
      });
    }

    const mainModel = mainSession.model;
    const sideModel = sideSession.model;
    if (mainModel && (!sideModel || sideModel.provider !== mainModel.provider || sideModel.id !== mainModel.id)) {
      try {
        await sideSession.setModel(mainModel);
      } catch (err) {
        log.warn("Failed to sync side-session model", {
          operation: "sync_side_session_from_main.model",
          model: `${mainModel.provider}/${mainModel.id}`,
          err,
        });
      }
    }

    try {
      sideSession.setThinkingLevel(mainSession.thinkingLevel);
    } catch (err) {
      log.warn("Failed to sync side-session thinking level", {
        operation: "sync_side_session_from_main.thinking_level",
        err,
      });
    }

    try {
      sideSession.setActiveToolsByName(mainSession.getActiveToolNames());
    } catch (err) {
      log.warn("Failed to sync side-session tool selection", {
        operation: "sync_side_session_from_main.tools",
        err,
      });
    }
  }

  private async applyDefaultModel(session: AgentSession): Promise<void> {
    const provider = this.settingsManager.getDefaultProvider();
    const modelId = this.settingsManager.getDefaultModel();
    if (!provider || !modelId) return;

    // Preserve each session's restored/inherited model. Only apply the shared
    // default when a session has no model at all yet.
    const current = session.model;
    if (current) return;

    const sessionRegistry = (session as AgentSession & { modelRegistry?: ModelRegistry }).modelRegistry ?? this.modelRegistry;
    const resolved = sessionRegistry.find(provider, modelId);
    if (!resolved) return;

    const setModel = (session as { setModel?: (model: typeof resolved) => Promise<void> }).setModel;
    if (typeof setModel !== "function") return;

    try {
      await setModel.call(session, resolved);
    } catch (err) {
      log.warn("Failed to restore model", {
        operation: "apply_default_model",
        model: `${provider}/${modelId}`,
        err,
      });
    }
  }

  private createTurnTracker(
    chatJid: string,
    onTurnComplete?: (turn: TurnOutput) => void
  ): TurnTracker {
    let currentTurnText = "";
    let turnCount = 0;
    let messageHasDelta = false;

    const extractTextFromContent = (content: unknown): string => {
      if (!content) return "";
      if (typeof content === "string") return content;
      if (Array.isArray(content)) {
        return content
          .map((block) => {
            const contentBlock = block as AgentContentBlock;
            if (contentBlock?.type !== "text") return "";
            return typeof contentBlock.text === "string" ? contentBlock.text : "";
          })
          .join("");
      }
      return "";
    };

    const flushTurn = () => {
      const text = currentTurnText.trim();
      if (!text && !onTurnComplete) return;
      if (text || turnCount > 0) {
        const turnAttachments = this.attachments.take(chatJid);
        onTurnComplete?.({
          text,
          attachments: turnAttachments,
        });
        turnCount++;
      }
      currentTurnText = "";
      messageHasDelta = false;
    };

    const handleMessageUpdate = (event: AgentSessionEvent) => {
      if (event.type === "message_update") {
        if (event.assistantMessageEvent.type === "text_start") {
          if (onTurnComplete) {
            // A new text response is starting — flush the previous turn
            flushTurn();
          } else {
            messageHasDelta = false;
          }
        }
        if (event.assistantMessageEvent.type === "text_delta") {
          messageHasDelta = true;
          currentTurnText += event.assistantMessageEvent.delta;
        }
        return;
      }

      if (event.type === "message_end") {
        const message = event.message as { role?: string; content?: unknown } | undefined;
        if (message?.role === "assistant") {
          const text = extractTextFromContent(message.content);
          if (!messageHasDelta && text) {
            currentTurnText = text;
          }
        }
        messageHasDelta = false;
      }
    };

    return {
      handleMessageUpdate,
      getFinalText: () => currentTurnText.trim(),
      getTurnCount: () => turnCount,
    };
  }

  private subscribeToSession(
    session: AgentSession,
    chatJid: string,
    tracker: TurnTracker,
    onEvent?: (event: AgentSessionEvent) => void
  ): () => void {
    return session.subscribe((event: AgentSessionEvent) => {
      const entry = this.pool.get(chatJid);
      if (entry) entry.lastUsed = Date.now();

      if (onEvent) {
        try {
          onEvent(event);
        } catch (err) {
          log.warn("Event handler error", {
            operation: "subscribe_to_session.on_event",
            chatJid,
            err,
          });
        }
      }

      tracker.handleMessageUpdate(event);

      if (event.type === "message_end") {
        recordMessageUsage(chatJid, (event as { message?: unknown }).message);
      }
    });
  }

  private startPromptTimeout(
    session: AgentSession,
    chatJid: string,
    timeoutMs: number
  ): { timeoutId: ReturnType<typeof setTimeout> | null; timedOutRef: { value: boolean } } {
    const timedOutRef = { value: false };
    if (!timeoutMs || timeoutMs <= 0) {
      return { timeoutId: null, timedOutRef };
    }
    const timeoutId = setTimeout(async () => {
      timedOutRef.value = true;
      log.error("Prompt timed out; aborting session", {
        operation: "start_prompt_timeout",
        chatJid,
        timeoutMs,
      });
      await session.abort();
    }, timeoutMs);
    return { timeoutId, timedOutRef };
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
    const now = Date.now();
    for (const [jid, entry] of this.pool) {
      const session = entry.session;
      if (session.isStreaming || session.isBashRunning || session.isCompacting) {
        entry.lastUsed = now;
        continue;
      }
      if (now - entry.lastUsed > IDLE_TTL) {
        log.info("Evicting idle session", {
          operation: "evict_idle.main_session",
          chatJid: jid,
        });
        try {
          session.dispose();
        } catch (err) {
          log.warn("Failed to dispose evicted session", {
            operation: "evict_idle.main_session",
            chatJid: jid,
            err,
          });
        }
        this.pool.delete(jid);
      }
    }
    for (const [jid, entry] of this.sidePool) {
      const session = entry.session;
      if (session.isStreaming || session.isBashRunning || session.isCompacting) {
        entry.lastUsed = now;
        continue;
      }
      if (now - entry.lastUsed > IDLE_TTL) {
        log.info("Evicting idle side session", {
          operation: "evict_idle.side_session",
          chatJid: jid,
        });
        try {
          session.dispose();
        } catch (err) {
          log.warn("Failed to dispose evicted side session", {
            operation: "evict_idle.side_session",
            chatJid: jid,
            err,
          });
        }
        this.sidePool.delete(jid);
      }
    }
  }
}
