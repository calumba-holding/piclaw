/**
 * channels/web/followup-placeholders.ts – queued follow-up placeholder row ids.
 */
/** FIFO in-memory row-id queue for deferred follow-up placeholder replacement. */
export class FollowupPlaceholderStore {
    queuedFollowupPlaceholders = new Map();
    enqueue(chatJid, rowId, queuedContent, threadId, queuedAt) {
        const existing = this.queuedFollowupPlaceholders.get(chatJid) ?? [];
        existing.push({
            rowId,
            queuedContent,
            threadId: threadId ?? null,
            queuedAt: queuedAt ?? new Date().toISOString(),
        });
        this.queuedFollowupPlaceholders.set(chatJid, existing);
    }
    count(chatJid) {
        return this.queuedFollowupPlaceholders.get(chatJid)?.length ?? 0;
    }
    consume(chatJid) {
        const queue = this.queuedFollowupPlaceholders.get(chatJid);
        if (!queue || queue.length === 0)
            return null;
        const next = queue.shift() ?? null;
        if (!queue.length)
            this.queuedFollowupPlaceholders.delete(chatJid);
        return next?.rowId ?? null;
    }
    peek(chatJid) {
        return [...(this.queuedFollowupPlaceholders.get(chatJid) ?? [])];
    }
    /** Remove all queued items for a chat. */
    drain(chatJid) {
        const items = this.queuedFollowupPlaceholders.get(chatJid) ?? [];
        this.queuedFollowupPlaceholders.delete(chatJid);
        return items;
    }
}
