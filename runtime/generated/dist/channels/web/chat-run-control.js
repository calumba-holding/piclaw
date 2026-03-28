/**
 * channels/web/chat-run-control.ts – chat run control helpers (resume/cursor/failure handling).
 */
import { clearFailedRun, getChatCursor, getFailedRun, getMessageThreadRootIdById, setChatCursor, } from "../../db.js";
const defaultStore = {
    getThreadRootId: getMessageThreadRootIdById,
    getFailedRun,
    getChatCursor,
    setChatCursor,
    clearFailedRun,
};
/** Resolve a persisted thread root id for a chat/message pair. */
export function getThreadRootId(chatJid, messageId, store = defaultStore) {
    return store.getThreadRootId(chatJid, messageId);
}
/** Enqueue chat reprocessing for interrupted/pending web chats. */
export function resumeChat(chatJid, threadRootId, ctx) {
    // The resume key must advance with the work being resumed. If a running task
    // already owns `resume:${chatJid}` and it tries to hand off the next queued
    // turn using the same id, the serial queue will deduplicate it as a no-op.
    // Use the explicit thread root when known, otherwise use the current cursor
    // snapshot so repeated resume triggers for the same frontier still collapse,
    // while genuine next-turn hand-offs get a distinct key.
    const frontier = threadRootId ?? ctx.getChatCursor(chatJid) ?? "next";
    ctx.enqueue(async () => {
        await ctx.processChat(chatJid, ctx.defaultAgentId, threadRootId ?? undefined);
    }, `resume:${chatJid}:${String(frontier)}`, `chat:${chatJid}`);
}
/** Skip the failed cursor marker after a model switch to avoid replay loops. */
export function skipFailedOnModelSwitch(chatJid, store = defaultStore) {
    const failed = store.getFailedRun(chatJid);
    if (!failed)
        return;
    const current = store.getChatCursor(chatJid);
    if (!current || current < failed.failedTs) {
        store.setChatCursor(chatJid, failed.failedTs);
    }
    store.clearFailedRun(chatJid);
}
