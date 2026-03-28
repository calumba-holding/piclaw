import type { RemoteInteropService } from "../../remote/service.js";
import type { WebAgentControlPlaneService } from "./agent/agent-control-plane-service.js";
import type { WebChannelEndpointFacadeService } from "./channel-endpoint-facade-service.js";
import type { ResponseService } from "./http/response-service.js";
import type { RequestRouterService } from "./request-router-service.js";
import type { WebServerLifecycleGatewayService, WebSocketSessionData } from "./server-lifecycle-gateway-service.js";
import type { WebSessionBroadcastService } from "./sse/session-broadcast-service.js";
import type { WebTerminalVncHttpService } from "./terminal-vnc-http-service.js";

type WebChannelHttpSurfaceEndpointFacade = Pick<
  WebChannelEndpointFacadeService,
  | "handleAgents"
  | "handleManifest"
  | "handleAvatar"
  | "handleWorkspaceVisibility"
  | "handleTimeline"
  | "handleHashtag"
  | "handleSearch"
  | "handleThread"
  | "handleThought"
  | "handleThoughtVisibility"
  | "handleDeletePost"
  | "handleUpdatePost"
  | "handleInternalPost"
  | "handlePost"
  | "handleAgentStatus"
  | "handleAgentContext"
  | "handleAgentModels"
  | "handleAgentActiveChats"
  | "handleAgentBranches"
  | "handleAgentRespond"
>;

type WebChannelHttpSurfaceControlPlane = Pick<
  WebAgentControlPlaneService,
  | "handleAutoresearchStatus"
  | "handleAutoresearchStop"
  | "handleAutoresearchDismiss"
  | "handleAgentQueueState"
  | "handleAgentQueueRemove"
  | "handleAgentQueueSteer"
  | "handleAgentBranchFork"
  | "handleAgentBranchRename"
  | "handleAgentBranchPrune"
  | "handleAgentBranchRestore"
>;

type WebChannelHttpSurfaceResponses = Pick<
  ResponseService,
  | "serveStatic"
  | "serveDocsStatic"
  | "json"
  | "clampInt"
  | "parseOptionalInt"
>;

export interface WebChannelHttpSurfaceChannel {
  requestRouter: Pick<RequestRouterService, "handle">;
  endpointFacade: WebChannelHttpSurfaceEndpointFacade;
  controlPlaneService: WebChannelHttpSurfaceControlPlane;
  serverLifecycleGateway: Pick<WebServerLifecycleGatewayService, "handleFetch">;
  terminalVncHttpService: Pick<
    WebTerminalVncHttpService,
    "handleTerminalSession" | "handleVncSession" | "handleVncHandoff"
  >;
  sessionBroadcast: Pick<WebSessionBroadcastService, "handleSse">;
  remoteInterop: Pick<RemoteInteropService, "handleRequest">;
  responses: WebChannelHttpSurfaceResponses;
}

export interface WebChannelHttpSurfaceServiceCarrier {
  httpSurfaceService?: WebChannelHttpSurfaceService;
}

export class WebChannelHttpSurfaceService {
  constructor(private readonly channel: WebChannelHttpSurfaceChannel) {}

  async handleFetch(req: Request, server?: Bun.Server<WebSocketSessionData>): Promise<Response | undefined> {
    return this.channel.serverLifecycleGateway.handleFetch(req, server);
  }

  async handleRequest(req: Request): Promise<Response> {
    return this.channel.requestRouter.handle(req);
  }

  async handleAgents(): Promise<Response> {
    return await this.channel.endpointFacade.handleAgents();
  }

  async handleManifest(req: Request): Promise<Response> {
    return await this.channel.endpointFacade.handleManifest(req);
  }

  async handleAvatar(kind: "agent" | "user", req: Request): Promise<Response> {
    return await this.channel.endpointFacade.handleAvatar(kind, req);
  }

  async handleWorkspaceVisibility(req: Request): Promise<Response> {
    return await this.channel.endpointFacade.handleWorkspaceVisibility(req);
  }

  handleTimeline(limit: number, before?: number, chatJid?: string): Response {
    return this.channel.endpointFacade.handleTimeline(limit, before, chatJid);
  }

  handleHashtag(tag: string, limit: number, offset: number, chatJid?: string): Response {
    return this.channel.endpointFacade.handleHashtag(tag, limit, offset, chatJid);
  }

  handleSearch(
    query: string,
    limit: number,
    offset: number,
    chatJid?: string,
    searchScope?: "current" | "root" | "all",
    rootChatJid?: string,
  ): Response {
    return this.channel.endpointFacade.handleSearch(query, limit, offset, chatJid, searchScope, rootChatJid);
  }

  handleThread(id: number | null, chatJid?: string): Response {
    return this.channel.endpointFacade.handleThread(id, chatJid);
  }

  handleThought(panel: string | null, turnId: string | null): Response {
    return this.channel.endpointFacade.handleThought(panel, turnId);
  }

