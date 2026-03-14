/**
 * agent-control/handlers/control.ts – Handlers for session lifecycle commands.
 *
 * Handles /restart, /compact, /auto-compact, /auto-retry, /abort,
 * /abort-retry, and /abort-bash commands that control the agent session's
 * execution state.
 *
 * Consumers: agent-control-handlers.ts dispatches to these handlers.
 */
import { formatCompactNumber } from "../agent-control-helpers.js";
import { killTrackedProcesses } from "../../utils/process-tracker.js";
const EXIT_DELAY_MS = Number(process.env.PICLAW_EXIT_DELAY_MS || "150");
function scheduleProcessExit() {
    const customScheduler = globalThis.__PICLAW_EXIT_SCHEDULER__;
    if (typeof customScheduler === "function") {
        customScheduler();
        return;
    }
    setTimeout(() => {
        process.exit(0);
    }, EXIT_DELAY_MS);
}
/** Handle /restart: reload the agent session from disk. */
export async function handleRestart(session, _command) {
    try {
        await session.abort();
    }
    catch {
        // Ignore abort failures
    }
    const killed = killTrackedProcesses();
    try {
        await session.reload();
    }
    catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        return {
            status: "error",
            message: `Restart failed after killing ${killed} subprocess${killed === 1 ? "" : "es"}: ${message}`,
        };
    }
    const killedLabel = killed === 1 ? "1 subprocess" : `${killed} subprocesses`;
    return {
        status: "success",
        message: `Agent restarted. Killed ${killedLabel}.`,
    };
}
/** Handle /exit: terminate the process so supervisor can restart piclaw. */
export async function handleExit(session, _command) {
    try {
        await session.abort();
    }
    catch {
        // Ignore abort failures for wedged sessions.
    }
    killTrackedProcesses();
    scheduleProcessExit();
    return {
        status: "success",
        message: "Exiting now so supervisor can restart piclaw.",
    };
}
/** Handle /compact: manually trigger conversation compaction. */
export async function handleCompact(session, command) {
    try {
        const result = await session.compact(command.instructions?.trim() || undefined);
        const lines = [
            "Compaction complete.",
            `Tokens before: ${formatCompactNumber(result.tokensBefore)}`,
            `First kept entry: ${result.firstKeptEntryId}`,
            "Summary:",
            result.summary,
        ];
        return { status: "success", message: lines.join("\n") };
    }
    catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        return { status: "error", message };
    }
}
/** Handle /auto-compact: toggle automatic compaction on/off. */
export async function handleAutoCompact(session, command) {
    const hasArgs = command.raw.trim().split(/\s+/).length > 1;
    if (command.enabled === undefined) {
        if (hasArgs) {
            return { status: "error", message: "Usage: /auto-compact on|off" };
        }
        return {
            status: "success",
            message: `Auto-compaction is ${session.autoCompactionEnabled ? "on" : "off"}.`,
        };
    }
    session.setAutoCompactionEnabled(command.enabled);
    return {
        status: "success",
        message: `Auto-compaction turned ${command.enabled ? "on" : "off"}.`,
    };
}
/** Handle /auto-retry: toggle automatic retry on/off. */
export async function handleAutoRetry(session, command) {
    const hasArgs = command.raw.trim().split(/\s+/).length > 1;
    if (command.enabled === undefined) {
        if (hasArgs) {
            return { status: "error", message: "Usage: /auto-retry on|off" };
        }
        return {
            status: "success",
            message: `Auto-retry is ${session.autoRetryEnabled ? "on" : "off"}.`,
        };
    }
    session.setAutoRetryEnabled(command.enabled);
    return {
        status: "success",
        message: `Auto-retry turned ${command.enabled ? "on" : "off"}.`,
    };
}
/** Handle /abort: cancel the current agent response. */
export async function handleAbort(session, _command) {
    try {
        await session.abort();
        return { status: "success", message: "Aborted current response." };
    }
    catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        return { status: "error", message };
    }
}
/** Handle /abort: cancel the current agent response. */
export async function handleAbortRetry(session, _command) {
    session.abortRetry();
    return { status: "success", message: "Retry aborted." };
}
/** Handle /abort: cancel the current agent response. */
export async function handleAbortBash(session, _command) {
    if (!session.isBashRunning) {
        return { status: "success", message: "No bash command is running." };
    }
    session.abortBash();
    return { status: "success", message: "Bash command aborted." };
}
