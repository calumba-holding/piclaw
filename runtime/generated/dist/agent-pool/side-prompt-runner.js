/**
 * agent-pool/side-prompt-runner.ts – runSidePrompt orchestration helpers.
 */
import { getAgentRuntimeConfig } from "../core/config.js";
import { detectChannel } from "../router.js";
import { withChatContext } from "../core/chat-context.js";
import { recordMessageUsage } from "./usage.js";
import { resolveModelRequestAuth } from "../utils/model-auth.js";
import { extractAssistantText, extractAssistantThinking, formatTimeoutDuration, toSideReasoning, waitForSessionIdle, } from "./prompt-utils.js";
/** Run a side prompt, either via streamSimple or a synchronized side session. */
export async function runSidePrompt(chatJid, prompt, options, deps) {
    const session = await deps.getOrCreate(chatJid);
    const model = session.model;
    if (!model) {
        return { status: "error", result: null, thinking: null, error: "No active model selected.", model: null };
    }
    if (deps.sideStreamSimple) {
        const auth = await resolveModelRequestAuth(deps.modelRegistry, model);
        if (!auth.ok) {
            return {
                status: "error",
                result: null,
                thinking: null,
                error: auth.error || `No credentials available for ${model.provider}/${model.id}.`,
                model: `${model.provider}/${model.id}`,
            };
        }
        const stream = deps.sideStreamSimple(model, {
            ...(options.systemPrompt ? { systemPrompt: options.systemPrompt } : {}),
            messages: [
                {
                    role: "user",
                    content: [{ type: "text", text: prompt }],
                    timestamp: Date.now(),
                },
            ],
        }, {
            apiKey: auth.apiKey,
            headers: auth.headers,
            reasoning: toSideReasoning(session.thinkingLevel),
            signal: options.signal,
        });
        let text = "";
        let thinking = "";
        let finalMessage = null;
        for await (const event of stream) {
            options.onEvent?.(event);
            if (event.type === "text_delta") {
                text += event.delta;
                options.onTextDelta?.(event.delta);
            }
            else if (event.type === "thinking_delta") {
                thinking += event.delta;
                options.onThinkingDelta?.(event.delta);
            }
            else if (event.type === "done") {
                finalMessage = event.message;
            }
            else if (event.type === "error") {
                finalMessage = event.error;
            }
        }
        if (!finalMessage) {
            return {
                status: "error",
                result: null,
                thinking: null,
                error: "Side prompt finished without a response.",
                model: `${model.provider}/${model.id}`,
            };
        }
        try {
            recordMessageUsage(chatJid, finalMessage);
        }
        catch (err) {
            deps.onWarn?.("Failed to persist side-prompt usage", {
                operation: "run_side_prompt.persist_usage_stream",
                chatJid,
                err,
            });
        }
        if (finalMessage.stopReason === "error" || finalMessage.stopReason === "aborted") {
            return {
                status: "error",
                result: null,
                thinking: thinking || extractAssistantThinking(finalMessage),
                error: finalMessage.errorMessage || "Side prompt failed.",
                model: `${model.provider}/${model.id}`,
                usage: finalMessage.usage,
                stopReason: finalMessage.stopReason,
            };
        }
        return {
            status: "success",
            result: text || extractAssistantText(finalMessage) || null,
            thinking: thinking || extractAssistantThinking(finalMessage) || null,
            model: `${model.provider}/${model.id}`,
            usage: finalMessage.usage,
            stopReason: finalMessage.stopReason,
        };
    }
    const sideSession = await deps.getOrCreateSide(chatJid);
    await deps.syncSideSessionFromMain(session, sideSession);
    let text = "";
    let thinking = "";
    let sawText = false;
    let sawThinking = false;
    let finalMessage = null;
    let timedOut = false;
    const channel = detectChannel(chatJid);
    const timeoutMs = getAgentRuntimeConfig().timeoutMs;
    let timeoutId = null;
    const unsubscribe = sideSession.subscribe((event) => {
        options.onEvent?.(event);
        if (event.type === "message_update") {
            const messageEvent = event.assistantMessageEvent;
            if (messageEvent.type === "text_start") {
                if (sawText && !text.endsWith("\n\n"))
                    text += "\n\n";
            }
            else if (messageEvent.type === "text_delta") {
                sawText = true;
                text += messageEvent.delta;
                options.onTextDelta?.(messageEvent.delta);
            }
            else if (messageEvent.type === "thinking_start") {
                if (sawThinking && !thinking.endsWith("\n\n"))
                    thinking += "\n\n";
            }
            else if (messageEvent.type === "thinking_delta") {
                sawThinking = true;
                thinking += messageEvent.delta;
                options.onThinkingDelta?.(messageEvent.delta);
            }
            return;
        }
        if (event.type === "message_end") {
            const message = event.message;
            if (message?.role === "assistant") {
                finalMessage = message;
                try {
                    recordMessageUsage(chatJid, message);
                }
                catch (err) {
                    deps.onWarn?.("Failed to persist side-prompt usage", {
                        operation: "run_side_prompt.persist_usage_session",
                        chatJid,
                        err,
                    });
                }
            }
        }
    });
    const abortHandler = () => {
        void sideSession.abort().catch(() => {
            /* expected */
        });
    };
    options.signal?.addEventListener("abort", abortHandler, { once: true });
    if (timeoutMs > 0) {
        timeoutId = setTimeout(() => {
            timedOut = true;
            void sideSession.abort().catch(() => {
                /* expected */
            });
        }, timeoutMs);
    }
    try {
        await withChatContext(chatJid, channel, async () => {
            const composedPrompt = options.systemPrompt ? `${options.systemPrompt}\n\n${prompt}` : prompt;
            await sideSession.prompt(composedPrompt);
            await waitForSessionIdle(sideSession);
        });
    }
    catch (err) {
        if (timeoutId)
            clearTimeout(timeoutId);
        unsubscribe();
        options.signal?.removeEventListener("abort", abortHandler);
        return {
            status: "error",
            result: null,
            thinking: thinking || null,
            error: timedOut ? `Timed out after ${formatTimeoutDuration(timeoutMs)}` : (err instanceof Error ? err.message : String(err)),
            model: `${model.provider}/${model.id}`,
            stopReason: timedOut ? "aborted" : "error",
        };
    }
    if (timeoutId)
        clearTimeout(timeoutId);
    unsubscribe();
    options.signal?.removeEventListener("abort", abortHandler);
    if (!finalMessage) {
        const fallbackText = text || sideSession.getLastAssistantText() || null;
        if (!fallbackText) {
            return {
                status: "error",
                result: null,
                thinking: thinking || null,
                error: timedOut ? `Timed out after ${formatTimeoutDuration(timeoutMs)}` : "Side prompt finished without a response.",
                model: `${model.provider}/${model.id}`,
                stopReason: timedOut ? "aborted" : "error",
            };
        }
        return {
            status: "success",
            result: fallbackText,
            thinking: thinking || null,
            model: `${model.provider}/${model.id}`,
            stopReason: "stop",
        };
    }
    const completedMessage = finalMessage;
    if (timedOut || completedMessage.stopReason === "error" || completedMessage.stopReason === "aborted") {
        return {
            status: "error",
            result: null,
            thinking: thinking || extractAssistantThinking(completedMessage) || null,
            error: timedOut ? `Timed out after ${formatTimeoutDuration(timeoutMs)}` : (completedMessage.errorMessage || "Side prompt failed."),
            model: `${model.provider}/${model.id}`,
            usage: completedMessage.usage,
            stopReason: timedOut ? "aborted" : completedMessage.stopReason,
        };
    }
    return {
        status: "success",
        result: text || extractAssistantText(completedMessage) || sideSession.getLastAssistantText() || null,
        thinking: thinking || extractAssistantThinking(completedMessage) || null,
        model: `${model.provider}/${model.id}`,
        usage: completedMessage.usage,
        stopReason: completedMessage.stopReason,
    };
}
