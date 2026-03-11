/**
 * channels/web/message-write-flows.ts – Message write orchestration for web interactions.
 */
function normalizeSendMessageOptions(options) {
    const normalized = typeof options === "number" || options === null
        ? { threadId: options ?? null }
        : (options ?? {});
    const mediaIds = Array.isArray(normalized.mediaIds)
        ? normalized.mediaIds.filter((id) => Number.isFinite(id) && id > 0)
        : [];
    const contentBlocks = Array.isArray(normalized.contentBlocks)
        ? normalized.contentBlocks.filter((block) => block && typeof block === "object")
        : undefined;
    return {
        threadId: normalized.threadId ?? null,
        forceRoot: Boolean(normalized.forceRoot),
        mediaIds: mediaIds,
        contentBlocks,
    };
}
/** Store and broadcast an agent message response to web clients. */
export function sendWebMessage(chatJid, text, options, ctx) {
    const { threadId, forceRoot, mediaIds, contentBlocks } = normalizeSendMessageOptions(options);
    const interaction = ctx.store.storeMessage(chatJid, text, true, mediaIds, {
        ...(threadId !== null ? { threadId } : {}),
        ...(contentBlocks && contentBlocks.length ? { contentBlocks } : {}),
    });
    if (!interaction)
        return;
    if (forceRoot && !threadId) {
        // Ensure scheduled messages start new threads (not replies to inflight turns).
        ctx.store.setMessageThreadToSelf(interaction.id);
        interaction.data.thread_id = interaction.id;
    }
    ctx.broadcaster.broadcastAgentResponse(interaction);
}
/** Store, queue, and broadcast a follow-up placeholder interaction. */
export function queueFollowupPlaceholderMessage(chatJid, text, threadId, ctx) {
    const interaction = ctx.store.storeMessage(chatJid, text, true, [], { threadId });
    if (!interaction)
        return null;
    ctx.followups.enqueue(chatJid, interaction.id);
    ctx.broadcaster.broadcastAgentResponse(interaction);
    return interaction;
}
/** Replace a queued follow-up placeholder and broadcast the update. */
export function replaceQueuedFollowupPlaceholderMessage(chatJid, rowId, text, mediaIds, contentBlocks, threadId, ctx) {
    const updated = ctx.store.replaceMessageContent(chatJid, rowId, text, mediaIds, contentBlocks);
    if (!updated)
        return null;
    updated.data.agent_id = ctx.defaultAgentId;
    if (threadId)
        updated.data.thread_id = threadId;
    ctx.broadcaster.broadcastInteractionUpdated(updated);
    return updated;
}
