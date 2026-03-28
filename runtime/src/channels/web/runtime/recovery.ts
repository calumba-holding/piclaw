/**
 * channels/web/recovery.ts – crash recovery and pending-resume orchestration.
 */

import {
  clearInflightMarker,
  getAgentReplyStateAfter,
  getAllChatCursors,
  getDb,
  getDeferredQueuedFollowups,
  getInflightRuns,
  getMessagesSince,
  rollbackInflightRun,
  type AgentReplyState,
  type DeferredQueuedFollowupRecord,
  type InflightRun,
} from "../../../db.js";
import { createLogger } from "../../../utils/logger.js";

const log = createLogger("web.recovery");

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
  getAgentReplyStateAfter(chatJid: string, prevTs: string): AgentReplyState;
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
 * We replay all interrupted no-output markers to preserve pending user turns,
 * but emit a stronger warning for very old markers so operators can spot
 * pathological restart loops.
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
          log.info("Inflight run already has a terminal reply; clearing marker", {
            operation: "recover_inflight_runs.clear_terminal",
            chatJid: inflight.chatJid,
            startedAt: inflight.startedAt,
          });
          store.clearInflightMarker(inflight.chatJid);
          continue;
        }

        if (replyState === "partial") {
          log.info("Inflight run already has partial output; clearing marker", {
            operation: "recover_inflight_runs.clear_partial",
            chatJid: inflight.chatJid,
            startedAt: inflight.startedAt,
          });
          store.clearInflightMarker(inflight.chatJid);
          continue;
        }

        const inflightAge = now - new Date(inflight.startedAt).getTime();
        if (inflightAge > MAX_INFLIGHT_AGE_MS) {
          log.warn("Inflight run is stale; rolling back and replaying", {
            operation: "recover_inflight_runs.rollback_stale",
            chatJid: inflight.chatJid,
            startedAt: inflight.startedAt,
            inflightAgeSeconds: Math.round(inflightAge / 1000),
          });
          store.rollbackInflightRun(inflight.chatJid, inflight.prevTs);
          continue;
        }

        log.info("Inflight run has no agent output yet; rolling back and replaying", {
          operation: "recover_inflight_runs.rollback_pending",
          chatJid: inflight.chatJid,
          startedAt: inflight.startedAt,
          inflightAgeSeconds: Math.round(inflightAge / 1000),
        });
        store.rollbackInflightRun(inflight.chatJid, inflight.prevTs);
      }
    });
  } catch (err) {
    log.error("Failed to roll back inflight runs; will retry on next startup", {
      operation: "recover_inflight_runs",
      err,
    });
    return;
  }

  // Collect the set of chats that were actually rolled back (all no-output
  // inflight runs). Only these need a recovery processChat enqueue.
  const rolledBack = new Set<string>();
  for (const { inflight, replyState } of decisions) {
    if (replyState === "none") {
      rolledBack.add(inflight.chatJid);
    }
  }

  for (const { inflight, replyState } of decisions) {
    if (replyState === "none" && rolledBack.has(inflight.chatJid)) {
      log.info("Recovering interrupted run", {
        operation: "recover_inflight_runs.enqueue_recovery",
        chatJid: inflight.chatJid,
        startedAt: inflight.startedAt,
      });
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
    log.info("Queuing resume for pending chat", {
      operation: "resume_pending_chats.enqueue",
      chatJid: jid,
    });
    ctx.enqueue(async () => {
      await ctx.processChat(jid, ctx.defaultAgentId);
    }, `resume:${jid}`, `chat:${jid}`);
  }
}
