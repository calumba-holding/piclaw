/**
 * web/agent-message-service.ts – Stores agent responses as timeline posts.
 *
 * After an agent run completes, this service persists the response as a
 * message in the database and broadcasts it to SSE clients.
 *
 * Consumers: channels/web.ts calls this after agent runs complete.
 */
import { normalizeMediaIds } from "./posts-service.js";
/** Parse and validate an agent message API request body. */
export async function parseAgentMessageRequest(req) {
    try {
        const data = (await req.json());
        return { payload: data };
    }
    catch {
        return { error: "Invalid JSON" };
    }
}
/** Normalize an agent message payload for storage (trim, defaults). */
export function normalizeAgentMessagePayload(payload) {
    return {
        content: payload.content,
        threadId: payload.thread_id ?? null,
        mediaIds: normalizeMediaIds(payload.media_ids),
        contentBlocks: Array.isArray(payload.content_blocks) ? payload.content_blocks : undefined,
        linkPreviews: Array.isArray(payload.link_previews) ? payload.link_previews : undefined,
    };
}
/** Store the user portion of an agent interaction in the database. */
export function storeAgentUserMessage(channel, chatJid, payload) {
    return channel.storeMessage(chatJid, payload.content, false, payload.mediaIds, {
        contentBlocks: payload.contentBlocks,
        linkPreviews: payload.linkPreviews,
    });
}
