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
import type { WebChannelLike } from "./web/web-channel-contracts.js";
import type { RequestRouterService } from "./web/request-router-service.js";
import type { WebSessionBroadcastService } from "./web/sse/session-broadcast-service.js";
import { ResponseService } from "./web/http/response-service.js";
import type { InteractionRow } from "../db.js";
import type { QueuedFollowupItem } from "./web/followup-placeholders.js";
import { QueuedFollowupLifecycleService } from "./web/queued-followup-lifecycle-service.js";
import type { SendMessageOptions } from "./web/messaging/message-write-flows.js";
import type { WebMessageWriteService } from "./web/message-write-service.js";
import type { WebAgentBufferEntry } from "./web/agent-buffers.js";
import type { WebChannelRuntimeStateService } from "./web/runtime-state-service.js";
import type { WebChannelEndpointContexts } from "./web/channel-endpoint-context-factory.js";
import type { WebChannelEndpointFacadeService } from "./web/channel-endpoint-facade-service.js";
import type { WebAgentControlPlaneService } from "./web/agent-control-plane-service.js";
import type { InteractionBroadcaster } from "./web/interaction-broadcaster.js";
import type { WebAuthGateway } from "./web/auth/auth-gateway.js";
import type {
  WebServerLifecycleGatewayService,
  WebSocketSessionData,
} from "./web/server-lifecycle-gateway-service.js";
import type { WebTerminalVncHttpService } from "./web/terminal-vnc-http-service.js";
import type {
  WebAdaptiveCardSidePromptService,
} from "./web/cards/adaptive-card-side-prompt-service.js";
import type {
  WebAgentPeerMessageRelayService,
} from "./web/agent-peer-message-relay-service.js";
import {
  createWebChannelHttpSurfaceService,
  getWebChannelHttpSurfaceService,
  type WebChannelHttpSurfaceChannel,
  type WebChannelHttpSurfaceService,
  type WebChannelHttpSurfaceServiceCarrier,
} from "./web/web-channel-http-surface-service.js";
import {
  createWebChannelRuntimePublicSurfaceService,
  getWebChannelRuntimePublicSurfaceService,
  type WebChannelRuntimePublicSurfaceChannel,
  type WebChannelRuntimePublicSurfaceService,
  type WebChannelRuntimePublicSurfaceServiceCarrier,
} from "./web/web-channel-runtime-public-surface-service.js";
import {
  createWebChannelLifecycleSpecialSurfaceService,
  getWebChannelLifecycleSpecialSurfaceService,
  type WebChannelLifecycleSpecialSurfaceChannel,
  type WebChannelLifecycleSpecialSurfaceService,
  type WebChannelLifecycleSpecialSurfaceServiceCarrier,
} from "./web/web-channel-lifecycle-special-surface-service.js";
import { TerminalSessionService } from "./web/terminal/terminal-session-service.js";
import { VncSessionService } from "./web/vnc/vnc-session-service.js";
import type { RemoteInteropService } from "../remote/service.js";
import type { WebMessageProcessingStorageService } from "./web/messaging/message-processing-storage-service.js";
import type { WebChannelRuntimeFollowupFacadeService } from "./web/runtime-followup-facade-service.js";
import { initializeWebChannelConstructor } from "./web/web-channel-constructor-factory.js";
const DEFAULT_CHAT_JID = "web:default";
const DEFAULT_AGENT_ID = "default";
const STATE_KEY = "last_agent_timestamp_web";

function getHttpSurfaceService(channel: object): WebChannelHttpSurfaceService {
  return getWebChannelHttpSurfaceService(
    channel as WebChannelHttpSurfaceChannel & WebChannelHttpSurfaceServiceCarrier,
  );
}

function getRuntimePublicSurfaceService(channel: object): WebChannelRuntimePublicSurfaceService {
  return getWebChannelRuntimePublicSurfaceService(
    channel as WebChannelRuntimePublicSurfaceChannel & WebChannelRuntimePublicSurfaceServiceCarrier,
  );
}

function getLifecycleSpecialSurfaceService(channel: object): WebChannelLifecycleSpecialSurfaceService {
  return getWebChannelLifecycleSpecialSurfaceService(
    channel as WebChannelLifecycleSpecialSurfaceChannel & WebChannelLifecycleSpecialSurfaceServiceCarrier,
    { defaultChatJid: DEFAULT_CHAT_JID, defaultAgentId: DEFAULT_AGENT_ID },
  );
}

/** Construction options for WebChannel: queue and agentPool references. */
export interface WebChannelOpts {
  queue: AgentQueue;
  agentPool: AgentPool;
}

