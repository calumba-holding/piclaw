/**
 * channels/web/runtime-state-service.ts – WebChannel recovery/resume wiring and runtime state delegation.
 *
 * Owns the narrow seam around restart recovery, resume context construction,
 * persisted agent-status state, pending steering, and streamed thought/draft
 * buffer delegation so `channels/web.ts` can stay focused on request/runtime
 * orchestration without changing the public WebChannel API.
 */

import type { WebAgentBufferEntry } from "../agent/agent-buffers.js";
import { AgentBuffers } from "../agent/agent-buffers.js";
import { AgentStatusStore } from "../agent/agent-status-store.js";
import { WebChannelState } from "./channel-state.js";
import {
  getThreadRootId as getThreadRootIdForChat,
  resumeChat as resumeWebChat,
  skipFailedOnModelSwitch as skipFailedOnModelSwitchForChat,
  type ChatRunControlStore,
  type ResumeChatContext,
} from "./chat-run-control.js";
import { PendingSteeringStore } from "./pending-steering.js";
import {
  recoverInflightRuns as recoverWebInflightRuns,
  resumePendingChats as resumeWebPendingChats,
  type WebRecoveryContext,
  type WebRecoveryStore,
} from "./recovery.js";

/** Runtime callbacks required to bridge recovery/resume helpers back into WebChannel orchestration. */
export interface WebChannelRuntimeStateCallbacks {
  getAssistantName(): string;
  getChatCursor(chatJid: string): string;
  enqueue(task: () => Promise<void>, key: string, laneKey?: string): void;
  processChat(chatJid: string, agentId: string, threadRootId?: number | null): Promise<void>;
}

/** Fixed options for a WebChannel runtime-state service instance. */
export interface WebChannelRuntimeStateOptions {
  defaultAgentId: string;
  stateKey: string;
}

interface WebChannelStateStoreLike {
  load(): void;
  save(): void;
  setAgentStatus(chatJid: string, status: Record<string, unknown> | null): void;
  getAgentStatuses(): Record<string, Record<string, unknown>>;
}

interface PendingSteeringStoreLike {
  queue(chatJid: string, timestamp: string | undefined): void;
  consumeLatest(chatJid: string): string | null;
}

interface AgentStatusStoreLike {
  load(): void;
  update(chatJid: string, status: Record<string, unknown>): void;
  get(chatJid: string): Record<string, unknown> | null;
}

interface AgentBuffersLike {
  setPanelExpanded(turnId: string, panel: "thought" | "draft", expanded: boolean): void;
  isPanelExpanded(turnId: string, panel: "thought" | "draft"): boolean;
  updateBuffer(turnId: string, panel: "thought" | "draft", text: string, totalLines: number): void;
  getBuffer(turnId: string, panel: "thought" | "draft"): WebAgentBufferEntry | undefined;
}

/** Optional injected stores for seam-level tests. */
export interface WebChannelRuntimeStateServiceDeps {
  state?: WebChannelStateStoreLike;
  pendingSteeringStore?: PendingSteeringStoreLike;
  agentStatusStore?: AgentStatusStoreLike;
  agentBuffers?: AgentBuffersLike;
}

/**
 * Dedicated seam for WebChannel recovery/resume wiring and runtime state.
 *
 * WebChannel keeps the same public methods; they now forward into this service.
 */
export class WebChannelRuntimeStateService {
  private readonly state: WebChannelStateStoreLike;
  private readonly pendingSteeringStore: PendingSteeringStoreLike;
  private readonly agentStatusStore: AgentStatusStoreLike;
  private readonly agentBuffers: AgentBuffersLike;

  constructor(
    private readonly callbacks: WebChannelRuntimeStateCallbacks,
    private readonly options: WebChannelRuntimeStateOptions,
    deps: WebChannelRuntimeStateServiceDeps = {}
  ) {
    this.state = deps.state ?? new WebChannelState(options.stateKey);
    this.pendingSteeringStore = deps.pendingSteeringStore ?? new PendingSteeringStore();
    this.agentStatusStore = deps.agentStatusStore ?? new AgentStatusStore(this.state);
    this.agentBuffers = deps.agentBuffers ?? new AgentBuffers();
  }

  private getResumeChatContext(): ResumeChatContext {
    return {
      defaultAgentId: this.options.defaultAgentId,
      enqueue: (task, key, laneKey) => this.callbacks.enqueue(task, key, laneKey),
      processChat: (chatJid, agentId, threadRootId) => this.callbacks.processChat(chatJid, agentId, threadRootId),
      getChatCursor: (chatJid) => this.callbacks.getChatCursor(chatJid),
    };
  }

  private getRecoveryContext(): WebRecoveryContext {
    return {
      assistantName: this.callbacks.getAssistantName(),
      defaultAgentId: this.options.defaultAgentId,
      enqueue: (task, key, laneKey) => this.callbacks.enqueue(task, key, laneKey),
      processChat: (chatJid, agentId, threadRootId) =>
        this.callbacks.processChat(chatJid, agentId, threadRootId ?? undefined),
    };
  }

  getThreadRootId(chatJid: string, messageId: string, store?: ChatRunControlStore): number | null {
    return getThreadRootIdForChat(chatJid, messageId, store);
  }

  resumeChat(chatJid: string, threadRootId?: number | null): void {
    resumeWebChat(chatJid, threadRootId, this.getResumeChatContext());
  }

  skipFailedOnModelSwitch(chatJid: string, store?: ChatRunControlStore): void {
    skipFailedOnModelSwitchForChat(chatJid, store);
  }

  recoverInflightRuns(store?: WebRecoveryStore): void {
    recoverWebInflightRuns(this.getRecoveryContext(), store);
  }

  resumePendingChats(chatJid?: string, store?: WebRecoveryStore): void {
    resumeWebPendingChats(this.getRecoveryContext(), chatJid, store);
  }

  loadState(): void {
    this.agentStatusStore.load();
  }

  saveState(): void {
    this.state.save();
  }

  queuePendingSteering(chatJid: string, timestamp: string | undefined): void {
    this.pendingSteeringStore.queue(chatJid, timestamp);
  }

  consumePendingSteering(chatJid: string): string | null {
    return this.pendingSteeringStore.consumeLatest(chatJid);
  }

  updateAgentStatus(chatJid: string, status: Record<string, unknown>): void {
    this.agentStatusStore.update(chatJid, status);
  }

  getAgentStatus(chatJid: string): Record<string, unknown> | null {
    return this.agentStatusStore.get(chatJid);
  }

  setPanelExpanded(turnId: string, panel: "thought" | "draft", expanded: boolean): void {
    this.agentBuffers.setPanelExpanded(turnId, panel, expanded);
  }

  isPanelExpanded(turnId: string, panel: "thought" | "draft"): boolean {
    return this.agentBuffers.isPanelExpanded(turnId, panel);
  }

  updateThoughtBuffer(turnId: string, text: string, totalLines: number): void {
    this.agentBuffers.updateBuffer(turnId, "thought", text, totalLines);
  }

  updateDraftBuffer(turnId: string, text: string, totalLines: number): void {
    this.agentBuffers.updateBuffer(turnId, "draft", text, totalLines);
  }

  getBuffer(turnId: string, panel: "thought" | "draft"): WebAgentBufferEntry | undefined {
    return this.agentBuffers.getBuffer(turnId, panel);
  }
}
