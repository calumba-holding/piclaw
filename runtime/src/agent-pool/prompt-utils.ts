/**
 * agent-pool/prompt-utils.ts – Shared prompt/assistant text helpers.
 */

/** Lightweight assistant message metadata used by side-prompt helpers. */
export interface SideAssistantMessage {
  stopReason?: string;
  errorMessage?: string;
  usage?: unknown;
  content?: unknown[];
  provider?: string;
  model?: string;
  api?: string;
}

/** Format a timeout in a compact human-readable form. */
export function formatTimeoutDuration(timeoutMs: number): string {
  if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) return `${timeoutMs}ms`;
  if (timeoutMs % 1000 === 0) return `${Math.round(timeoutMs / 1000)}s`;
  return `${(timeoutMs / 1000).toFixed(1)}s`;
}

/** Extract assistant text blocks from a rich content message. */
export function extractAssistantText(message: { content?: unknown[] } | null | undefined): string {
  if (!Array.isArray(message?.content)) return "";
  return message.content
    .map((block) => block && typeof block === "object" && (block as { type?: unknown }).type === "text"
      ? String((block as { text?: unknown }).text ?? "")
      : "")
    .join("")
    .trim();
}

/** Extract assistant thinking blocks from a rich content message. */
export function extractAssistantThinking(message: { content?: unknown[] } | null | undefined): string {
  if (!Array.isArray(message?.content)) return "";
  return message.content
    .map((block) => block && typeof block === "object" && (block as { type?: unknown }).type === "thinking"
      ? String((block as { thinking?: unknown }).thinking ?? "")
      : "")
    .join("")
    .trim();
}

/** Normalize supported side-prompt reasoning levels for streamSimple(). */
export function toSideReasoning(level: unknown): "minimal" | "low" | "medium" | "high" | "xhigh" | undefined {
  return level === "minimal" || level === "low" || level === "medium" || level === "high" || level === "xhigh"
    ? level
    : undefined;
}

/** Wait until a session fully settles after a prompt completes. */
export async function waitForSessionIdle(
  session: { isStreaming?: boolean; isCompacting?: boolean; isRetrying?: boolean },
  settleTicks = 10,
): Promise<void> {
  let idleTicks = 0;
  while (idleTicks < settleTicks) {
    if (!session.isStreaming && !session.isCompacting && !session.isRetrying) {
      idleTicks += 1;
    } else {
      idleTicks = 0;
    }
    await Bun.sleep(50);
  }
}
