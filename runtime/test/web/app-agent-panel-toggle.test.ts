import { expect, test } from 'bun:test';

import { handleAgentPanelToggle } from '../../web/src/ui/app-agent-panel-toggle.js';

test('handleAgentPanelToggle ignores unsupported panel keys', async () => {
  let thoughtUpdates = 0;

  await handleAgentPanelToggle({
    panelKey: 'status',
    expanded: true,
    currentTurnIdRef: { current: 'turn-1' },
    thoughtExpandedRef: { current: false },
    draftExpandedRef: { current: false },
    setAgentThoughtVisibility: async () => ({}),
    getAgentThought: async () => ({ text: 'ignored' }),
    thoughtBufferRef: { current: '' },
    draftBufferRef: { current: '' },
    setAgentThought: () => {
      thoughtUpdates += 1;
    },
    setAgentDraft: () => {},
  });

  expect(thoughtUpdates).toBe(0);
});

test('handleAgentPanelToggle expands thought panel and restores full text', async () => {
  const thoughtExpandedRef = { current: false };
  const thoughtBufferRef = { current: '' };
  const visibilityCalls: Array<{ panel: string; expanded: boolean }> = [];
  let thoughtState: Record<string, unknown> | null = { text: '', totalLines: 0 };

  await handleAgentPanelToggle({
    panelKey: 'thought',
    expanded: true,
    currentTurnIdRef: { current: 'turn-1' },
    thoughtExpandedRef,
    draftExpandedRef: { current: false },
    setAgentThoughtVisibility: async (_turnId, panel, expanded) => {
      visibilityCalls.push({ panel, expanded });
      return {};
    },
    getAgentThought: async () => ({ text: 'full thought', total_lines: 12 }),
    thoughtBufferRef,
    draftBufferRef: { current: '' },
    setAgentThought: (next) => {
      thoughtState = typeof next === 'function' ? next(thoughtState) : next;
    },
    setAgentDraft: () => {},
  });

  expect(thoughtExpandedRef.current).toBe(true);
  expect(visibilityCalls).toEqual([{ panel: 'thought', expanded: true }]);
  expect(thoughtBufferRef.current).toBe('full thought');
  expect(thoughtState).toMatchObject({ fullText: 'full thought', totalLines: 12 });
});

test('handleAgentPanelToggle expands draft panel and restores draft preview', async () => {
  const draftExpandedRef = { current: false };
  const draftBufferRef = { current: '' };
  let draftState: Record<string, unknown> | null = { text: '', totalLines: 0 };

  await handleAgentPanelToggle({
    panelKey: 'draft',
    expanded: true,
    currentTurnIdRef: { current: 'turn-2' },
    thoughtExpandedRef: { current: false },
    draftExpandedRef,
    setAgentThoughtVisibility: async () => ({}),
    getAgentThought: async () => ({ text: 'full draft', total_lines: 5 }),
    thoughtBufferRef: { current: '' },
    draftBufferRef,
    setAgentThought: () => {},
    setAgentDraft: (next) => {
      draftState = typeof next === 'function' ? next(draftState) : next;
    },
  });

  expect(draftExpandedRef.current).toBe(true);
  expect(draftBufferRef.current).toBe('full draft');
  expect(draftState).toMatchObject({ fullText: 'full draft', totalLines: 5 });
});
