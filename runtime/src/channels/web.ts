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

import { AgentQueue } from "../queue.js";
import type { AgentPool } from "../agent-pool.js";
import { WebauthnChallengeTracker } from "./web/webauthn-challenges.js";
import { TotpFailureTracker } from "./web/totp-failure-tracker.js";
import {
  getIdentityConfig,
  getWebRuntimeConfig,
  getWebServerConfig,
  setWebTotpSecret,
} from "../core/config.js";
import type { WebChannelLike } from "./web/web-channel-contracts.js";
import { RequestRouterService } from "./web/request-router-service.js";
import { checkCsrfOrigin } from "./web/http/security.js";
import { handlePost as handlePostRequest } from "./web/handlers/posts.js";
import {
  handleAgentMessage as handleAgentMessageRequest,
  processChat as processAgentChat,
} from "./web/handlers/agent.js";
import { WebSessionBroadcastService } from "./web/session-broadcast-service.js";
import { ResponseService } from "./web/http/response-service.js";
import {
  createWebSession,
  DEFAULT_WEB_USER_ID,
  deleteAllWebSessions,
  replaceMessageContent,
  getChatBranchByChatJid,
  getChatCursor,
  getDb,
  getInflightMessageId,
  getMessageByRowId,
  getMessageThreadRootIdById,
} from "../db.js";
import type { InteractionRow } from "../db.js";
import type { QueuedFollowupItem } from "./web/followup-placeholders.js";
import { QueuedFollowupLifecycleService } from "./web/queued-followup-lifecycle-service.js";
import { storeWebMessage } from "./web/message-store.js";
import type { SendMessageOptions } from "./web/message-write-flows.js";
import { WebMessageWriteService } from "./web/message-write-service.js";
import { deletePostResponse } from "./web/timeline-service.js";
import { ensureAvatarCache, resolveAvatarUrl } from "./web/avatar-service.js";
import {
  handleAgentContextRequest,
  handleAgentModelsRequest,
  handleAgentStatusRequest,
} from "./web/agent-status.js";
import type { WebAgentBufferEntry } from "./web/agent-buffers.js";
import {
  handleHashtagRequest,
  handleSearchRequest,
  handleThoughtRequest,
  handleThreadRequest,
  handleTimelineRequest,
} from "./web/content-endpoints.js";
import {
  handleAgentsRequest,
  handleAvatarRequest,
} from "./web/identity-endpoints.js";
import { createAgentsEndpointContext } from "./web/endpoint-contexts.js";
import { handleManifestRequest } from "./web/manifest.js";
import { WebChannelRuntimeStateService } from "./web/runtime-state-service.js";
import {
  handleInternalPostRequest,
  handleUpdatePostRequest,
} from "./web/post-mutations.js";
import {
  handleAgentRespondRequest,
  handleThoughtVisibilityRequest,
  handleWorkspaceVisibilityRequest,
} from "./web/ui-endpoints.js";
import {
  buildAdaptiveCardSubmissionText,
  buildAdaptiveCardSubmitBlock,
  getAdaptiveCardSubmitBehavior,
  getAdaptiveCardSubmitState,
  getAdaptiveCardTestFailure,
  markAdaptiveCardState,
  sanitizeAdaptiveCardActionPayload,
  sanitizeAdaptiveCardSubmissionData,
} from "./web/adaptive-card-actions.js";
import {
  createWebChannelEndpointContexts,
  type WebChannelEndpointContexts,
} from "./web/channel-endpoint-context-factory.js";
import { createInteractionBroadcaster, type InteractionBroadcaster } from "./web/interaction-broadcaster.js";
import { WebAuthGateway } from "./web/auth-gateway.js";
import {
  createWebServerLifecycleGateway,
  WebServerLifecycleGatewayService,
  type WebSocketSessionData,
} from "./web/server-lifecycle-gateway-service.js";
import { TerminalSessionService } from "./web/terminal/terminal-session-service.js";
import { VncSessionService } from "./web/vnc/vnc-session-service.js";
import { RemoteInteropService } from "../remote/service.js";
import { createLogger } from "../utils/logger.js";
import { randomSessionToken, verifyTotp } from "./web/auth.js";
import { parseJsonObjectRequest } from "./web/json-body.js";
import { hashTotpSecret, parseTotpCardToken } from "./web/totp-card.js";

const log = createLogger("web");
const DEFAULT_CHAT_JID = "web:default";
const DEFAULT_AGENT_ID = "default";
const STATE_KEY = "last_agent_timestamp_web";

function getWebSessionTtlSeconds(): number {
  const rawTtl = getWebRuntimeConfig().sessionTtl;
  return Math.max(60, rawTtl || 0);
}

function formatSseEvent(eventType: string, data: unknown): string {
  return `event: ${eventType}\ndata: ${JSON.stringify(data)}\n\n`;
}

function parseSidePromptPayload(payload: { prompt?: string; system_prompt?: string; chat_jid?: string }): {
  prompt: string;
  systemPrompt: string;
  chatJid: string;
} {
  return {
    prompt: typeof payload.prompt === "string" ? payload.prompt.trim() : "",
    systemPrompt: typeof payload.system_prompt === "string" ? payload.system_prompt.trim() : "",
    chatJid: typeof payload.chat_jid === "string" && payload.chat_jid.trim() ? payload.chat_jid.trim() : DEFAULT_CHAT_JID,
  };
}

/** Construction options for WebChannel: queue and agentPool references. */
export interface WebChannelOpts {
  queue: AgentQueue;
  agentPool: AgentPool;
}

