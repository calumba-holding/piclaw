import { expect, test } from "bun:test";

import { AgentSessionManager } from "../../src/agent-pool/session-manager.js";

function createManager(overrides: Record<string, unknown> = {}) {
  const pool = new Map<string, { session: any; lastUsed: number }>();
  const sidePool = new Map<string, { session: any; lastUsed: number }>();
  const state = {
    bound: [] as string[],
    registered: [] as string[],
    infos: [] as string[],
    warns: [] as string[],
    errors: [] as string[],
  };

  const manager = new AgentSessionManager({
    pool,
    sidePool,
    authStorage: {} as any,
    modelRegistry: { find: () => undefined } as any,
    settingsManager: {
      getDefaultProvider: () => null,
      getDefaultModel: () => null,
    } as any,
    createDefaultTools: () => [] as any,
    bindSession: async (_session, chatJid) => {
      state.bound.push(chatJid);
    },
    ensureBranchRegistration: (chatJid) => {
      state.registered.push(chatJid);
    },
    onInfo: (message) => state.infos.push(message),
    onWarn: (message) => state.warns.push(message),
    onError: (message) => state.errors.push(message),
    ...overrides,
  });

  return { manager, pool, sidePool, state };
}

test("AgentSessionManager creates, caches, and binds main sessions", async () => {
  let createCalls = 0;
  const session = {
    dispose() {},
  };
  const fixture = createManager({
    createSession: async () => {
      createCalls += 1;
      return session as any;
    },
  });

  const first = await fixture.manager.getOrCreate("web:default");
  const second = await fixture.manager.getOrCreate("web:default");

  expect(first).toBe(session);
  expect(second).toBe(session);
  expect(createCalls).toBe(1);
  expect(fixture.state.bound).toEqual(["web:default"]);
  expect(fixture.state.registered).toEqual(["web:default"]);
  expect(fixture.pool.get("web:default")?.session).toBe(session);
});

test("AgentSessionManager evicts idle sessions and shuts down remaining sessions", async () => {
  let disposed = 0;
  const oldSession = {
    isStreaming: false,
    isBashRunning: false,
    isCompacting: false,
    dispose() {
      disposed += 1;
    },
  };
  const activeSession = {
    isStreaming: true,
    isBashRunning: false,
    isCompacting: false,
    dispose() {
      disposed += 1;
    },
  };

  const fixture = createManager();
  fixture.pool.set("web:old", { session: oldSession as any, lastUsed: Date.now() - 10_000 });
  fixture.pool.set("web:active", { session: activeSession as any, lastUsed: Date.now() - 10_000 });

  fixture.manager.evictIdle(1_000);

  expect(fixture.pool.has("web:old")).toBe(false);
  expect(fixture.pool.has("web:active")).toBe(true);
  expect(disposed).toBe(1);

  await fixture.manager.shutdown();
  expect(fixture.pool.size).toBe(0);
  expect(fixture.sidePool.size).toBe(0);
  expect(disposed).toBe(2);
});
