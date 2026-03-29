/**
 * channels/web/channel-endpoint-facade-service.ts – Thin facade for WebChannel endpoint wrappers.
 */
import { handleAgentContextRequest, handleAgentModelsRequest, handleAgentStatusRequest, } from "../agent/agent-status.js";
import { handleHashtagRequest, handleSearchRequest, handleThoughtRequest, handleThreadRequest, handleTimelineRequest, } from "./content-endpoints.js";
import { deletePostResponse } from "../timeline-service.js";
import { handleAgentsRequest, handleAvatarRequest } from "./identity-endpoints.js";
import { handleManifestRequest } from "../manifest.js";
import { handleInternalPostRequest, handleUpdatePostRequest } from "../post-mutations.js";
import { handleAgentRespondRequest, handleThoughtVisibilityRequest, handleWorkspaceVisibilityRequest, } from "./ui-endpoints.js";
/**
 * Extracted facade for endpoint-wrapper methods that mostly bind shared contexts
 * or live identity state before delegating to focused handler modules.
 */
export class WebChannelEndpointFacadeService {
    options;
    constructor(options) {
        this.options = options;
    }
    async handleAgents() {
        return await handleAgentsRequest(this.options.endpointContexts.agents());
    }
    async handleManifest(req) {
        const identity = this.options.getIdentitySnapshot();
        return await handleManifestRequest(req, {
            assistantName: identity.assistantName,
            assistantAvatar: identity.assistantAvatarRaw,
            ensureAvatarCache: this.options.ensureAvatarCache,
        });
    }
    async handleAvatar(kind, req) {
        return await handleAvatarRequest(kind, req, this.options.endpointContexts.avatar());
    }
    async handleWorkspaceVisibility(req) {
        return await handleWorkspaceVisibilityRequest(req, this.options.endpointContexts.ui());
    }
    async handlePost(req, isReply) {
        const url = new URL(req.url);
        const chatJid = url.searchParams.get("chat_jid")?.trim() || this.options.defaultChatJid;
        return await this.options.handlePostRequest(req, isReply, chatJid);
    }
    handleTimeline(limit, before, chatJid) {
        return handleTimelineRequest(limit, before, chatJid, this.options.endpointContexts.content());
    }
    handleHashtag(tag, limit, offset, chatJid) {
        return handleHashtagRequest(tag, limit, offset, chatJid, this.options.endpointContexts.content());
    }
    handleSearch(query, limit, offset, chatJid, searchScope, rootChatJid) {
        return handleSearchRequest(query, limit, offset, chatJid, searchScope, rootChatJid, this.options.endpointContexts.content());
    }
    handleThread(id, chatJid) {
        return handleThreadRequest(id, chatJid, this.options.endpointContexts.content());
    }
    handleThought(panel, turnId) {
        return handleThoughtRequest(panel, turnId, this.options.endpointContexts.content());
    }
    async handleThoughtVisibility(req) {
        return await handleThoughtVisibilityRequest(req, this.options.endpointContexts.ui());
    }
    handleDeletePost(req, id, cascade = false) {
        const url = new URL(req.url);
        const chatJid = url.searchParams.get("chat_jid")?.trim() || this.options.defaultChatJid;
        const result = deletePostResponse(chatJid, id, cascade);
        if (result.deletedIds.length > 0) {
            this.options.broadcastEvent("interaction_deleted", { chat_jid: chatJid, ids: result.deletedIds });
        }
        return this.options.json(result.body, result.status);
    }
    async handleUpdatePost(req, id) {
        return await handleUpdatePostRequest(req, id, this.options.endpointContexts.postMutations());
    }
    async handleInternalPost(req) {
        return await handleInternalPostRequest(req, this.options.endpointContexts.postMutations());
    }
    handleAgentStatus(req) {
        return handleAgentStatusRequest(req, this.options.endpointContexts.agentStatus());
    }
    async handleAgentContext(req) {
        return await handleAgentContextRequest(req, this.options.endpointContexts.agentStatus());
    }
    async handleAgentModels(req) {
        return await handleAgentModelsRequest(req, this.options.endpointContexts.agentStatus());
    }
    handleAgentActiveChats() {
        return this.options.json({ chats: this.options.listActiveChats() }, 200);
    }
    handleAgentBranches(req) {
        const url = new URL(req.url);
        const rootChatJid = typeof url.searchParams.get("root_chat_jid") === "string"
            ? url.searchParams.get("root_chat_jid").trim()
            : "";
        const includeArchived = ["1", "true", "yes", "on"].includes(String(url.searchParams.get("include_archived") || "").trim().toLowerCase());
        const chats = typeof this.options.listKnownChats === "function"
            ? this.options.listKnownChats(rootChatJid || null, { includeArchived })
            : this.options.listActiveChats();
        return this.options.json({ chats }, 200);
    }
    async handleAgentRespond(req) {
        return await handleAgentRespondRequest(req, this.options.endpointContexts.ui());
    }
}
