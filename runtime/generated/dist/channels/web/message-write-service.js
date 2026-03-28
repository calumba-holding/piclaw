/**
 * web/message-write-service.ts – WebChannel message-write and follow-up coordination seam.
 *
 * Owns construction of the write context used by web message write flows,
 * delegates WebChannel send/widget writes through that context, and keeps
 * queued follow-up placeholder behavior isolated behind a narrower service.
 */
import { postDashboardWidget as postDashboardWidgetMessage } from "./dashboard-widget.js";
import { queueFollowupPlaceholderMessage, replaceQueuedFollowupPlaceholderMessage, sendWebMessage, } from "./message-write-flows.js";
export function createMessageWriteContext(deps) {
    return {
        defaultAgentId: deps.defaultAgentId,
        store: {
            storeMessage: (chatJid, content, isBot, mediaIds, options) => deps.storeMessage(chatJid, content, isBot, mediaIds, options),
            replaceMessageContent: (chatJid, rowId, text, mediaIds, contentBlocks, isTerminalAgentReply) => deps.replaceMessageContent(chatJid, rowId, text, mediaIds, contentBlocks, isTerminalAgentReply),
            setMessageThreadToSelf: (messageId) => {
                deps.setMessageThreadToSelf(messageId);
            },
        },
        broadcaster: {
            broadcastAgentResponse: (interaction) => deps.broadcastAgentResponse(interaction),
            broadcastInteractionUpdated: (interaction) => deps.broadcastInteractionUpdated(interaction),
        },
        followups: {
            enqueue: (chatJid, rowId, queuedContent, threadId, queuedAt) => deps.enqueueFollowupPlaceholder(chatJid, rowId, queuedContent, threadId, queuedAt),
        },
    };
}
export class WebMessageWriteService {
    deps;
    context;
    constructor(deps) {
        this.deps = deps;
        this.context = createMessageWriteContext(deps);
    }
    async sendMessage(chatJid, text, options) {
        sendWebMessage(chatJid, text, options, this.context);
    }
    async postDashboardWidget(chatJid, options) {
        await postDashboardWidgetMessage({
            sendMessage: (targetChatJid, text, sendOptions) => this.sendMessage(targetChatJid, text, sendOptions),
        }, {
            chatJid,
            threadId: options?.threadId,
            text: options?.text,
            widgetId: options?.widgetId,
        });
    }
    queueFollowupPlaceholder(chatJid, text, threadId, queuedContent) {
        return queueFollowupPlaceholderMessage(chatJid, text, threadId, (queuedContent || "").trim() || text, this.context);
    }
    replaceQueuedFollowupPlaceholder(chatJid, rowId, text, mediaIds, contentBlocks, threadId, isTerminalAgentReply) {
        return replaceQueuedFollowupPlaceholderMessage(chatJid, rowId, text, mediaIds, contentBlocks, threadId, this.context, isTerminalAgentReply);
    }
}
