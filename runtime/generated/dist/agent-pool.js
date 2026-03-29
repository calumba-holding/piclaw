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
import { AuthStorage, ModelRegistry, SettingsManager, getAgentDir, } from "@mariozechner/pi-coding-agent";
import { SESSIONS_DIR, WORKSPACE_DIR } from "./core/config.js";
import { createTrackedBashOperations } from "./tools/tracked-bash.js";
import { runSidePrompt as runSidePromptInternal } from "./agent-pool/side-prompt-runner.js";
import { runAgentPrompt } from "./agent-pool/run-agent-orchestrator.js";
import { createAgentPoolServices } from "./agent-pool/service-factory.js";
import { createLogger } from "./utils/logger.js";
const log = createLogger("agent-pool");
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
    bashOperations = createTrackedBashOperations();
    attachments;
    sessionBinder;
    toolFactory;
    turnCoordinator;
    sessionManager;
    branchManager;
    runtimeFacade;
    sideStreamSimple;
    constructor(options = {}) {
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
    setSessionBinder(binder) {
        this.sessionBinder.setBinder(binder);
    }
    /** Run a prompt against the persistent session for `chatJid`. */
    async runAgent(prompt, chatJid, options = {}) {
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
    async applyControlCommand(chatJid, command) {
        return this.runtimeFacade.applyControlCommand(chatJid, command);
    }
    async getCurrentModelLabel(chatJid) {
        return this.runtimeFacade.getCurrentModelLabel(chatJid);
    }
    async runSidePrompt(chatJid, prompt, options = {}) {
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
    async getAvailableModels(chatJid) {
        return this.runtimeFacade.getAvailableModels(chatJid);
    }
    /** Return the current context token usage for a chat session, or null if unknown. */
    async getContextUsageForChat(chatJid) {
        return this.runtimeFacade.getContextUsageForChat(chatJid);
    }
    /**
     * Save the current session tree position so it can be restored later.
     * Used by the scheduler to isolate task execution in a side branch.
     */
    async saveSessionPosition(chatJid) {
        return this.runtimeFacade.saveSessionPosition(chatJid);
    }
    /**
     * Restore the session tree to a previously saved position.
     * Navigates back to the saved leaf, leaving the task's output in a side branch.
     */
    async restoreSessionPosition(chatJid, leafId) {
        return this.runtimeFacade.restoreSessionPosition(chatJid, leafId);
    }
    hasProviderModels(provider) {
        return this.runtimeFacade.hasProviderModels(provider);
    }
    registerModelProvider(providerName, config) {
        this.runtimeFacade.registerModelProvider(providerName, config);
    }
    resolveModelInput(input) {
        return this.runtimeFacade.resolveModelInput(input);
    }
    isStreaming(chatJid) {
        return this.runtimeFacade.isStreaming(chatJid);
    }
    isActive(chatJid) {
        return this.runtimeFacade.isActive(chatJid);
    }
    ensureBranchRegistration(chatJid, session) {
        return this.branchManager.ensureBranchRegistration(chatJid, session);
    }
    async renameChatBranch(chatJid, options = {}) {
        return this.branchManager.renameChatBranch(chatJid, options);
    }
    async pruneChatBranch(chatJid) {
        return this.branchManager.pruneChatBranch(chatJid);
    }
    async restoreChatBranch(chatJid, options = {}) {
        return this.branchManager.restoreChatBranch(chatJid, options);
    }
    async createForkedChatBranch(sourceChatJid, options = {}) {
        return this.branchManager.createForkedChatBranch(sourceChatJid, options);
    }
    listActiveChats() {
        return this.branchManager.listActiveChats();
    }
    listKnownChats(rootChatJid, options) {
        return this.branchManager.listKnownChats(rootChatJid, options);
    }
    findActiveChatByAgentName(agentName) {
        return this.branchManager.findActiveChatByAgentName(agentName);
    }
    findChatByAgentName(agentName) {
        return this.branchManager.findChatByAgentName(agentName);
    }
    getAgentHandleForChat(chatJid) {
        return this.branchManager.getAgentHandleForChat(chatJid);
    }
    async queueStreamingMessage(chatJid, text, behavior) {
        return this.runtimeFacade.queueStreamingMessage(chatJid, text, behavior);
    }
    /** Remove one queued follow-up message (first content match) from an active session queue. */
    async removeQueuedFollowupMessage(chatJid, queuedContent) {
        return this.runtimeFacade.removeQueuedFollowupMessage(chatJid, queuedContent);
    }
    /** Execute a raw slash command in the AgentSession (extension commands). */
    async applySlashCommand(chatJid, rawText) {
        return this.runtimeFacade.applySlashCommand(chatJid, rawText);
    }
    /** Gracefully shut down all sessions. */
    async shutdown() {
        if (this.cleanupTimer) {
            clearInterval(this.cleanupTimer);
            this.cleanupTimer = null;
        }
        await this.sessionManager.shutdown();
    }
    // ── internal ────────────────────────────────────────────
    async getOrCreate(chatJid) {
        return this.sessionManager.getOrCreate(chatJid);
    }
    async getOrCreateSide(chatJid) {
        return this.sessionManager.getOrCreateSide(chatJid);
    }
    async syncSideSessionFromMain(mainSession, sideSession) {
        return this.sessionManager.syncSideSessionFromMain(mainSession, sideSession);
    }
    evictIdle() {
        this.sessionManager.evictIdle(IDLE_TTL);
    }
}
