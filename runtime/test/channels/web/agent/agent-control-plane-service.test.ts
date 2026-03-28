import { describe, expect, test } from "bun:test";

import { WebAgentControlPlaneService } from "../../../../src/channels/web/agent/agent-control-plane-service.js";
import type { QueuedFollowupLifecycleService } from "../../../../src/channels/web/runtime/queued-followup-lifecycle-service.js";

function jsonResponse(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

type QueueLifecycleStub = Pick<
  QueuedFollowupLifecycleService,
  "getQueuedFollowupCount" | "listQueuedStateItems" | "prependQueuedFollowupItem" | "removeQueuedFollowupForAction"
>;

function createService(overrides: Partial<ConstructorParameters<typeof WebAgentControlPlaneService>[0]> = {}) {
  const queueLifecycle: QueueLifecycleStub = {
    getQueuedFollowupCount: () => 0,
    listQueuedStateItems: () => [],
    prependQueuedFollowupItem: () => {},
    removeQueuedFollowupForAction: async () => ({ removed: null, source: null }),
  };

  return new WebAgentControlPlaneService({
    defaultChatJid: "web:default",
    defaultAgentId: "default",
    json: jsonResponse,
    broadcastEvent: () => {},
    queue: { enqueue: () => {} },
    agentPool: { setSessionBinder: () => {} },
    queuedFollowupLifecycle: queueLifecycle,
    queuePendingSteering: () => {},
    storeMessage: () => null,
    processChat: () => {},
    ...overrides,
  });
}

describe("WebAgentControlPlaneService", () => {
  test("shapes autoresearch control responses with default chat fallbacks", async () => {
    const statusChats: string[] = [];
    const stopInputs: Array<{ chat_jid: string; generate_report: boolean }> = [];
    const dismissChats: string[] = [];
    const service = createService({
      getAutoresearchWidgetPayload: (chatJid) => {
        statusChats.push(chatJid);
        return { chat_jid: chatJid, live: true };
      },
      stopAutoresearchFromWeb: async (input) => {
        stopInputs.push(input);
        return { stopped: true };
      },
      dismissAutoresearchWidget: (chatJid) => {
        dismissChats.push(chatJid);
        return false;
      },
    });

    const statusResponse = await service.handleAutoresearchStatus(new Request("https://example.com/agent/autoresearch/status"));
    expect(statusResponse.status).toBe(200);
    expect(await statusResponse.json()).toEqual({ chat_jid: "web:default", live: true });

    const stopResponse = await service.handleAutoresearchStop(new Request("https://example.com/agent/autoresearch/stop", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ generate_report: false }),
    }));
    expect(stopResponse.status).toBe(200);
    expect(await stopResponse.json()).toEqual({
      status: "ok",
      chat_jid: "web:default",
      result: { stopped: true },
    });

    const dismissResponse = await service.handleAutoresearchDismiss(new Request("https://example.com/agent/autoresearch/dismiss", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_jid: "web:branch" }),
    }));
    expect(dismissResponse.status).toBe(200);
    expect(await dismissResponse.json()).toEqual({
      status: "noop",
      chat_jid: "web:branch",
    });

    expect(statusChats).toEqual(["web:default"]);
    expect(stopInputs).toEqual([{ chat_jid: "web:default", generate_report: false }]);
    expect(dismissChats).toEqual(["web:branch"]);
  });

  test("shapes queue state and queue removal responses via queued follow-up lifecycle dependency", async () => {
    const events: Array<{ type: string; data: unknown }> = [];
    const queueLifecycle: QueueLifecycleStub = {
      getQueuedFollowupCount: (chatJid: string) => (chatJid === "web:branch" ? 1 : 0),
      listQueuedStateItems: () => [{ row_id: 7, content: "queued followup", timestamp: "2024-01-01T00:00:00.000Z", thread_id: 11 }],
      prependQueuedFollowupItem: () => {},
      removeQueuedFollowupForAction: async () => ({
        removed: {
          rowId: 7,
          queuedContent: "queued followup",
          threadId: 11,
          queuedAt: "2024-01-01T00:00:00.000Z",
          materializeRetries: 0,
        },
        source: "deferred",
      }),
    };
    const service = createService({
      broadcastEvent: (type, data) => {
        events.push({ type, data });
      },
      queuedFollowupLifecycle: queueLifecycle,
    });

    const stateResponse = await service.handleAgentQueueState(new Request("https://example.com/agent/queue-state?chat_jid=web%3Abranch"));
    expect(stateResponse.status).toBe(200);
    expect(await stateResponse.json()).toEqual({
      count: 1,
      items: [{ row_id: 7, content: "queued followup", timestamp: "2024-01-01T00:00:00.000Z", thread_id: 11 }],
    });

    const removeResponse = await service.handleAgentQueueRemove(new Request("https://example.com/agent/queue-remove", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_jid: "web:branch", row_id: 7 }),
    }));
    expect(removeResponse.status).toBe(200);
    expect(await removeResponse.json()).toEqual({
      status: "ok",
      removed: true,
      row_id: 7,
      count: 1,
    });
    expect(events).toEqual([
      {
        type: "agent_followup_removed",
        data: { chat_jid: "web:branch", row_id: 7, thread_id: 11 },
      },
    ]);
  });

  test("preserves branch lifecycle wrapper status codes and payload shapes", async () => {
    const service = createService({
      agentPool: {
        setSessionBinder: () => {},
        createForkedChatBranch: async (chatJid: string, options?: { agentName?: string | null }) => ({
          chat_jid: `${chatJid}:branch:1`,
          agent_name: options?.agentName ?? "child",
        }),
        renameChatBranch: async (chatJid: string, options?: { agentName?: string | null }) => ({
          chat_jid: chatJid,
          agent_name: options?.agentName ?? null,
        }),
        pruneChatBranch: async (chatJid: string) => ({ chat_jid: chatJid, archived_at: "2024-01-01T00:00:00.000Z" }),
        restoreChatBranch: async (chatJid: string, options?: { agentName?: string | null }) => ({
          chat_jid: chatJid,
          agent_name: options?.agentName ?? "restored",
          archived_at: null,
        }),
      },
    });

    const forkResponse = await service.handleAgentBranchFork(new Request("https://example.com/agent/branch-fork", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_chat_jid: "web:root", agent_name: "research" }),
    }));
    expect(forkResponse.status).toBe(201);
    expect(await forkResponse.json()).toEqual({
      status: "ok",
      branch: { chat_jid: "web:root:branch:1", agent_name: "research" },
    });

    const renameResponse = await service.handleAgentBranchRename(new Request("https://example.com/agent/branch-rename", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_jid: "web:root:branch:1", agent_name: "lead" }),
    }));
    expect(renameResponse.status).toBe(200);
    expect(await renameResponse.json()).toEqual({
      status: "ok",
      branch: { chat_jid: "web:root:branch:1", agent_name: "lead" },
    });

    const pruneResponse = await service.handleAgentBranchPrune(new Request("https://example.com/agent/branch-prune", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_jid: "web:root:branch:1" }),
    }));
    expect(pruneResponse.status).toBe(200);
    expect(await pruneResponse.json()).toEqual({
      status: "ok",
      branch: { chat_jid: "web:root:branch:1", archived_at: "2024-01-01T00:00:00.000Z" },
    });

    const restoreResponse = await service.handleAgentBranchRestore(new Request("https://example.com/agent/branch-restore", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_jid: "web:root:branch:1", agent_name: "restored" }),
    }));
    expect(restoreResponse.status).toBe(200);
    expect(await restoreResponse.json()).toEqual({
      status: "ok",
      branch: { chat_jid: "web:root:branch:1", agent_name: "restored", archived_at: null },
    });
  });
});
