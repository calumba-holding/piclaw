import { expect, test } from 'bun:test';

import { resolveLiveGeneratedWidgetEvent } from '../../web/src/ui/app-generated-widget-events.js';

test('resolveLiveGeneratedWidgetEvent maps live widget update events to fallback statuses', () => {
  expect(resolveLiveGeneratedWidgetEvent('generated_widget_open')).toEqual({
    kind: 'update',
    fallbackStatus: 'loading',
    shouldAdoptTurn: true,
  });
  expect(resolveLiveGeneratedWidgetEvent('generated_widget_delta')).toEqual({
    kind: 'update',
    fallbackStatus: 'streaming',
    shouldAdoptTurn: true,
  });
  expect(resolveLiveGeneratedWidgetEvent('generated_widget_final')).toEqual({
    kind: 'update',
    fallbackStatus: 'final',
    shouldAdoptTurn: true,
  });
  expect(resolveLiveGeneratedWidgetEvent('generated_widget_error')).toEqual({
    kind: 'update',
    fallbackStatus: 'error',
    shouldAdoptTurn: false,
  });
});

test('resolveLiveGeneratedWidgetEvent marks close and unknown events correctly', () => {
  expect(resolveLiveGeneratedWidgetEvent('generated_widget_close')).toEqual({
    kind: 'close',
    fallbackStatus: null,
    shouldAdoptTurn: false,
  });
  expect(resolveLiveGeneratedWidgetEvent('agent_status')).toEqual({
    kind: null,
    fallbackStatus: null,
    shouldAdoptTurn: false,
  });
  expect(resolveLiveGeneratedWidgetEvent(null)).toEqual({
    kind: null,
    fallbackStatus: null,
    shouldAdoptTurn: false,
  });
});
