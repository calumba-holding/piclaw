/**
 * agent-pool/turn-coordinator.ts – Tracks streaming turns and prompt lifecycle helpers.
 *
 * Extracts turn aggregation, session subscription wiring, and prompt timeout
 * handling out of AgentPool so prompt orchestration can stay focused on the
 * higher-level run flow.
 */

import type { AgentSession, AgentSessionEvent } from "@mariozechner/pi-coding-agent";

import type { AttachmentInfo } from "./attachments.js";

interface AgentContentBlock {
  type?: unknown;
  text?: unknown;
}

/** A single turn's output within a multi-turn agent run. */
export interface AgentTurnOutput {
  text: string;
  attachments: AttachmentInfo[];
}

/** Aggregated assistant-turn tracking state for a single prompt run. */
export interface AgentTurnTracker {
  handleMessageUpdate: (event: AgentSessionEvent) => void;
  getFinalText: () => string;
  getTurnCount: () => number;
}

/**
 * Result of arming a prompt timeout.
 * `timedOutRef.value` flips to true once the timeout abort fires.
 */
export interface PromptTimeoutState {
  timeoutId: ReturnType<typeof setTimeout> | null;
  timedOutRef: { value: boolean };
}

/** Dependencies injected into AgentTurnCoordinator. */
export interface AgentTurnCoordinatorOptions {
  takeAttachments: (chatJid: string) => AttachmentInfo[];
  touchSession: (chatJid: string) => void;
  recordMessageUsage: (chatJid: string, message: unknown) => void;
  onWarn?: (message: string, details: Record<string, unknown>) => void;
  onError?: (message: string, details: Record<string, unknown>) => void;
}

/**
 * Coordinates per-run assistant turn tracking and event lifecycle helpers.
 */
export class AgentTurnCoordinator {
  constructor(private readonly options: AgentTurnCoordinatorOptions) {}

  createTracker(
    chatJid: string,
    onTurnComplete?: (turn: AgentTurnOutput) => void,
  ): AgentTurnTracker {
    let currentTurnText = "";
    let turnCount = 0;
    let messageHasDelta = false;

    const extractTextFromContent = (content: unknown): string => {
      if (!content) return "";
      if (typeof content === "string") return content;
      if (Array.isArray(content)) {
        return content
          .map((block) => {
            const contentBlock = block as AgentContentBlock;
            if (contentBlock?.type !== "text") return "";
            return typeof contentBlock.text === "string" ? contentBlock.text : "";
          })
          .join("");
      }
      return "";
    };

    const flushTurn = () => {
      const text = currentTurnText.trim();
      if (!text && !onTurnComplete) return;
      if (text || turnCount > 0) {
        onTurnComplete?.({
          text,
          attachments: this.options.takeAttachments(chatJid),
        });
        turnCount += 1;
      }
      currentTurnText = "";
      messageHasDelta = false;
    };

    const handleMessageUpdate = (event: AgentSessionEvent) => {
      if (event.type === "message_update") {
        if (event.assistantMessageEvent.type === "text_start") {
          if (onTurnComplete) {
            flushTurn();
          } else {
            messageHasDelta = false;
          }
        }
        if (event.assistantMessageEvent.type === "text_delta") {
          messageHasDelta = true;
          currentTurnText += event.assistantMessageEvent.delta;
        }
        return;
      }

      if (event.type === "message_end") {
        const message = event.message as { role?: string; content?: unknown } | undefined;
        if (message?.role === "assistant") {
          const text = extractTextFromContent(message.content);
          if (!messageHasDelta && text) {
            currentTurnText = text;
          }
        }
        messageHasDelta = false;
      }
    };

    return {
      handleMessageUpdate,
      getFinalText: () => currentTurnText.trim(),
      getTurnCount: () => turnCount,
    };
  }

  subscribe(
    session: AgentSession,
    chatJid: string,
    tracker: AgentTurnTracker,
    onEvent?: (event: AgentSessionEvent) => void,
  ): () => void {
    return session.subscribe((event: AgentSessionEvent) => {
      this.options.touchSession(chatJid);

      if (onEvent) {
        try {
          onEvent(event);
        } catch (err) {
          this.options.onWarn?.("Event handler error", {
            operation: "subscribe_to_session.on_event",
            chatJid,
            err,
          });
        }
      }

      tracker.handleMessageUpdate(event);

      if (event.type === "message_end") {
        try {
          this.options.recordMessageUsage(chatJid, (event as { message?: unknown }).message);
        } catch (err) {
          this.options.onWarn?.("Failed to persist message usage", {
            operation: "subscribe_to_session.record_usage",
            chatJid,
            err,
          });
        }
      }
    });
  }

  startPromptTimeout(
    session: AgentSession,
    chatJid: string,
    timeoutMs: number,
  ): PromptTimeoutState {
    const timedOutRef = { value: false };
    if (!timeoutMs || timeoutMs <= 0) {
      return { timeoutId: null, timedOutRef };
    }

    const timeoutId = setTimeout(async () => {
      timedOutRef.value = true;
      this.options.onError?.("Prompt timed out; aborting session", {
        operation: "start_prompt_timeout",
        chatJid,
        timeoutMs,
      });
      await session.abort();
    }, timeoutMs);

    return { timeoutId, timedOutRef };
  }
}
