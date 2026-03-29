import { afterEach, expect, test } from "bun:test";

import { AgentBranchManager } from "../../src/agent-pool/branch-manager.js";
import { createTempWorkspace, importFresh, setEnv } from "../helpers.js";

let restoreEnv: (() => void) | null = null;

afterEach(() => {
  restoreEnv?.();
  restoreEnv = null;
});

function createManager(overrides: Partial<ConstructorParameters<typeof AgentBranchManager>[0]> = {}) {
  const pool = new Map<string, { session: any; lastUsed: number }>();
  const sidePool = new Map<string, { session: any; lastUsed: number }>();
  const activeForkBaseLeafByChat = new Map<string, string | null>();
  const warns: string[] = [];

  const manager = new AgentBranchManager({
    pool,
    sidePool,
    activeForkBaseLeafByChat,
    getOrCreate: async (chatJid) => pool.get(chatJid)?.session,
    isActive: (chatJid) => {
      const session = pool.get(chatJid)?.session;
      return Boolean(session?.isStreaming || session?.isCompacting || session?.isRetrying || session?.isBashRunning);
    },
    onWarn: (message) => warns.push(message),
    ...overrides,
  });

  return { manager, pool, sidePool, activeForkBaseLeafByChat, warns };
}

test("AgentBranchManager registers active chats and resolves agent handles", async () => {
  const ws = createTempWorkspace("piclaw-branch-manager-");
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const db = await importFresh<typeof import("../src/db.js")>("../src/db.js");
  db.initDatabase();

  const fixture = createManager();
  fixture.pool.set("web:topic", {
    session: {
      sessionId: "session-1",
      sessionName: "Research Bot",
      model: { provider: "openai", id: "gpt-test" },
      isStreaming: false,
      isCompacting: false,
      isRetrying: false,
      isBashRunning: false,
    },
    lastUsed: Date.now(),
  });

  const branch = fixture.manager.ensureBranchRegistration("web:topic", fixture.pool.get("web:topic")?.session);
  expect(branch.agent_name).toBe("research-bot");

  const active = fixture.manager.listActiveChats();
  expect(active).toHaveLength(1);
  expect(active[0]?.agent_name).toBe("research-bot");
  expect(active[0]?.model).toBe("openai/gpt-test");
  expect(fixture.manager.findActiveChatByAgentName("Research Bot")?.chat_jid).toBe("web:topic");
  expect(fixture.manager.findChatByAgentName("research-bot")).toEqual({
    chat_jid: "web:topic",
    agent_name: "research-bot",
  });
  expect(fixture.manager.getAgentHandleForChat("web:topic")).toBe("research-bot");

  ws.cleanup();
});

test("AgentBranchManager prunes inactive branches and disposes cached sessions", async () => {
  const ws = createTempWorkspace("piclaw-branch-prune-");
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const db = await importFresh<typeof import("../src/db.js")>("../src/db.js");
  db.initDatabase();
  db.storeChatMetadata("web:default", new Date().toISOString(), "Default");
  const root = db.getChatBranchByChatJid("web:default");
  db.storeChatMetadata("web:default:branch:prune", new Date().toISOString(), "Prune Me");
  db.ensureChatBranch({
    chat_jid: "web:default:branch:prune",
    root_chat_jid: "web:default",
    parent_branch_id: root?.branch_id ?? null,
    agent_name: "prune-me",
  });

  let disposed = 0;
  const session = {
    sessionName: "Prune Me",
    isStreaming: false,
    isCompacting: false,
    isRetrying: false,
    isBashRunning: false,
    dispose() {
      disposed += 1;
    },
  };

  const fixture = createManager();
  fixture.pool.set("web:default:branch:prune", { session, lastUsed: Date.now() });
  fixture.sidePool.set("web:default:branch:prune", { session, lastUsed: Date.now() });
  fixture.activeForkBaseLeafByChat.set("web:default:branch:prune", "leaf-1");

  const archived = await fixture.manager.pruneChatBranch("web:default:branch:prune");
  expect(archived.archived_at).toBeTruthy();
  expect(fixture.pool.has("web:default:branch:prune")).toBe(false);
  expect(fixture.sidePool.has("web:default:branch:prune")).toBe(false);
  expect(fixture.activeForkBaseLeafByChat.has("web:default:branch:prune")).toBe(false);
  expect(disposed).toBe(2);

  ws.cleanup();
});
