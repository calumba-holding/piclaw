/**
 * web/agent-message-service.ts – Stores agent responses as timeline posts.
 *
 * After an agent run completes, this service persists the response as a
 * message in the database and broadcasts it to SSE clients.
 *
 * Consumers: channels/web.ts calls this after agent runs complete.
 */
import { normalizeMediaIds } from "./posts-service.js";
/**
 * Max allowed agent message content length (100 KB).
 * Consistent with MAX_POST_CONTENT_LENGTH in posts-service.ts.
 * Prevents oversized messages from the compose box reaching the agent.
 */
const MAX_AGENT_MESSAGE_CONTENT_LENGTH = 100 * 1024;
/**
 * Parse and validate an agent message API request body.
 * Returns { error } if the JSON is invalid or content exceeds the size limit.
 */
export async function parseAgentMessageRequest(req) {
    try {
        const data = (await req.json());
        // Content length check — must match the limit used by parsePostPayload()
        if (typeof data.content === "string" && data.content.length > MAX_AGENT_MESSAGE_CONTENT_LENGTH) {
            return { error: `Content too large (max ${MAX_AGENT_MESSAGE_CONTENT_LENGTH / 1024} KB)` };
        }
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
        mode: payload.mode,
    };
}
/** Store the user portion of an agent interaction in the database. */
export function storeAgentUserMessage(channel, chatJid, payload) {
    return channel.storeMessage(chatJid, payload.content, false, payload.mediaIds, {
        contentBlocks: payload.contentBlocks,
        linkPreviews: payload.linkPreviews,
    });
}