/** Web channel: HTTP/SSE server, API endpoints, and agent event bridge. */
export class WebChannel implements WebChannelLike {
  queue: AgentQueue;
  agentPool: AgentPool;
  remoteInterop: RemoteInteropService;
  responses = new ResponseService();
  requestRouter: RequestRouterService;
  endpointContexts: WebChannelEndpointContexts;
  pendingLinkPreviews = new Set<number>();
  workspaceVisible = false;
  workspaceShowHidden = false;
  queuedFollowupLifecycle = new QueuedFollowupLifecycleService();
  interactionBroadcaster: InteractionBroadcaster;
  lastCommandInteractionId: number | null = null;
  webauthnChallenges = new WebauthnChallengeTracker();
  totpFailureTracker = new TotpFailureTracker();
  authGateway: WebAuthGateway;
  terminalService = new TerminalSessionService();
  vncService = new VncSessionService();
  private readonly sessionBroadcast: WebSessionBroadcastService;
  private readonly runtimeState: WebChannelRuntimeStateService;
  private readonly serverLifecycleGateway: WebServerLifecycleGatewayService;
  private readonly messageWriteService: WebMessageWriteService;
  private readonly webServerConfig = getWebServerConfig();
  private readonly webRuntimeConfig = getWebRuntimeConfig();

  constructor(opts: WebChannelOpts) {
    this.queue = opts.queue;
    this.agentPool = opts.agentPool;
    this.sessionBroadcast = new WebSessionBroadcastService(this.agentPool);
    this.remoteInterop = new RemoteInteropService(this.agentPool);
    this.runtimeState = new WebChannelRuntimeStateService(
      {
        getAssistantName: () => getIdentityConfig().assistantName,
        getChatCursor: (chatJid) => getChatCursor(chatJid),
        enqueue: (task, key, laneKey) => this.queue.enqueue(task, key, laneKey),
        processChat: (chatJid, agentId, threadRootId) => this.processChat(chatJid, agentId, threadRootId),
      },
      {
        defaultAgentId: DEFAULT_AGENT_ID,
        stateKey: STATE_KEY,
      }
    );
    this.interactionBroadcaster = createInteractionBroadcaster(this, () => {
      const identity = getIdentityConfig();
      return {
        agentName: identity.assistantName,
        agentAvatar: resolveAvatarUrl("agent", identity.assistantAvatar),
        userName: identity.userName || null,
        userAvatar: resolveAvatarUrl("user", identity.userAvatar),
        userAvatarBackground: identity.userAvatarBackground || null,
      };
    });
    this.authGateway = new WebAuthGateway(
      {
        passkeyMode: this.webRuntimeConfig.passkeyMode || "",
        totpSecret: this.webRuntimeConfig.totpSecret || "",
        internalSecret: this.webRuntimeConfig.internalSecret || "",
        sessionTtlSeconds: this.webRuntimeConfig.sessionTtl,
        hasTls: Boolean(this.webServerConfig.tlsCert && this.webServerConfig.tlsKey),
      },
      {
        json: (payload, status = 200) => this.json(payload, status),
        challenges: this.webauthnChallenges,
        failureTracker: this.totpFailureTracker,
      }
    );
    this.messageWriteService = new WebMessageWriteService({
      defaultAgentId: DEFAULT_AGENT_ID,
      storeMessage: (chatJid, content, isBot, mediaIds, options) =>
        this.storeMessage(chatJid, content, isBot, mediaIds, options),
      replaceMessageContent: (chatJid, rowId, text, mediaIds, contentBlocks, isTerminalAgentReply) =>
        replaceMessageContent(chatJid, rowId, text, { contentBlocks, mediaIds, isTerminalAgentReply }) ?? null,
      setMessageThreadToSelf: (messageId) => {
        getDb().prepare("UPDATE messages SET thread_id = ? WHERE rowid = ?").run(messageId, messageId);
      },
      broadcastAgentResponse: (interaction) => this.interactionBroadcaster.broadcastAgentResponse(interaction),
      broadcastInteractionUpdated: (interaction) => this.interactionBroadcaster.broadcastInteractionUpdated(interaction),
      enqueueFollowupPlaceholder: (chatJid, rowId, queuedContent, threadId, queuedAt) =>
        this.queuedFollowupLifecycle.enqueuePlaceholder(chatJid, rowId, queuedContent, threadId, queuedAt),
    });
    this.requestRouter = new RequestRouterService(this);
    this.endpointContexts = createWebChannelEndpointContexts(this, {
      defaultChatJid: DEFAULT_CHAT_JID,
      defaultAgentId: DEFAULT_AGENT_ID,
      agentName: getIdentityConfig().assistantName,
      agentAvatar: resolveAvatarUrl("agent", getIdentityConfig().assistantAvatar),
      userName: getIdentityConfig().userName || null,
      userAvatar: resolveAvatarUrl("user", getIdentityConfig().userAvatar),
      userAvatarBackground: getIdentityConfig().userAvatarBackground || null,
      assistantAvatarRaw: getIdentityConfig().assistantAvatar || null,
      userAvatarRaw: getIdentityConfig().userAvatar || null,
    });
    this.serverLifecycleGateway = createWebServerLifecycleGateway(this, {
      webServerConfig: this.webServerConfig,
      webRuntimeConfig: this.webRuntimeConfig,
    });
  }

  get sse(): WebSessionBroadcastService["sse"] {
    return this.sessionBroadcast.sse;
  }

  get uiBridge(): WebSessionBroadcastService["uiBridge"] {
    return this.sessionBroadcast.uiBridge;
  }

  get server(): Bun.Server<WebSocketSessionData> | null {
    return this.serverLifecycleGateway.server;
  }

