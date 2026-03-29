import { expect, test } from 'bun:test';

import {
  resolveFollowupActionFailureToast,
  resolveFollowupQueueRemovalPlan,
} from '../../web/src/ui/app-followup-actions.js';

test('resolveFollowupQueueRemovalPlan validates row_id payloads and returns removal metadata', () => {
  expect(resolveFollowupQueueRemovalPlan([{ row_id: 'a' }, { row_id: 'b' }], { row_id: 'a' })).toEqual({
    rowId: 'a',
    items: [{ row_id: 'b' }],
    remainingQueueCount: 1,
  });

  expect(resolveFollowupQueueRemovalPlan([{ row_id: 1 }, { row_id: 2 }], { row_id: 2 })).toEqual({
    rowId: 2,
    items: [{ row_id: 1 }],
    remainingQueueCount: 1,
  });

  expect(resolveFollowupQueueRemovalPlan([{ row_id: 'a' }], { row_id: null })).toBeNull();
  expect(resolveFollowupQueueRemovalPlan([{ row_id: 'a' }], { row_id: {} })).toBeNull();
});

test('resolveFollowupActionFailureToast preserves existing steer/remove copy', () => {
  expect(resolveFollowupActionFailureToast('steer')).toEqual({
    title: 'Failed to steer message',
    detail: 'The queued message could not be sent as steering.',
  });
  expect(resolveFollowupActionFailureToast('remove')).toEqual({
    title: 'Failed to remove message',
    detail: 'The queued message could not be removed.',
  });
});
