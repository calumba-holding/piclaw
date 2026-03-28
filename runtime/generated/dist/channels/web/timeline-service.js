/**
 * web/timeline-service.ts – Timeline data access for the web UI.
 *
 * Provides paginated timeline queries, hashtag/search filtering, and
 * post deletion with cascade handling for threaded replies.
 *
 * Consumers: web/handlers/posts.ts delegates timeline operations here.
 */
import { deleteMessageByRowId, deleteThreadByRowId, getChatBranchByChatJid, getMessageByRowId, getMessagesByHashtag, getTimeline, hasOlderMessages, listChatBranches, searchMessages, searchMessagesAcrossChats, } from "../../db.js";
const QUEUE_PLACEHOLDER_MARKER = "\u2063";
const LEGACY_QUEUE_STATUS = "Queued as a follow-up (one-at-a-time).";
function isHiddenQueuePlaceholder(post) {
    const content = post?.data?.content;
    const isBot = Boolean(post?.data?.is_bot_message);
    if (!isBot || typeof content !== "string")
        return false;
    return content === QUEUE_PLACEHOLDER_MARKER || content === LEGACY_QUEUE_STATUS;
}
function filterHiddenQueuePlaceholders(items) {
    return items.filter((post) => !isHiddenQueuePlaceholder(post));
}
/** Build paginated timeline data for GET /timeline. */
export function getTimelineResponse(chatJid, limit, before) {
    const rawPosts = getTimeline(chatJid, limit, before ?? undefined);
    const posts = filterHiddenQueuePlaceholders(rawPosts);
    const oldestId = rawPosts.length > 0 ? rawPosts[0].id : null;
    const hasMore = oldestId !== null && rawPosts.length === limit && hasOlderMessages(chatJid, oldestId);
    return { status: 200, body: { posts, limit, has_more: hasMore } };
}
/** Build timeline data filtered by hashtag. */
export function getHashtagResponse(chatJid, tag, limit, offset) {
    const posts = getMessagesByHashtag(chatJid, tag, limit, offset);
    return { status: 200, body: { hashtag: tag, posts, limit, offset } };
}
function resolveSearchRootChatJid(chatJid, requestedRootChatJid) {
    const branch = getChatBranchByChatJid(chatJid);
    const registryRoot = typeof branch?.root_chat_jid === "string" && branch.root_chat_jid.trim()
        ? branch.root_chat_jid.trim()
        : null;
    const requestedRoot = typeof requestedRootChatJid === "string" && requestedRootChatJid.trim()
        ? requestedRootChatJid.trim()
        : null;
    return registryRoot || requestedRoot || chatJid;
}
/** Build timeline data filtered by search query. */
export function getSearchResponse(chatJid, query, limit, offset, scope = "current", rootChatJid) {
    if (!query)
        return { status: 400, body: { error: "Missing 'q' parameter" } };
    const effectiveRootChatJid = scope === "root" ? resolveSearchRootChatJid(chatJid, rootChatJid) : null;
    let results;
    if (scope === "all") {
        results = searchMessagesAcrossChats(null, query, limit, offset);
    }
    else if (scope === "root") {
        const branchChatJids = Array.from(new Set(listChatBranches(effectiveRootChatJid).map((branch) => branch.chat_jid)));
        const scopedChatJids = branchChatJids.length > 0
            ? branchChatJids
            : Array.from(new Set([effectiveRootChatJid, chatJid].filter((value) => Boolean(value))));
        results = searchMessagesAcrossChats(scopedChatJids, query, limit, offset);
    }
    else {
        results = searchMessages(chatJid, query, limit, offset);
    }
    return {
        status: 200,
        body: { query, results, limit, offset, scope, root_chat_jid: effectiveRootChatJid },
    };
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
