import { expect, test } from "bun:test";
import "../helpers.js";

import { resolveQueueActionChatJid, shouldClearQueuedSteerState } from "../../web/src/ui/queue-state.ts";

test("resolveQueueActionChatJid prefers the active branch chat and falls back to the default chat", () => {
  expect(resolveQueueActionChatJid("web:branch-a")).toBe("web:branch-a");
  expect(resolveQueueActionChatJid("  web:branch-b  ")).toBe("web:branch-b");
  expect(resolveQueueActionChatJid("")).toBe("web:default");
  expect(resolveQueueActionChatJid(null)).toBe("web:default");
});

test("shouldClearQueuedSteerState clears stale queued-steer UI state only when the chat is idle and the queue is empty", () => {
  expect(shouldClearQueuedSteerState({ remainingQueueCount: 0, currentTurnId: null, isAgentTurnActive: false })).toBe(true);
  expect(shouldClearQueuedSteerState({ remainingQueueCount: 1, currentTurnId: null, isAgentTurnActive: false })).toBe(false);
  expect(shouldClearQueuedSteerState({ remainingQueueCount: 0, currentTurnId: "turn-1", isAgentTurnActive: false })).toBe(false);
  expect(shouldClearQueuedSteerState({ remainingQueueCount: 0, currentTurnId: null, isAgentTurnActive: true })).toBe(false);
});
