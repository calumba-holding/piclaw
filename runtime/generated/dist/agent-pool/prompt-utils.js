/**
 * agent-pool/prompt-utils.ts – Shared prompt/assistant text helpers.
 */
/** Format a timeout in a compact human-readable form. */
export function formatTimeoutDuration(timeoutMs) {
    if (!Number.isFinite(timeoutMs) || timeoutMs <= 0)
        return `${timeoutMs}ms`;
    if (timeoutMs % 1000 === 0)
        return `${Math.round(timeoutMs / 1000)}s`;
    return `${(timeoutMs / 1000).toFixed(1)}s`;
}
/** Extract assistant text blocks from a rich content message. */
export function extractAssistantText(message) {
    if (!Array.isArray(message?.content))
        return "";
    return message.content
        .map((block) => block && typeof block === "object" && block.type === "text"
        ? String(block.text ?? "")
        : "")
        .join("")
        .trim();
}
/** Extract assistant thinking blocks from a rich content message. */
export function extractAssistantThinking(message) {
    if (!Array.isArray(message?.content))
        return "";
    return message.content
        .map((block) => block && typeof block === "object" && block.type === "thinking"
        ? String(block.thinking ?? "")
        : "")
        .join("")
        .trim();
}
/** Normalize supported side-prompt reasoning levels for streamSimple(). */
export function toSideReasoning(level) {
    return level === "minimal" || level === "low" || level === "medium" || level === "high" || level === "xhigh"
        ? level
        : undefined;
}
/** Wait until a session fully settles after a prompt completes. */
export async function waitForSessionIdle(session, settleTicks = 10) {
    let idleTicks = 0;
    while (idleTicks < settleTicks) {
        if (!session.isStreaming && !session.isCompacting && !session.isRetrying) {
            idleTicks += 1;
        }
        else {
            idleTicks = 0;
        }
        await Bun.sleep(50);
    }
}
