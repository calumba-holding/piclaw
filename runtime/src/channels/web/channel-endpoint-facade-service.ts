/**
 * channels/web/channel-endpoint-facade-service.ts – Thin facade for WebChannel endpoint wrappers.
 */

import {
  handleAgentContextRequest,
  handleAgentModelsRequest,
  handleAgentStatusRequest,
} from "./agent/agent-status.js";
import {
  handleHashtagRequest,
  handleSearchRequest,
  handleThoughtRequest,
  handleThreadRequest,
  handleTimelineRequest,
} from "./content-endpoints.js";
import { deletePostResponse } from "./timeline-service.js";
import { handleAgentsRequest, handleAvatarRequest } from "./identity-endpoints.js";
import { handleManifestRequest, type ManifestIconMeta } from "./manifest.js";
import { handleInternalPostRequest, handleUpdatePostRequest } from "./post-mutations.js";
import {
  handleAgentRespondRequest,
  handleThoughtVisibilityRequest,
  handleWorkspaceVisibilityRequest,
} from "./ui-endpoints.js";
import type {
  WebChannelEndpointContexts,
  WebChannelIdentitySnapshot,
} from "./channel-endpoint-context-factory.js";

/** Dependencies required by the extracted endpoint facade. */
export interface WebChannelEndpointFacadeOptions {
  endpointContexts: WebChannelEndpointContexts;
  defaultChatJid: string;
  getIdentitySnapshot(): WebChannelIdentitySnapshot;
  ensureAvatarCache(kind: "agent", source: string): Promise<ManifestIconMeta | null>;
  json(payload: unknown, status?: number): Response;
  broadcastEvent(eventType: string, data: unknown): void;
  handlePostRequest(req: Request, isReply: boolean, chatJid: string): Promise<Response>;
  listActiveChats(): unknown[];
  listKnownChats?(rootChatJid?: string | null, options?: { includeArchived?: boolean }): unknown[];
}

/**
 * Extracted facade for endpoint-wrapper methods that mostly bind shared contexts
 * or live identity state before delegating to focused handler modules.
 */
export class WebChannelEndpointFacadeService {
  constructor(private readonly options: WebChannelEndpointFacadeOptions) {}

  async handleAgents(): Promise<Response> {
    return await handleAgentsRequest(this.options.endpointContexts.agents());
  }

  async handleManifest(req: Request): Promise<Response> {
    const identity = this.options.getIdentitySnapshot();
    return await handleManifestRequest(req, {
      assistantName: identity.assistantName,
      assistantAvatar: identity.assistantAvatarRaw,
      ensureAvatarCache: this.options.ensureAvatarCache,
    });
  }

  async handleAvatar(kind: "agent" | "user", req: Request): Promise<Response> {
    return await handleAvatarRequest(kind, req, this.options.endpointContexts.avatar());
  }

  async handleWorkspaceVisibility(req: Request): Promise<Response> {
    return await handleWorkspaceVisibilityRequest(req, this.options.endpointContexts.ui());
  }

  async handlePost(req: Request, isReply: boolean): Promise<Response> {
    const url = new URL(req.url);
    const chatJid = url.searchParams.get("chat_jid")?.trim() || this.options.defaultChatJid;
    return await this.options.handlePostRequest(req, isReply, chatJid);
  }

  handleTimeline(limit: number, before?: number, chatJid?: string): Response {
    return handleTimelineRequest(limit, before, chatJid, this.options.endpointContexts.content());
  }

  handleHashtag(tag: string, limit: number, offset: number, chatJid?: string): Response {
    return handleHashtagRequest(tag, limit, offset, chatJid, this.options.endpointContexts.content());
  }

  handleSearch(
    query: string,
    limit: number,
    offset: number,
    chatJid?: string,
    searchScope?: "current" | "root" | "all",
    rootChatJid?: string,
  ): Response {
    return handleSearchRequest(
      query,
      limit,
      offset,
      chatJid,
      searchScope,
      rootChatJid,
      this.options.endpointContexts.content(),
    );
  }

  handleThread(id: number | null, chatJid?: string): Response {
    return handleThreadRequest(id, chatJid, this.options.endpointContexts.content());
  }

  handleThought(panel: string | null, turnId: string | null): Response {
    return handleThoughtRequest(panel, turnId, this.options.endpointContexts.content());
  }

  async handleThoughtVisibility(req: Request): Promise<Response> {
    return await handleThoughtVisibilityRequest(req, this.options.endpointContexts.ui());
  }

  handleDeletePost(req: Request, id: number | null, cascade = false): Response {
    const url = new URL(req.url);
    const chatJid = url.searchParams.get("chat_jid")?.trim() || this.options.defaultChatJid;
    const result = deletePostResponse(chatJid, id, cascade);
    if (result.deletedIds.length > 0) {
      this.options.broadcastEvent("interaction_deleted", { chat_jid: chatJid, ids: result.deletedIds });
    }
    return this.options.json(result.body, result.status);
  }

  async handleUpdatePost(req: Request, id: number | null): Promise<Response> {
    return await handleUpdatePostRequest(req, id, this.options.endpointContexts.postMutations());
  }

  async handleInternalPost(req: Request): Promise<Response> {
    return await handleInternalPostRequest(req, this.options.endpointContexts.postMutations());
  }

  handleAgentStatus(req: Request): Response {
    return handleAgentStatusRequest(req, this.options.endpointContexts.agentStatus());
  }

  async handleAgentContext(req: Request): Promise<Response> {
    return await handleAgentContextRequest(req, this.options.endpointContexts.agentStatus());
  }

  async handleAgentModels(req: Request): Promise<Response> {
    return await handleAgentModelsRequest(req, this.options.endpointContexts.agentStatus());
  }

  handleAgentActiveChats(): Response {
    return this.options.json({ chats: this.options.listActiveChats() }, 200);
  }

  handleAgentBranches(req: Request): Response {
    const url = new URL(req.url);
    const rootChatJid = typeof url.searchParams.get("root_chat_jid") === "string"
      ? url.searchParams.get("root_chat_jid")!.trim()
      : "";
    const includeArchived = ["1", "true", "yes", "on"].includes(
      String(url.searchParams.get("include_archived") || "").trim().toLowerCase(),
    );
    const chats = typeof this.options.listKnownChats === "function"
      ? this.options.listKnownChats(rootChatJid || null, { includeArchived })
      : this.options.listActiveChats();
    return this.options.json({ chats }, 200);
  }

  async handleAgentRespond(req: Request): Promise<Response> {
    return await handleAgentRespondRequest(req, this.options.endpointContexts.ui());
  }
}
