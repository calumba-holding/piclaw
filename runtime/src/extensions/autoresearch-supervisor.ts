/**
 * autoresearch-supervisor – Launch and monitor a pi-autoresearch sub-agent in tmux.
 *
 * Provides tools for piclaw to:
 *   - start_autoresearch: spawn a headless pi sub-agent in a named tmux session
 *   - stop_autoresearch: SIGINT the session, generate a report
 *   - autoresearch_status: read current JSONL state
 *
 * The upstream pi-autoresearch extension+skill are vendored under
 * runtime/vendor/autoresearch/ and symlinked into the sub-agent's pi config
 * directory at launch time.
 */

import { spawnSync, execSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync, symlinkSync, rmSync, statSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { Type } from "@sinclair/typebox";
import type { AgentToolResult, ExtensionAPI, ExtensionFactory } from "@mariozechner/pi-coding-agent";
import { WORKSPACE_DIR } from "../core/config.js";
import { postMessagesToolMessage } from "./messages-crud.js";
import { deleteMessageByRowId, getDb } from "../db.js";

// ── Paths ───────────────────────────────────────────────────────

const VENDOR_DIR = resolve(dirname(import.meta.dir), "..", "vendor", "autoresearch");
const SESSIONS_DIR = join(WORKSPACE_DIR, ".piclaw", "autoresearch-sessions");
const TMUX_SESSION_PREFIX = "autoresearch-";

// ── State ───────────────────────────────────────────────────────

interface ActiveExperiment {
  id: string;
  tmuxSession: string;
  projectDir: string;
  jsonlPath: string;
  model: string | null;
  maxIterations: number | null;
  startedAt: string;
  pollInterval: ReturnType<typeof setInterval> | null;
  lastJsonlOffset: number;
  lastBroadcastedRun: number;
  /** Timestamp of the last new JSONL entry — used for idle detection. */
  lastActivityAt: number;
  /** Chat JID where status cards should be posted (defaults to env or web:default). */
  chatJid: string;
}

let activeExperiment: ActiveExperiment | null = null;

// ── Helpers ─────────────────────────────────────────────────────

function tmuxSessionExists(name: string): boolean {
  const result = spawnSync("tmux", ["has-session", "-t", name], { stdio: "ignore" });
  return result.status === 0;
}

function ensureGitRepo(dir: string): string | null {
  if (existsSync(join(dir, ".git"))) return null;
  try {
    execSync("git init", { cwd: dir, stdio: "ignore" });
    execSync("git add -A", { cwd: dir, stdio: "ignore" });
    execSync('git commit -m "Initial commit before autoresearch" --allow-empty', { cwd: dir, stdio: "ignore" });
    return "Initialized new git repository.";
  } catch (err) {
    return `Warning: git init failed: ${err instanceof Error ? err.message : String(err)}`;
  }
}

function installVendoredExtension(piAgentDir: string): void {
  const extDir = join(piAgentDir, "extensions", "pi-autoresearch");
  const skillDir = join(piAgentDir, "skills", "autoresearch-create");

  // Clean previous symlinks/copies
  for (const dir of [extDir, skillDir]) {
    try { rmSync(dir, { recursive: true, force: true }); } catch { /* ok */ }
  }

  mkdirSync(dirname(extDir), { recursive: true });
  mkdirSync(dirname(skillDir), { recursive: true });

  const vendorExt = join(VENDOR_DIR, "extensions", "pi-autoresearch");
  const vendorSkill = join(VENDOR_DIR, "skills", "autoresearch-create");

  symlinkSync(vendorExt, extDir);
  symlinkSync(vendorSkill, skillDir);
}

interface JsonlEntry {
  type?: string;
  run?: number;
  status?: string;
  metric?: number;
  metrics?: Record<string, number>;
  description?: string;
  confidence?: number | null;
  name?: string;
  metricName?: string;
  metricUnit?: string;
  bestDirection?: string;
  segment?: number;
  timestamp?: number;
  commit?: string;
}

function parseJsonlFile(path: string): JsonlEntry[] {
  if (!existsSync(path)) return [];
  try {
    return readFileSync(path, "utf-8")
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        try { return JSON.parse(line); } catch { return null; }
      })
      .filter(Boolean) as JsonlEntry[];
  } catch {
    return [];
  }
}

function readNewJsonlLines(path: string, offset: number): { entries: JsonlEntry[]; newOffset: number } {
  if (!existsSync(path)) return { entries: [], newOffset: offset };
  try {
    const stat = statSync(path);
    if (stat.size <= offset) return { entries: [], newOffset: offset };
    const fd = readFileSync(path, "utf-8");
    const newContent = fd.slice(offset);
    const entries = newContent
      .split("\n")
      .filter(Boolean)
      .map((line) => { try { return JSON.parse(line); } catch { return null; } })
      .filter(Boolean) as JsonlEntry[];
    return { entries, newOffset: fd.length };
  } catch {
    return { entries: [], newOffset: offset };
  }
}

