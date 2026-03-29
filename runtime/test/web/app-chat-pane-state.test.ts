import { expect, test } from 'bun:test';

import {
  applyChatPaneStateSnapshot,
  captureChatPaneStateSnapshot,
  createEmptyChatPaneState,
} from '../../web/src/ui/app-chat-pane-state.js';

test('createEmptyChatPaneState returns the default per-chat pane snapshot shape', () => {
  expect(createEmptyChatPaneState()).toEqual({
    agentStatus: null,
    agentDraft: { text: '', totalLines: 0 },
    agentPlan: '',
    agentThought: { text: '', totalLines: 0 },
    pendingRequest: null,
    currentTurnId: null,
    steerQueuedTurnId: null,
    isAgentTurnActive: false,
    followupQueueItems: [],
    activeModel: null,
    activeThinkingLevel: null,
    supportsThinking: false,
    activeModelUsage: null,
    contextUsage: null,
    isAgentRunning: false,
    wasAgentActive: false,
    draftBuffer: '',
    thoughtBuffer: '',
    lastAgentEvent: null,
    lastSilenceNotice: 0,
    lastAgentResponse: null,
    currentTurnIdRef: null,
    steerQueuedTurnIdRef: null,
    thoughtExpanded: false,
    draftExpanded: false,
    agentStatusRef: null,
    silentRecovery: { inFlight: false, lastAttemptAt: 0, turnId: null },
  });
});

test('captureChatPaneStateSnapshot clones draft and queue payloads while preserving live refs', () => {
  const agentDraft = { text: 'draft', totalLines: 2 };
  const agentThought = { text: 'thought', totalLines: 3 };
  const followupQueueItems = [{ row_id: '1', content: 'queued' }];
  const pendingRequest = { id: 'req-1' };

  const snapshot = captureChatPaneStateSnapshot({
    agentStatus: { type: 'running' },
    agentDraft,
    agentPlan: 'plan',
    agentThought,
    pendingRequest,
    currentTurnId: 'turn-1',
    steerQueuedTurnId: 'turn-queued',
    isAgentTurnActive: true,
    followupQueueItems,
    activeModel: 'gpt-test',
    activeThinkingLevel: 'high',
    supportsThinking: true,
    activeModelUsage: { input: 12 },
    contextUsage: { percent: 55 },
    isAgentRunning: true,
    wasAgentActive: true,
    draftBuffer: 'draft-buffer',
    thoughtBuffer: 'thought-buffer',
    lastAgentEvent: { event: 'delta' },
    lastSilenceNotice: 42,
    lastAgentResponse: { id: 'post-1' },
    currentTurnIdRef: 'turn-1',
    steerQueuedTurnIdRef: 'turn-queued',
    thoughtExpanded: true,
    draftExpanded: true,
    agentStatusRef: { live: true },
    silentRecovery: { inFlight: true, lastAttemptAt: 9, turnId: 'turn-1' },
  });

  agentDraft.text = 'mutated';
  agentThought.totalLines = 99;
  followupQueueItems[0].content = 'mutated';

  expect(snapshot.agentDraft).toEqual({ text: 'draft', totalLines: 2 });
  expect(snapshot.agentThought).toEqual({ text: 'thought', totalLines: 3 });
  expect(snapshot.followupQueueItems).toEqual([{ row_id: '1', content: 'queued' }]);
  expect(snapshot.pendingRequest).toBe(pendingRequest);
});

