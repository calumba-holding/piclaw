export class WebChannelHttpSurfaceService {
    channel;
    constructor(channel) {
        this.channel = channel;
    }
    async handleFetch(req, server) {
        return this.channel.serverLifecycleGateway.handleFetch(req, server);
    }
    async handleRequest(req) {
        return this.channel.requestRouter.handle(req);
    }
    async handleAgents() {
        return await this.channel.endpointFacade.handleAgents();
    }
    async handleManifest(req) {
        return await this.channel.endpointFacade.handleManifest(req);
    }
    async handleAvatar(kind, req) {
        return await this.channel.endpointFacade.handleAvatar(kind, req);
    }
    async handleWorkspaceVisibility(req) {
        return await this.channel.endpointFacade.handleWorkspaceVisibility(req);
    }
    handleTimeline(limit, before, chatJid) {
        return this.channel.endpointFacade.handleTimeline(limit, before, chatJid);
    }
    handleHashtag(tag, limit, offset, chatJid) {
        return this.channel.endpointFacade.handleHashtag(tag, limit, offset, chatJid);
    }
    handleSearch(query, limit, offset, chatJid, searchScope, rootChatJid) {
        return this.channel.endpointFacade.handleSearch(query, limit, offset, chatJid, searchScope, rootChatJid);
    }
    handleThread(id, chatJid) {
        return this.channel.endpointFacade.handleThread(id, chatJid);
    }
    handleThought(panel, turnId) {
        return this.channel.endpointFacade.handleThought(panel, turnId);
    }
    async handleThoughtVisibility(req) {
        return await this.channel.endpointFacade.handleThoughtVisibility(req);
    }
    handleDeletePost(req, id, cascade = false) {
        return this.channel.endpointFacade.handleDeletePost(req, id, cascade);
    }
    async handleUpdatePost(req, id) {
        return await this.channel.endpointFacade.handleUpdatePost(req, id);
    }
    async handleInternalPost(req) {
        return await this.channel.endpointFacade.handleInternalPost(req);
    }
    handleSse(req) {
        return this.channel.sessionBroadcast.handleSse(req);
    }
    handleTerminalSession(req) {
        return this.channel.terminalVncHttpService.handleTerminalSession(req);
    }
    handleVncSession(req) {
        return this.channel.terminalVncHttpService.handleVncSession(req);
    }
    handleVncHandoff(req) {
        return this.channel.terminalVncHttpService.handleVncHandoff(req);
    }
    async handlePost(req, isReply) {
        return await this.channel.endpointFacade.handlePost(req, isReply);
    }
    handleAgentStatus(req) {
        return this.channel.endpointFacade.handleAgentStatus(req);
    }
    async handleAgentContext(req) {
        return await this.channel.endpointFacade.handleAgentContext(req);
    }
    async handleAutoresearchStatus(req) {
        return await this.channel.controlPlaneService.handleAutoresearchStatus(req);
    }
    async handleAutoresearchStop(req) {
        return await this.channel.controlPlaneService.handleAutoresearchStop(req);
    }
    async handleAutoresearchDismiss(req) {
        return await this.channel.controlPlaneService.handleAutoresearchDismiss(req);
    }
    async handleAgentQueueState(req) {
        return await this.channel.controlPlaneService.handleAgentQueueState(req);
    }
    async handleAgentQueueRemove(req) {
        return await this.channel.controlPlaneService.handleAgentQueueRemove(req);
    }
    async handleAgentQueueSteer(req) {
        return await this.channel.controlPlaneService.handleAgentQueueSteer(req);
    }
    async handleAgentModels(req) {
        return await this.channel.endpointFacade.handleAgentModels(req);
    }
    async handleAgentActiveChats(_req) {
        return this.channel.endpointFacade.handleAgentActiveChats();
    }
    async handleAgentBranches(req) {
        return await this.channel.endpointFacade.handleAgentBranches(req);
    }
    async handleAgentBranchFork(req) {
        return await this.channel.controlPlaneService.handleAgentBranchFork(req);
    }
    async handleAgentBranchRename(req) {
        return await this.channel.controlPlaneService.handleAgentBranchRename(req);
    }
    async handleAgentBranchPrune(req) {
        return await this.channel.controlPlaneService.handleAgentBranchPrune(req);
    }
    async handleAgentBranchRestore(req) {
        return await this.channel.controlPlaneService.handleAgentBranchRestore(req);
    }
    async handleAgentRespond(req) {
        return await this.channel.endpointFacade.handleAgentRespond(req);
    }
    async handleRemote(req) {
        return this.channel.remoteInterop.handleRequest(req);
    }
    async serveStatic(relPath) {
        return this.channel.responses.serveStatic(relPath);
    }
    async serveDocsStatic(relPath) {
        return this.channel.responses.serveDocsStatic(relPath);
    }
    json(data, status = 200) {
        return this.channel.responses.json(data, status);
    }
    clampInt(value, fallback, min, max) {
        return this.channel.responses.clampInt(value, fallback, min, max);
    }
    parseOptionalInt(value) {
        return this.channel.responses.parseOptionalInt(value);
    }
}
export function createWebChannelHttpSurfaceService(channel) {
    return new WebChannelHttpSurfaceService(channel);
}
export function getWebChannelHttpSurfaceService(channel) {
    return channel.httpSurfaceService ?? createWebChannelHttpSurfaceService(channel);
}
