import { expect, test } from 'bun:test';

import {
  applyLiveFloatingWidgetUpdate,
  clearLiveFloatingWidgetState,
  closeFloatingWidgetState,
  openFloatingWidgetState,
} from '../../web/src/ui/app-floating-widget.js';

test('openFloatingWidgetState stamps openedAt while preserving widget payload', () => {
  expect(openFloatingWidgetState({ title: 'Widget', source: 'timeline' }, '2026-03-29T00:00:00.000Z')).toEqual({
    title: 'Widget',
    source: 'timeline',
    openedAt: '2026-03-29T00:00:00.000Z',
  });
});

test('closeFloatingWidgetState only dismisses live widget session keys', () => {
  expect(closeFloatingWidgetState({ source: 'live', toolCallId: 'tool-1' } as any)).toEqual({
    nextWidget: null,
    dismissedSessionKey: 'tool-1',
  });
  expect(closeFloatingWidgetState({ source: 'timeline', widgetId: 'widget-1' } as any)).toEqual({
    nextWidget: null,
    dismissedSessionKey: null,
  });
});

test('applyLiveFloatingWidgetUpdate merges same-session artifacts and preserves openedAt', () => {
  const current = {
    source: 'live',
    toolCallId: 'tool-1',
    originChatJid: 'web:old',
    openedAt: '2026-03-29T00:00:00.000Z',
    artifact: { kind: 'html', html: '<div>old</div>' },
  };

  const updated = applyLiveFloatingWidgetUpdate(current, {
    tool_call_id: 'tool-1',
    artifact: { kind: 'html', html: '<div>new</div>' },
  }, {
    fallbackStatus: 'streaming',
    currentChatJid: 'web:current',
    dismissedSessionKeys: new Set(),
    updatedAt: '2026-03-29T00:01:00.000Z',
  });

  expect(updated).toMatchObject({
    source: 'live',
    toolCallId: 'tool-1',
    originChatJid: 'web:current',
    openedAt: '2026-03-29T00:00:00.000Z',
    liveUpdatedAt: '2026-03-29T00:01:00.000Z',
    artifact: { kind: 'html', html: '<div>new</div>' },
  });
});

test('applyLiveFloatingWidgetUpdate ignores dismissed live widget sessions', () => {
  const current = { source: 'live', toolCallId: 'tool-1', artifact: { kind: 'html', html: '<div>old</div>' } };
  const updated = applyLiveFloatingWidgetUpdate(current, {
    tool_call_id: 'tool-1',
    artifact: { kind: 'html', html: '<div>new</div>' },
  }, {
    currentChatJid: 'web:current',
    dismissedSessionKeys: new Set(['tool-1']),
    updatedAt: '2026-03-29T00:01:00.000Z',
  });

  expect(updated).toBe(current);
});

test('clearLiveFloatingWidgetState only closes matching live widget sessions', () => {
  const current = { source: 'live', toolCallId: 'tool-1', artifact: { kind: 'html', html: '<div>x</div>' } };
  expect(clearLiveFloatingWidgetState(current, { tool_call_id: 'tool-2' })).toBe(current);
  expect(clearLiveFloatingWidgetState(current, { tool_call_id: 'tool-1' })).toBeNull();
  expect(clearLiveFloatingWidgetState({ source: 'timeline', widgetId: 'widget-1' } as any, { widget_id: 'widget-1' })).toEqual({ source: 'timeline', widgetId: 'widget-1' });
});
