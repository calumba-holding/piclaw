import { expect, test } from 'bun:test';

import {
  resolveExtensionUiToast,
  resolveStatusPanelEventChatJid,
  resolveStatusPanelWidgetEventContext,
} from '../../web/src/ui/app-extension-ui-sse.js';

test('resolveStatusPanelEventChatJid prefers payload chat id and falls back to current chat', () => {
  expect(resolveStatusPanelEventChatJid({ chat_jid: ' chat:2 ' }, 'chat:1')).toBe('chat:2');
  expect(resolveStatusPanelEventChatJid({ chat_jid: '   ' }, 'chat:1')).toBe('chat:1');
  expect(resolveStatusPanelEventChatJid({}, 'chat:1')).toBe('chat:1');
});

test('resolveStatusPanelWidgetEventContext classifies status-panel widget events', () => {
  expect(resolveStatusPanelWidgetEventContext('extension_ui_widget', {
    key: 'panel:1',
    options: { surface: 'status-panel' },
    chat_jid: 'chat:2',
  }, 'chat:1')).toEqual({
    isStatusPanelWidgetEvent: true,
    eventChatJid: 'chat:2',
    panelKey: 'panel:1',
  });

  expect(resolveStatusPanelWidgetEventContext('extension_ui_status', {
    key: 'panel:2',
    options: { surface: 'status-panel' },
  }, 'chat:1')).toEqual({
    isStatusPanelWidgetEvent: false,
    eventChatJid: 'chat:1',
    panelKey: 'panel:2',
  });
});

test('resolveExtensionUiToast maps notify and error events to expected toast payloads', () => {
  expect(resolveExtensionUiToast('extension_ui_notify', { message: 'Saved', type: 'success' })).toEqual({
    title: 'Saved',
    detail: null,
    kind: 'success',
  });
  expect(resolveExtensionUiToast('extension_ui_notify', { message: 'Heads up', type: '' })).toEqual({
    title: 'Heads up',
    detail: null,
    kind: 'info',
  });
  expect(resolveExtensionUiToast('extension_ui_error', { error: 'Boom' })).toEqual({
    title: 'Extension UI error',
    detail: 'Boom',
    kind: 'error',
    durationMs: 5000,
  });
});

test('resolveExtensionUiToast returns null for unrelated or malformed payloads', () => {
  expect(resolveExtensionUiToast('extension_ui_status', { message: 'ignored' })).toBeNull();
  expect(resolveExtensionUiToast('extension_ui_notify', { message: 123 })).toBeNull();
  expect(resolveExtensionUiToast(null, null)).toBeNull();
});
