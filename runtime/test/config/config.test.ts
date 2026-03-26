import { expect, test } from "bun:test";
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { join, resolve } from "path";
import { createTempWorkspace, importFresh, withTempWorkspaceEnv } from "../helpers.js";

const RUNTIME_DIR = resolve(import.meta.dir, "../..");
const CONFIG_SUBPROCESS = join(RUNTIME_DIR, "test", "config", "config-subprocess.ts");

type ConfigSnapshot = Record<string, any>;

function writeWorkspaceConfig(workspace: string, config: Record<string, unknown>): string {
  const configDir = join(workspace, ".piclaw");
  mkdirSync(configDir, { recursive: true });
  const configPath = join(configDir, "config.json");
  writeFileSync(configPath, JSON.stringify(config, null, 2), "utf8");
  return configPath;
}

function loadConfigInSubprocess(
  workspace: { workspace: string; store: string; data: string },
  exports: string[],
  options: { args?: string[]; env?: Record<string, string | undefined> } = {},
): ConfigSnapshot {
  const proc = Bun.spawnSync({
    cmd: ["bun", CONFIG_SUBPROCESS, ...(options.args || [])],
    cwd: RUNTIME_DIR,
    env: {
      PATH: process.env.PATH || "",
      HOME: process.env.HOME || "/tmp",
      TMPDIR: process.env.TMPDIR || "/tmp",
      TMP: process.env.TMP || "/tmp",
      TEMP: process.env.TEMP || "/tmp",
      USER: process.env.USER || "agent",
      PICLAW_WORKSPACE: workspace.workspace,
      PICLAW_STORE: workspace.store,
      PICLAW_DATA: workspace.data,
      PICLAW_DB_IN_MEMORY: "1",
      PICLAW_CONFIG_EXPORTS: exports.join(","),
      ...(options.env || {}),
    },
    stdout: "pipe",
    stderr: "pipe",
  });

  const stdout = proc.stdout.toString().trim();
  const stderr = proc.stderr.toString().trim();
  expect(proc.exitCode, stderr || stdout).toBe(0);
  return JSON.parse(stdout || "{}");
}

test("loads config-file aliases for pushover and identity fields", () => {
  const ws = createTempWorkspace("piclaw-config-");

  try {
    writeWorkspaceConfig(ws.workspace, {
      pushover: {
        appToken: "app-token",
        user_key: "user-key",
        device: "device-1",
        priority: 2,
        sound: "ping",
      },
      assistant: {
        agentName: "Config Bot",
        agent_avatar: "/assistant.png",
      },
      user: {
        name: "Casey",
        avatar: "/user.png",
        avatar_background: "#123456",
      },
      whatsappPhone: "+15551234567",
    });

    const snapshot = loadConfigInSubprocess(ws, [
      "PUSHOVER_APP_TOKEN",
      "PUSHOVER_USER_KEY",
      "PUSHOVER_DEVICE",
      "PUSHOVER_PRIORITY",
      "PUSHOVER_SOUND",
      "ASSISTANT_NAME",
      "ASSISTANT_AVATAR",
      "USER_NAME",
      "USER_AVATAR",
      "USER_AVATAR_BACKGROUND",
      "WHATSAPP_PHONE",
    ]);

    expect(snapshot.PUSHOVER_APP_TOKEN).toBe("app-token");
    expect(snapshot.PUSHOVER_USER_KEY).toBe("user-key");
    expect(snapshot.PUSHOVER_DEVICE).toBe("device-1");
    expect(snapshot.PUSHOVER_PRIORITY).toBe(2);
    expect(snapshot.PUSHOVER_SOUND).toBe("ping");
    expect(snapshot.ASSISTANT_NAME).toBe("Config Bot");
    expect(snapshot.ASSISTANT_AVATAR).toBe("/assistant.png");
    expect(snapshot.USER_NAME).toBe("Casey");
    expect(snapshot.USER_AVATAR).toBe("/user.png");
    expect(snapshot.USER_AVATAR_BACKGROUND).toBe("#123456");
    expect(snapshot.WHATSAPP_PHONE).toBe("+15551234567");
  } finally {
    ws.cleanup();
  }
});

