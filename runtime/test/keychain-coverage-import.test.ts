import { expect, test } from "bun:test";
import { writeFileSync } from "fs";
import { join } from "path";
import { setEnv, withTempWorkspaceEnv } from "./helpers.js";

test("plain import covers keychain file-key, CRUD, resolution, and disabled-state branches", async () => {
  await withTempWorkspaceEnv(
    "piclaw-keychain-plain-",
    { PICLAW_KEYCHAIN_KEY: undefined },
    async (ws) => {
      const keyFile = join(ws.workspace, "keychain.key");
      writeFileSync(keyFile, "plain-file-key\n", "utf8");
      const restoreKeyFile = setEnv({ PICLAW_KEYCHAIN_KEY: undefined, PICLAW_KEYCHAIN_KEY_FILE: keyFile });

      const db = await import("../src/db.js");
      db.initDatabase();
      const keychain = await import("../src/secure/keychain.js");

      try {
        await keychain.setKeychainEntry({
          name: "plain/service",
          type: "basic",
          secret: "plain-secret",
          username: "plain-user",
        });

        expect(keychain.listKeychainEntries().map((entry) => entry.name)).toEqual(["plain/service"]);
        expect(await keychain.resolveKeychainEnv({
          TOKEN: "keychain:plain/service",
          USER: "keychain:plain/service:username",
          PLAIN: "literal",
        })).toEqual({
          TOKEN: "plain-secret",
          USER: "plain-user",
          PLAIN: "literal",
        });
        expect(await keychain.resolveKeychainPlaceholders("keychain:plain/service:username:keychain:plain/service")).toBe(
          "plain-user:plain-secret"
        );
        expect(await keychain.resolveKeychainPlaceholders("plain text")).toBe("plain text");

        restoreKeyFile();
        await expect(keychain.getKeychainEntry("plain/service")).rejects.toThrow("Keychain is disabled");

        const restoreKeyFileAgain = setEnv({ PICLAW_KEYCHAIN_KEY: undefined, PICLAW_KEYCHAIN_KEY_FILE: keyFile });
        try {
          const entry = await keychain.getKeychainEntry("plain/service");
          expect(entry.secret).toBe("plain-secret");
        } finally {
          restoreKeyFileAgain();
        }

        expect(keychain.deleteKeychainEntry("plain/service")).toBe(true);
        expect(keychain.deleteKeychainEntry("plain/service")).toBe(false);
        const restoreKeyFileFinal = setEnv({ PICLAW_KEYCHAIN_KEY: undefined, PICLAW_KEYCHAIN_KEY_FILE: keyFile });
        try {
          await expect(keychain.getKeychainEntry("plain/service")).rejects.toThrow("Keychain entry not found");
        } finally {
          restoreKeyFileFinal();
        }
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
});
