/**
 * web/http/dispatch-content.ts – Timeline/post/search/thread route dispatch helpers.
 */
/**
 * Dispatch primary content routes and return null when no primary route matches.
 * @param channel Web channel contract with content endpoint handlers and parsing helpers.
 * @param req Incoming HTTP request.
 * @param pathname Parsed request pathname used for route matching.
 * @param url Parsed request URL used for query-parameter extraction.
 * @returns Matched primary content response, or null when the request should fall through.
 */
export async function handleContentPrimaryRoutes(channel, req, pathname, url) {
    if (req.method === "GET" && pathname === "/timeline") {
        const limit = channel.clampInt(url.searchParams.get("limit"), 10, 1, 100);
        const before = channel.parseOptionalInt(url.searchParams.get("before"));
        const chatJid = url.searchParams.get("chat_jid")?.trim() || undefined;
        return channel.handleTimeline(limit, before ?? undefined, chatJid);
    }
    if (req.method === "GET" && pathname.startsWith("/hashtag/")) {
        const tag = decodeURIComponent(pathname.replace("/hashtag/", ""));
        const limit = channel.clampInt(url.searchParams.get("limit"), 50, 1, 100);
        const offset = channel.clampInt(url.searchParams.get("offset"), 0, 0, Number.MAX_SAFE_INTEGER);
        const chatJid = url.searchParams.get("chat_jid")?.trim() || undefined;
        return channel.handleHashtag(tag, limit, offset, chatJid);
    }
    if (req.method === "GET" && pathname === "/search") {
        const query = (url.searchParams.get("q") || "").trim();
        const limit = channel.clampInt(url.searchParams.get("limit"), 50, 1, 100);
        const offset = channel.clampInt(url.searchParams.get("offset"), 0, 0, Number.MAX_SAFE_INTEGER);
        const chatJid = url.searchParams.get("chat_jid")?.trim() || undefined;
        const searchScope = url.searchParams.get("scope")?.trim();
        const rootChatJid = url.searchParams.get("root_chat_jid")?.trim() || undefined;
        return channel.handleSearch(query, limit, offset, chatJid, searchScope, rootChatJid);
    }
    if (req.method === "POST" && pathname === "/post") {
        return await channel.handlePost(req, false);
    }
    if (req.method === "POST" && pathname === "/post/reply") {
        return await channel.handlePost(req, true);
    }
    if (req.method === "PATCH" && pathname.startsWith("/post/")) {
        const id = channel.parseOptionalInt(pathname.replace("/post/", ""));
        return await channel.handleUpdatePost(req, id);
    }
    if (req.method === "GET" && pathname.startsWith("/thread/")) {
        const id = channel.parseOptionalInt(pathname.replace("/thread/", ""));
        const chatJid = url.searchParams.get("chat_jid")?.trim() || undefined;
        return channel.handleThread(id, chatJid);
    }
    return null;
}
/**
 * Dispatch secondary/late content routes that run after agent dispatch.
 * @param channel Web channel contract with secondary content handlers.
 * @param req Incoming HTTP request.
 * @param pathname Parsed request pathname used for route matching.
 * @param url Parsed request URL used for delete-cascade query extraction.
 * @returns Matched secondary content response, or null when no secondary route applies.
 */
export async function handleContentSecondaryRoutes(channel, req, pathname, url) {
    if (req.method === "DELETE" && pathname.startsWith("/post/")) {
        const id = channel.parseOptionalInt(pathname.replace("/post/", ""));
        const cascade = url.searchParams.get("cascade") === "true" || url.searchParams.get("cascade") === "1";
        return channel.handleDeletePost(req, id, cascade);
    }
    if (req.method === "POST" && pathname === "/internal/post") {
        return await channel.handleInternalPost(req);
    }
    return null;
}
