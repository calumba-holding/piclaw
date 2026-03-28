/**
 * web/agent-message-store.ts – Tracks in-flight agent responses and attachments.
 *
 * Maintains a buffer of the current agent response text, media attachments,
 * and a pending-post queue. When the agent finishes, the buffered content
 * is flushed to the database via agent-message-service.ts.
 *
 * Consumers: channels/web.ts and web/agent-events.ts write to this store.
 */
import { formatOutbound } from "../../router.js";
function buildAttachmentBlocks(attachments) {
    const mediaIds = attachments.map((a) => a.id);
    const contentBlocks = attachments.map((a) => ({
        type: a.kind === "image" ? "image" : "file",
        name: a.name,
        filename: a.name,
        mime_type: a.contentType,
        size: a.size,
    }));
    return { mediaIds, contentBlocks };
}
/** Persist the accumulated agent turn (text + attachments) to the database. */
export function storeAgentTurn(channel, emitter, params) {
    const { mediaIds, contentBlocks } = buildAttachmentBlocks(params.attachments);
    const formatted = formatOutbound(params.text, params.channelName);
    const resolvedThreadId = params.threadId ?? undefined;
    if (!params.skipPlaceholder) {
        const placeholderId = channel.consumeQueuedFollowupPlaceholder(params.chatJid);
        if (placeholderId) {
            // Don't override the placeholder's thread_id — it was set correctly
            // when the /queue command created the placeholder (threaded under the
            // /queue message). Passing undefined preserves the original association.
            const updated = channel.replaceQueuedFollowupPlaceholder(params.chatJid, placeholderId, formatted, mediaIds, contentBlocks.length > 0 ? contentBlocks : undefined, undefined, params.isTerminalAgentReply);
            if (updated) {
                channel.broadcastEvent?.("agent_followup_consumed", {
                    chat_jid: params.chatJid,
                    thread_id: params.threadId ?? null,
                    row_id: placeholderId,
                });
                return true;
            }
        }
    }
    const interaction = channel.storeMessage(params.chatJid, formatted, true, mediaIds, {
        contentBlocks: contentBlocks.length > 0 ? contentBlocks : undefined,
        threadId: resolvedThreadId,
        isTerminalAgentReply: params.isTerminalAgentReply,
    });
    if (interaction) {
        emitter.response(interaction);
        return true;
    }
    return false;
}
