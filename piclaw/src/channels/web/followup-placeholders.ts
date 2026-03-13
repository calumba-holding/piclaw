/**
 * channels/web/followup-placeholders.ts – queued follow-up placeholder row ids.
 */

export interface QueuedFollowupItem {
  rowId: number;
  queuedContent: string;
  threadId?: number | null;
  queuedAt: string;
}

/** FIFO in-memory row-id queue for deferred follow-up placeholder replacement. */
export class FollowupPlaceholderStore {
  private queuedFollowupPlaceholders = new Map<string, QueuedFollowupItem[]>();

  enqueue(
    chatJid: string,
    rowId: number,
    queuedContent: string,
    threadId?: number | null,
    queuedAt?: string
  ): void {
    const existing = this.queuedFollowupPlaceholders.get(chatJid) ?? [];
    existing.push({
      rowId,
      queuedContent,
      threadId: threadId ?? null,
      queuedAt: queuedAt ?? new Date().toISOString(),
    });
    this.queuedFollowupPlaceholders.set(chatJid, existing);
  }

  count(chatJid: string): number {
    return this.queuedFollowupPlaceholders.get(chatJid)?.length ?? 0;
  }

  consume(chatJid: string): number | null {
    const queue = this.queuedFollowupPlaceholders.get(chatJid);
    if (!queue || queue.length === 0) return null;
    const next = queue.shift() ?? null;
    if (!queue.length) this.queuedFollowupPlaceholders.delete(chatJid);
    return next?.rowId ?? null;
  }

  peek(chatJid: string): QueuedFollowupItem[] {
    return [...(this.queuedFollowupPlaceholders.get(chatJid) ?? [])];
  }

  /** Remove all queued items for a chat. */
  drain(chatJid: string): QueuedFollowupItem[] {
    const items = this.queuedFollowupPlaceholders.get(chatJid) ?? [];
    this.queuedFollowupPlaceholders.delete(chatJid);
    return items;
  }
}
