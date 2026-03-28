export class WebChannelRuntimePublicSurfaceService {
    channel;
    constructor(channel) {
        this.channel = channel;
    }
    get sse() {
        return this.channel.sessionBroadcast.sse;
    }
    get uiBridge() {
        return this.channel.sessionBroadcast.uiBridge;
    }
    async sendMessage(chatJid, text, options) {
        await this.channel.runtimeFollowupFacade.sendMessage(chatJid, text, options);
    }
    async postDashboardWidget(chatJid, options) {
        await this.channel.runtimeFollowupFacade.postDashboardWidget(chatJid, options);
    }
    queueFollowupPlaceholder(chatJid, text, threadId, queuedContent) {
        return this.channel.runtimeFollowupFacade.queueFollowupPlaceholder(chatJid, text, threadId, queuedContent);
    }
    enqueueQueuedFollowupItem(chatJid, rowId, queuedContent, threadId, queuedAt, extras) {
        return this.channel.runtimeFollowupFacade.enqueueQueuedFollowupItem(chatJid, rowId, queuedContent, threadId, queuedAt, extras);
    }
    consumeQueuedFollowupItem(chatJid) {
        return this.channel.runtimeFollowupFacade.consumeQueuedFollowupItem(chatJid);
    }
    prependQueuedFollowupItem(chatJid, item) {
        this.channel.runtimeFollowupFacade.prependQueuedFollowupItem(chatJid, item);
    }
    consumeQueuedFollowupPlaceholder(chatJid) {
        return this.channel.runtimeFollowupFacade.consumeQueuedFollowupPlaceholder(chatJid);
    }
    getQueuedFollowupCount(chatJid) {
        return this.channel.runtimeFollowupFacade.getQueuedFollowupCount(chatJid);
    }
    getQueuedFollowupItems(chatJid) {
        return this.channel.runtimeFollowupFacade.getQueuedFollowupItems(chatJid);
    }
    removeQueuedFollowupItem(chatJid, rowId) {
        return this.channel.runtimeFollowupFacade.removeQueuedFollowupItem(chatJid, rowId);
    }
    queuePendingSteering(chatJid, timestamp) {
        this.channel.runtimeFollowupFacade.queuePendingSteering(chatJid, timestamp);
    }
    consumePendingSteering(chatJid) {
        return this.channel.runtimeFollowupFacade.consumePendingSteering(chatJid);
    }
    updateAgentStatus(chatJid, status) {
        this.channel.runtimeFollowupFacade.updateAgentStatus(chatJid, status);
    }
    getAgentStatus(chatJid) {
        return this.channel.runtimeFollowupFacade.getAgentStatus(chatJid);
    }
    replaceQueuedFollowupPlaceholder(chatJid, rowId, text, mediaIds, contentBlocks, threadId, isTerminalAgentReply) {
        return this.channel.runtimeFollowupFacade.replaceQueuedFollowupPlaceholder(chatJid, rowId, text, mediaIds, contentBlocks, threadId, isTerminalAgentReply);
    }
    getThreadRootId(chatJid, messageId) {
        return this.channel.runtimeFollowupFacade.getThreadRootId(chatJid, messageId);
    }
    resumeChat(chatJid, threadRootId) {
        this.channel.runtimeFollowupFacade.resumeChat(chatJid, threadRootId);
    }
    skipFailedOnModelSwitch(chatJid) {
        this.channel.runtimeFollowupFacade.skipFailedOnModelSwitch(chatJid);
    }
    recoverInflightRuns() {
        this.channel.runtimeFollowupFacade.recoverInflightRuns();
    }
    resumePendingChats(chatJid) {
        this.channel.runtimeFollowupFacade.resumePendingChats(chatJid);
    }
    loadState() {
        this.channel.runtimeFollowupFacade.loadState();
    }
    saveState() {
        this.channel.runtimeFollowupFacade.saveState();
    }
    setPanelExpanded(turnId, panel, expanded) {
        this.channel.runtimeFollowupFacade.setPanelExpanded(turnId, panel, expanded);
    }
    isPanelExpanded(turnId, panel) {
        return this.channel.runtimeFollowupFacade.isPanelExpanded(turnId, panel);
    }
    updateThoughtBuffer(turnId, text, totalLines) {
        this.channel.runtimeFollowupFacade.updateThoughtBuffer(turnId, text, totalLines);
    }
    updateDraftBuffer(turnId, text, totalLines) {
        this.channel.runtimeFollowupFacade.updateDraftBuffer(turnId, text, totalLines);
    }
    getBuffer(turnId, panel) {
        return this.channel.runtimeFollowupFacade.getBuffer(turnId, panel);
    }
    broadcastEvent(eventType, data) {
        this.channel.sessionBroadcast.broadcastEvent(eventType, data);
    }
    async processChat(chatJid, agentId, threadRootId) {
        return this.channel.messageProcessingStorageService.processChat(chatJid, agentId, threadRootId);
    }
    storeMessage(chatJid, content, isBot, mediaIds, options = {}) {
        return this.channel.messageProcessingStorageService.storeMessage(chatJid, content, isBot, mediaIds, options);
    }
}
export function createWebChannelRuntimePublicSurfaceService(channel) {
    return new WebChannelRuntimePublicSurfaceService(channel);
}
export function getWebChannelRuntimePublicSurfaceService(channel) {
    return channel.runtimePublicSurfaceService ?? createWebChannelRuntimePublicSurfaceService(channel);
}
