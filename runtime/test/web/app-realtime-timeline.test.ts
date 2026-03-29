import { expect, test } from 'bun:test';

import {
  appendUniqueTimelinePost,
  isMainTimelineView,
  removeTimelinePostsByIds,
  replaceTimelinePostById,
  shouldAppendRealtimeTimelinePost,
  shouldMutateInteractionTimeline,
} from '../../web/src/ui/app-realtime-timeline.js';

test('isMainTimelineView only returns true when hashtag/search filters are inactive', () => {
  expect(isMainTimelineView({ currentHashtag: null, searchQuery: '', searchOpen: false })).toBe(true);
  expect(isMainTimelineView({ currentHashtag: '#foo', searchQuery: '', searchOpen: false })).toBe(false);
  expect(isMainTimelineView({ currentHashtag: null, searchQuery: 'hello', searchOpen: false })).toBe(false);
  expect(isMainTimelineView({ currentHashtag: null, searchQuery: '', searchOpen: true })).toBe(false);
});

test('shouldAppendRealtimeTimelinePost gates append events by event type, chat, and view mode', () => {
  expect(shouldAppendRealtimeTimelinePost('new_post', true, true)).toBe(true);
  expect(shouldAppendRealtimeTimelinePost('new_reply', true, true)).toBe(true);
  expect(shouldAppendRealtimeTimelinePost('agent_response', true, true)).toBe(true);
  expect(shouldAppendRealtimeTimelinePost('interaction_updated', true, true)).toBe(false);
  expect(shouldAppendRealtimeTimelinePost('new_post', false, true)).toBe(false);
  expect(shouldAppendRealtimeTimelinePost('new_post', true, false)).toBe(false);
});

test('shouldMutateInteractionTimeline only allows mutations on the current chat main timeline', () => {
  expect(shouldMutateInteractionTimeline(true, true)).toBe(true);
  expect(shouldMutateInteractionTimeline(false, true)).toBe(false);
  expect(shouldMutateInteractionTimeline(true, false)).toBe(false);
});

test('appendUniqueTimelinePost appends once and preserves identity on duplicate ids', () => {
  const source = [{ id: 1, text: 'a' }];
  const appended = appendUniqueTimelinePost(source, { id: 2, text: 'b' });
  expect(appended).toEqual([{ id: 1, text: 'a' }, { id: 2, text: 'b' }]);

  const duplicate = appendUniqueTimelinePost(source, { id: 1, text: 'duplicate' });
  expect(duplicate).toBe(source);

  expect(appendUniqueTimelinePost(null, { id: 3, text: 'c' })).toEqual([{ id: 3, text: 'c' }]);
});

test('replaceTimelinePostById and removeTimelinePostsByIds preserve no-op identity', () => {
  const source = [{ id: 1, text: 'a' }, { id: 2, text: 'b' }];

  const replaced = replaceTimelinePostById(source, { id: 2, text: 'updated' });
  expect(replaced).toEqual([{ id: 1, text: 'a' }, { id: 2, text: 'updated' }]);

  const missing = replaceTimelinePostById(source, { id: 9, text: 'missing' });
  expect(missing).toBe(source);

  const removed = removeTimelinePostsByIds(source, [1]);
  expect(removed).toEqual([{ id: 2, text: 'b' }]);

  const noIds = removeTimelinePostsByIds(source, []);
  expect(noIds).toBe(source);
  const noMatch = removeTimelinePostsByIds(source, [9]);
  expect(noMatch).toBe(source);
});
