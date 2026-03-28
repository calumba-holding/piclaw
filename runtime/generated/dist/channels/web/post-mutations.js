/**
 * channels/web/post-mutations.ts – Post update/internal-post endpoint orchestration.
 */
function resolveChatJid(req, defaultChatJid, bodyChatJid) {
    const urlChatJid = new URL(req.url).searchParams.get("chat_jid");
    const candidate = typeof bodyChatJid === "string" && bodyChatJid.trim()
        ? bodyChatJid
        : typeof urlChatJid === "string" && urlChatJid.trim()
            ? urlChatJid
            : defaultChatJid;
    return candidate.trim() || defaultChatJid;
}
/** PATCH /post/:id orchestration. */
export async function handleUpdatePostRequest(req, id, ctx) {
    if (!id || id < 1)
        return ctx.json({ error: "Missing or invalid post id" }, 400);
    let body;
    try {
        body = await req.json();
    }
    catch {
        return ctx.json({ error: "Invalid JSON" }, 400);
    }
    if (!body.content && body.content !== "") {
        return ctx.json({ error: "Missing content" }, 400);
    }
    if (typeof body.content === "string" && body.content.length > 100 * 1024) {
        return ctx.json({ error: "Content too large (max 100 KB)" }, 400);
    }
    const chatJid = resolveChatJid(req, ctx.defaultChatJid, body.chat_jid);
    const updated = ctx.replaceMessageContent(chatJid, id, body.content);
    if (!updated)
        return ctx.json({ error: "Post not found" }, 404);
    if (body.thread_id) {
        if (typeof body.thread_id !== "number" || !Number.isInteger(body.thread_id) || body.thread_id < 1) {
            return ctx.json({ error: "Invalid thread_id" }, 400);
        }
        ctx.setThreadId(id, body.thread_id);
        updated.data.thread_id = body.thread_id;
    }
    ctx.broadcastInteractionUpdated(updated);
    return ctx.json({ status: "ok", ok: true, id: updated.id });
}
/** POST /internal/post orchestration. */
export async function handleInternalPostRequest(req, ctx) {
    let body;
    try {
        body = await req.json();
    }
    catch {
        return ctx.json({ error: "Invalid JSON" }, 400);
    }
    if (!body.content)
        return ctx.json({ error: "Missing content" }, 400);
    if (body.content.length > 100 * 1024) {
        return ctx.json({ error: "Content too large (max 100 KB)" }, 400);
    }
    const chatJid = resolveChatJid(req, ctx.defaultChatJid, body.chat_jid);
    const threadId = body.thread_id || ctx.lastCommandInteractionId || undefined;
    const interaction = ctx.storeMessage(chatJid, body.content, true, [], threadId ? { threadId } : undefined);
    if (!interaction)
        return ctx.json({ error: "Failed to store" }, 500);
    ctx.broadcastAgentResponse(interaction);
    return ctx.json({ status: "ok", ok: true, id: interaction.id }, 201);
}
