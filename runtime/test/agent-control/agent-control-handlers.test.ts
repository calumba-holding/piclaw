/**
 * test/agent-control/agent-control-handlers.test.ts – Tests for command handler dispatch.
 *
 * Exercises applyControlCommand() with various command types, verifying
 * correct handler selection, model registry interactions, state changes,
 * and error/success result formatting.
 */

import { afterEach, beforeEach, expect, test } from "bun:test";
import { existsSync, mkdirSync, readFileSync, rmSync, truncateSync, writeFileSync } from "fs";
import { dirname, join, resolve } from "path";
import { withChatContext } from "../../src/core/chat-context.js";
import { getTestWorkspace, setEnv } from "../helpers.js";
import { DEFAULT_TEST_MODEL, TestAgentControlSession, cleanupRotatedSessionArtifacts, createTestModelRegistry } from "./session-fixture.js";

let restoreEnv: (() => void) | null = null;
let restoreIdentityState: (() => void) | null = null;

// ── Config fixture ──────────────────────────────────────────────
// Tests that exercise config-writing handlers must never touch the real
// workspace config. Resolve the path lazily from the current test env and
// hard-fail if it ever points at /workspace/.piclaw/config.json.
let savedConfig: string | null = null;
let savedConfigPath: string | null = null;

function getConfigPath(): string {
  const configPath = resolve(process.env.PICLAW_WORKSPACE || "/workspace", ".piclaw", "config.json");
  if (configPath === "/workspace/.piclaw/config.json") {
    throw new Error("Refusing to use the production config path in tests");
  }
  return configPath;
}

function saveConfig() {
  const configPath = getConfigPath();
  savedConfigPath = configPath;
  try { savedConfig = readFileSync(configPath, "utf-8"); } catch { savedConfig = null; }
}

function restoreConfig() {
  if (!savedConfigPath) {
    savedConfig = null;
    return;
  }
  if (savedConfig !== null) {
    mkdirSync(dirname(savedConfigPath), { recursive: true });
    writeFileSync(savedConfigPath, savedConfig, "utf-8");
  } else {
    rmSync(savedConfigPath, { force: true });
  }
  savedConfig = null;
  savedConfigPath = null;
}

async function saveIdentityState() {
  const cfg = await import("../../src/core/config.js");
  const snapshot = { ...cfg.getIdentityConfig() };
  return () => {
    cfg.setAssistantName(snapshot.assistantName);
    cfg.setAssistantAvatar(snapshot.assistantAvatar);
    cfg.setUserName(snapshot.userName);
    cfg.setUserAvatar(snapshot.userAvatar);
    cfg.setUserAvatarBackground(snapshot.userAvatarBackground);
  };
}

beforeEach(async () => {
  restoreIdentityState = await saveIdentityState();
  saveConfig();
  cleanupRotatedSessionArtifacts(process.cwd());
});

afterEach(() => {
  cleanupRotatedSessionArtifacts(process.cwd());
  restoreIdentityState?.();
  restoreIdentityState = null;
  restoreConfig();
  restoreEnv?.();
  restoreEnv = null;
});

const registry = createTestModelRegistry([DEFAULT_TEST_MODEL]);

async function getControl() {
  const mod = await import("../../src/agent-control/index.js");
  return mod.applyControlCommand as (session: any, registry: any, command: any) => Promise<any>;
}

