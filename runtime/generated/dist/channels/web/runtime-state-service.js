/**
 * channels/web/runtime-state-service.ts – WebChannel recovery/resume wiring and runtime state delegation.
 *
 * Owns the narrow seam around restart recovery, resume context construction,
 * persisted agent-status state, pending steering, and streamed thought/draft
 * buffer delegation so `channels/web.ts` can stay focused on request/runtime
 * orchestration without changing the public WebChannel API.
 */
import { AgentBuffers } from "./agent-buffers.js";
import { AgentStatusStore } from "./agent-status-store.js";
import { WebChannelState } from "./channel-state.js";
import { getThreadRootId as getThreadRootIdForChat, resumeChat as resumeWebChat, skipFailedOnModelSwitch as skipFailedOnModelSwitchForChat, } from "./chat-run-control.js";
import { PendingSteeringStore } from "./pending-steering.js";
import { recoverInflightRuns as recoverWebInflightRuns, resumePendingChats as resumeWebPendingChats, } from "./recovery.js";
/**
 * Dedicated seam for WebChannel recovery/resume wiring and runtime state.
 *
 * WebChannel keeps the same public methods; they now forward into this service.
 */
export class WebChannelRuntimeStateService {
    callbacks;
    options;
    state;
    pendingSteeringStore;
    agentStatusStore;
    agentBuffers;
    constructor(callbacks, options, deps = {}) {
        this.callbacks = callbacks;
        this.options = options;
        this.state = deps.state ?? new WebChannelState(options.stateKey);
        this.pendingSteeringStore = deps.pendingSteeringStore ?? new PendingSteeringStore();
        this.agentStatusStore = deps.agentStatusStore ?? new AgentStatusStore(this.state);
        this.agentBuffers = deps.agentBuffers ?? new AgentBuffers();
    }
    getResumeChatContext() {
        return {
            defaultAgentId: this.options.defaultAgentId,
            enqueue: (task, key, laneKey) => this.callbacks.enqueue(task, key, laneKey),
            processChat: (chatJid, agentId, threadRootId) => this.callbacks.processChat(chatJid, agentId, threadRootId),
            getChatCursor: (chatJid) => this.callbacks.getChatCursor(chatJid),
        };
    }
    getRecoveryContext() {
        return {
            assistantName: this.callbacks.getAssistantName(),
            defaultAgentId: this.options.defaultAgentId,
            enqueue: (task, key, laneKey) => this.callbacks.enqueue(task, key, laneKey),
            processChat: (chatJid, agentId, threadRootId) => this.callbacks.processChat(chatJid, agentId, threadRootId ?? undefined),
        };
    }
    getThreadRootId(chatJid, messageId, store) {
        return getThreadRootIdForChat(chatJid, messageId, store);
    }
    resumeChat(chatJid, threadRootId) {
        resumeWebChat(chatJid, threadRootId, this.getResumeChatContext());
    }
    skipFailedOnModelSwitch(chatJid, store) {
        skipFailedOnModelSwitchForChat(chatJid, store);
    }
    recoverInflightRuns(store) {
        recoverWebInflightRuns(this.getRecoveryContext(), store);
    }
    resumePendingChats(chatJid, store) {
        resumeWebPendingChats(this.getRecoveryContext(), chatJid, store);
    }
    loadState() {
        this.agentStatusStore.load();
    }
    saveState() {
        this.state.save();
    }
    queuePendingSteering(chatJid, timestamp) {
        this.pendingSteeringStore.queue(chatJid, timestamp);
    }
    consumePendingSteering(chatJid) {
        return this.pendingSteeringStore.consumeLatest(chatJid);
    }
    updateAgentStatus(chatJid, status) {
        this.agentStatusStore.update(chatJid, status);
    }
    getAgentStatus(chatJid) {
        return this.agentStatusStore.get(chatJid);
    }
    setPanelExpanded(turnId, panel, expanded) {
        this.agentBuffers.setPanelExpanded(turnId, panel, expanded);
    }
    isPanelExpanded(turnId, panel) {
        return this.agentBuffers.isPanelExpanded(turnId, panel);
    }
    updateThoughtBuffer(turnId, text, totalLines) {
        this.agentBuffers.updateBuffer(turnId, "thought", text, totalLines);
    }
    updateDraftBuffer(turnId, text, totalLines) {
        this.agentBuffers.updateBuffer(turnId, "draft", text, totalLines);
    }
    getBuffer(turnId, panel) {
        return this.agentBuffers.getBuffer(turnId, panel);
    }
}
