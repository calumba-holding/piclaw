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
import { AuthStorage, createBashTool, createEditTool, createReadTool, createWriteTool, ModelRegistry, SettingsManager, getAgentDir, } from "@mariozechner/pi-coding-agent";
import { applyControlCommand } from "./agent-control/index.js";
import { AGENT_TIMEOUT, ASSISTANT_NAME, SESSION_AUTO_ROTATE, SESSION_MAX_SIZE_BYTES, SESSIONS_DIR, WORKSPACE_DIR } from "./core/config.js";
import { detectChannel } from "./router.js";
import { createTrackedBashOperations } from "./tools/tracked-bash.js";
import { getAttachmentRegistry } from "./agent-pool/attachments.js";
import { writeAgentLog } from "./agent-pool/logging.js";
import { pruneOrphanToolResults } from "./agent-pool/orphan-tool-results.js";
import { createDefaultSession, createSessionInDir, ensureNamedSessionDir, ensureSessionDir } from "./agent-pool/session.js";
import { executeSlashCommand } from "./agent-pool/slash-command.js";
import { getProviderUsage } from "./agent-pool/provider-usage.js";
import { recordMessageUsage } from "./agent-pool/usage.js";
import { resolveModelLabel } from "./utils/model-utils.js";
import { withChatContext } from "./core/chat-context.js";
import { getSessionFileSize, rotateSession, seedRotatedSession, forcePersistSessionFile } from "./session-rotation.js";
import { archiveChatBranch, ensureChatBranch, getChatBranchByAgentName, getChatBranchByChatJid, listChatBranches, renameChatBranchIdentity, restoreChatBranchIdentity, storeChatMetadata, } from "./db.js";
import { createUuid } from "./utils/ids.js";
function extractAssistantText(message) {
    if (!Array.isArray(message?.content))
        return "";
    return message.content
        .map((block) => block && typeof block === "object" && block.type === "text"
        ? String(block.text ?? "")
        : "")
        .join("")
        .trim();
}
function extractAssistantThinking(message) {
    if (!Array.isArray(message?.content))
        return "";
    return message.content
        .map((block) => block && typeof block === "object" && block.type === "thinking"
        ? String(block.thinking ?? "")
        : "")
        .join("")
        .trim();
}
function toSideReasoning(level) {
    return level === "minimal" || level === "low" || level === "medium" || level === "high" || level === "xhigh"
        ? level
        : undefined;
}
function normalizeAgentHandlePart(value) {
    return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9_-]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .replace(/-{2,}/g, "-");
}
function deriveAgentHandle(chatJid, sessionName) {
    const sessionHandle = sessionName ? normalizeAgentHandlePart(sessionName) : "";
    if (sessionHandle)
        return sessionHandle;
    const jidTail = chatJid.split(/[:/]/).filter(Boolean).pop() || chatJid;
    // Use configured assistant name for the root "default" branch
    // instead of the generic "default" derived from web:default.
    if (jidTail === "default") {
        const configHandle = normalizeAgentHandlePart(ASSISTANT_NAME || "");
        if (configHandle)
            return configHandle;
    }
    const jidHandle = normalizeAgentHandlePart(jidTail);
    if (jidHandle)
        return jidHandle;
    return "agent";
}
function buildForkedChatJid(sourceChatJid) {
    const root = sourceChatJid.startsWith("web:") ? sourceChatJid : `web:${sourceChatJid}`;
    return `${root}:branch:${createUuid("chat").split("-").pop()}`;
}
function createVolatileBranchRecord(chatJid, session) {
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
function getStableForkSeed(sourceSession, stableLeafId) {
    const branchEntries = stableLeafId === null
        ? []
        : (typeof sourceSession.sessionManager?.getBranch === "function"
            ? sourceSession.sessionManager.getBranch(stableLeafId)
            : []);
    let sessionName = null;
    let model = null;
    let thinkingLevel = null;
    for (const entry of branchEntries) {
        if (entry?.type === "session_info" && typeof entry.name === "string" && entry.name.trim()) {
            sessionName = entry.name.trim();
        }
        else if (entry?.type === "model_change" && typeof entry.provider === "string" && typeof entry.modelId === "string") {
            model = { provider: entry.provider, modelId: entry.modelId };
        }
        else if (entry?.type === "thinking_level_change" && typeof entry.thinkingLevel === "string") {
            thinkingLevel = entry.thinkingLevel;
        }
        else if (entry?.type === "message" && entry.message?.role === "assistant" && typeof entry.message?.provider === "string" && typeof entry.message?.model === "string") {
            model = { provider: entry.message.provider, modelId: entry.message.model };
        }
    }
    return { branchEntries, sessionName, model, thinkingLevel };
}
function seedSessionManagerFromBranchEntries(sessionManager, branchEntries, fallback) {
    if (!Array.isArray(branchEntries) || branchEntries.length === 0) {
        if (fallback.sessionName?.trim()) {
            sessionManager.appendSessionInfo(fallback.sessionName.trim());
        }
        if (fallback.model) {
            sessionManager.appendModelChange(fallback.model.provider, fallback.model.modelId);
        }
        return;
    }
    const sourceToNewId = new Map();
    for (const entry of branchEntries) {
        let newId = null;
        if (entry?.type === "message" && entry.message) {
            newId = sessionManager.appendMessage(entry.message);
        }
        else if (entry?.type === "thinking_level_change" && typeof entry.thinkingLevel === "string") {
            newId = sessionManager.appendThinkingLevelChange(entry.thinkingLevel);
        }
        else if (entry?.type === "model_change" && typeof entry.provider === "string" && typeof entry.modelId === "string") {
            newId = sessionManager.appendModelChange(entry.provider, entry.modelId);
        }
        else if (entry?.type === "compaction" && typeof entry.summary === "string") {
            const firstKeptEntryId = sourceToNewId.get(entry.firstKeptEntryId) || sourceToNewId.get(branchEntries[0]?.id) || "rotated-context";
            newId = sessionManager.appendCompaction(entry.summary, firstKeptEntryId, entry.tokensBefore ?? 0, entry.details, entry.fromHook);
        }
        else if (entry?.type === "session_info" && typeof entry.name === "string" && entry.name.trim()) {
            newId = sessionManager.appendSessionInfo(entry.name.trim());
        }
        else if (entry?.type === "custom_message" && typeof entry.customType === "string") {
            newId = sessionManager.appendCustomMessageEntry(entry.customType, entry.content, entry.display, entry.details);
        }
        else if (entry?.type === "custom_entry" && typeof entry.customType === "string") {
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
    pool = new Map();
    sidePool = new Map();
    activeForkBaseLeafByChat = new Map();
    cleanupTimer = null;
    // Shared across all sessions (expensive to create, safe to reuse)
    authStorage;
    modelRegistry;
    settingsManager = SettingsManager.create(WORKSPACE_DIR, getAgentDir());
    logsDir = join(WORKSPACE_DIR, "logs");
    createSession;
    createSideSession;
    sessionBinder;
    bashOperations = createTrackedBashOperations();
    attachments = getAttachmentRegistry();
    sideStreamSimple;
    constructor(options = {}) {
        this.createSession = options.createSession;
        this.createSideSession = options.createSideSession;
        this.authStorage = AuthStorage.create();
        this.modelRegistry = options.modelRegistry ?? new ModelRegistry(this.authStorage);
        this.sideStreamSimple = options.sideStreamSimple;
        mkdirSync(SESSIONS_DIR, { recursive: true });
        mkdirSync(this.logsDir, { recursive: true });
        this.cleanupTimer = setInterval(() => this.evictIdle(), CLEANUP_INTERVAL);
    }
    setSessionBinder(binder) {
        this.sessionBinder = binder;
        if (!binder)
            return;
        for (const [jid, entry] of this.pool) {
            try {
                void binder(entry.session, jid);
            }
            catch (err) {
                console.error(`[agent-pool] Failed to bind session ${jid}:`, err);
            }
        }
    }
    /** Attempt safe automatic session rotation before the next prompt when configured. */
    async maybeAutoRotateSession(session, chatJid) {
        const autoRotateEnabled = SESSION_AUTO_ROTATE
            || ["1", "true", "yes", "on"].includes((process.env.PICLAW_SESSION_AUTO_ROTATE || "").trim().toLowerCase());
        if (!autoRotateEnabled)
            return;
        const envThresholdMb = parseInt(process.env.PICLAW_SESSION_MAX_SIZE_MB || "", 10);
        const thresholdBytes = Number.isFinite(envThresholdMb) && envThresholdMb > 0
            ? envThresholdMb * 1024 * 1024
            : SESSION_MAX_SIZE_BYTES;
        const sessionFileSize = getSessionFileSize(session.sessionFile);
        if (sessionFileSize === null || sessionFileSize < thresholdBytes)
            return;
        const result = await rotateSession(session, { reason: "automatic" });
        if (result.status === "success") {
            console.log(`[agent-pool] Auto-rotated oversized session ${chatJid}: ${result.previousSize ?? sessionFileSize} -> ${result.nextSize ?? "unknown"}`);
            return;
        }
        console.warn(`[agent-pool] Auto-rotation skipped for ${chatJid}: ${result.message}`);
    }
    /** Run a prompt against the persistent session for `chatJid`. */
    async runAgent(prompt, chatJid, options = {}) {
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
            console.log(`[agent-pool] Prompting session ${chatJid} (${prompt.length} chars)`);
            const tracker = this.createTurnTracker(chatJid, options.onTurnComplete);
            const unsub = this.subscribeToSession(session, chatJid, tracker, options.onEvent);
            const timeoutMs = typeof options.timeoutMs === "number" ? options.timeoutMs : AGENT_TIMEOUT;
            const { timeoutId, timedOutRef } = this.startPromptTimeout(session, chatJid, timeoutMs);
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
                        }
                        else {
                            idleTicks = 0;
                        }
                        await Bun.sleep(50);
                    }
                }
                finally {
                    if (timeoutId)
                        clearTimeout(timeoutId);
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
                    return { status: "error", result: null, error: `Timed out after ${timeoutMs}ms` };
                }
                console.log(`[agent-pool] Done in ${duration}ms (${finalText.length} chars, ${tracker.getTurnCount() + 1} turns, session ${chatJid})`);
                return {
                    status: "success",
                    result: finalText || null,
                    attachments: finalAttachments.length ? finalAttachments : undefined,
                };
            });
        }
        catch (err) {
            this.attachments.clear(chatJid);
            const duration = Date.now() - startTime;
            const errorMsg = err instanceof Error ? err.message : String(err);
            writeAgentLog(this.logsDir, chatJid, duration, false, null, errorMsg);
            console.error(`[agent-pool] Error for ${chatJid}:`, errorMsg);
            return { status: "error", result: null, error: errorMsg };
        }
        finally {
            this.activeForkBaseLeafByChat.delete(chatJid);
        }
    }
    async applyControlCommand(chatJid, command) {
        const session = await this.getOrCreate(chatJid);
        const channel = detectChannel(chatJid);
        return await withChatContext(chatJid, channel, () => applyControlCommand(session, this.modelRegistry, command));
    }
    async getCurrentModelLabel(chatJid) {
        const session = await this.getOrCreate(chatJid);
        const model = session.model;
        return model ? `${model.provider}/${model.id}` : null;
    }
    async runSidePrompt(chatJid, prompt, options = {}) {
        const session = await this.getOrCreate(chatJid);
        const model = session.model;
        if (!model) {
            return { status: "error", result: null, thinking: null, error: "No active model selected.", model: null };
        }
        if (this.sideStreamSimple) {
            const apiKey = await this.modelRegistry.getApiKey(model);
            if (!apiKey) {
                return {
                    status: "error",
                    result: null,
                    thinking: null,
                    error: `No credentials available for ${model.provider}/${model.id}.`,
                    model: `${model.provider}/${model.id}`,
                };
            }
            const stream = this.sideStreamSimple(model, {
                ...(options.systemPrompt ? { systemPrompt: options.systemPrompt } : {}),
                messages: [
                    {
                        role: "user",
                        content: [{ type: "text", text: prompt }],
                        timestamp: Date.now(),
                    },
                ],
            }, {
                apiKey,
                reasoning: toSideReasoning(session.thinkingLevel),
                signal: options.signal,
            });
            let text = "";
            let thinking = "";
            let finalMessage = null;
            for await (const event of stream) {
                options.onEvent?.(event);
                if (event.type === "text_delta") {
                    text += event.delta;
                    options.onTextDelta?.(event.delta);
                }
                else if (event.type === "thinking_delta") {
                    thinking += event.delta;
                    options.onThinkingDelta?.(event.delta);
                }
                else if (event.type === "done") {
                    finalMessage = event.message;
                }
                else if (event.type === "error") {
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
            }
            catch (err) {
                console.warn(`[agent-pool] Failed to persist side-prompt usage for ${chatJid}:`, err);
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
        let finalMessage = null;
        let timedOut = false;
        const channel = detectChannel(chatJid);
        const timeoutMs = AGENT_TIMEOUT;
        let timeoutId = null;
        const unsubscribe = sideSession.subscribe((event) => {
            options.onEvent?.(event);
            if (event.type === "message_update") {
                const messageEvent = event.assistantMessageEvent;
                if (messageEvent.type === "text_start") {
                    if (sawText && !text.endsWith("\n\n"))
                        text += "\n\n";
                }
                else if (messageEvent.type === "text_delta") {
                    sawText = true;
                    text += messageEvent.delta;
                    options.onTextDelta?.(messageEvent.delta);
                }
                else if (messageEvent.type === "thinking_start") {
                    if (sawThinking && !thinking.endsWith("\n\n"))
                        thinking += "\n\n";
                }
                else if (messageEvent.type === "thinking_delta") {
                    sawThinking = true;
                    thinking += messageEvent.delta;
                    options.onThinkingDelta?.(messageEvent.delta);
                }
                return;
            }
            if (event.type === "message_end") {
                const message = event.message;
                if (message?.role === "assistant") {
                    finalMessage = message;
                    try {
                        recordMessageUsage(chatJid, message);
                    }
                    catch (err) {
                        console.warn(`[agent-pool] Failed to persist side-prompt usage for ${chatJid}:`, err);
                    }
                }
            }
        });
        const abortHandler = () => {
            void sideSession.abort().catch(() => { });
        };
        options.signal?.addEventListener("abort", abortHandler, { once: true });
        if (timeoutMs > 0) {
            timeoutId = setTimeout(() => {
                timedOut = true;
                void sideSession.abort().catch(() => { });
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
                    }
                    else {
                        idleTicks = 0;
                    }
                    await Bun.sleep(50);
                }
            });
        }
        catch (err) {
            if (timeoutId)
                clearTimeout(timeoutId);
            unsubscribe();
            options.signal?.removeEventListener("abort", abortHandler);
            return {
                status: "error",
                result: null,
                thinking: thinking || null,
                error: timedOut ? `Timed out after ${timeoutMs}ms` : (err instanceof Error ? err.message : String(err)),
                model: `${model.provider}/${model.id}`,
                stopReason: timedOut ? "aborted" : "error",
            };
        }
        if (timeoutId)
            clearTimeout(timeoutId);
        unsubscribe();
        options.signal?.removeEventListener("abort", abortHandler);
        if (!finalMessage) {
            const fallbackText = text || sideSession.getLastAssistantText() || null;
            if (!fallbackText) {
                return {
                    status: "error",
                    result: null,
                    thinking: thinking || null,
                    error: timedOut ? `Timed out after ${timeoutMs}ms` : "Side prompt finished without a response.",
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
        const completedMessage = finalMessage;
        if (timedOut || completedMessage.stopReason === "error" || completedMessage.stopReason === "aborted") {
            return {
                status: "error",
                result: null,
                thinking: thinking || extractAssistantThinking(completedMessage) || null,
                error: timedOut ? `Timed out after ${timeoutMs}ms` : (completedMessage.errorMessage || "Side prompt failed."),
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
    async getAvailableModels(chatJid) {
        const session = await this.getOrCreate(chatJid);
        const registry = session.modelRegistry ?? this.modelRegistry;
        const available = registry.getAvailable();
        const models = available.map((model) => `${model.provider}/${model.id}`);
        const currentModel = session.model ? `${session.model.provider}/${session.model.id}` : null;
        const thinkingLevel = session.thinkingLevel ?? null;
        const supportsThinking = typeof session.supportsThinking === "function"
            ? session.supportsThinking()
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
    async getContextUsageForChat(chatJid) {
        const entry = this.pool.get(chatJid);
        if (!entry)
            return null;
        return entry.session.getContextUsage() ?? null;
    }
    /**
     * Save the current session tree position so it can be restored later.
     * Used by the scheduler to isolate task execution in a side branch.
     */
    async saveSessionPosition(chatJid) {
        const session = await this.getOrCreate(chatJid);
        return session.sessionManager.getLeafId();
    }
    /**
     * Restore the session tree to a previously saved position.
     * Navigates back to the saved leaf, leaving the task's output in a side branch.
     */
    async restoreSessionPosition(chatJid, leafId) {
        if (leafId === null)
            return;
        const session = await this.getOrCreate(chatJid);
        const currentLeaf = session.sessionManager.getLeafId();
        if (currentLeaf === leafId)
            return; // already there
        try {
            await session.navigateTree(leafId);
        }
        catch (err) {
            console.error(`[agent-pool] Failed to restore session position for ${chatJid}:`, err);
        }
    }
    hasProviderModels(provider) {
        return this.modelRegistry.getAll().some((model) => model.provider === provider);
    }
    registerModelProvider(providerName, config) {
        this.modelRegistry.registerProvider(providerName, config);
    }
    resolveModelInput(input) {
        return resolveModelLabel(this.modelRegistry, input);
    }
    isStreaming(chatJid) {
        return this.pool.get(chatJid)?.session.isStreaming ?? false;
    }
    isActive(chatJid) {
        const session = this.pool.get(chatJid)?.session;
        if (!session)
            return false;
        return Boolean(session.isStreaming || session.isCompacting || session.isRetrying || session.isBashRunning);
    }
    ensureBranchRegistration(chatJid, session) {
        try {
            const existing = getChatBranchByChatJid(chatJid);
            if (existing)
                return existing;
            const created = ensureChatBranch({
                chat_jid: chatJid,
                agent_name: deriveAgentHandle(chatJid, session?.sessionName?.trim() || null),
            });
            storeChatMetadata(chatJid, new Date().toISOString(), created.agent_name || chatJid);
            return created;
        }
        catch {
            return createVolatileBranchRecord(chatJid, session);
        }
    }
    async renameChatBranch(chatJid, options = {}) {
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
            }
            catch { }
        }
        return renamed;
    }
    async pruneChatBranch(chatJid) {
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
            }
            catch { }
            this.pool.delete(chatJid);
        }
        const sideEntry = this.sidePool.get(chatJid);
        if (sideEntry) {
            try {
                sideEntry.session.dispose();
            }
            catch { }
            this.sidePool.delete(chatJid);
        }
        this.activeForkBaseLeafByChat.delete(chatJid);
        return archived;
    }
    async restoreChatBranch(chatJid, options = {}) {
        const restored = restoreChatBranchIdentity({
            chat_jid: chatJid,
            ...(options.agentName !== undefined ? { agent_name: options.agentName } : {}),
        });
        // Warm session registration for restored branches so switching is immediate.
        try {
            await this.getOrCreate(chatJid);
        }
        catch {
            // Keep restore resilient even if session warmup fails.
        }
        return restored;
    }
    async createForkedChatBranch(sourceChatJid, options = {}) {
        const sourceSession = await this.getOrCreate(sourceChatJid);
        const sourceIsActive = Boolean(sourceSession.isStreaming || sourceSession.isCompacting || sourceSession.isRetrying || sourceSession.isBashRunning);
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
            }
            catch { }
        }
        try {
            targetSession.setThinkingLevel((stableSeed?.thinkingLevel || sourceContext.thinkingLevel || sourceSession.thinkingLevel));
        }
        catch { }
        try {
            targetSession.setSessionName(setupName);
        }
        catch { }
        forcePersistSessionFile(targetSession);
        return ensureChatBranch({
            chat_jid: nextChatJid,
            root_chat_jid: nextBranch.root_chat_jid,
            parent_branch_id: nextBranch.parent_branch_id,
            agent_name: nextBranch.agent_name,
        });
    }
    listActiveChats() {
        const chats = [...this.pool.entries()]
            .flatMap(([chatJid, entry]) => {
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
                    display_name: null,
                    archived_at: branch.archived_at ?? null,
                    session_id: entry.session.sessionId,
                    session_name: entry.session.sessionName?.trim() || null,
                    model: entry.session.model ? `${entry.session.model.provider}/${entry.session.model.id}` : null,
                    is_active: Boolean(entry.session.isStreaming || entry.session.isCompacting || entry.session.isRetrying || entry.session.isBashRunning),
                    has_side_session: this.sidePool.has(chatJid),
                }];
        })
            .sort((a, b) => {
            if (a.is_active !== b.is_active)
                return a.is_active ? -1 : 1;
            return a.chat_jid.localeCompare(b.chat_jid);
        });
        return chats;
    }
    listKnownChats(rootChatJid, options) {
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
                    display_name: null,
                    archived_at: branch.archived_at ?? null,
                    session_id: active?.session_id ?? null,
                    session_name: active?.session_name ?? null,
                    model: active?.model ?? null,
                    is_active: active?.is_active ?? false,
                    has_side_session: active?.has_side_session ?? false,
                };
            })
                .sort((a, b) => {
                if (a.chat_jid === rootChatJid && b.chat_jid !== rootChatJid)
                    return -1;
                if (b.chat_jid === rootChatJid && a.chat_jid !== rootChatJid)
                    return 1;
                if (Boolean(a.archived_at) !== Boolean(b.archived_at))
                    return a.archived_at ? 1 : -1;
                if (a.is_active !== b.is_active)
                    return a.is_active ? -1 : 1;
                return a.chat_jid.localeCompare(b.chat_jid);
            });
        }
        catch {
            return activeChats;
        }
    }
    findActiveChatByAgentName(agentName) {
        const normalized = normalizeAgentHandlePart(agentName);
        if (!normalized)
            return null;
        return this.listActiveChats().find((chat) => chat.agent_name === normalized) ?? null;
    }
    findChatByAgentName(agentName) {
        const normalized = normalizeAgentHandlePart(agentName);
        if (!normalized)
            return null;
        try {
            const branch = getChatBranchByAgentName(normalized);
            if (branch)
                return { chat_jid: branch.chat_jid, agent_name: branch.agent_name };
        }
        catch { }
        const active = this.listActiveChats().find((chat) => chat.agent_name === normalized) ?? null;
        return active ? { chat_jid: active.chat_jid, agent_name: active.agent_name } : null;
    }
    getAgentHandleForChat(chatJid) {
        try {
            return getChatBranchByChatJid(chatJid)?.agent_name ?? deriveAgentHandle(chatJid);
        }
        catch {
            return deriveAgentHandle(chatJid);
        }
    }
    async queueStreamingMessage(chatJid, text, behavior) {
        const session = await this.getOrCreate(chatJid);
        if (!session.isStreaming)
            return { queued: false };
        const channel = detectChannel(chatJid);
        try {
            return await withChatContext(chatJid, channel, async () => {
                await session.prompt(text, { streamingBehavior: behavior });
                return { queued: true };
            });
        }
        catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            return { queued: false, error: message };
        }
    }
    /** Remove one queued follow-up message (first content match) from an active session queue. */
    async removeQueuedFollowupMessage(chatJid, queuedContent) {
        const session = await this.getOrCreate(chatJid);
        if (!session.isStreaming)
            return false;
        const followups = [...session.getFollowUpMessages()];
        if (followups.length === 0)
            return false;
        const normalized = typeof queuedContent === "string" ? queuedContent.trim() : "";
        let removeIndex = -1;
        if (normalized) {
            removeIndex = followups.findIndex((item) => item === queuedContent || item.trim() === normalized);
        }
        if (removeIndex < 0)
            removeIndex = 0;
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
        }
        catch (error) {
            console.warn(`[agent-pool] Failed to remove queued follow-up for ${chatJid}:`, error);
            return false;
        }
    }
    /** Execute a raw slash command in the AgentSession (extension commands). */
    async applySlashCommand(chatJid, rawText) {
        this.attachments.clear(chatJid);
        const session = await this.getOrCreate(chatJid);
        const channel = detectChannel(chatJid);
        const result = await withChatContext(chatJid, channel, () => executeSlashCommand(session, chatJid, rawText));
        this.attachments.clear(chatJid);
        return result;
    }
    /** Gracefully shut down all sessions. */
    async shutdown() {
        if (this.cleanupTimer) {
            clearInterval(this.cleanupTimer);
            this.cleanupTimer = null;
        }
        for (const [jid, entry] of this.pool) {
            try {
                entry.session.dispose();
                console.log(`[agent-pool] Disposed session ${jid}`);
            }
            catch (err) {
                console.error(`[agent-pool] Error disposing ${jid}:`, err);
            }
        }
        for (const [jid, entry] of this.sidePool) {
            try {
                entry.session.dispose();
                console.log(`[agent-pool] Disposed side session ${jid}`);
            }
            catch (err) {
                console.error(`[agent-pool] Error disposing side session ${jid}:`, err);
            }
        }
        this.pool.clear();
        this.sidePool.clear();
    }
    // ── internal ────────────────────────────────────────────
    createDefaultTools() {
        return [
            createReadTool(WORKSPACE_DIR),
            createBashTool(WORKSPACE_DIR, { operations: this.bashOperations }),
            createEditTool(WORKSPACE_DIR),
            createWriteTool(WORKSPACE_DIR),
        ];
    }
    async getOrCreate(chatJid) {
        const existing = this.pool.get(chatJid);
        if (existing) {
            existing.lastUsed = Date.now();
            return existing.session;
        }
        console.log(`[agent-pool] Creating new session for ${chatJid}`);
        const chatSessionDir = ensureSessionDir(chatJid);
        if (this.createSession) {
            const session = await this.createSession(chatJid, chatSessionDir);
            this.pool.set(chatJid, { session, lastUsed: Date.now() });
            await this.applyDefaultModel(session);
            await this.bindSession(session, chatJid);
            this.ensureBranchRegistration(chatJid, session);
            console.log(`[agent-pool] Session ready for ${chatJid} (pool size: ${this.pool.size})`);
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
        console.log(`[agent-pool] Session ready for ${chatJid} (pool size: ${this.pool.size})`);
        return session;
    }
    async getOrCreateSide(chatJid) {
        const existing = this.sidePool.get(chatJid);
        if (existing) {
            existing.lastUsed = Date.now();
            return existing.session;
        }
        console.log(`[agent-pool] Creating new side session for ${chatJid}`);
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
    async syncSideSessionFromMain(mainSession, sideSession) {
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
        }
        catch (err) {
            console.warn(`[agent-pool] Failed to reseed side session from main context:`, err);
        }
        const mainModel = mainSession.model;
        const sideModel = sideSession.model;
        if (mainModel && (!sideModel || sideModel.provider !== mainModel.provider || sideModel.id !== mainModel.id)) {
            try {
                await sideSession.setModel(mainModel);
            }
            catch (err) {
                console.warn(`[agent-pool] Failed to sync side-session model ${mainModel.provider}/${mainModel.id}:`, err);
            }
        }
        try {
            sideSession.setThinkingLevel(mainSession.thinkingLevel);
        }
        catch { }
        try {
            sideSession.setActiveToolsByName(mainSession.getActiveToolNames());
        }
        catch { }
    }
    async applyDefaultModel(session) {
        const provider = this.settingsManager.getDefaultProvider();
        const modelId = this.settingsManager.getDefaultModel();
        if (!provider || !modelId)
            return;
        // Preserve each session's restored/inherited model. Only apply the shared
        // default when a session has no model at all yet.
        const current = session.model;
        if (current)
            return;
        const sessionRegistry = session.modelRegistry ?? this.modelRegistry;
        const resolved = sessionRegistry.find(provider, modelId);
        if (!resolved)
            return;
        const setModel = session.setModel;
        if (typeof setModel !== "function")
            return;
        try {
            await setModel.call(session, resolved);
        }
        catch (err) {
            console.warn(`[agent-pool] Failed to restore model ${provider}/${modelId}:`, err);
        }
    }
    createTurnTracker(chatJid, onTurnComplete) {
        let currentTurnText = "";
        let turnCount = 0;
        let messageHasDelta = false;
        const extractTextFromContent = (content) => {
            if (!content)
                return "";
            if (typeof content === "string")
                return content;
            if (Array.isArray(content)) {
                return content
                    .map((block) => {
                    const contentBlock = block;
                    if (contentBlock?.type !== "text")
                        return "";
                    return typeof contentBlock.text === "string" ? contentBlock.text : "";
                })
                    .join("");
            }
            return "";
        };
        const flushTurn = () => {
            const text = currentTurnText.trim();
            if (!text && !onTurnComplete)
                return;
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
        const handleMessageUpdate = (event) => {
            if (event.type === "message_update") {
                if (event.assistantMessageEvent.type === "text_start") {
                    if (onTurnComplete) {
                        // A new text response is starting — flush the previous turn
                        flushTurn();
                    }
                    else {
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
                const message = event.message;
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
    subscribeToSession(session, chatJid, tracker, onEvent) {
        return session.subscribe((event) => {
            const entry = this.pool.get(chatJid);
            if (entry)
                entry.lastUsed = Date.now();
            if (onEvent) {
                try {
                    onEvent(event);
                }
                catch (err) {
                    console.warn("[agent-pool] Event handler error:", err);
                }
            }
            tracker.handleMessageUpdate(event);
            if (event.type === "message_end") {
                recordMessageUsage(chatJid, event.message);
            }
        });
    }
    startPromptTimeout(session, chatJid, timeoutMs) {
        const timedOutRef = { value: false };
        if (!timeoutMs || timeoutMs <= 0) {
            return { timeoutId: null, timedOutRef };
        }
        const timeoutId = setTimeout(async () => {
            timedOutRef.value = true;
            console.error(`[agent-pool] Timeout after ${timeoutMs}ms for ${chatJid}`);
            await session.abort();
        }, timeoutMs);
        return { timeoutId, timedOutRef };
    }
    async bindSession(session, chatJid) {
        if (!this.sessionBinder)
            return;
        try {
            await this.sessionBinder(session, chatJid);
        }
        catch (err) {
            console.error(`[agent-pool] Failed to bind session ${chatJid}:`, err);
        }
    }
    evictIdle() {
        const now = Date.now();
        for (const [jid, entry] of this.pool) {
            const session = entry.session;
            if (session.isStreaming || session.isBashRunning || session.isCompacting) {
                entry.lastUsed = now;
                continue;
            }
            if (now - entry.lastUsed > IDLE_TTL) {
                console.log(`[agent-pool] Evicting idle session ${jid}`);
                try {
                    session.dispose();
                }
                catch { }
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
                console.log(`[agent-pool] Evicting idle side session ${jid}`);
                try {
                    session.dispose();
                }
                catch { }
                this.sidePool.delete(jid);
            }
        }
    }
}
