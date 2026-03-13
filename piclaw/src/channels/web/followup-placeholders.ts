/**
 * channels/web/followup-placeholders.ts – queued follow-up placeholder row ids.
 */

export interface QueuedFollowupItem {
  rowId: number;
  queuedContent: string;
  threadId?: number | null;
  queuedAt: string;
  mediaIds?: number[];
  contentBlocks?: unknown[];
  linkPreviews?: unknown[];
}

/** FIFO in-memory row-id queue for deferred follow-up placeholder replacement. */
export class FollowupPlaceholderStore {
  private queuedFollowupPlaceholders = new Map<string, QueuedFollowupItem[]>();

  enqueue(
    chatJid: string,
    rowId: number,
    queuedContent: string,
    threadId?: number | null,
    queuedAt?: string,
    extras?: Pick<QueuedFollowupItem, "mediaIds" | "contentBlocks" | "linkPreviews">
  ): void {
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

  prepend(chatJid: string, item: QueuedFollowupItem): void {
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

  count(chatJid: string): number {
    return this.queuedFollowupPlaceholders.get(chatJid)?.length ?? 0;
  }

  consume(chatJid: string): number | null {
    return this.consumeItem(chatJid)?.rowId ?? null;
  }

  consumeItem(chatJid: string): QueuedFollowupItem | null {
    const queue = this.queuedFollowupPlaceholders.get(chatJid);
    if (!queue || queue.length === 0) return null;
    const next = queue.shift() ?? null;
    if (!queue.length) this.queuedFollowupPlaceholders.delete(chatJid);
    return next ?? null;
  }

  peek(chatJid: string): QueuedFollowupItem[] {
    return [...(this.queuedFollowupPlaceholders.get(chatJid) ?? [])];
  }

  /** Remove a specific queued item by placeholder row id. */
  remove(chatJid: string, rowId: number): QueuedFollowupItem | null {
    const queue = this.queuedFollowupPlaceholders.get(chatJid);
    if (!queue || queue.length === 0) return null;

    const index = queue.findIndex((item) => item.rowId === rowId);
    if (index < 0) return null;

    const [removed] = queue.splice(index, 1);
    if (!queue.length) this.queuedFollowupPlaceholders.delete(chatJid);
    else this.queuedFollowupPlaceholders.set(chatJid, queue);
    return removed ?? null;
  }

  /** Remove all queued items for a chat. */
  drain(chatJid: string): QueuedFollowupItem[] {
    const items = this.queuedFollowupPlaceholders.get(chatJid) ?? [];
    this.queuedFollowupPlaceholders.delete(chatJid);
    return items;
  }
}
