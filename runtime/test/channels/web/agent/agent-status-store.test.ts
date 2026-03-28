import { describe, expect, test } from "bun:test";
import { AgentStatusStore } from "../../../../src/channels/web/agent/agent-status-store.js";

describe("web agent status store", () => {
  test("load clears non-restorable persisted statuses and resets in-memory state", () => {
    const calls: string[] = [];
    const state = {
      load: () => {
        calls.push("load");
      },
      save: () => {
        calls.push("save");
      },
      setAgentStatus: (chatJid: string, status: Record<string, unknown> | null) => {
        calls.push(`set:${chatJid}:${status ? "status" : "null"}`);
      },
      getAgentStatuses: () => ({ "web:1": { type: "intent" }, "web:2": { type: "tool_call" } }),
    };

    const store = new AgentStatusStore(state);
    store.load();

    expect(calls).toEqual([
      "load",
      "set:web:1:null",
      "set:web:2:null",
      "save",
    ]);
    expect(store.get("web:1")).toBeNull();
  });

  test("load preserves restart-restorable compaction status", () => {
    const calls: string[] = [];
    const compactionStatus = {
      type: "intent",
      intent_key: "compaction",
      title: "Compacting context",
      started_at: "2026-03-14T14:00:00.000Z",
    };
    const state = {
      load: () => {
        calls.push("load");
      },
      save: () => {
        calls.push("save");
      },
      setAgentStatus: (chatJid: string, status: Record<string, unknown> | null) => {
        calls.push(`set:${chatJid}:${status ? "status" : "null"}`);
      },
      getAgentStatuses: () => ({ "web:1": compactionStatus }),
    };

    const store = new AgentStatusStore(state);
    store.load();

    expect(calls).toEqual(["load"]);
    expect(store.get("web:1")).toEqual(compactionStatus);
  });

  test("update stores active statuses and clears done/error statuses", () => {
    const saved: Array<{ chatJid: string; status: Record<string, unknown> | null }> = [];
    let saveCount = 0;

    const state = {
      load: () => {},
      save: () => {
        saveCount += 1;
      },
      setAgentStatus: (chatJid: string, status: Record<string, unknown> | null) => {
        saved.push({ chatJid, status });
      },
      getAgentStatuses: () => ({}),
    };

    const store = new AgentStatusStore(state);

    store.update("web:1", { type: "intent", title: "Thinking" });
    expect(store.get("web:1")?.type).toBe("intent");
    expect(saveCount).toBe(1);

    store.update("web:1", { type: "done" });
    expect(store.get("web:1")).toBeNull();
    expect(saveCount).toBe(2);

    const last = saved[saved.length - 1];
    expect(last).toEqual({ chatJid: "web:1", status: null });
  });
});
