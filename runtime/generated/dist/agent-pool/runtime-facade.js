/**
 * agent-pool/runtime-facade.ts – Lightweight runtime/status/control helpers for AgentPool.
 *
 * Extracts session-status lookups, model registry access, slash/control routing,
 * and queued-message mutations so AgentPool can remain a thinner orchestrator.
 */
import { applyControlCommand } from "../agent-control/index.js";
import { detectChannel } from "../router.js";
import { executeSlashCommand } from "./slash-command.js";
import { getProviderUsage } from "./provider-usage.js";
import { resolveModelLabel } from "../utils/model-utils.js";
import { withChatContext } from "../core/chat-context.js";
/**
 * Provides session-runtime helpers that do not belong in the core prompt loop.
 */
export class AgentRuntimeFacade {
    options;
    constructor(options) {
        this.options = options;
    }
    async applyControlCommand(chatJid, command) {
        const session = await this.options.getOrCreate(chatJid);
        const channel = detectChannel(chatJid);
        const apply = this.options.applyControlCommandFn ?? applyControlCommand;
        return await withChatContext(chatJid, channel, () => apply(session, this.options.modelRegistry, command));
    }
    async getCurrentModelLabel(chatJid) {
        const session = await this.options.getOrCreate(chatJid);
        const model = session.model;
        return model ? `${model.provider}/${model.id}` : null;
    }
    async getAvailableModels(chatJid) {
        const session = await this.options.getOrCreate(chatJid);
        const registry = session.modelRegistry ?? this.options.modelRegistry;
        const available = registry.getAvailable();
        const models = available.map((model) => `${model.provider}/${model.id}`);
        const currentModel = session.model ? `${session.model.provider}/${session.model.id}` : null;
        const thinkingLevel = session.thinkingLevel ?? null;
        const supportsThinking = typeof session.supportsThinking === "function"
            ? session.supportsThinking()
            : Boolean(session.model?.reasoning);
        const providerUsage = session.model?.provider
            ? await getProviderUsage(this.options.authStorage, session.model.provider)
            : null;
        return {
            current: currentModel,
            models,
            thinking_level: thinkingLevel,
            supports_thinking: supportsThinking,
            provider_usage: providerUsage,
        };
    }
    getContextUsageForChat(chatJid) {
        const entry = this.options.pool.get(chatJid);
        if (!entry)
            return null;
        return entry.session.getContextUsage() ?? null;
    }
    async saveSessionPosition(chatJid) {
        const session = await this.options.getOrCreate(chatJid);
        return session.sessionManager.getLeafId();
    }
    async restoreSessionPosition(chatJid, leafId) {
        if (leafId === null)
            return;
        const session = await this.options.getOrCreate(chatJid);
        const currentLeaf = session.sessionManager.getLeafId();
        if (currentLeaf === leafId)
            return;
        try {
            await session.navigateTree(leafId);
        }
        catch (err) {
            this.options.onError?.("Failed to restore session position", {
                operation: "restore_session_position",
                chatJid,
                leafId,
                err,
            });
        }
    }
    hasProviderModels(provider) {
        return this.options.modelRegistry.getAll().some((model) => model.provider === provider);
    }
    registerModelProvider(providerName, config) {
        this.options.modelRegistry.registerProvider(providerName, config);
    }
    resolveModelInput(input) {
        return resolveModelLabel(this.options.modelRegistry, input);
    }
    isStreaming(chatJid) {
        return this.options.pool.get(chatJid)?.session.isStreaming ?? false;
    }
    isActive(chatJid) {
        const session = this.options.pool.get(chatJid)?.session;
        if (!session)
            return false;
        return Boolean(session.isStreaming || session.isCompacting || session.isRetrying || session.isBashRunning);
    }
    async queueStreamingMessage(chatJid, text, behavior) {
        const session = await this.options.getOrCreate(chatJid);
        if (!session.isStreaming)
            return { queued: false };
        const channel = detectChannel(chatJid);
        try {
            return await withChatContext(chatJid, channel, async () => {
                await session.prompt(text, { streamingBehavior: behavior });
                return { queued: true };
            });
        }
        catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            return { queued: false, error: message };
        }
    }
    async removeQueuedFollowupMessage(chatJid, queuedContent) {
        const session = await this.options.getOrCreate(chatJid);
        if (!session.isStreaming)
            return false;
        const followups = [...session.getFollowUpMessages()];
        if (followups.length === 0)
            return false;
        const normalized = typeof queuedContent === "string" ? queuedContent.trim() : "";
        let removeIndex = -1;
        if (normalized) {
            removeIndex = followups.findIndex((item) => item === queuedContent || item.trim() === normalized);
        }
        if (removeIndex < 0)
            removeIndex = 0;
        const channel = detectChannel(chatJid);
        try {
            return await withChatContext(chatJid, channel, async () => {
                const cleared = session.clearQueue();
                const nextFollowups = cleared.followUp.filter((_, idx) => idx !== removeIndex);
                for (const steer of cleared.steering) {
                    await session.prompt(steer, { streamingBehavior: "steer" });
                }
                for (const followup of nextFollowups) {
                    await session.prompt(followup, { streamingBehavior: "followUp" });
                }
                return true;
            });
        }
        catch (err) {
            this.options.onWarn?.("Failed to remove queued follow-up", {
                operation: "remove_queued_follow_up",
                chatJid,
                err,
            });
            return false;
        }
    }
    async applySlashCommand(chatJid, rawText) {
        this.options.clearAttachments(chatJid);
        const session = await this.options.getOrCreate(chatJid);
        const channel = detectChannel(chatJid);
        const exec = this.options.executeSlashCommandFn ?? executeSlashCommand;
        const result = await withChatContext(chatJid, channel, () => exec(session, chatJid, rawText));
        this.options.clearAttachments(chatJid);
        return result;
    }
}
