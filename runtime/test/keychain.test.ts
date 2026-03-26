import { expect, test } from "bun:test";
import { writeFileSync } from "fs";
import { join } from "path";
import { importFresh, setEnv, withTempWorkspaceEnv } from "./helpers.js";

async function withKeychainContext(
  run: (ctx: {
    workspace: { workspace: string; store: string; data: string };
    db: typeof import("../src/db.js");
    keychain: typeof import("../src/secure/keychain.js");
  }) => Promise<void>,
  env: Record<string, string | undefined> = {},
): Promise<void> {
  await withTempWorkspaceEnv(
    "piclaw-keychain-",
    { PICLAW_KEYCHAIN_KEY: "test-key", ...env },
    async (workspace) => {
      const db = await importFresh<typeof import("../src/db.js")>("../src/db.js");
      db.initDatabase();
      const keychain = await importFresh<typeof import("../src/secure/keychain.js")>("../src/secure/keychain.js");

      try {
        await run({ workspace, db, keychain });
      } finally {
        keychain.setKeyMaterialProviderForTests(null);
        try {
          db.getDb().close();
        } catch {
          // expected: a test may already have closed the in-memory handle
        }
      }
    },
  );
}

test("stores, updates, lists, and deletes entries across supported types", async () => {
  await withKeychainContext(async ({ keychain }) => {
    await keychain.setKeychainEntry({
      name: "alpha/token",
      type: "token",
      secret: "token-secret",
      username: "alpha-user",
    });
    await keychain.setKeychainEntry({
      name: "beta/password",
      type: "password",
      secret: "password-secret",
    });
    await keychain.setKeychainEntry({
      name: "gamma/basic",
      type: "basic",
      secret: "basic-secret",
      username: "basic-user",
    });
    await keychain.setKeychainEntry({
      name: "delta/secret",
      type: "secret",
      secret: "secret-secret",
    });

    await keychain.setKeychainEntry({
      name: "alpha/token",
      type: "token",
      secret: "rotated-token",
      username: "alpha-user",
    });

    const updated = await keychain.getKeychainEntry("alpha/token");
    expect(updated.secret).toBe("rotated-token");
    expect(updated.username).toBe("alpha-user");

    const list = keychain.listKeychainEntries();
    expect(list.map((entry) => [entry.name, entry.type])).toEqual([
      ["alpha/token", "token"],
      ["beta/password", "password"],
      ["delta/secret", "secret"],
      ["gamma/basic", "basic"],
    ]);
    expect(list.every((entry) => entry.createdAt && entry.updatedAt)).toBe(true);

    expect(keychain.deleteKeychainEntry("beta/password")).toBe(true);
    expect(keychain.deleteKeychainEntry("beta/password")).toBe(false);
    await expect(keychain.getKeychainEntry("beta/password")).rejects.toThrow("Keychain entry not found");
  });
});

test("reads key material from PICLAW_KEYCHAIN_KEY_FILE when no env key is set", async () => {
  await withTempWorkspaceEnv(
    "piclaw-keychain-file-",
    { PICLAW_KEYCHAIN_KEY: undefined },
    async (workspace) => {
      const keyFile = join(workspace.workspace, "keychain.key");
      writeFileSync(keyFile, "file-backed-key\n", "utf8");

      const db = await importFresh<typeof import("../src/db.js")>("../src/db.js");
      db.initDatabase();
      const keychain = await importFresh<typeof import("../src/secure/keychain.js")>("../src/secure/keychain.js");
      const restoreKeyFile = setEnv({ PICLAW_KEYCHAIN_KEY: undefined, PICLAW_KEYCHAIN_KEY_FILE: keyFile });

      try {
        await keychain.setKeychainEntry({
          name: "file-backed",
          type: "secret",
          secret: "file-secret",
        });

        const entry = await keychain.getKeychainEntry("file-backed");
        expect(entry.secret).toBe("file-secret");
      } finally {
        keychain.setKeyMaterialProviderForTests(null);
        restoreKeyFile();
        try {
          db.getDb().close();
        } catch {
          // expected: a test may already have closed the in-memory handle
        }
      }
    },
  );
});

test("supports provider overrides and reports disabled keychain when no key material exists", async () => {
  await withKeychainContext(async ({ keychain }) => {
    await keychain.setKeychainEntry({
      name: "provider-entry",
      type: "password",
      secret: "provider-secret",
      username: "provider-user",
    });

    const restoreDisabled = setEnv({ PICLAW_KEYCHAIN_KEY: undefined, PICLAW_KEYCHAIN_KEY_FILE: undefined });
    try {
      keychain.setKeyMaterialProviderForTests({
        getKeyMaterial: () => new TextEncoder().encode("test-key"),
      });

      const entry = await keychain.getKeychainEntry("provider-entry");
      expect(entry.secret).toBe("provider-secret");
      expect(entry.username).toBe("provider-user");

      keychain.setKeyMaterialProviderForTests(null);
      await expect(keychain.getKeychainEntry("provider-entry")).rejects.toThrow("Keychain is disabled");
    } finally {
      restoreDisabled();
    }
  });
});

test("resolves keychain env references and inline placeholders", async () => {
  await withKeychainContext(async ({ keychain }) => {
    await keychain.setKeychainEntry({
      name: "service/api",
      type: "basic",
      secret: "api-secret",
      username: "api-user",
    });

    const env = await keychain.resolveKeychainEnv({
      TOKEN: "keychain:service/api:token",
      PASSWORD: "keychain:service/api:password",
      USERNAME: "keychain:service/api:user",
      PLAIN: "literal",
      OMITTED: undefined,
    });

    expect(env).toEqual({
      TOKEN: "api-secret",
      PASSWORD: "api-secret",
      USERNAME: "api-user",
      PLAIN: "literal",
    });

    const placeholderText = await keychain.resolveKeychainPlaceholders(
      "curl -u keychain:service/api:user:keychain:service/api:token https://example.test/?token=keychain:service/api:secret&again=keychain:service/api:token"
    );

    expect(placeholderText).toBe(
      "curl -u api-user:api-secret https://example.test/?token=api-secret&again=api-secret"
    );
    expect(await keychain.resolveKeychainPlaceholders("plain text")).toBe("plain text");
  });
});

test("rejects invalid entry shapes, invalid references, missing usernames, and unsupported KDFs", async () => {
  await withKeychainContext(async ({ db, keychain }) => {
    await expect(
      keychain.setKeychainEntry({ name: "", type: "token", secret: "x" })
    ).rejects.toThrow("Keychain entry name is required");
    await expect(
      keychain.setKeychainEntry({ name: "missing-secret", type: "token", secret: "" })
    ).rejects.toThrow("Keychain entry secret is required");
    await expect(keychain.resolveKeychainEnv({ BAD: "keychain:broken:wat" })).rejects.toThrow(
      "Invalid keychain reference"
    );

    await keychain.setKeychainEntry({
      name: "no-username",
      type: "secret",
      secret: "hidden",
    });

    await expect(
      keychain.resolveKeychainEnv({ USER: "keychain:no-username:username" })
    ).rejects.toThrow("has no username");
    await expect(
      keychain.resolveKeychainPlaceholders("keychain:no-username:username")
    ).rejects.toThrow("has no username");

    await keychain.setKeychainEntry({
      name: "legacy-kdf",
      type: "secret",
      secret: "legacy-secret",
    });
    db.getDb().prepare("UPDATE keychain_entries SET kdf = ? WHERE name = ?").run("legacy-kdf", "legacy-kdf");
    await expect(keychain.getKeychainEntry("legacy-kdf")).rejects.toThrow("Unsupported keychain KDF");
  });
});