test("agent control info and mode commands", async () => {
  const ws = getTestWorkspace();
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const applyControlCommand = await getControl();
  const session = new TestAgentControlSession(ws.workspace, registry);

  session.sessionFile = join(ws.data, "sessions", "web_default", "state-session.jsonl");
  mkdirSync(dirname(session.sessionFile), { recursive: true });
  writeFileSync(session.sessionFile, '{"type":"session","id":"state","version":3}\n');

  const state = await applyControlCommand(session as any, registry, { type: "state", raw: "/state" });
  expect(state.message).toContain("Model:");
  expect(state.message).toContain("Session file size:");

  const db = await import("../../src/db.js");
  db.initDatabase();
  db.storeTokenUsage({
    chat_jid: "web:default",
    run_at: new Date().toISOString(),
    input_tokens: 120,
    output_tokens: 30,
    cache_read_tokens: 0,
    cache_write_tokens: 0,
    total_tokens: 150,
    cost_input: 0,
    cost_output: 0,
    cost_cache_read: 0,
    cost_cache_write: 0,
    cost_total: 0.15,
    provider: "openai",
    model: "gpt-test",
  });

  const stats = await withChatContext("web:default", "web", () =>
    applyControlCommand(session as any, registry, { type: "stats", raw: "/stats" })
  );
  expect(stats.message).toContain("Session stats:");
  expect(stats.message).toContain("Tracked usage (persisted):");
  expect(stats.message).toContain("Per provider:");
  expect(stats.message).toContain("Per model:");

  const context = await applyControlCommand(session as any, registry, { type: "context", raw: "/context" });
  expect(context.message).toContain("Context usage:");

  const last = await applyControlCommand(session as any, registry, { type: "last", raw: "/last" });
  expect(last.message).toContain("last response");

  const commands = await applyControlCommand(session as any, registry, { type: "commands", raw: "/commands" });
  expect(commands.message).toContain("/model");
  expect(commands.message).not.toContain("/test-card");
  expect(commands.message).toContain("/exit");
  expect(commands.message).toContain("/session-rotate");
  expect(commands.message).toContain("/ext");
  expect(commands.message).toContain("/template");
  expect(commands.message).toContain("/skill:demo");

  const steering = await applyControlCommand(session as any, registry, { type: "steering_mode", mode: "all", raw: "/steering-mode all" });
  expect(steering.message).toContain("all");
  expect(session.steeringModeCalls).toContain("all");

  const followup = await applyControlCommand(session as any, registry, { type: "followup_mode", mode: "all", raw: "/followup-mode all" });
  expect(followup.message).toContain("all");
  expect(session.followUpModeCalls).toContain("all");
});

test("agent control state shows oversized session warning", async () => {
  const ws = getTestWorkspace();
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const applyControlCommand = await getControl();
  const session = new TestAgentControlSession(ws.workspace, registry);
  session.sessionFile = join(ws.data, "sessions", "web_default", "oversized-session.jsonl");
  mkdirSync(dirname(session.sessionFile), { recursive: true });
  writeFileSync(session.sessionFile, '{"type":"session","id":"oversized","version":3}\n');
  truncateSync(session.sessionFile, 101 * 1024 * 1024);

  const state = await applyControlCommand(session as any, registry, { type: "state", raw: "/state" });
  expect(state.message).toContain("Session file warning:");
  expect(state.message).toContain("Consider /session-rotate.");
});