/** Web channel: HTTP/SSE server, API endpoints, and agent event bridge. */
export class WebChannel implements WebChannelLike {
  queue!: AgentQueue;
  agentPool!: AgentPool;
  remoteInterop!: RemoteInteropService;
  responses = new ResponseService();
  requestRouter!: RequestRouterService;
  endpointContexts!: WebChannelEndpointContexts;
  pendingLinkPreviews = new Set<number>();
  workspaceVisible = false;
  workspaceShowHidden = false;
  queuedFollowupLifecycle = new QueuedFollowupLifecycleService();
  interactionBroadcaster!: InteractionBroadcaster;
  lastCommandInteractionId: number | null = null;
  webauthnChallenges = new WebauthnChallengeTracker();
  totpFailureTracker = new TotpFailureTracker();
  authGateway!: WebAuthGateway;
  terminalService = new TerminalSessionService();
  vncService = new VncSessionService();
  private readonly sessionBroadcast!: WebSessionBroadcastService;
  private readonly runtimeState!: WebChannelRuntimeStateService;
  private readonly serverLifecycleGateway!: WebServerLifecycleGatewayService;
  private readonly terminalVncHttpService!: WebTerminalVncHttpService;
  private readonly adaptiveCardSidePromptService!: WebAdaptiveCardSidePromptService;
  private readonly peerMessageRelayService!: WebAgentPeerMessageRelayService;
  private readonly httpSurfaceService!: WebChannelHttpSurfaceService;
  private readonly runtimePublicSurfaceService!: WebChannelRuntimePublicSurfaceService;
  private readonly lifecycleSpecialSurfaceService!: WebChannelLifecycleSpecialSurfaceService;
  private readonly messageProcessingStorageService!: WebMessageProcessingStorageService;
  private readonly messageWriteService!: WebMessageWriteService;
  private readonly runtimeFollowupFacade!: WebChannelRuntimeFollowupFacadeService;
  private readonly endpointFacade!: WebChannelEndpointFacadeService;
  private readonly controlPlaneService!: WebAgentControlPlaneService;

  constructor(opts: WebChannelOpts) {
    initializeWebChannelConstructor(this, opts, {
      defaultChatJid: DEFAULT_CHAT_JID,
      defaultAgentId: DEFAULT_AGENT_ID,
      stateKey: STATE_KEY,
    });
    this.httpSurfaceService = createWebChannelHttpSurfaceService(this as unknown as WebChannelHttpSurfaceChannel);
    this.runtimePublicSurfaceService = createWebChannelRuntimePublicSurfaceService(this as unknown as WebChannelRuntimePublicSurfaceChannel);
    this.lifecycleSpecialSurfaceService = createWebChannelLifecycleSpecialSurfaceService(
      this as unknown as WebChannelLifecycleSpecialSurfaceChannel,
      { defaultChatJid: DEFAULT_CHAT_JID, defaultAgentId: DEFAULT_AGENT_ID },
    );
  }

  get sse(): WebSessionBroadcastService["sse"] {
    return getRuntimePublicSurfaceService(this).sse;
  }

  get uiBridge(): WebSessionBroadcastService["uiBridge"] {
    return getRuntimePublicSurfaceService(this).uiBridge;
  }

  get server(): Bun.Server<WebSocketSessionData> | null {
    return getLifecycleSpecialSurfaceService(this).server;
  }

  async start(): Promise<void> {
    await getLifecycleSpecialSurfaceService(this).start();
  }

  async stop(): Promise<void> {
    await getLifecycleSpecialSurfaceService(this).stop();
  }

  async sendMessage(chatJid: string, text: string, options?: SendMessageOptions): Promise<void> {
    await getRuntimePublicSurfaceService(this).sendMessage(chatJid, text, options);
  }

  async postDashboardWidget(
    chatJid: string,
    options?: { threadId?: number | null; text?: string; widgetId?: string }
  ): Promise<void> {
    await getRuntimePublicSurfaceService(this).postDashboardWidget(chatJid, options);
  }

  queueFollowupPlaceholder(chatJid: string, text: string, threadId?: number, queuedContent?: string): InteractionRow | null {
    return getRuntimePublicSurfaceService(this).queueFollowupPlaceholder(chatJid, text, threadId, queuedContent);
  }

