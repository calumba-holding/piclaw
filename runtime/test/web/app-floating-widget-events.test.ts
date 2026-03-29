import { expect, test } from 'bun:test';

import {
  resolveFloatingWidgetDashboardBuiltToast,
  resolveFloatingWidgetDashboardFailureToast,
  resolveFloatingWidgetHostRefreshContext,
  resolveFloatingWidgetRefreshAckToast,
  resolveFloatingWidgetSubmitFailureToast,
  resolveFloatingWidgetSubmitToast,
} from '../../web/src/ui/app-floating-widget-events.js';

test('resolveFloatingWidgetSubmitToast maps queued and sent submission outcomes', () => {
  expect(resolveFloatingWidgetSubmitToast('followup')).toEqual({
    title: 'Widget submission queued',
    detail: 'The widget message was queued because the agent is busy.',
    kind: 'info',
    durationMs: 3500,
  });
  expect(resolveFloatingWidgetSubmitToast('sent')).toEqual({
    title: 'Widget submission sent',
    detail: 'The widget message was sent to the chat.',
    kind: 'info',
    durationMs: 3500,
  });
});

test('resolveFloatingWidgetHostRefreshContext computes dashboard-build intent and refresh counts', () => {
  expect(resolveFloatingWidgetHostRefreshContext({ buildDashboard: true }, 2)).toEqual({
    shouldBuildDashboard: true,
    nextRefreshCount: 3,
  });
  expect(resolveFloatingWidgetHostRefreshContext({ dashboardKind: 'internal-state' }, 0)).toEqual({
    shouldBuildDashboard: true,
    nextRefreshCount: 1,
  });
  expect(resolveFloatingWidgetHostRefreshContext({}, null)).toEqual({
    shouldBuildDashboard: false,
    nextRefreshCount: 1,
  });
});

test('floating widget host/submission toast helpers preserve existing copy and defaults', () => {
  expect(resolveFloatingWidgetSubmitFailureToast('boom')).toEqual({
    title: 'Widget submission failed',
    detail: 'boom',
    kind: 'warning',
    durationMs: 5000,
  });
  expect(resolveFloatingWidgetSubmitFailureToast(null)).toEqual({
    title: 'Widget submission failed',
    detail: 'Could not send the widget message.',
    kind: 'warning',
    durationMs: 5000,
  });

  expect(resolveFloatingWidgetDashboardBuiltToast()).toEqual({
    title: 'Dashboard built',
    detail: 'Live dashboard state pushed into the widget.',
    kind: 'info',
    durationMs: 3000,
  });
  expect(resolveFloatingWidgetDashboardFailureToast(undefined)).toEqual({
    title: 'Dashboard build failed',
    detail: 'Could not build dashboard.',
    kind: 'warning',
    durationMs: 5000,
  });
  expect(resolveFloatingWidgetRefreshAckToast()).toEqual({
    title: 'Widget refresh requested',
    detail: 'The widget received a host acknowledgement update.',
    kind: 'info',
    durationMs: 3000,
  });
});
