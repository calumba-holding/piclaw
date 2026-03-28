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
} from "../core/config.js";
import type { WebChannelLike } from "./web/web-channel-contracts.js";
import { RequestRouterService } from "./web/request-router-service.js";
import { handlePost as handlePostRequest } from "./web/handlers/posts.js";
import { WebSessionBroadcastService } from "./web/session-broadcast-service.js";
import { ResponseService } from "./web/http/response-service.js";
import {
  replaceMessageContent,
  getChatCursor,
  getDb,
} from "../db.js";
import type { InteractionRow } from "../db.js";
import type { QueuedFollowupItem } from "./web/followup-placeholders.js";
import { QueuedFollowupLifecycleService } from "./web/queued-followup-lifecycle-service.js";
import type { SendMessageOptions } from "./web/message-write-flows.js";
import { WebMessageWriteService } from "./web/message-write-service.js";
import { ensureAvatarCache } from "./web/avatar-service.js";
import type { WebAgentBufferEntry } from "./web/agent-buffers.js";
import { WebChannelRuntimeStateService } from "./web/runtime-state-service.js";
import {
  createWebChannelEndpointContexts,
  createWebChannelIdentitySnapshot,
  type WebChannelEndpointContexts,
} from "./web/channel-endpoint-context-factory.js";
import { WebChannelEndpointFacadeService } from "./web/channel-endpoint-facade-service.js";
import {
  createWebAgentControlPlaneService,
  WebAgentControlPlaneService,
} from "./web/agent-control-plane-service.js";
import { createInteractionBroadcaster, type InteractionBroadcaster } from "./web/interaction-broadcaster.js";
import { WebAuthGateway } from "./web/auth-gateway.js";
import {
  createWebServerLifecycleGateway,
  WebServerLifecycleGatewayService,
  type WebSocketSessionData,
} from "./web/server-lifecycle-gateway-service.js";
import { createWebTerminalVncHttpService, WebTerminalVncHttpService } from "./web/terminal-vnc-http-service.js";
import {
  createWebAdaptiveCardSidePromptService,
  WebAdaptiveCardSidePromptService,
  type WebAdaptiveCardSidePromptChannelLike,
} from "./web/adaptive-card-side-prompt-service.js";
import {
  createWebAgentPeerMessageRelayService,
  WebAgentPeerMessageRelayService,
  type WebAgentPeerMessageRelayChannelLike,
} from "./web/agent-peer-message-relay-service.js";
import { getWebAgentMessageEntryService } from "./web/agent-message-entry-service.js";
import { TerminalSessionService } from "./web/terminal/terminal-session-service.js";
import { VncSessionService } from "./web/vnc/vnc-session-service.js";
import { RemoteInteropService } from "../remote/service.js";
import {
  createWebMessageProcessingStorageService,
  WebMessageProcessingStorageService,
} from "./web/message-processing-storage-service.js";
const DEFAULT_CHAT_JID = "web:default";
const DEFAULT_AGENT_ID = "default";
const STATE_KEY = "last_agent_timestamp_web";

function getAdaptiveCardSidePromptService(channel: WebAdaptiveCardSidePromptChannelLike): WebAdaptiveCardSidePromptService {
  return (channel as { adaptiveCardSidePromptService?: WebAdaptiveCardSidePromptService }).adaptiveCardSidePromptService
    ?? createWebAdaptiveCardSidePromptService(channel, {
      defaultChatJid: DEFAULT_CHAT_JID,
      defaultAgentId: DEFAULT_AGENT_ID,
    });
}

