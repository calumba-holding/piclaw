import { getWebChannelHttpSurfaceService, } from "./web-channel-http-surface-service.js";
import { getWebChannelRuntimePublicSurfaceService, } from "./web-channel-runtime-public-surface-service.js";
import { getWebChannelLifecycleSpecialSurfaceService, } from "./web-channel-lifecycle-special-surface-service.js";
function getHttpSurfaceService(channel) {
    return getWebChannelHttpSurfaceService(channel);
}
function getRuntimePublicSurfaceService(channel) {
    return getWebChannelRuntimePublicSurfaceService(channel);
}
function getLifecycleSpecialSurfaceService(channel, defaults) {
    return getWebChannelLifecycleSpecialSurfaceService(channel, defaults);
}
function withHttpSurface(callback) {
    return function delegateHttpSurface(...args) {
        return callback(getHttpSurfaceService(this), ...args);
    };
}
function withRuntimePublicSurface(callback) {
    return function delegateRuntimePublicSurface(...args) {
        return callback(getRuntimePublicSurfaceService(this), ...args);
    };
}
function withLifecycleSpecialSurface(defaults, callback) {
    return function delegateLifecycleSpecialSurface(...args) {
        return callback(getLifecycleSpecialSurfaceService(this, defaults), ...args);
    };
}
function runtimePublicGetter(callback) {
    return function getRuntimePublicValue() {
        return callback(getRuntimePublicSurfaceService(this));
    };
}
function lifecycleSpecialGetter(defaults, callback) {
    return function getLifecycleSpecialValue() {
        return callback(getLifecycleSpecialSurfaceService(this, defaults));
    };
}
export function installWebChannelPrototype(target, defaults) {
    Object.defineProperties(target, {
        sse: {
            configurable: true,
            get: runtimePublicGetter((service) => service.sse),
        },
        uiBridge: {
            configurable: true,
            get: runtimePublicGetter((service) => service.uiBridge),
        },
        server: {
            configurable: true,
            get: lifecycleSpecialGetter(defaults, (service) => service.server),
        },
        start: {
            configurable: true,
            writable: true,
            value: withLifecycleSpecialSurface(defaults, async (service) => await service.start()),
        },
        stop: {
            configurable: true,
            writable: true,
            value: withLifecycleSpecialSurface(defaults, async (service) => await service.stop()),
        },
        sendMessage: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface(async (service, chatJid, text, options) => await service.sendMessage(chatJid, text, options)),
        },
        postDashboardWidget: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface(async (service, chatJid, options) => await service.postDashboardWidget(chatJid, options)),
        },
        queueFollowupPlaceholder: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, chatJid, text, threadId, queuedContent) => service.queueFollowupPlaceholder(chatJid, text, threadId, queuedContent)),
        },
        enqueueQueuedFollowupItem: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, chatJid, rowId, queuedContent, threadId, queuedAt, extras) => service.enqueueQueuedFollowupItem(chatJid, rowId, queuedContent, threadId, queuedAt, extras)),
        },
        consumeQueuedFollowupItem: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, chatJid) => service.consumeQueuedFollowupItem(chatJid)),
        },
        prependQueuedFollowupItem: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, chatJid, item) => {
                service.prependQueuedFollowupItem(chatJid, item);
            }),
        },
        consumeQueuedFollowupPlaceholder: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, chatJid) => service.consumeQueuedFollowupPlaceholder(chatJid)),
        },
        getQueuedFollowupCount: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, chatJid) => service.getQueuedFollowupCount(chatJid)),
        },
        getQueuedFollowupItems: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, chatJid) => service.getQueuedFollowupItems(chatJid)),
        },
        removeQueuedFollowupItem: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, chatJid, rowId) => service.removeQueuedFollowupItem(chatJid, rowId)),
        },
        queuePendingSteering: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, chatJid, timestamp) => {
                service.queuePendingSteering(chatJid, timestamp);
            }),
        },
        consumePendingSteering: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, chatJid) => service.consumePendingSteering(chatJid)),
        },
        updateAgentStatus: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, chatJid, status) => {
                service.updateAgentStatus(chatJid, status);
            }),
        },
        getAgentStatus: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, chatJid) => service.getAgentStatus(chatJid)),
        },
        replaceQueuedFollowupPlaceholder: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, chatJid, rowId, text, mediaIds, contentBlocks, threadId, isTerminalAgentReply) => service.replaceQueuedFollowupPlaceholder(chatJid, rowId, text, mediaIds, contentBlocks, threadId, isTerminalAgentReply)),
        },
        getThreadRootId: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, chatJid, messageId) => service.getThreadRootId(chatJid, messageId)),
        },
        resumeChat: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, chatJid, threadRootId) => {
                service.resumeChat(chatJid, threadRootId);
            }),
        },
        skipFailedOnModelSwitch: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, chatJid) => {
                service.skipFailedOnModelSwitch(chatJid);
            }),
        },
        recoverInflightRuns: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service) => {
                service.recoverInflightRuns();
            }),
        },
        resumePendingChats: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, chatJid) => {
                service.resumePendingChats(chatJid);
            }),
        },
        loadState: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service) => {
                service.loadState();
            }),
        },
        saveState: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service) => {
                service.saveState();
            }),
        },
        setPanelExpanded: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, turnId, panel, expanded) => {
                service.setPanelExpanded(turnId, panel, expanded);
            }),
        },
        isPanelExpanded: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, turnId, panel) => service.isPanelExpanded(turnId, panel)),
        },
        updateThoughtBuffer: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, turnId, text, totalLines) => {
                service.updateThoughtBuffer(turnId, text, totalLines);
            }),
        },
        updateDraftBuffer: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, turnId, text, totalLines) => {
                service.updateDraftBuffer(turnId, text, totalLines);
            }),
        },
        getBuffer: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, turnId, panel) => service.getBuffer(turnId, panel)),
        },
        handleFetch: {
            configurable: true,
            writable: true,
            value: withHttpSurface((service, req, server) => service.handleFetch(req, server)),
        },
        handleRequest: {
            configurable: true,
            writable: true,
            value: withHttpSurface((service, req) => service.handleRequest(req)),
        },
        handleAgents: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service) => await service.handleAgents()),
        },
        handleManifest: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, req) => await service.handleManifest(req)),
        },
        handleAvatar: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, kind, req) => await service.handleAvatar(kind, req)),
        },
        handleWorkspaceVisibility: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, req) => await service.handleWorkspaceVisibility(req)),
        },
        handleTimeline: {
            configurable: true,
            writable: true,
            value: withHttpSurface((service, limit, before, chatJid) => service.handleTimeline(limit, before, chatJid)),
        },
        handleHashtag: {
            configurable: true,
            writable: true,
            value: withHttpSurface((service, tag, limit, offset, chatJid) => service.handleHashtag(tag, limit, offset, chatJid)),
        },
        handleSearch: {
            configurable: true,
            writable: true,
            value: withHttpSurface((service, query, limit, offset, chatJid, searchScope, rootChatJid) => service.handleSearch(query, limit, offset, chatJid, searchScope, rootChatJid)),
        },
        handleThread: {
            configurable: true,
            writable: true,
            value: withHttpSurface((service, id, chatJid) => service.handleThread(id, chatJid)),
        },
        handleThought: {
            configurable: true,
            writable: true,
            value: withHttpSurface((service, panel, turnId) => service.handleThought(panel, turnId)),
        },
        handleThoughtVisibility: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, req) => await service.handleThoughtVisibility(req)),
        },
        handleDeletePost: {
            configurable: true,
            writable: true,
            value: withHttpSurface((service, req, id, cascade = false) => service.handleDeletePost(req, id, cascade)),
        },
        handleUpdatePost: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, req, id) => await service.handleUpdatePost(req, id)),
        },
        handleInternalPost: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, req) => await service.handleInternalPost(req)),
        },
        handleSse: {
            configurable: true,
            writable: true,
            value: withHttpSurface((service, req) => service.handleSse(req)),
        },
        handleTerminalSession: {
            configurable: true,
            writable: true,
            value: withHttpSurface((service, req) => service.handleTerminalSession(req)),
        },
        handleVncSession: {
            configurable: true,
            writable: true,
            value: withHttpSurface((service, req) => service.handleVncSession(req)),
        },
        handleVncHandoff: {
            configurable: true,
            writable: true,
            value: withHttpSurface((service, req) => service.handleVncHandoff(req)),
        },
        broadcastEvent: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, eventType, data) => {
                service.broadcastEvent(eventType, data);
            }),
        },
        handlePost: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, req, isReply) => await service.handlePost(req, isReply)),
        },
        handleAgentStatus: {
            configurable: true,
            writable: true,
            value: withHttpSurface((service, req) => service.handleAgentStatus(req)),
        },
        handleAgentContext: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, req) => await service.handleAgentContext(req)),
        },
        handleAutoresearchStatus: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, req) => await service.handleAutoresearchStatus(req)),
        },
        handleAutoresearchStop: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, req) => await service.handleAutoresearchStop(req)),
        },
        handleAutoresearchDismiss: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, req) => await service.handleAutoresearchDismiss(req)),
        },
        handleAgentQueueState: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, req) => await service.handleAgentQueueState(req)),
        },
        handleAgentQueueRemove: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, req) => await service.handleAgentQueueRemove(req)),
        },
        handleAgentQueueSteer: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, req) => await service.handleAgentQueueSteer(req)),
        },
        handleAgentModels: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, req) => await service.handleAgentModels(req)),
        },
        handleAgentActiveChats: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, req) => await service.handleAgentActiveChats(req)),
        },
        handleAgentBranches: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, req) => await service.handleAgentBranches(req)),
        },
        handleAgentBranchFork: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, req) => await service.handleAgentBranchFork(req)),
        },
        handleAgentBranchRename: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, req) => await service.handleAgentBranchRename(req)),
        },
        handleAgentBranchPrune: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, req) => await service.handleAgentBranchPrune(req)),
        },
        handleAgentBranchRestore: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, req) => await service.handleAgentBranchRestore(req)),
        },
        handleAgentPeerMessage: {
            configurable: true,
            writable: true,
            value: withLifecycleSpecialSurface(defaults, async (service, req) => await service.handleAgentPeerMessage(req)),
        },
        handleAgentRespond: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, req) => await service.handleAgentRespond(req)),
        },
        handleAdaptiveCardAction: {
            configurable: true,
            writable: true,
            value: withLifecycleSpecialSurface(defaults, async (service, req) => await service.handleAdaptiveCardAction(req)),
        },
        handleAgentSidePrompt: {
            configurable: true,
            writable: true,
            value: withLifecycleSpecialSurface(defaults, async (service, req) => await service.handleAgentSidePrompt(req)),
        },
        handleAgentSidePromptStream: {
            configurable: true,
            writable: true,
            value: withLifecycleSpecialSurface(defaults, async (service, req) => await service.handleAgentSidePromptStream(req)),
        },
        handleAgentMessage: {
            configurable: true,
            writable: true,
            value: withLifecycleSpecialSurface(defaults, (service, req, pathname) => service.handleAgentMessage(req, pathname)),
        },
        processChat: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface(async (service, chatJid, agentId, threadRootId) => await service.processChat(chatJid, agentId, threadRootId)),
        },
        storeMessage: {
            configurable: true,
            writable: true,
            value: withRuntimePublicSurface((service, chatJid, content, isBot, mediaIds, options = {}) => service.storeMessage(chatJid, content, isBot, mediaIds, options)),
        },
        handleRemote: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, req) => await service.handleRemote(req)),
        },
        serveStatic: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, relPath) => await service.serveStatic(relPath)),
        },
        serveDocsStatic: {
            configurable: true,
            writable: true,
            value: withHttpSurface(async (service, relPath) => await service.serveDocsStatic(relPath)),
        },
        json: {
            configurable: true,
            writable: true,
            value: withHttpSurface((service, data, status = 200) => service.json(data, status)),
        },
        clampInt: {
            configurable: true,
            writable: true,
            value: withHttpSurface((service, value, fallback, min, max) => service.clampInt(value, fallback, min, max)),
        },
        parseOptionalInt: {
            configurable: true,
            writable: true,
            value: withHttpSurface((service, value) => service.parseOptionalInt(value)),
        },
    });
}
