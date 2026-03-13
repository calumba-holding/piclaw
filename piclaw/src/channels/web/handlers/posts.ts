/**
 * web/handlers/posts.ts – HTTP handlers for timeline post endpoints.
 *
 * Handles GET /timeline, GET /hashtag/:tag, GET /search, POST /post,
 * PUT /post/:id, DELETE /post/:id. Delegates to timeline-service.ts
 * and posts-service.ts for data operations.
 *
 * Consumers: web/request-router.ts routes post paths here.
 */

import type { WebChannelLike } from "../web-channel-contracts.js";
import { parsePostPayload, storePost } from "../posts-service.js";

/** Route post requests to create, update, delete, or query handlers. */
export async function handlePost(channel: WebChannelLike, req: Request, isReply: boolean, chatJid: string): Promise<Response> {
  let data: unknown;
  try {
    data = await req.json();
  } catch {
    return channel.json({ error: "Invalid JSON" }, 400);
  }

  const parsed = parsePostPayload(data);
  if (!parsed.ok || !parsed.data) return channel.json({ error: parsed.error }, 400);

  const result = storePost(channel, chatJid, parsed.data, { isReply });
  return channel.json(result.body, result.status);
}