function buildExperimentSummary(entries: JsonlEntry[]): {
  name: string;
  metricName: string;
  metricUnit: string;
  direction: string;
  totalRuns: number;
  kept: number;
  discarded: number;
  crashed: number;
  checksFailed: number;
  bestMetric: number | null;
  confidence: number | null;
  lastDescription: string;
} {
  let name = "Experiment";
  let metricName = "metric";
  let metricUnit = "";
  let direction = "lower";
  let bestMetric: number | null = null;
  let confidence: number | null = null;
  let lastDescription = "";
  let kept = 0, discarded = 0, crashed = 0, checksFailed = 0, totalRuns = 0;

  for (const entry of entries) {
    if (entry.type === "config") {
      if (entry.name) name = entry.name;
      if (entry.metricName) metricName = entry.metricName;
      if (entry.metricUnit !== undefined) metricUnit = entry.metricUnit;
      if (entry.bestDirection) direction = entry.bestDirection;
      continue;
    }
    totalRuns++;
    if (entry.status === "keep") kept++;
    else if (entry.status === "discard") discarded++;
    else if (entry.status === "crash") crashed++;
    else if (entry.status === "checks_failed") checksFailed++;

    if (entry.status === "keep" && typeof entry.metric === "number" && entry.metric > 0) {
      if (bestMetric === null) {
        bestMetric = entry.metric;
      } else if (direction === "lower" ? entry.metric < bestMetric : entry.metric > bestMetric) {
        bestMetric = entry.metric;
      }
    }
    if (entry.confidence !== null && entry.confidence !== undefined) {
      confidence = entry.confidence;
    }
    if (entry.description) lastDescription = entry.description;
  }

  return { name, metricName, metricUnit, direction, totalRuns, kept, discarded, crashed, checksFailed, bestMetric, confidence, lastDescription };
}

// ── Timeline card helpers ───────────────────────────────────────

function buildStatusCardBlock(
  experimentId: string,
  summary: ReturnType<typeof buildExperimentSummary>,
  status: "running" | "stopped" | "failed" | "completed",
  tmuxSession?: string,
): Record<string, unknown> {
  const confLabel = summary.confidence !== null
    ? (summary.confidence >= 2.0 ? `${summary.confidence.toFixed(1)}× ✅` : summary.confidence >= 1.0 ? `${summary.confidence.toFixed(1)}× ⚠️` : `${summary.confidence.toFixed(1)}× 🔴`)
    : "—";
  const bestLabel = summary.bestMetric !== null ? `${summary.bestMetric}${summary.metricUnit}` : "—";
  const statusEmoji = status === "running" ? "🔬" : status === "completed" ? "✅" : status === "failed" ? "❌" : "⏹️";

  const facts: unknown[] = [
    { title: "Status", value: status },
    { title: "Runs", value: `${summary.totalRuns} (${summary.kept} kept, ${summary.discarded} discarded${summary.crashed ? `, ${summary.crashed} crashed` : ""})` },
    { title: `Best ${summary.metricName}`, value: bestLabel },
    { title: "Confidence", value: confLabel },
    ...(summary.lastDescription ? [{ title: "Last", value: summary.lastDescription.slice(0, 512) }] : []),
  ];

  const body: unknown[] = [
    { type: "TextBlock", text: `${statusEmoji} Autoresearch: ${summary.name}`, weight: "Bolder", size: "Medium" },
    { type: "FactSet", facts },
  ];
  if (tmuxSession && status === "running") {
    body.push({ type: "TextBlock", text: `tmux attach -t ${tmuxSession}`, spacing: "Small", fontType: "Monospace", size: "Small" });
  }

  const actions: unknown[] = [];
  if (status === "running") {
    actions.push({ type: "Action.Submit", title: "⏹ Stop Experiment", data: { intent: "autoresearch-stop", experiment_id: experimentId } });
  }

  return {
    type: "adaptive_card",
    card_id: `autoresearch-status-${experimentId}`,
    schema_version: "1.5",
    state: status === "running" ? "active" : "completed",
    fallback_text: `Autoresearch ${summary.name}: ${summary.totalRuns} runs, best ${summary.metricName}: ${bestLabel}`,
    payload: {
      type: "AdaptiveCard",
      version: "1.5",
      body,
      ...(actions.length > 0 ? { actions } : {}),
    },
  };
}

/** Find the row ID of the most recent autoresearch status card for an experiment. */
function findPreviousStatusCardRowId(chatJid: string, experimentId: string): number | null {
  try {
    const db = getDb();
    const cardId = `autoresearch-status-${experimentId}`;
    const row = db
      .prepare("SELECT rowid FROM messages WHERE chat_jid = ? AND content_blocks LIKE ? ORDER BY rowid DESC LIMIT 1")
      .get(chatJid, `%${cardId}%`) as { rowid: number } | undefined;
    return row?.rowid ?? null;
  } catch {
    return null;
  }
}

