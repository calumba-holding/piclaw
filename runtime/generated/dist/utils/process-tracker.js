/**
 * utils/process-tracker.ts – Registry of spawned child processes.
 *
 * Tracks PIDs of child processes spawned by the agent (bash commands, scripts)
 * so they can be force-killed when an agent turn is cancelled or the
 * application is shutting down.
 *
 * Consumers:
 *   - tools/tracked-bash.ts registers/unregisters PIDs around each bash exec.
 *   - agent-pool.ts calls killTrackedProcesses() when aborting an agent run.
 *   - runtime.ts calls killTrackedProcesses() on graceful shutdown.
 */
import { spawn } from "child_process";
/** Map of PID → TrackedProcess for all currently tracked child processes. */
const tracked = new Map();
/** Add a PID to the tracker. Called by tracked-bash.ts after spawning. */
export function registerProcess(pid) {
    if (!Number.isFinite(pid))
        return;
    tracked.set(pid, { pid, createdAt: Date.now() });
}
/** Remove a PID from the tracker. Called by tracked-bash.ts when a process exits. */
export function unregisterProcess(pid) {
    tracked.delete(pid);
}
/** Return the list of currently tracked PIDs. Used for diagnostics. */
export function listTrackedProcesses() {
    return [...tracked.keys()];
}
/**
 * Kill a process and its entire process tree.
 * On Unix, sends SIGKILL to the process group (-pid); falls back to
 * killing just the PID if the group kill fails.
 * On Windows, uses `taskkill /F /T`.
 */
export function killProcessTree(pid) {
    if (!Number.isFinite(pid))
        return;
    if (process.platform === "win32") {
        try {
            spawn("taskkill", ["/F", "/T", "/PID", String(pid)], {
                stdio: "ignore",
                detached: true,
            });
        }
        catch {
            // Ignore errors if taskkill fails
        }
        return;
    }
    try {
        process.kill(-pid, "SIGKILL");
    }
    catch {
        try {
            process.kill(pid, "SIGKILL");
        }
        catch {
            // Process already dead
        }
    }
}
/**
 * Kill all tracked processes and clear the tracker.
 * Returns the number of processes that were killed.
 * Called by agent-pool.ts on abort and runtime.ts on shutdown.
 */
export function killTrackedProcesses() {
    const pids = [...tracked.keys()];
    for (const pid of pids) {
        killProcessTree(pid);
        tracked.delete(pid);
    }
    return pids.length;
}
