/**
 * web/http/rate-limit.ts – Sliding-window request rate limiter for web routes.
 */

import { getClientKey } from "./client.js";

const RATE_PRUNE_INTERVAL_MS = 10 * 60 * 1000;

const rateBuckets = new Map<string, number[]>();
let lastRatePrune = Date.now();
let maxWindowSeenMs = 0;

function pruneRateBuckets(now: number): void {
  if (now - lastRatePrune < RATE_PRUNE_INTERVAL_MS) return;
  lastRatePrune = now;

  const cutoff = now - Math.max(maxWindowSeenMs, 1);
  for (const [key, entries] of rateBuckets.entries()) {
    const live = entries.filter((ts) => ts > cutoff);
    if (live.length === 0) {
      rateBuckets.delete(key);
    } else {
      rateBuckets.set(key, live);
    }
  }
}

/**
 * Evaluate whether a client exceeds a sliding-window request limit.
 * @param clientKey Stable client identifier bucketed by IP/session fingerprint.
 * @param bucket Logical endpoint/action bucket name.
 * @param windowMs Sliding window duration in milliseconds.
 * @param limit Maximum allowed requests within the window.
 * @param now Optional timestamp override for deterministic tests.
 * @returns True when the request should be rate-limited.
 */
export function isRateLimitedForClient(
  clientKey: string,
  bucket: string,
  windowMs: number,
  limit: number,
  now = Date.now()
): boolean {
  maxWindowSeenMs = Math.max(maxWindowSeenMs, windowMs);
  pruneRateBuckets(now);

  const key = `${clientKey}:${bucket}`;
  const cutoff = now - windowMs;
  const entries = rateBuckets.get(key) || [];
  const trimmed = entries.filter((ts) => ts > cutoff);
  trimmed.push(now);
  rateBuckets.set(key, trimmed);
  return trimmed.length > limit;
}

/**
 * Request-scoped rate-limit helper that derives client identity from the request.
 * @param req Incoming HTTP request.
 * @param bucket Logical endpoint/action bucket name.
 * @param windowMs Sliding window duration in milliseconds.
 * @param limit Maximum allowed requests within the window.
 * @returns True when this request exceeds the configured rate limit.
 */
export function isRateLimited(req: Request, bucket: string, windowMs: number, limit: number): boolean {
  return isRateLimitedForClient(getClientKey(req), bucket, windowMs, limit);
}

/**
 * Clear in-memory rate limiter state for deterministic test setup.
 * @returns Nothing.
 */
export function resetRateLimiterStateForTests(): void {
  rateBuckets.clear();
  lastRatePrune = Date.now();
  maxWindowSeenMs = 0;
}
