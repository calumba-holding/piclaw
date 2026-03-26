/**
 * agent-control/handlers/control.ts – Handlers for session lifecycle commands.
 *
 * Handles /restart, /compact, /auto-compact, /auto-retry, /abort,
 * /abort-retry, and /abort-bash commands that control the agent session's
 * execution state.
 *
 * Consumers: agent-control-handlers.ts dispatches to these handlers.
 */

import type { AgentSession } from "@mariozechner/pi-coding-agent";
import type { AgentControlCommand, AgentControlResult } from "../agent-control-types.js";
import { formatCompactNumber } from "../agent-control-helpers.js";
import { createMedia } from "../../db.js";
import { requestGracefulShutdown } from "../../runtime/shutdown-registry.js";
import { createLogger } from "../../utils/logger.js";
import { killTrackedProcesses } from "../../utils/process-tracker.js";

const log = createLogger("agent-control.control");

type RestartCommand = Extract<AgentControlCommand, { type: "restart" }>;
type ExitCommand = Extract<AgentControlCommand, { type: "exit" }>;
type CompactCommand = Extract<AgentControlCommand, { type: "compact" }>;
type AutoCompactCommand = Extract<AgentControlCommand, { type: "auto_compact" }>;
type AutoRetryCommand = Extract<AgentControlCommand, { type: "auto_retry" }>;
type AbortCommand = Extract<AgentControlCommand, { type: "abort" }>;
type AbortRetryCommand = Extract<AgentControlCommand, { type: "abort_retry" }>;
type AbortBashCommand = Extract<AgentControlCommand, { type: "abort_bash" }>;

function scheduleProcessExit(): void {
  requestGracefulShutdown("/exit command");
}

function toCompactReportFilename(timestamp: string): string {
  return `compaction-report-${timestamp.replace(/[:.]/g, "-")}.md`;
}

function buildCompactReport(
  summary: string,
  tokensBefore: number,
  firstKeptEntryId: string | number | null | undefined,
  timestamp: string
): string {
  return [
    "# Compaction report",
    "",
    `Generated: ${timestamp}`,
    `Tokens before: ${formatCompactNumber(tokensBefore)}`,
    `First kept entry: ${firstKeptEntryId ?? "unknown"}`,
    "",
    "## Summary",
    "",
    summary.trim() || "(empty summary)",
    "",
  ].join("\n");
}

function createCompactReportAttachment(
  summary: string,
  tokensBefore: number,
  firstKeptEntryId: string | number | null | undefined,
  timestamp: string
): number | null {
  try {
    const filename = toCompactReportFilename(timestamp);
    const content = buildCompactReport(summary, tokensBefore, firstKeptEntryId, timestamp);
    return createMedia(
      filename,
      "text/markdown",
      new TextEncoder().encode(content),
      null,
      {
        source: "compact",
        generated_at: timestamp,
        tokens_before: tokensBefore,
        first_kept_entry_id: firstKeptEntryId ?? null,
      }
    );
  } catch (error) {
    log.warn("Failed to create /compact report attachment", { error });
    return null;
  }
}

/** Handle /restart: reload the agent session from disk. */
export async function handleRestart(session: AgentSession, _command: RestartCommand): Promise<AgentControlResult> {
  try {
    await session.abort();
  } catch {
    // Ignore abort failures
  }

  const killed = killTrackedProcesses();

  try {
    await session.reload();
  } catch (err) {
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
export async function handleExit(session: AgentSession, _command: ExitCommand): Promise<AgentControlResult> {
  try {
    await session.abort();
  } catch {
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
export async function handleCompact(session: AgentSession, command: CompactCommand): Promise<AgentControlResult> {
  try {
    const result = await session.compact(command.instructions?.trim() || undefined);
    const generatedAt = new Date().toISOString();
    const attachmentId = createCompactReportAttachment(
      result.summary,
      result.tokensBefore,
      result.firstKeptEntryId,
      generatedAt
    );
    const lines = [
      "Compaction complete.",
      `Tokens before: ${formatCompactNumber(result.tokensBefore)}`,
      `First kept entry: ${result.firstKeptEntryId}`,
      attachmentId ? "Attached: full compaction report (.md)." : "Full compaction report attachment unavailable.",
    ];
    return {
      status: "success",
      message: lines.join("\n"),
      ...(attachmentId ? { mediaIds: [attachmentId] } : {}),
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { status: "error", message };
  }
}

/** Handle /auto-compact: toggle automatic compaction on/off. */
export async function handleAutoCompact(session: AgentSession, command: AutoCompactCommand): Promise<AgentControlResult> {
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
export async function handleAutoRetry(session: AgentSession, command: AutoRetryCommand): Promise<AgentControlResult> {
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
export async function handleAbort(session: AgentSession, _command: AbortCommand): Promise<AgentControlResult> {
  try {
    await session.abort();
    return { status: "success", message: "Aborted current response." };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { status: "error", message };
  }
}

/** Handle /abort: cancel the current agent response. */
export async function handleAbortRetry(session: AgentSession, _command: AbortRetryCommand): Promise<AgentControlResult> {
  session.abortRetry();
  return { status: "success", message: "Retry aborted." };
}

/** Handle /abort: cancel the current agent response. */
export async function handleAbortBash(session: AgentSession, _command: AbortBashCommand): Promise<AgentControlResult> {
  if (!session.isBashRunning) {
    return { status: "success", message: "No bash command is running." };
  }
  session.abortBash();
  return { status: "success", message: "Bash command aborted." };
}
