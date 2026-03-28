/**
 * channels/web/followup-placeholders.ts – queued follow-up placeholder row ids.
 */
/** FIFO in-memory row-id queue for deferred follow-up placeholder replacement. */
export class FollowupPlaceholderStore {
    queuedFollowupPlaceholders = new Map();
    enqueue(chatJid, rowId, queuedContent, threadId, queuedAt, extras) {
        const existing = this.queuedFollowupPlaceholders.get(chatJid) ?? [];
        existing.push({
            rowId,
            queuedContent,
            threadId: threadId ?? null,
            queuedAt: queuedAt ?? new Date().toISOString(),
            mediaIds: extras?.mediaIds ? [...extras.mediaIds] : undefined,
            contentBlocks: Array.isArray(extras?.contentBlocks) ? [...extras.contentBlocks] : undefined,
            linkPreviews: Array.isArray(extras?.linkPreviews) ? [...extras.linkPreviews] : undefined,
        });
        this.queuedFollowupPlaceholders.set(chatJid, existing);
    }
    prepend(chatJid, item) {
        const existing = this.queuedFollowupPlaceholders.get(chatJid) ?? [];
        existing.unshift({
            rowId: item.rowId,
            queuedContent: item.queuedContent,
            threadId: item.threadId ?? null,
            queuedAt: item.queuedAt,
            mediaIds: item.mediaIds ? [...item.mediaIds] : undefined,
            contentBlocks: Array.isArray(item.contentBlocks) ? [...item.contentBlocks] : undefined,
            linkPreviews: Array.isArray(item.linkPreviews) ? [...item.linkPreviews] : undefined,
        });
        this.queuedFollowupPlaceholders.set(chatJid, existing);
    }
    count(chatJid) {
        return this.queuedFollowupPlaceholders.get(chatJid)?.length ?? 0;
    }
    consume(chatJid) {
        return this.consumeItem(chatJid)?.rowId ?? null;
    }
    consumeItem(chatJid) {
        const queue = this.queuedFollowupPlaceholders.get(chatJid);
        if (!queue || queue.length === 0)
            return null;
        const next = queue.shift() ?? null;
        if (!queue.length)
            this.queuedFollowupPlaceholders.delete(chatJid);
        return next ?? null;
    }
    peek(chatJid) {
        return [...(this.queuedFollowupPlaceholders.get(chatJid) ?? [])];
    }
    /** Remove a specific queued item by placeholder row id. */
    remove(chatJid, rowId) {
        const queue = this.queuedFollowupPlaceholders.get(chatJid);
        if (!queue || queue.length === 0)
            return null;
        const index = queue.findIndex((item) => item.rowId === rowId);
        if (index < 0)
            return null;
        const [removed] = queue.splice(index, 1);
        if (!queue.length)
            this.queuedFollowupPlaceholders.delete(chatJid);
        else
            this.queuedFollowupPlaceholders.set(chatJid, queue);
        return removed ?? null;
    }
    /** Remove all queued items for a chat. */
    drain(chatJid) {
        const items = this.queuedFollowupPlaceholders.get(chatJid) ?? [];
        this.queuedFollowupPlaceholders.delete(chatJid);
        return items;
    }
}
