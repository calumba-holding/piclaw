/**
 * channels/web/message-processing-storage-service.ts – WebChannel message processing/storage seam.
 *
 * Owns the thin adapter layer for WebChannel's public processChat() and
 * storeMessage() methods so WebChannel can remain a coordinator while the
 * existing handler/persistence behavior stays unchanged.
 */
import { processChat as processAgentChat } from "../handlers/agent.js";
import { storeWebMessage as persistWebMessage, } from "./message-store.js";
export function createWebMessageProcessingStorageService(channel, defaults) {
    return new WebMessageProcessingStorageService(channel, {
        defaultAgentId: defaults.defaultAgentId,
        getAssistantName: defaults.getAssistantName,
        processChat: (target, chatJid, agentId, threadRootId) => processAgentChat(target, chatJid, agentId, threadRootId),
        storeWebMessage: (target, params, options) => persistWebMessage(target, params, options),
    });
}
export class WebMessageProcessingStorageService {
    channel;
    options;
    constructor(channel, options) {
        this.channel = channel;
        this.options = options;
    }
    processChat(chatJid, agentId, threadRootId) {
        return this.options.processChat(this.channel, chatJid, agentId, threadRootId ?? undefined);
    }
    storeMessage(chatJid, content, isBot, mediaIds, options = {}) {
        return this.options.storeWebMessage(this.channel, {
            chatJid,
            content,
            isBot,
            mediaIds,
            agentId: this.options.defaultAgentId,
            agentName: this.options.getAssistantName(),
        }, {
            contentBlocks: options.contentBlocks,
            linkPreviews: options.linkPreviews,
            threadId: options.threadId ?? null,
            isTerminalAgentReply: options.isTerminalAgentReply,
            isSteeringMessage: options.isSteeringMessage,
        });
    }
}
