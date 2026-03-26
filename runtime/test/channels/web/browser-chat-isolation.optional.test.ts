import { afterAll, afterEach, beforeAll, expect, test } from "bun:test";
import { chromium, type Browser, type BrowserContext, type Page } from "playwright";
import { startDedicatedWebTestInstance, type DedicatedWebTestInstance } from "./helpers/dedicated-instance.js";

const optionalBrowserTest = process.env.PICLAW_RUN_OPTIONAL_BROWSER_TESTS === "1" ? test : test.skip;

let instance: DedicatedWebTestInstance | null = null;
let browser: Browser | null = null;
let context: BrowserContext | null = null;

beforeAll(async () => {
  if (process.env.PICLAW_RUN_OPTIONAL_BROWSER_TESTS !== "1") return;
  browser = await chromium.launch({ headless: true });
});

afterEach(async () => {
  await context?.close();
  context = null;
  await instance?.close();
  instance = null;
});

afterAll(async () => {
  await browser?.close();
  browser = null;
});

function seedBranchFamily(db: any) {
  const now = new Date().toISOString();
  db.storeChatMetadata("web:default", now, "Root Chat");
  const root = db.ensureChatBranch({
    chat_jid: "web:default",
    root_chat_jid: "web:default",
    parent_branch_id: null,
    agent_name: "root",
  });

  db.storeChatMetadata("web:branch-a", now, "Alpha Branch");
  db.ensureChatBranch({
    chat_jid: "web:branch-a",
    root_chat_jid: "web:default",
    parent_branch_id: root.branch_id,
    agent_name: "alpha",
  });

  db.storeChatMetadata("web:branch-b", now, "Beta Branch");
  db.ensureChatBranch({
    chat_jid: "web:branch-b",
    root_chat_jid: "web:default",
    parent_branch_id: root.branch_id,
    agent_name: "beta",
  });
}

