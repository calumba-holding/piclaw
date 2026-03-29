import { expect, test } from 'bun:test';

import {
  applyFloatingWidgetDashboardFailure,
  applyFloatingWidgetDashboardResult,
  applyFloatingWidgetHostEvent,
  applyFloatingWidgetSubmitPending,
  applyFloatingWidgetSubmitResult,
  applyLiveFloatingWidgetUpdate,
  clearLiveFloatingWidgetState,
  closeFloatingWidgetState,
  openFloatingWidgetState,
} from '../../web/src/ui/app-floating-widget.js';

const liveWidget = {
  source: 'live',
  toolCallId: 'tool-1',
  runtimeState: {},
  artifact: { kind: 'html', html: '<div>x</div>' },
};

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

test('floating widget runtime-state helpers patch only the matching session', () => {
  const pending = applyFloatingWidgetSubmitPending(liveWidget, 'tool-1', {
    kind: 'widget.submit',
    payload: { text: 'hello' },
    submittedAt: '2026-03-29T00:02:00.000Z',
    submissionText: 'hello',
  });
  expect(pending).toMatchObject({
    runtimeState: {
      lastEventKind: 'widget.submit',
      lastEventPayload: { text: 'hello' },
      lastSubmitAt: '2026-03-29T00:02:00.000Z',
      lastHostUpdate: {
        type: 'submit_pending',
        submittedAt: '2026-03-29T00:02:00.000Z',
        preview: 'hello',
      },
    },
  });
  expect(applyFloatingWidgetSubmitPending(liveWidget, 'tool-2', {
    kind: 'widget.submit',
    payload: null,
    submittedAt: '2026-03-29T00:02:00.000Z',
    submissionText: null,
  })).toBe(liveWidget);
});

test('applyFloatingWidgetSubmitResult records sent, queued, and failed host updates', () => {
  expect(applyFloatingWidgetSubmitResult(liveWidget, 'tool-1', {
    submittedAt: '2026-03-29T00:03:00.000Z',
    submissionText: 'hello',
    queued: 'followup',
  })).toMatchObject({
    runtimeState: {
      lastHostUpdate: {
        type: 'submit_queued',
        queued: 'followup',
      },
    },
  });

  expect(applyFloatingWidgetSubmitResult(liveWidget, 'tool-1', {
    submittedAt: '2026-03-29T00:03:00.000Z',
    submissionText: 'hello',
    queued: null,
    errorMessage: 'boom',
  })).toMatchObject({
    runtimeState: {
      lastHostUpdate: {
        type: 'submit_failed',
        error: 'boom',
      },
    },
  });
});

test('applyFloatingWidgetHostEvent and dashboard helpers patch refresh runtime state', () => {
  const refreshed = applyFloatingWidgetHostEvent(liveWidget, 'tool-1', {
    kind: 'widget.request_refresh',
    payload: { buildDashboard: true },
    eventAt: '2026-03-29T00:04:00.000Z',
    nextRefreshCount: 2,
    shouldBuildDashboard: true,
  });
  expect(refreshed).toMatchObject({
    runtimeState: {
      lastEventKind: 'widget.request_refresh',
      lastRefreshRequestAt: '2026-03-29T00:04:00.000Z',
      refreshCount: 2,
      lastHostUpdate: {
        type: 'refresh_building',
        count: 2,
        echo: { buildDashboard: true },
      },
    },
  });

  expect(applyFloatingWidgetDashboardResult(refreshed as any, 'tool-1', {
    dashboard: { status: 'ok' },
    at: '2026-03-29T00:05:00.000Z',
    count: 2,
    echo: { buildDashboard: true },
  })).toMatchObject({
    runtimeState: {
      dashboard: { status: 'ok' },
      lastHostUpdate: {
        type: 'refresh_dashboard',
        count: 2,
      },
    },
  });

  expect(applyFloatingWidgetDashboardFailure(refreshed as any, 'tool-1', {
    errorMessage: 'nope',
    at: '2026-03-29T00:05:30.000Z',
    count: 2,
  })).toMatchObject({
    runtimeState: {
      lastHostUpdate: {
        type: 'refresh_failed',
        error: 'nope',
      },
    },
  });
});
