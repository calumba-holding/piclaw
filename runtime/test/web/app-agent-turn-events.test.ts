import { expect, test } from 'bun:test';

import {
  resolveSteerQueuedTurnId,
  shouldAdoptIncomingTurn,
  shouldIgnoreMismatchedTurn,
} from '../../web/src/ui/app-agent-turn-events.js';

test('shouldIgnoreMismatchedTurn only blocks events tied to a different active turn', () => {
  expect(shouldIgnoreMismatchedTurn('turn:1', 'turn:2')).toBe(true);
  expect(shouldIgnoreMismatchedTurn('turn:1', 'turn:1')).toBe(false);
  expect(shouldIgnoreMismatchedTurn('turn:1', null)).toBe(false);
  expect(shouldIgnoreMismatchedTurn(null, 'turn:1')).toBe(false);
});

test('shouldAdoptIncomingTurn mirrors app turn-adoption semantics', () => {
  expect(shouldAdoptIncomingTurn('turn:1', null)).toBe(true);
  expect(shouldAdoptIncomingTurn('turn:1', 'turn:2')).toBe(false);
  expect(shouldAdoptIncomingTurn('', null)).toBe(false);
});

test('resolveSteerQueuedTurnId prefers event turn id and falls back to current turn', () => {
  expect(resolveSteerQueuedTurnId('turn:1', 'turn:2')).toBe('turn:1');
  expect(resolveSteerQueuedTurnId(null, 'turn:2')).toBe('turn:2');
  expect(resolveSteerQueuedTurnId(undefined, undefined)).toBeNull();
});
