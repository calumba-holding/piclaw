/**
 * runtime/shutdown-registry.ts – Global shutdown handle for agent-initiated exits.
 *
 * bootstrapRuntime() registers the graceful shutdown handler here after
 * startup. The exit_process tool and /exit slash command call
 * requestGracefulShutdown() to trigger the same orderly teardown
 * (queue drain → session dispose → web stop → process.exit) that SIGINT uses.
 *
 * For agent-initiated exits (exit_process tool), the actual shutdown is
 * **deferred** until the current turn completes and is persisted to the DB.
 * Call markPendingShutdown() during a tool call, then checkPendingShutdown()
 * from finalizeSuccessfulRun() after the response is committed.
 */

import { createLogger } from "../utils/logger.js";

const log = createLogger("runtime.shutdown-registry");

type ShutdownFn = (signal: string) => Promise<void>;

let registeredShutdown: ShutdownFn | null = null;
let pendingShutdownReason: string | null = null;

/**
 * Register the graceful shutdown handler.
 * Called once by bootstrapRuntime() after all services are wired.
 */
export function registerShutdownHandler(handler: ShutdownFn): void {
  registeredShutdown = handler;
}

/**
 * Request an immediate graceful shutdown of the entire runtime.
 *
 * Used by /exit slash command (which runs outside the agent turn).
 * For exit_process tool (mid-turn), use markPendingShutdown() instead.
 */
export function requestGracefulShutdown(reason: string, delayMs = 800): void {
  const testScheduler = (globalThis as { __PICLAW_EXIT_SCHEDULER__?: () => void }).__PICLAW_EXIT_SCHEDULER__;
  if (typeof testScheduler === "function") {
    testScheduler();
    return;
  }

  if (registeredShutdown) {
    log.info("Graceful shutdown requested", { operation: "request", reason });
    void registeredShutdown(`exit_process: ${reason}`);
    return;
  }

  log.info("No runtime handler registered; scheduling process exit", {
    operation: "request_fallback",
    reason,
    delayMs,
  });
  setTimeout(() => process.exit(0), delayMs);
}

/**
 * Mark that a graceful shutdown should happen after the current turn
 * completes and is persisted. Called by the exit_process tool.
 */
export function markPendingShutdown(reason: string): void {
  pendingShutdownReason = reason;
  log.info("Pending shutdown marked", { operation: "mark_pending", reason });
}

/**
 * Check if a pending shutdown was requested. If so, execute it.
 * Called from finalizeSuccessfulRun() after the response is committed to the DB.
 */
export function checkPendingShutdown(): void {
  if (!pendingShutdownReason) return;
  const reason = pendingShutdownReason;
  pendingShutdownReason = null;
  // Short delay to ensure SSE broadcast of the final response reaches clients
  setTimeout(() => {
    requestGracefulShutdown(reason);
  }, 500);
}
