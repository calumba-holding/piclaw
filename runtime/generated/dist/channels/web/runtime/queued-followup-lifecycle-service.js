/**
 * web/queued-followup-lifecycle-service.ts – queued follow-up lifecycle state.
 *
 * Owns the web channel's deferred queued follow-up persistence, placeholder
 * queue bookkeeping, queue-state payload shaping, and queue action removal
 * behavior. Extracted from `channels/web.ts` to keep WebChannel focused on
 * transport/orchestration while preserving the existing public API.
 */
import { deleteMessageByRowId, getDeferredQueuedFollowups, getMessageByRowId, setDeferredQueuedFollowups, } from "../../../db.js";
import { FollowupPlaceholderStore } from "./followup-placeholders.js";
function cloneQueuedFollowupItem(item) {
    return {
        rowId: item.rowId,
        queuedContent: item.queuedContent,
        threadId: item.threadId ?? null,
        queuedAt: item.queuedAt,
        mediaIds: item.mediaIds ? [...item.mediaIds] : undefined,
        contentBlocks: Array.isArray(item.contentBlocks) ? [...item.contentBlocks] : undefined,
        linkPreviews: Array.isArray(item.linkPreviews) ? [...item.linkPreviews] : undefined,
        materializeRetries: item.materializeRetries,
    };
}
function toDeferredQueuedFollowupRecord(item) {
    return {
        rowId: item.rowId,
        queuedContent: item.queuedContent,
        threadId: item.threadId ?? null,
        queuedAt: item.queuedAt,
        mediaIds: item.mediaIds ? [...item.mediaIds] : undefined,
        contentBlocks: Array.isArray(item.contentBlocks) ? [...item.contentBlocks] : undefined,
        linkPreviews: Array.isArray(item.linkPreviews) ? [...item.linkPreviews] : undefined,
        materializeRetries: item.materializeRetries ?? 0,
    };
}
export class QueuedFollowupLifecycleService {
    placeholderStore;
    constructor(placeholderStore = new FollowupPlaceholderStore()) {
        this.placeholderStore = placeholderStore;
    }
    enqueuePlaceholder(chatJid, rowId, queuedContent, threadId, queuedAt, extras) {
        this.placeholderStore.enqueue(chatJid, rowId, queuedContent, threadId, queuedAt, extras);
    }
    consumeQueuedFollowupPlaceholder(chatJid) {
        return this.placeholderStore.consume(chatJid);
    }
    enqueueQueuedFollowupItem(chatJid, rowId, queuedContent, threadId, queuedAt, extras) {
        const resolvedRowId = Number.isFinite(rowId) && rowId !== 0 ? rowId : this.allocateDeferredQueuedRowId(chatJid);
        const queued = this.getDeferredQueuedFollowupItems(chatJid);
        queued.push({
            rowId: resolvedRowId,
            queuedContent,
            threadId: threadId ?? null,
            queuedAt: queuedAt ?? new Date().toISOString(),
            mediaIds: extras?.mediaIds ? [...extras.mediaIds] : undefined,
            contentBlocks: Array.isArray(extras?.contentBlocks) ? [...extras.contentBlocks] : undefined,
            linkPreviews: Array.isArray(extras?.linkPreviews) ? [...extras.linkPreviews] : undefined,
        });
        this.setDeferredQueuedFollowupItems(chatJid, queued);
        return resolvedRowId;
    }
    consumeQueuedFollowupItem(chatJid) {
        const queued = this.getDeferredQueuedFollowupItems(chatJid);
        const next = queued.shift() ?? null;
        this.setDeferredQueuedFollowupItems(chatJid, queued);
        return next ? cloneQueuedFollowupItem(next) : null;
    }
    prependQueuedFollowupItem(chatJid, item) {
        const queued = this.getDeferredQueuedFollowupItems(chatJid);
        queued.unshift(cloneQueuedFollowupItem(item));
        this.setDeferredQueuedFollowupItems(chatJid, queued);
    }
    getQueuedFollowupCount(chatJid) {
        return this.getDeferredQueuedFollowupItems(chatJid).length + this.placeholderStore.count(chatJid);
    }
    getQueuedFollowupItems(chatJid) {
        const rows = [
            ...this.getDeferredQueuedFollowupItems(chatJid),
            ...this.placeholderStore.peek(chatJid).map((item) => cloneQueuedFollowupItem(item)),
        ];
        const seen = new Set();
        return rows
            .filter((row) => {
            if (seen.has(row.rowId))
                return false;
            seen.add(row.rowId);
            return true;
        })
            .sort((a, b) => String(a.queuedAt).localeCompare(String(b.queuedAt)));
    }
    removeQueuedFollowupItem(chatJid, rowId) {
        const queued = this.getDeferredQueuedFollowupItems(chatJid);
        const queuedIndex = queued.findIndex((item) => item.rowId === rowId);
        if (queuedIndex >= 0) {
            const [removed] = queued.splice(queuedIndex, 1);
            this.setDeferredQueuedFollowupItems(chatJid, queued);
            return removed ? cloneQueuedFollowupItem(removed) : null;
        }
        const removed = this.placeholderStore.remove(chatJid, rowId);
        return removed ? cloneQueuedFollowupItem(removed) : null;
    }
    listQueuedStateItems(chatJid) {
        return this.getQueuedFollowupItems(chatJid)
            .map((queued) => {
            const interaction = getMessageByRowId(chatJid, queued.rowId);
            return {
                row_id: queued.rowId,
                content: queued.queuedContent,
                timestamp: interaction?.timestamp ?? queued.queuedAt,
                thread_id: interaction?.data?.thread_id ?? queued.threadId ?? null,
            };
        })
            .filter((item) => typeof item.content === "string" && item.content.trim().length > 0);
    }
    async removeQueuedFollowupForAction(chatJid, rowId, options = {}) {
        const queued = this.getDeferredQueuedFollowupItems(chatJid);
        const queuedIndex = queued.findIndex((item) => item.rowId === rowId);
        const removedQueued = queuedIndex >= 0 ? (queued.splice(queuedIndex, 1)[0] ?? null) : null;
        if (queuedIndex >= 0) {
            this.setDeferredQueuedFollowupItems(chatJid, queued);
        }
        const removedPlaceholder = removedQueued ? null : this.placeholderStore.remove(chatJid, rowId);
        const removed = removedQueued ?? removedPlaceholder;
        const source = removedQueued ? "deferred" : removedPlaceholder ? "placeholder" : null;
        if (!removed || !source)
            return { removed: null, source: null };
        if (removed.rowId > 0) {
            deleteMessageByRowId(chatJid, removed.rowId);
        }
        if (source === "placeholder" && typeof options.removeQueuedFollowupMessage === "function") {
            await options.removeQueuedFollowupMessage(chatJid, removed.queuedContent);
        }
        return { removed: cloneQueuedFollowupItem(removed), source };
    }
    getDeferredQueuedFollowupItems(chatJid) {
        return getDeferredQueuedFollowups(chatJid).map((item) => ({
            rowId: item.rowId,
            queuedContent: item.queuedContent,
            threadId: item.threadId ?? null,
            queuedAt: item.queuedAt,
            mediaIds: item.mediaIds ? [...item.mediaIds] : undefined,
            contentBlocks: Array.isArray(item.contentBlocks) ? [...item.contentBlocks] : undefined,
            linkPreviews: Array.isArray(item.linkPreviews) ? [...item.linkPreviews] : undefined,
            materializeRetries: item.materializeRetries ?? 0,
        }));
    }
    setDeferredQueuedFollowupItems(chatJid, items) {
        setDeferredQueuedFollowups(chatJid, items.map((item) => toDeferredQueuedFollowupRecord(item)));
    }
    allocateDeferredQueuedRowId(chatJid) {
        const queued = this.getDeferredQueuedFollowupItems(chatJid);
        const minRowId = queued.reduce((min, item) => (item.rowId < min ? item.rowId : min), 0);
        return minRowId <= -1 ? minRowId - 1 : -1;
    }
}
