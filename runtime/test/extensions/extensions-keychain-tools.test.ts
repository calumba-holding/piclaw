/**
 * test/extensions/extensions-keychain-tools.test.ts – Tests for keychain-tools extension.
 */

import { beforeEach, afterEach, describe, expect, test } from "bun:test";
import { createTempWorkspace, importFresh, setEnv } from "../helpers.js";
import { createFakeExtensionApi } from "./fake-extension-api.js";

describe("keychain-tools extension", () => {
  let ws: ReturnType<typeof createTempWorkspace>;
  let restoreEnv: (() => void) | null = null;

  beforeEach(async () => {
    ws = createTempWorkspace("piclaw-keychain-tools-");
    restoreEnv = setEnv({
      PICLAW_WORKSPACE: ws.workspace,
      PICLAW_STORE: ws.store,
      PICLAW_DATA: ws.data,
      PICLAW_KEYCHAIN_KEY: "test-keychain-tools",
    });

    const db = await importFresh<typeof import("../src/db.js")>("../src/db.js");
    db.initDatabase();
    const keychain = await importFresh<typeof import("../src/secure/keychain.js")>("../src/secure/keychain.js");
    await keychain.setKeychainEntry({
      name: "ssh/piclaw",
      type: "secret",
      secret: "PRIVATE_KEY_DATA",
      username: "git",
    });
  });

  afterEach(() => {
    restoreEnv?.();
    restoreEnv = null;
    ws.cleanup();
  });

  async function getTool() {
    const { keychainTools } = await importFresh<typeof import("../src/extensions/keychain-tools.js")>(
      "../src/extensions/keychain-tools.js",
    );
    const fake = createFakeExtensionApi();
    keychainTools(fake.api);
    return fake.tools.get("keychain");
  }

  test("lists keychain entries", async () => {
    const tool = await getTool();
    const result = await tool.execute("k1", { action: "list" });
    expect(result.content[0].text).toContain("Keychain entries");
    expect(result.content[0].text).toContain("ssh/piclaw");
    expect(result.details.count).toBe(1);
  });

  test("retrieves secret and username fields", async () => {
    const tool = await getTool();

    const secretResult = await tool.execute("k2", { action: "get", name: "ssh/piclaw" });
    expect(secretResult.content[0].text).toBe("PRIVATE_KEY_DATA");

    const userResult = await tool.execute("k3", { action: "get", name: "ssh/piclaw", field: "username" });
    expect(userResult.content[0].text).toBe("git");
  });

  test("sets a keychain entry and can read it back", async () => {
    const tool = await getTool();

    const setResult = await tool.execute("k4", {
      action: "set",
      name: "proxmox/piclaw",
      type: "token",
      secret: "tok_123",
      username: "root@pam!piclaw",
    });
    expect(setResult.content[0].text).toContain("Stored keychain entry proxmox/piclaw (token).");

    const secretResult = await tool.execute("k5", { action: "get", name: "proxmox/piclaw" });
    expect(secretResult.content[0].text).toBe("tok_123");

    const userResult = await tool.execute("k6", { action: "get", name: "proxmox/piclaw", field: "username" });
    expect(userResult.content[0].text).toBe("root@pam!piclaw");
  });

  test("deletes a keychain entry", async () => {
    const tool = await getTool();

    const removed = await tool.execute("k7", { action: "delete", name: "ssh/piclaw" });
    expect(removed.content[0].text).toContain("Deleted keychain entry ssh/piclaw.");

    const missing = await tool.execute("k8", { action: "delete", name: "ssh/piclaw" });
    expect(missing.content[0].text).toContain("Keychain entry not found: ssh/piclaw");
  });

  test("set/delete actions validate required fields", async () => {
    const tool = await getTool();

    const missingNameSet = await tool.execute("k9", { action: "set", secret: "abc" });
    expect(missingNameSet.content[0].text).toContain("Provide name for action=set");

    const missingSecret = await tool.execute("k10", { action: "set", name: "foo/bar" });
    expect(missingSecret.content[0].text).toContain("Provide secret for action=set");

    const missingNameDelete = await tool.execute("k11", { action: "delete" });
    expect(missingNameDelete.content[0].text).toContain("Provide name for action=delete");
  });
});