let statusCardBroadcast: ((type: string, data: unknown) => void) | null = null;

function postStatusCard(
  experimentId: string,
  summary: ReturnType<typeof buildExperimentSummary>,
  status: "running" | "stopped" | "failed" | "completed",
  chatJid = "web:default",
  tmuxSession?: string,
): void {
  try {
    // Delete previous card so only the latest one exists on the timeline
    const prevRowId = findPreviousStatusCardRowId(chatJid, experimentId);
    if (prevRowId !== null) {
      try {
        deleteMessageByRowId(chatJid, prevRowId);
        statusCardBroadcast?.("interaction_deleted", { chat_jid: chatJid, ids: [prevRowId] });
      } catch { /* ok — may already be gone */ }
    }

    const card = buildStatusCardBlock(experimentId, summary, status, tmuxSession);
    const fallback = `Autoresearch ${summary.name}: ${summary.totalRuns} runs, best ${summary.metricName}: ${summary.bestMetric !== null ? `${summary.bestMetric}${summary.metricUnit}` : "—"}`;
    postMessagesToolMessage({
      action: "post",
      type: "agent",
      chat_jid: chatJid,
      content: fallback,
      content_blocks: [card],
    }, chatJid);
  } catch (err) {
    console.warn("[autoresearch] Failed to post status card:", err);
  }
}

function generateReport(projectDir: string, jsonlPath: string): string {
  const entries = parseJsonlFile(jsonlPath);
  const s = buildExperimentSummary(entries);

  const lines = [
    `# Autoresearch Report: ${s.name}`,
    "",
    `**Generated:** ${new Date().toISOString()}`,
    `**Project:** ${projectDir}`,
    `**Primary metric:** ${s.metricName} (${s.metricUnit || "unitless"}, ${s.direction} is better)`,
    "",
    "## Summary",
    "",
    `| Stat | Value |`,
    `|------|-------|`,
    `| Total runs | ${s.totalRuns} |`,
    `| Kept | ${s.kept} |`,
    `| Discarded | ${s.discarded} |`,
    `| Crashed | ${s.crashed} |`,
    `| Checks failed | ${s.checksFailed} |`,
    `| Best ${s.metricName} | ${s.bestMetric !== null ? `${s.bestMetric}${s.metricUnit}` : "—"} |`,
    `| Confidence | ${s.confidence !== null ? `${s.confidence.toFixed(1)}×` : "—"} |`,
    "",
    "## Run History",
    "",
    `| # | Status | ${s.metricName} | Commit | Description |`,
    `|---|--------|${"-".repeat(s.metricName.length + 2)}|--------|-------------|`,
  ];

  let runNum = 0;
  for (const entry of entries) {
    if (entry.type === "config") continue;
    runNum++;
    const metric = typeof entry.metric === "number" ? `${entry.metric}${s.metricUnit}` : "—";
    const commit = entry.commit || "—";
    const desc = (entry.description || "").slice(0, 60);
    lines.push(`| ${runNum} | ${entry.status || "?"} | ${metric} | ${commit} | ${desc} |`);
  }

  // Read autoresearch.md if it exists for "what was tried" context
  const mdPath = join(projectDir, "autoresearch.md");
  if (existsSync(mdPath)) {
    lines.push("", "## Experiment Brief", "");
    lines.push(readFileSync(mdPath, "utf-8").trim());
  }

  return lines.join("\n");
}

// ── Tool schemas ────────────────────────────────────────────────

const StartSchema = Type.Object({
  project_dir: Type.String({ description: "Absolute path to the project directory where experiments will run." }),
  prompt: Type.String({ description: "Initial prompt for the autoresearch agent (e.g. 'optimize test runtime')." }),
  model: Type.Optional(Type.String({ description: "Model to use (provider/id format). Defaults to current model." })),
  max_iterations: Type.Optional(Type.Integer({ description: "Maximum experiments before auto-stopping.", minimum: 1 })),
  sandbox: Type.Optional(Type.Boolean({ description: "Copy project to a sandbox directory (default true). Set false for large repos — runs directly on a new git branch." })),
});

const StopSchema = Type.Object({
  generate_report: Type.Optional(Type.Boolean({ description: "Generate a markdown experiment report (default true)." })),
});

const StatusSchema = Type.Object({});

// ── Pending launch (for model picker card flow) ─────────────────

interface PendingLaunch {
  project_dir: string;
  prompt: string;
  max_iterations?: number;
  chat_jid?: string;
}

let pendingLaunch: PendingLaunch | null = null;

/** Resolve the chat JID to use for status cards — prefer explicit, then env, then DB, then fallback. */
function resolveStatusChatJid(explicitChatJid?: string): string {
  if (explicitChatJid?.trim()) return explicitChatJid.trim();
  if (process.env.PICLAW_CHAT_JID?.trim()) return process.env.PICLAW_CHAT_JID.trim();
  return inferLatestWebChatJid() || "web:default";
}

