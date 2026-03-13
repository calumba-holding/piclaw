/**
 * web/agent-message-service.ts – Stores agent responses as timeline posts.
 *
 * After an agent run completes, this service persists the response as a
 * message in the database and broadcasts it to SSE clients.
 *
 * Consumers: channels/web.ts calls this after agent runs complete.
 */

import type { WebChannelLike } from "./web-channel-contracts.js";
import type { InteractionRow } from "../../db.js";
import { normalizeMediaIds } from "./posts-service.js";

/** AgentMessagePayload type definition. */
export interface AgentMessagePayload {
  content?: string;
  thread_id?: number | null;
  media_ids?: number[];
  mode?: "auto" | "queue" | "steer";
  content_blocks?: unknown[];
  link_previews?: unknown[];
}

/**
 * Max allowed agent message content length (100 KB).
 * Consistent with MAX_POST_CONTENT_LENGTH in posts-service.ts.
 * Prevents oversized messages from the compose box reaching the agent.
 */
const MAX_AGENT_MESSAGE_CONTENT_LENGTH = 100 * 1024;

/**
 * Parse and validate an agent message API request body.
 * Returns { error } if the JSON is invalid or content exceeds the size limit.
 */
export async function parseAgentMessageRequest(req: Request): Promise<{
  payload?: AgentMessagePayload;
  error?: string;
}> {
  try {
    const data = (await req.json()) as AgentMessagePayload;
    // Content length check — must match the limit used by parsePostPayload()
    if (typeof data.content === "string" && data.content.length > MAX_AGENT_MESSAGE_CONTENT_LENGTH) {
      return { error: `Content too large (max ${MAX_AGENT_MESSAGE_CONTENT_LENGTH / 1024} KB)` };
    }
    return { payload: data };
  } catch {
    return { error: "Invalid JSON" };
  }
}

/** Normalize an agent message payload for storage (trim, defaults). */
export function normalizeAgentMessagePayload(payload: AgentMessagePayload): {
  content?: string;
  threadId?: number | null;
  mediaIds: number[];
  contentBlocks?: unknown[];
  linkPreviews?: unknown[];
  mode?: "auto" | "queue" | "steer";
} {
  return {
    content: payload.content,
    threadId: payload.thread_id ?? null,
    mediaIds: normalizeMediaIds(payload.media_ids),
    contentBlocks: Array.isArray(payload.content_blocks) ? payload.content_blocks : undefined,
    linkPreviews: Array.isArray(payload.link_previews) ? payload.link_previews : undefined,
    mode: payload.mode,
  };
}

/** Store the user portion of an agent interaction in the database. */
export function storeAgentUserMessage(
  channel: WebChannelLike,
  chatJid: string,
  payload: {
    content: string;
    mediaIds: number[];
    contentBlocks?: unknown[];
    linkPreviews?: unknown[];
  }
): InteractionRow | null {
  return channel.storeMessage(chatJid, payload.content, false, payload.mediaIds, {
    contentBlocks: payload.contentBlocks,
    linkPreviews: payload.linkPreviews,
  });
}