function createStubAgentPool(db: any) {
  const activeChats = new Set<string>();

  const toActiveChat = (branch: any) => ({
    branch_id: branch.branch_id,
    chat_jid: branch.chat_jid,
    root_chat_jid: branch.root_chat_jid,
    parent_branch_id: branch.parent_branch_id,
    agent_name: branch.agent_name,
    display_name: null,
    session_id: null,
    session_name: branch.agent_name,
    model: null,
    is_active: activeChats.has(branch.chat_jid),
    has_side_session: false,
  });

  const buildTurnTokens = (prompt: string) => {
    if (prompt.includes("USER_A_ISOLATION_TOKEN")) {
      return {
        thought: "THOUGHT_A_ISOLATION_TOKEN",
        draft: "DRAFT_A_ISOLATION_TOKEN",
        reply: "REPLY_A_ISOLATION_TOKEN",
      };
    }
    if (prompt.includes("USER_B_ISOLATION_TOKEN")) {
      return {
        thought: "THOUGHT_B_ISOLATION_TOKEN",
        draft: "DRAFT_B_ISOLATION_TOKEN",
        reply: "REPLY_B_ISOLATION_TOKEN",
      };
    }
    return {
      thought: "THOUGHT_GENERIC_ISOLATION_TOKEN",
      draft: "DRAFT_GENERIC_ISOLATION_TOKEN",
      reply: "REPLY_GENERIC_ISOLATION_TOKEN",
    };
  };

  return {
    isStreaming: (chatJid: string) => activeChats.has(chatJid),
    isActive: (chatJid: string) => activeChats.has(chatJid),
    getContextUsageForChat: async () => null,
    getAvailableModels: async () => ({
      current: null,
      models: [],
      thinking_level: null,
      supports_thinking: false,
      provider_usage: null,
    }),
    getCurrentModelLabel: async () => null,
    listKnownChats: (rootChatJid?: string | null) => db.listChatBranches(rootChatJid || null).map(toActiveChat),
    listActiveChats: () => db.listChatBranches(null).map(toActiveChat),
    getAgentHandleForChat: (chatJid: string) => db.getChatBranchByChatJid(chatJid)?.agent_name || "agent",
    findChatByAgentName: (agentName: string) => {
      const branch = db.getChatBranchByAgentName(String(agentName || "").trim().toLowerCase());
      return branch ? { chat_jid: branch.chat_jid, agent_name: branch.agent_name } : null;
    },
    renameChatBranch: async (chatJid: string, options: { agentName?: string | null } = {}) => {
      return db.renameChatBranchIdentity({
        chat_jid: chatJid,
        agent_name: options.agentName ?? null,
        
      });
    },
    pruneChatBranch: async (chatJid: string) => {
      const branch = db.getChatBranchByChatJid(chatJid);
      if (!branch) {
        throw new Error("Unknown chat branch.");
      }
      const rootChatJid = branch.root_chat_jid || branch.chat_jid;
      if (chatJid === rootChatJid) {
        throw new Error("Cannot prune the root chat branch.");
      }
      if (activeChats.has(chatJid)) {
        throw new Error("Cannot prune a branch while it is active.");
      }
      return db.archiveChatBranch(chatJid);
    },
    runAgent: async (prompt: string, chatJid: string, options: { onEvent?: (event: any) => void; onTurnComplete?: (turn: { text: string; attachments: unknown[] }) => void } = {}) => {
      const tokens = buildTurnTokens(prompt);
      activeChats.add(chatJid);
      try {
        options.onEvent?.({
          type: "message_update",
          assistantMessageEvent: { type: "thinking_start" },
        });
        options.onEvent?.({
          type: "message_update",
          assistantMessageEvent: { type: "thinking_delta", delta: tokens.thought },
        });
        options.onEvent?.({
          type: "message_update",
          assistantMessageEvent: { type: "thinking_end", content: tokens.thought },
        });
        await Bun.sleep(75);
        options.onEvent?.({
          type: "message_update",
          assistantMessageEvent: { type: "text_start" },
        });
        options.onEvent?.({
          type: "message_update",
          assistantMessageEvent: { type: "text_delta", delta: tokens.draft },
        });
        await Bun.sleep(250);
        options.onTurnComplete?.({ text: tokens.reply, attachments: [] });
        return { status: "success", result: tokens.reply };
      } finally {
        activeChats.delete(chatJid);
      }
    },
  };
}

async function launchDedicatedInstance(): Promise<DedicatedWebTestInstance> {
  let seededDb: any;
  instance = await startDedicatedWebTestInstance({
    prefix: "piclaw-browser-isolation-",
    seed: (db) => {
      seededDb = db;
      seedBranchFamily(db);
    },
    agentPool: {
      getContextUsageForChat: async () => null,
    },
  });
  const stubAgentPool = createStubAgentPool(seededDb);
  instance.web.agentPool = stubAgentPool;
  return instance;
}

function chatOnlyUrl(baseUrl: string, chatJid: string): string {
  const url = new URL(baseUrl);
  url.searchParams.set("chat_jid", chatJid);
  url.searchParams.set("chat_only", "1");
  return url.toString();
}

async function openChatWindow(page: Page, url: string) {
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.waitForSelector("textarea", { timeout: 15000 });
}

async function waitForBodyText(page: Page, token: string) {
  await page.waitForFunction(
    (expected) => Boolean(document.body?.innerText?.includes(String(expected))),
    token,
  );
}

async function getBodyText(page: Page): Promise<string> {
  return (await page.locator("body").textContent()) || "";
}

