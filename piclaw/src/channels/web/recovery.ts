/**
 * channels/web/recovery.ts – crash recovery and pending-resume orchestration.
 */

import {
  clearInflightMarker,
  getAllChatCursors,
  getDb,
  getDeferredQueuedFollowups,
  getInflightRuns,
  getMessagesSince,
  hasAgentRepliesAfter,
  rollbackInflightRun,
  type DeferredQueuedFollowupRecord,
  type InflightRun,
} from "../../db.js";

/** Runtime callbacks required for inflight recovery/pending resume orchestration. */
export interface WebRecoveryContext {
  assistantName: string;
  defaultAgentId: string;
  enqueue(task: () => Promise<void>, key: string, laneKey?: string): void;
  processChat(chatJid: string, agentId: string, threadRootId?: number): Promise<void>;
  now?: () => number;
}

/** Persistence contract used by web recovery helpers. */
export interface WebRecoveryStore {
  getInflightRuns(): InflightRun[];
  transaction(run: () => void): void;
  hasAgentRepliesAfter(chatJid: string, prevTs: string): boolean;
  clearInflightMarker(chatJid: string): void;
  rollbackInflightRun(chatJid: string, prevTs: string): void;
  getAllChatCursors(): Record<string, string>;
  getKnownChatJids(): string[];
  getDeferredQueuedFollowups(chatJid: string): DeferredQueuedFollowupRecord[];
  getMessagesSince(chatJid: string, since: string, assistantName: string): unknown[];
}

function getKnownChatJids(): string[] {
  const rows = getDb().prepare(`
    SELECT chat_jid FROM chat_cursors
    UNION
    SELECT jid as chat_jid FROM chats
    UNION
    SELECT chat_jid FROM messages
  `).all() as Array<{ chat_jid: string | null | undefined }>;

  return rows
    .map((row) => (typeof row.chat_jid === "string" ? row.chat_jid.trim() : ""))
    .filter((jid) => jid.length > 0);
}

const defaultStore: WebRecoveryStore = {
  getInflightRuns,
  transaction: (run) => {
    getDb().transaction(run)();
  },
  hasAgentRepliesAfter,
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
export function recoverInflightRuns(
  ctx: WebRecoveryContext,
  store: WebRecoveryStore = defaultStore
): void {
  const inflights = store.getInflightRuns();
  if (inflights.length === 0) return;

  const now = typeof ctx.now === "function" ? ctx.now() : Date.now();

  try {
    store.transaction(() => {
      for (const inflight of inflights) {
        // Check if a terminal assistant reply already landed after this
        // inflight run started. Partial/intermediate assistant output is not
        // enough — those runs must be rolled back and replayed so restart
        // recovery does not strand the final response.
        //
        // If a terminal reply exists, the run completed successfully but
        // endChatRun() wasn't reached before the process was killed. In that
        // case, just clear the inflight marker — do NOT roll back the cursor,
        // as that would cause the same user message to be re-processed.
        if (store.hasAgentRepliesAfter(inflight.chatJid, inflight.startedAt)) {
          console.log(
            `[web] Inflight run for ${inflight.chatJid} (started ${inflight.startedAt}) ` +
              "already has agent replies — clearing marker without rollback"
          );
          store.clearInflightMarker(inflight.chatJid);
          continue;
        }

        const inflightAge = now - new Date(inflight.startedAt).getTime();
        if (inflightAge > MAX_INFLIGHT_AGE_MS) {
          console.warn(
            `[web] Inflight run for ${inflight.chatJid} is stale ` +
              `(${Math.round(inflightAge / 1000)}s old, started ${inflight.startedAt}) — ` +
              "rolling back and replaying to preserve the pending user turn"
          );
        }

        store.rollbackInflightRun(inflight.chatJid, inflight.prevTs);
      }
    });
  } catch (err) {
    console.error("[web] Failed to roll back inflight runs; will retry on next startup:", err);
    return;
  }

  for (const inflight of inflights) {
    // Re-enqueue a processChat task unless the run already completed
    // (terminal agent reply exists). For rolled-back inflights, this retries
    // the same pending message from the restored cursor frontier.
    if (!store.hasAgentRepliesAfter(inflight.chatJid, inflight.startedAt)) {
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
export function resumePendingChats(
  ctx: WebRecoveryContext,
  chatJid?: string,
  store: WebRecoveryStore = defaultStore
): void {
  const cursors = store.getAllChatCursors();
  const resolvedJids = chatJid && chatJid !== "all"
    ? [chatJid]
    : Array.from(new Set([...Object.keys(cursors), ...store.getKnownChatJids()]));

  for (const jid of resolvedJids) {
    const since = Object.prototype.hasOwnProperty.call(cursors, jid) ? cursors[jid] : "";
    const messages = store.getMessagesSince(jid, since, ctx.assistantName);
    const deferred = store.getDeferredQueuedFollowups(jid);
    const hasDeferredQueued = deferred.some((item) => typeof item.queuedContent === "string" && item.queuedContent.trim().length > 0);
    if (messages.length === 0 && !hasDeferredQueued) continue;
    // Use a stable per-chat key so repeated resume_pending triggers (for
    // example, reload IPC plus startup self-queued IPC) collapse to one queued
    // recovery task instead of duplicating the same chat turn.
    console.log(`[web] Queuing resume for ${jid}`);
    ctx.enqueue(async () => {
      await ctx.processChat(jid, ctx.defaultAgentId);
    }, `resume:${jid}`, `chat:${jid}`);
  }
}
