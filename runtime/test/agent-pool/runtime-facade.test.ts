import { expect, test } from "bun:test";

import { AgentRuntimeFacade } from "../../src/agent-pool/runtime-facade.js";

function createFacade(overrides: Partial<ConstructorParameters<typeof AgentRuntimeFacade>[0]> = {}) {
  const pool = new Map<string, { session: any; lastUsed: number }>();
  const warnings: string[] = [];
  const errors: string[] = [];
  const cleared: string[] = [];

  const facade = new AgentRuntimeFacade({
    pool,
    getOrCreate: async (chatJid) => {
      const entry = pool.get(chatJid);
      if (!entry) throw new Error(`Missing session for ${chatJid}`);
      return entry.session;
    },
    modelRegistry: {
      getAll: () => [],
      getAvailable: () => [],
      registerProvider: () => {},
    } as any,
    authStorage: { get: () => null } as any,
    clearAttachments: (chatJid) => cleared.push(chatJid),
    onWarn: (message) => warnings.push(message),
    onError: (message) => errors.push(message),
    ...overrides,
  });

  return { facade, pool, warnings, errors, cleared };
}

test("AgentRuntimeFacade reports available models and context usage", async () => {
  const session = {
    model: { provider: "openai", id: "gpt-test", reasoning: true },
    thinkingLevel: "high",
    getContextUsage: () => ({ tokens: 10, contextWindow: 100, percent: 10 }),
    modelRegistry: {
      getAvailable: () => [
        { provider: "openai", id: "gpt-test" },
        { provider: "anthropic", id: "claude-test" },
      ],
    },
  };

  const fixture = createFacade();
  fixture.pool.set("web:default", { session, lastUsed: Date.now() });

  const available = await fixture.facade.getAvailableModels("web:default");
  expect(available.current).toBe("openai/gpt-test");
  expect(available.models).toEqual(["openai/gpt-test", "anthropic/claude-test"]);
  expect(available.thinking_level).toBe("high");
  expect(available.supports_thinking).toBe(true);
  expect(fixture.facade.getContextUsageForChat("web:default")).toEqual({
    tokens: 10,
    contextWindow: 100,
    percent: 10,
  });
});

test("AgentRuntimeFacade removes one queued follow-up and replays the remaining queue", async () => {
  const prompts: Array<{ text: string; behavior: string }> = [];
  const session = {
    isStreaming: true,
    getFollowUpMessages: () => ["first", "second", "third"],
    clearQueue: () => ({ steering: ["keep steer"], followUp: ["first", "second", "third"] }),
    prompt: async (text: string, options?: { streamingBehavior?: string }) => {
      prompts.push({ text, behavior: options?.streamingBehavior ?? "" });
    },
  };

  const fixture = createFacade();
  fixture.pool.set("web:default", { session, lastUsed: Date.now() });

  await expect(fixture.facade.removeQueuedFollowupMessage("web:default", "second")).resolves.toBe(true);
  expect(prompts).toEqual([
    { text: "keep steer", behavior: "steer" },
    { text: "first", behavior: "followUp" },
    { text: "third", behavior: "followUp" },
  ]);
});

test("AgentRuntimeFacade clears attachments around slash commands", async () => {
  const session = { marker: true };
  const fixture = createFacade({
    executeSlashCommandFn: async (incomingSession, chatJid, rawText) => ({
      ok: incomingSession === session,
      chatJid,
      rawText,
    } as any),
  });
  fixture.pool.set("web:default", { session, lastUsed: Date.now() });

  const result = await fixture.facade.applySlashCommand("web:default", "/tasks");
  expect(result).toEqual({ ok: true, chatJid: "web:default", rawText: "/tasks" });
  expect(fixture.cleared).toEqual(["web:default", "web:default"]);
});
