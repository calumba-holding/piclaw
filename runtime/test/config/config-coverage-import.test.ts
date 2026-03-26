import { expect, test } from "bun:test";
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { withTempWorkspaceEnv } from "../helpers.js";

function writeWorkspaceConfig(workspace: string, config: Record<string, unknown>): void {
  const configDir = join(workspace, ".piclaw");
  mkdirSync(configDir, { recursive: true });
  writeFileSync(join(configDir, "config.json"), JSON.stringify(config, null, 2), "utf8");
}

test("plain import covers config module init branches with isolated argv and env", async () => {
  await withTempWorkspaceEnv(
    "piclaw-config-plain-",
    {
      ASSISTANT_NAME: "Legacy Pi",
      PICLAW_ASSISTANT_NAME: undefined,
      PICLAW_WEB_PORT: "8181",
      PICLAW_WEB_IDLE_TIMEOUT: "12",
      TZ: "UTC",
    },
    async (ws) => {
      writeWorkspaceConfig(ws.workspace, {
        web: {
          trustProxy: "yes",
          totpWindow: "4",
          sessionTtl: "60",
          internalSecret: "config-secret",
          passkeyMode: "PASSKEY-ONLY",
        },
        webTerminalEnabled: "on",
        debugCardSubmissions: "off",
        sessionMaxSizeMb: "64",
        sessionAutoRotate: "true",
      });

      const stderrChunks: string[] = [];
      const originalArgv = process.argv.slice();
      const originalStderrWrite = process.stderr.write.bind(process.stderr);
      process.argv = [
        originalArgv[0] || "bun",
        originalArgv[1] || "test",
        "--port",
        "9001",
        "--host=127.0.0.1",
        "--idle-timeout=22",
      ];
      (process.stderr.write as unknown as (chunk: string | Uint8Array) => boolean) = ((chunk: string | Uint8Array) => {
        stderrChunks.push(typeof chunk === "string" ? chunk : Buffer.from(chunk).toString("utf8"));
        return true;
      }) as typeof process.stderr.write;

      try {
        const cfg = await import("../../src/core/config.js");
        expect(cfg.ASSISTANT_NAME).toBe("Legacy Pi");
        expect(cfg.WEB_PORT).toBe(9001);
        expect(cfg.WEB_HOST).toBe("127.0.0.1");
        expect(cfg.WEB_IDLE_TIMEOUT).toBe(22);
        expect(cfg.WEB_TERMINAL_ENABLED).toBe(true);
        expect(cfg.DEBUG_CARD_SUBMISSIONS).toBe(false);
        expect(cfg.TRUST_PROXY).toBe(true);
        expect(cfg.WEB_TOTP_WINDOW).toBe(4);
        expect(cfg.WEB_SESSION_TTL).toBe(60);
        expect(cfg.WEB_INTERNAL_SECRET).toBe("config-secret");
        expect(cfg.WEB_PASSKEY_MODE).toBe("passkey-only");
        expect(cfg.SESSION_MAX_SIZE_MB).toBe(64);
        expect(cfg.SESSION_AUTO_ROTATE).toBe(true);
        expect(cfg.TIMEZONE).toBe("UTC");
      } finally {
        process.argv = originalArgv;
        process.stderr.write = originalStderrWrite;
      }

      const stderr = stderrChunks.join("");
      expect(stderr).toContain("Deprecated environment variable is set");
      expect(stderr).toContain('"oldName":"ASSISTANT_NAME"');
    },
  );
});