  enqueueQueuedFollowupItem(
    chatJid: string,
    rowId: number,
    queuedContent: string,
    threadId?: number | null,
    queuedAt?: string,
    extras?: { mediaIds?: number[]; contentBlocks?: unknown[]; linkPreviews?: unknown[] }
  ): number {
    return getRuntimePublicSurfaceService(this).enqueueQueuedFollowupItem(
      chatJid,
      rowId,
      queuedContent,
      threadId,
      queuedAt,
      extras,
    );
  }

  consumeQueuedFollowupItem(chatJid: string): QueuedFollowupItem | null {
    return getRuntimePublicSurfaceService(this).consumeQueuedFollowupItem(chatJid);
  }

  prependQueuedFollowupItem(chatJid: string, item: QueuedFollowupItem): void {
    getRuntimePublicSurfaceService(this).prependQueuedFollowupItem(chatJid, item);
  }

  consumeQueuedFollowupPlaceholder(chatJid: string): number | null {
    return getRuntimePublicSurfaceService(this).consumeQueuedFollowupPlaceholder(chatJid);
  }

  getQueuedFollowupCount(chatJid: string): number {
    return getRuntimePublicSurfaceService(this).getQueuedFollowupCount(chatJid);
  }

  getQueuedFollowupItems(chatJid: string): QueuedFollowupItem[] {
    return getRuntimePublicSurfaceService(this).getQueuedFollowupItems(chatJid);
  }

  removeQueuedFollowupItem(chatJid: string, rowId: number): QueuedFollowupItem | null {
    return getRuntimePublicSurfaceService(this).removeQueuedFollowupItem(chatJid, rowId);
  }

  queuePendingSteering(chatJid: string, timestamp: string | undefined): void {
    getRuntimePublicSurfaceService(this).queuePendingSteering(chatJid, timestamp);
  }

  consumePendingSteering(chatJid: string): string | null {
    return getRuntimePublicSurfaceService(this).consumePendingSteering(chatJid);
  }

  updateAgentStatus(chatJid: string, status: Record<string, unknown>): void {
    getRuntimePublicSurfaceService(this).updateAgentStatus(chatJid, status);
  }

