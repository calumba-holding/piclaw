import { expect, test } from "bun:test";

import type { AttachmentInfo } from "../../src/agent-pool/attachments.js";
import { AgentTurnCoordinator } from "../../src/agent-pool/turn-coordinator.js";

const sampleAttachment: AttachmentInfo = {
  id: 1,
  name: "note.txt",
  contentType: "text/plain",
  size: 4,
  kind: "file",
  sourcePath: "/tmp/note.txt",
};

test("AgentTurnCoordinator tracks streamed turns and fallback assistant text", () => {
  const attachmentBatches: AttachmentInfo[][] = [[sampleAttachment], []];
  const completed: Array<{ text: string; attachments: AttachmentInfo[] }> = [];

  const coordinator = new AgentTurnCoordinator({
    takeAttachments: () => attachmentBatches.shift() ?? [],
    touchSession: () => {},
    recordMessageUsage: () => {},
  });

  const tracker = coordinator.createTracker("web:default", (turn) => completed.push(turn));

  tracker.handleMessageUpdate({
    type: "message_update",
    assistantMessageEvent: { type: "text_delta", delta: "hello" },
  } as any);
  tracker.handleMessageUpdate({
    type: "message_update",
    assistantMessageEvent: { type: "text_start" },
  } as any);
  tracker.handleMessageUpdate({
    type: "message_end",
    message: { role: "assistant", content: [{ type: "text", text: "fallback answer" }] },
  } as any);

  expect(completed).toEqual([{ text: "hello", attachments: [sampleAttachment] }]);
  expect(tracker.getTurnCount()).toBe(1);
  expect(tracker.getFinalText()).toBe("fallback answer");
});

test("AgentTurnCoordinator subscribes, records usage, and downgrades handler failures to warnings", () => {
  let listener: ((event: unknown) => void) | null = null;
  let touched = 0;
  const usage: Array<{ chatJid: string; message: unknown }> = [];
  const warns: string[] = [];

  const session = {
    subscribe(callback: (event: unknown) => void) {
      listener = callback;
      return () => {
        listener = null;
      };
    },
  };

  const coordinator = new AgentTurnCoordinator({
    takeAttachments: () => [],
    touchSession: () => {
      touched += 1;
    },
    recordMessageUsage: (chatJid, message) => {
      usage.push({ chatJid, message });
    },
    onWarn: (message) => warns.push(message),
  });

  const tracker = coordinator.createTracker("web:default");
  const unsub = coordinator.subscribe(session as any, "web:default", tracker, () => {
    throw new Error("boom");
  });

  listener?.({
    type: "message_end",
    message: { role: "assistant", content: [{ type: "text", text: "done" }] },
  });

  expect(touched).toBe(1);
  expect(usage).toHaveLength(1);
  expect(usage[0]?.chatJid).toBe("web:default");
  expect(warns).toContain("Event handler error");

  unsub();
  expect(listener).toBeNull();
});

test("AgentTurnCoordinator aborts timed-out prompts", async () => {
  let abortCalls = 0;
  const errors: string[] = [];
  const session = {
    abort: async () => {
      abortCalls += 1;
    },
  };

  const coordinator = new AgentTurnCoordinator({
    takeAttachments: () => [],
    touchSession: () => {},
    recordMessageUsage: () => {},
    onError: (message) => errors.push(message),
  });

  const { timedOutRef } = coordinator.startPromptTimeout(session as any, "web:default", 5);
  await Bun.sleep(20);

  expect(timedOutRef.value).toBe(true);
  expect(abortCalls).toBe(1);
  expect(errors).toContain("Prompt timed out; aborting session");
});
