/**
 * channels/web/channel-endpoint-context-factory.ts – Builds endpoint contexts for WebChannel handlers.
 */
import { getDb, replaceMessageContent } from "../../db.js";
import { resolveAvatarUrl } from "./avatar-service.js";
import { createAgentStatusContext, createAgentsEndpointContext, createAvatarEndpointContext, createContentEndpointsContext, createPostMutationsContext, createUiEndpointsContext, } from "./endpoint-contexts.js";
/** Normalize live identity config into the shared endpoint snapshot shape. */
export function createWebChannelIdentitySnapshot(identity) {
    return {
        assistantName: identity.assistantName,
        assistantAvatarRaw: identity.assistantAvatar || null,
        agentAvatarUrl: resolveAvatarUrl("agent", identity.assistantAvatar),
        userName: identity.userName || null,
        userAvatarRaw: identity.userAvatar || null,
        userAvatarUrl: resolveAvatarUrl("user", identity.userAvatar),
        userAvatarBackground: identity.userAvatarBackground || null,
    };
}
/** Create endpoint-context builders bound to the current WebChannel instance. */
export function createWebChannelEndpointContexts(channel, options) {
    let agentStatusContext = null;
    let contentContext = null;
    let uiContext = null;
    let authContext = null;
    return {
        postMutations: () => createPostMutationsContext({
            defaultChatJid: options.defaultChatJid,
            getLastCommandInteractionId: () => channel.lastCommandInteractionId,
            json: (payload, status = 200) => channel.json(payload, status),
            replaceMessageContent: (chatJid, id, content) => replaceMessageContent(chatJid, id, content, {}) ?? null,
            setThreadId: (messageId, threadId) => {
                getDb().prepare("UPDATE messages SET thread_id = ? WHERE rowid = ?").run(threadId, messageId);
            },
            broadcastInteractionUpdated: (interaction) => {
                channel.interactionBroadcaster.broadcastInteractionUpdated(interaction);
            },
            storeMessage: (chatJid, content, isBot, mediaIds, storeOptions = {}) => channel.storeMessage(chatJid, content, isBot, mediaIds, storeOptions),
            broadcastAgentResponse: (interaction) => {
                channel.interactionBroadcaster.broadcastAgentResponse(interaction);
            },
        }),
        agentStatus: () => {
            if (!agentStatusContext) {
                agentStatusContext = createAgentStatusContext({
                    defaultChatJid: options.defaultChatJid,
                    json: (payload, status = 200) => channel.json(payload, status),
                    getAgentStatus: (chatJid) => channel.getAgentStatus(chatJid),
                    getBuffer: (turnId, panel) => channel.getBuffer(turnId, panel),
                    getContextUsageForChat: (chatJid) => channel.agentPool.getContextUsageForChat(chatJid),
                    getAvailableModels: (chatJid) => channel.agentPool.getAvailableModels(chatJid),
                });
            }
            return agentStatusContext;
        },
        content: () => {
            if (!contentContext) {
                contentContext = createContentEndpointsContext({
                    defaultChatJid: options.defaultChatJid,
                    json: (payload, status = 200) => channel.json(payload, status),
                    getBuffer: (turnId, panel) => channel.getBuffer(turnId, panel),
                });
            }
            return contentContext;
        },
        ui: () => {
            if (!uiContext) {
                uiContext = createUiEndpointsContext({
                    json: (payload, status = 200) => channel.json(payload, status),
                    getWorkspaceVisible: () => channel.workspaceVisible,
                    setWorkspaceVisible: (value) => {
                        channel.workspaceVisible = value;
                    },
                    getWorkspaceShowHidden: () => channel.workspaceShowHidden,
                    setWorkspaceShowHidden: (value) => {
                        channel.workspaceShowHidden = value;
                    },
                    setPanelExpanded: (turnId, panel, expanded) => {
                        channel.setPanelExpanded(turnId, panel, expanded);
                    },
                    handleUiResponse: (requestId, outcome, chatJid) => channel.uiBridge.handleUiResponse(requestId, outcome, chatJid),
                });
            }
            return uiContext;
        },
        agents: () => {
            const identity = options.getIdentitySnapshot();
            return createAgentsEndpointContext({
                agentPool: channel.agentPool,
                defaultChatJid: options.defaultChatJid,
                defaultAgentId: options.defaultAgentId,
                agentName: identity.assistantName,
                agentAvatar: identity.agentAvatarUrl,
                userName: identity.userName,
                userAvatar: identity.userAvatarUrl,
                userAvatarBackground: identity.userAvatarBackground,
                json: (payload, status = 200) => channel.json(payload, status),
            });
        },
        avatar: () => {
            const identity = options.getIdentitySnapshot();
            return createAvatarEndpointContext({
                assistantAvatar: identity.assistantAvatarRaw,
                userAvatar: identity.userAvatarRaw,
                json: (payload, status = 200) => channel.json(payload, status),
            });
        },
        auth: () => {
            if (!authContext) {
                authContext = {
                    createTotpContext: () => channel.authGateway.createTotpContext(),
                    createWebauthnContext: () => channel.authGateway.createWebauthnContext(),
                    createWebauthnEnrolPageContext: () => channel.authGateway.createWebauthnEnrolPageContext(),
                    serveStatic: (relPath) => channel.serveStatic(relPath),
                };
            }
            return authContext;
        },
    };
}
