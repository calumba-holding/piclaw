/**
 * web/threading.ts – Thread ID resolution for the web channel.
 *
 * Determines the correct thread_id for a new message based on whether
 * it's a reply to an existing thread or a new top-level message.
 *
 * Consumers: web/posts-service.ts calls resolveThreadId() when storing
 *            new user posts.
 */
/** Determine the thread_id for a new message (existing thread or new). */
export function resolveThreadId(explicit, fallback) {
    if (explicit !== null && explicit !== undefined)
        return explicit;
    return fallback ?? null;
}
/** Find the root message rowid for a thread chain. */
export function resolveThreadRootId(channel, chatJid, messageId, explicitThreadId) {
    const fallback = channel.getThreadRootId(chatJid, messageId);
    return resolveThreadId(explicitThreadId, fallback);
}
