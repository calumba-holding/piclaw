/**
 * channels/web/chat-run-control.ts – chat run control helpers (resume/cursor/failure handling).
 */

import {
  clearFailedRun,
  getChatCursor,
  getFailedRun,
  getMessageThreadRootIdById,
  setChatCursor,
} from "../../../db.js";

interface FailedRunLike {
  failedTs: string;
}

/** Persistence contract used by chat run control helpers. */
export interface ChatRunControlStore {
  getThreadRootId(chatJid: string, messageId: string): number | null;
  getFailedRun(chatJid: string): FailedRunLike | undefined;
  getChatCursor(chatJid: string): string;
  setChatCursor(chatJid: string, ts: string): void;
  clearFailedRun(chatJid: string): void;
}

/** Runtime callbacks required to resume a queued chat run. */
export interface ResumeChatContext {
  defaultAgentId: string;
  enqueue(task: () => Promise<void>, key: string, laneKey?: string): void;
  processChat(chatJid: string, agentId: string, threadRootId?: number | null): Promise<void>;
  getChatCursor(chatJid: string): string;
}

const defaultStore: ChatRunControlStore = {
  getThreadRootId: getMessageThreadRootIdById,
  getFailedRun,
  getChatCursor,
  setChatCursor,
  clearFailedRun,
};

/** Resolve a persisted thread root id for a chat/message pair. */
export function getThreadRootId(
  chatJid: string,
  messageId: string,
  store: ChatRunControlStore = defaultStore
): number | null {
  return store.getThreadRootId(chatJid, messageId);
}

/** Enqueue chat reprocessing for interrupted/pending web chats. */
export function resumeChat(
  chatJid: string,
  threadRootId: number | null | undefined,
  ctx: ResumeChatContext
): void {
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
export function skipFailedOnModelSwitch(
  chatJid: string,
  store: ChatRunControlStore = defaultStore
): void {
  const failed = store.getFailedRun(chatJid);
  if (!failed) return;

  const current = store.getChatCursor(chatJid);
  if (!current || current < failed.failedTs) {
    store.setChatCursor(chatJid, failed.failedTs);
  }
  store.clearFailedRun(chatJid);
}
