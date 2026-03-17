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
    const now = new Date("2026-01-01T00:05:00Z");
    const inflights = [
      { chatJid: "web:1", prevTs: "t1", messageId: "m1", startedAt: "2026-01-01T00:04:00Z" },
      { chatJid: "web:2", prevTs: "t2", messageId: "m2", startedAt: "2026-01-01T00:04:30Z" },
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
      now: () => now.getTime(),
    };

    const store: WebRecoveryStore = {
      getInflightRuns: () => inflights,
      transaction: (run) => run(),
      hasAgentRepliesAfter: (chatJid, afterTs) => {
        replyChecks.push({ chatJid, afterTs });
        return chatJid === "web:1";
      },
      clearInflightMarker: (chatJid) => {
        cleared.push(chatJid);
      },
      rollbackInflightRun: (chatJid, prevTs) => {
        rolledBack.push({ chatJid, prevTs });
      },
      getAllChatCursors: () => ({}),
      getKnownChatJids: () => [],
      getDeferredQueuedFollowups: () => [],
      getMessagesSince: () => [],
    };

    recoverInflightRuns(ctx, store);

    expect(replyChecks).toEqual([
      { chatJid: "web:1", afterTs: "2026-01-01T00:04:00Z" },
      { chatJid: "web:2", afterTs: "2026-01-01T00:04:30Z" },
      { chatJid: "web:1", afterTs: "2026-01-01T00:04:00Z" },
      { chatJid: "web:2", afterTs: "2026-01-01T00:04:30Z" },
    ]);
    expect(cleared).toEqual(["web:1"]);
    expect(rolledBack).toEqual([{ chatJid: "web:2", prevTs: "t2" }]);
    expect(enqueued).toHaveLength(1);
    expect(enqueued[0].key).toBe("resume:web:2");

    await enqueued[0].task();
    expect(processed).toEqual([{ chatJid: "web:2", agentId: "default" }]);
  });

  test("recoverInflightRuns rolls back stale inflight markers to preserve pending turns", () => {
    const staleStartedAt = "2026-01-01T00:00:00Z";
    const now = new Date("2026-01-01T01:00:00Z").getTime(); // 1 hour later — well past stale warning threshold

    const inflights = [
      { chatJid: "web:stale", prevTs: "t0", messageId: "m1", startedAt: staleStartedAt },
    ];

    const cleared: string[] = [];
    const rolledBack: Array<{ chatJid: string; prevTs: string }> = [];
    const enqueued: string[] = [];

    const ctx: WebRecoveryContext = {
      assistantName: "Pi",
      defaultAgentId: "default",
      enqueue: (_task, key) => { enqueued.push(key); },
      processChat: async () => {},
      now: () => now,
    };

    const store: WebRecoveryStore = {
      getInflightRuns: () => inflights,
      transaction: (run) => run(),
      hasAgentRepliesAfter: () => false,
      clearInflightMarker: (chatJid) => { cleared.push(chatJid); },
      rollbackInflightRun: (chatJid, prevTs) => { rolledBack.push({ chatJid, prevTs }); },
      getAllChatCursors: () => ({}),
      getKnownChatJids: () => [],
      getDeferredQueuedFollowups: () => [],
      getMessagesSince: () => [],
    };

    recoverInflightRuns(ctx, store);

    // Stale inflight markers are replayed (rollback + resume), not skipped.
    expect(cleared).toEqual([]);
    expect(rolledBack).toEqual([{ chatJid: "web:stale", prevTs: "t0" }]);
    expect(enqueued).toEqual(["resume:web:stale"]);
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
      getKnownChatJids: () => [],
      getDeferredQueuedFollowups: () => [],
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
      getKnownChatJids: () => ["web:1", "web:2"],
      getDeferredQueuedFollowups: () => [],
      getMessagesSince: (chatJid) => (chatJid === "web:2" ? [{ id: "m" }] : []),
    };

    resumePendingChats(ctx, undefined, store);

    expect(enqueued.map((item) => item.key)).toEqual(["resume:web:2"]);
    await enqueued[0].task();
    expect(processed).toEqual([{ chatJid: "web:2", agentId: "default" }]);
  });

  test("resumePendingChats scans known chats even when a cursor row is missing", async () => {
    const enqueued: Array<{ key: string; task: () => Promise<void> }> = [];
    const calls: Array<{ chatJid: string; since: string }> = [];

    const ctx: WebRecoveryContext = {
      assistantName: "Pi",
      defaultAgentId: "default",
      enqueue: (task, key) => {
        enqueued.push({ key, task });
      },
      processChat: async () => {},
    };

    const store: WebRecoveryStore = {
      getInflightRuns: () => [],
      transaction: (run) => run(),
      hasAgentRepliesAfter: () => false,
      clearInflightMarker: () => {},
      rollbackInflightRun: () => {},
      getAllChatCursors: () => ({ "web:known": "t1" }),
      getKnownChatJids: () => ["web:known", "web:new"],
      getDeferredQueuedFollowups: () => [],
      getMessagesSince: (chatJid, since) => {
        calls.push({ chatJid, since });
        return chatJid === "web:new" ? [{ id: "new-msg" }] : [];
      },
    };

    resumePendingChats(ctx, undefined, store);

    expect(calls).toContainEqual({ chatJid: "web:new", since: "" });
    expect(enqueued.map((item) => item.key)).toEqual(["resume:web:new"]);
  });

  test("resumePendingChats enqueues deferred-only queued followups", async () => {
    const enqueued: Array<{ key: string; task: () => Promise<void> }> = [];

    const ctx: WebRecoveryContext = {
      assistantName: "Pi",
      defaultAgentId: "default",
      enqueue: (task, key) => {
        enqueued.push({ key, task });
      },
      processChat: async () => {},
    };

    const store: WebRecoveryStore = {
      getInflightRuns: () => [],
      transaction: (run) => run(),
      hasAgentRepliesAfter: () => false,
      clearInflightMarker: () => {},
      rollbackInflightRun: () => {},
      getAllChatCursors: () => ({ "web:queue-only": "" }),
      getKnownChatJids: () => ["web:queue-only"],
      getDeferredQueuedFollowups: () => [{ rowId: -1, queuedContent: "queued after restart", threadId: null, queuedAt: "2026-01-01T00:00:00.000Z" }],
      getMessagesSince: () => [],
    };

    resumePendingChats(ctx, undefined, store);

    expect(enqueued.map((item) => item.key)).toEqual(["resume:web:queue-only"]);
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
      getKnownChatJids: () => ["web:1"],
      getDeferredQueuedFollowups: () => [],
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
