import { getIdentityConfig, getWebRuntimeConfig, getWebServerConfig, } from "../../core/config.js";
import { getChatCursor, getDb, replaceMessageContent } from "../../db.js";
import { RemoteInteropService } from "../../remote/service.js";
import { handlePost as handlePostRequest } from "./handlers/posts.js";
import { WebAdaptiveCardSidePromptService, } from "./adaptive-card-side-prompt-service.js";
import { createWebAgentControlPlaneService, } from "./agent-control-plane-service.js";
import { createWebAgentPeerMessageRelayService, } from "./agent-peer-message-relay-service.js";
import { ensureAvatarCache } from "./avatar-service.js";
import { WebAuthGateway } from "./auth-gateway.js";
import { createWebChannelEndpointContexts, createWebChannelIdentitySnapshot, } from "./channel-endpoint-context-factory.js";
import { WebChannelEndpointFacadeService, } from "./channel-endpoint-facade-service.js";
import { createInteractionBroadcaster } from "./interaction-broadcaster.js";
import { createWebMessageProcessingStorageService, } from "./message-processing-storage-service.js";
import { WebMessageWriteService } from "./message-write-service.js";
import { RequestRouterService } from "./request-router-service.js";
import { WebChannelRuntimeFollowupFacadeService } from "./runtime-followup-facade-service.js";
import { WebChannelRuntimeStateService, } from "./runtime-state-service.js";
import { createWebServerLifecycleGateway, } from "./server-lifecycle-gateway-service.js";
import { WebSessionBroadcastService } from "./session-broadcast-service.js";
import { createWebTerminalVncHttpService, } from "./terminal-vnc-http-service.js";
const defaultDeps = {
    getIdentityConfig,
    getChatCursor,
    createSessionBroadcast: (agentPool) => new WebSessionBroadcastService(agentPool),
    createRemoteInterop: (agentPool) => new RemoteInteropService(agentPool),
    createRuntimeState: (callbacks, options) => new WebChannelRuntimeStateService(callbacks, options),
    createIdentitySnapshot: (identity) => createWebChannelIdentitySnapshot(identity),
    createInteractionBroadcaster,
    createAuthGateway: (config, deps) => new WebAuthGateway(config, deps),
    createMessageProcessingStorageService: (channel, defaults) => createWebMessageProcessingStorageService(channel, defaults),
    createMessageWriteService: (deps) => new WebMessageWriteService(deps),
    createRuntimeFollowupFacade: (deps) => new WebChannelRuntimeFollowupFacadeService(deps),
    createRequestRouter: (channel) => new RequestRouterService(channel),
    createEndpointContexts: (channel, options) => createWebChannelEndpointContexts(channel, options),
    createEndpointFacade: (options) => new WebChannelEndpointFacadeService(options),
    createControlPlaneService: (channel, defaults) => createWebAgentControlPlaneService(channel, defaults),
    createServerLifecycleGateway: (channel, configs) => createWebServerLifecycleGateway(channel, configs),
    createTerminalVncHttpService: (channel, configs) => createWebTerminalVncHttpService(channel, configs),
    createAdaptiveCardSidePromptService: (options) => new WebAdaptiveCardSidePromptService(options),
    createPeerMessageRelayService: (channel, defaults) => createWebAgentPeerMessageRelayService(channel, defaults),
    replaceMessageContent,
    getDb,
    ensureAvatarCache,
    handlePostRequest: (channel, req, isReply, chatJid) => handlePostRequest(channel, req, isReply, chatJid),
};
function resolveListKnownChats(agentPool) {
    return typeof agentPool.listKnownChats === "function"
        ? (rootChatJid, options) => agentPool.listKnownChats(rootChatJid, options)
        : undefined;
}
export function initializeWebChannelConstructor(channel, runtimeOpts, defaults, deps = defaultDeps) {
    Object.assign(channel, runtimeOpts);
    Object.assign(channel, createDefaultWebChannelConstructorFactory(channel, defaults, deps));
}
export function createDefaultWebChannelConstructorFactory(channel, defaults, deps = defaultDeps) {
    return createWebChannelConstructorFactory(channel, {
        ...defaults,
        webServerConfig: getWebServerConfig(),
        webRuntimeConfig: getWebRuntimeConfig(),
    }, deps);
}
export function createWebChannelConstructorFactory(channel, options, deps = defaultDeps) {
    const sessionBroadcast = deps.createSessionBroadcast(channel.agentPool);
    const remoteInterop = deps.createRemoteInterop(channel.agentPool);
    const runtimeState = deps.createRuntimeState({
        getAssistantName: () => deps.getIdentityConfig().assistantName,
        getChatCursor: (chatJid) => deps.getChatCursor(chatJid),
        enqueue: (task, key, laneKey) => channel.queue.enqueue(task, key, laneKey),
        processChat: (chatJid, agentId, threadRootId) => channel.processChat(chatJid, agentId, threadRootId),
    }, {
        defaultAgentId: options.defaultAgentId,
        stateKey: options.stateKey,
    });
    const getIdentitySnapshot = () => deps.createIdentitySnapshot(deps.getIdentityConfig());
    const interactionBroadcaster = deps.createInteractionBroadcaster(channel, () => {
        const identity = getIdentitySnapshot();
        return {
            agentName: identity.assistantName,
            agentAvatar: identity.agentAvatarUrl,
            userName: identity.userName,
            userAvatar: identity.userAvatarUrl,
            userAvatarBackground: identity.userAvatarBackground,
        };
    });
    const authGateway = deps.createAuthGateway({
        passkeyMode: options.webRuntimeConfig.passkeyMode || "",
        totpSecret: options.webRuntimeConfig.totpSecret || "",
        internalSecret: options.webRuntimeConfig.internalSecret || "",
        sessionTtlSeconds: options.webRuntimeConfig.sessionTtl,
        hasTls: Boolean(options.webServerConfig.tlsCert && options.webServerConfig.tlsKey),
    }, {
        json: (payload, status = 200) => channel.json(payload, status),
        challenges: channel.webauthnChallenges,
        failureTracker: channel.totpFailureTracker,
    });
    const messageProcessingStorageService = deps.createMessageProcessingStorageService(channel, {
        defaultAgentId: options.defaultAgentId,
        getAssistantName: () => deps.getIdentityConfig().assistantName,
    });
    const messageWriteService = deps.createMessageWriteService({
        defaultAgentId: options.defaultAgentId,
        storeMessage: (chatJid, content, isBot, mediaIds, writeOptions) => channel.storeMessage(chatJid, content, isBot, mediaIds, writeOptions),
        replaceMessageContent: (chatJid, rowId, text, mediaIds, contentBlocks, isTerminalAgentReply) => deps.replaceMessageContent(chatJid, rowId, text, { contentBlocks, mediaIds, isTerminalAgentReply }) ?? null,
        setMessageThreadToSelf: (messageId) => {
            deps.getDb().prepare("UPDATE messages SET thread_id = ? WHERE rowid = ?").run(messageId, messageId);
        },
        broadcastAgentResponse: (interaction) => interactionBroadcaster.broadcastAgentResponse(interaction),
        broadcastInteractionUpdated: (interaction) => interactionBroadcaster.broadcastInteractionUpdated(interaction),
        enqueueFollowupPlaceholder: (chatJid, rowId, queuedContent, threadId, queuedAt) => channel.queuedFollowupLifecycle.enqueuePlaceholder(chatJid, rowId, queuedContent, threadId, queuedAt),
    });
    const runtimeFollowupFacade = deps.createRuntimeFollowupFacade({
        getMessageWriteService: () => messageWriteService,
        getQueuedFollowupLifecycle: () => channel.queuedFollowupLifecycle,
        getRuntimeState: () => runtimeState,
    });
    const requestRouter = deps.createRequestRouter(channel);
    const endpointContexts = deps.createEndpointContexts(channel, {
        defaultChatJid: options.defaultChatJid,
        defaultAgentId: options.defaultAgentId,
        getIdentitySnapshot,
    });
    const endpointFacade = deps.createEndpointFacade({
        endpointContexts,
        defaultChatJid: options.defaultChatJid,
        getIdentitySnapshot,
        ensureAvatarCache: deps.ensureAvatarCache,
        json: (payload, status = 200) => channel.json(payload, status),
        broadcastEvent: (eventType, data) => channel.broadcastEvent(eventType, data),
        handlePostRequest: (req, isReply, chatJid) => deps.handlePostRequest(channel, req, isReply, chatJid),
        listActiveChats: () => channel.agentPool.listActiveChats(),
        listKnownChats: resolveListKnownChats(channel.agentPool),
    });
    const controlPlaneService = deps.createControlPlaneService(channel, {
        defaultChatJid: options.defaultChatJid,
        defaultAgentId: options.defaultAgentId,
    });
    const serverLifecycleGateway = deps.createServerLifecycleGateway({
        json: (payload, status = 200) => channel.json(payload, status),
        loadState: () => channel.loadState(),
        handleRequest: (req) => channel.handleRequest(req),
        authGateway,
        terminalService: channel.terminalService,
        vncService: channel.vncService,
        get workspaceVisible() {
            return channel.workspaceVisible;
        },
        get workspaceShowHidden() {
            return channel.workspaceShowHidden;
        },
        broadcastEvent: (eventType, data) => channel.broadcastEvent(eventType, data),
        uiBridge: sessionBroadcast.uiBridge,
        sse: sessionBroadcast.sse,
    }, {
        webServerConfig: options.webServerConfig,
        webRuntimeConfig: options.webRuntimeConfig,
    });
    const terminalVncHttpService = deps.createTerminalVncHttpService({
        json: (payload, status = 200) => channel.json(payload, status),
        authGateway,
        terminalService: channel.terminalService,
        vncService: channel.vncService,
    }, {
        webRuntimeConfig: options.webRuntimeConfig,
    });
    const adaptiveCardSidePromptService = deps.createAdaptiveCardSidePromptService({
        defaultChatJid: options.defaultChatJid,
        defaultAgentId: options.defaultAgentId,
        json: (payload, status = 200) => channel.json(payload, status),
        webRuntimeConfig: options.webRuntimeConfig,
        agentPool: channel.agentPool,
        authGateway,
        interactionBroadcaster,
        sendMessage: (chatJid, text, sendOptions) => runtimeFollowupFacade.sendMessage(chatJid, text, sendOptions),
        broadcastEvent: (eventType, data) => channel.broadcastEvent(eventType, data),
        skipFailedOnModelSwitch: (chatJid) => runtimeState.skipFailedOnModelSwitch(chatJid),
        forwardAgentMessage: async (req, pathname, _chatJid, _agentId) => {
            const webChannel = channel;
            if (typeof webChannel.handleAgentMessage === "function") {
                return await webChannel.handleAgentMessage(req, pathname);
            }
            throw new Error("Missing WebChannel.handleAgentMessage for adaptive-card side prompts.");
        },
    });
    const peerMessageRelayService = deps.createPeerMessageRelayService(channel, {
        defaultAgentId: options.defaultAgentId,
    });
    return {
        sessionBroadcast,
        remoteInterop,
        runtimeState,
        interactionBroadcaster,
        authGateway,
        messageProcessingStorageService,
        messageWriteService,
        runtimeFollowupFacade,
        requestRouter,
        endpointContexts,
        endpointFacade,
        controlPlaneService,
        serverLifecycleGateway,
        terminalVncHttpService,
        adaptiveCardSidePromptService,
        peerMessageRelayService,
    };
}
