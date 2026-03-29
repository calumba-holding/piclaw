import { expect, test } from "bun:test";

import { AgentSessionBinder } from "../../src/agent-pool/session-binder.js";

test("AgentSessionBinder binds existing sessions and handles binder failures", async () => {
  const pool = new Map<string, { session: any; lastUsed: number }>();
  const calls: Array<{ session: string; chatJid: string }> = [];
  const errors: string[] = [];

  pool.set("web:one", { session: { id: "one" }, lastUsed: Date.now() });
  pool.set("web:two", { session: { id: "two" }, lastUsed: Date.now() });

  const binder = new AgentSessionBinder({
    pool: pool as any,
    onError: (message) => errors.push(message),
  });

  binder.setBinder((session: any, chatJid) => {
    calls.push({ session: session.id, chatJid });
    if (chatJid === "web:two") throw new Error("boom");
  });

  await binder.bindSession({ id: "three" } as any, "web:three");

  expect(calls).toEqual([
    { session: "one", chatJid: "web:one" },
    { session: "two", chatJid: "web:two" },
    { session: "three", chatJid: "web:three" },
  ]);
  expect(errors).toEqual(["Failed to bind session"]);
});
