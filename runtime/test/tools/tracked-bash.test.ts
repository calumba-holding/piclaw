/**
 * test/tools/tracked-bash.test.ts – Tests for tracked bash tool operations.
 *
 * Verifies createTrackedBashOperations() executes commands, captures
 * output, respects timeouts, and tracks child processes.
 */

import { expect, test } from "bun:test";
import { getTestWorkspace, setEnv } from "../helpers.js";
import { initDatabase } from "../../src/db.js";
import { deleteKeychainEntry, setKeychainEntry } from "../../src/secure/keychain.js";
import { createTrackedBashOperations, resolveShellCandidates } from "../../src/tools/tracked-bash.js";

test("tracked bash executes commands and captures output", async () => {
  const ws = getTestWorkspace();
  const ops = createTrackedBashOperations();
  let output = "";

  const result = await ops.exec("echo hello", ws.workspace, {
    onData: (data) => {
      output += data.toString("utf8");
    },
    timeout: 5,
  });

  expect(result.exitCode).toBe(0);
  expect(output).toContain("hello");
});

test("resolveShellCandidates prefers a configured POSIX shell before bash fallback", () => {
  const candidates = resolveShellCandidates({
    platform: "linux",
    env: { SHELL: "/custom/zsh" } as NodeJS.ProcessEnv,
    pathExists: (path) => path === "/custom/zsh" || path === "/bin/bash",
  });

  expect(candidates[0]).toEqual({ shell: "/custom/zsh", args: ["-c"], family: "posix" });
  expect(candidates.some((entry) => entry.shell === "/bin/bash")).toBe(true);
  expect(candidates.some((entry) => entry.shell === "bash")).toBe(true);
});

test("resolveShellCandidates uses Windows fallback chain without requiring WSL bash", () => {
  const candidates = resolveShellCandidates({
    platform: "win32",
    env: { ComSpec: "C:\\Windows\\System32\\cmd.exe" } as NodeJS.ProcessEnv,
    pathExists: (path) => path === "C:\\Program Files\\PowerShell\\7\\pwsh.exe",
  });

  expect(candidates[0]).toEqual({
    shell: "C:\\Program Files\\PowerShell\\7\\pwsh.exe",
    args: ["-NoProfile", "-Command"],
    family: "powershell",
  });
  expect(candidates.some((entry) => entry.shell === "pwsh.exe")).toBe(true);
  expect(candidates.some((entry) => entry.shell === "powershell.exe")).toBe(true);
  expect(candidates.some((entry) => entry.shell === "C:\\Windows\\System32\\cmd.exe")).toBe(true);
  expect(candidates.some((entry) => entry.shell === "cmd.exe")).toBe(true);
  expect(candidates.some((entry) => entry.shell.toLowerCase().includes("bash.exe"))).toBe(false);
});

test("tracked bash rejects missing working directory", async () => {
  const ops = createTrackedBashOperations();
  let error: Error | null = null;
  try {
    await ops.exec("echo hi", "/no/such/dir", { onData: () => {} });
  } catch (err) {
    error = err as Error;
  }

  expect(error).not.toBeNull();
  expect(error?.message).toContain("Working directory does not exist");
});

test("tracked bash times out and cancels", async () => {
  const ws = getTestWorkspace();
  const ops = createTrackedBashOperations();
  let error: Error | null = null;
  const start = Date.now();

  try {
    await ops.exec("sleep 2", ws.workspace, { onData: () => {}, timeout: 0.1 });
  } catch (err) {
    error = err as Error;
  }

  const duration = Date.now() - start;
  expect(error).not.toBeNull();
  expect(error?.message).toContain("timeout");
  expect(duration).toBeLessThan(1000);
});

test("tracked bash resolves keychain env", async () => {
  const ws = getTestWorkspace();
  const restore = setEnv({ PICLAW_KEYCHAIN_KEY: "test-key" });
  initDatabase();

  await setKeychainEntry({
    name: "bash-env",
    type: "token",
    secret: "bash-secret",
    username: "bash-user",
  });

  const ops = createTrackedBashOperations();
  let output = "";

  try {
    const result = await ops.exec("echo \"$TOKEN|$USER\"", ws.workspace, {
      onData: (data) => {
        output += data.toString("utf8");
      },
      env: {
        TOKEN: "keychain:bash-env",
        USER: "keychain:bash-env:username",
        PATH: process.env.PATH || "",
      },
      timeout: 5,
    });

    expect(result.exitCode).toBe(0);
    expect(output.trim()).toContain("bash-secret|bash-user");
  } finally {
    deleteKeychainEntry("bash-env");
    restore();
  }
});

test("tracked bash resolves keychain placeholders in commands", async () => {
  const ws = getTestWorkspace();
  const restore = setEnv({ PICLAW_KEYCHAIN_KEY: "test-key" });
  initDatabase();

  await setKeychainEntry({
    name: "bash-cmd",
    type: "token",
    secret: "cmd-secret",
    username: "cmd-user",
  });

  const ops = createTrackedBashOperations();
  let output = "";

  try {
    const result = await ops.exec("echo keychain:bash-cmd keychain:bash-cmd:username", ws.workspace, {
      onData: (data) => {
        output += data.toString("utf8");
      },
      timeout: 5,
    });

    expect(result.exitCode).toBe(0);
    expect(output.trim()).toBe("cmd-secret cmd-user");
  } finally {
    deleteKeychainEntry("bash-cmd");
    restore();
  }
});
