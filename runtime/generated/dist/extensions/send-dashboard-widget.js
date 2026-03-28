/**
 * send-dashboard-widget – dedicated internal tool for posting the staged live dashboard widget.
 */
import { Type } from "@sinclair/typebox";
import { getChatJid } from "../core/chat-context.js";
import { createDashboardWidgetBlock } from "../channels/web/dashboard-widget.js";
import { postMessagesToolMessage } from "./messages-crud.js";
const SendDashboardWidgetSchema = Type.Object({
    content: Type.Optional(Type.String({ description: "Human-readable fallback message / timeline text." })),
    chat_jid: Type.Optional(Type.String({ description: "Target chat JID (defaults to current chat)." })),
    widget_id: Type.Optional(Type.String({ description: "Stable widget identifier override." })),
});
const HINT = [
    "## Dashboard widget posting",
    "Use send_dashboard_widget to post the staged live dashboard widget to the PiClaw web timeline.",
    "Prefer this over generic message posting when you need the built-in host-backed dashboard widget demo.",
].join("\n");
function isRecord(value) {
    return !!value && typeof value === "object" && !Array.isArray(value);
}
function buildResultError(message) {
    return {
        content: [{ type: "text", text: message }],
        details: { posted: 0, error: message },
    };
}
/** Dedicated tool for posting the staged host-backed dashboard widget to the web timeline. */
export const sendDashboardWidget = (pi) => {
    pi.on("before_agent_start", async (event) => ({
        systemPrompt: `${event.systemPrompt}\n\n${HINT}`,
    }));
    pi.registerTool({
        name: "send_dashboard_widget",
        label: "send_dashboard_widget",
        description: "Post the staged live dashboard widget to the PiClaw web timeline.",
        promptSnippet: "send_dashboard_widget: post the built-in host-backed dashboard widget to web timeline.",
        parameters: SendDashboardWidgetSchema,
        async execute(_toolCallId, params) {
            const chatJid = getChatJid(params.chat_jid || "web:default");
            if (!String(chatJid || "").startsWith("web:")) {
                return buildResultError("The staged dashboard widget is only available in the web UI.");
            }
            const content = params.content?.trim() || "Live dashboard ready. Open the widget to inspect current internal state.";
            const block = createDashboardWidgetBlock(params.widget_id?.trim() || undefined);
            const result = postMessagesToolMessage({
                action: "post",
                type: "agent",
                chat_jid: chatJid,
                content,
                content_blocks: [block],
            }, chatJid);
            return {
                ...result,
                details: {
                    ...(isRecord(result.details) ? result.details : {}),
                    tool: "send_dashboard_widget",
                    widget_id: block.widget_id,
                    chat_jid: chatJid,
                },
            };
        },
    });
};
