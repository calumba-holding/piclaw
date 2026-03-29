/**
 * channels/web.ts – Web channel: HTTP server, SSE, and API endpoints.
 *
 * The WebChannel class is the central coordinator for the web UI. It:
 *   - Starts the HTTP(S) server (Bun.serve) with TLS and auth support.
 *   - Routes requests to handlers (posts, media, agent, workspace).
 *   - Manages SSE connections for real-time event streaming to browsers.
 *   - Bridges agent events (drafts, thoughts, status) to the UI.
 *   - Handles inbound messages and control commands from the web compose box.
 *
 * Consumers:
 *   - runtime.ts creates and starts the WebChannel.
 *   - The web UI (web/src/) connects via SSE and REST API.
 */
import { WebauthnChallengeTracker } from "./web/auth/webauthn-challenges.js";
import { TotpFailureTracker } from "./web/auth/totp-failure-tracker.js";
import { ResponseService } from "./web/http/response-service.js";
import { QueuedFollowupLifecycleService } from "./web/runtime/queued-followup-lifecycle-service.js";
import { createWebChannelHttpSurfaceService, getWebChannelHttpSurfaceService, } from "./web/core/web-channel-http-surface-service.js";
import { createWebChannelRuntimePublicSurfaceService, getWebChannelRuntimePublicSurfaceService, } from "./web/core/web-channel-runtime-public-surface-service.js";
import { createWebChannelLifecycleSpecialSurfaceService, getWebChannelLifecycleSpecialSurfaceService, } from "./web/core/web-channel-lifecycle-special-surface-service.js";
import { TerminalSessionService } from "./web/terminal/terminal-session-service.js";
import { VncSessionService } from "./web/vnc/vnc-session-service.js";
import { initializeWebChannelConstructor } from "./web/core/web-channel-constructor-factory.js";
const DEFAULT_CHAT_JID = "web:default";
const DEFAULT_AGENT_ID = "default";
const STATE_KEY = "last_agent_timestamp_web";
function getHttpSurfaceService(channel) {
    return getWebChannelHttpSurfaceService(channel);
}
function getRuntimePublicSurfaceService(channel) {
    return getWebChannelRuntimePublicSurfaceService(channel);
}
function getLifecycleSpecialSurfaceService(channel) {
    return getWebChannelLifecycleSpecialSurfaceService(channel, { defaultChatJid: DEFAULT_CHAT_JID, defaultAgentId: DEFAULT_AGENT_ID });
}
/** Web channel: HTTP/SSE server, API endpoints, and agent event bridge. */
export class WebChannel {
    queue;
    agentPool;
    remoteInterop;
    responses = new ResponseService();
    requestRouter;
    endpointContexts;
    pendingLinkPreviews = new Set();
    workspaceVisible = false;
    workspaceShowHidden = false;
    queuedFollowupLifecycle = new QueuedFollowupLifecycleService();
    interactionBroadcaster;
    lastCommandInteractionId = null;
    webauthnChallenges = new WebauthnChallengeTracker();
    totpFailureTracker = new TotpFailureTracker();
    authGateway;
    terminalService = new TerminalSessionService();
    vncService = new VncSessionService();
    sessionBroadcast;
    runtimeState;
    serverLifecycleGateway;
    terminalVncHttpService;
    adaptiveCardSidePromptService;
    peerMessageRelayService;
    httpSurfaceService;
    runtimePublicSurfaceService;
    lifecycleSpecialSurfaceService;
    messageProcessingStorageService;
    messageWriteService;
    runtimeFollowupFacade;
    endpointFacade;
    controlPlaneService;
    constructor(opts) {
        initializeWebChannelConstructor(this, opts, {
            defaultChatJid: DEFAULT_CHAT_JID,
            defaultAgentId: DEFAULT_AGENT_ID,
            stateKey: STATE_KEY,
        });
        this.httpSurfaceService = createWebChannelHttpSurfaceService(this);
        this.runtimePublicSurfaceService = createWebChannelRuntimePublicSurfaceService(this);
        this.lifecycleSpecialSurfaceService = createWebChannelLifecycleSpecialSurfaceService(this, { defaultChatJid: DEFAULT_CHAT_JID, defaultAgentId: DEFAULT_AGENT_ID });
    }
    get sse() {
        return getRuntimePublicSurfaceService(this).sse;
    }
    get uiBridge() {
        return getRuntimePublicSurfaceService(this).uiBridge;
    }
    get server() {
        return getLifecycleSpecialSurfaceService(this).server;
    }
    async start() {
        await getLifecycleSpecialSurfaceService(this).start();
    }
    async stop() {
        await getLifecycleSpecialSurfaceService(this).stop();
    }
    async sendMessage(chatJid, text, options) {
        await getRuntimePublicSurfaceService(this).sendMessage(chatJid, text, options);
    }
    async postDashboardWidget(chatJid, options) {
        await getRuntimePublicSurfaceService(this).postDashboardWidget(chatJid, options);
    }
    queueFollowupPlaceholder(chatJid, text, threadId, queuedContent) {
        return getRuntimePublicSurfaceService(this).queueFollowupPlaceholder(chatJid, text, threadId, queuedContent);
    }
    enqueueQueuedFollowupItem(chatJid, rowId, queuedContent, threadId, queuedAt, extras) {
        return getRuntimePublicSurfaceService(this).enqueueQueuedFollowupItem(chatJid, rowId, queuedContent, threadId, queuedAt, extras);
    }
    consumeQueuedFollowupItem(chatJid) {
        return getRuntimePublicSurfaceService(this).consumeQueuedFollowupItem(chatJid);
    }
    prependQueuedFollowupItem(chatJid, item) {
        getRuntimePublicSurfaceService(this).prependQueuedFollowupItem(chatJid, item);
    }
    consumeQueuedFollowupPlaceholder(chatJid) {
        return getRuntimePublicSurfaceService(this).consumeQueuedFollowupPlaceholder(chatJid);
    }
    getQueuedFollowupCount(chatJid) {
        return getRuntimePublicSurfaceService(this).getQueuedFollowupCount(chatJid);
    }
    getQueuedFollowupItems(chatJid) {
        return getRuntimePublicSurfaceService(this).getQueuedFollowupItems(chatJid);
    }
    removeQueuedFollowupItem(chatJid, rowId) {
        return getRuntimePublicSurfaceService(this).removeQueuedFollowupItem(chatJid, rowId);
    }
    queuePendingSteering(chatJid, timestamp) {
        getRuntimePublicSurfaceService(this).queuePendingSteering(chatJid, timestamp);
    }
    consumePendingSteering(chatJid) {
        return getRuntimePublicSurfaceService(this).consumePendingSteering(chatJid);
    }
    updateAgentStatus(chatJid, status) {
        getRuntimePublicSurfaceService(this).updateAgentStatus(chatJid, status);
    }
    getAgentStatus(chatJid) {
        return getRuntimePublicSurfaceService(this).getAgentStatus(chatJid);
    }
    replaceQueuedFollowupPlaceholder(chatJid, rowId, text, mediaIds, contentBlocks, threadId, isTerminalAgentReply) {
        return getRuntimePublicSurfaceService(this).replaceQueuedFollowupPlaceholder(chatJid, rowId, text, mediaIds, contentBlocks, threadId, isTerminalAgentReply);
    }
    getThreadRootId(chatJid, messageId) {
        return getRuntimePublicSurfaceService(this).getThreadRootId(chatJid, messageId);
    }
    resumeChat(chatJid, threadRootId) {
        getRuntimePublicSurfaceService(this).resumeChat(chatJid, threadRootId);
    }
    skipFailedOnModelSwitch(chatJid) {
        getRuntimePublicSurfaceService(this).skipFailedOnModelSwitch(chatJid);
    }
    /**
     * Check for inflight run markers left by a previous process that was killed
     * mid-turn. Rolls back all cursors in a single transaction (all-or-nothing),
     * then enqueues a retry for each. Only enqueues if the transaction succeeds –
     * if the rollback fails the inflight markers remain and will be retried on
     * the next startup.
     *
     * Called once at startup before the queue starts processing.
     */
    recoverInflightRuns() {
        getRuntimePublicSurfaceService(this).recoverInflightRuns();
    }
    /**
     * Scan all known chats (or a specific one) for messages that arrived after
     * their stored cursor and enqueue processChat() for each with pending work.
     * Called after a restart via the resume_pending IPC.
     */
    resumePendingChats(chatJid) {
        getRuntimePublicSurfaceService(this).resumePendingChats(chatJid);
    }
    loadState() {
        getRuntimePublicSurfaceService(this).loadState();
    }
    saveState() {
        getRuntimePublicSurfaceService(this).saveState();
    }
    setPanelExpanded(turnId, panel, expanded) {
        getRuntimePublicSurfaceService(this).setPanelExpanded(turnId, panel, expanded);
    }
    isPanelExpanded(turnId, panel) {
        return getRuntimePublicSurfaceService(this).isPanelExpanded(turnId, panel);
    }
    updateThoughtBuffer(turnId, text, totalLines) {
        getRuntimePublicSurfaceService(this).updateThoughtBuffer(turnId, text, totalLines);
    }
    updateDraftBuffer(turnId, text, totalLines) {
        getRuntimePublicSurfaceService(this).updateDraftBuffer(turnId, text, totalLines);
    }
    getBuffer(turnId, panel) {
        return getRuntimePublicSurfaceService(this).getBuffer(turnId, panel);
    }
    async handleFetch(req, server) {
        return getHttpSurfaceService(this).handleFetch(req, server);
    }
    async handleRequest(req) {
        return getHttpSurfaceService(this).handleRequest(req);
    }
    async handleAgents() {
        return await getHttpSurfaceService(this).handleAgents();
    }
    async handleManifest(req) {
        return await getHttpSurfaceService(this).handleManifest(req);
    }
    async handleAvatar(kind, req) {
        return await getHttpSurfaceService(this).handleAvatar(kind, req);
    }
    async handleWorkspaceVisibility(req) {
        return await getHttpSurfaceService(this).handleWorkspaceVisibility(req);
    }
    handleTimeline(limit, before, chatJid) {
        return getHttpSurfaceService(this).handleTimeline(limit, before, chatJid);
    }
    handleHashtag(tag, limit, offset, chatJid) {
        return getHttpSurfaceService(this).handleHashtag(tag, limit, offset, chatJid);
    }
    handleSearch(query, limit, offset, chatJid, searchScope, rootChatJid) {
        return getHttpSurfaceService(this).handleSearch(query, limit, offset, chatJid, searchScope, rootChatJid);
    }
    handleThread(id, chatJid) {
        return getHttpSurfaceService(this).handleThread(id, chatJid);
    }
    handleThought(panel, turnId) {
        return getHttpSurfaceService(this).handleThought(panel, turnId);
    }
    async handleThoughtVisibility(req) {
        return await getHttpSurfaceService(this).handleThoughtVisibility(req);
    }
    handleDeletePost(req, id, cascade = false) {
        return getHttpSurfaceService(this).handleDeletePost(req, id, cascade);
    }
    /**
     * PATCH /post/:id – Update a post's content and optionally set thread_id.
     * Validates: id is a positive integer, content ≤ 100 KB, thread_id is a
     * positive integer if provided. Uses parameterized queries (no SQL injection).
     */
    async handleUpdatePost(req, id) {
        return await getHttpSurfaceService(this).handleUpdatePost(req, id);
    }
    /**
     * POST /internal/post – Create an internal agent message.
     * Requires internal secret when WEB_INTERNAL_SECRET is configured.
     * Content is capped at 100 KB to prevent DB bloat.
     */
    async handleInternalPost(req) {
        return await getHttpSurfaceService(this).handleInternalPost(req);
    }
    handleSse(req) {
        return getHttpSurfaceService(this).handleSse(req);
    }
    handleTerminalSession(req) { return getHttpSurfaceService(this).handleTerminalSession(req); }
    handleVncSession(req) { return getHttpSurfaceService(this).handleVncSession(req); }
    handleVncHandoff(req) { return getHttpSurfaceService(this).handleVncHandoff(req); }
    broadcastEvent(eventType, data) {
        getRuntimePublicSurfaceService(this).broadcastEvent(eventType, data);
    }
    async handlePost(req, isReply) {
        return await getHttpSurfaceService(this).handlePost(req, isReply);
    }
    handleAgentStatus(req) {
        return getHttpSurfaceService(this).handleAgentStatus(req);
    }
    /** GET /agent/context — return context window usage for the compose box indicator. */
    async handleAgentContext(req) {
        return await getHttpSurfaceService(this).handleAgentContext(req);
    }
    /** GET /agent/autoresearch/status — current live autoresearch status-panel widget payload. */
    async handleAutoresearchStatus(req) {
        return await getHttpSurfaceService(this).handleAutoresearchStatus(req);
    }
    /** POST /agent/autoresearch/stop — stop the running autoresearch experiment for this chat. */
    async handleAutoresearchStop(req) {
        return await getHttpSurfaceService(this).handleAutoresearchStop(req);
    }
    /** POST /agent/autoresearch/dismiss — dismiss the final autoresearch status panel for this chat. */
    async handleAutoresearchDismiss(req) {
        return await getHttpSurfaceService(this).handleAutoresearchDismiss(req);
    }
    /** GET /agent/queue-state — return queued follow-up placeholder count and pending content. */
    async handleAgentQueueState(req) {
        return await getHttpSurfaceService(this).handleAgentQueueState(req);
    }
    /** POST /agent/queue-remove — remove a queued follow-up row from UI + session queue. */
    async handleAgentQueueRemove(req) {
        return await getHttpSurfaceService(this).handleAgentQueueRemove(req);
    }
    /** POST /agent/queue-steer — atomically convert one queued follow-up into steering or an immediate send. */
    async handleAgentQueueSteer(req) {
        return await getHttpSurfaceService(this).handleAgentQueueSteer(req);
    }
    /** GET /agent/models — return available model labels and current selection. */
    async handleAgentModels(req) {
        return await getHttpSurfaceService(this).handleAgentModels(req);
    }
    /** GET /agent/active-chats — enumerate live chat agents/branches currently in the pool. */
    async handleAgentActiveChats(req) {
        return await getHttpSurfaceService(this).handleAgentActiveChats(req);
    }
    /** GET /agent/branches — enumerate known branch/session records from the registry. */
    async handleAgentBranches(req) {
        return await getHttpSurfaceService(this).handleAgentBranches(req);
    }
    /** POST /agent/branch-fork — create a first-class forked branch with its own session identity. */
    async handleAgentBranchFork(req) {
        return await getHttpSurfaceService(this).handleAgentBranchFork(req);
    }
    /** POST /agent/branch-rename — rename a registry-backed branch agent/display identity. */
    async handleAgentBranchRename(req) {
        return await getHttpSurfaceService(this).handleAgentBranchRename(req);
    }
    /** POST /agent/branch-prune — archive a registry-backed branch agent and remove it from active discovery. */
    async handleAgentBranchPrune(req) {
        return await getHttpSurfaceService(this).handleAgentBranchPrune(req);
    }
    /** POST /agent/branch-restore — restore an archived branch agent back into active discovery. */
    async handleAgentBranchRestore(req) {
        return await getHttpSurfaceService(this).handleAgentBranchRestore(req);
    }
    /**
     * POST /agent/peer-message — send a message from one active chat agent/window to another.
     * Reuses the normal agent message path in the target chat so queue/defer semantics stay consistent.
     */
    async handleAgentPeerMessage(req) {
        return await getLifecycleSpecialSurfaceService(this).handleAgentPeerMessage(req);
    }
    /**
     * POST /agent/respond – Handle a UI response to an agent request (e.g., confirmation dialog).
     * Validates request_id is a non-empty string of ≤ 256 chars.
     */
    async handleAgentRespond(req) {
        return await getHttpSurfaceService(this).handleAgentRespond(req);
    }
    async handleAdaptiveCardAction(req) {
        return await getLifecycleSpecialSurfaceService(this).handleAdaptiveCardAction(req);
    }
    async handleAgentSidePrompt(req) {
        return await getLifecycleSpecialSurfaceService(this).handleAgentSidePrompt(req);
    }
    async handleAgentSidePromptStream(req) {
        return await getLifecycleSpecialSurfaceService(this).handleAgentSidePromptStream(req);
    }
    handleAgentMessage(req, pathname) {
        return getLifecycleSpecialSurfaceService(this).handleAgentMessage(req, pathname);
    }
    async processChat(chatJid, agentId, threadRootId) {
        return getRuntimePublicSurfaceService(this).processChat(chatJid, agentId, threadRootId);
    }
    storeMessage(chatJid, content, isBot, mediaIds, options = {}) {
        return getRuntimePublicSurfaceService(this).storeMessage(chatJid, content, isBot, mediaIds, options);
    }
    async handleRemote(req) {
        return getHttpSurfaceService(this).handleRemote(req);
    }
    async serveStatic(relPath) {
        return getHttpSurfaceService(this).serveStatic(relPath);
    }
    async serveDocsStatic(relPath) {
        return getHttpSurfaceService(this).serveDocsStatic(relPath);
    }
    json(data, status = 200) {
        return getHttpSurfaceService(this).json(data, status);
    }
    clampInt(value, fallback, min, max) {
        return getHttpSurfaceService(this).clampInt(value, fallback, min, max);
    }
    parseOptionalInt(value) {
        return getHttpSurfaceService(this).parseOptionalInt(value);
    }
}