optionalBrowserTest("optional browser isolation: windows stay isolated across live turns, rename, and prune flows", async () => {
  const dedicated = await launchDedicatedInstance();
  context = await browser!.newContext();
  const pageA = await context.newPage();
  const pageB = await context.newPage();

  await Promise.all([
    openChatWindow(pageA, chatOnlyUrl(dedicated.baseUrl, "web:branch-a")),
    openChatWindow(pageB, chatOnlyUrl(dedicated.baseUrl, "web:branch-b")),
  ]);

  await pageA.locator("textarea").fill("USER_A_ISOLATION_TOKEN");
  await pageA.locator("button.send-btn").click();

  await waitForBodyText(pageA, "DRAFT_A_ISOLATION_TOKEN");
  const branchATextAfterDraft = await getBodyText(pageA);
  expect(branchATextAfterDraft).toContain("USER_A_ISOLATION_TOKEN");
  expect(branchATextAfterDraft).toContain("THOUGHT_A_ISOLATION_TOKEN");
  expect(branchATextAfterDraft).toContain("DRAFT_A_ISOLATION_TOKEN");

  const branchBDuringA = await getBodyText(pageB);
  expect(branchBDuringA).not.toContain("USER_A_ISOLATION_TOKEN");
  expect(branchBDuringA).not.toContain("THOUGHT_A_ISOLATION_TOKEN");
  expect(branchBDuringA).not.toContain("DRAFT_A_ISOLATION_TOKEN");

  await waitForBodyText(pageA, "REPLY_A_ISOLATION_TOKEN");
  const branchBAfterA = await getBodyText(pageB);
  expect(branchBAfterA).not.toContain("REPLY_A_ISOLATION_TOKEN");

  await pageB.locator("textarea").fill("USER_B_ISOLATION_TOKEN");
  await pageB.locator("button.send-btn").click();

  await waitForBodyText(pageB, "DRAFT_B_ISOLATION_TOKEN");
  const branchBTextAfterDraft = await getBodyText(pageB);
  expect(branchBTextAfterDraft).toContain("USER_B_ISOLATION_TOKEN");
  expect(branchBTextAfterDraft).toContain("THOUGHT_B_ISOLATION_TOKEN");
  expect(branchBTextAfterDraft).toContain("DRAFT_B_ISOLATION_TOKEN");
  await waitForBodyText(pageB, "REPLY_B_ISOLATION_TOKEN");

  const branchAFinal = await getBodyText(pageA);
  expect(branchAFinal).not.toContain("USER_B_ISOLATION_TOKEN");
  expect(branchAFinal).not.toContain("THOUGHT_B_ISOLATION_TOKEN");
  expect(branchAFinal).not.toContain("DRAFT_B_ISOLATION_TOKEN");
  expect(branchAFinal).not.toContain("REPLY_B_ISOLATION_TOKEN");

  const renameResponse = await fetch(`${dedicated.baseUrl}/agent/branch-rename`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: dedicated.baseUrl,
    },
    body: JSON.stringify({
      chat_jid: "web:branch-a",
      agent_name: "alpha-renamed",
    }),
  });
  expect(renameResponse.ok).toBe(true);

  const renameCheck = await fetch(`${dedicated.baseUrl}/agent/branches?root_chat_jid=${encodeURIComponent("web:default")}`);
  const renamePayload = await renameCheck.json();
  const renamedBranch = Array.isArray(renamePayload?.chats)
    ? renamePayload.chats.find((branch: any) => branch?.chat_jid === "web:branch-a")
    : null;
  expect(renamedBranch?.agent_name).toBe("alpha-renamed");

  expect(pageA.url()).toContain("chat_jid=web%3Abranch-a");
  expect(pageB.url()).toContain("chat_jid=web%3Abranch-b");

  const pruneResponse = await fetch(`${dedicated.baseUrl}/agent/branch-prune`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: dedicated.baseUrl,
    },
    body: JSON.stringify({ chat_jid: "web:branch-a" }),
  });
  expect(pruneResponse.ok).toBe(true);
  expect(pageB.url()).toContain("chat_jid=web%3Abranch-b");

  const branchesResponse = await fetch(`${dedicated.baseUrl}/agent/branches?root_chat_jid=${encodeURIComponent("web:default")}`);
  expect(branchesResponse.ok).toBe(true);
  const branchesPayload = await branchesResponse.json();
  const branchChatIds = Array.isArray(branchesPayload?.chats)
    ? branchesPayload.chats.map((branch: any) => branch?.chat_jid).filter(Boolean)
    : [];
  expect(branchChatIds).not.toContain("web:branch-a");
  expect(branchChatIds).toContain("web:default");
  expect(branchChatIds).toContain("web:branch-b");
});
