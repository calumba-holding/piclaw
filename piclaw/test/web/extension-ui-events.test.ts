import { expect, test } from 'bun:test';

import {
  dispatchExtensionUiBrowserEvent,
  EXTENSION_UI_BROWSER_EVENT,
  isExtensionUiEventType,
  toExtensionUiBrowserEventName,
} from '../../web/src/ui/extension-ui-events.js';

test('recognises supported extension UI event names', () => {
  expect(isExtensionUiEventType('extension_ui_request')).toBe(true);
  expect(isExtensionUiEventType('extension_ui_error')).toBe(true);
  expect(isExtensionUiEventType('agent_status')).toBe(false);
});

test('maps extension UI event names to browser event names', () => {
  expect(toExtensionUiBrowserEventName('extension_ui_request')).toBe('piclaw-extension-ui:request');
  expect(toExtensionUiBrowserEventName('extension_ui_editor_text')).toBe('piclaw-extension-ui:editor-text');
  expect(toExtensionUiBrowserEventName('other')).toBe(EXTENSION_UI_BROWSER_EVENT);
});

test('dispatches both generic and subtype browser events', () => {
  const target = new EventTarget();
  const seen = [];

  target.addEventListener(EXTENSION_UI_BROWSER_EVENT, (event) => {
    seen.push({ type: event.type, detail: event.detail });
  });
  target.addEventListener('piclaw-extension-ui:notify', (event) => {
    seen.push({ type: event.type, detail: event.detail });
  });

  const ok = dispatchExtensionUiBrowserEvent('extension_ui_notify', { message: 'Hello' }, target);
  expect(ok).toBe(true);
  expect(seen).toEqual([
    {
      type: 'piclaw-extension-ui',
      detail: { type: 'extension_ui_notify', payload: { message: 'Hello' } },
    },
    {
      type: 'piclaw-extension-ui:notify',
      detail: { type: 'extension_ui_notify', payload: { message: 'Hello' } },
    },
  ]);
});

test('returns false when no event target is available', () => {
  expect(dispatchExtensionUiBrowserEvent('extension_ui_notify', { message: 'Hello' }, null)).toBe(false);
});