  async start(): Promise<void> {
    await this.serverLifecycleGateway.start();
  }

  async stop(): Promise<void> {
    await this.serverLifecycleGateway.stop();
  }

  async sendMessage(chatJid: string, text: string, options?: SendMessageOptions): Promise<void> {
    await this.messageWriteService.sendMessage(chatJid, text, options);
  }

  async postDashboardWidget(
    chatJid: string,
    options?: { threadId?: number | null; text?: string; widgetId?: string }
  ): Promise<void> {
    await this.messageWriteService.postDashboardWidget(chatJid, options);
  }

  queueFollowupPlaceholder(chatJid: string, text: string, threadId?: number, queuedContent?: string): InteractionRow | null {
    return this.messageWriteService.queueFollowupPlaceholder(chatJid, text, threadId, queuedContent);
  }

  enqueueQueuedFollowupItem(
    chatJid: string,
    rowId: number,
    queuedContent: string,
    threadId?: number | null,
    queuedAt?: string,
    extras?: { mediaIds?: number[]; contentBlocks?: unknown[]; linkPreviews?: unknown[] }
  ): number {
    return this.queuedFollowupLifecycle.enqueueQueuedFollowupItem(
      chatJid,
      rowId,
      queuedContent,
      threadId,
      queuedAt,
      extras,
    );
  }

  consumeQueuedFollowupItem(chatJid: string): QueuedFollowupItem | null {
    return this.queuedFollowupLifecycle.consumeQueuedFollowupItem(chatJid);
  }

  prependQueuedFollowupItem(chatJid: string, item: QueuedFollowupItem): void {
    this.queuedFollowupLifecycle.prependQueuedFollowupItem(chatJid, item);
  }

  consumeQueuedFollowupPlaceholder(chatJid: string): number | null {
    return this.queuedFollowupLifecycle.consumeQueuedFollowupPlaceholder(chatJid);
  }

  getQueuedFollowupCount(chatJid: string): number {
    return this.queuedFollowupLifecycle.getQueuedFollowupCount(chatJid);
  }

  getQueuedFollowupItems(chatJid: string): QueuedFollowupItem[] {
    return this.queuedFollowupLifecycle.getQueuedFollowupItems(chatJid);
  }

  removeQueuedFollowupItem(chatJid: string, rowId: number): QueuedFollowupItem | null {
    return this.queuedFollowupLifecycle.removeQueuedFollowupItem(chatJid, rowId);
  }

  queuePendingSteering(chatJid: string, timestamp: string | undefined): void {
    this.runtimeState.queuePendingSteering(chatJid, timestamp);
  }

  consumePendingSteering(chatJid: string): string | null {
    return this.runtimeState.consumePendingSteering(chatJid);
  }

  updateAgentStatus(chatJid: string, status: Record<string, unknown>): void {
    this.runtimeState.updateAgentStatus(chatJid, status);
  }

  getAgentStatus(chatJid: string): Record<string, unknown> | null {
    return this.runtimeState.getAgentStatus(chatJid);
  }

  replaceQueuedFollowupPlaceholder(
    chatJid: string,
    rowId: number,
    text: string,
    mediaIds: number[],
    contentBlocks: Array<Record<string, unknown>> | undefined,
    threadId?: number,
    isTerminalAgentReply?: boolean
  ): InteractionRow | null {
    return this.messageWriteService.replaceQueuedFollowupPlaceholder(
      chatJid,
      rowId,
      text,
      mediaIds,
      contentBlocks,
      threadId,
      isTerminalAgentReply,
    );
  }

  getThreadRootId(chatJid: string, messageId: string): number | null {
    return this.runtimeState.getThreadRootId(chatJid, messageId);
  }

  resumeChat(chatJid: string, threadRootId?: number | null): void {
    this.runtimeState.resumeChat(chatJid, threadRootId);
  }

