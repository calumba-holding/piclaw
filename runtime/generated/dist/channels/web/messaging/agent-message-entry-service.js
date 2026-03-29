/**
 * channels/web/agent-message-entry-service.ts – WebChannel agent-message entry wrapper seam.
 *
 * Owns the thin `/agent/:agentId/message` request-entry wrapper that preserves
 * existing `chat_jid` query parsing/defaulting and forwards into the shared
 * agent-message handler path without changing router-facing WebChannel APIs.
 */
import { handleAgentMessage as handleAgentMessageRequest } from "../handlers/agent.js";
export function createWebAgentMessageEntryService(channel, defaults) {
    return new WebAgentMessageEntryService({
        defaultChatJid: defaults.defaultChatJid,
        defaultAgentId: defaults.defaultAgentId,
        forwardAgentMessageRequest: (req, pathname, chatJid, agentId) => handleAgentMessageRequest(channel, req, pathname, chatJid, agentId),
    });
}
export function getWebAgentMessageEntryService(channel, defaults) {
    return channel.agentMessageEntryService ?? createWebAgentMessageEntryService(channel, defaults);
}
export class WebAgentMessageEntryService {
    options;
    constructor(options) {
        this.options = options;
    }
    handleAgentMessage(req, pathname) {
        const chatJid = this.resolveChatJid(req);
        return this.options.forwardAgentMessageRequest(req, pathname, chatJid, this.options.defaultAgentId);
    }
    resolveChatJid(req) {
        return new URL(req.url).searchParams.get("chat_jid")?.trim() || this.options.defaultChatJid;
    }
}
