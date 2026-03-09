import { describe, expect, test } from "bun:test";
import {
  getThreadRootId,
  resumeChat,
  skipFailedOnModelSwitch,
  type ChatRunControlStore,
  type ResumeChatContext,
} from "../../../src/channels/web/chat-run-control.js";

describe("web chat run control helpers", () => {
  test("getThreadRootId delegates to store", () => {
    const store: ChatRunControlStore = {
      getThreadRootId: (chatJid, messageId) => (chatJid === "web:1" && messageId === "m1" ? 123 : null),
      getFailedRun: () => undefined,
      getChatCursor: () => "",
      setChatCursor: () => {},
      clearFailedRun: () => {},
    };

    expect(getThreadRootId("web:1", "m1", store)).toBe(123);
    expect(getThreadRootId("web:1", "m2", store)).toBeNull();
  });

  test("resumeChat enqueues task and invokes processChat with default agent", async () => {
    const enqueued: Array<{ key: string; task: () => Promise<void> }> = [];
    const processed: Array<{ chatJid: string; agentId: string; threadRootId?: number | null }> = [];

    const ctx: ResumeChatContext = {
      defaultAgentId: "default",
      now: () => 123,
      enqueue: (task, key) => {
        enqueued.push({ task, key });
      },
      processChat: async (chatJid, agentId, threadRootId) => {
        processed.push({ chatJid, agentId, threadRootId });
      },
    };

    resumeChat("web:1", 77, ctx);
    expect(enqueued).toHaveLength(1);
    expect(enqueued[0].key).toBe("resume:web:1:123");

    await enqueued[0].task();
    expect(processed).toEqual([{ chatJid: "web:1", agentId: "default", threadRootId: 77 }]);
  });

  test("skipFailedOnModelSwitch advances cursor only when needed and clears failure", () => {
    const setCalls: Array<{ chatJid: string; ts: string }> = [];
    const clearCalls: string[] = [];

    const store: ChatRunControlStore = {
      getThreadRootId: () => null,
      getFailedRun: () => ({ failedTs: "2024-01-01T00:00:05.000Z" }),
      getChatCursor: () => "2024-01-01T00:00:00.000Z",
      setChatCursor: (chatJid, ts) => {
        setCalls.push({ chatJid, ts });
      },
      clearFailedRun: (chatJid) => {
        clearCalls.push(chatJid);
      },
    };

    skipFailedOnModelSwitch("web:1", store);

    expect(setCalls).toEqual([{ chatJid: "web:1", ts: "2024-01-01T00:00:05.000Z" }]);
    expect(clearCalls).toEqual(["web:1"]);
  });
});
