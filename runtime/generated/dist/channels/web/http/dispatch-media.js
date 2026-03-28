/**
 * web/http/dispatch-media.ts – Media route dispatch helpers.
 */
import { handleMedia, handleMediaInfo, handleMediaUpload, } from "../handlers/media.js";
/**
 * Dispatch `/media/*` routes and return null when no media route matches.
 * @param channel Media dispatcher contract with optional handler overrides.
 * @param req Incoming HTTP request.
 * @param pathname Parsed request pathname used for route matching and id extraction.
 * @returns Matched media response, or null when the request should fall through.
 */
export async function handleMediaRoutes(channel, req, pathname) {
    if (req.method === "POST" && pathname === "/media/upload") {
        return await (channel.handleMediaUpload?.(req) ?? handleMediaUpload(channel, req));
    }
    if (req.method === "GET" && pathname.startsWith("/media/") && pathname.endsWith("/thumbnail")) {
        const id = channel.parseOptionalInt(pathname.replace("/media/", "").replace("/thumbnail", ""));
        if (!id)
            return channel.json({ error: "Media not found" }, 404);
        return channel.handleMedia?.(id, true) ?? handleMedia(channel, id, true);
    }
    if (req.method === "GET" && pathname.startsWith("/media/") && pathname.endsWith("/info")) {
        const id = channel.parseOptionalInt(pathname.replace("/media/", "").replace("/info", ""));
        if (!id)
            return channel.json({ error: "Media not found" }, 404);
        return channel.handleMediaInfo?.(id) ?? handleMediaInfo(channel, id);
    }
    if (req.method === "GET" && pathname.startsWith("/media/")) {
        const id = channel.parseOptionalInt(pathname.replace("/media/", ""));
        if (!id)
            return channel.json({ error: "Media not found" }, 404);
        return channel.handleMedia?.(id, false) ?? handleMedia(channel, id, false);
    }
    return null;
}
