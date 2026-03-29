/**
 * agent-pool/turn-coordinator.ts – Tracks streaming turns and prompt lifecycle helpers.
 *
 * Extracts turn aggregation, session subscription wiring, and prompt timeout
 * handling out of AgentPool so prompt orchestration can stay focused on the
 * higher-level run flow.
 */
/**
 * Coordinates per-run assistant turn tracking and event lifecycle helpers.
 */
export class AgentTurnCoordinator {
    options;
    constructor(options) {
        this.options = options;
    }
    createTracker(chatJid, onTurnComplete) {
        let currentTurnText = "";
        let turnCount = 0;
        let messageHasDelta = false;
        const extractTextFromContent = (content) => {
            if (!content)
                return "";
            if (typeof content === "string")
                return content;
            if (Array.isArray(content)) {
                return content
                    .map((block) => {
                    const contentBlock = block;
                    if (contentBlock?.type !== "text")
                        return "";
                    return typeof contentBlock.text === "string" ? contentBlock.text : "";
                })
                    .join("");
            }
            return "";
        };
        const flushTurn = () => {
            const text = currentTurnText.trim();
            if (!text && !onTurnComplete)
                return;
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
        const handleMessageUpdate = (event) => {
            if (event.type === "message_update") {
                if (event.assistantMessageEvent.type === "text_start") {
                    if (onTurnComplete) {
                        flushTurn();
                    }
                    else {
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
                const message = event.message;
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
    subscribe(session, chatJid, tracker, onEvent) {
        return session.subscribe((event) => {
            this.options.touchSession(chatJid);
            if (onEvent) {
                try {
                    onEvent(event);
                }
                catch (err) {
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
                    this.options.recordMessageUsage(chatJid, event.message);
                }
                catch (err) {
                    this.options.onWarn?.("Failed to persist message usage", {
                        operation: "subscribe_to_session.record_usage",
                        chatJid,
                        err,
                    });
                }
            }
        });
    }
    startPromptTimeout(session, chatJid, timeoutMs) {
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