test("agent control session and tree commands", async () => {
  const ws = getTestWorkspace();
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const applyControlCommand = await getControl();
  const session = new TestAgentControlSession(ws.workspace, registry);

  const sessionName = await applyControlCommand(session as any, registry, { type: "session_name", name: "My session", raw: "/session-name My session" });
  expect(sessionName.message).toContain("My session");

  const newSession = await applyControlCommand(session as any, registry, { type: "new_session", raw: "/new-session" });
  expect(newSession.message).toContain("new session");

  const switchSession = await applyControlCommand(session as any, registry, { type: "switch_session", path: "path/to/session", raw: "/switch-session path/to/session" });
  expect(switchSession.message).toContain("Switched to session");

  session.sessionName = "Carry forward";
  session.sessionFile = join(ws.data, "sessions", "web_default", "active-session.jsonl");
  mkdirSync(dirname(session.sessionFile), { recursive: true });
  writeFileSync(session.sessionFile, '{"type":"session","id":"active","version":3}\n{"type":"message","id":"m1","parentId":null,"timestamp":"2026-03-14T00:00:00.000Z","message":{"role":"assistant","content":[{"type":"text","text":"Hello"}],"provider":"openai","model":"gpt-test","usage":{"input":1,"output":1,"cacheRead":0,"cacheWrite":0,"totalTokens":2,"cost":{"input":0,"output":0,"cacheRead":0,"cacheWrite":0,"total":0}},"stopReason":"stop","timestamp":1}}\n');
  const rotated = await applyControlCommand(session as any, registry, { type: "session_rotate", instructions: "keep active work", raw: "/session-rotate keep active work" });
  expect(rotated.status).toBe("success");
  expect(rotated.message).toContain("Session rotated.");
  expect(rotated.message).toContain("Archived previous session:");
  expect(rotated.message).toContain("New session:");
  expect(rotated.message).toContain("Compaction before rotate: yes");
  expect(session.compactCalls).toBe(1);
  expect(existsSync(session.sessionFile)).toBe(true);
  expect(existsSync(join(ws.data, "sessions", "web_default", "active-session.jsonl"))).toBe(false);
  expect(existsSync(join(ws.data, "sessions", "web_default", "archive", "active-session.jsonl"))).toBe(true);
  expect(session.seededEntries.at(-1)?.some((entry) => entry[0] === "compaction")).toBe(true);

  const fork = await applyControlCommand(session as any, registry, { type: "fork", entryId: "entry-1", raw: "/fork entry-1" });
  expect(fork.message).toContain("Selected");

  const forks = await applyControlCommand(session as any, registry, { type: "forks", raw: "/forks" });
  expect(forks.message).toContain("Forkable messages:");

  const exportHtml = await applyControlCommand(session as any, registry, { type: "export_html", raw: "/export-html" });
  expect(exportHtml.message).toContain("Exported session");

  const tree = await applyControlCommand(session as any, registry, { type: "tree", raw: "/tree" });
  expect(tree.message).toContain("Session tree:");

  const treeNav = await applyControlCommand(session as any, registry, { type: "tree", targetId: "entry-1", raw: "/tree entry-1" });
  expect(treeNav.message).toContain("Navigation complete");

  const label = await applyControlCommand(session as any, registry, { type: "label", targetId: "entry-1", label: "flag", raw: "/label entry-1 flag" });
  expect(label.message).toContain("Label set");
  expect(session.labelChanges.length).toBe(1);

  const labels = await applyControlCommand(session as any, registry, { type: "labels", raw: "/labels" });
  expect(labels.message).toContain("Labels:");
});

test("agent control queue, compact, and abort commands", async () => {
  const ws = getTestWorkspace();
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const db = await import("../../src/db.js");
  db.initDatabase();

  const applyControlCommand = await getControl();
  const session = new TestAgentControlSession(ws.workspace, registry);

  const compact = await applyControlCommand(session as any, registry, { type: "compact", instructions: "shorten", raw: "/compact shorten" });
  expect(compact.message).toContain("Compaction complete.");
  expect(compact.message).toContain("Attached: full compaction report (.md).");
  expect(compact.message).not.toContain("Summary:");
  expect(compact.message).not.toContain("Summary");
  expect(compact.mediaIds).toHaveLength(1);
  const compactMedia = db.getMediaById(compact.mediaIds![0]);
  expect(compactMedia?.filename).toMatch(/^compaction-report-.*\.md$/);
  expect(compactMedia?.content_type).toBe("text/markdown");
  const compactReport = compactMedia ? new TextDecoder().decode(compactMedia.data) : "";
  expect(compactReport).toContain("# Compaction report");
  expect(compactReport).toContain("## Summary");
  expect(compactReport).toContain("Summary");

  const autoCompact = await applyControlCommand(session as any, registry, { type: "auto_compact", enabled: true, raw: "/auto-compact on" });
  expect(autoCompact.message).toContain("on");
  expect(session.autoCompactionEnabled).toBe(true);

  const autoRetry = await applyControlCommand(session as any, registry, { type: "auto_retry", enabled: true, raw: "/auto-retry on" });
  expect(autoRetry.message).toContain("on");
  expect(session.autoRetryEnabled).toBe(true);

  const abortRetry = await applyControlCommand(session as any, registry, { type: "abort_retry", raw: "/abort-retry" });
  expect(abortRetry.message).toContain("Retry aborted");
  expect(session.abortRetryCalls).toBe(1);

  const abortBashNone = await applyControlCommand(session as any, registry, { type: "abort_bash", raw: "/abort-bash" });
  expect(abortBashNone.message).toContain("No bash command");

  session.isBashRunning = true;
  const abortBash = await applyControlCommand(session as any, registry, { type: "abort_bash", raw: "/abort-bash" });
  expect(abortBash.message).toContain("aborted");
  expect(session.abortBashCalls).toBe(1);

  const queued = await applyControlCommand(session as any, registry, { type: "queue", message: "queued text", raw: "/queue queued text" });
  expect(queued.message).toContain("Queued follow-up");
  expect(queued.queued_followup).toBe(true);
});

