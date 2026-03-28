/**
 * channels/web/runtime-followup-facade-service.ts – extracted WebChannel runtime/follow-up facade seam.
 *
 * Keeps the remaining queued-followup, runtime-state, and queued-placeholder
 * facade methods behind a narrower service so `channels/web.ts` can stay a thin
 * coordinator without changing its public method signatures.
 */
export class WebChannelRuntimeFollowupFacadeService {
    deps;
    constructor(deps) {
        this.deps = deps;
    }
    async sendMessage(chatJid, text, options) {
        await this.deps.getMessageWriteService().sendMessage(chatJid, text, options);
    }
    async postDashboardWidget(chatJid, options) {
        await this.deps.getMessageWriteService().postDashboardWidget(chatJid, options);
    }
    queueFollowupPlaceholder(chatJid, text, threadId, queuedContent) {
        return this.deps.getMessageWriteService().queueFollowupPlaceholder(chatJid, text, threadId, queuedContent);
    }
    enqueueQueuedFollowupItem(chatJid, rowId, queuedContent, threadId, queuedAt, extras) {
        return this.deps.getQueuedFollowupLifecycle().enqueueQueuedFollowupItem(chatJid, rowId, queuedContent, threadId, queuedAt, extras);
    }
    consumeQueuedFollowupItem(chatJid) {
        return this.deps.getQueuedFollowupLifecycle().consumeQueuedFollowupItem(chatJid);
    }
    prependQueuedFollowupItem(chatJid, item) {
        this.deps.getQueuedFollowupLifecycle().prependQueuedFollowupItem(chatJid, item);
    }
    consumeQueuedFollowupPlaceholder(chatJid) {
        return this.deps.getQueuedFollowupLifecycle().consumeQueuedFollowupPlaceholder(chatJid);
    }
    getQueuedFollowupCount(chatJid) {
        return this.deps.getQueuedFollowupLifecycle().getQueuedFollowupCount(chatJid);
    }
    getQueuedFollowupItems(chatJid) {
        return this.deps.getQueuedFollowupLifecycle().getQueuedFollowupItems(chatJid);
    }
    removeQueuedFollowupItem(chatJid, rowId) {
        return this.deps.getQueuedFollowupLifecycle().removeQueuedFollowupItem(chatJid, rowId);
    }
    queuePendingSteering(chatJid, timestamp) {
        this.deps.getRuntimeState().queuePendingSteering(chatJid, timestamp);
    }
    consumePendingSteering(chatJid) {
        return this.deps.getRuntimeState().consumePendingSteering(chatJid);
    }
    updateAgentStatus(chatJid, status) {
        this.deps.getRuntimeState().updateAgentStatus(chatJid, status);
    }
    getAgentStatus(chatJid) {
        return this.deps.getRuntimeState().getAgentStatus(chatJid);
    }
    replaceQueuedFollowupPlaceholder(chatJid, rowId, text, mediaIds, contentBlocks, threadId, isTerminalAgentReply) {
        return this.deps.getMessageWriteService().replaceQueuedFollowupPlaceholder(chatJid, rowId, text, mediaIds, contentBlocks, threadId, isTerminalAgentReply);
    }
    getThreadRootId(chatJid, messageId) {
        return this.deps.getRuntimeState().getThreadRootId(chatJid, messageId);
    }
    resumeChat(chatJid, threadRootId) {
        this.deps.getRuntimeState().resumeChat(chatJid, threadRootId);
    }
    skipFailedOnModelSwitch(chatJid) {
        this.deps.getRuntimeState().skipFailedOnModelSwitch(chatJid);
    }
    recoverInflightRuns() {
        this.deps.getRuntimeState().recoverInflightRuns();
    }
    resumePendingChats(chatJid) {
        this.deps.getRuntimeState().resumePendingChats(chatJid);
    }
    loadState() {
        this.deps.getRuntimeState().loadState();
    }
    saveState() {
        this.deps.getRuntimeState().saveState();
    }
    setPanelExpanded(turnId, panel, expanded) {
        this.deps.getRuntimeState().setPanelExpanded(turnId, panel, expanded);
    }
    isPanelExpanded(turnId, panel) {
        return this.deps.getRuntimeState().isPanelExpanded(turnId, panel);
    }
    updateThoughtBuffer(turnId, text, totalLines) {
        this.deps.getRuntimeState().updateThoughtBuffer(turnId, text, totalLines);
    }
    updateDraftBuffer(turnId, text, totalLines) {
        this.deps.getRuntimeState().updateDraftBuffer(turnId, text, totalLines);
    }
    getBuffer(turnId, panel) {
        return this.deps.getRuntimeState().getBuffer(turnId, panel);
    }
}
