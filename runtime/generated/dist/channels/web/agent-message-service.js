/**
 * web/agent-message-service.ts – Stores agent responses as timeline posts.
 *
 * After an agent run completes, this service persists the response as a
 * message in the database and broadcasts it to SSE clients.
 *
 * Consumers: channels/web.ts calls this after agent runs complete.
 */
import { parseJsonObjectRequest } from "./json-body.js";
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
    const parsed = await parseJsonObjectRequest(req);
    if (!parsed.ok)
        return { error: parsed.error };
    const data = parsed.payload;
    if (data.content !== undefined && typeof data.content !== "string") {
        return { error: "'content' must be a string" };
    }
    if (data.thread_id !== undefined && data.thread_id !== null && (!Number.isInteger(data.thread_id) || data.thread_id <= 0)) {
        return { error: "'thread_id' must be a positive integer or null" };
    }
    if (data.media_ids !== undefined && !Array.isArray(data.media_ids)) {
        return { error: "'media_ids' must be an array" };
    }
    if (data.content_blocks !== undefined && !Array.isArray(data.content_blocks)) {
        return { error: "'content_blocks' must be an array" };
    }
    if (data.link_previews !== undefined && !Array.isArray(data.link_previews)) {
        return { error: "'link_previews' must be an array" };
    }
    if (data.mode !== undefined && data.mode !== "auto" && data.mode !== "queue" && data.mode !== "steer") {
        return { error: "'mode' must be one of: auto, queue, steer" };
    }
    // Content length check — must match the limit used by parsePostPayload()
    if (typeof data.content === "string" && data.content.length > MAX_AGENT_MESSAGE_CONTENT_LENGTH) {
        return { error: `Content too large (max ${MAX_AGENT_MESSAGE_CONTENT_LENGTH / 1024} KB)` };
    }
    return { payload: data };
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