test("agent control cycle and agent identity commands", async () => {
  const ws = getTestWorkspace();
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const applyControlCommand = await getControl();
  const session = new TestAgentControlSession(ws.workspace, registry);

  const cycleModel = await applyControlCommand(session as any, registry, { type: "cycle_model", direction: "forward", raw: "/cycle-model" });
  expect(cycleModel.message).toContain("Model set to");

  session.isCompacting = true;
  const blockedCycleModel = await applyControlCommand(session as any, registry, { type: "cycle_model", direction: "forward", raw: "/cycle-model" });
  expect(blockedCycleModel.status).toBe("error");
  expect(blockedCycleModel.message).toContain("Auto-compaction is still running");
  session.isCompacting = false;

  const cycleThinking = await applyControlCommand(session as any, registry, { type: "cycle_thinking", raw: "/cycle-thinking" });
  expect(cycleThinking.message).toContain("Thinking level set");

  const agentName = await applyControlCommand(session as any, registry, { type: "agent_name", name: "Pi", raw: "/agent-name Pi" });
  expect(agentName.message).toContain("Agent name set");

  const agentAvatar = await applyControlCommand(session as any, registry, { type: "agent_avatar", avatar: "https://example.com/avatar.png", raw: "/agent-avatar https://example.com/avatar.png" });
  expect(agentAvatar.message).toContain("Agent avatar set");
});

test("agent control idempotent mode commands stay stable across repeats", async () => {
  const ws = getTestWorkspace();
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const applyControlCommand = await getControl();
  const session = new TestAgentControlSession(ws.workspace, registry);

  const autoCompactFirst = await applyControlCommand(session as any, registry, { type: "auto_compact", enabled: true, raw: "/auto-compact on" });
  const autoCompactSecond = await applyControlCommand(session as any, registry, { type: "auto_compact", enabled: true, raw: "/auto-compact on" });
  expect(autoCompactFirst.status).toBe("success");
  expect(autoCompactSecond.status).toBe("success");
  expect(session.autoCompactionEnabled).toBe(true);

  const autoRetryFirst = await applyControlCommand(session as any, registry, { type: "auto_retry", enabled: false, raw: "/auto-retry off" });
  const autoRetrySecond = await applyControlCommand(session as any, registry, { type: "auto_retry", enabled: false, raw: "/auto-retry off" });
  expect(autoRetryFirst.status).toBe("success");
  expect(autoRetrySecond.status).toBe("success");
  expect(session.autoRetryEnabled).toBe(false);

  const steeringFirst = await applyControlCommand(session as any, registry, { type: "steering_mode", mode: "all", raw: "/steering-mode all" });
  const steeringSecond = await applyControlCommand(session as any, registry, { type: "steering_mode", mode: "all", raw: "/steering-mode all" });
  expect(steeringFirst.message).toContain("all");
  expect(steeringSecond.message).toContain("all");
  expect(session.steeringMode).toBe("all");

  const followupFirst = await applyControlCommand(session as any, registry, { type: "followup_mode", mode: "one-at-a-time", raw: "/followup-mode one" });
  const followupSecond = await applyControlCommand(session as any, registry, { type: "followup_mode", mode: "one-at-a-time", raw: "/followup-mode one" });
  expect(followupFirst.status).toBe("success");
  expect(followupSecond.status).toBe("success");
  expect(session.followUpMode).toBe("one-at-a-time");
});