/** Infer the latest web chat JID from the most recent user message. */
function inferLatestWebChatJid(): string | null {
  try {
    const db = getDb();
    const row = db.prepare("SELECT chat_jid FROM messages WHERE sender = 'web-user' ORDER BY rowid DESC LIMIT 1").get() as { chat_jid: string } | undefined;
    return row?.chat_jid || null;
  } catch {
    return null;
  }
}

export function getPendingLaunch(): PendingLaunch | null {
  return pendingLaunch;
}

export function consumePendingLaunch(): PendingLaunch | null {
  const launch = pendingLaunch;
  pendingLaunch = null;
  return launch;
}

function buildModelPickerCard(
  models: Array<{ label: string; provider: string; id: string }>,
  currentModel: string | null,
): Record<string, unknown> {
  const choices = models.map((m) => ({ title: m.label, value: m.label }));
  const defaultValue = currentModel && choices.find((c) => c.value === currentModel)
    ? currentModel
    : choices[0]?.value || "";

  return {
    type: "adaptive_card",
    card_id: `autoresearch-model-pick-${Date.now()}`,
    schema_version: "1.5",
    state: "active",
    fallback_text: "Select a model for the autoresearch sub-agent.",
    payload: {
      type: "AdaptiveCard",
      version: "1.5",
      body: [
        { type: "TextBlock", text: "🔬 Autoresearch — Select Model", weight: "Bolder", size: "Medium" },
        { type: "TextBlock", text: "Choose which model the sub-agent should use for the experiment loop.", wrap: true, isSubtle: true },
        { type: "Input.ChoiceSet", id: "model", style: "compact", choices, value: defaultValue },
      ],
      actions: [
        { type: "Action.Submit", title: "Launch Experiment →", data: { intent: "autoresearch-launch" } },
      ],
    },
  };
}

// ── Tool implementations ────────────────────────────────────────

function buildResult(text: string, details: Record<string, unknown> = {}): AgentToolResult<Record<string, unknown>> {
  return {
    content: [{ type: "text", text }],
    details: { tool: "autoresearch", ...details },
  };
}

