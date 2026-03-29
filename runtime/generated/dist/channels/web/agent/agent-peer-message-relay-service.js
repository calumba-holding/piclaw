/**
 * channels/web/agent-peer-message-relay-service.ts – WebChannel peer-message relay wrapper seam.
 *
 * Owns the `/agent/peer-message` request wrapper that validates payloads,
 * resolves target chats, shapes forwarded content, and relays through the
 * normal agent message path so queue/defer semantics stay unchanged.
 */
import { getChatBranchByChatJid } from "../../../db.js";
import { handleAgentMessage as handleAgentMessageRequest } from "../handlers/agent.js";
import { parseJsonObjectRequest } from "../json-body.js";
export function createWebAgentPeerMessageRelayService(channel, defaults) {
    return new WebAgentPeerMessageRelayService({
        defaultAgentId: defaults.defaultAgentId,
        json: (payload, status = 200) => channel.json(payload, status),
        agentPool: channel.agentPool,
        getChatBranchByChatJid,
        forwardAgentMessageRequest: (req, pathname, chatJid, agentId) => handleAgentMessageRequest(channel, req, pathname, chatJid, agentId),
    });
}
export class WebAgentPeerMessageRelayService {
    options;
    constructor(options) {
        this.options = options;
    }
    async handleAgentPeerMessage(req) {
        const parsed = await parseJsonObjectRequest(req);
        if (!parsed.ok)
            return this.options.json({ error: parsed.error }, 400);
        const payload = parsed.payload;
        const sourceChatJid = typeof payload.source_chat_jid === "string" ? payload.source_chat_jid.trim() : "";
        const sourceAgentName = typeof payload.source_agent_name === "string" ? payload.source_agent_name.trim() : "";
        const requestedTargetChatJid = typeof payload.target_chat_jid === "string" ? payload.target_chat_jid.trim() : "";
        const requestedTargetAgentName = typeof payload.target_agent_name === "string" ? payload.target_agent_name.trim() : "";
        const content = typeof payload.content === "string" ? payload.content.trim() : "";
        const mode = payload.mode === "queue" || payload.mode === "steer" || payload.mode === "auto"
            ? payload.mode
            : "auto";
        if (!sourceChatJid)
            return this.options.json({ error: "Missing source_chat_jid" }, 400);
        if (!requestedTargetChatJid && !requestedTargetAgentName) {
            return this.options.json({ error: "Missing target_chat_jid or target_agent_name" }, 400);
        }
        if (!content)
            return this.options.json({ error: "Missing content" }, 400);
        const targetChat = this.resolveTargetChat(requestedTargetChatJid, requestedTargetAgentName);
        if (!targetChat) {
            return this.options.json({
                error: requestedTargetAgentName
                    ? `Unknown target agent: ${requestedTargetAgentName}`
                    : `Target chat is not active: ${requestedTargetChatJid}`,
            }, 404);
        }
        if (sourceChatJid === targetChat.chat_jid) {
            return this.options.json({ error: "source_chat_jid and target chat must differ" }, 400);
        }
        const effectiveSourceAgentName = sourceAgentName || this.options.agentPool.getAgentHandleForChat(sourceChatJid);
        const forwardedContent = `Peer message from @${effectiveSourceAgentName}:\n\n${content}`;
        const pathname = `/agent/${this.options.defaultAgentId}/message`;
        const forwardReq = new Request(`http://internal${pathname}?chat_jid=${encodeURIComponent(targetChat.chat_jid)}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: forwardedContent,
                mode,
            }),
        });
        const forwardRes = await this.options.forwardAgentMessageRequest(forwardReq, pathname, targetChat.chat_jid, this.options.defaultAgentId);
        if (!forwardRes.ok) {
            return forwardRes;
        }
        const responseBody = await forwardRes.json().catch(() => ({}));
        return this.options.json({
            status: "ok",
            ...responseBody,
            source_chat_jid: sourceChatJid,
            source_agent_name: effectiveSourceAgentName,
            target_chat_jid: targetChat.chat_jid,
            target_agent_name: targetChat.agent_name,
            relayed: true,
        }, forwardRes.status);
    }
    resolveTargetChat(requestedTargetChatJid, requestedTargetAgentName) {
        if (requestedTargetChatJid) {
            return this.options.agentPool.listActiveChats().find((chat) => chat.chat_jid === requestedTargetChatJid)
                ?? this.options.getChatBranchByChatJid(requestedTargetChatJid);
        }
        return typeof this.options.agentPool.findChatByAgentName === "function"
            ? this.options.agentPool.findChatByAgentName(requestedTargetAgentName)
            : this.options.agentPool.findActiveChatByAgentName(requestedTargetAgentName);
    }
}