function getAgentPeerMessageRelayService(
  channel: Pick<WebAgentPeerMessageRelayChannelLike, "json"> & { agentPool?: WebAgentPeerMessageRelayChannelLike["agentPool"] },
): WebAgentPeerMessageRelayService {
  return (channel as { peerMessageRelayService?: WebAgentPeerMessageRelayService }).peerMessageRelayService
    ?? createWebAgentPeerMessageRelayService(channel as WebAgentPeerMessageRelayChannelLike, {
      defaultAgentId: DEFAULT_AGENT_ID,
    });
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
  private readonly terminalVncHttpService: WebTerminalVncHttpService;
  private readonly adaptiveCardSidePromptService: WebAdaptiveCardSidePromptService;
  private readonly peerMessageRelayService: WebAgentPeerMessageRelayService;
  private readonly messageProcessingStorageService: WebMessageProcessingStorageService;
  private readonly messageWriteService: WebMessageWriteService;
  private readonly endpointFacade: WebChannelEndpointFacadeService;
  private readonly controlPlaneService: WebAgentControlPlaneService;
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
    const getIdentitySnapshot = () => createWebChannelIdentitySnapshot(getIdentityConfig());
    this.interactionBroadcaster = createInteractionBroadcaster(this, () => {
      const identity = getIdentitySnapshot();
      return {
        agentName: identity.assistantName,
        agentAvatar: identity.agentAvatarUrl,
        userName: identity.userName,
        userAvatar: identity.userAvatarUrl,
        userAvatarBackground: identity.userAvatarBackground,
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
    this.messageProcessingStorageService = createWebMessageProcessingStorageService(this, {
      defaultAgentId: DEFAULT_AGENT_ID,
      getAssistantName: () => getIdentityConfig().assistantName,
    });
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
      getIdentitySnapshot,
    });
    this.endpointFacade = new WebChannelEndpointFacadeService({
      endpointContexts: this.endpointContexts,
      defaultChatJid: DEFAULT_CHAT_JID,
      getIdentitySnapshot,
      ensureAvatarCache,
      json: (payload, status = 200) => this.json(payload, status),
      broadcastEvent: (eventType, data) => this.broadcastEvent(eventType, data),
      handlePostRequest: (req, isReply, chatJid) => handlePostRequest(this, req, isReply, chatJid),
      listActiveChats: () => this.agentPool.listActiveChats(),
      listKnownChats: typeof (this.agentPool as AgentPool & {
        listKnownChats?: (rootChatJid?: string | null, options?: { includeArchived?: boolean }) => unknown[];
      }).listKnownChats === "function"
        ? (rootChatJid, options) => (this.agentPool as AgentPool & {
            listKnownChats: (rootChatJid?: string | null, options?: { includeArchived?: boolean }) => unknown[];
          }).listKnownChats(rootChatJid, options)
        : undefined,
    });
    this.controlPlaneService = createWebAgentControlPlaneService(this, {
      defaultChatJid: DEFAULT_CHAT_JID,
      defaultAgentId: DEFAULT_AGENT_ID,
    });
    this.serverLifecycleGateway = createWebServerLifecycleGateway(this, {
      webServerConfig: this.webServerConfig,
      webRuntimeConfig: this.webRuntimeConfig,
    });
    this.terminalVncHttpService = createWebTerminalVncHttpService(this, { webRuntimeConfig: this.webRuntimeConfig });
    this.adaptiveCardSidePromptService = createWebAdaptiveCardSidePromptService(this, {
      defaultChatJid: DEFAULT_CHAT_JID,
      defaultAgentId: DEFAULT_AGENT_ID,
      webRuntimeConfig: this.webRuntimeConfig,
    });
    this.peerMessageRelayService = createWebAgentPeerMessageRelayService(this, {
      defaultAgentId: DEFAULT_AGENT_ID,
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
    return await this.endpointFacade.handleAgents();
  }

  async handleManifest(req: Request): Promise<Response> {
    return await this.endpointFacade.handleManifest(req);
  }

  async handleAvatar(kind: "agent" | "user", req: Request): Promise<Response> {
    return await this.endpointFacade.handleAvatar(kind, req);
  }

  async handleWorkspaceVisibility(req: Request): Promise<Response> {
    return await this.endpointFacade.handleWorkspaceVisibility(req);
  }

  handleTimeline(limit: number, before?: number, chatJid?: string): Response {
    return this.endpointFacade.handleTimeline(limit, before, chatJid);
  }

  handleHashtag(tag: string, limit: number, offset: number, chatJid?: string): Response {
    return this.endpointFacade.handleHashtag(tag, limit, offset, chatJid);
  }

  handleSearch(
    query: string,
    limit: number,
    offset: number,
    chatJid?: string,
    searchScope?: "current" | "root" | "all",
    rootChatJid?: string,
  ): Response {
    return this.endpointFacade.handleSearch(query, limit, offset, chatJid, searchScope, rootChatJid);
  }

  handleThread(id: number | null, chatJid?: string): Response {
    return this.endpointFacade.handleThread(id, chatJid);
  }

  handleThought(panel: string | null, turnId: string | null): Response {
    return this.endpointFacade.handleThought(panel, turnId);
  }

  async handleThoughtVisibility(req: Request): Promise<Response> {
    return await this.endpointFacade.handleThoughtVisibility(req);
  }

  handleDeletePost(req: Request, id: number | null, cascade = false): Response {
    return this.endpointFacade.handleDeletePost(req, id, cascade);
  }

  /**
   * PATCH /post/:id – Update a post's content and optionally set thread_id.
   * Validates: id is a positive integer, content ≤ 100 KB, thread_id is a
   * positive integer if provided. Uses parameterized queries (no SQL injection).
   */
  async handleUpdatePost(req: Request, id: number | null): Promise<Response> {
    return await this.endpointFacade.handleUpdatePost(req, id);
  }

  /**
   * POST /internal/post – Create an internal agent message.
   * Requires internal secret when WEB_INTERNAL_SECRET is configured.
   * Content is capped at 100 KB to prevent DB bloat.
   */
  async handleInternalPost(req: Request): Promise<Response> {
    return await this.endpointFacade.handleInternalPost(req);
  }

  handleSse(req: Request): Response {
    return this.sessionBroadcast.handleSse(req);
  }

  handleTerminalSession(req: Request): Response { return this.terminalVncHttpService.handleTerminalSession(req); }
  handleVncSession(req: Request): Response { return this.terminalVncHttpService.handleVncSession(req); }
  handleVncHandoff(req: Request): Promise<Response> { return this.terminalVncHttpService.handleVncHandoff(req); }

  broadcastEvent(eventType: string, data: unknown): void {
    this.sessionBroadcast.broadcastEvent(eventType, data);
  }

  async handlePost(req: Request, isReply: boolean): Promise<Response> {
    return await this.endpointFacade.handlePost(req, isReply);
  }

  handleAgentStatus(req: Request): Response {
    return this.endpointFacade.handleAgentStatus(req);
  }

  /** GET /agent/context — return context window usage for the compose box indicator. */
  async handleAgentContext(req: Request): Promise<Response> {
    return await this.endpointFacade.handleAgentContext(req);
  }

  /** GET /agent/autoresearch/status — current live autoresearch status-panel widget payload. */
  async handleAutoresearchStatus(req: Request): Promise<Response> {
    return await this.controlPlaneService.handleAutoresearchStatus(req);
  }

  /** POST /agent/autoresearch/stop — stop the running autoresearch experiment for this chat. */
  async handleAutoresearchStop(req: Request): Promise<Response> {
    return await this.controlPlaneService.handleAutoresearchStop(req);
  }

  /** POST /agent/autoresearch/dismiss — dismiss the final autoresearch status panel for this chat. */
  async handleAutoresearchDismiss(req: Request): Promise<Response> {
    return await this.controlPlaneService.handleAutoresearchDismiss(req);
  }

  /** GET /agent/queue-state — return queued follow-up placeholder count and pending content. */
  async handleAgentQueueState(req: Request): Promise<Response> {
    return await this.controlPlaneService.handleAgentQueueState(req);
  }

  /** POST /agent/queue-remove — remove a queued follow-up row from UI + session queue. */
  async handleAgentQueueRemove(req: Request): Promise<Response> {
    return await this.controlPlaneService.handleAgentQueueRemove(req);
  }

  /** POST /agent/queue-steer — atomically convert one queued follow-up into steering or an immediate send. */
  async handleAgentQueueSteer(req: Request): Promise<Response> {
    return await this.controlPlaneService.handleAgentQueueSteer(req);
  }

  /** GET /agent/models — return available model labels and current selection. */
  async handleAgentModels(req: Request): Promise<Response> {
    return await this.endpointFacade.handleAgentModels(req);
  }

  /** GET /agent/active-chats — enumerate live chat agents/branches currently in the pool. */
  async handleAgentActiveChats(_req: Request): Promise<Response> {
    return this.endpointFacade.handleAgentActiveChats();
  }

  /** GET /agent/branches — enumerate known branch/session records from the registry. */
  async handleAgentBranches(req: Request): Promise<Response> {
    return this.endpointFacade.handleAgentBranches(req);
  }

  /** POST /agent/branch-fork — create a first-class forked branch with its own session identity. */
  async handleAgentBranchFork(req: Request): Promise<Response> {
    return await this.controlPlaneService.handleAgentBranchFork(req);
  }

  /** POST /agent/branch-rename — rename a registry-backed branch agent/display identity. */
  async handleAgentBranchRename(req: Request): Promise<Response> {
    return await this.controlPlaneService.handleAgentBranchRename(req);
  }

  /** POST /agent/branch-prune — archive a registry-backed branch agent and remove it from active discovery. */
  async handleAgentBranchPrune(req: Request): Promise<Response> {
    return await this.controlPlaneService.handleAgentBranchPrune(req);
  }

  /** POST /agent/branch-restore — restore an archived branch agent back into active discovery. */
  async handleAgentBranchRestore(req: Request): Promise<Response> {
    return await this.controlPlaneService.handleAgentBranchRestore(req);
  }

  /**
   * POST /agent/peer-message — send a message from one active chat agent/window to another.
   * Reuses the normal agent message path in the target chat so queue/defer semantics stay consistent.
   */
  async handleAgentPeerMessage(req: Request): Promise<Response> {
    return await getAgentPeerMessageRelayService(this).handleAgentPeerMessage(req);
  }

  /**
   * POST /agent/respond – Handle a UI response to an agent request (e.g., confirmation dialog).
   * Validates request_id is a non-empty string of ≤ 256 chars.
   */
  async handleAgentRespond(req: Request): Promise<Response> {
    return await this.endpointFacade.handleAgentRespond(req);
  }

  async handleAdaptiveCardAction(req: Request): Promise<Response> {
    return await getAdaptiveCardSidePromptService(this).handleAdaptiveCardAction(req);
  }

  async handleAgentSidePrompt(req: Request): Promise<Response> {
    return await getAdaptiveCardSidePromptService(this).handleAgentSidePrompt(req);
  }

  async handleAgentSidePromptStream(req: Request): Promise<Response> {
    return await getAdaptiveCardSidePromptService(this).handleAgentSidePromptStream(req);
  }

  handleAgentMessage(req: Request, pathname: string): Promise<Response> { return getWebAgentMessageEntryService(this, { defaultChatJid: DEFAULT_CHAT_JID, defaultAgentId: DEFAULT_AGENT_ID }).handleAgentMessage(req, pathname); }

  async processChat(chatJid: string, agentId: string, threadRootId?: number | null): Promise<void> {
    return this.messageProcessingStorageService.processChat(chatJid, agentId, threadRootId);
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
    return this.messageProcessingStorageService.storeMessage(chatJid, content, isBot, mediaIds, options);
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