test('applyChatPaneStateSnapshot restores refs and setter state from the snapshot', () => {
  const restoredState: Record<string, unknown> = {};
  let timerClears = 0;
  const snapshot = captureChatPaneStateSnapshot({
    agentStatus: { type: 'idle' },
    agentDraft: { text: 'draft', totalLines: 2 },
    agentPlan: 'plan',
    agentThought: { text: 'thought', totalLines: 4 },
    pendingRequest: { id: 'pending-1' },
    currentTurnId: 'turn-2',
    steerQueuedTurnId: 'queued-2',
    isAgentTurnActive: true,
    followupQueueItems: [{ row_id: 'q1', content: 'queued' }],
    activeModel: 'gpt-test',
    activeThinkingLevel: 'high',
    supportsThinking: true,
    activeModelUsage: { output: 4 },
    contextUsage: { percent: 61 },
    isAgentRunning: true,
    wasAgentActive: true,
    draftBuffer: 'draft-buffer',
    thoughtBuffer: 'thought-buffer',
    lastAgentEvent: { type: 'delta' },
    lastSilenceNotice: 7,
    lastAgentResponse: { id: 'post-2' },
    currentTurnIdRef: 'turn-2',
    steerQueuedTurnIdRef: 'queued-2',
    thoughtExpanded: true,
    draftExpanded: true,
    agentStatusRef: { status: 'live' },
    silentRecovery: { inFlight: true, lastAttemptAt: 22, turnId: 'turn-2' },
  });

  const refs = {
    isAgentRunningRef: { current: false },
    wasAgentActiveRef: { current: false },
    lastAgentEventRef: { current: null },
    lastSilenceNoticeRef: { current: 0 },
    draftBufferRef: { current: '' },
    thoughtBufferRef: { current: '' },
    pendingRequestRef: { current: null },
    lastAgentResponseRef: { current: null },
    currentTurnIdRef: { current: null },
    steerQueuedTurnIdRef: { current: null },
    agentStatusRef: { current: null },
    silentRecoveryRef: { current: { inFlight: false, lastAttemptAt: 0, turnId: null } },
    thoughtExpandedRef: { current: false },
    draftExpandedRef: { current: false },
  };

  applyChatPaneStateSnapshot({
    snapshot,
    clearLastActivityTimer: () => {
      timerClears += 1;
    },
    refs,
    setters: {
      setIsAgentTurnActive: (value) => { restoredState.isAgentTurnActive = value; },
      setAgentStatus: (value) => { restoredState.agentStatus = value; },
      setAgentDraft: (value) => { restoredState.agentDraft = value; },
      setAgentPlan: (value) => { restoredState.agentPlan = value; },
      setAgentThought: (value) => { restoredState.agentThought = value; },
      setPendingRequest: (value) => { restoredState.pendingRequest = value; },
      setCurrentTurnId: (value) => { restoredState.currentTurnId = value; },
      setSteerQueuedTurnId: (value) => { restoredState.steerQueuedTurnId = value; },
      setFollowupQueueItems: (value) => { restoredState.followupQueueItems = value; },
      setActiveModel: (value) => { restoredState.activeModel = value; },
      setActiveThinkingLevel: (value) => { restoredState.activeThinkingLevel = value; },
      setSupportsThinking: (value) => { restoredState.supportsThinking = value; },
      setActiveModelUsage: (value) => { restoredState.activeModelUsage = value; },
      setContextUsage: (value) => { restoredState.contextUsage = value; },
    },
  });

  snapshot.agentDraft.text = 'mutated';
  snapshot.followupQueueItems[0].content = 'mutated';

  expect(timerClears).toBe(1);
  expect(refs.isAgentRunningRef.current).toBe(true);
  expect(refs.wasAgentActiveRef.current).toBe(true);
  expect(refs.currentTurnIdRef.current).toBe('turn-2');
  expect(refs.silentRecoveryRef.current).toEqual({ inFlight: true, lastAttemptAt: 22, turnId: 'turn-2' });
  expect(restoredState).toMatchObject({
    isAgentTurnActive: true,
    agentPlan: 'plan',
    currentTurnId: 'turn-2',
    steerQueuedTurnId: 'queued-2',
    activeModel: 'gpt-test',
    activeThinkingLevel: 'high',
    supportsThinking: true,
  });
  expect(restoredState.agentDraft).toEqual({ text: 'draft', totalLines: 2 });
  expect(restoredState.followupQueueItems).toEqual([{ row_id: 'q1', content: 'queued' }]);
});

test('applyChatPaneStateSnapshot falls back to an empty snapshot when no prior chat state exists', () => {
  const restoredState: Record<string, unknown> = {};
  const refs = {
    isAgentRunningRef: { current: true },
    wasAgentActiveRef: { current: true },
    lastAgentEventRef: { current: { type: 'delta' } },
    lastSilenceNoticeRef: { current: 5 },
    draftBufferRef: { current: 'draft' },
    thoughtBufferRef: { current: 'thought' },
    pendingRequestRef: { current: { id: 'pending' } },
    lastAgentResponseRef: { current: { id: 'post' } },
    currentTurnIdRef: { current: 'turn' },
    steerQueuedTurnIdRef: { current: 'queued' },
    agentStatusRef: { current: { type: 'running' } },
    silentRecoveryRef: { current: { inFlight: true, lastAttemptAt: 4, turnId: 'turn' } },
    thoughtExpandedRef: { current: true },
    draftExpandedRef: { current: true },
  };

  applyChatPaneStateSnapshot({
    snapshot: null,
    refs,
    setters: {
      setIsAgentTurnActive: (value) => { restoredState.isAgentTurnActive = value; },
      setAgentStatus: (value) => { restoredState.agentStatus = value; },
      setAgentDraft: (value) => { restoredState.agentDraft = value; },
      setAgentPlan: (value) => { restoredState.agentPlan = value; },
      setAgentThought: (value) => { restoredState.agentThought = value; },
      setPendingRequest: (value) => { restoredState.pendingRequest = value; },
      setCurrentTurnId: (value) => { restoredState.currentTurnId = value; },
      setSteerQueuedTurnId: (value) => { restoredState.steerQueuedTurnId = value; },
      setFollowupQueueItems: (value) => { restoredState.followupQueueItems = value; },
      setActiveModel: (value) => { restoredState.activeModel = value; },
      setActiveThinkingLevel: (value) => { restoredState.activeThinkingLevel = value; },
      setSupportsThinking: (value) => { restoredState.supportsThinking = value; },
      setActiveModelUsage: (value) => { restoredState.activeModelUsage = value; },
      setContextUsage: (value) => { restoredState.contextUsage = value; },
    },
  });

  expect(refs.isAgentRunningRef.current).toBe(false);
  expect(refs.pendingRequestRef.current).toBeNull();
  expect(refs.silentRecoveryRef.current).toEqual({ inFlight: false, lastAttemptAt: 0, turnId: null });
  expect(restoredState).toEqual({
    isAgentTurnActive: false,
    agentStatus: null,
    agentDraft: { text: '', totalLines: 0 },
    agentPlan: '',
    agentThought: { text: '', totalLines: 0 },
    pendingRequest: null,
    currentTurnId: null,
    steerQueuedTurnId: null,
    followupQueueItems: [],
    activeModel: null,
    activeThinkingLevel: null,
    supportsThinking: false,
    activeModelUsage: null,
    contextUsage: null,
  });
});
