/**
 * agent-pool/run-agent-orchestrator.ts – Main runAgent prompt lifecycle orchestration.
 */

import type { AgentSession } from "@mariozechner/pi-coding-agent";

import type { AttachmentInfo } from "./attachments.js";

import { getAgentRuntimeConfig, getSessionStorageConfig } from "../core/config.js";
import { detectChannel } from "../router.js";
import { pruneOrphanToolResults } from "./orphan-tool-results.js";
import { writeAgentLog } from "./logging.js";
import { getSessionFileSize, rotateSession } from "../session-rotation.js";
import { withChatContext } from "../core/chat-context.js";
import { formatTimeoutDuration, waitForSessionIdle } from "./prompt-utils.js";
import type { AgentTurnCoordinator } from "./turn-coordinator.js";
import type { AgentOutput, RunAgentOptions } from "../agent-pool.js";

/** Dependencies required to run a main agent prompt. */
export interface RunAgentOrchestratorOptions {
  getOrCreate: (chatJid: string) => Promise<AgentSession>;
  turnCoordinator: AgentTurnCoordinator;
  clearAttachments: (chatJid: string) => void;
  takeAttachments: (chatJid: string) => AttachmentInfo[];
  logsDir: string;
  setActiveForkBaseLeaf: (chatJid: string, leafId: string | null) => void;
  clearActiveForkBaseLeaf: (chatJid: string) => void;
  onInfo?: (message: string, details: Record<string, unknown>) => void;
  onWarn?: (message: string, details: Record<string, unknown>) => void;
  onError?: (message: string, details: Record<string, unknown>) => void;
}

async function maybeAutoRotateSession(
  session: AgentSession,
  chatJid: string,
  options: Pick<RunAgentOrchestratorOptions, "onInfo" | "onWarn">,
): Promise<void> {
  const sessionStorageConfig = getSessionStorageConfig();
  const autoRotateEnabled = sessionStorageConfig.autoRotate
    || ["1", "true", "yes", "on"].includes((process.env.PICLAW_SESSION_AUTO_ROTATE || "").trim().toLowerCase());
  if (!autoRotateEnabled) return;

  const envThresholdMb = parseInt(process.env.PICLAW_SESSION_MAX_SIZE_MB || "", 10);
  const thresholdBytes = Number.isFinite(envThresholdMb) && envThresholdMb > 0
    ? envThresholdMb * 1024 * 1024
    : sessionStorageConfig.maxSizeBytes;

  const sessionFileSize = getSessionFileSize(session.sessionFile);
  if (sessionFileSize === null || sessionFileSize < thresholdBytes) return;

  const result = await rotateSession(session, { reason: "automatic" });
  if (result.status === "success") {
    options.onInfo?.("Auto-rotated oversized session", {
      operation: "maybe_auto_rotate_session",
      chatJid,
      previousSize: result.previousSize ?? sessionFileSize,
      nextSize: result.nextSize ?? "unknown",
    });
    return;
  }

  options.onWarn?.("Auto-rotation skipped", {
    operation: "maybe_auto_rotate_session",
    chatJid,
    reason: result.message,
  });
}

/** Run a prompt against the persistent session for one chat. */
export async function runAgentPrompt(
  prompt: string,
  chatJid: string,
  runOptions: RunAgentOptions,
  options: RunAgentOrchestratorOptions,
): Promise<AgentOutput> {
  const startTime = Date.now();
  options.clearAttachments(chatJid);

  try {
    const session = await options.getOrCreate(chatJid);
    await maybeAutoRotateSession(session, chatJid, options);
    pruneOrphanToolResults(session, chatJid);
    const forkBaseLeafId = typeof session.sessionManager?.getLeafId === "function"
      ? session.sessionManager.getLeafId()
      : null;
    options.setActiveForkBaseLeaf(chatJid, forkBaseLeafId ?? null);
    options.onInfo?.("Prompting session", {
      operation: "run_agent.prompt",
      chatJid,
      promptLength: prompt.length,
    });

    const tracker = options.turnCoordinator.createTracker(chatJid, runOptions.onTurnComplete);
    const unsub = options.turnCoordinator.subscribe(session, chatJid, tracker, runOptions.onEvent);
    const timeoutMs = typeof runOptions.timeoutMs === "number" ? runOptions.timeoutMs : getAgentRuntimeConfig().timeoutMs;
    const { timeoutId, timedOutRef } = options.turnCoordinator.startPromptTimeout(session, chatJid, timeoutMs);

    const channel = detectChannel(chatJid);
    return await withChatContext(chatJid, channel, async () => {
      try {
        await session.prompt(prompt);
        await waitForSessionIdle(session);
      } finally {
        if (timeoutId) clearTimeout(timeoutId);
        unsub();
      }

      const duration = Date.now() - startTime;
      const finalText = tracker.getFinalText();
      const finalAttachments = options.takeAttachments(chatJid);
      const timedOut = timedOutRef.value;
      writeAgentLog(options.logsDir, chatJid, duration, timedOut, finalText, null);

      if (timedOut) {
        return { status: "error", result: null, error: `Timed out after ${formatTimeoutDuration(timeoutMs)}` };
      }

      options.onInfo?.("Agent run completed", {
        operation: "run_agent.complete",
        chatJid,
        durationMs: duration,
        outputChars: finalText.length,
        turns: tracker.getTurnCount() + 1,
      });
      return {
        status: "success",
        result: finalText || null,
        attachments: finalAttachments.length ? finalAttachments : undefined,
      };
    });
  } catch (err) {
    options.clearAttachments(chatJid);
    const duration = Date.now() - startTime;
    const errorMsg = err instanceof Error ? err.message : String(err);
    writeAgentLog(options.logsDir, chatJid, duration, false, null, errorMsg);
    options.onError?.("Agent run failed", {
      operation: "run_agent",
      chatJid,
      durationMs: duration,
      errorMessage: errorMsg,
      err,
    });
    return { status: "error", result: null, error: errorMsg };
  } finally {
    options.clearActiveForkBaseLeaf(chatJid);
  }
}