  getAgentStatus(chatJid: string): Record<string, unknown> | null {
    return getRuntimePublicSurfaceService(this).getAgentStatus(chatJid);
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
    return getRuntimePublicSurfaceService(this).replaceQueuedFollowupPlaceholder(
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
    return getRuntimePublicSurfaceService(this).getThreadRootId(chatJid, messageId);
  }

  resumeChat(chatJid: string, threadRootId?: number | null): void {
    getRuntimePublicSurfaceService(this).resumeChat(chatJid, threadRootId);
  }

  skipFailedOnModelSwitch(chatJid: string): void {
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
  recoverInflightRuns(): void {
    getRuntimePublicSurfaceService(this).recoverInflightRuns();
  }

  /**
   * Scan all known chats (or a specific one) for messages that arrived after
   * their stored cursor and enqueue processChat() for each with pending work.
   * Called after a restart via the resume_pending IPC.
   */
  resumePendingChats(chatJid?: string): void {
    getRuntimePublicSurfaceService(this).resumePendingChats(chatJid);
  }

  loadState(): void {
    getRuntimePublicSurfaceService(this).loadState();
  }

  saveState(): void {
    getRuntimePublicSurfaceService(this).saveState();
  }

  setPanelExpanded(turnId: string, panel: "thought" | "draft", expanded: boolean): void {
    getRuntimePublicSurfaceService(this).setPanelExpanded(turnId, panel, expanded);
  }

  isPanelExpanded(turnId: string, panel: "thought" | "draft"): boolean {
    return getRuntimePublicSurfaceService(this).isPanelExpanded(turnId, panel);
  }

  updateThoughtBuffer(turnId: string, text: string, totalLines: number): void {
    getRuntimePublicSurfaceService(this).updateThoughtBuffer(turnId, text, totalLines);
  }

  updateDraftBuffer(turnId: string, text: string, totalLines: number): void {
    getRuntimePublicSurfaceService(this).updateDraftBuffer(turnId, text, totalLines);
  }

  getBuffer(turnId: string, panel: "thought" | "draft"): WebAgentBufferEntry | undefined {
    return getRuntimePublicSurfaceService(this).getBuffer(turnId, panel);
  }

  async handleFetch(req: Request, server?: Bun.Server<WebSocketSessionData>): Promise<Response | undefined> {
    return getHttpSurfaceService(this).handleFetch(req, server);
  }

  async handleRequest(req: Request): Promise<Response> {
    return getHttpSurfaceService(this).handleRequest(req);
  }

  async handleAgents(): Promise<Response> {
    return await getHttpSurfaceService(this).handleAgents();
  }

  async handleManifest(req: Request): Promise<Response> {
    return await getHttpSurfaceService(this).handleManifest(req);
  }

  async handleAvatar(kind: "agent" | "user", req: Request): Promise<Response> {
    return await getHttpSurfaceService(this).handleAvatar(kind, req);
  }

  async handleWorkspaceVisibility(req: Request): Promise<Response> {
    return await getHttpSurfaceService(this).handleWorkspaceVisibility(req);
  }

  handleTimeline(limit: number, before?: number, chatJid?: string): Response {
    return getHttpSurfaceService(this).handleTimeline(limit, before, chatJid);
  }

  handleHashtag(tag: string, limit: number, offset: number, chatJid?: string): Response {
    return getHttpSurfaceService(this).handleHashtag(tag, limit, offset, chatJid);
  }

  handleSearch(
    query: string,
    limit: number,
    offset: number,
    chatJid?: string,
    searchScope?: "current" | "root" | "all",
    rootChatJid?: string,
  ): Response {
    return getHttpSurfaceService(this).handleSearch(query, limit, offset, chatJid, searchScope, rootChatJid);
  }

  handleThread(id: number | null, chatJid?: string): Response {
    return getHttpSurfaceService(this).handleThread(id, chatJid);
  }

  handleThought(panel: string | null, turnId: string | null): Response {
    return getHttpSurfaceService(this).handleThought(panel, turnId);
  }

  async handleThoughtVisibility(req: Request): Promise<Response> {
    return await getHttpSurfaceService(this).handleThoughtVisibility(req);
  }

  handleDeletePost(req: Request, id: number | null, cascade = false): Response {
    return getHttpSurfaceService(this).handleDeletePost(req, id, cascade);
  }

  /**
   * PATCH /post/:id – Update a post's content and optionally set thread_id.
   * Validates: id is a positive integer, content ≤ 100 KB, thread_id is a
   * positive integer if provided. Uses parameterized queries (no SQL injection).
   */
  async handleUpdatePost(req: Request, id: number | null): Promise<Response> {
    return await getHttpSurfaceService(this).handleUpdatePost(req, id);
  }

  /**
   * POST /internal/post – Create an internal agent message.
   * Requires internal secret when WEB_INTERNAL_SECRET is configured.
   * Content is capped at 100 KB to prevent DB bloat.
   */
  async handleInternalPost(req: Request): Promise<Response> {
    return await getHttpSurfaceService(this).handleInternalPost(req);
  }

  handleSse(req: Request): Response {
    return getHttpSurfaceService(this).handleSse(req);
  }

  handleTerminalSession(req: Request): Response { return getHttpSurfaceService(this).handleTerminalSession(req); }
  handleVncSession(req: Request): Response { return getHttpSurfaceService(this).handleVncSession(req); }
  handleVncHandoff(req: Request): Promise<Response> { return getHttpSurfaceService(this).handleVncHandoff(req); }

  broadcastEvent(eventType: string, data: unknown): void {
    getRuntimePublicSurfaceService(this).broadcastEvent(eventType, data);
  }

  async handlePost(req: Request, isReply: boolean): Promise<Response> {
    return await getHttpSurfaceService(this).handlePost(req, isReply);
  }

  handleAgentStatus(req: Request): Response {
    return getHttpSurfaceService(this).handleAgentStatus(req);
  }

  /** GET /agent/context — return context window usage for the compose box indicator. */
  async handleAgentContext(req: Request): Promise<Response> {
    return await getHttpSurfaceService(this).handleAgentContext(req);
  }

  /** GET /agent/autoresearch/status — current live autoresearch status-panel widget payload. */
  async handleAutoresearchStatus(req: Request): Promise<Response> {
    return await getHttpSurfaceService(this).handleAutoresearchStatus(req);
  }

  /** POST /agent/autoresearch/stop — stop the running autoresearch experiment for this chat. */
  async handleAutoresearchStop(req: Request): Promise<Response> {
    return await getHttpSurfaceService(this).handleAutoresearchStop(req);
  }

  /** POST /agent/autoresearch/dismiss — dismiss the final autoresearch status panel for this chat. */
  async handleAutoresearchDismiss(req: Request): Promise<Response> {
    return await getHttpSurfaceService(this).handleAutoresearchDismiss(req);
  }

  /** GET /agent/queue-state — return queued follow-up placeholder count and pending content. */
  async handleAgentQueueState(req: Request): Promise<Response> {
    return await getHttpSurfaceService(this).handleAgentQueueState(req);
  }

  /** POST /agent/queue-remove — remove a queued follow-up row from UI + session queue. */
  async handleAgentQueueRemove(req: Request): Promise<Response> {
    return await getHttpSurfaceService(this).handleAgentQueueRemove(req);
  }

  /** POST /agent/queue-steer — atomically convert one queued follow-up into steering or an immediate send. */
  async handleAgentQueueSteer(req: Request): Promise<Response> {
    return await getHttpSurfaceService(this).handleAgentQueueSteer(req);
  }

  /** GET /agent/models — return available model labels and current selection. */
  async handleAgentModels(req: Request): Promise<Response> {
    return await getHttpSurfaceService(this).handleAgentModels(req);
  }

  /** GET /agent/active-chats — enumerate live chat agents/branches currently in the pool. */
  async handleAgentActiveChats(req: Request): Promise<Response> {
    return await getHttpSurfaceService(this).handleAgentActiveChats(req);
  }

  /** GET /agent/branches — enumerate known branch/session records from the registry. */
  async handleAgentBranches(req: Request): Promise<Response> {
    return await getHttpSurfaceService(this).handleAgentBranches(req);
  }

  /** POST /agent/branch-fork — create a first-class forked branch with its own session identity. */
  async handleAgentBranchFork(req: Request): Promise<Response> {
    return await getHttpSurfaceService(this).handleAgentBranchFork(req);
  }

  /** POST /agent/branch-rename — rename a registry-backed branch agent/display identity. */
  async handleAgentBranchRename(req: Request): Promise<Response> {
    return await getHttpSurfaceService(this).handleAgentBranchRename(req);
  }

  /** POST /agent/branch-prune — archive a registry-backed branch agent and remove it from active discovery. */
  async handleAgentBranchPrune(req: Request): Promise<Response> {
    return await getHttpSurfaceService(this).handleAgentBranchPrune(req);
  }

  /** POST /agent/branch-restore — restore an archived branch agent back into active discovery. */
  async handleAgentBranchRestore(req: Request): Promise<Response> {
    return await getHttpSurfaceService(this).handleAgentBranchRestore(req);
  }

  /**
   * POST /agent/peer-message — send a message from one active chat agent/window to another.
   * Reuses the normal agent message path in the target chat so queue/defer semantics stay consistent.
   */
  async handleAgentPeerMessage(req: Request): Promise<Response> {
    return await getLifecycleSpecialSurfaceService(this).handleAgentPeerMessage(req);
  }

  /**
   * POST /agent/respond – Handle a UI response to an agent request (e.g., confirmation dialog).
   * Validates request_id is a non-empty string of ≤ 256 chars.
   */
  async handleAgentRespond(req: Request): Promise<Response> {
    return await getHttpSurfaceService(this).handleAgentRespond(req);
  }

  async handleAdaptiveCardAction(req: Request): Promise<Response> {
    return await getLifecycleSpecialSurfaceService(this).handleAdaptiveCardAction(req);
  }

  async handleAgentSidePrompt(req: Request): Promise<Response> {
    return await getLifecycleSpecialSurfaceService(this).handleAgentSidePrompt(req);
  }

  async handleAgentSidePromptStream(req: Request): Promise<Response> {
    return await getLifecycleSpecialSurfaceService(this).handleAgentSidePromptStream(req);
  }

  handleAgentMessage(req: Request, pathname: string): Promise<Response> {
    return getLifecycleSpecialSurfaceService(this).handleAgentMessage(req, pathname);
  }

  async processChat(chatJid: string, agentId: string, threadRootId?: number | null): Promise<void> {
    return getRuntimePublicSurfaceService(this).processChat(chatJid, agentId, threadRootId);
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
    return getRuntimePublicSurfaceService(this).storeMessage(chatJid, content, isBot, mediaIds, options);
  }

  async handleRemote(req: Request): Promise<Response> {
    return getHttpSurfaceService(this).handleRemote(req);
  }

  async serveStatic(relPath: string): Promise<Response> {
    return getHttpSurfaceService(this).serveStatic(relPath);
  }

  async serveDocsStatic(relPath: string): Promise<Response> {
    return getHttpSurfaceService(this).serveDocsStatic(relPath);
  }

  json(data: unknown, status = 200): Response {
    return getHttpSurfaceService(this).json(data, status);
  }

  clampInt(value: string | null, fallback: number, min: number, max: number): number {
    return getHttpSurfaceService(this).clampInt(value, fallback, min, max);
  }

  parseOptionalInt(value: string | null): number | null {
    return getHttpSurfaceService(this).parseOptionalInt(value);
  }
}
