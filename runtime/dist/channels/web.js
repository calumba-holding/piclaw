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
import { initTheme } from "@mariozechner/pi-coding-agent";
import { WebauthnChallengeTracker } from "./web/webauthn-challenges.js";
import { TotpFailureTracker } from "./web/totp-failure-tracker.js";
import { ASSISTANT_AVATAR, ASSISTANT_NAME, USER_AVATAR, USER_AVATAR_BACKGROUND, USER_NAME, WEB_HOST, WEB_IDLE_TIMEOUT, WEB_PORT, WEB_TLS_CERT, WEB_TLS_KEY, WEB_SESSION_TTL, WEB_TOTP_SECRET, WEB_TOTP_WINDOW, WEB_INTERNAL_SECRET, WEB_PASSKEY_MODE, WEB_TERMINAL_ENABLED, DEBUG_CARD_SUBMISSIONS, setWebTotpSecret, } from "../core/config.js";
import { startWorkspaceWatcher } from "./web/handlers/workspace.js";
import { RequestRouterService } from "./web/request-router-service.js";
import { checkCsrfOrigin } from "./web/http/security.js";
import { handlePost as handlePostRequest } from "./web/handlers/posts.js";
import { handleAgentMessage as handleAgentMessageRequest, processChat as processAgentChat, } from "./web/handlers/agent.js";
import { SseHub } from "./web/sse-hub.js";
import { UiBridge } from "./web/ui-bridge.js";
import { ResponseService } from "./web/http/response-service.js";
import { createWebSession, DEFAULT_WEB_USER_ID, deleteAllWebSessions, deleteMessageByRowId, replaceMessageContent, getChatBranchByChatJid, getChatCursor, getDb, getInflightMessageId, getMessageByRowId, getMessageThreadRootIdById, getDeferredQueuedFollowups, purgeExpiredLinkPreviewImageCache, setDeferredQueuedFollowups, } from "../db.js";
import { WebChannelState } from "./web/channel-state.js";
import { AgentStatusStore } from "./web/agent-status-store.js";
import { FollowupPlaceholderStore } from "./web/followup-placeholders.js";
import { PendingSteeringStore } from "./web/pending-steering.js";
import { storeWebMessage } from "./web/message-store.js";
import { queueFollowupPlaceholderMessage, replaceQueuedFollowupPlaceholderMessage, sendWebMessage, } from "./web/message-write-flows.js";
import { postDashboardWidget as postDashboardWidgetMessage } from "./web/dashboard-widget.js";
import { deletePostResponse } from "./web/timeline-service.js";
import { ensureAvatarCache, resolveAvatarUrl } from "./web/avatar-service.js";
import { handleAgentContextRequest, handleAgentModelsRequest, handleAgentStatusRequest, } from "./web/agent-status.js";
import { AgentBuffers } from "./web/agent-buffers.js";
import { bindWebUiSessionBinder } from "./web/agent-pool-binder.js";
import { handleHashtagRequest, handleSearchRequest, handleThoughtRequest, handleThreadRequest, handleTimelineRequest, } from "./web/content-endpoints.js";
import { handleAgentsRequest, handleAvatarRequest, } from "./web/identity-endpoints.js";
import { createAgentsEndpointContext } from "./web/endpoint-contexts.js";
import { handleManifestRequest } from "./web/manifest.js";
import { getThreadRootId as getThreadRootIdForChat, resumeChat as resumeWebChat, skipFailedOnModelSwitch as skipFailedOnModelSwitchForChat, } from "./web/chat-run-control.js";
import { recoverInflightRuns as recoverWebInflightRuns, resumePendingChats as resumeWebPendingChats, } from "./web/recovery.js";
import { handleInternalPostRequest, handleUpdatePostRequest, } from "./web/post-mutations.js";
import { handleAgentRespondRequest, handleThoughtVisibilityRequest, handleWorkspaceVisibilityRequest, } from "./web/ui-endpoints.js";
import { buildAdaptiveCardSubmissionText, buildAdaptiveCardSubmitBlock, getAdaptiveCardSubmitBehavior, getAdaptiveCardSubmitState, getAdaptiveCardTestFailure, markAdaptiveCardState, sanitizeAdaptiveCardActionPayload, sanitizeAdaptiveCardSubmissionData, } from "./web/adaptive-card-actions.js";
import { createWebChannelEndpointContexts, } from "./web/channel-endpoint-context-factory.js";
import { createInteractionBroadcaster } from "./web/interaction-broadcaster.js";
import { WebAuthGateway } from "./web/auth-gateway.js";
import { TerminalSessionService } from "./web/terminal/terminal-session-service.js";
import { VncSessionService } from "./web/vnc/vnc-session-service.js";
import { RemoteInteropService } from "../remote/service.js";
import { randomSessionToken, verifyTotp } from "./web/auth.js";
import { hashTotpSecret, parseTotpCardToken } from "./web/totp-card.js";
const DEFAULT_CHAT_JID = "web:default";
const DEFAULT_AGENT_ID = "default";
const STATE_KEY = "last_agent_timestamp_web";
const LINK_PREVIEW_CACHE_PURGE_INTERVAL_MS = 12 * 60 * 60 * 1000;
function getWebSessionTtlSeconds() {
    const rawTtl = Number.isFinite(WEB_SESSION_TTL) ? WEB_SESSION_TTL : 0;
    return Math.max(60, rawTtl || 0);
}
function formatSseEvent(eventType, data) {
    return `event: ${eventType}\ndata: ${JSON.stringify(data)}\n\n`;
}
function parseSidePromptPayload(payload) {
    return {
        prompt: typeof payload.prompt === "string" ? payload.prompt.trim() : "",
        systemPrompt: typeof payload.system_prompt === "string" ? payload.system_prompt.trim() : "",
        chatJid: typeof payload.chat_jid === "string" && payload.chat_jid.trim() ? payload.chat_jid.trim() : DEFAULT_CHAT_JID,
    };
}
export class WebChannel {
    queue;
    agentPool;
    server = null;
    state = new WebChannelState(STATE_KEY);
    sse = new SseHub();
    uiBridge;
    remoteInterop;
    responses = new ResponseService();
    requestRouter;
    endpointContexts;
    pendingLinkPreviews = new Set();
    workspaceWatcher = null;
    workspaceVisible = false;
    workspaceShowHidden = false;
    followupPlaceholderStore = new FollowupPlaceholderStore();
    pendingSteeringStore = new PendingSteeringStore();
    agentStatusStore;
    interactionBroadcaster;
    lastCommandInteractionId = null;
    webauthnChallenges = new WebauthnChallengeTracker();
    totpFailureTracker = new TotpFailureTracker();
    agentBuffers = new AgentBuffers();
    authGateway;
    terminalService = new TerminalSessionService();
    vncService = new VncSessionService();
    linkPreviewCachePurgeTimer = null;
    constructor(opts) {
        this.queue = opts.queue;
        this.agentPool = opts.agentPool;
        this.uiBridge = new UiBridge(this);
        this.remoteInterop = new RemoteInteropService(this.agentPool);
        this.agentStatusStore = new AgentStatusStore(this.state);
        this.interactionBroadcaster = createInteractionBroadcaster(this, () => ({
            agentName: ASSISTANT_NAME,
            agentAvatar: resolveAvatarUrl("agent", ASSISTANT_AVATAR),
            userName: USER_NAME || null,
            userAvatar: resolveAvatarUrl("user", USER_AVATAR),
            userAvatarBackground: USER_AVATAR_BACKGROUND || null,
        }));
        this.authGateway = new WebAuthGateway({
            passkeyMode: WEB_PASSKEY_MODE || "",
            totpSecret: WEB_TOTP_SECRET || "",
            internalSecret: WEB_INTERNAL_SECRET || "",
            sessionTtlSeconds: WEB_SESSION_TTL,
            hasTls: Boolean(WEB_TLS_CERT && WEB_TLS_KEY),
        }, {
            json: (payload, status = 200) => this.json(payload, status),
            challenges: this.webauthnChallenges,
            failureTracker: this.totpFailureTracker,
        });
        this.requestRouter = new RequestRouterService(this);
        this.endpointContexts = createWebChannelEndpointContexts(this, {
            defaultChatJid: DEFAULT_CHAT_JID,
            defaultAgentId: DEFAULT_AGENT_ID,
            agentName: ASSISTANT_NAME,
            agentAvatar: resolveAvatarUrl("agent", ASSISTANT_AVATAR),
            userName: USER_NAME || null,
            userAvatar: resolveAvatarUrl("user", USER_AVATAR),
            userAvatarBackground: USER_AVATAR_BACKGROUND || null,
            assistantAvatarRaw: ASSISTANT_AVATAR || null,
            userAvatarRaw: USER_AVATAR || null,
        });
        bindWebUiSessionBinder(this.agentPool, (session, chatJid) => this.uiBridge.bindSession(session, chatJid));
    }
    async start() {
        this.loadState();
        try {
            initTheme();
        }
        catch (err) {
            console.warn("[web] Failed to initialize theme cache:", err);
        }
        const tls = await this.loadTlsOptions();
        // On Windows, the previous process may linger after a restart (no
        // SIGKILL), leaving the port in TIME_WAIT.  Retry a few times with
        // reusePort so the new instance can bind immediately.
        const MAX_BIND_ATTEMPTS = 5;
        const BIND_RETRY_MS = 1500;
        let lastBindError = null;
        for (let attempt = 1; attempt <= MAX_BIND_ATTEMPTS; attempt++) {
            try {
                this.server = Bun.serve({
                    hostname: WEB_HOST,
                    port: WEB_PORT,
                    reusePort: true,
                    idleTimeout: WEB_IDLE_TIMEOUT,
                    // Hard limit on request body size. Individual endpoints enforce tighter
                    // limits (e.g., 10 MB for media uploads, 512 MB for workspace uploads,
                    // 100 KB for message content).
                    // This is the outermost safety net; Bun rejects bodies exceeding this
                    // before any handler code runs.
                    maxRequestBodySize: 512 * 1024 * 1024, // 512 MB hard cap
                    fetch: (req, server) => this.handleFetch(req, server),
                    websocket: {
                        open: (ws) => {
                            if (ws.data?.kind === "vnc") {
                                this.vncService.attachClient(ws);
                                return;
                            }
                            this.terminalService.attachClient(ws);
                        },
                        message: (ws, message) => {
                            if (ws.data?.kind === "vnc") {
                                this.vncService.handleMessage(ws, message);
                                return;
                            }
                            this.terminalService.handleMessage(ws, message);
                        },
                        close: (ws) => {
                            if (ws.data?.kind === "vnc") {
                                this.vncService.detachClient(ws);
                                return;
                            }
                            this.terminalService.detachClient(ws);
                        },
                    },
                    ...(tls ? { tls } : {}),
                });
                lastBindError = null;
                break;
            }
            catch (err) {
                lastBindError = err;
                if (err?.code === "EADDRINUSE" && attempt < MAX_BIND_ATTEMPTS) {
                    console.warn(`[web] Port ${WEB_PORT} busy (attempt ${attempt}/${MAX_BIND_ATTEMPTS}), retrying in ${BIND_RETRY_MS}ms…`);
                    await new Promise((r) => setTimeout(r, BIND_RETRY_MS));
                    continue;
                }
                throw err;
            }
        }
        if (lastBindError)
            throw lastBindError;
        this.workspaceWatcher = startWorkspaceWatcher(this);
        const purgeNow = () => {
            const result = purgeExpiredLinkPreviewImageCache(new Date().toISOString(), 256);
            if (result.purgedEntries > 0) {
                console.log(`[web] Purged ${result.purgedEntries} expired link-preview cache entr${result.purgedEntries === 1 ? "y" : "ies"} (${result.purgedMedia} media blobs)`);
            }
        };
        purgeNow();
        this.linkPreviewCachePurgeTimer = setInterval(purgeNow, LINK_PREVIEW_CACHE_PURGE_INTERVAL_MS);
        const scheme = tls ? "https" : "http";
        console.log(`[web] UI listening on ${scheme}://${WEB_HOST}:${WEB_PORT}`);
    }
    async stop() {
        this.sse.closeAll();
        this.uiBridge.stop();
        this.terminalService.shutdown();
        this.vncService.shutdown();
        if (this.linkPreviewCachePurgeTimer) {
            clearInterval(this.linkPreviewCachePurgeTimer);
            this.linkPreviewCachePurgeTimer = null;
        }
        this.server?.stop(true);
        this.server = null;
        if (this.workspaceWatcher) {
            await this.workspaceWatcher.close();
            this.workspaceWatcher = null;
        }
    }
    getMessageWriteContext() {
        return {
            defaultAgentId: DEFAULT_AGENT_ID,
            store: {
                storeMessage: (chatJid, content, isBot, mediaIds, options) => this.storeMessage(chatJid, content, isBot, mediaIds, options),
                replaceMessageContent: (chatJid, rowId, text, mediaIds, contentBlocks, isTerminalAgentReply) => replaceMessageContent(chatJid, rowId, text, { contentBlocks, mediaIds, isTerminalAgentReply }) ?? null,
                setMessageThreadToSelf: (messageId) => {
                    getDb().prepare("UPDATE messages SET thread_id = ? WHERE rowid = ?").run(messageId, messageId);
                },
            },
            broadcaster: {
                broadcastAgentResponse: (interaction) => this.interactionBroadcaster.broadcastAgentResponse(interaction),
                broadcastInteractionUpdated: (interaction) => this.interactionBroadcaster.broadcastInteractionUpdated(interaction),
            },
            followups: {
                enqueue: (chatJid, rowId, queuedContent, threadId, queuedAt) => this.followupPlaceholderStore.enqueue(chatJid, rowId, queuedContent, threadId, queuedAt),
            },
        };
    }
    async sendMessage(chatJid, text, options) {
        sendWebMessage(chatJid, text, options, this.getMessageWriteContext());
    }
    async postDashboardWidget(chatJid, options) {
        await postDashboardWidgetMessage(this, {
            chatJid,
            threadId: options?.threadId,
            text: options?.text,
            widgetId: options?.widgetId,
        });
    }
    queueFollowupPlaceholder(chatJid, text, threadId, queuedContent) {
        return queueFollowupPlaceholderMessage(chatJid, text, threadId, (queuedContent || "").trim() || text, this.getMessageWriteContext());
    }
    getDeferredQueuedFollowupItems(chatJid) {
        return getDeferredQueuedFollowups(chatJid).map((item) => ({
            rowId: item.rowId,
            queuedContent: item.queuedContent,
            threadId: item.threadId ?? null,
            queuedAt: item.queuedAt,
            mediaIds: item.mediaIds ? [...item.mediaIds] : undefined,
            contentBlocks: Array.isArray(item.contentBlocks) ? [...item.contentBlocks] : undefined,
            linkPreviews: Array.isArray(item.linkPreviews) ? [...item.linkPreviews] : undefined,
        }));
    }
    setDeferredQueuedFollowupItems(chatJid, items) {
        const persisted = items.map((item) => ({
            rowId: item.rowId,
            queuedContent: item.queuedContent,
            threadId: item.threadId ?? null,
            queuedAt: item.queuedAt,
            mediaIds: item.mediaIds ? [...item.mediaIds] : undefined,
            contentBlocks: Array.isArray(item.contentBlocks) ? [...item.contentBlocks] : undefined,
            linkPreviews: Array.isArray(item.linkPreviews) ? [...item.linkPreviews] : undefined,
        }));
        setDeferredQueuedFollowups(chatJid, persisted);
    }
    allocateDeferredQueuedRowId(chatJid) {
        const queued = this.getDeferredQueuedFollowupItems(chatJid);
        const minRowId = queued.reduce((min, item) => (item.rowId < min ? item.rowId : min), 0);
        return minRowId <= -1 ? minRowId - 1 : -1;
    }
    enqueueQueuedFollowupItem(chatJid, rowId, queuedContent, threadId, queuedAt, extras) {
        const resolvedRowId = Number.isFinite(rowId) && rowId !== 0 ? rowId : this.allocateDeferredQueuedRowId(chatJid);
        const queued = this.getDeferredQueuedFollowupItems(chatJid);
        queued.push({
            rowId: resolvedRowId,
            queuedContent,
            threadId: threadId ?? null,
            queuedAt: queuedAt ?? new Date().toISOString(),
            mediaIds: extras?.mediaIds ? [...extras.mediaIds] : undefined,
            contentBlocks: Array.isArray(extras?.contentBlocks) ? [...extras.contentBlocks] : undefined,
            linkPreviews: Array.isArray(extras?.linkPreviews) ? [...extras.linkPreviews] : undefined,
        });
        this.setDeferredQueuedFollowupItems(chatJid, queued);
        return resolvedRowId;
    }
    consumeQueuedFollowupItem(chatJid) {
        const queued = this.getDeferredQueuedFollowupItems(chatJid);
        const next = queued.shift() ?? null;
        this.setDeferredQueuedFollowupItems(chatJid, queued);
        return next;
    }
    prependQueuedFollowupItem(chatJid, item) {
        const queued = this.getDeferredQueuedFollowupItems(chatJid);
        queued.unshift({
            rowId: item.rowId,
            queuedContent: item.queuedContent,
            threadId: item.threadId ?? null,
            queuedAt: item.queuedAt,
            mediaIds: item.mediaIds ? [...item.mediaIds] : undefined,
            contentBlocks: Array.isArray(item.contentBlocks) ? [...item.contentBlocks] : undefined,
            linkPreviews: Array.isArray(item.linkPreviews) ? [...item.linkPreviews] : undefined,
            materializeRetries: item.materializeRetries ?? 0,
        });
        this.setDeferredQueuedFollowupItems(chatJid, queued);
    }
    consumeQueuedFollowupPlaceholder(chatJid) {
        return this.followupPlaceholderStore.consume(chatJid);
    }
    getQueuedFollowupCount(chatJid) {
        return this.getDeferredQueuedFollowupItems(chatJid).length + this.followupPlaceholderStore.count(chatJid);
    }
    getQueuedFollowupItems(chatJid) {
        const rows = [
            ...this.getDeferredQueuedFollowupItems(chatJid),
            ...this.followupPlaceholderStore.peek(chatJid),
        ];
        // Deduplicate by rowId — the two stores use different ID spaces (negative
        // for deferred, positive for placeholder), but guard against bugs that
        // might put the same item in both stores.
        const seen = new Set();
        return rows
            .map((row) => ({
            ...row,
            queuedAt: row.queuedAt,
        }))
            .filter((row) => {
            if (seen.has(row.rowId))
                return false;
            seen.add(row.rowId);
            return true;
        })
            .sort((a, b) => String(a.queuedAt).localeCompare(String(b.queuedAt)));
    }
    removeQueuedFollowupItem(chatJid, rowId) {
        const queued = this.getDeferredQueuedFollowupItems(chatJid);
        const queuedIndex = queued.findIndex((item) => item.rowId === rowId);
        if (queuedIndex >= 0) {
            const [removed] = queued.splice(queuedIndex, 1);
            this.setDeferredQueuedFollowupItems(chatJid, queued);
            return removed ?? null;
        }
        return this.followupPlaceholderStore.remove(chatJid, rowId);
    }
    queuePendingSteering(chatJid, timestamp) {
        this.pendingSteeringStore.queue(chatJid, timestamp);
    }
    consumePendingSteering(chatJid) {
        return this.pendingSteeringStore.consumeLatest(chatJid);
    }
    updateAgentStatus(chatJid, status) {
        this.agentStatusStore.update(chatJid, status);
    }
    getAgentStatus(chatJid) {
        return this.agentStatusStore.get(chatJid);
    }
    replaceQueuedFollowupPlaceholder(chatJid, rowId, text, mediaIds, contentBlocks, threadId, isTerminalAgentReply) {
        return replaceQueuedFollowupPlaceholderMessage(chatJid, rowId, text, mediaIds, contentBlocks, threadId, this.getMessageWriteContext(), isTerminalAgentReply);
    }
    getThreadRootId(chatJid, messageId) {
        return getThreadRootIdForChat(chatJid, messageId);
    }
    getResumeChatContext() {
        return {
            defaultAgentId: DEFAULT_AGENT_ID,
            enqueue: (task, key, laneKey) => this.queue.enqueue(task, key, laneKey),
            processChat: (chatJid, agentId, threadRootId) => this.processChat(chatJid, agentId, threadRootId),
            getChatCursor: (chatJid) => getChatCursor(chatJid),
        };
    }
    resumeChat(chatJid, threadRootId) {
        resumeWebChat(chatJid, threadRootId, this.getResumeChatContext());
    }
    skipFailedOnModelSwitch(chatJid) {
        skipFailedOnModelSwitchForChat(chatJid);
    }
    getRecoveryContext() {
        return {
            assistantName: ASSISTANT_NAME,
            defaultAgentId: DEFAULT_AGENT_ID,
            enqueue: (task, key, laneKey) => this.queue.enqueue(task, key, laneKey),
            processChat: (chatJid, agentId, threadRootId) => this.processChat(chatJid, agentId, threadRootId),
        };
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
        recoverWebInflightRuns(this.getRecoveryContext());
    }
    /**
     * Scan all known chats (or a specific one) for messages that arrived after
     * their stored cursor and enqueue processChat() for each with pending work.
     * Called after a restart via the resume_pending IPC.
     */
    resumePendingChats(chatJid) {
        resumeWebPendingChats(this.getRecoveryContext(), chatJid);
    }
    loadState() {
        this.agentStatusStore.load();
    }
    saveState() {
        this.state.save();
    }
    setPanelExpanded(turnId, panel, expanded) {
        this.agentBuffers.setPanelExpanded(turnId, panel, expanded);
    }
    isPanelExpanded(turnId, panel) {
        return this.agentBuffers.isPanelExpanded(turnId, panel);
    }
    updateThoughtBuffer(turnId, text, totalLines) {
        this.agentBuffers.updateBuffer(turnId, "thought", text, totalLines);
    }
    updateDraftBuffer(turnId, text, totalLines) {
        this.agentBuffers.updateBuffer(turnId, "draft", text, totalLines);
    }
    getBuffer(turnId, panel) {
        return this.agentBuffers.getBuffer(turnId, panel);
    }
    async loadTlsOptions() {
        if (!WEB_TLS_CERT || !WEB_TLS_KEY)
            return null;
        try {
            const [cert, key] = await Promise.all([
                Bun.file(WEB_TLS_CERT).text(),
                Bun.file(WEB_TLS_KEY).text(),
            ]);
            return { cert, key };
        }
        catch (error) {
            console.error("[web] Failed to load TLS cert/key:", error);
            return null;
        }
    }
    async handleFetch(req, server) {
        const pathname = new URL(req.url).pathname;
        if (pathname === "/terminal/ws") {
            return this.handleTerminalWebSocketUpgrade(req, server);
        }
        if (pathname === "/vnc/ws") {
            return this.handleVncWebSocketUpgrade(req, server);
        }
        return this.handleRequest(req);
    }
    handleTerminalWebSocketUpgrade(req, server) {
        if (!WEB_TERMINAL_ENABLED) {
            return this.json({ error: "Web terminal is disabled." }, 404);
        }
        const authEnabled = this.authGateway.isAuthEnabled();
        if (authEnabled && !this.authGateway.isAuthenticated(req)) {
            return this.json({ error: "Unauthorized" }, 401);
        }
        if (!checkCsrfOrigin(req)) {
            return this.json({ error: "Origin not allowed" }, 403);
        }
        const owner = this.terminalService.resolveOwnerFromRequest(req, !authEnabled);
        if (!owner) {
            return this.json({ error: "Unauthorized" }, 401);
        }
        if (!server?.upgrade(req, { data: owner })) {
            return this.json({ error: "WebSocket upgrade failed" }, 400);
        }
        return undefined;
    }
    handleVncWebSocketUpgrade(req, server) {
        const url = new URL(req.url);
        const targetId = url.searchParams.get("target")?.trim() || "";
        if (!targetId) {
            return this.json({ error: "Missing VNC target." }, 400);
        }
        const authEnabled = this.authGateway.isAuthEnabled();
        if (authEnabled && !this.authGateway.isAuthenticated(req)) {
            return this.json({ error: "Unauthorized" }, 401);
        }
        if (!checkCsrfOrigin(req)) {
            return this.json({ error: "Origin not allowed" }, 403);
        }
        const owner = this.vncService.resolveOwnerFromRequest(req, targetId, !authEnabled);
        if (!owner) {
            return this.json({ error: "Unauthorized or unknown/disallowed VNC target" }, 401);
        }
        if (!server?.upgrade(req, { data: owner })) {
            return this.json({ error: "WebSocket upgrade failed" }, 400);
        }
        return undefined;
    }
    async handleRequest(req) {
        return this.requestRouter.handle(req);
    }
    async handleAgents() {
        // Read live identity values so /agent-name and /agent-avatar changes
        // take effect immediately without a process restart.
        const ctx = createAgentsEndpointContext({
            agentPool: this.agentPool,
            defaultChatJid: DEFAULT_CHAT_JID,
            defaultAgentId: DEFAULT_AGENT_ID,
            agentName: ASSISTANT_NAME,
            agentAvatar: resolveAvatarUrl("agent", ASSISTANT_AVATAR),
            userName: USER_NAME || null,
            userAvatar: resolveAvatarUrl("user", USER_AVATAR),
            userAvatarBackground: USER_AVATAR_BACKGROUND || null,
            json: (payload, status = 200) => this.json(payload, status),
        });
        return await handleAgentsRequest(ctx);
    }
    async handleManifest(req) {
        return await handleManifestRequest(req, {
            assistantName: ASSISTANT_NAME,
            assistantAvatar: ASSISTANT_AVATAR,
            ensureAvatarCache,
        });
    }
    async handleAvatar(kind, req) {
        // Read live avatar values so /agent-avatar changes take effect immediately.
        return await handleAvatarRequest(kind, req, {
            assistantAvatar: ASSISTANT_AVATAR || null,
            userAvatar: USER_AVATAR || null,
            json: (payload, status = 200) => this.json(payload, status),
        });
    }
    async handleWorkspaceVisibility(req) {
        return await handleWorkspaceVisibilityRequest(req, this.endpointContexts.ui());
    }
    handleTimeline(limit, before, chatJid) {
        return handleTimelineRequest(limit, before, chatJid, this.endpointContexts.content());
    }
    handleHashtag(tag, limit, offset, chatJid) {
        return handleHashtagRequest(tag, limit, offset, chatJid, this.endpointContexts.content());
    }
    handleSearch(query, limit, offset, chatJid, searchScope, rootChatJid) {
        return handleSearchRequest(query, limit, offset, chatJid, searchScope, rootChatJid, this.endpointContexts.content());
    }
    handleThread(id, chatJid) {
        return handleThreadRequest(id, chatJid, this.endpointContexts.content());
    }
    handleThought(panel, turnId) {
        return handleThoughtRequest(panel, turnId, this.endpointContexts.content());
    }
    async handleThoughtVisibility(req) {
        return await handleThoughtVisibilityRequest(req, this.endpointContexts.ui());
    }
    handleDeletePost(req, id, cascade = false) {
        const url = new URL(req.url);
        const chatJid = url.searchParams.get("chat_jid")?.trim() || DEFAULT_CHAT_JID;
        const result = deletePostResponse(chatJid, id, cascade);
        if (result.deletedIds.length > 0) {
            this.broadcastEvent("interaction_deleted", { chat_jid: chatJid, ids: result.deletedIds });
        }
        return this.json(result.body, result.status);
    }
    /**
     * PATCH /post/:id – Update a post's content and optionally set thread_id.
     * Validates: id is a positive integer, content ≤ 100 KB, thread_id is a
     * positive integer if provided. Uses parameterized queries (no SQL injection).
     */
    async handleUpdatePost(req, id) {
        return await handleUpdatePostRequest(req, id, this.endpointContexts.postMutations());
    }
    /**
     * POST /internal/post – Create an internal agent message.
     * Requires internal secret when WEB_INTERNAL_SECRET is configured.
     * Content is capped at 100 KB to prevent DB bloat.
     */
    async handleInternalPost(req) {
        return await handleInternalPostRequest(req, this.endpointContexts.postMutations());
    }
    handleSse(req) {
        return this.sse.handleRequest(req);
    }
    handleTerminalSession(req) {
        if (!WEB_TERMINAL_ENABLED) {
            return this.json({ enabled: false, error: "Web terminal is disabled." }, 200);
        }
        const authEnabled = this.authGateway.isAuthEnabled();
        if (authEnabled && !this.authGateway.isAuthenticated(req)) {
            return this.json({ error: "Unauthorized" }, 401);
        }
        const owner = this.terminalService.resolveOwnerFromRequest(req, !authEnabled);
        if (!owner) {
            return this.json({ error: "Unauthorized" }, 401);
        }
        return this.json(this.terminalService.getSessionInfo(owner));
    }
    handleVncSession(req) {
        const url = new URL(req.url);
        const targetId = url.searchParams.get("target")?.trim() || "";
        const authEnabled = this.authGateway.isAuthEnabled();
        if (authEnabled && !this.authGateway.isAuthenticated(req)) {
            return this.json({ error: "Unauthorized" }, 401);
        }
        if (targetId && !this.vncService.resolveTargetReference(targetId)) {
            return this.json({ error: "Unknown or disallowed VNC target", ...this.vncService.getSessionInfo() }, 404);
        }
        return this.json(this.vncService.getSessionInfo(targetId || null), 200);
    }
    broadcastEvent(eventType, data) {
        this.sse.broadcast(eventType, data);
    }
    async handlePost(req, isReply) {
        const url = new URL(req.url);
        const chatJid = url.searchParams.get("chat_jid")?.trim() || DEFAULT_CHAT_JID;
        return handlePostRequest(this, req, isReply, chatJid);
    }
    handleAgentStatus(req) {
        return handleAgentStatusRequest(req, this.endpointContexts.agentStatus());
    }
    /** GET /agent/context — return context window usage for the compose box indicator. */
    async handleAgentContext(req) {
        return await handleAgentContextRequest(req, this.endpointContexts.agentStatus());
    }
    /** GET /agent/autoresearch/status — current live autoresearch status-panel widget payload. */
    async handleAutoresearchStatus(req) {
        const url = new URL(req.url);
        const chatJid = url.searchParams.get("chat_jid")?.trim() || DEFAULT_CHAT_JID;
        try {
            const { getAutoresearchWidgetPayload } = await import("../extensions/autoresearch-supervisor.js");
            return this.json(getAutoresearchWidgetPayload(chatJid));
        }
        catch (error) {
            console.warn("[web] Failed to read autoresearch status:", error);
            return this.json(null);
        }
    }
    /** POST /agent/autoresearch/stop — stop the running autoresearch experiment for this chat. */
    async handleAutoresearchStop(req) {
        let payload = {};
        try {
            payload = await req.json();
        }
        catch {
            payload = {};
        }
        const chatJid = typeof payload.chat_jid === "string" && payload.chat_jid.trim()
            ? payload.chat_jid.trim()
            : DEFAULT_CHAT_JID;
        try {
            const { stopAutoresearchFromWeb } = await import("../extensions/autoresearch-supervisor.js");
            const result = await stopAutoresearchFromWeb({
                chat_jid: chatJid,
                generate_report: payload.generate_report !== false,
            });
            return this.json({
                status: "ok",
                chat_jid: chatJid,
                result,
            });
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            return this.json({ error: message || "Failed to stop autoresearch experiment." }, 500);
        }
    }
    /** POST /agent/autoresearch/dismiss — dismiss the final autoresearch status panel for this chat. */
    async handleAutoresearchDismiss(req) {
        let payload = {};
        try {
            payload = await req.json();
        }
        catch {
            payload = {};
        }
        const chatJid = typeof payload.chat_jid === "string" && payload.chat_jid.trim()
            ? payload.chat_jid.trim()
            : DEFAULT_CHAT_JID;
        try {
            const { dismissAutoresearchWidget } = await import("../extensions/autoresearch-supervisor.js");
            return this.json({
                status: dismissAutoresearchWidget(chatJid) ? "ok" : "noop",
                chat_jid: chatJid,
            });
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            return this.json({ error: message || "Failed to dismiss autoresearch panel." }, 500);
        }
    }
    /** GET /agent/queue-state — return queued follow-up placeholder count and pending content. */
    async handleAgentQueueState(req) {
        const url = new URL(req.url);
        const chatJid = url.searchParams.get("chat_jid") ?? DEFAULT_CHAT_JID;
        const queuedItems = this.getQueuedFollowupItems(chatJid);
        const items = queuedItems
            .map((queued) => {
            const interaction = getMessageByRowId(chatJid, queued.rowId);
            return {
                row_id: queued.rowId,
                content: queued.queuedContent,
                timestamp: interaction?.timestamp ?? queued.queuedAt,
                thread_id: interaction?.data?.thread_id ?? queued.threadId ?? null,
            };
        })
            .filter((item) => typeof item.content === "string" && item.content.trim().length > 0);
        return this.json({
            count: items.length,
            items,
        });
    }
    async removeQueuedFollowupForAction(chatJid, rowId) {
        const queued = this.getDeferredQueuedFollowupItems(chatJid);
        const queuedIndex = queued.findIndex((item) => item.rowId === Number(rowId));
        const removedQueued = queuedIndex >= 0 ? (queued.splice(queuedIndex, 1)[0] ?? null) : null;
        if (queuedIndex >= 0) {
            this.setDeferredQueuedFollowupItems(chatJid, queued);
        }
        const removedPlaceholder = removedQueued ? null : this.followupPlaceholderStore.remove(chatJid, Number(rowId));
        const removed = removedQueued ?? removedPlaceholder;
        const source = removedQueued ? "deferred" : removedPlaceholder ? "placeholder" : null;
        if (!removed || !source)
            return { removed: null, source: null };
        // Remove any hidden backing row so queue artifacts stay out of the
        // timeline even after the item is removed or converted into steering.
        if (removed.rowId > 0) {
            deleteMessageByRowId(chatJid, removed.rowId);
        }
        if (source === "placeholder") {
            await this.agentPool.removeQueuedFollowupMessage(chatJid, removed.queuedContent);
        }
        return { removed, source };
    }
    /** POST /agent/queue-remove — remove a queued follow-up row from UI + session queue. */
    async handleAgentQueueRemove(req) {
        try {
            const payload = (await req.json());
            const chatJid = payload?.chat_jid ?? DEFAULT_CHAT_JID;
            const rawRowId = payload?.row_id;
            const rowId = typeof rawRowId === "string" ? Number(rawRowId) : rawRowId;
            if (!Number.isFinite(rowId)) {
                return this.json({ error: "Missing or invalid row_id" }, 400);
            }
            const { removed } = await this.removeQueuedFollowupForAction(chatJid, Number(rowId));
            if (!removed) {
                return this.json({ status: "ok", removed: false, count: this.getQueuedFollowupCount(chatJid) }, 200);
            }
            this.broadcastEvent("agent_followup_removed", {
                chat_jid: chatJid,
                row_id: removed.rowId,
                thread_id: removed.threadId ?? null,
            });
            return this.json({
                status: "ok",
                removed: true,
                row_id: removed.rowId,
                count: this.getQueuedFollowupCount(chatJid),
            });
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            return this.json({ error: message }, 500);
        }
    }
    /** POST /agent/queue-steer — atomically convert one queued follow-up into steering or an immediate send. */
    async handleAgentQueueSteer(req) {
        try {
            const payload = (await req.json());
            const chatJid = payload?.chat_jid ?? DEFAULT_CHAT_JID;
            const rawRowId = payload?.row_id;
            const rowId = typeof rawRowId === "string" ? Number(rawRowId) : rawRowId;
            if (!Number.isFinite(rowId)) {
                return this.json({ error: "Missing or invalid row_id" }, 400);
            }
            const { removed } = await this.removeQueuedFollowupForAction(chatJid, Number(rowId));
            if (!removed) {
                return this.json({ status: "ok", removed: false, count: this.getQueuedFollowupCount(chatJid) }, 200);
            }
            this.broadcastEvent("agent_followup_removed", {
                chat_jid: chatJid,
                row_id: removed.rowId,
                thread_id: removed.threadId ?? null,
            });
            const steerContent = typeof removed.queuedContent === "string" ? removed.queuedContent.trim() : "";
            if (!steerContent) {
                return this.json({ status: "ok", removed: true, queued: false, count: this.getQueuedFollowupCount(chatJid) }, 200);
            }
            const isStreaming = typeof this.agentPool.isStreaming === "function"
                ? this.agentPool.isStreaming(chatJid)
                : false;
            const inflightMessageId = getInflightMessageId(chatJid);
            const activeThreadRootId = inflightMessageId
                ? getMessageThreadRootIdById(chatJid, inflightMessageId)
                : null;
            const steerThreadId = removed.threadId ?? activeThreadRootId ?? null;
            const interaction = this.storeMessage(chatJid, steerContent, false, removed.mediaIds ?? [], {
                contentBlocks: Array.isArray(removed.contentBlocks) ? removed.contentBlocks : undefined,
                linkPreviews: Array.isArray(removed.linkPreviews) ? removed.linkPreviews : undefined,
                threadId: steerThreadId ?? undefined,
                isSteeringMessage: isStreaming,
            });
            if (!interaction) {
                // Restore the queued item so a failed timeline write does not drop it.
                this.prependQueuedFollowupItem(chatJid, removed);
                this.broadcastEvent("agent_followup_queued", {
                    chat_jid: chatJid,
                    thread_id: removed.threadId ?? null,
                    row_id: removed.rowId,
                    content: removed.queuedContent,
                    timestamp: removed.queuedAt,
                });
                return this.json({ error: "Failed to store message" }, 500);
            }
            this.broadcastEvent("new_post", interaction);
            if (isStreaming) {
                const steerResult = await this.agentPool.queueStreamingMessage(chatJid, steerContent, "steer");
                if (steerResult.queued) {
                    this.queuePendingSteering(chatJid, interaction.timestamp);
                    const queuedAt = new Date().toISOString();
                    this.broadcastEvent("agent_steer_queued", {
                        chat_jid: chatJid,
                        thread_id: interaction.data?.thread_id ?? steerThreadId ?? null,
                        source: "queued-item",
                        timestamp: queuedAt,
                        content: steerContent,
                    });
                    return this.json({
                        status: "ok",
                        removed: true,
                        row_id: removed.rowId,
                        user_message: interaction,
                        thread_id: interaction.data?.thread_id ?? steerThreadId ?? null,
                        queued: "steer",
                        count: this.getQueuedFollowupCount(chatJid),
                    }, 201);
                }
            }
            this.queue.enqueue(async () => {
                await this.processChat(chatJid, DEFAULT_AGENT_ID, interaction.data?.thread_id ?? interaction.id);
            }, `chat:${chatJid}:${interaction.id}`, `chat:${chatJid}`);
            return this.json({
                status: "ok",
                removed: true,
                row_id: removed.rowId,
                user_message: interaction,
                thread_id: interaction.data?.thread_id ?? interaction.id ?? null,
                count: this.getQueuedFollowupCount(chatJid),
            }, 201);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            return this.json({ error: message }, 500);
        }
    }
    /** GET /agent/models — return available model labels and current selection. */
    async handleAgentModels(req) {
        return await handleAgentModelsRequest(req, this.endpointContexts.agentStatus());
    }
    /** GET /agent/active-chats — enumerate live chat agents/branches currently in the pool. */
    async handleAgentActiveChats(_req) {
        return this.json({ chats: this.agentPool.listActiveChats() }, 200);
    }
    /** GET /agent/branches — enumerate known branch/session records from the registry. */
    async handleAgentBranches(req) {
        const url = new URL(req.url);
        const rootChatJid = typeof url.searchParams.get("root_chat_jid") === "string"
            ? url.searchParams.get("root_chat_jid").trim()
            : "";
        const includeArchived = ["1", "true", "yes", "on"].includes(String(url.searchParams.get("include_archived") || "").trim().toLowerCase());
        const chats = typeof this.agentPool.listKnownChats === "function"
            ? this.agentPool.listKnownChats(rootChatJid || null, { includeArchived })
            : this.agentPool.listActiveChats();
        return this.json({ chats }, 200);
    }
    /** POST /agent/branch-fork — create a first-class forked branch with its own session identity. */
    async handleAgentBranchFork(req) {
        let payload;
        try {
            payload = await req.json();
        }
        catch {
            return this.json({ error: "Invalid JSON" }, 400);
        }
        const sourceChatJid = typeof payload?.source_chat_jid === "string" && payload.source_chat_jid.trim()
            ? payload.source_chat_jid.trim()
            : DEFAULT_CHAT_JID;
        const agentName = typeof payload?.agent_name === "string" ? payload.agent_name.trim() : "";
        try {
            const branch = await this.agentPool.createForkedChatBranch?.(sourceChatJid, {
                agentName: agentName || null,
            });
            if (!branch) {
                return this.json({ error: "Branch forking is not available." }, 501);
            }
            return this.json({ status: "ok", branch }, 201);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error || "Failed to fork branch.");
            return this.json({ error: message || "Failed to fork branch." }, 400);
        }
    }
    /** POST /agent/branch-rename — rename a registry-backed branch agent/display identity. */
    async handleAgentBranchRename(req) {
        let payload;
        try {
            payload = await req.json();
        }
        catch {
            return this.json({ error: "Invalid JSON" }, 400);
        }
        const chatJid = typeof payload?.chat_jid === "string" && payload.chat_jid.trim()
            ? payload.chat_jid.trim()
            : DEFAULT_CHAT_JID;
        const hasAgentName = typeof payload?.agent_name === "string";
        if (!hasAgentName) {
            return this.json({ error: "Missing agent_name" }, 400);
        }
        try {
            const branch = await this.agentPool.renameChatBranch?.(chatJid, {
                agentName: payload.agent_name ?? null,
            });
            if (!branch) {
                return this.json({ error: "Branch renaming is not available." }, 501);
            }
            return this.json({ status: "ok", branch }, 200);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error || "Failed to rename branch.");
            return this.json({ error: message || "Failed to rename branch." }, 400);
        }
    }
    /** POST /agent/branch-prune — archive a registry-backed branch agent and remove it from active discovery. */
    async handleAgentBranchPrune(req) {
        let payload;
        try {
            payload = await req.json();
        }
        catch {
            return this.json({ error: "Invalid JSON" }, 400);
        }
        const chatJid = typeof payload?.chat_jid === "string" && payload.chat_jid.trim()
            ? payload.chat_jid.trim()
            : "";
        if (!chatJid) {
            return this.json({ error: "Missing chat_jid" }, 400);
        }
        try {
            const branch = await this.agentPool.pruneChatBranch?.(chatJid);
            if (!branch) {
                return this.json({ error: "Branch pruning is not available." }, 501);
            }
            return this.json({ status: "ok", branch }, 200);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error || "Failed to prune branch.");
            return this.json({ error: message || "Failed to prune branch." }, 400);
        }
    }
    /** POST /agent/branch-restore — restore an archived branch agent back into active discovery. */
    async handleAgentBranchRestore(req) {
        let payload;
        try {
            payload = await req.json();
        }
        catch {
            return this.json({ error: "Invalid JSON" }, 400);
        }
        const chatJid = typeof payload?.chat_jid === "string" && payload.chat_jid.trim()
            ? payload.chat_jid.trim()
            : "";
        if (!chatJid) {
            return this.json({ error: "Missing chat_jid" }, 400);
        }
        try {
            const branch = await this.agentPool.restoreChatBranch?.(chatJid, {
                ...(typeof payload?.agent_name === "string" ? { agentName: payload.agent_name } : {}),
            });
            if (!branch) {
                return this.json({ error: "Branch restore is not available." }, 501);
            }
            return this.json({ status: "ok", branch }, 200);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error || "Failed to restore branch.");
            return this.json({ error: message || "Failed to restore branch." }, 400);
        }
    }
    /**
     * POST /agent/peer-message — send a message from one active chat agent/window to another.
     * Reuses the normal agent message path in the target chat so queue/defer semantics stay consistent.
     */
    async handleAgentPeerMessage(req) {
        let payload;
        try {
            payload = await req.json();
        }
        catch {
            return this.json({ error: "Invalid JSON" }, 400);
        }
        const sourceChatJid = typeof payload?.source_chat_jid === "string" ? payload.source_chat_jid.trim() : "";
        const sourceAgentName = typeof payload?.source_agent_name === "string" ? payload.source_agent_name.trim() : "";
        const requestedTargetChatJid = typeof payload?.target_chat_jid === "string" ? payload.target_chat_jid.trim() : "";
        const requestedTargetAgentName = typeof payload?.target_agent_name === "string" ? payload.target_agent_name.trim() : "";
        const content = typeof payload?.content === "string" ? payload.content.trim() : "";
        const mode = payload?.mode === "queue" || payload?.mode === "steer" || payload?.mode === "auto"
            ? payload.mode
            : "auto";
        if (!sourceChatJid)
            return this.json({ error: "Missing source_chat_jid" }, 400);
        if (!requestedTargetChatJid && !requestedTargetAgentName) {
            return this.json({ error: "Missing target_chat_jid or target_agent_name" }, 400);
        }
        if (!content)
            return this.json({ error: "Missing content" }, 400);
        const targetChat = requestedTargetChatJid
            ? this.agentPool.listActiveChats().find((chat) => chat.chat_jid === requestedTargetChatJid)
                ?? getChatBranchByChatJid(requestedTargetChatJid)
            : (typeof this.agentPool.findChatByAgentName === "function"
                ? this.agentPool.findChatByAgentName(requestedTargetAgentName)
                : this.agentPool.findActiveChatByAgentName(requestedTargetAgentName));
        if (!targetChat) {
            return this.json({ error: requestedTargetAgentName ? `Unknown target agent: ${requestedTargetAgentName}` : `Target chat is not active: ${requestedTargetChatJid}` }, 404);
        }
        if (sourceChatJid === targetChat.chat_jid) {
            return this.json({ error: "source_chat_jid and target chat must differ" }, 400);
        }
        const effectiveSourceAgentName = sourceAgentName || this.agentPool.getAgentHandleForChat(sourceChatJid);
        const forwardedContent = `Peer message from @${effectiveSourceAgentName}:\n\n${content}`;
        const forwardReq = new Request(`http://internal/agent/${DEFAULT_AGENT_ID}/message?chat_jid=${encodeURIComponent(targetChat.chat_jid)}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: forwardedContent,
                mode,
            }),
        });
        const forwardRes = await handleAgentMessageRequest(this, forwardReq, `/agent/${DEFAULT_AGENT_ID}/message`, targetChat.chat_jid, DEFAULT_AGENT_ID);
        if (!forwardRes.ok) {
            return forwardRes;
        }
        const responseBody = await forwardRes.json().catch(() => ({}));
        return this.json({
            status: "ok",
            ...responseBody,
            source_chat_jid: sourceChatJid,
            source_agent_name: effectiveSourceAgentName,
            target_chat_jid: targetChat.chat_jid,
            target_agent_name: targetChat.agent_name,
            relayed: true,
        }, forwardRes.status);
    }
    /**
     * POST /agent/respond – Handle a UI response to an agent request (e.g., confirmation dialog).
     * Validates request_id is a non-empty string of ≤ 256 chars.
     */
    async handleAgentRespond(req) {
        return await handleAgentRespondRequest(req, this.endpointContexts.ui());
    }
    async handleAdaptiveCardAction(req) {
        let payload;
        try {
            payload = await req.json();
        }
        catch {
            return this.json({ error: "Invalid JSON" }, 400);
        }
        const normalized = sanitizeAdaptiveCardActionPayload(payload);
        const chatJid = normalized.chatJid ?? DEFAULT_CHAT_JID;
        if (!normalized.postId || normalized.postId <= 0) {
            return this.json({ error: "Missing or invalid post_id" }, 400);
        }
        const sourcePostId = normalized.postId;
        if (!normalized.cardId) {
            return this.json({ error: "Missing or invalid card_id" }, 400);
        }
        if (!normalized.actionType) {
            return this.json({ error: "Missing or invalid action.type" }, 400);
        }
        if (normalized.actionType === "Action.OpenUrl") {
            return this.json({ status: "ok", handled: "client", action_type: normalized.actionType, url: normalized.actionUrl || null }, 200);
        }
        if (normalized.actionType !== "Action.Submit") {
            return this.json({ error: `Unsupported action type: ${normalized.actionType}` }, 400);
        }
        const sourceInteraction = getMessageByRowId(chatJid, sourcePostId);
        if (!sourceInteraction) {
            return this.json({ error: "Source post not found" }, 404);
        }
        const simulatedFailure = getAdaptiveCardTestFailure(normalized.cardId, normalized.actionData);
        if (simulatedFailure) {
            return this.json({ error: simulatedFailure }, 422);
        }
        const submittedAt = new Date().toISOString();
        const sanitizedSubmissionData = sanitizeAdaptiveCardSubmissionData(normalized.actionData);
        const submissionMeta = {
            action_type: normalized.actionType,
            title: normalized.actionTitle || undefined,
            data: sanitizedSubmissionData,
            submitted_at: submittedAt,
        };
        const submitBehavior = getAdaptiveCardSubmitBehavior(sourceInteraction.data?.content_blocks, normalized.cardId);
        const targetState = getAdaptiveCardSubmitState(normalized.actionData);
        const updatedCardBlocks = submitBehavior === "keep_active"
            ? sourceInteraction.data?.content_blocks ?? null
            : markAdaptiveCardState(sourceInteraction.data?.content_blocks, normalized.cardId, targetState, submittedAt, submissionMeta);
        if (!updatedCardBlocks) {
            return this.json({ error: "Adaptive card not found or no longer active" }, 409);
        }
        const threadId = normalized.threadId ?? sourceInteraction.data?.thread_id ?? sourceInteraction.id;
        const submissionText = buildAdaptiveCardSubmissionText(normalized.actionTitle, normalized.cardId, sanitizedSubmissionData);
        const submissionBlock = buildAdaptiveCardSubmitBlock({
            cardId: normalized.cardId,
            sourcePostId,
            title: normalized.actionTitle || undefined,
            data: sanitizedSubmissionData,
            submittedAt,
        });
        // ── Login/TOTP flow cards: handle without agent ───────────
        const rawSubmissionData = normalized.actionData && typeof normalized.actionData === "object"
            ? normalized.actionData
            : null;
        const submissionData = sanitizedSubmissionData;
        const updateSourceCard = (contentBlocks) => {
            if (!contentBlocks)
                return null;
            const interaction = replaceMessageContent(chatJid, sourcePostId, sourceInteraction.data?.content || "", {
                contentBlocks,
                linkPreviews: Array.isArray(sourceInteraction.data?.link_previews) ? sourceInteraction.data.link_previews : undefined,
                mediaIds: Array.isArray(sourceInteraction.data?.media_ids) ? sourceInteraction.data.media_ids : undefined,
            });
            if (interaction) {
                this.interactionBroadcaster.broadcastInteractionUpdated(interaction);
            }
            return interaction;
        };
        const loginIntents = new Set(["login-step1", "login-step1-method", "login-step2", "login-step3"]);
        const isLoginFlow = submissionData && typeof submissionData.intent === "string" && loginIntents.has(submissionData.intent);
        if (isLoginFlow) {
            // Update the source card to completed state (no separate user message needed)
            const updatedCardInteraction = submitBehavior === "keep_active"
                ? null
                : updateSourceCard(updatedCardBlocks);
            // Route through applyControlCommand to access authStorage/modelRegistry
            const routePrefix = submissionData.intent === "login-step1" ? "__step1 "
                : submissionData.intent === "login-step1-method" ? "__step1method "
                    : submissionData.intent === "login-step2" ? "__step2 "
                        : "__step3 ";
            const authResult = await this.agentPool.applyControlCommand(chatJid, {
                type: "login",
                provider: `${routePrefix}${JSON.stringify(submissionData)}`,
                raw: `/login ${routePrefix}`,
            });
            // Post result — with or without follow-up cards
            const sendOpts = { threadId };
            if (authResult.contentBlocks?.length) {
                sendOpts.contentBlocks = authResult.contentBlocks;
            }
            this.sendMessage(chatJid, authResult.message, sendOpts);
            return this.json({
                status: "ok",
                card_updated: Boolean(updatedCardInteraction),
                source_post_id: sourcePostId,
                card_id: normalized.cardId,
                submitted_at: submittedAt,
                auth_result: authResult.status,
            }, 200);
        }
        const isTotpFlow = rawSubmissionData && rawSubmissionData.intent === "totp-confirm";
        // ── Autoresearch launch card action (model picker) ──────────
        const isAutoresearchLaunch = rawSubmissionData && rawSubmissionData.intent === "autoresearch-launch";
        if (isAutoresearchLaunch) {
            updateSourceCard(markAdaptiveCardState(sourceInteraction.data?.content_blocks, normalized.cardId, "completed", submittedAt, { action_type: normalized.actionType, title: "Launch", data: { intent: "autoresearch-launch" }, submitted_at: submittedAt }));
            const selectedModel = typeof rawSubmissionData.model === "string" ? rawSubmissionData.model.trim() : "";
            const sandboxToggle = rawSubmissionData.sandbox;
            const useSandbox = sandboxToggle === "true" || sandboxToggle === true;
            if (!selectedModel) {
                await this.sendMessage(chatJid, "No model selected.", { threadId });
                return this.json({ status: "ok", card_updated: true, source_post_id: sourcePostId, card_id: normalized.cardId }, 200);
            }
            try {
                const { consumePendingLaunch } = await import("../extensions/autoresearch-supervisor.js");
                const pending = consumePendingLaunch();
                if (!pending) {
                    await this.sendMessage(chatJid, "No pending experiment launch found. Use start_autoresearch to set one up.", { threadId });
                    return this.json({ status: "ok", card_updated: true, source_post_id: sourcePostId, card_id: normalized.cardId }, 200);
                }
                // Trigger the actual launch by sending the command to the agent
                await this.sendMessage(chatJid, `Launching with model **${selectedModel}**…`, { threadId });
                // Use the agent tool directly
                const { startAutoresearchFromCard } = await import("../extensions/autoresearch-supervisor.js");
                const result = await startAutoresearchFromCard({
                    project_dir: pending.project_dir,
                    prompt: pending.prompt,
                    model: selectedModel,
                    sandbox: useSandbox,
                    max_iterations: pending.max_iterations,
                    variables: pending.variables,
                    chat_jid: pending.chat_jid || chatJid,
                });
                await this.sendMessage(chatJid, result, { threadId });
            }
            catch (err) {
                const msg = err instanceof Error ? err.message : String(err);
                await this.sendMessage(chatJid, `Failed to launch experiment: ${msg}`, { threadId });
            }
            return this.json({ status: "ok", card_updated: true, source_post_id: sourcePostId, card_id: normalized.cardId }, 200);
        }
        // ── Autoresearch stop card action ──────────────────────────
        const isAutoresearchStop = rawSubmissionData && rawSubmissionData.intent === "autoresearch-stop";
        if (isAutoresearchStop) {
            updateSourceCard(markAdaptiveCardState(sourceInteraction.data?.content_blocks, normalized.cardId, "completed", submittedAt, { action_type: normalized.actionType, title: "Stop", data: { intent: "autoresearch-stop" }, submitted_at: submittedAt }));
            // Trigger stop via the agent tool
            const experimentId = typeof rawSubmissionData.experiment_id === "string" ? rawSubmissionData.experiment_id : "";
            await this.sendMessage(chatJid, `Stopping autoresearch experiment${experimentId ? ` ${experimentId}` : ""}…`, { threadId });
            // Import and invoke stop directly
            try {
                const { stopAutoresearchFromCard } = await import("./web/handlers/autoresearch-card-action.js");
                const result = await stopAutoresearchFromCard();
                await this.sendMessage(chatJid, result, { threadId });
            }
            catch (err) {
                const msg = err instanceof Error ? err.message : String(err);
                await this.sendMessage(chatJid, `Failed to stop experiment: ${msg}`, { threadId });
            }
            return this.json({
                status: "ok",
                card_updated: true,
                source_post_id: sourcePostId,
                card_id: normalized.cardId,
                submitted_at: submittedAt,
            }, 200);
        }
        if (isTotpFlow) {
            const safeSubmissionMeta = {
                action_type: normalized.actionType,
                title: normalized.actionTitle || undefined,
                data: { intent: "totp-confirm" },
                submitted_at: submittedAt,
            };
            const completeTotpCard = (state) => updateSourceCard(markAdaptiveCardState(sourceInteraction.data?.content_blocks, normalized.cardId, state, submittedAt, safeSubmissionMeta));
            const sendTotpFeedback = async (message, state, setCookie) => {
                await this.sendMessage(chatJid, message, { threadId });
                const headers = { "Content-Type": "application/json" };
                if (setCookie)
                    headers["Set-Cookie"] = setCookie;
                return new Response(JSON.stringify({
                    status: "ok",
                    source_post_id: sourcePostId,
                    card_id: normalized.cardId,
                    card_state: state,
                    submitted_at: submittedAt,
                    totp_result: state === "completed" ? "success" : "error",
                    message,
                }), { status: 200, headers });
            };
            const confirmationCode = typeof rawSubmissionData.confirmation_code === "string"
                ? rawSubmissionData.confirmation_code.trim()
                : "";
            const token = typeof rawSubmissionData.__totp_token === "string"
                ? rawSubmissionData.__totp_token.trim()
                : "";
            if (!confirmationCode) {
                return await sendTotpFeedback("TOTP validation failed: missing confirmation code. No changes were made.", "active");
            }
            const parsedTotp = parseTotpCardToken(token);
            if (!parsedTotp.ok) {
                completeTotpCard("failed");
                const message = parsedTotp.error === "expired"
                    ? "TOTP validation failed: this confirmation card expired. No changes were made. Run /totp again."
                    : "TOTP validation failed: this confirmation card is invalid. No changes were made. Run /totp again.";
                return await sendTotpFeedback(message, "failed");
            }
            const activeSecret = (WEB_TOTP_SECRET || "").trim();
            if (hashTotpSecret(activeSecret) !== parsedTotp.state.previousSecretHash) {
                completeTotpCard("failed");
                return await sendTotpFeedback("TOTP validation failed: active TOTP state changed since this card was created. No changes were made. Run /totp again.", "failed");
            }
            if (!verifyTotp(parsedTotp.state.secret, confirmationCode, WEB_TOTP_WINDOW)) {
                return await sendTotpFeedback("TOTP validation failed: the code did not match the secret shown in the card. No changes were made.", "active");
            }
            const feedback = parsedTotp.state.flow === "setup"
                ? (() => {
                    setWebTotpSecret(parsedTotp.state.secret);
                    this.authGateway.setTotpSecret(parsedTotp.state.secret);
                    return "TOTP setup confirmed. Secret saved. This browser is now TOTP-authenticated.";
                })()
                : parsedTotp.state.flow === "reset"
                    ? (() => {
                        setWebTotpSecret(parsedTotp.state.secret);
                        this.authGateway.setTotpSecret(parsedTotp.state.secret);
                        deleteAllWebSessions();
                        return "TOTP reset confirmed. New secret saved. Existing web sessions were invalidated. This browser is now TOTP-authenticated.";
                    })()
                    : "TOTP device validation succeeded. Existing secret unchanged. This browser is now TOTP-authenticated.";
            completeTotpCard("completed");
            const sessionToken = randomSessionToken();
            createWebSession(sessionToken, DEFAULT_WEB_USER_ID, getWebSessionTtlSeconds(), "totp");
            const setCookie = this.authGateway.createTotpContext().buildSessionCookie(sessionToken, req);
            return await sendTotpFeedback(feedback, "completed", setCookie);
        }
        const forwardReq = new Request(`http://internal/agent/${DEFAULT_AGENT_ID}/message`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: submissionText,
                thread_id: threadId,
                content_blocks: [submissionBlock],
            }),
        });
        const forwardRes = await handleAgentMessageRequest(this, forwardReq, `/agent/${DEFAULT_AGENT_ID}/message`, chatJid, DEFAULT_AGENT_ID);
        if (!forwardRes.ok) {
            return forwardRes;
        }
        // When debug card submissions is off, remove the visible "Card submission: ..."
        // user message from the timeline. The submission data is preserved in the
        // source card's last_submission and content_blocks.
        if (!DEBUG_CARD_SUBMISSIONS) {
            const forwardBody = await forwardRes.clone().json().catch(() => null);
            const forwardBodyRecord = forwardBody;
            const rawSubmissionPostId = forwardBodyRecord?.id ?? forwardBodyRecord?.user_message?.id;
            const submissionPostId = typeof rawSubmissionPostId === "number"
                ? rawSubmissionPostId
                : typeof rawSubmissionPostId === "string"
                    ? Number(rawSubmissionPostId)
                    : NaN;
            if (Number.isFinite(submissionPostId) && submissionPostId > 0) {
                this.broadcastEvent("interaction_deleted", { chat_jid: chatJid, ids: [submissionPostId] });
            }
        }
        const updatedInteraction = submitBehavior === "keep_active"
            ? null
            : replaceMessageContent(chatJid, sourcePostId, sourceInteraction.data?.content || "", {
                contentBlocks: updatedCardBlocks,
                linkPreviews: Array.isArray(sourceInteraction.data?.link_previews) ? sourceInteraction.data.link_previews : undefined,
                mediaIds: Array.isArray(sourceInteraction.data?.media_ids) ? sourceInteraction.data.media_ids : undefined,
            });
        if (updatedInteraction) {
            this.interactionBroadcaster.broadcastInteractionUpdated(updatedInteraction);
        }
        const responseBody = await forwardRes.json().catch(() => ({}));
        return this.json({
            ...responseBody,
            card_updated: Boolean(updatedInteraction),
            source_post_id: sourcePostId,
            card_id: normalized.cardId,
            card_state: submitBehavior === "keep_active" ? "active" : (updatedInteraction ? targetState : null),
            submitted_at: submittedAt,
        }, forwardRes.status);
    }
    async handleAgentSidePrompt(req) {
        let payload;
        try {
            payload = await req.json();
        }
        catch {
            return this.json({ error: "Invalid JSON" }, 400);
        }
        const { prompt, systemPrompt, chatJid } = parseSidePromptPayload(payload);
        if (!prompt) {
            return this.json({ error: "Missing or invalid prompt" }, 400);
        }
        const result = await this.agentPool.runSidePrompt(chatJid, prompt, {
            ...(systemPrompt ? { systemPrompt } : {}),
        });
        if (result.status === "error") {
            return this.json(result, 502);
        }
        return this.json(result, 200);
    }
    async handleAgentSidePromptStream(req) {
        let payload;
        try {
            payload = await req.json();
        }
        catch {
            return this.json({ error: "Invalid JSON" }, 400);
        }
        const { prompt, systemPrompt, chatJid } = parseSidePromptPayload(payload);
        if (!prompt) {
            return this.json({ error: "Missing or invalid prompt" }, 400);
        }
        const encoder = new TextEncoder();
        const stream = new ReadableStream({
            start: (controller) => {
                let closed = false;
                const close = () => {
                    if (closed)
                        return;
                    closed = true;
                    try {
                        controller.close();
                    }
                    catch {
                        /* expected: ReadableStream controller may already be closed/cancelled. */
                    }
                };
                const send = (eventType, data) => {
                    if (closed)
                        return;
                    try {
                        controller.enqueue(encoder.encode(formatSseEvent(eventType, data)));
                    }
                    catch {
                        close();
                    }
                };
                req.signal.addEventListener("abort", close, { once: true });
                send("side_prompt_start", { chat_jid: chatJid });
                void this.agentPool.runSidePrompt(chatJid, prompt, {
                    ...(systemPrompt ? { systemPrompt } : {}),
                    signal: req.signal,
                    onThinkingDelta: (delta) => send("side_prompt_thinking_delta", { delta }),
                    onTextDelta: (delta) => send("side_prompt_text_delta", { delta }),
                }).then((result) => {
                    send(result.status === "success" ? "side_prompt_done" : "side_prompt_error", result);
                    close();
                }).catch((error) => {
                    send("side_prompt_error", {
                        status: "error",
                        result: null,
                        thinking: null,
                        error: error instanceof Error ? error.message : String(error),
                        model: null,
                    });
                    close();
                });
            },
            cancel: () => {
                try {
                    req.signal.throwIfAborted();
                }
                catch {
                    /* expected: cancellation frequently arrives from an already-aborted request signal. */
                }
            },
        });
        return new Response(stream, {
            status: 200,
            headers: {
                "Content-Type": "text/event-stream; charset=utf-8",
                "Cache-Control": "no-cache, no-transform",
                Connection: "keep-alive",
                "X-Accel-Buffering": "no",
            },
        });
    }
    async handleAgentMessage(req, pathname) {
        const url = new URL(req.url);
        const chatJid = url.searchParams.get("chat_jid")?.trim() || DEFAULT_CHAT_JID;
        return handleAgentMessageRequest(this, req, pathname, chatJid, DEFAULT_AGENT_ID);
    }
    async processChat(chatJid, agentId, threadRootId) {
        return processAgentChat(this, chatJid, agentId, threadRootId ?? undefined);
    }
    storeMessage(chatJid, content, isBot, mediaIds, options = {}) {
        return storeWebMessage(this, {
            chatJid,
            content,
            isBot,
            mediaIds,
            agentId: DEFAULT_AGENT_ID,
            agentName: ASSISTANT_NAME,
        }, {
            contentBlocks: options.contentBlocks,
            linkPreviews: options.linkPreviews,
            threadId: options.threadId ?? null,
            isTerminalAgentReply: options.isTerminalAgentReply,
            isSteeringMessage: options.isSteeringMessage,
        });
    }
    async handleRemote(req) {
        return this.remoteInterop.handleRequest(req);
    }
    async serveStatic(relPath) {
        return this.responses.serveStatic(relPath);
    }
    async serveDocsStatic(relPath) {
        return this.responses.serveDocsStatic(relPath);
    }
    json(data, status = 200) {
        return this.responses.json(data, status);
    }
    clampInt(value, fallback, min, max) {
        return this.responses.clampInt(value, fallback, min, max);
    }
    parseOptionalInt(value) {
        return this.responses.parseOptionalInt(value);
    }
}