test("CLI web flags override env values and invalid CLI numbers fall back to env", () => {
  const ws = createTempWorkspace("piclaw-config-");

  try {
    let snapshot = loadConfigInSubprocess(
      ws,
      ["WEB_PORT", "WEB_HOST", "WEB_IDLE_TIMEOUT"],
      {
        env: {
          PICLAW_WEB_PORT: "8081",
          PICLAW_WEB_HOST: "0.0.0.0",
          PICLAW_WEB_IDLE_TIMEOUT: "10",
        },
        args: ["--port=9090", "--host", "127.0.0.1", "--idle-timeout", "25"],
      },
    );

    expect(snapshot.WEB_PORT).toBe(9090);
    expect(snapshot.WEB_HOST).toBe("127.0.0.1");
    expect(snapshot.WEB_IDLE_TIMEOUT).toBe(25);

    snapshot = loadConfigInSubprocess(
      ws,
      ["WEB_PORT", "WEB_IDLE_TIMEOUT"],
      {
        env: {
          PICLAW_WEB_PORT: "8181",
          PICLAW_WEB_IDLE_TIMEOUT: "12",
        },
        args: ["--port", "not-a-number", "--idle-timeout=bad"],
      },
    );

    expect(snapshot.WEB_PORT).toBe(8181);
    expect(snapshot.WEB_IDLE_TIMEOUT).toBe(12);
  } finally {
    ws.cleanup();
  }
});

test("config and env fallback chains handle booleans and session settings", () => {
  const ws = createTempWorkspace("piclaw-config-");

  try {
    writeWorkspaceConfig(ws.workspace, {
      web: {
        totpWindow: 4,
        sessionTtl: 60,
        internalSecret: "config-secret",
        passkeyMode: "PASSKEY-ONLY",
        trustProxy: true,
      },
      webTerminalEnabled: true,
      debugCardSubmissions: false,
      sessionMaxSizeMb: 8,
      sessionAutoRotate: true,
    });

    const snapshot = loadConfigInSubprocess(ws, [
      "WEB_TOTP_WINDOW",
      "WEB_SESSION_TTL",
      "WEB_INTERNAL_SECRET",
      "WEB_PASSKEY_MODE",
      "TRUST_PROXY",
      "WEB_TERMINAL_ENABLED",
      "DEBUG_CARD_SUBMISSIONS",
      "SESSION_MAX_SIZE_MB",
      "SESSION_MAX_SIZE_BYTES",
      "SESSION_AUTO_ROTATE",
    ], {
      env: {
        PICLAW_WEB_SESSION_TTL: "120",
        PICLAW_WEB_INTERNAL_SECRET: "env-secret",
        PICLAW_TRUST_PROXY: "0",
        PICLAW_WEB_TERMINAL_ENABLED: "false",
        PICLAW_DEBUG_CARD_SUBMISSIONS: "yes",
        PICLAW_SESSION_AUTO_ROTATE: "off",
      },
    });

    expect(snapshot.WEB_TOTP_WINDOW).toBe(4);
    expect(snapshot.WEB_SESSION_TTL).toBe(120);
    expect(snapshot.WEB_INTERNAL_SECRET).toBe("env-secret");
    expect(snapshot.WEB_PASSKEY_MODE).toBe("passkey-only");
    expect(snapshot.TRUST_PROXY).toBe(false);
    expect(snapshot.WEB_TERMINAL_ENABLED).toBe(false);
    expect(snapshot.DEBUG_CARD_SUBMISSIONS).toBe(true);
    expect(snapshot.SESSION_MAX_SIZE_MB).toBe(8);
    expect(snapshot.SESSION_MAX_SIZE_BYTES).toBe(8 * 1024 * 1024);
    expect(snapshot.SESSION_AUTO_ROTATE).toBe(false);
  } finally {
    ws.cleanup();
  }
});

test("remote interop env flags and metadata load without a config file", () => {
  const ws = createTempWorkspace("piclaw-config-");

  try {
    const snapshot = loadConfigInSubprocess(ws, [
      "REMOTE_INTEROP_ENABLED",
      "REMOTE_INTEROP_ALLOW_HTTP",
      "REMOTE_SHORT_CIRCUIT_ENABLED",
      "REMOTE_INSTANCE_NAME",
      "REMOTE_INTEROP_DECISION_MODEL",
    ], {
      env: {
        PICLAW_REMOTE_INTEROP_ENABLED: "1",
        PICLAW_REMOTE_INTEROP_ALLOW_HTTP: "true",
        PICLAW_REMOTE_SHORT_CIRCUIT_ENABLED: "1",
        PICLAW_REMOTE_INSTANCE_NAME: "remote-a",
        PICLAW_REMOTE_INTEROP_DECISION_MODEL: "decision-model-a",
      },
    });

    expect(snapshot.REMOTE_INTEROP_ENABLED).toBe(true);
    expect(snapshot.REMOTE_INTEROP_ALLOW_HTTP).toBe(true);
    expect(snapshot.REMOTE_SHORT_CIRCUIT_ENABLED).toBe(true);
    expect(snapshot.REMOTE_INSTANCE_NAME).toBe("remote-a");
    expect(snapshot.REMOTE_INTEROP_DECISION_MODEL).toBe("decision-model-a");
  } finally {
    ws.cleanup();
  }
});

