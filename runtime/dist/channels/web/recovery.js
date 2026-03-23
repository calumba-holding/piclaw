/**
 * channels/web/recovery.ts – crash recovery and pending-resume orchestration.
 */
import { clearInflightMarker, getAgentReplyStateAfter, getAllChatCursors, getDb, getDeferredQueuedFollowups, getInflightRuns, getMessagesSince, rollbackInflightRun, } from "../../db.js";
function getKnownChatJids() {
    const rows = getDb().prepare(`
    SELECT chat_jid FROM chat_cursors
    UNION
    SELECT jid as chat_jid FROM chats
    UNION
    SELECT chat_jid FROM messages
  `).all();
    return rows
        .map((row) => (typeof row.chat_jid === "string" ? row.chat_jid.trim() : ""))
        .filter((jid) => jid.length > 0);
}
const defaultStore = {
    getInflightRuns,
    transaction: (run) => {
        getDb().transaction(run)();
    },
    getAgentReplyStateAfter,
    clearInflightMarker,
    rollbackInflightRun,
    getAllChatCursors,
    getKnownChatJids,
    getDeferredQueuedFollowups,
    getMessagesSince,
};
/**
 * Maximum age (ms) at which we log inflight markers as stale.
 *
 * We still replay stale markers (rollback + resume) to preserve user turns,
 * but emit a warning so operators can spot pathological restart loops.
 */
const MAX_INFLIGHT_AGE_MS = 30 * 60 * 1000;
/** Recover interrupted runs left inflight after a restart. */
export function recoverInflightRuns(ctx, store = defaultStore) {
    const inflights = store.getInflightRuns();
    if (inflights.length === 0)
        return;
    const now = typeof ctx.now === "function" ? ctx.now() : Date.now();
    const decisions = inflights.map((inflight) => ({
        inflight,
        replyState: store.getAgentReplyStateAfter(inflight.chatJid, inflight.startedAt),
    }));
    try {
        store.transaction(() => {
            for (const { inflight, replyState } of decisions) {
                // If assistant output was already persisted after this inflight start,
                // preserve it as committed history. Terminal output means the run fully
                // completed; partial output means the run was interrupted after already
                // publishing visible timeline content. In both cases, clearing the
                // inflight marker without rollback avoids replaying the same user turn.
                if (replyState === "terminal") {
                    console.log(`[web] Inflight run for ${inflight.chatJid} (started ${inflight.startedAt}) ` +
                        "already has a terminal agent reply — clearing marker without rollback");
                    store.clearInflightMarker(inflight.chatJid);
                    continue;
                }
                if (replyState === "partial") {
                    console.log(`[web] Inflight run for ${inflight.chatJid} (started ${inflight.startedAt}) ` +
                        "already has persisted partial agent output — clearing marker without rollback");
                    store.clearInflightMarker(inflight.chatJid);
                    continue;
                }
                const inflightAge = now - new Date(inflight.startedAt).getTime();
                if (inflightAge > MAX_INFLIGHT_AGE_MS) {
                    console.warn(`[web] Inflight run for ${inflight.chatJid} is stale ` +
                        `(${Math.round(inflightAge / 1000)}s old, started ${inflight.startedAt}) — ` +
                        "rolling back and replaying to preserve the pending user turn");
                    store.rollbackInflightRun(inflight.chatJid, inflight.prevTs);
                    continue;
                }
                // Very recent inflight with no output: almost certainly a deliberate
                // restart (e.g. reload command) rather than a crash. The cursor was
                // already advanced by beginChatRun; rolling it back would cause the
                // same message to be re-fed to the agent, creating a duplicate
                // response and potentially a restart loop if the agent's response
                // triggers another reload.
                //
                // Clear the inflight marker and leave the cursor advanced. The user's
                // message was "consumed" — the agent just didn't get to respond.
                console.log(`[web] Inflight run for ${inflight.chatJid} (started ${inflight.startedAt}) ` +
                    `has no agent output yet (${Math.round(inflightAge / 1000)}s old) — ` +
                    "clearing marker without rollback to avoid duplicate processing");
                store.clearInflightMarker(inflight.chatJid);
            }
        });
    }
    catch (err) {
        console.error("[web] Failed to roll back inflight runs; will retry on next startup:", err);
        return;
    }
    // Collect the set of chats that were actually rolled back (stale inflight
    // with no output). Only these need a recovery processChat enqueue.
    const rolledBack = new Set();
    for (const { inflight, replyState } of decisions) {
        if (replyState === "none") {
            const inflightAge = (typeof ctx.now === "function" ? ctx.now() : now) - new Date(inflight.startedAt).getTime();
            if (inflightAge > MAX_INFLIGHT_AGE_MS) {
                rolledBack.add(inflight.chatJid);
            }
        }
    }
    for (const { inflight, replyState } of decisions) {
        // Re-enqueue a processChat task only for runs that were rolled back
        // (stale inflight with no output). Fresh inflights were cleared without
        // rollback to avoid duplicate processing / restart loops.
        if (replyState === "none" && rolledBack.has(inflight.chatJid)) {
            console.log(`[web] Recovering interrupted run for ${inflight.chatJid} (started ${inflight.startedAt})`);
            // Reuse the same stable resume key used by resume_pending IPC so
            // immediate startup recovery and later IPC-driven recovery collapse to a
            // single queued task for the chat instead of racing duplicate replays.
            ctx.enqueue(async () => {
                await ctx.processChat(inflight.chatJid, ctx.defaultAgentId);
            }, `resume:${inflight.chatJid}`, `chat:${inflight.chatJid}`);
        }
    }
}
/** Resume chats with pending messages after a restart. */
export function resumePendingChats(ctx, chatJid, store = defaultStore) {
    const cursors = store.getAllChatCursors();
    const resolvedJids = chatJid && chatJid !== "all"
        ? [chatJid]
        : Array.from(new Set([...Object.keys(cursors), ...store.getKnownChatJids()]));
    for (const jid of resolvedJids) {
        const since = Object.prototype.hasOwnProperty.call(cursors, jid) ? cursors[jid] : "";
        const messages = store.getMessagesSince(jid, since, ctx.assistantName);
        const deferred = store.getDeferredQueuedFollowups(jid);
        const hasDeferredQueued = deferred.some((item) => typeof item.queuedContent === "string" && item.queuedContent.trim().length > 0);
        if (messages.length === 0 && !hasDeferredQueued)
            continue;
        // Use a stable per-chat key so repeated resume_pending triggers (for
        // example, reload IPC plus startup self-queued IPC) collapse to one queued
        // recovery task instead of duplicating the same chat turn.
        console.log(`[web] Queuing resume for ${jid}`);
        ctx.enqueue(async () => {
            await ctx.processChat(jid, ctx.defaultAgentId);
        }, `resume:${jid}`, `chat:${jid}`);
    }
}
