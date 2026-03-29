import { expect, test } from 'bun:test';

import {
  appendFollowupQueueItem,
  filterQueuedTimelinePosts,
  haveSameFollowupQueueRows,
  LEGACY_QUEUE_STATUS,
  normalizeFollowupQueueItems,
  QUEUE_PLACEHOLDER_MARKER,
  removeFollowupQueueRow,
  shouldRefreshQueueStateFromResponse,
} from '../../web/src/ui/app-followup-queue.js';

test('filterQueuedTimelinePosts hides queued placeholder rows and marker bot posts', () => {
  const visible = { id: 'post:1', data: { is_bot_message: false, content: 'visible' } };
  const queuedRow = { id: 'queue:1', data: { is_bot_message: false, content: 'queued parent' } };
  const legacyPlaceholder = { id: 'bot:legacy', data: { is_bot_message: true, content: LEGACY_QUEUE_STATUS } };
  const invisibleMarker = { id: 'bot:marker', data: { is_bot_message: true, content: QUEUE_PLACEHOLDER_MARKER } };

  const filtered = filterQueuedTimelinePosts(
    [visible, queuedRow, legacyPlaceholder, invisibleMarker],
    new Set(['queue:1']),
  );

  expect(filtered).toEqual([visible]);
});

test('filterQueuedTimelinePosts preserves the original array reference when nothing is hidden', () => {
  const items = [{ id: 'post:1', data: { is_bot_message: false, content: 'visible' } }];
  expect(filterQueuedTimelinePosts(items, new Set())).toBe(items);
  expect(filterQueuedTimelinePosts(null, new Set())).toBeNull();
});

test('normalizeFollowupQueueItems clones payload rows and filters dismissed ids', () => {
  const source = [
    { row_id: 'queue:1', content: 'keep' },
    { row_id: 'queue:2', content: 'dismiss' },
  ];
  const normalized = normalizeFollowupQueueItems(source, new Set(['queue:2']));

  source[0].content = 'mutated';

  expect(normalized).toEqual([{ row_id: 'queue:1', content: 'keep' }]);
  expect(normalized[0]).not.toBe(source[0]);
});

test('haveSameFollowupQueueRows compares queue identity by ordered row ids', () => {
  expect(haveSameFollowupQueueRows([{ row_id: 'a' }, { row_id: 'b' }], [{ row_id: 'a' }, { row_id: 'b' }])).toBe(true);
  expect(haveSameFollowupQueueRows([{ row_id: 'a' }], [{ row_id: 'b' }])).toBe(false);
  expect(haveSameFollowupQueueRows(null, [{ row_id: 'a' }])).toBe(false);
});

test('removeFollowupQueueRow returns filtered rows and the remaining queue count', () => {
  expect(removeFollowupQueueRow([{ row_id: 'a' }, { row_id: 'b' }], 'a')).toEqual({
    items: [{ row_id: 'b' }],
    remainingQueueCount: 1,
  });
  expect(removeFollowupQueueRow([{ row_id: 'a' }], null)).toEqual({
    items: [{ row_id: 'a' }],
    remainingQueueCount: 1,
  });
});

test('appendFollowupQueueItem appends normalized rows for valid queue payloads', () => {
  const existing = [{ row_id: 'queue:1', content: 'first' }];
  const appended = appendFollowupQueueItem(existing, {
    row_id: 'queue:2',
    content: 'second',
    timestamp: '2026-03-29T12:00:00.000Z',
    thread_id: 9,
  });

  expect(appended).toEqual([
    { row_id: 'queue:1', content: 'first' },
    {
      row_id: 'queue:2',
      content: 'second',
      timestamp: '2026-03-29T12:00:00.000Z',
      thread_id: 9,
    },
  ]);
  expect(appended).not.toBe(existing);
});

test('appendFollowupQueueItem keeps array identity for duplicate or invalid payloads', () => {
  const existing = [{ row_id: 'queue:1', content: 'first' }];

  expect(appendFollowupQueueItem(existing, { row_id: 'queue:1', content: 'duplicate' })).toBe(existing);
  expect(appendFollowupQueueItem(existing, { row_id: null, content: 'missing row' })).toBe(existing);
  expect(appendFollowupQueueItem(existing, { row_id: 'queue:2', content: '   ' })).toBe(existing);
  expect(appendFollowupQueueItem(existing, null)).toBe(existing);
});

test('shouldRefreshQueueStateFromResponse detects queued responses and queued commands', () => {
  expect(shouldRefreshQueueStateFromResponse({ queued: 'followup' })).toBe(true);
  expect(shouldRefreshQueueStateFromResponse({ queued: 'steer' })).toBe(true);
  expect(shouldRefreshQueueStateFromResponse({ command: { queued_followup: true } })).toBe(true);
  expect(shouldRefreshQueueStateFromResponse({ command: { queued_steer: true } })).toBe(true);
  expect(shouldRefreshQueueStateFromResponse({ queued: 'sent', command: {} })).toBe(false);
  expect(shouldRefreshQueueStateFromResponse(null)).toBe(false);
});