  async handleThoughtVisibility(req: Request): Promise<Response> {
    return await this.channel.endpointFacade.handleThoughtVisibility(req);
  }

  handleDeletePost(req: Request, id: number | null, cascade = false): Response {
    return this.channel.endpointFacade.handleDeletePost(req, id, cascade);
  }

  async handleUpdatePost(req: Request, id: number | null): Promise<Response> {
    return await this.channel.endpointFacade.handleUpdatePost(req, id);
  }

  async handleInternalPost(req: Request): Promise<Response> {
    return await this.channel.endpointFacade.handleInternalPost(req);
  }

  handleSse(req: Request): Response {
    return this.channel.sessionBroadcast.handleSse(req);
  }

  handleTerminalSession(req: Request): Response {
    return this.channel.terminalVncHttpService.handleTerminalSession(req);
  }

  handleVncSession(req: Request): Response {
    return this.channel.terminalVncHttpService.handleVncSession(req);
  }

  handleVncHandoff(req: Request): Promise<Response> {
    return this.channel.terminalVncHttpService.handleVncHandoff(req);
  }

  async handlePost(req: Request, isReply: boolean): Promise<Response> {
    return await this.channel.endpointFacade.handlePost(req, isReply);
  }

  handleAgentStatus(req: Request): Response {
    return this.channel.endpointFacade.handleAgentStatus(req);
  }

  async handleAgentContext(req: Request): Promise<Response> {
    return await this.channel.endpointFacade.handleAgentContext(req);
  }

  async handleAutoresearchStatus(req: Request): Promise<Response> {
    return await this.channel.controlPlaneService.handleAutoresearchStatus(req);
  }

  async handleAutoresearchStop(req: Request): Promise<Response> {
    return await this.channel.controlPlaneService.handleAutoresearchStop(req);
  }

  async handleAutoresearchDismiss(req: Request): Promise<Response> {
    return await this.channel.controlPlaneService.handleAutoresearchDismiss(req);
  }

  async handleAgentQueueState(req: Request): Promise<Response> {
    return await this.channel.controlPlaneService.handleAgentQueueState(req);
  }

  async handleAgentQueueRemove(req: Request): Promise<Response> {
    return await this.channel.controlPlaneService.handleAgentQueueRemove(req);
  }

  async handleAgentQueueSteer(req: Request): Promise<Response> {
    return await this.channel.controlPlaneService.handleAgentQueueSteer(req);
  }

  async handleAgentModels(req: Request): Promise<Response> {
    return await this.channel.endpointFacade.handleAgentModels(req);
  }

  async handleAgentActiveChats(_req: Request): Promise<Response> {
    return this.channel.endpointFacade.handleAgentActiveChats();
  }

  async handleAgentBranches(req: Request): Promise<Response> {
    return await this.channel.endpointFacade.handleAgentBranches(req);
  }

  async handleAgentBranchFork(req: Request): Promise<Response> {
    return await this.channel.controlPlaneService.handleAgentBranchFork(req);
  }

  async handleAgentBranchRename(req: Request): Promise<Response> {
    return await this.channel.controlPlaneService.handleAgentBranchRename(req);
  }

  async handleAgentBranchPrune(req: Request): Promise<Response> {
    return await this.channel.controlPlaneService.handleAgentBranchPrune(req);
  }

  async handleAgentBranchRestore(req: Request): Promise<Response> {
    return await this.channel.controlPlaneService.handleAgentBranchRestore(req);
  }

  async handleAgentRespond(req: Request): Promise<Response> {
    return await this.channel.endpointFacade.handleAgentRespond(req);
  }

  async handleRemote(req: Request): Promise<Response> {
    return this.channel.remoteInterop.handleRequest(req);
  }

  async serveStatic(relPath: string): Promise<Response> {
    return this.channel.responses.serveStatic(relPath);
  }

  async serveDocsStatic(relPath: string): Promise<Response> {
    return this.channel.responses.serveDocsStatic(relPath);
  }

  json(data: unknown, status = 200): Response {
    return this.channel.responses.json(data, status);
  }

  clampInt(value: string | null, fallback: number, min: number, max: number): number {
    return this.channel.responses.clampInt(value, fallback, min, max);
  }

  parseOptionalInt(value: string | null): number | null {
    return this.channel.responses.parseOptionalInt(value);
  }
}

export function createWebChannelHttpSurfaceService(
  channel: WebChannelHttpSurfaceChannel,
): WebChannelHttpSurfaceService {
  return new WebChannelHttpSurfaceService(channel);
}

export function getWebChannelHttpSurfaceService(
  channel: WebChannelHttpSurfaceChannel & WebChannelHttpSurfaceServiceCarrier,
): WebChannelHttpSurfaceService {
  return channel.httpSurfaceService ?? createWebChannelHttpSurfaceService(channel);
}