async function startAutoresearch(
  params: { project_dir: string; prompt: string; model?: string; max_iterations?: number; sandbox?: boolean },
  broadcastEvent: (type: string, data: unknown) => void,
  chatJid?: string,
): Promise<AgentToolResult<Record<string, unknown>>> {
  // Prerequisites
  const piPath = spawnSync("which", ["pi"], { encoding: "utf8" }).stdout.trim();
  if (!piPath) return buildResult("❌ pi CLI not found. Install pi first.");

  const tmuxPath = spawnSync("which", ["tmux"], { encoding: "utf8" }).stdout.trim();
  if (!tmuxPath) return buildResult("❌ tmux not found.");

  if (activeExperiment) {
    return buildResult(
      `❌ An experiment is already running: ${activeExperiment.id} in ${activeExperiment.projectDir}. Stop it first.`,
      { active_experiment: activeExperiment.id },
    );
  }

  const projectDir = resolve(params.project_dir);
  if (!existsSync(projectDir)) return buildResult(`❌ Project directory does not exist: ${projectDir}`);

  const useSandbox = params.sandbox !== false;

  // Generate a short unique experiment ID
  const id = `exp-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
  const sessionDir = join(SESSIONS_DIR, id);
  let workDir: string;
  let branchName: string | null = null;

  if (useSandbox) {
    const sandboxDir = join(sessionDir, "sandbox");
    const jsonlPath = join(sandboxDir, "autoresearch.jsonl");
    const hasExistingData = existsSync(jsonlPath);

    if (hasExistingData) {
      console.log(`[autoresearch] Resuming existing experiment ${id} with ${parseJsonlFile(jsonlPath).length} entries`);
    } else {
      mkdirSync(sessionDir, { recursive: true });
      try {
        execSync(`cp -a ${JSON.stringify(projectDir + "/")} ${JSON.stringify(sandboxDir)}`, { stdio: "ignore" });
      } catch (err) {
        return buildResult(`❌ Failed to copy project to sandbox: ${err instanceof Error ? err.message : String(err)}`);
      }
    }
    workDir = sandboxDir;
  } else {
    // Direct mode — run on a new branch in the existing repo
    mkdirSync(sessionDir, { recursive: true });
    ensureGitRepo(projectDir);
    branchName = `autoresearch/${id}`;
    try {
      execSync(`git checkout -b ${JSON.stringify(branchName)}`, { cwd: projectDir, stdio: "ignore" });
    } catch (err) {
      return buildResult(`❌ Failed to create branch ${branchName}: ${err instanceof Error ? err.message : String(err)}`);
    }
    workDir = projectDir;
  }

  // Git safety — init if needed (sandbox mode)
  if (useSandbox) {
    ensureGitRepo(workDir);
  }

  const jsonlPath = join(workDir, "autoresearch.jsonl");
  const hasExistingData = existsSync(jsonlPath) && parseJsonlFile(jsonlPath).length > 0;

  // Install vendored extension + skill into the sub-agent's pi config
  const piAgentDir = join(sessionDir, ".pi", "agent");
  mkdirSync(piAgentDir, { recursive: true });
  installVendoredExtension(piAgentDir);

  // Write autoresearch config if max_iterations specified
  if (params.max_iterations) {
    writeFileSync(
      join(workDir, "autoresearch.config.json"),
      JSON.stringify({ maxIterations: params.max_iterations }, null, 2) + "\n",
    );
  }

  // Build tmux command
  const tmuxSession = `${TMUX_SESSION_PREFIX}${id}`;
  const model = params.model || "";
  const modelArgs = model ? `--model ${JSON.stringify(model)}` : "";
  const extPath = join(VENDOR_DIR, "extensions", "pi-autoresearch", "index.ts");
  const skillPath = join(VENDOR_DIR, "skills", "autoresearch-create");
  const escapedPrompt = params.prompt.replace(/"/g, '\\"');
  const piInvocation = hasExistingData
    ? `"/autoresearch resume the experiment loop — read autoresearch.md for context"`
    : `"/skill:autoresearch-create ${escapedPrompt}"`;
  const continueFlag = hasExistingData ? "--continue" : "";
  const piCommand = [
    `cd ${JSON.stringify(workDir)}`,
    `exec pi ${modelArgs} ${continueFlag} --extension ${JSON.stringify(extPath)} --skill ${JSON.stringify(skillPath)} --session-dir ${JSON.stringify(join(sessionDir, "sessions"))} ${piInvocation}`,
  ].join(" && ");

  const tmuxResult = spawnSync("tmux", [
    "new-session", "-d",
    "-s", tmuxSession,
    "-x", "200", "-y", "50",
    "bash", "-lc", piCommand,
  ], { stdio: "ignore" });

  if (tmuxResult.status !== 0) {
    return buildResult(`❌ Failed to create tmux session (exit ${tmuxResult.status}).`);
  }


  // Set up active experiment tracking
  const resolvedChatJid = chatJid || resolveStatusChatJid();
  activeExperiment = {
    id,
    tmuxSession,
    projectDir: workDir,
    jsonlPath,
    model: model || null,
    maxIterations: params.max_iterations ?? null,
    startedAt: new Date().toISOString(),
    pollInterval: null,
    lastJsonlOffset: existsSync(jsonlPath) ? readFileSync(jsonlPath, "utf-8").length : 0,
    lastBroadcastedRun: 0,
    lastActivityAt: Date.now(),
    chatJid: resolvedChatJid,
  };

  // Start JSONL polling
  activeExperiment.pollInterval = setInterval(() => {
    if (!activeExperiment) return;

    // Check if tmux session is still alive
    if (!tmuxSessionExists(activeExperiment.tmuxSession)) {
      const expId = activeExperiment.id;
      const jsonlP = activeExperiment.jsonlPath;
      stopPolling();
      if (existsSync(jsonlP)) {
        const summary = buildExperimentSummary(parseJsonlFile(jsonlP));
        postStatusCard(expId, summary, summary.totalRuns > 0 ? "completed" : "failed", resolvedChatJid);
      }
      broadcastEvent("autoresearch_stopped", {
        experiment_id: expId,
        reason: "process_exited",
      });
      activeExperiment = null;
      return;
    }

    // Read new JSONL lines
    const { entries, newOffset } = readNewJsonlLines(
      activeExperiment.jsonlPath,
      activeExperiment.lastJsonlOffset,
    );

    if (entries.length === 0) {
      // Idle detection: if max_iterations reached and no new entries for 60s, experiment is done
      const IDLE_TIMEOUT_MS = 60_000;
      if (activeExperiment.maxIterations !== null) {
        const allEntries = parseJsonlFile(activeExperiment.jsonlPath);
        const runCount = allEntries.filter((e) => e.type !== "config").length;
        if (runCount >= activeExperiment.maxIterations && Date.now() - activeExperiment.lastActivityAt > IDLE_TIMEOUT_MS) {
          const expId = activeExperiment.id;
          const tmux = activeExperiment.tmuxSession;
          stopPolling();
          const summary = buildExperimentSummary(allEntries);
          postStatusCard(expId, summary, "completed", resolvedChatJid);
          // Kill the idle tmux session
          spawnSync("tmux", ["send-keys", "-t", tmux, "C-c", ""], { stdio: "ignore" });
          setTimeout(() => spawnSync("tmux", ["kill-session", "-t", tmux], { stdio: "ignore" }), 2000);
          broadcastEvent("autoresearch_stopped", { experiment_id: expId, reason: "max_iterations_idle" });
          console.log(`[autoresearch] Experiment ${expId} completed (${runCount} runs, idle ${IDLE_TIMEOUT_MS / 1000}s after max iterations)`);
          activeExperiment = null;
          return;
        }
      }
      return;
    }

    activeExperiment.lastJsonlOffset = newOffset;
    activeExperiment.lastActivityAt = Date.now();

    // Broadcast each new entry
    for (const entry of entries) {
      if (entry.type === "config") {
        broadcastEvent("autoresearch_config", {
          experiment_id: activeExperiment.id,
          ...entry,
        });
      } else {
        activeExperiment.lastBroadcastedRun++;
        const allEntries = parseJsonlFile(activeExperiment.jsonlPath);
        const summary = buildExperimentSummary(allEntries);
        broadcastEvent("autoresearch_result", {
          experiment_id: activeExperiment.id,
          run: activeExperiment.lastBroadcastedRun,
          entry,
          summary,
        });

        // Post timeline card update on every result
        postStatusCard(activeExperiment.id, summary, "running", activeExperiment.chatJid, activeExperiment.tmuxSession);
      }
    }
  }, 2000);

  const parts = [
    hasExistingData ? `✅ Autoresearch resumed.` : `✅ Autoresearch launched.`,
    `Experiment: ${id}`,
    `tmux session: ${tmuxSession}`,
    `Project: ${workDir}`,
    branchName ? `Branch: ${branchName} (direct mode)` : "Mode: sandboxed copy",
    model ? `Model: ${model}` : "Model: (pi default)",
    params.max_iterations ? `Max iterations: ${params.max_iterations}` : "",
    hasExistingData ? `Resuming with existing JSONL data.` : "",
    "",
    useSandbox ? `Original source is safe — all changes happen in the sandbox.` : `⚠️ Direct mode — changes are made on branch ${branchName} in the original repo.`,
    `Use stop_autoresearch to stop and clean up.`,
  ].filter(Boolean);

  // Post initial timeline status card
  const initialSummary = buildExperimentSummary([]);
  initialSummary.name = params.prompt.slice(0, 80);
  postStatusCard(id, initialSummary, "running", resolvedChatJid, tmuxSession);

  return buildResult(parts.join("\n"), {
    experiment_id: id,
    tmux_session: tmuxSession,
    project_dir: projectDir,
    jsonl_path: jsonlPath,
    started: true,
  });
}

function stopPolling(): void {
  if (activeExperiment?.pollInterval) {
    clearInterval(activeExperiment.pollInterval);
    activeExperiment.pollInterval = null;
  }
}

async function stopAutoresearch(
  params: { generate_report?: boolean },
): Promise<AgentToolResult<Record<string, unknown>>> {
  if (!activeExperiment) {
    return buildResult("No experiment is currently running.");
  }

  const exp = activeExperiment;
  stopPolling();

  // Send SIGINT to the tmux session
  if (tmuxSessionExists(exp.tmuxSession)) {
    spawnSync("tmux", ["send-keys", "-t", exp.tmuxSession, "C-c", ""], { stdio: "ignore" });
    // Wait briefly for graceful shutdown
    await new Promise((r) => setTimeout(r, 2000));
    // Kill the session
    spawnSync("tmux", ["kill-session", "-t", exp.tmuxSession], { stdio: "ignore" });
  }

  const parts = [`Experiment ${exp.id} stopped.`];

  // Generate report
  const shouldReport = params.generate_report !== false;
  let reportPath: string | null = null;
  if (shouldReport && existsSync(exp.jsonlPath)) {
    const report = generateReport(exp.projectDir, exp.jsonlPath);
    reportPath = join(exp.projectDir, `autoresearch-report-${exp.id}.md`);
    writeFileSync(reportPath, report, "utf-8");
    parts.push(`Report: ${reportPath}`);
  }

  // Final summary + card
  if (existsSync(exp.jsonlPath)) {
    const summary = buildExperimentSummary(parseJsonlFile(exp.jsonlPath));
    parts.push(
      "",
      `Results: ${summary.totalRuns} runs, ${summary.kept} kept, ${summary.discarded} discarded`,
      summary.bestMetric !== null ? `Best ${summary.metricName}: ${summary.bestMetric}${summary.metricUnit}` : "",
      summary.confidence !== null ? `Confidence: ${summary.confidence.toFixed(1)}×` : "",
    );
    postStatusCard(exp.id, summary, "stopped", exp.chatJid);
  }

  activeExperiment = null;

  return buildResult(parts.filter(Boolean).join("\n"), {
    experiment_id: exp.id,
    stopped: true,
    report_path: reportPath,
  });
}

async function autoresearchStatus(): Promise<AgentToolResult<Record<string, unknown>>> {
  if (!activeExperiment) {
    return buildResult("No experiment is currently running.", { active: false });
  }

  const exp = activeExperiment;
  const alive = tmuxSessionExists(exp.tmuxSession);

  if (!alive) {
    stopPolling();
    const summary = existsSync(exp.jsonlPath)
      ? buildExperimentSummary(parseJsonlFile(exp.jsonlPath))
      : null;
    activeExperiment = null;
    return buildResult(
      `Experiment ${exp.id} is no longer running (tmux session gone).` +
      (summary ? `\nLast state: ${summary.totalRuns} runs, ${summary.kept} kept.` : ""),
      { active: false, experiment_id: exp.id },
    );
  }

  const summary = existsSync(exp.jsonlPath)
    ? buildExperimentSummary(parseJsonlFile(exp.jsonlPath))
    : null;

  const parts = [
    `Experiment: ${exp.id}`,
    `Status: running`,
    `tmux: ${exp.tmuxSession}`,
    `Project: ${exp.projectDir}`,
    `Started: ${exp.startedAt}`,
    exp.model ? `Model: ${exp.model}` : "",
  ];

  if (summary) {
    parts.push(
      "",
      `Runs: ${summary.totalRuns} (${summary.kept} kept, ${summary.discarded} discarded, ${summary.crashed} crashed)`,
      summary.bestMetric !== null ? `Best ${summary.metricName}: ${summary.bestMetric}${summary.metricUnit}` : "",
      summary.confidence !== null ? `Confidence: ${summary.confidence.toFixed(1)}×` : "",
      summary.lastDescription ? `Last: ${summary.lastDescription}` : "",
    );
  }

  return buildResult(parts.filter(Boolean).join("\n"), {
    active: true,
    experiment_id: exp.id,
    tmux_session: exp.tmuxSession,
    summary: summary || undefined,
  });
}

// ── Extension factory ───────────────────────────────────────────

const HINT = [
  "## Autoresearch sub-agent",
  "Use start_autoresearch to launch an autonomous experiment loop in a tmux sub-agent.",
  "Use stop_autoresearch to stop it and generate a report.",
  "Use autoresearch_status to check progress.",
  "The sub-agent runs pi with the upstream pi-autoresearch extension. You can also view the TUI dashboard by opening the tmux session in the terminal pane.",
].join("\n");

/**
 * Card-action entry point for launching an experiment from a model picker card.
 * Returns a human-readable result message.
 */
export async function startAutoresearchFromCard(
  params: { project_dir: string; prompt: string; model?: string; max_iterations?: number; sandbox?: boolean; chat_jid?: string },
): Promise<string> {
  const noop = () => {};
  const result = await startAutoresearch(params, noop, resolveStatusChatJid(params.chat_jid));
  return result.content[0]?.type === "text" ? (result.content[0] as { text: string }).text : "Launched.";
}

export const autoresearchSupervisor: ExtensionFactory = (pi: ExtensionAPI) => {
  // Broadcast helper — will be wired to web channel SSE if available
  let broadcastEvent: (type: string, data: unknown) => void = () => {};

  // Try to detect piclaw's broadcastEvent from the runtime
  try {
    const global = globalThis as { __PICLAW_BROADCAST_EVENT__?: (type: string, data: unknown) => void };
    if (typeof global.__PICLAW_BROADCAST_EVENT__ === "function") {
      broadcastEvent = global.__PICLAW_BROADCAST_EVENT__;
      statusCardBroadcast = global.__PICLAW_BROADCAST_EVENT__;
    }
  } catch { /* ok */ }

  pi.on("before_agent_start", async (event) => ({
    systemPrompt: `${event.systemPrompt}\n\n${HINT}`,
  }));

  pi.registerTool({
    name: "start_autoresearch",
    label: "start_autoresearch",
    description: "Launch an autonomous experiment loop. Spawns a headless pi sub-agent in a tmux session with the pi-autoresearch extension. The sub-agent optimizes the target metric autonomously.",
    promptSnippet: "start_autoresearch: launch an autonomous experiment loop in a tmux sub-agent.",
    parameters: StartSchema,
    async execute(_toolCallId, params, _signal, _update, ctx) {
      // If no model specified, show a model picker card and defer launch
      if (!params.model) {
        const models: Array<{ label: string; provider: string; id: string }> = [];
        try {
          ctx.modelRegistry.refresh();
          const seen = new Set<string>();
          for (const m of ctx.modelRegistry.getAvailable()) {
            if (!m?.provider || !m?.id) continue;
            const label = `${m.provider}/${m.id}`;
            if (seen.has(label)) continue;
            seen.add(label);
            models.push({ label, provider: m.provider, id: m.id });
          }
        } catch { /* ok */ }

        if (models.length === 0) {
          return buildResult("❌ No models available. Configure a model provider first (/login).");
        }

        const currentModel = ctx.model ? `${ctx.model.provider}/${ctx.model.id}` : null;
        const pickerChatJid = resolveStatusChatJid();
        pendingLaunch = {
          project_dir: params.project_dir,
          prompt: params.prompt,
          max_iterations: params.max_iterations,
          chat_jid: pickerChatJid,
        };
        const card = buildModelPickerCard(models, currentModel);
        postMessagesToolMessage({
          action: "post",
          type: "agent",
          chat_jid: pickerChatJid,
          content: "Select a model for the autoresearch experiment.",
          content_blocks: [card],
        }, pickerChatJid);

        return buildResult("Model picker posted. Select a model and click Launch to start the experiment.", { pending: true });
      }

      return startAutoresearch(params, broadcastEvent, resolveStatusChatJid());
    },
  });

  pi.registerTool({
    name: "stop_autoresearch",
    label: "stop_autoresearch",
    description: "Stop the running autoresearch experiment. Sends SIGINT, generates a markdown report, and cleans up.",
    promptSnippet: "stop_autoresearch: stop the experiment and generate a report.",
    parameters: StopSchema,
    async execute(_toolCallId, params) {
      return stopAutoresearch(params);
    },
  });

  pi.registerTool({
    name: "autoresearch_status",
    label: "autoresearch_status",
    description: "Check the status of the running autoresearch experiment. Shows run count, best metric, confidence, and whether the sub-agent is still alive.",
    promptSnippet: "autoresearch_status: check experiment progress.",
    parameters: StatusSchema,
    async execute() {
      return autoresearchStatus();
    },
  });

  // On piclaw restart, try to re-detect a running tmux session
  const reattachExisting = () => {
    try {
      const result = spawnSync("tmux", ["list-sessions", "-F", "#{session_name}"], { encoding: "utf8" });
      if (result.status !== 0) return;
      const sessions = result.stdout.trim().split("\n").filter((s) => s.startsWith(TMUX_SESSION_PREFIX));
      if (sessions.length === 0) return;

      // Re-attach to the first found autoresearch session
      const tmuxSession = sessions[0];
      const id = tmuxSession.slice(TMUX_SESSION_PREFIX.length);

      // Read the tmux pane's cwd to find the working dir (sandbox)
      const cwdResult = spawnSync("tmux", ["display-message", "-t", tmuxSession, "-p", "#{pane_current_path}"], { encoding: "utf8" });
      const projectDir = cwdResult.stdout?.trim() || "";
      if (!projectDir || !existsSync(projectDir)) return;

      // Look for JSONL in the working dir (which is the sandbox)
      const jsonlPath = join(projectDir, "autoresearch.jsonl");
      if (!existsSync(jsonlPath)) return;
      activeExperiment = {
        id,
        tmuxSession,
        projectDir,
        jsonlPath,
        model: null,
        maxIterations: (() => { try { const c = JSON.parse(readFileSync(join(projectDir, "autoresearch.config.json"), "utf-8")); return typeof c.maxIterations === "number" ? c.maxIterations : null; } catch { return null; } })(),
        startedAt: new Date().toISOString(),
        pollInterval: null,
        lastJsonlOffset: existsSync(jsonlPath) ? readFileSync(jsonlPath, "utf-8").length : 0,
        lastBroadcastedRun: 0,
        lastActivityAt: Date.now(),
        chatJid: resolveStatusChatJid(),
      };

      // Resume polling
      activeExperiment.pollInterval = setInterval(() => {
        if (!activeExperiment) return;
        if (!tmuxSessionExists(activeExperiment.tmuxSession)) {
          stopPolling();
          if (existsSync(activeExperiment.jsonlPath)) {
            const summary = buildExperimentSummary(parseJsonlFile(activeExperiment.jsonlPath));
            postStatusCard(activeExperiment.id, summary, summary.totalRuns > 0 ? "completed" : "failed", activeExperiment.chatJid);
          }
          activeExperiment = null;
          return;
        }
        const { entries, newOffset } = readNewJsonlLines(activeExperiment.jsonlPath, activeExperiment.lastJsonlOffset);
        if (entries.length === 0) return;
        activeExperiment.lastJsonlOffset = newOffset;
        for (const entry of entries) {
          broadcastEvent(entry.type === "config" ? "autoresearch_config" : "autoresearch_result", {
            experiment_id: activeExperiment.id,
            entry,
          });
          if (entry.type !== "config") {
            const allEntries = parseJsonlFile(activeExperiment.jsonlPath);
            const summary = buildExperimentSummary(allEntries);
            postStatusCard(activeExperiment.id, summary, "running", activeExperiment.chatJid, activeExperiment.tmuxSession);
          }
        }
      }, 2000);

      // Post an immediate status card with current state
      if (existsSync(jsonlPath)) {
        const currentEntries = parseJsonlFile(jsonlPath);
        if (currentEntries.length > 0) {
          const summary = buildExperimentSummary(currentEntries);
          postStatusCard(id, summary, "running", resolveStatusChatJid(), tmuxSession);
        }
      }

      console.log(`[autoresearch] Re-attached to running experiment ${id} (tmux: ${tmuxSession})`);
    } catch (err) {
      console.warn("[autoresearch] Failed to re-attach to existing session:", err);
    }
  };

  // Run reattachment on next tick (after extension registration completes)
  setTimeout(reattachExisting, 1000);
};
