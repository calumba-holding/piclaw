/**
 * web/threading.ts – Thread ID resolution for the web channel.
 *
 * Determines the correct thread_id for a new message based on whether
 * it's a reply to an existing thread or a new top-level message.
 *
 * Consumers: web/posts-service.ts calls resolveThreadId() when storing
 *            new user posts.
 */

import type { WebChannelLike } from "./web-channel-contracts.js";

/** Determine the thread_id for a new message (existing thread or new). */
export function resolveThreadId(
  explicit: number | null | undefined,
  fallback: number | null | undefined
): number | null {
  if (explicit !== null && explicit !== undefined) return explicit;
  return fallback ?? null;
}

/** Find the root message rowid for a thread chain. */
export function resolveThreadRootId(
  channel: WebChannelLike,
  chatJid: string,
  messageId: string,
  explicitThreadId?: number | null
): number | null {
  const fallback = channel.getThreadRootId(chatJid, messageId);
  return resolveThreadId(explicitThreadId, fallback);
}
