/**
 * queue/retry-policy.ts – Retry configuration and helpers for the AgentQueue.
 *
 * Defines the default retry limits and exponential back-off calculation.
 * Used exclusively by queue.ts.
 */
/** Maximum number of retries before giving up on a failed queue item. */
export const DEFAULT_MAX_RETRIES = 3;
/** Base delay (ms) for exponential back-off. Actual delay = base * 2^(retry-1). */
export const DEFAULT_BASE_RETRY_MS = 5000;
/** Determine whether a failed item should be retried. */
export function shouldRetry(retries, maxRetries, shuttingDown) {
    return !shuttingDown && retries < maxRetries;
}
/** Calculate the exponential back-off delay for the Nth retry. */
export function getRetryDelay(retryCount, baseMs) {
    if (retryCount <= 0)
        return 0;
    return baseMs * Math.pow(2, retryCount - 1);
}
