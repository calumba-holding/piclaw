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
  startedAt: string;
  /** Interval handle for JSONL polling. */
  pollInterval: ReturnType<typeof setInterval> | null;
  lastJsonlOffset: number;
  lastBroadcastedRun: number;
}

let activeExperiment: ActiveExperiment | null = null;

// ── Helpers ─────────────────────────────────────────────────────

function tmuxSessionExists(name: string): boolean {
  const result = spawnSync("tmux", ["has-session", "-t", name], { stdio: "ignore" });
  return result.status === 0;
}

function generateExperimentId(): string {
  return `exp-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
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
): Record<string, unknown> {
  const confLabel = summary.confidence !== null
    ? (summary.confidence >= 2.0 ? `${summary.confidence.toFixed(1)}× ✅` : summary.confidence >= 1.0 ? `${summary.confidence.toFixed(1)}× ⚠️` : `${summary.confidence.toFixed(1)}× 🔴`)
    : "—";
  const bestLabel = summary.bestMetric !== null ? `${summary.bestMetric}${summary.metricUnit}` : "—";
  const statusEmoji = status === "running" ? "🔬" : status === "completed" ? "✅" : status === "failed" ? "❌" : "⏹️";

  const body: unknown[] = [
    { type: "TextBlock", text: `${statusEmoji} Autoresearch: ${summary.name}`, weight: "Bolder", size: "Medium" },
    {
      type: "FactSet",
      facts: [
        { title: "Status", value: status },
        { title: "Runs", value: `${summary.totalRuns} (${summary.kept} kept, ${summary.discarded} discarded${summary.crashed ? `, ${summary.crashed} crashed` : ""})` },
        { title: `Best ${summary.metricName}`, value: bestLabel },
        { title: "Confidence", value: confLabel },
        ...(summary.lastDescription ? [{ title: "Last", value: summary.lastDescription.slice(0, 80) }] : []),
      ],
    },
  ];

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

function postStatusCard(
  experimentId: string,
  summary: ReturnType<typeof buildExperimentSummary>,
  status: "running" | "stopped" | "failed" | "completed",
  chatJid = "web:default",
): void {
  try {
    const card = buildStatusCardBlock(experimentId, summary, status);
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
});

const StopSchema = Type.Object({
  generate_report: Type.Optional(Type.Boolean({ description: "Generate a markdown experiment report (default true)." })),
});

const StatusSchema = Type.Object({});

// ── Tool implementations ────────────────────────────────────────

function buildResult(text: string, details: Record<string, unknown> = {}): AgentToolResult<Record<string, unknown>> {
  return {
    content: [{ type: "text", text }],
    details: { tool: "autoresearch", ...details },
  };
}

async function startAutoresearch(
  params: { project_dir: string; prompt: string; model?: string; max_iterations?: number },
  broadcastEvent: (type: string, data: unknown) => void,
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

  // Git safety
  const gitNote = ensureGitRepo(projectDir);

  // Set up experiment
  const id = generateExperimentId();
  const sessionDir = join(SESSIONS_DIR, id);
  mkdirSync(sessionDir, { recursive: true });

  // Install vendored extension + skill into the sub-agent's pi config
  const piAgentDir = join(sessionDir, ".pi", "agent");
  mkdirSync(piAgentDir, { recursive: true });
  installVendoredExtension(piAgentDir);

  // Write autoresearch config if max_iterations specified
  if (params.max_iterations) {
    writeFileSync(
      join(projectDir, "autoresearch.config.json"),
      JSON.stringify({ maxIterations: params.max_iterations }, null, 2) + "\n",
    );
  }

  // Build tmux command
  const tmuxSession = `${TMUX_SESSION_PREFIX}${id}`;
  const model = params.model || "";
  const modelArgs = model ? `--model ${model}` : "";
  const piCommand = [
    `export PI_AGENT_DIR="${piAgentDir}"`,
    `cd ${JSON.stringify(projectDir)}`,
    `exec pi ${modelArgs} "/skill:autoresearch-create ${params.prompt}"`,
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

  const jsonlPath = join(projectDir, "autoresearch.jsonl");

  // Set up active experiment tracking
  activeExperiment = {
    id,
    tmuxSession,
    projectDir,
    jsonlPath,
    model: model || null,
    startedAt: new Date().toISOString(),
    pollInterval: null,
    lastJsonlOffset: existsSync(jsonlPath) ? readFileSync(jsonlPath, "utf-8").length : 0,
    lastBroadcastedRun: 0,
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
        postStatusCard(expId, summary, summary.totalRuns > 0 ? "completed" : "failed");
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
    if (entries.length === 0) return;
    activeExperiment.lastJsonlOffset = newOffset;

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

        // Post timeline card updates on milestones: every 5 runs or on new best
        if (summary.totalRuns % 5 === 0 || entry.status === "keep") {
          postStatusCard(activeExperiment.id, summary, "running");
        }
      }
    }
  }, 2000);

  const parts = [
    `✅ Autoresearch launched.`,
    `Experiment: ${id}`,
    `tmux session: ${tmuxSession}`,
    `Project: ${projectDir}`,
    model ? `Model: ${model}` : "Model: (pi default)",
    params.max_iterations ? `Max iterations: ${params.max_iterations}` : "",
    gitNote || "",
    "",
    `Open the terminal pane to see the TUI dashboard (Ctrl+X to expand).`,
    `Use stop_autoresearch to stop the experiment.`,
  ].filter(Boolean);

  // Post initial timeline status card
  const initialSummary = buildExperimentSummary([]);
  initialSummary.name = params.prompt.slice(0, 80);
  postStatusCard(id, initialSummary, "running");

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
    postStatusCard(exp.id, summary, "stopped");
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

export const autoresearchSupervisor: ExtensionFactory = (pi: ExtensionAPI) => {
  // Broadcast helper — will be wired to web channel SSE if available
  let broadcastEvent: (type: string, data: unknown) => void = () => {};

  // Try to detect piclaw's broadcastEvent from the runtime
  try {
    const global = globalThis as { __PICLAW_BROADCAST_EVENT__?: (type: string, data: unknown) => void };
    if (typeof global.__PICLAW_BROADCAST_EVENT__ === "function") {
      broadcastEvent = global.__PICLAW_BROADCAST_EVENT__;
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
    async execute(_toolCallId, params) {
      return startAutoresearch(params, broadcastEvent);
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

      // Try to find the JSONL by scanning known session dirs
      const sessionDir = join(SESSIONS_DIR, id);
      if (!existsSync(sessionDir)) return;

      // Read the tmux pane's cwd to find the project dir
      const cwdResult = spawnSync("tmux", ["display-message", "-t", tmuxSession, "-p", "#{pane_current_path}"], { encoding: "utf8" });
      const projectDir = cwdResult.stdout?.trim() || "";
      if (!projectDir || !existsSync(projectDir)) return;

      const jsonlPath = join(projectDir, "autoresearch.jsonl");
      activeExperiment = {
        id,
        tmuxSession,
        projectDir,
        jsonlPath,
        model: null,
        startedAt: new Date().toISOString(),
        pollInterval: null,
        lastJsonlOffset: existsSync(jsonlPath) ? readFileSync(jsonlPath, "utf-8").length : 0,
        lastBroadcastedRun: 0,
      };

      // Resume polling
      activeExperiment.pollInterval = setInterval(() => {
        if (!activeExperiment) return;
        if (!tmuxSessionExists(activeExperiment.tmuxSession)) {
          stopPolling();
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
        }
      }, 2000);

      console.log(`[autoresearch] Re-attached to running experiment ${id} (tmux: ${tmuxSession})`);
    } catch (err) {
      console.warn("[autoresearch] Failed to re-attach to existing session:", err);
    }
  };

  // Run reattachment on next tick (after extension registration completes)
  setTimeout(reattachExisting, 1000);
};