  skipFailedOnModelSwitch(chatJid: string): void {
    this.runtimeState.skipFailedOnModelSwitch(chatJid);
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
  recoverInflightRuns(): void {
    this.runtimeState.recoverInflightRuns();
  }

  /**
   * Scan all known chats (or a specific one) for messages that arrived after
   * their stored cursor and enqueue processChat() for each with pending work.
   * Called after a restart via the resume_pending IPC.
   */
  resumePendingChats(chatJid?: string): void {
    this.runtimeState.resumePendingChats(chatJid);
  }

  loadState(): void {
    this.runtimeState.loadState();
  }

  saveState(): void {
    this.runtimeState.saveState();
  }

  setPanelExpanded(turnId: string, panel: "thought" | "draft", expanded: boolean): void {
    this.runtimeState.setPanelExpanded(turnId, panel, expanded);
  }

  isPanelExpanded(turnId: string, panel: "thought" | "draft"): boolean {
    return this.runtimeState.isPanelExpanded(turnId, panel);
  }

  updateThoughtBuffer(turnId: string, text: string, totalLines: number): void {
    this.runtimeState.updateThoughtBuffer(turnId, text, totalLines);
  }

  updateDraftBuffer(turnId: string, text: string, totalLines: number): void {
    this.runtimeState.updateDraftBuffer(turnId, text, totalLines);
  }

  getBuffer(turnId: string, panel: "thought" | "draft"): WebAgentBufferEntry | undefined {
    return this.runtimeState.getBuffer(turnId, panel);
  }

  async handleFetch(req: Request, server?: Bun.Server<WebSocketSessionData>): Promise<Response | undefined> {
    return this.serverLifecycleGateway.handleFetch(req, server);
  }

  async handleRequest(req: Request): Promise<Response> {
    return this.requestRouter.handle(req);
  }

  async handleAgents(): Promise<Response> {
    // Read live identity values so /agent-name and /agent-avatar changes
    // take effect immediately without a process restart.
    const identity = getIdentityConfig();
    const ctx = createAgentsEndpointContext({
      agentPool: this.agentPool,
      defaultChatJid: DEFAULT_CHAT_JID,
      defaultAgentId: DEFAULT_AGENT_ID,
      agentName: identity.assistantName,
      agentAvatar: resolveAvatarUrl("agent", identity.assistantAvatar),
      userName: identity.userName || null,
      userAvatar: resolveAvatarUrl("user", identity.userAvatar),
      userAvatarBackground: identity.userAvatarBackground || null,
      json: (payload: unknown, status = 200) => this.json(payload, status),
    });
    return await handleAgentsRequest(ctx);
  }

  async handleManifest(req: Request): Promise<Response> {
    const identity = getIdentityConfig();
    return await handleManifestRequest(req, {
      assistantName: identity.assistantName,
      assistantAvatar: identity.assistantAvatar,
      ensureAvatarCache,
    });
  }

  async handleAvatar(kind: "agent" | "user", req: Request): Promise<Response> {
    // Read live avatar values so /agent-avatar changes take effect immediately.
    const identity = getIdentityConfig();
    return await handleAvatarRequest(kind, req, {
      assistantAvatar: identity.assistantAvatar || null,
      userAvatar: identity.userAvatar || null,
      json: (payload: unknown, status = 200) => this.json(payload, status),
    });
  }

  async handleWorkspaceVisibility(req: Request): Promise<Response> {
    return await handleWorkspaceVisibilityRequest(req, this.endpointContexts.ui());
  }

  handleTimeline(limit: number, before?: number, chatJid?: string): Response {
    return handleTimelineRequest(limit, before, chatJid, this.endpointContexts.content());
  }

  handleHashtag(tag: string, limit: number, offset: number, chatJid?: string): Response {
    return handleHashtagRequest(tag, limit, offset, chatJid, this.endpointContexts.content());
  }

  handleSearch(
    query: string,
    limit: number,
    offset: number,
    chatJid?: string,
    searchScope?: "current" | "root" | "all",
    rootChatJid?: string,
  ): Response {
    return handleSearchRequest(query, limit, offset, chatJid, searchScope, rootChatJid, this.endpointContexts.content());
  }

  handleThread(id: number | null, chatJid?: string): Response {
    return handleThreadRequest(id, chatJid, this.endpointContexts.content());
  }

  handleThought(panel: string | null, turnId: string | null): Response {
    return handleThoughtRequest(panel, turnId, this.endpointContexts.content());
  }

  async handleThoughtVisibility(req: Request): Promise<Response> {
    return await handleThoughtVisibilityRequest(req, this.endpointContexts.ui());
  }

  handleDeletePost(req: Request, id: number | null, cascade = false): Response {
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
  async handleUpdatePost(req: Request, id: number | null): Promise<Response> {
    return await handleUpdatePostRequest(req, id, this.endpointContexts.postMutations());
  }

  /**
   * POST /internal/post – Create an internal agent message.
   * Requires internal secret when WEB_INTERNAL_SECRET is configured.
   * Content is capped at 100 KB to prevent DB bloat.
   */
  async handleInternalPost(req: Request): Promise<Response> {
    return await handleInternalPostRequest(req, this.endpointContexts.postMutations());
  }

  handleSse(req: Request): Response {
    return this.sessionBroadcast.handleSse(req);
  }

  handleTerminalSession(req: Request): Response {
    if (!this.webRuntimeConfig.terminalEnabled) {
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

  handleVncSession(req: Request): Response {
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

  async handleVncHandoff(req: Request): Promise<Response> {
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
    if (!this.vncService.resolveTargetReference(targetId)) {
      return this.json({ error: "Unknown or disallowed VNC target", ...this.vncService.getSessionInfo() }, 404);
    }
    const handoff = this.vncService.createHandoffFromRequest(req, targetId, !authEnabled);
    if (!handoff) {
      return this.json({ error: "No live VNC session is available to transfer." }, 409);
    }
    return this.json({ ok: true, handoff }, 200);
  }

  broadcastEvent(eventType: string, data: unknown): void {
    this.sessionBroadcast.broadcastEvent(eventType, data);
  }

  async handlePost(req: Request, isReply: boolean): Promise<Response> {
    const url = new URL(req.url);
    const chatJid = url.searchParams.get("chat_jid")?.trim() || DEFAULT_CHAT_JID;
    return handlePostRequest(this, req, isReply, chatJid);
  }

  handleAgentStatus(req: Request): Response {
    return handleAgentStatusRequest(req, this.endpointContexts.agentStatus());
  }

  /** GET /agent/context — return context window usage for the compose box indicator. */
  async handleAgentContext(req: Request): Promise<Response> {
    return await handleAgentContextRequest(req, this.endpointContexts.agentStatus());
  }

  /** GET /agent/autoresearch/status — current live autoresearch status-panel widget payload. */
  async handleAutoresearchStatus(req: Request): Promise<Response> {
    const url = new URL(req.url);
    const chatJid = url.searchParams.get("chat_jid")?.trim() || DEFAULT_CHAT_JID;
    try {
      const { getAutoresearchWidgetPayload } = await import("../extensions/autoresearch-supervisor.js");
      return this.json(getAutoresearchWidgetPayload(chatJid));
    } catch (error) {
      log.warn("Failed to read autoresearch status", {
        operation: "handle_autoresearch_status",
        err: error,
      });
      return this.json(null);
    }
  }

  /** POST /agent/autoresearch/stop — stop the running autoresearch experiment for this chat. */
  async handleAutoresearchStop(req: Request): Promise<Response> {
    const parsed = await parseJsonObjectRequest(req);
    if (!parsed.ok) return this.json({ error: parsed.error }, 400);

    const payload = parsed.payload as { chat_jid?: string; generate_report?: boolean };
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
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return this.json({ error: message || "Failed to stop autoresearch experiment." }, 500);
    }
  }

  /** POST /agent/autoresearch/dismiss — dismiss the final autoresearch status panel for this chat. */
  async handleAutoresearchDismiss(req: Request): Promise<Response> {
    const parsed = await parseJsonObjectRequest(req);
    if (!parsed.ok) return this.json({ error: parsed.error }, 400);

    const payload = parsed.payload as { chat_jid?: string };
    const chatJid = typeof payload.chat_jid === "string" && payload.chat_jid.trim()
      ? payload.chat_jid.trim()
      : DEFAULT_CHAT_JID;
    try {
      const { dismissAutoresearchWidget } = await import("../extensions/autoresearch-supervisor.js");
      return this.json({
        status: dismissAutoresearchWidget(chatJid) ? "ok" : "noop",
        chat_jid: chatJid,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return this.json({ error: message || "Failed to dismiss autoresearch panel." }, 500);
    }
  }

  /** GET /agent/queue-state — return queued follow-up placeholder count and pending content. */
  async handleAgentQueueState(req: Request): Promise<Response> {
    const url = new URL(req.url);
    const chatJid = url.searchParams.get("chat_jid") ?? DEFAULT_CHAT_JID;
    const items = this.queuedFollowupLifecycle.listQueuedStateItems(chatJid);

    return this.json({
      count: items.length,
      items,
    });
  }

  private async removeQueuedFollowupForAction(
    chatJid: string,
    rowId: number,
  ): Promise<{ removed: QueuedFollowupItem | null; source: "deferred" | "placeholder" | null }> {
    return await this.queuedFollowupLifecycle.removeQueuedFollowupForAction(chatJid, Number(rowId), {
      removeQueuedFollowupMessage: (queuedChatJid, queuedContent) =>
        this.agentPool.removeQueuedFollowupMessage(queuedChatJid, queuedContent),
    });
  }

  /** POST /agent/queue-remove — remove a queued follow-up row from UI + session queue. */
  async handleAgentQueueRemove(req: Request): Promise<Response> {
    const parsed = await parseJsonObjectRequest(req);
    if (!parsed.ok) return this.json({ error: parsed.error }, 400);

    try {
      const payload = parsed.payload as { chat_jid?: string; row_id?: number | string };
      const chatJid = typeof payload.chat_jid === "string" && payload.chat_jid.trim()
        ? payload.chat_jid.trim()
        : DEFAULT_CHAT_JID;
      const rawRowId = payload.row_id;
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
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return this.json({ error: message }, 500);
    }
  }

  /** POST /agent/queue-steer — atomically convert one queued follow-up into steering or an immediate send. */
  async handleAgentQueueSteer(req: Request): Promise<Response> {
    const parsed = await parseJsonObjectRequest(req);
    if (!parsed.ok) return this.json({ error: parsed.error }, 400);

    try {
      const payload = parsed.payload as { chat_jid?: string; row_id?: number | string };
      const chatJid = typeof payload.chat_jid === "string" && payload.chat_jid.trim()
        ? payload.chat_jid.trim()
        : DEFAULT_CHAT_JID;
      const rawRowId = payload.row_id;
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

      const interaction = this.storeMessage(
        chatJid,
        steerContent,
        false,
        removed.mediaIds ?? [],
        {
          contentBlocks: Array.isArray(removed.contentBlocks) ? removed.contentBlocks : undefined,
          linkPreviews: Array.isArray(removed.linkPreviews) ? removed.linkPreviews : undefined,
          threadId: steerThreadId ?? undefined,
          isSteeringMessage: isStreaming,
        }
      );
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
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return this.json({ error: message }, 500);
    }
  }

  /** GET /agent/models — return available model labels and current selection. */
  async handleAgentModels(req: Request): Promise<Response> {
    return await handleAgentModelsRequest(req, this.endpointContexts.agentStatus());
  }

  /** GET /agent/active-chats — enumerate live chat agents/branches currently in the pool. */
  async handleAgentActiveChats(_req: Request): Promise<Response> {
    return this.json({ chats: this.agentPool.listActiveChats() }, 200);
  }

  /** GET /agent/branches — enumerate known branch/session records from the registry. */
  async handleAgentBranches(req: Request): Promise<Response> {
    const url = new URL(req.url);
    const rootChatJid = typeof url.searchParams.get("root_chat_jid") === "string"
      ? url.searchParams.get("root_chat_jid")!.trim()
      : "";
    const includeArchived = ["1", "true", "yes", "on"].includes(
      String(url.searchParams.get("include_archived") || "").trim().toLowerCase()
    );
    const chats = typeof (this.agentPool as AgentPool & { listKnownChats?: (rootChatJid?: string | null, options?: { includeArchived?: boolean }) => unknown[] }).listKnownChats === "function"
      ? (this.agentPool as AgentPool & { listKnownChats: (rootChatJid?: string | null, options?: { includeArchived?: boolean }) => unknown[] }).listKnownChats(rootChatJid || null, { includeArchived })
      : this.agentPool.listActiveChats();
    return this.json({ chats }, 200);
  }

  /** POST /agent/branch-fork — create a first-class forked branch with its own session identity. */
  async handleAgentBranchFork(req: Request): Promise<Response> {
    const parsed = await parseJsonObjectRequest(req);
    if (!parsed.ok) return this.json({ error: parsed.error }, 400);

    const payload = parsed.payload as { source_chat_jid?: string; agent_name?: string };
    const sourceChatJid = typeof payload.source_chat_jid === "string" && payload.source_chat_jid.trim()
      ? payload.source_chat_jid.trim()
      : DEFAULT_CHAT_JID;
    const agentName = typeof payload.agent_name === "string" ? payload.agent_name.trim() : "";

    try {
      const branch = await (this.agentPool as AgentPool & {
        createForkedChatBranch?: (chatJid: string, options?: { agentName?: string | null }) => Promise<unknown>;
      }).createForkedChatBranch?.(sourceChatJid, {
        agentName: agentName || null,
      });
      if (!branch) {
        return this.json({ error: "Branch forking is not available." }, 501);
      }
      return this.json({ status: "ok", branch }, 201);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error || "Failed to fork branch.");
      return this.json({ error: message || "Failed to fork branch." }, 400);
    }
  }

  /** POST /agent/branch-rename — rename a registry-backed branch agent/display identity. */
  async handleAgentBranchRename(req: Request): Promise<Response> {
    const parsed = await parseJsonObjectRequest(req);
    if (!parsed.ok) return this.json({ error: parsed.error }, 400);

    const payload = parsed.payload as { chat_jid?: string; agent_name?: string };
    const chatJid = typeof payload.chat_jid === "string" && payload.chat_jid.trim()
      ? payload.chat_jid.trim()
      : DEFAULT_CHAT_JID;
    const hasAgentName = typeof payload.agent_name === "string";
    if (!hasAgentName) {
      return this.json({ error: "Missing agent_name" }, 400);
    }

    try {
      const branch = await (this.agentPool as AgentPool & {
        renameChatBranch?: (chatJid: string, options?: { agentName?: string | null }) => Promise<unknown>;
      }).renameChatBranch?.(chatJid, {
        agentName: payload.agent_name ?? null,
      });
      if (!branch) {
        return this.json({ error: "Branch renaming is not available." }, 501);
      }
      return this.json({ status: "ok", branch }, 200);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error || "Failed to rename branch.");
      return this.json({ error: message || "Failed to rename branch." }, 400);
    }
  }

  /** POST /agent/branch-prune — archive a registry-backed branch agent and remove it from active discovery. */
  async handleAgentBranchPrune(req: Request): Promise<Response> {
    const parsed = await parseJsonObjectRequest(req);
    if (!parsed.ok) return this.json({ error: parsed.error }, 400);

    const payload = parsed.payload as { chat_jid?: string };
    const chatJid = typeof payload.chat_jid === "string" && payload.chat_jid.trim()
      ? payload.chat_jid.trim()
      : "";
    if (!chatJid) {
      return this.json({ error: "Missing chat_jid" }, 400);
    }

    try {
      const branch = await (this.agentPool as AgentPool & {
        pruneChatBranch?: (chatJid: string) => Promise<unknown>;
      }).pruneChatBranch?.(chatJid);
      if (!branch) {
        return this.json({ error: "Branch pruning is not available." }, 501);
      }
      return this.json({ status: "ok", branch }, 200);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error || "Failed to prune branch.");
      return this.json({ error: message || "Failed to prune branch." }, 400);
    }
  }

  /** POST /agent/branch-restore — restore an archived branch agent back into active discovery. */
  async handleAgentBranchRestore(req: Request): Promise<Response> {
    const parsed = await parseJsonObjectRequest(req);
    if (!parsed.ok) return this.json({ error: parsed.error }, 400);

    const payload = parsed.payload as { chat_jid?: string; agent_name?: string };
    const chatJid = typeof payload.chat_jid === "string" && payload.chat_jid.trim()
      ? payload.chat_jid.trim()
      : "";
    if (!chatJid) {
      return this.json({ error: "Missing chat_jid" }, 400);
    }

    try {
      const branch = await (this.agentPool as AgentPool & {
        restoreChatBranch?: (chatJid: string, options?: { agentName?: string | null }) => Promise<unknown>;
      }).restoreChatBranch?.(chatJid, {
        ...(typeof payload.agent_name === "string" ? { agentName: payload.agent_name } : {}),
      });
      if (!branch) {
        return this.json({ error: "Branch restore is not available." }, 501);
      }
      return this.json({ status: "ok", branch }, 200);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error || "Failed to restore branch.");
      return this.json({ error: message || "Failed to restore branch." }, 400);
    }
  }

  /**
   * POST /agent/peer-message — send a message from one active chat agent/window to another.
   * Reuses the normal agent message path in the target chat so queue/defer semantics stay consistent.
   */
  async handleAgentPeerMessage(req: Request): Promise<Response> {
    const parsed = await parseJsonObjectRequest(req);
    if (!parsed.ok) return this.json({ error: parsed.error }, 400);

    const payload = parsed.payload as {
      source_chat_jid?: string;
      source_agent_name?: string;
      target_chat_jid?: string;
      target_agent_name?: string;
      content?: string;
      mode?: "auto" | "queue" | "steer";
    };

    const sourceChatJid = typeof payload.source_chat_jid === "string" ? payload.source_chat_jid.trim() : "";
    const sourceAgentName = typeof payload.source_agent_name === "string" ? payload.source_agent_name.trim() : "";
    const requestedTargetChatJid = typeof payload.target_chat_jid === "string" ? payload.target_chat_jid.trim() : "";
    const requestedTargetAgentName = typeof payload.target_agent_name === "string" ? payload.target_agent_name.trim() : "";
    const content = typeof payload.content === "string" ? payload.content.trim() : "";
    const mode = payload.mode === "queue" || payload.mode === "steer" || payload.mode === "auto"
      ? payload.mode
      : "auto";

    if (!sourceChatJid) return this.json({ error: "Missing source_chat_jid" }, 400);
    if (!requestedTargetChatJid && !requestedTargetAgentName) {
      return this.json({ error: "Missing target_chat_jid or target_agent_name" }, 400);
    }
    if (!content) return this.json({ error: "Missing content" }, 400);

    const targetChat = requestedTargetChatJid
      ? this.agentPool.listActiveChats().find((chat) => chat.chat_jid === requestedTargetChatJid)
          ?? getChatBranchByChatJid(requestedTargetChatJid)
      : (typeof (this.agentPool as { findChatByAgentName?: (name: string) => { chat_jid: string; agent_name: string } | null }).findChatByAgentName === "function"
          ? (this.agentPool as { findChatByAgentName: (name: string) => { chat_jid: string; agent_name: string } | null }).findChatByAgentName(requestedTargetAgentName)
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

    const responseBody = await forwardRes.json().catch(() => ({} as Record<string, unknown>));
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
  async handleAgentRespond(req: Request): Promise<Response> {
    return await handleAgentRespondRequest(req, this.endpointContexts.ui());
  }

  async handleAdaptiveCardAction(req: Request): Promise<Response> {
    const parsed = await parseJsonObjectRequest(req);
    if (!parsed.ok) return this.json({ error: parsed.error }, 400);

    const payload = parsed.payload as {
      post_id?: number | string;
      thread_id?: number | string | null;
      card_id?: string;
      chat_jid?: string;
      action?: { type?: string; title?: string; data?: unknown; url?: string };
    };

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
      : markAdaptiveCardState(
          sourceInteraction.data?.content_blocks,
          normalized.cardId,
          targetState,
          submittedAt,
          submissionMeta,
        );
    if (!updatedCardBlocks) {
      return this.json({ error: "Adaptive card not found or no longer active" }, 409);
    }

    const threadId = normalized.threadId ?? sourceInteraction.data?.thread_id ?? sourceInteraction.id;
    const submissionText = buildAdaptiveCardSubmissionText(
      normalized.actionTitle,
      normalized.cardId,
      sanitizedSubmissionData,
    );
    const submissionBlock = buildAdaptiveCardSubmitBlock({
      cardId: normalized.cardId,
      sourcePostId,
      title: normalized.actionTitle || undefined,
      data: sanitizedSubmissionData,
      submittedAt,
    });

    // ── Login/TOTP flow cards: handle without agent ───────────
    const rawSubmissionData = normalized.actionData && typeof normalized.actionData === "object"
      ? (normalized.actionData as Record<string, unknown>)
      : null;
    const submissionData = sanitizedSubmissionData as Record<string, unknown> | null;
    const updateSourceCard = (contentBlocks: unknown[] | null) => {
      if (!contentBlocks) return null;
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
      const sendOpts: Record<string, unknown> = { threadId };
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
      updateSourceCard(
        markAdaptiveCardState(
          sourceInteraction.data?.content_blocks,
          normalized.cardId,
          "completed",
          submittedAt,
          { action_type: normalized.actionType, title: "Launch", data: { intent: "autoresearch-launch" }, submitted_at: submittedAt },
        ),
      );

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
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        log.warn("Failed to launch autoresearch experiment from adaptive card", {
          operation: "handle_adaptive_card_action.autoresearch_launch",
          chatJid,
          err,
        });
        await this.sendMessage(chatJid, `Failed to launch experiment: ${msg}`, { threadId });
      }

      return this.json({ status: "ok", card_updated: true, source_post_id: sourcePostId, card_id: normalized.cardId }, 200);
    }

    // ── Autoresearch stop card action ──────────────────────────
    const isAutoresearchStop = rawSubmissionData && rawSubmissionData.intent === "autoresearch-stop";
    if (isAutoresearchStop) {
      updateSourceCard(
        markAdaptiveCardState(
          sourceInteraction.data?.content_blocks,
          normalized.cardId,
          "completed",
          submittedAt,
          { action_type: normalized.actionType, title: "Stop", data: { intent: "autoresearch-stop" }, submitted_at: submittedAt },
        ),
      );

      // Trigger stop via the agent tool
      const experimentId = typeof rawSubmissionData.experiment_id === "string" ? rawSubmissionData.experiment_id : "";
      await this.sendMessage(chatJid, `Stopping autoresearch experiment${experimentId ? ` ${experimentId}` : ""}…`, { threadId });

      // Import and invoke stop directly
      try {
        const { stopAutoresearchFromCard } = await import("./web/handlers/autoresearch-card-action.js");
        const result = await stopAutoresearchFromCard();
        await this.sendMessage(chatJid, result, { threadId });
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        log.warn("Failed to stop autoresearch experiment from adaptive card", {
          operation: "handle_adaptive_card_action.autoresearch_stop",
          chatJid,
          err,
        });
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
      const completeTotpCard = (state: "completed" | "failed") => updateSourceCard(
        markAdaptiveCardState(
          sourceInteraction.data?.content_blocks,
          normalized.cardId,
          state,
          submittedAt,
          safeSubmissionMeta,
        ),
      );
      const sendTotpFeedback = async (message: string, state: "active" | "completed" | "failed", setCookie?: string | null) => {
        await this.sendMessage(chatJid, message, { threadId });
        const headers: Record<string, string> = { "Content-Type": "application/json" };
        if (setCookie) headers["Set-Cookie"] = setCookie;
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

      const activeSecret = (this.webRuntimeConfig.totpSecret || "").trim();
      if (hashTotpSecret(activeSecret) !== parsedTotp.state.previousSecretHash) {
        completeTotpCard("failed");
        return await sendTotpFeedback(
          "TOTP validation failed: active TOTP state changed since this card was created. No changes were made. Run /totp again.",
          "failed",
        );
      }

      if (!verifyTotp(parsedTotp.state.secret, confirmationCode, this.webRuntimeConfig.totpWindow)) {
        return await sendTotpFeedback(
          "TOTP validation failed: the code did not match the secret shown in the card. No changes were made.",
          "active",
        );
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
    if (!this.webRuntimeConfig.debugCardSubmissions) {
      const forwardBody = await forwardRes.clone().json().catch(() => null);
      const forwardBodyRecord = forwardBody as
        | { id?: number | string; user_message?: { id?: number | string } }
        | null;
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
      : replaceMessageContent(
          chatJid,
          sourcePostId,
          sourceInteraction.data?.content || "",
          {
            contentBlocks: updatedCardBlocks,
            linkPreviews: Array.isArray(sourceInteraction.data?.link_previews) ? sourceInteraction.data.link_previews : undefined,
            mediaIds: Array.isArray(sourceInteraction.data?.media_ids) ? sourceInteraction.data.media_ids : undefined,
          },
        );
    if (updatedInteraction) {
      this.interactionBroadcaster.broadcastInteractionUpdated(updatedInteraction);
    }

    const responseBody = await forwardRes.json().catch(() => ({} as Record<string, unknown>));

    return this.json({
      ...responseBody,
      card_updated: Boolean(updatedInteraction),
      source_post_id: sourcePostId,
      card_id: normalized.cardId,
      card_state: submitBehavior === "keep_active" ? "active" : (updatedInteraction ? targetState : null),
      submitted_at: submittedAt,
    }, forwardRes.status);
  }

  async handleAgentSidePrompt(req: Request): Promise<Response> {
    const parsed = await parseJsonObjectRequest(req);
    if (!parsed.ok) return this.json({ error: parsed.error }, 400);

    const payload = parsed.payload as { prompt?: string; system_prompt?: string; chat_jid?: string };
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

  async handleAgentSidePromptStream(req: Request): Promise<Response> {
    const parsed = await parseJsonObjectRequest(req);
    if (!parsed.ok) return this.json({ error: parsed.error }, 400);

    const payload = parsed.payload as { prompt?: string; system_prompt?: string; chat_jid?: string };
    const { prompt, systemPrompt, chatJid } = parseSidePromptPayload(payload);
    if (!prompt) {
      return this.json({ error: "Missing or invalid prompt" }, 400);
    }

    const encoder = new TextEncoder();
    const stream = new ReadableStream<Uint8Array>({
      start: (controller) => {
        let closed = false;
        const close = () => {
          if (closed) return;
          closed = true;
          try {
            controller.close();
          } catch {
            /* expected: ReadableStream controller may already be closed/cancelled. */
          }
        };
        const send = (eventType: string, data: unknown) => {
          if (closed) return;
          try {
            controller.enqueue(encoder.encode(formatSseEvent(eventType, data)));
          } catch {
            /* expected: enqueue may race a controller that was already closed via abort/cancel. */
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
        } catch {
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

  async handleAgentMessage(req: Request, pathname: string): Promise<Response> {
    const url = new URL(req.url);
    const chatJid = url.searchParams.get("chat_jid")?.trim() || DEFAULT_CHAT_JID;
    return handleAgentMessageRequest(this, req, pathname, chatJid, DEFAULT_AGENT_ID);
  }

  async processChat(chatJid: string, agentId: string, threadRootId?: number | null): Promise<void> {
    return processAgentChat(this, chatJid, agentId, threadRootId ?? undefined);
  }

  storeMessage(
    chatJid: string,
    content: string,
    isBot: boolean,
    mediaIds: number[],
    options: {
      contentBlocks?: unknown[];
      linkPreviews?: unknown[];
      threadId?: number;
      isTerminalAgentReply?: boolean;
      isSteeringMessage?: boolean;
    } = {}
  ): InteractionRow | null {
    return storeWebMessage(
      this,
      {
        chatJid,
        content,
        isBot,
        mediaIds,
        agentId: DEFAULT_AGENT_ID,
        agentName: getIdentityConfig().assistantName,
      },
      {
        contentBlocks: options.contentBlocks,
        linkPreviews: options.linkPreviews,
        threadId: options.threadId ?? null,
        isTerminalAgentReply: options.isTerminalAgentReply,
        isSteeringMessage: options.isSteeringMessage,
      }
    );
  }

  async handleRemote(req: Request): Promise<Response> {
    return this.remoteInterop.handleRequest(req);
  }

  async serveStatic(relPath: string): Promise<Response> {
    return this.responses.serveStatic(relPath);
  }

  async serveDocsStatic(relPath: string): Promise<Response> {
    return this.responses.serveDocsStatic(relPath);
  }

  json(data: unknown, status = 200): Response {
    return this.responses.json(data, status);
  }

  clampInt(value: string | null, fallback: number, min: number, max: number): number {
    return this.responses.clampInt(value, fallback, min, max);
  }

  parseOptionalInt(value: string | null): number | null {
    return this.responses.parseOptionalInt(value);
  }
}