test("in-process module init handles deprecated env warnings, argv parsing, and string coercions", async () => {
  await withTempWorkspaceEnv(
    "piclaw-config-",
    {
      ASSISTANT_NAME: "Legacy Pi",
      PICLAW_ASSISTANT_NAME: undefined,
      PICLAW_WEB_PORT: "8181",
      PICLAW_WEB_IDLE_TIMEOUT: "12",
      PICLAW_WEB_TERMINAL_ENABLED: "yes",
      PICLAW_DEBUG_CARD_SUBMISSIONS: "off",
      PICLAW_SESSION_MAX_SIZE_MB: "64",
      PICLAW_SESSION_AUTO_ROTATE: "on",
      TZ: "UTC",
    },
    async () => {
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
        const cfg = await importFresh<typeof import("../../src/core/config.js")>("../src/core/config.js");

        expect(cfg.ASSISTANT_NAME).toBe("Legacy Pi");
        expect(cfg.WEB_PORT).toBe(9001);
        expect(cfg.WEB_HOST).toBe("127.0.0.1");
        expect(cfg.WEB_IDLE_TIMEOUT).toBe(22);
        expect(cfg.WEB_TERMINAL_ENABLED).toBe(true);
        expect(cfg.DEBUG_CARD_SUBMISSIONS).toBe(false);
        expect(cfg.SESSION_MAX_SIZE_MB).toBe(64);
        expect(cfg.SESSION_MAX_SIZE_BYTES).toBe(64 * 1024 * 1024);
        expect(cfg.SESSION_AUTO_ROTATE).toBe(true);
        expect(cfg.TIMEZONE).toBe("UTC");
      } finally {
        process.argv = originalArgv;
        process.stderr.write = originalStderrWrite;
      }

      const stderr = stderrChunks.join("");
      expect(stderr).toContain("Deprecated environment variable is set");
      expect(stderr).toContain('"oldName":"ASSISTANT_NAME"');
      expect(stderr).toContain('"newName":"PICLAW_ASSISTANT_NAME"');
    },
  );
});

test("runtime setters trim values, escape trigger regexes, and persist TOTP secrets", async () => {
  await withTempWorkspaceEnv(
    "piclaw-config-",
    { PICLAW_WEB_TOTP_SECRET: undefined, LOG_LEVEL: undefined },
    async (ws) => {
      const configPath = writeWorkspaceConfig(ws.workspace, {
        web: {
          totp_secret: "legacy-secret",
          keepMe: true,
        },
      });

      const cfg = await importFresh<typeof import("../../src/core/config.js")>("../src/core/config.js");

      cfg.setAssistantName("  Pi (Test) Bot  ");
      cfg.setAssistantAvatar("  /assistant.svg  ");
      cfg.setUserName("  Jordan  ");
      cfg.setUserAvatar("  /user.svg  ");
      cfg.setUserAvatarBackground("  #abcdef  ");

      expect(cfg.ASSISTANT_NAME).toBe("Pi (Test) Bot");
      expect(cfg.ASSISTANT_AVATAR).toBe("/assistant.svg");
      expect(cfg.USER_NAME).toBe("Jordan");
      expect(cfg.USER_AVATAR).toBe("/user.svg");
      expect(cfg.USER_AVATAR_BACKGROUND).toBe("#abcdef");
      expect(cfg.TRIGGER_PATTERN.test("hello @Pi (Test) Bot")).toBe(true);
      expect(cfg.TRIGGER_PATTERN.test("hello @Pi Test Bot")).toBe(false);

      expect(cfg.setWebTotpSecret("  fresh-secret  ")).toBe("fresh-secret");
      expect(cfg.WEB_TOTP_SECRET).toBe("fresh-secret");
      expect(process.env.PICLAW_WEB_TOTP_SECRET).toBe("fresh-secret");

      const savedConfig = JSON.parse(readFileSync(configPath, "utf8"));
      expect(savedConfig.web.totpSecret).toBe("fresh-secret");
      expect(savedConfig.web.totp_secret).toBeUndefined();
      expect(savedConfig.web.keepMe).toBe(true);

      expect(cfg.setWebTotpSecret("   ")).toBe("");
      expect(cfg.WEB_TOTP_SECRET).toBe("");
      expect(process.env.PICLAW_WEB_TOTP_SECRET).toBeUndefined();

      const clearedConfig = JSON.parse(readFileSync(configPath, "utf8"));
      expect(clearedConfig.web.keepMe).toBe(true);
      expect(clearedConfig.web.totpSecret).toBeUndefined();
      expect(clearedConfig.web.totp_secret).toBeUndefined();

      writeWorkspaceConfig(ws.workspace, {
        web: {
          totp_secret: "legacy-only-secret",
        },
      });
      expect(cfg.setWebTotpSecret("   ")).toBe("");
      expect(JSON.parse(readFileSync(configPath, "utf8")).web).toBeUndefined();
    },
  );
});
