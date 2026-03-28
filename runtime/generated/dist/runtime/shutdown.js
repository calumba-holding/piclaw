/**
 * runtime/shutdown.ts – Graceful shutdown orchestration helpers.
 */
import { createLogger } from "../utils/logger.js";
const log = createLogger("runtime.shutdown");
async function withTimeout(promise, ms, label) {
    let timeoutId = null;
    const timeout = new Promise((resolve) => {
        timeoutId = setTimeout(() => {
            log.warn("Shutdown step timed out", { operation: "with_timeout", label, timeoutMs: ms });
            resolve(null);
        }, ms);
    });
    try {
        const result = await Promise.race([promise.then((value) => ({ value })), timeout]);
        if (result && typeof result === "object" && "value" in result) {
            return result.value;
        }
        return null;
    }
    catch (err) {
        log.error("Shutdown step failed", { operation: "with_timeout", label, timeoutMs: ms, err });
        return null;
    }
    finally {
        if (timeoutId)
            clearTimeout(timeoutId);
    }
}
/**
 * Build a signal handler that performs graceful shutdown exactly once.
 */
export function createShutdownHandler(deps) {
    let shuttingDown = false;
    return async (signal) => {
        if (shuttingDown)
            return;
        shuttingDown = true;
        log.info("Shutdown signal received", { operation: "handle_signal", signal });
        const forceExit = setTimeout(() => {
            log.warn("Forcing shutdown after timeout", { operation: "force_exit", timeoutMs: 15000 });
            process.exit(0);
        }, 15000);
        deps.stopIpcWatcher();
        deps.stopSchedulerLoop();
        await withTimeout(deps.queue.shutdown(5000), 7000, "queue shutdown");
        await withTimeout(deps.agentPool.shutdown(), 8000, "agent pool shutdown");
        await withTimeout(deps.whatsapp.disconnect(), 8000, "whatsapp disconnect");
        await withTimeout(deps.web.stop(), 4000, "web stop");
        await withTimeout(deps.pushover?.stop() ?? Promise.resolve(), 4000, "pushover stop");
        clearTimeout(forceExit);
        process.exit(0);
    };
}
