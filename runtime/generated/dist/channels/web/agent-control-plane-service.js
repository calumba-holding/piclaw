/**
 * channels/web/agent-control-plane-service.ts – WebChannel control-plane wrapper seam.
 *
 * Owns the queue-state/remove/steer wrappers, branch lifecycle wrappers, and
 * autoresearch status/stop/dismiss wrappers that used to live directly on
 * `channels/web.ts`, preserving the public WebChannel surface while shrinking
 * the coordinator.
 */
import { getInflightMessageId, getMessageThreadRootIdById, } from "../../db.js";
import { createLogger } from "../../utils/logger.js";
import { parseJsonObjectRequest } from "./json-body.js";
const log = createLogger("web");
export function createWebAgentControlPlaneService(channel, defaults) {
    return new WebAgentControlPlaneService({
        defaultChatJid: defaults.defaultChatJid,
        defaultAgentId: defaults.defaultAgentId,
        json: (payload, status = 200) => channel.json(payload, status),
        broadcastEvent: (eventType, data) => channel.broadcastEvent(eventType, data),
        queue: channel.queue,
        agentPool: channel.agentPool,
        queuedFollowupLifecycle: channel.queuedFollowupLifecycle,
        queuePendingSteering: (chatJid, timestamp) => channel.queuePendingSteering(chatJid, timestamp),
        storeMessage: (chatJid, content, isBot, mediaIds, options) => channel.storeMessage(chatJid, content, isBot, mediaIds, options),
        processChat: (chatJid, agentId, threadRootId) => channel.processChat(chatJid, agentId, threadRootId),
    });
}
export class WebAgentControlPlaneService {
    options;
    constructor(options) {
        this.options = options;
    }
    async handleAutoresearchStatus(req) {
        const url = new URL(req.url);
        const chatJid = this.resolveChatJid(url.searchParams.get("chat_jid"));
        try {
            const getAutoresearchWidgetPayload = this.options.getAutoresearchWidgetPayload
                ?? (await import("../../extensions/autoresearch-supervisor.js")).getAutoresearchWidgetPayload;
            return this.options.json(getAutoresearchWidgetPayload(chatJid));
        }
        catch (error) {
            log.warn("Failed to read autoresearch status", {
                operation: "handle_autoresearch_status",
                err: error,
            });
            return this.options.json(null);
        }
    }
    async handleAutoresearchStop(req) {
        const parsed = await parseJsonObjectRequest(req);
        if (!parsed.ok)
            return this.options.json({ error: parsed.error }, 400);
        const payload = parsed.payload;
        const chatJid = this.resolveChatJid(payload.chat_jid);
        try {
            const stopAutoresearchFromWeb = this.options.stopAutoresearchFromWeb
                ?? (await import("../../extensions/autoresearch-supervisor.js")).stopAutoresearchFromWeb;
            const result = await stopAutoresearchFromWeb({
                chat_jid: chatJid,
                generate_report: payload.generate_report !== false,
            });
            return this.options.json({
                status: "ok",
                chat_jid: chatJid,
                result,
            });
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            return this.options.json({ error: message || "Failed to stop autoresearch experiment." }, 500);
        }
    }
    async handleAutoresearchDismiss(req) {
        const parsed = await parseJsonObjectRequest(req);
        if (!parsed.ok)
            return this.options.json({ error: parsed.error }, 400);
        const payload = parsed.payload;
        const chatJid = this.resolveChatJid(payload.chat_jid);
        try {
            const dismissAutoresearchWidget = this.options.dismissAutoresearchWidget
                ?? (await import("../../extensions/autoresearch-supervisor.js")).dismissAutoresearchWidget;
            return this.options.json({
                status: dismissAutoresearchWidget(chatJid) ? "ok" : "noop",
                chat_jid: chatJid,
            });
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            return this.options.json({ error: message || "Failed to dismiss autoresearch panel." }, 500);
        }
    }
    async handleAgentQueueState(req) {
        const url = new URL(req.url);
        const chatJid = this.resolveChatJid(url.searchParams.get("chat_jid"));
        const items = this.options.queuedFollowupLifecycle.listQueuedStateItems(chatJid);
        return this.options.json({
            count: items.length,
            items,
        });
    }
    async handleAgentQueueRemove(req) {
        const parsed = await parseJsonObjectRequest(req);
        if (!parsed.ok)
            return this.options.json({ error: parsed.error }, 400);
        try {
            const payload = parsed.payload;
            const chatJid = this.resolveChatJid(payload.chat_jid);
            const rowId = this.parseRowId(payload.row_id);
            if (rowId === null) {
                return this.options.json({ error: "Missing or invalid row_id" }, 400);
            }
            const { removed } = await this.removeQueuedFollowupForAction(chatJid, rowId);
            if (!removed) {
                return this.options.json({ status: "ok", removed: false, count: this.options.queuedFollowupLifecycle.getQueuedFollowupCount(chatJid) }, 200);
            }
            this.options.broadcastEvent("agent_followup_removed", {
                chat_jid: chatJid,
                row_id: removed.rowId,
                thread_id: removed.threadId ?? null,
            });
            return this.options.json({
                status: "ok",
                removed: true,
                row_id: removed.rowId,
                count: this.options.queuedFollowupLifecycle.getQueuedFollowupCount(chatJid),
            });
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            return this.options.json({ error: message }, 500);
        }
    }
    async handleAgentQueueSteer(req) {
        const parsed = await parseJsonObjectRequest(req);
        if (!parsed.ok)
            return this.options.json({ error: parsed.error }, 400);
        try {
            const payload = parsed.payload;
            const chatJid = this.resolveChatJid(payload.chat_jid);
            const rowId = this.parseRowId(payload.row_id);
            if (rowId === null) {
                return this.options.json({ error: "Missing or invalid row_id" }, 400);
            }
            const { removed } = await this.removeQueuedFollowupForAction(chatJid, rowId);
            if (!removed) {
                return this.options.json({ status: "ok", removed: false, count: this.options.queuedFollowupLifecycle.getQueuedFollowupCount(chatJid) }, 200);
            }
            this.options.broadcastEvent("agent_followup_removed", {
                chat_jid: chatJid,
                row_id: removed.rowId,
                thread_id: removed.threadId ?? null,
            });
            const steerContent = typeof removed.queuedContent === "string" ? removed.queuedContent.trim() : "";
            if (!steerContent) {
                return this.options.json({ status: "ok", removed: true, queued: false, count: this.options.queuedFollowupLifecycle.getQueuedFollowupCount(chatJid) }, 200);
            }
            const isStreaming = typeof this.options.agentPool.isStreaming === "function"
                ? this.options.agentPool.isStreaming(chatJid)
                : false;
            const inflightMessageId = (this.options.getInflightMessageId ?? getInflightMessageId)(chatJid);
            const activeThreadRootId = inflightMessageId
                ? (this.options.getMessageThreadRootIdById ?? getMessageThreadRootIdById)(chatJid, inflightMessageId)
                : null;
            const steerThreadId = removed.threadId ?? activeThreadRootId ?? null;
            const interaction = this.options.storeMessage(chatJid, steerContent, false, removed.mediaIds ?? [], {
                contentBlocks: Array.isArray(removed.contentBlocks) ? removed.contentBlocks : undefined,
                linkPreviews: Array.isArray(removed.linkPreviews) ? removed.linkPreviews : undefined,
                threadId: steerThreadId ?? undefined,
                isSteeringMessage: isStreaming,
            });
            if (!interaction) {
                this.options.queuedFollowupLifecycle.prependQueuedFollowupItem(chatJid, removed);
                this.options.broadcastEvent("agent_followup_queued", {
                    chat_jid: chatJid,
                    thread_id: removed.threadId ?? null,
                    row_id: removed.rowId,
                    content: removed.queuedContent,
                    timestamp: removed.queuedAt,
                });
                return this.options.json({ error: "Failed to store message" }, 500);
            }
            this.options.broadcastEvent("new_post", interaction);
            if (isStreaming && typeof this.options.agentPool.queueStreamingMessage === "function") {
                const steerResult = await this.options.agentPool.queueStreamingMessage(chatJid, steerContent, "steer");
                if (steerResult.queued) {
                    this.options.queuePendingSteering(chatJid, interaction.timestamp);
                    const queuedAt = new Date().toISOString();
                    this.options.broadcastEvent("agent_steer_queued", {
                        chat_jid: chatJid,
                        thread_id: interaction.data?.thread_id ?? steerThreadId ?? null,
                        source: "queued-item",
                        timestamp: queuedAt,
                        content: steerContent,
                    });
                    return this.options.json({
                        status: "ok",
                        removed: true,
                        row_id: removed.rowId,
                        user_message: interaction,
                        thread_id: interaction.data?.thread_id ?? steerThreadId ?? null,
                        queued: "steer",
                        count: this.options.queuedFollowupLifecycle.getQueuedFollowupCount(chatJid),
                    }, 201);
                }
            }
            this.options.queue.enqueue(async () => {
                await this.options.processChat(chatJid, this.options.defaultAgentId, interaction.data?.thread_id ?? interaction.id);
            }, `chat:${chatJid}:${interaction.id}`, `chat:${chatJid}`);
            return this.options.json({
                status: "ok",
                removed: true,
                row_id: removed.rowId,
                user_message: interaction,
                thread_id: interaction.data?.thread_id ?? interaction.id ?? null,
                count: this.options.queuedFollowupLifecycle.getQueuedFollowupCount(chatJid),
            }, 201);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            return this.options.json({ error: message }, 500);
        }
    }
    async handleAgentBranchFork(req) {
        const parsed = await parseJsonObjectRequest(req);
        if (!parsed.ok)
            return this.options.json({ error: parsed.error }, 400);
        const payload = parsed.payload;
        const sourceChatJid = this.resolveChatJid(payload.source_chat_jid);
        const agentName = typeof payload.agent_name === "string" ? payload.agent_name.trim() : "";
        try {
            const branch = await this.options.agentPool.createForkedChatBranch?.(sourceChatJid, {
                agentName: agentName || null,
            });
            if (!branch) {
                return this.options.json({ error: "Branch forking is not available." }, 501);
            }
            return this.options.json({ status: "ok", branch }, 201);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error || "Failed to fork branch.");
            return this.options.json({ error: message || "Failed to fork branch." }, 400);
        }
    }
    async handleAgentBranchRename(req) {
        const parsed = await parseJsonObjectRequest(req);
        if (!parsed.ok)
            return this.options.json({ error: parsed.error }, 400);
        const payload = parsed.payload;
        const chatJid = this.resolveChatJid(payload.chat_jid);
        const hasAgentName = typeof payload.agent_name === "string";
        if (!hasAgentName) {
            return this.options.json({ error: "Missing agent_name" }, 400);
        }
        try {
            const branch = await this.options.agentPool.renameChatBranch?.(chatJid, {
                agentName: payload.agent_name ?? null,
            });
            if (!branch) {
                return this.options.json({ error: "Branch renaming is not available." }, 501);
            }
            return this.options.json({ status: "ok", branch }, 200);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error || "Failed to rename branch.");
            return this.options.json({ error: message || "Failed to rename branch." }, 400);
        }
    }
    async handleAgentBranchPrune(req) {
        const parsed = await parseJsonObjectRequest(req);
        if (!parsed.ok)
            return this.options.json({ error: parsed.error }, 400);
        const payload = parsed.payload;
        const chatJid = this.resolveRequiredChatJid(payload.chat_jid);
        if (!chatJid) {
            return this.options.json({ error: "Missing chat_jid" }, 400);
        }
        try {
            const branch = await this.options.agentPool.pruneChatBranch?.(chatJid);
            if (!branch) {
                return this.options.json({ error: "Branch pruning is not available." }, 501);
            }
            return this.options.json({ status: "ok", branch }, 200);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error || "Failed to prune branch.");
            return this.options.json({ error: message || "Failed to prune branch." }, 400);
        }
    }
    async handleAgentBranchRestore(req) {
        const parsed = await parseJsonObjectRequest(req);
        if (!parsed.ok)
            return this.options.json({ error: parsed.error }, 400);
        const payload = parsed.payload;
        const chatJid = this.resolveRequiredChatJid(payload.chat_jid);
        if (!chatJid) {
            return this.options.json({ error: "Missing chat_jid" }, 400);
        }
        try {
            const branch = await this.options.agentPool.restoreChatBranch?.(chatJid, {
                ...(typeof payload.agent_name === "string" ? { agentName: payload.agent_name } : {}),
            });
            if (!branch) {
                return this.options.json({ error: "Branch restore is not available." }, 501);
            }
            return this.options.json({ status: "ok", branch }, 200);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error || "Failed to restore branch.");
            return this.options.json({ error: message || "Failed to restore branch." }, 400);
        }
    }
    resolveChatJid(chatJid) {
        return typeof chatJid === "string" && chatJid.trim() ? chatJid.trim() : this.options.defaultChatJid;
    }
    resolveRequiredChatJid(chatJid) {
        return typeof chatJid === "string" && chatJid.trim() ? chatJid.trim() : "";
    }
    parseRowId(rawRowId) {
        const rowId = typeof rawRowId === "string" ? Number(rawRowId) : rawRowId;
        return Number.isFinite(rowId) ? Number(rowId) : null;
    }
    async removeQueuedFollowupForAction(chatJid, rowId) {
        return await this.options.queuedFollowupLifecycle.removeQueuedFollowupForAction(chatJid, rowId, {
            removeQueuedFollowupMessage: (queuedChatJid, queuedContent) => this.options.agentPool.removeQueuedFollowupMessage?.(queuedChatJid, queuedContent) ?? false,
        });
    }
}
