/**
 * web/timeline-service.ts – Timeline data access for the web UI.
 *
 * Provides paginated timeline queries, hashtag/search filtering, and
 * post deletion with cascade handling for threaded replies.
 *
 * Consumers: web/handlers/posts.ts delegates timeline operations here.
 */
import { deleteMessageByRowId, deleteThreadByRowId, getMessageByRowId, getMessagesByHashtag, getTimeline, hasOlderMessages, searchMessages, } from "../../db.js";
/** Build paginated timeline data for GET /timeline. */
export function getTimelineResponse(chatJid, limit, before) {
    const posts = getTimeline(chatJid, limit, before ?? undefined);
    const oldestId = posts.length > 0 ? posts[0].id : null;
    const hasMore = oldestId !== null && posts.length === limit && hasOlderMessages(chatJid, oldestId);
    return { status: 200, body: { posts, limit, has_more: hasMore } };
}
/** Build timeline data filtered by hashtag. */
export function getHashtagResponse(chatJid, tag, limit, offset) {
    const posts = getMessagesByHashtag(chatJid, tag, limit, offset);
    return { status: 200, body: { hashtag: tag, posts, limit, offset } };
}
/** Build timeline data filtered by search query. */
export function getSearchResponse(chatJid, query, limit, offset) {
    if (!query)
        return { status: 400, body: { error: "Missing 'q' parameter" } };
    const results = searchMessages(chatJid, query, limit, offset);
    return { status: 200, body: { query, results, limit, offset } };
}
/** Build a single thread's messages for GET /thread/:id. */
export function getThreadResponse(chatJid, id) {
    if (!id)
        return { status: 404, body: { error: "Thread not found" } };
    const thread = getMessageByRowId(chatJid, id);
    if (!thread)
        return { status: 404, body: { error: "Thread not found" } };
    return { status: 200, body: { thread: [thread] } };
}
/** Delete a post and its thread, returning success/error. */
export function deletePostResponse(chatJid, id, cascade = false) {
    if (!id)
        return { status: 404, body: { error: "Post not found" }, deletedIds: [] };
    const deletedIds = cascade
        ? deleteThreadByRowId(chatJid, id)
        : deleteMessageByRowId(chatJid, id)
            ? [id]
            : [];
    return {
        status: 200,
        body: { deleted: deletedIds.length, ids: deletedIds },
        deletedIds,
    };
}
