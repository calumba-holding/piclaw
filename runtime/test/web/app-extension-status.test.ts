import { expect, test } from 'bun:test';

import {
  addPendingPanelAction,
  applyAutoresearchStatusPayload,
  applyStatusPanelWidgetEvent,
  clearPendingPanelActionPrefix,
  createPendingPanelActionKey,
  findStatusPanel,
  removePendingPanelAction,
  runExtensionStatusPanelAction,
  shouldClearPendingPanelActions,
} from '../../web/src/ui/app-extension-status.js';

function createStatusPanelPayload(overrides: Record<string, unknown> = {}) {
  return {
    key: 'autoresearch',
    content: [
      {
        type: 'status_panel',
        panel: { state: 'running', title: 'Autoresearch' },
      },
    ],
    options: {},
    ...overrides,
  };
}

test('findStatusPanel extracts the first status-panel payload', () => {
  expect(findStatusPanel(createStatusPanelPayload())).toEqual({ state: 'running', title: 'Autoresearch' });
  expect(findStatusPanel({ content: [{ type: 'other', panel: { nope: true } }] } as any)).toBeNull();
});

test('applyAutoresearchStatusPayload stores or removes the autoresearch panel entry', () => {
  const previous = new Map<string, any>([['autoresearch', { state: 'idle' }]]);
  const added = applyAutoresearchStatusPayload(previous, createStatusPanelPayload());
  expect(added.get('autoresearch')).toEqual({ state: 'running', title: 'Autoresearch' });

  const removed = applyAutoresearchStatusPayload(added, { key: null, content: [] } as any);
  expect(removed.has('autoresearch')).toBe(false);
});

test('applyStatusPanelWidgetEvent updates the keyed panel and clears when removed', () => {
  const previous = new Map<string, any>([['autoresearch', { state: 'running' }]]);
  const updated = applyStatusPanelWidgetEvent(previous, createStatusPanelPayload({ key: 'job:1' }));
  expect(updated.get('job:1')).toEqual({ state: 'running', title: 'Autoresearch' });

  const removed = applyStatusPanelWidgetEvent(updated, createStatusPanelPayload({ key: 'job:1', options: { remove: true } }));
  expect(removed.has('job:1')).toBe(false);
});

test('pending panel action helpers add, remove, and clear prefixed keys without disturbing others', () => {
  const pendingKey = createPendingPanelActionKey('autoresearch', 'stop');
  const added = addPendingPanelAction(new Set<string>(), 'autoresearch', 'stop');
  expect(Array.from(added)).toEqual([pendingKey]);
  expect(addPendingPanelAction(added, 'autoresearch', 'stop')).toBe(added);

  const mixed = addPendingPanelAction(added, 'other', 'dismiss');
  const cleared = clearPendingPanelActionPrefix(mixed, 'autoresearch');
  expect(Array.from(cleared)).toEqual(['other:dismiss']);
  expect(removePendingPanelAction(cleared, 'missing')).toBe(cleared);
  expect(Array.from(removePendingPanelAction(cleared, 'other:dismiss'))).toEqual([]);
});

test('shouldClearPendingPanelActions follows remove and non-running panel states', () => {
  expect(shouldClearPendingPanelActions(createStatusPanelPayload())).toBe(false);
  expect(shouldClearPendingPanelActions(createStatusPanelPayload({ content: [{ type: 'status_panel', panel: { state: 'done' } }] }))).toBe(true);
  expect(shouldClearPendingPanelActions(createStatusPanelPayload({ options: { remove: true } }))).toBe(true);
});

test('runExtensionStatusPanelAction executes supported autoresearch panel actions', async () => {
  const calls: string[] = [];
  const copyResult = await runExtensionStatusPanelAction({
    panel: { tmux_command: 'tmux attach -t auto' },
    action: { key: 'copy', action_type: 'autoresearch.copy_tmux' },
    currentChatJid: 'web:chat',
    stopAutoresearch: async () => {
      calls.push('stop');
    },
    dismissAutoresearch: async () => {
      calls.push('dismiss');
    },
    writeClipboard: async (text: string) => {
      calls.push(`copy:${text}`);
    },
  });
  expect(copyResult).toEqual({
    refreshAutoresearchStatus: false,
    toast: {
      title: 'Copied',
      detail: 'tmux command copied to clipboard.',
      kind: 'success',
    },
  });

  const stopResult = await runExtensionStatusPanelAction({
    panel: {},
    action: { key: 'stop', action_type: 'autoresearch.stop' },
    currentChatJid: 'web:chat',
    stopAutoresearch: async (chatJid: string, options: { generateReport: boolean }) => {
      calls.push(`stop:${chatJid}:${options.generateReport}`);
    },
    dismissAutoresearch: async () => {
      calls.push('dismiss');
    },
    writeClipboard: async () => undefined,
  });
  expect(stopResult).toEqual({ refreshAutoresearchStatus: true });

  const dismissResult = await runExtensionStatusPanelAction({
    panel: {},
    action: { key: 'dismiss', action_type: 'autoresearch.dismiss' },
    currentChatJid: 'web:chat',
    stopAutoresearch: async () => undefined,
    dismissAutoresearch: async (chatJid: string) => {
      calls.push(`dismiss:${chatJid}`);
    },
    writeClipboard: async () => undefined,
  });
  expect(dismissResult).toEqual({ refreshAutoresearchStatus: true });
  expect(calls).toEqual(['copy:tmux attach -t auto', 'stop:web:chat:true', 'dismiss:web:chat']);
});

test('runExtensionStatusPanelAction rejects unsupported or incomplete actions', async () => {
  await expect(runExtensionStatusPanelAction({
    panel: {},
    action: { key: 'copy', action_type: 'autoresearch.copy_tmux' },
    currentChatJid: 'web:chat',
    stopAutoresearch: async () => undefined,
    dismissAutoresearch: async () => undefined,
    writeClipboard: async () => undefined,
  })).rejects.toThrow('No tmux command available.');

  await expect(runExtensionStatusPanelAction({
    panel: {},
    action: { key: 'mystery', action_type: 'unknown.action' },
    currentChatJid: 'web:chat',
    stopAutoresearch: async () => undefined,
    dismissAutoresearch: async () => undefined,
    writeClipboard: async () => undefined,
  })).rejects.toThrow('Unsupported panel action: unknown.action');
});
