import { describe, expect, test } from "bun:test";
import {
  recoverInflightRuns,
  resumePendingChats,
  type WebRecoveryContext,
  type WebRecoveryStore,
} from "../../../src/channels/web/recovery.js";
import { AgentQueue } from "../../../src/queue.js";

describe("web recovery helpers", () => {
  test("recoverInflightRuns clears or rolls back and enqueues retries", async () => {
    const inflights = [
      { chatJid: "web:1", prevTs: "t1", messageId: "m1", startedAt: "s1" },
      { chatJid: "web:2", prevTs: "t2", messageId: "m2", startedAt: "s2" },
    ];

    const cleared: string[] = [];
    const rolledBack: Array<{ chatJid: string; prevTs: string }> = [];
    const enqueued: Array<{ key: string; task: () => Promise<void> }> = [];
    const processed: Array<{ chatJid: string; agentId: string }> = [];
    const replyChecks: Array<{ chatJid: string; afterTs: string }> = [];

    const ctx: WebRecoveryContext = {
      assistantName: "Pi",
      defaultAgentId: "default",
      enqueue: (task, key) => {
        enqueued.push({ task, key });
      },
      processChat: async (chatJid, agentId) => {
        processed.push({ chatJid, agentId });
      },
    };

    const store: WebRecoveryStore = {
      getInflightRuns: () => inflights,
      transaction: (run) => run(),
      hasAgentRepliesAfter: (chatJid, afterTs) => {
        replyChecks.push({ chatJid, afterTs });
        return chatJid === "web:1" && afterTs === "s1";
      },
      clearInflightMarker: (chatJid) => {
        cleared.push(chatJid);
      },
      rollbackInflightRun: (chatJid, prevTs) => {
        rolledBack.push({ chatJid, prevTs });
      },
      getAllChatCursors: () => ({}),
      getMessagesSince: () => [],
    };

    recoverInflightRuns(ctx, store);

    expect(replyChecks).toEqual([
      { chatJid: "web:1", afterTs: "s1" },
      { chatJid: "web:2", afterTs: "s2" },
      { chatJid: "web:1", afterTs: "s1" },
      { chatJid: "web:2", afterTs: "s2" },
    ]);
    expect(cleared).toEqual(["web:1"]);
    expect(rolledBack).toEqual([{ chatJid: "web:2", prevTs: "t2" }]);
    expect(enqueued).toHaveLength(1);
    expect(enqueued[0].key).toBe("resume:web:2");

    await enqueued[0].task();
    expect(processed).toEqual([{ chatJid: "web:2", agentId: "default" }]);
  });

  test("recoverInflightRuns stops when transaction fails", () => {
    const enqueued: string[] = [];

    const ctx: WebRecoveryContext = {
      assistantName: "Pi",
      defaultAgentId: "default",
      enqueue: (_task, key) => {
        enqueued.push(key);
      },
      processChat: async () => {},
    };

    const store: WebRecoveryStore = {
      getInflightRuns: () => [{ chatJid: "web:1", prevTs: "t1", messageId: "m1", startedAt: "s1" }],
      transaction: () => {
        throw new Error("boom");
      },
      hasAgentRepliesAfter: () => false,
      clearInflightMarker: () => {},
      rollbackInflightRun: () => {},
      getAllChatCursors: () => ({}),
      getMessagesSince: () => [],
    };

    recoverInflightRuns(ctx, store);
    expect(enqueued).toHaveLength(0);
  });

  test("resumePendingChats enqueues only chats with pending messages", async () => {
    const enqueued: Array<{ key: string; task: () => Promise<void> }> = [];
    const processed: Array<{ chatJid: string; agentId: string }> = [];

    const ctx: WebRecoveryContext = {
      assistantName: "Pi",
      defaultAgentId: "default",
      enqueue: (task, key) => {
        enqueued.push({ key, task });
      },
      processChat: async (chatJid, agentId) => {
        processed.push({ chatJid, agentId });
      },
    };

    const store: WebRecoveryStore = {
      getInflightRuns: () => [],
      transaction: (run) => run(),
      hasAgentRepliesAfter: () => false,
      clearInflightMarker: () => {},
      rollbackInflightRun: () => {},
      getAllChatCursors: () => ({ "web:1": "t1", "web:2": "t2" }),
      getMessagesSince: (chatJid) => (chatJid === "web:2" ? [{ id: "m" }] : []),
    };

    resumePendingChats(ctx, undefined, store);

    expect(enqueued.map((item) => item.key)).toEqual(["resume:web:2"]);
    await enqueued[0].task();
    expect(processed).toEqual([{ chatJid: "web:2", agentId: "default" }]);
  });

  test("inflight recovery and resume_pending collapse to one queued replay per chat", async () => {
    const queue = new AgentQueue();
    const processed: string[] = [];
    let resolveRun: (() => void) | null = null;
    const runGate = new Promise<void>((resolve) => {
      resolveRun = resolve;
    });

    const ctx: WebRecoveryContext = {
      assistantName: "Pi",
      defaultAgentId: "default",
      enqueue: (task, key) => {
        queue.enqueue(task, key);
      },
      processChat: async (chatJid) => {
        processed.push(chatJid);
        await runGate;
      },
    };

    const store: WebRecoveryStore = {
      getInflightRuns: () => [{ chatJid: "web:1", prevTs: "t0", messageId: "m1", startedAt: "s1" }],
      transaction: (run) => run(),
      hasAgentRepliesAfter: () => false,
      clearInflightMarker: () => {},
      rollbackInflightRun: () => {},
      getAllChatCursors: () => ({ "web:1": "t0" }),
      getMessagesSince: () => [{ id: "m1" }],
    };

    recoverInflightRuns(ctx, store);
    resumePendingChats(ctx, undefined, store);
    await Bun.sleep(20);

    expect(processed).toEqual(["web:1"]);

    resolveRun?.();
    await queue.shutdown(50);
  });
});
