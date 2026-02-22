import { extname, resolve } from "path";
import { ASSISTANT_NAME, WEB_HOST, WEB_PORT } from "../config.js";
import { attachMediaToMessage, createMedia, deleteMessageByRowId, getMediaById, getMediaInfoById, getMessageByRowId, getMessagesByHashtag, getMessagesSince, getRouterState, getTimeline, hasOlderMessages, searchMessages, setRouterState, storeChatMetadata, storeMessage, } from "../db.js";
import { runAgent } from "../agent-runner.js";
import { formatMessages, formatOutbound } from "../router.js";
const DEFAULT_CHAT_JID = "web:default";
const DEFAULT_AGENT_ID = "default";
const STATE_KEY = "last_agent_timestamp_web";
const STATIC_DIR = resolve(import.meta.dir, "..", "..", "web", "static");
const encoder = new TextEncoder();
const MIME_TYPES = {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".woff2": "font/woff2",
    ".ico": "image/x-icon",
};
export class WebChannel {
    queue;
    server = null;
    lastAgentTimestamp = {};
    clients = new Set();
    constructor(opts) {
        this.queue = opts.queue;
    }
    async start() {
        this.loadState();
        this.server = Bun.serve({
            hostname: WEB_HOST,
            port: WEB_PORT,
            fetch: (req) => this.handleRequest(req),
        });
        console.log(`[web] UI listening on http://${WEB_HOST}:${WEB_PORT}`);
    }
    async stop() {
        for (const client of this.clients) {
            clearInterval(client.heartbeat);
            try {
                client.controller.close();
            }
            catch { }
        }
        this.clients.clear();
        this.server?.stop(true);
        this.server = null;
    }
    async sendMessage(chatJid, text) {
        const interaction = this.storeMessage(chatJid, text, true, []);
        if (interaction) {
            this.broadcastEvent("agent_response", interaction);
        }
    }
    loadState() {
        const data = getRouterState(STATE_KEY);
        try {
            this.lastAgentTimestamp = data ? JSON.parse(data) : {};
        }
        catch {
            this.lastAgentTimestamp = {};
        }
    }
    saveState() {
        setRouterState(STATE_KEY, JSON.stringify(this.lastAgentTimestamp));
    }
    async handleRequest(req) {
        const url = new URL(req.url);
        const pathname = url.pathname;
        if (req.method === "GET" && (pathname === "/" || pathname === "/index.html")) {
            return this.serveStatic("index.html");
        }
        if (pathname.startsWith("/static/")) {
            const rel = pathname.replace("/static/", "");
            return this.serveStatic(rel);
        }
        if (pathname === "/sse/stream") {
            return this.handleSse();
        }
        if (req.method === "GET" && pathname === "/agents") {
            return this.json({
                agents: [
                    {
                        id: DEFAULT_AGENT_ID,
                        name: ASSISTANT_NAME,
                        description: `${ASSISTANT_NAME} agent`,
                        status: "running",
                        actions: [],
                    },
                ],
            });
        }
        if (req.method === "GET" && pathname === "/timeline") {
            const limit = this.clampInt(url.searchParams.get("limit"), 10, 1, 100);
            const before = this.parseOptionalInt(url.searchParams.get("before"));
            const posts = getTimeline(DEFAULT_CHAT_JID, limit, before ?? undefined);
            const oldestId = posts.length > 0 ? posts[0].id : null;
            const hasMore = oldestId !== null && posts.length === limit && hasOlderMessages(DEFAULT_CHAT_JID, oldestId);
            return this.json({ posts, limit, has_more: hasMore });
        }
        if (req.method === "GET" && pathname.startsWith("/hashtag/")) {
            const tag = decodeURIComponent(pathname.replace("/hashtag/", ""));
            const limit = this.clampInt(url.searchParams.get("limit"), 50, 1, 100);
            const offset = this.clampInt(url.searchParams.get("offset"), 0, 0, Number.MAX_SAFE_INTEGER);
            const posts = getMessagesByHashtag(DEFAULT_CHAT_JID, tag, limit, offset);
            return this.json({ hashtag: tag, posts, limit, offset });
        }
        if (req.method === "GET" && pathname === "/search") {
            const query = (url.searchParams.get("q") || "").trim();
            if (!query)
                return this.json({ error: "Missing 'q' parameter" }, 400);
            const limit = this.clampInt(url.searchParams.get("limit"), 50, 1, 100);
            const offset = this.clampInt(url.searchParams.get("offset"), 0, 0, Number.MAX_SAFE_INTEGER);
            const results = searchMessages(DEFAULT_CHAT_JID, query, limit, offset);
            return this.json({ query, results, limit, offset });
        }
        if (req.method === "POST" && pathname === "/post") {
            return this.handlePost(req, false);
        }
        if (req.method === "POST" && pathname === "/reply") {
            return this.handlePost(req, true);
        }
        if (req.method === "GET" && pathname.startsWith("/thread/")) {
            const id = this.parseOptionalInt(pathname.replace("/thread/", ""));
            if (!id)
                return this.json({ error: "Thread not found" }, 404);
            const thread = getMessageByRowId(DEFAULT_CHAT_JID, id);
            if (!thread)
                return this.json({ error: "Thread not found" }, 404);
            return this.json({ thread: [thread] });
        }
        if (req.method === "DELETE" && pathname.startsWith("/post/")) {
            const id = this.parseOptionalInt(pathname.replace("/post/", ""));
            if (!id)
                return this.json({ error: "Post not found" }, 404);
            const deleted = deleteMessageByRowId(DEFAULT_CHAT_JID, id);
            if (deleted) {
                this.broadcastEvent("interaction_deleted", { ids: [id] });
            }
            return this.json({ deleted: deleted ? 1 : 0, ids: deleted ? [id] : [] });
        }
        if (req.method === "POST" && pathname.startsWith("/agent/") && pathname.endsWith("/message")) {
            return this.handleAgentMessage(req, pathname);
        }
        if (req.method === "POST" && pathname === "/agent/respond") {
            return this.json({ status: "ok" });
        }
        if (req.method === "POST" && pathname === "/agent/whitelist") {
            return this.json({ status: "ok" });
        }
        if (req.method === "POST" && pathname === "/media/upload") {
            return this.handleMediaUpload(req);
        }
        if (req.method === "GET" && pathname.startsWith("/media/") && pathname.endsWith("/thumbnail")) {
            const id = this.parseOptionalInt(pathname.replace("/media/", "").replace("/thumbnail", ""));
            if (!id)
                return this.json({ error: "Media not found" }, 404);
            return this.handleMedia(id, true);
        }
        if (req.method === "GET" && pathname.startsWith("/media/") && pathname.endsWith("/info")) {
            const id = this.parseOptionalInt(pathname.replace("/media/", "").replace("/info", ""));
            if (!id)
                return this.json({ error: "Media not found" }, 404);
            return this.handleMediaInfo(id);
        }
        if (req.method === "GET" && pathname.startsWith("/media/")) {
            const id = this.parseOptionalInt(pathname.replace("/media/", ""));
            if (!id)
                return this.json({ error: "Media not found" }, 404);
            return this.handleMedia(id, false);
        }
        return this.json({ error: "Not found" }, 404);
    }
    handleSse() {
        let clientRef = null;
        const stream = new ReadableStream({
            start: (controller) => {
                const heartbeat = setInterval(() => {
                    try {
                        controller.enqueue(encoder.encode(": heartbeat\n\n"));
                    }
                    catch {
                        clearInterval(heartbeat);
                        if (clientRef)
                            this.clients.delete(clientRef);
                    }
                }, 30000);
                clientRef = { controller, heartbeat };
                this.clients.add(clientRef);
                controller.enqueue(encoder.encode("event: connected\ndata: {}\n\n"));
            },
            cancel: () => {
                if (clientRef) {
                    clearInterval(clientRef.heartbeat);
                    this.clients.delete(clientRef);
                }
            },
        });
        return new Response(stream, {
            headers: {
                "Content-Type": "text/event-stream",
                "Cache-Control": "no-cache",
                Connection: "keep-alive",
                "X-Accel-Buffering": "no",
            },
        });
    }
    broadcastEvent(eventType, data) {
        const payload = `event: ${eventType}\ndata: ${JSON.stringify(data)}\n\n`;
        const bytes = encoder.encode(payload);
        for (const client of this.clients) {
            try {
                client.controller.enqueue(bytes);
            }
            catch {
                clearInterval(client.heartbeat);
                this.clients.delete(client);
            }
        }
    }
    async handlePost(req, isReply) {
        let data;
        try {
            data = await req.json();
        }
        catch {
            return this.json({ error: "Invalid JSON" }, 400);
        }
        if (!data.content)
            return this.json({ error: "Missing 'content' field" }, 400);
        if (isReply && !data.thread_id)
            return this.json({ error: "Missing 'thread_id' field" }, 400);
        const mediaIds = Array.isArray(data.media_ids)
            ? data.media_ids.map((id) => Number(id)).filter((id) => Number.isFinite(id))
            : [];
        const interaction = this.storeMessage(DEFAULT_CHAT_JID, data.content, false, mediaIds);
        if (!interaction)
            return this.json({ error: "Failed to store message" }, 500);
        if (isReply && data.thread_id)
            interaction.data.thread_id = Number(data.thread_id);
        this.broadcastEvent(isReply ? "new_reply" : "new_post", interaction);
        return this.json(interaction, 201);
    }
    async handleAgentMessage(req, pathname) {
        const agentId = pathname.split("/")[2] || DEFAULT_AGENT_ID;
        let data;
        try {
            data = await req.json();
        }
        catch {
            return this.json({ error: "Invalid JSON" }, 400);
        }
        if (!data.content)
            return this.json({ error: "Missing 'content' field" }, 400);
        const mediaIds = Array.isArray(data.media_ids)
            ? data.media_ids.map((id) => Number(id)).filter((id) => Number.isFinite(id))
            : [];
        const interaction = this.storeMessage(DEFAULT_CHAT_JID, data.content, false, mediaIds);
        if (!interaction)
            return this.json({ error: "Failed to store message" }, 500);
        this.broadcastEvent("new_post", interaction);
        this.queue.enqueue(async () => {
            await this.processChat(DEFAULT_CHAT_JID, agentId);
        }, `chat:${DEFAULT_CHAT_JID}`);
        return this.json({ user_message: interaction, thread_id: data.thread_id ?? interaction.id }, 201);
    }
    async processChat(chatJid, agentId) {
        const since = this.lastAgentTimestamp[chatJid] || "";
        const messages = getMessagesSince(chatJid, since, ASSISTANT_NAME);
        if (messages.length === 0)
            return;
        const prompt = formatMessages(messages);
        const prevCursor = this.lastAgentTimestamp[chatJid] || "";
        this.lastAgentTimestamp[chatJid] = messages[messages.length - 1].timestamp;
        this.saveState();
        this.broadcastEvent("agent_status", {
            thread_id: messages[messages.length - 1].timestamp,
            agent_id: agentId,
            type: "thinking",
            title: "Thinking...",
        });
        const output = await runAgent(prompt, chatJid);
        if (output.status === "error") {
            this.lastAgentTimestamp[chatJid] = prevCursor;
            this.saveState();
            this.broadcastEvent("agent_status", {
                thread_id: messages[messages.length - 1].timestamp,
                agent_id: agentId,
                type: "error",
                title: output.error || "Agent error",
            });
            return;
        }
        if (output.result) {
            const text = formatOutbound(output.result);
            if (text) {
                const interaction = this.storeMessage(chatJid, text, true, []);
                if (interaction) {
                    this.broadcastEvent("agent_response", interaction);
                }
            }
        }
        this.broadcastEvent("agent_status", {
            thread_id: messages[messages.length - 1].timestamp,
            agent_id: agentId,
            type: "done",
        });
    }
    storeMessage(chatJid, content, isBot, mediaIds) {
        const timestamp = new Date().toISOString();
        const msg = {
            id: `web-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            chat_jid: chatJid,
            sender: isBot ? "web-agent" : "web-user",
            sender_name: isBot ? ASSISTANT_NAME : "You",
            content,
            timestamp,
            is_from_me: false,
            is_bot_message: isBot,
        };
        const rowId = storeMessage(msg);
        if (rowId <= 0)
            return null;
        if (mediaIds.length > 0) {
            attachMediaToMessage(rowId, mediaIds);
        }
        storeChatMetadata(chatJid, timestamp, "Web");
        const interaction = getMessageByRowId(chatJid, rowId);
        if (interaction) {
            interaction.data.agent_id = DEFAULT_AGENT_ID;
            return interaction;
        }
        return {
            id: rowId,
            timestamp,
            data: {
                type: isBot ? "agent_response" : "user_message",
                content,
                agent_id: DEFAULT_AGENT_ID,
                media_ids: mediaIds,
            },
        };
    }
    async handleMediaUpload(req) {
        let form;
        try {
            form = await req.formData();
        }
        catch {
            return this.json({ error: "Invalid form data" }, 400);
        }
        const file = form.get("file");
        if (!(file instanceof File))
            return this.json({ error: "Missing file" }, 400);
        const arrayBuffer = await file.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);
        const mediaId = createMedia(file.name || "upload", file.type || "application/octet-stream", data, null, { size: file.size });
        return this.json({ id: mediaId, filename: file.name, size: file.size });
    }
    handleMedia(id, thumbnail) {
        const media = getMediaById(id);
        if (!media)
            return this.json({ error: "Media not found" }, 404);
        const blob = thumbnail && media.thumbnail ? media.thumbnail : media.data;
        const buffer = blob.buffer.slice(blob.byteOffset, blob.byteOffset + blob.byteLength);
        const body = new Blob([buffer], { type: media.content_type });
        return new Response(body, {
            headers: {
                "Content-Type": media.content_type,
            },
        });
    }
    handleMediaInfo(id) {
        const info = getMediaInfoById(id);
        if (!info)
            return this.json({ error: "Media not found" }, 404);
        return this.json(info);
    }
    async serveStatic(relPath) {
        const filePath = resolve(STATIC_DIR, relPath);
        if (!filePath.startsWith(STATIC_DIR))
            return this.json({ error: "Not found" }, 404);
        const file = Bun.file(filePath);
        if (!(await file.exists()))
            return this.json({ error: "Not found" }, 404);
        const contentType = MIME_TYPES[extname(filePath)] || "application/octet-stream";
        return new Response(file, {
            headers: {
                "Content-Type": contentType,
            },
        });
    }
    json(data, status = 200) {
        return new Response(JSON.stringify(data), {
            status,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
    clampInt(value, fallback, min, max) {
        const parsed = value ? parseInt(value, 10) : fallback;
        if (Number.isNaN(parsed))
            return fallback;
        return Math.min(Math.max(parsed, min), max);
    }
    parseOptionalInt(value) {
        if (!value)
            return null;
        const parsed = parseInt(value, 10);
        return Number.isNaN(parsed) ? null : parsed;
    }
}
