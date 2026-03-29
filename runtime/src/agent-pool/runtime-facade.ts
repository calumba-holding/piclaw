/**
 * agent-pool/runtime-facade.ts – Lightweight runtime/status/control helpers for AgentPool.
 *
 * Extracts session-status lookups, model registry access, slash/control routing,
 * and queued-message mutations so AgentPool can remain a thinner orchestrator.
 */

import type { AgentSession, ModelRegistry, AuthStorage } from "@mariozechner/pi-coding-agent";

import { applyControlCommand, type AgentControlCommand, type AgentControlResult } from "../agent-control/index.js";
import { detectChannel } from "../router.js";
import { executeSlashCommand } from "./slash-command.js";
import { getProviderUsage } from "./provider-usage.js";
import { resolveModelLabel } from "../utils/model-utils.js";
import { withChatContext } from "../core/chat-context.js";
import type { PoolEntry } from "./session-manager.js";

/** Shape returned by available-model inspection. */
export interface AvailableModelsResult {
  current: string | null;
  models: string[];
  thinking_level: string | null;
  supports_thinking: boolean;
  provider_usage: Awaited<ReturnType<typeof getProviderUsage>>;
}

/** Dependencies required by AgentRuntimeFacade. */
export interface AgentRuntimeFacadeOptions {
  pool: Map<string, PoolEntry>;
  getOrCreate: (chatJid: string) => Promise<AgentSession>;
  modelRegistry: ModelRegistry;
  authStorage: AuthStorage;
  clearAttachments: (chatJid: string) => void;
  onWarn?: (message: string, details: Record<string, unknown>) => void;
  onError?: (message: string, details: Record<string, unknown>) => void;
  applyControlCommandFn?: typeof applyControlCommand;
  executeSlashCommandFn?: typeof executeSlashCommand;
}

/**
 * Provides session-runtime helpers that do not belong in the core prompt loop.
 */
export class AgentRuntimeFacade {
  constructor(private readonly options: AgentRuntimeFacadeOptions) {}

  async applyControlCommand(chatJid: string, command: AgentControlCommand): Promise<AgentControlResult> {
    const session = await this.options.getOrCreate(chatJid);
    const channel = detectChannel(chatJid);
    const apply = this.options.applyControlCommandFn ?? applyControlCommand;
    return await withChatContext(chatJid, channel, () => apply(session, this.options.modelRegistry, command));
  }

  async getCurrentModelLabel(chatJid: string): Promise<string | null> {
    const session = await this.options.getOrCreate(chatJid);
    const model = session.model;
    return model ? `${model.provider}/${model.id}` : null;
  }

  async getAvailableModels(chatJid: string): Promise<AvailableModelsResult> {
    const session = await this.options.getOrCreate(chatJid);
    const registry = (session as AgentSession & { modelRegistry?: ModelRegistry }).modelRegistry ?? this.options.modelRegistry;
    const available = registry.getAvailable();
    const models = available.map((model) => `${model.provider}/${model.id}`);
    const currentModel = session.model ? `${session.model.provider}/${session.model.id}` : null;
    const thinkingLevel = session.thinkingLevel ?? null;
    const supportsThinking = typeof (session as AgentSession & { supportsThinking?: () => boolean }).supportsThinking === "function"
      ? (session as AgentSession & { supportsThinking: () => boolean }).supportsThinking()
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

  getContextUsageForChat(chatJid: string): {
    tokens: number | null;
    contextWindow: number;
    percent: number | null;
  } | null {
    const entry = this.options.pool.get(chatJid);
    if (!entry) return null;
    return entry.session.getContextUsage() ?? null;
  }

  async saveSessionPosition(chatJid: string): Promise<string | null> {
    const session = await this.options.getOrCreate(chatJid);
    return session.sessionManager.getLeafId();
  }

  async restoreSessionPosition(chatJid: string, leafId: string | null): Promise<void> {
    if (leafId === null) return;
    const session = await this.options.getOrCreate(chatJid);
    const currentLeaf = session.sessionManager.getLeafId();
    if (currentLeaf === leafId) return;
    try {
      await session.navigateTree(leafId);
    } catch (err) {
      this.options.onError?.("Failed to restore session position", {
        operation: "restore_session_position",
        chatJid,
        leafId,
        err,
      });
    }
  }

  hasProviderModels(provider: string): boolean {
    return this.options.modelRegistry.getAll().some((model) => model.provider === provider);
  }

  registerModelProvider(providerName: string, config: Parameters<ModelRegistry["registerProvider"]>[1]): void {
    this.options.modelRegistry.registerProvider(providerName, config);
  }

  resolveModelInput(input: string): { model?: string; error?: string } {
    return resolveModelLabel(this.options.modelRegistry, input);
  }

  isStreaming(chatJid: string): boolean {
    return this.options.pool.get(chatJid)?.session.isStreaming ?? false;
  }

  isActive(chatJid: string): boolean {
    const session = this.options.pool.get(chatJid)?.session;
    if (!session) return false;
    return Boolean(session.isStreaming || session.isCompacting || session.isRetrying || session.isBashRunning);
  }

  async queueStreamingMessage(
    chatJid: string,
    text: string,
    behavior: "steer" | "followUp",
  ): Promise<{ queued: boolean; error?: string }> {
    const session = await this.options.getOrCreate(chatJid);
    if (!session.isStreaming) return { queued: false };

    const channel = detectChannel(chatJid);
    try {
      return await withChatContext(chatJid, channel, async () => {
        await session.prompt(text, { streamingBehavior: behavior });
        return { queued: true };
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      return { queued: false, error: message };
    }
  }

  async removeQueuedFollowupMessage(chatJid: string, queuedContent?: string): Promise<boolean> {
    const session = await this.options.getOrCreate(chatJid);
    if (!session.isStreaming) return false;

    const followups = [...session.getFollowUpMessages()];
    if (followups.length === 0) return false;

    const normalized = typeof queuedContent === "string" ? queuedContent.trim() : "";
    let removeIndex = -1;
    if (normalized) {
      removeIndex = followups.findIndex((item) => item === queuedContent || item.trim() === normalized);
    }
    if (removeIndex < 0) removeIndex = 0;

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
    } catch (err) {
      this.options.onWarn?.("Failed to remove queued follow-up", {
        operation: "remove_queued_follow_up",
        chatJid,
        err,
      });
      return false;
    }
  }

  async applySlashCommand(chatJid: string, rawText: string): Promise<AgentControlResult> {
    this.options.clearAttachments(chatJid);
    const session = await this.options.getOrCreate(chatJid);
    const channel = detectChannel(chatJid);
    const exec = this.options.executeSlashCommandFn ?? executeSlashCommand;
    const result = await withChatContext(chatJid, channel, () => exec(session, chatJid, rawText));
    this.options.clearAttachments(chatJid);
    return result;
  }
}
