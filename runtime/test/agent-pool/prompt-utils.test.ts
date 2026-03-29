import { expect, test } from "bun:test";

import {
  extractAssistantText,
  extractAssistantThinking,
  formatTimeoutDuration,
  toSideReasoning,
} from "../../src/agent-pool/prompt-utils.js";

test("prompt utils format timeout durations compactly", () => {
  expect(formatTimeoutDuration(500)).toBe("0.5s");
  expect(formatTimeoutDuration(5000)).toBe("5s");
  expect(formatTimeoutDuration(0)).toBe("0ms");
});

test("prompt utils extract assistant text and thinking blocks", () => {
  const message = {
    content: [
      { type: "text", text: "hello" },
      { type: "thinking", thinking: "plan" },
      { type: "text", text: " world" },
    ],
  };

  expect(extractAssistantText(message)).toBe("hello world");
  expect(extractAssistantThinking(message)).toBe("plan");
  expect(toSideReasoning("high")).toBe("high");
  expect(toSideReasoning("off")).toBeUndefined();
});
