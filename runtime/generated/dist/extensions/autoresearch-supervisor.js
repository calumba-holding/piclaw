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
import { join, resolve, dirname, basename } from "node:path";
import { Type } from "@sinclair/typebox";
import { WORKSPACE_DIR } from "../core/config.js";
import { createMedia } from "../db/media.js";
import { createLogger } from "../utils/logger.js";
import { buildAutoresearchSubagentCommand } from "./autoresearch-launcher.js";
import { clearAutoresearchSessionFiles, prepareDirectAutoresearchWorktree } from "./autoresearch-workdir.js";
import { postMessagesToolMessage } from "./messages-crud.js";
const log = createLogger("extensions.autoresearch-supervisor");
// ── Paths ───────────────────────────────────────────────────────
const VENDOR_DIR = resolve(dirname(import.meta.dir), "..", "vendor", "autoresearch");
const SESSIONS_DIR = join(WORKSPACE_DIR, ".piclaw", "autoresearch-sessions");
const TMUX_SESSION_PREFIX = "autoresearch-";
let activeExperiment = null;
const autoresearchWidgetsByChat = new Map();
// ── Helpers ─────────────────────────────────────────────────────
function tmuxSessionExists(name) {
    const result = spawnSync("tmux", ["has-session", "-t", name], { stdio: "ignore" });
    return result.status === 0;
}
function ensureGitRepo(dir) {
    if (existsSync(join(dir, ".git")))
        return null;
    try {
        execSync("git init", { cwd: dir, stdio: "ignore" });
        execSync("git add -A", { cwd: dir, stdio: "ignore" });
        execSync('git commit -m "Initial commit before autoresearch" --allow-empty', { cwd: dir, stdio: "ignore" });
        return "Initialized new git repository.";
    }
    catch (err) {
        return `Warning: git init failed: ${err instanceof Error ? err.message : String(err)}`;
    }
}
function installVendoredExtension(piAgentDir) {
    const extDir = join(piAgentDir, "extensions", "pi-autoresearch");
    const skillDir = join(piAgentDir, "skills", "autoresearch-create");
    // Clean previous symlinks/copies
    for (const dir of [extDir, skillDir]) {
        try {
            rmSync(dir, { recursive: true, force: true });
        }
        catch { /* ok */ }
    }
    mkdirSync(dirname(extDir), { recursive: true });
    mkdirSync(dirname(skillDir), { recursive: true });
    const vendorExt = join(VENDOR_DIR, "extensions", "pi-autoresearch");
    const vendorSkill = join(VENDOR_DIR, "skills", "autoresearch-create");
    symlinkSync(vendorExt, extDir);
    symlinkSync(vendorSkill, skillDir);
}
function parseJsonlFile(path) {
    if (!existsSync(path))
        return [];
    try {
        return readFileSync(path, "utf-8")
            .split("\n")
            .filter(Boolean)
            .map((line) => {
            try {
                return JSON.parse(line);
            }
            catch {
                return null;
            }
        })
            .filter(Boolean);
    }
    catch {
        return [];
    }
}
function readNewJsonlLines(path, offset) {
    if (!existsSync(path))
        return { entries: [], newOffset: offset };
    try {
        const stat = statSync(path);
        if (stat.size <= offset)
            return { entries: [], newOffset: offset };
        const fd = readFileSync(path, "utf-8");
        const newContent = fd.slice(offset);
        const entries = newContent
            .split("\n")
            .filter(Boolean)
            .map((line) => { try {
            return JSON.parse(line);
        }
        catch {
            return null;
        } })
            .filter(Boolean);
        return { entries, newOffset: fd.length };
    }
    catch {
        return { entries: [], newOffset: offset };
    }
}
function buildExperimentSummary(entries) {
    let name = "Experiment";
    let metricName = "metric";
    let metricUnit = "";
    let direction = "lower";
    let bestMetric = null;
    let confidence = null;
    let lastDescription = "";
    let kept = 0, discarded = 0, crashed = 0, checksFailed = 0, totalRuns = 0;
    for (const entry of entries) {
        if (entry.type === "config") {
            if (entry.name)
                name = entry.name;
            if (entry.metricName)
                metricName = entry.metricName;
            if (entry.metricUnit !== undefined)
                metricUnit = entry.metricUnit;
            if (entry.bestDirection)
                direction = entry.bestDirection;
            continue;
        }
        totalRuns++;
        if (entry.status === "keep")
            kept++;
        else if (entry.status === "discard")
            discarded++;
        else if (entry.status === "crash")
            crashed++;
        else if (entry.status === "checks_failed")
            checksFailed++;
        if (entry.status === "keep" && typeof entry.metric === "number" && entry.metric > 0) {
            if (bestMetric === null) {
                bestMetric = entry.metric;
            }
            else if (direction === "lower" ? entry.metric < bestMetric : entry.metric > bestMetric) {
                bestMetric = entry.metric;
            }
        }
        if (entry.confidence !== null && entry.confidence !== undefined) {
            confidence = entry.confidence;
        }
        if (entry.description)
            lastDescription = entry.description;
    }
    return { name, metricName, metricUnit, direction, totalRuns, kept, discarded, crashed, checksFailed, bestMetric, confidence, lastDescription };
}
function buildActiveExperimentSummary(exp) {
    const summary = existsSync(exp.jsonlPath)
        ? buildExperimentSummary(parseJsonlFile(exp.jsonlPath))
        : buildExperimentSummary([]);
    if (!summary.name || summary.name === "Experiment") {
        summary.name = exp.displayName || basename(exp.projectDir) || "Experiment";
    }
    return summary;
}
function buildAutoresearchSeries(entries) {
    const summary = buildExperimentSummary(entries);
    const series = new Map();
    let run = 0;
    const ensureSeries = (key, label, unit = "") => {
        const existing = series.get(key);
        if (existing)
            return existing;
        const created = { key, label, unit, points: [] };
        series.set(key, created);
        return created;
    };
    for (const entry of entries) {
        if (entry.type === "config")
            continue;
        run += 1;
        if (typeof entry.metric === "number" && Number.isFinite(entry.metric)) {
            ensureSeries("primary_metric", summary.metricName, summary.metricUnit).points.push({ run, value: entry.metric });
        }
        if (entry.metrics && typeof entry.metrics === "object") {
            for (const [key, rawValue] of Object.entries(entry.metrics)) {
                if (typeof rawValue !== "number" || !Number.isFinite(rawValue))
                    continue;
                const normalizedKey = key.trim();
                if (!normalizedKey)
                    continue;
                const seriesKey = normalizedKey.toLowerCase() === summary.metricName.toLowerCase()
                    ? "primary_metric"
                    : `metric:${normalizedKey}`;
                const label = normalizedKey.toLowerCase() === summary.metricName.toLowerCase() ? summary.metricName : normalizedKey;
                ensureSeries(seriesKey, label).points.push({ run, value: rawValue });
            }
        }
    }
    return Array.from(series.values()).filter((item) => item.points.length > 0);
}
function shellQuote(value) {
    return `'${String(value).replace(/'/g, `'\\''`)}'`;
}
function createReportRef(reportPath) {
    if (!reportPath || !existsSync(reportPath))
        return null;
    try {
        const data = readFileSync(reportPath);
        const filename = basename(reportPath);
        const mediaId = createMedia(filename, "text/markdown", data, null, {
            size: data.length,
            source_path: reportPath,
            kind: "file",
        });
        return {
            path: reportPath,
            filename,
            mediaId,
            openUrl: `/workspace/raw?path=${encodeURIComponent(reportPath)}`,
            downloadUrl: mediaId > 0 ? `/media/${mediaId}` : null,
        };
    }
    catch (error) {
        log.warn("Failed to create autoresearch report attachment", {
            reportPath,
            error,
        });
        return {
            path: reportPath,
            filename: basename(reportPath),
            mediaId: null,
            openUrl: `/workspace/raw?path=${encodeURIComponent(reportPath)}`,
            downloadUrl: null,
        };
    }
}
function postReportAttachment(chatJid, exp, report, state) {
    if (!report?.mediaId)
        return;
    const verb = state === "completed" ? "completed" : state === "failed" ? "ended" : "stopped";
    postMessagesToolMessage({
        action: "post",
        type: "agent",
        chat_jid: chatJid,
        content: `Autoresearch ${verb}: ${exp.displayName || exp.id}. Attached report: ${report.filename}`,
        media_ids: [report.mediaId],
    }, chatJid);
}
function buildAutoresearchPanel(exp, state, options = {}) {
    if (!exp || state === "idle")
        return null;
    const summary = options.summary ?? buildActiveExperimentSummary(exp);
    const entries = options.entries ?? (existsSync(exp.jsonlPath) ? parseJsonlFile(exp.jsonlPath) : []);
    const series = buildAutoresearchSeries(entries);
    const runLabel = `${summary.totalRuns} run${summary.totalRuns === 1 ? "" : "s"}`;
    const stateLabel = state.replace(/[-_]+/g, " ");
    const tmuxAttachCommand = exp.tmuxSession ? `tmux attach -t ${shellQuote(exp.tmuxSession)}` : "";
    const reportLinks = options.report
        ? [
            `[Open report](${options.report.openUrl})`,
            options.report.downloadUrl ? `[Download report](${options.report.downloadUrl})` : "",
        ].filter(Boolean).join(" · ")
        : "";
    const detailSections = [
        [
            "| Field | Value |",
            "|---|---|",
            `| State | **${stateLabel}** |`,
            `| Runs | **${summary.totalRuns}** (${summary.kept} kept, ${summary.discarded} discarded${summary.crashed ? `, ${summary.crashed} crashed` : ""}) |`,
            summary.bestMetric !== null ? `| Best ${summary.metricName} | **${summary.bestMetric}${summary.metricUnit}** |` : "",
            summary.confidence !== null ? `| Confidence | **${summary.confidence.toFixed(1)}×** |` : "",
            exp.model ? `| Model | \`${exp.model}\` |` : "",
            exp.maxIterations ? `| Max runs | **${exp.maxIterations}** |` : "",
            exp.projectDir ? `| Project | \`${exp.projectDir}\` |` : "",
            options.reason ? `| Reason | ${String(options.reason).replace(/\|/g, "\\|")} |` : "",
            reportLinks ? `| Report | ${reportLinks} |` : "",
        ].filter(Boolean).join("\n"),
    ].filter(Boolean);
    const actions = [];
    if (state === "running") {
        actions.push({ key: "stop", label: "Cancel", action_type: "autoresearch.stop", tone: "danger" });
    }
    else {
        actions.push({ key: "dismiss", label: "Dismiss", action_type: "autoresearch.dismiss" });
    }
    return {
        key: "autoresearch",
        kind: "chart_status",
        title: summary.name || exp.displayName || "Autoresearch",
        collapsed_text: runLabel,
        detail_markdown: detailSections.join("\n\n"),
        ...(summary.lastDescription ? { last_run_text: `Last run: ${summary.lastDescription}` } : {}),
        ...(tmuxAttachCommand ? { tmux_command: tmuxAttachCommand } : {}),
        state,
        series,
        ...(actions.length ? { actions } : {}),
    };
}
function buildAutoresearchWidgetPayload(exp, state, options = {}) {
    if (!exp)
        return null;
    const panel = buildAutoresearchPanel(exp, state, options);
    if (!panel)
        return null;
    return {
        chat_jid: exp.chatJid,
        key: panel.key,
        content: [{ type: "status_panel", panel }],
        options: {
            surface: "status-panel",
            state,
        },
    };
}
function clearAutoresearchStatusPanel(broadcastEvent, chatJid) {
    autoresearchWidgetsByChat.delete(chatJid);
    broadcastEvent("extension_ui_widget", {
        chat_jid: chatJid,
        key: "autoresearch",
        content: [],
        options: { surface: "status-panel", remove: true },
    });
}
function emitAutoresearchStatus(broadcastEvent, exp, state, summary, reason, entries, report) {
    try {
        if (!exp)
            return;
        const widget = buildAutoresearchWidgetPayload(exp, state, {
            summary: summary ?? null,
            reason: reason ?? null,
            entries: entries ?? null,
            report: report ?? null,
        });
        if (!widget) {
            clearAutoresearchStatusPanel(broadcastEvent, exp.chatJid);
            return;
        }
        autoresearchWidgetsByChat.set(exp.chatJid, widget);
        broadcastEvent("extension_ui_widget", widget);
    }
    catch {
        // best effort only
    }
}
function emitAutoresearchLaunchPlaceholder(broadcastEvent, params, chatJid) {
    const displayName = params.prompt.slice(0, 80) || basename(resolve(params.project_dir)) || "Experiment";
    const summary = buildExperimentSummary([]);
    summary.name = displayName;
    const placeholder = {
        id: `launching-${Date.now().toString(36)}`,
        tmuxSession: "",
        projectDir: resolve(params.project_dir),
        jsonlPath: join(SESSIONS_DIR, `.launching-${Date.now().toString(36)}.jsonl`),
        model: params.model || null,
        maxIterations: params.max_iterations ?? null,
        startedAt: new Date().toISOString(),
        pollInterval: null,
        lastJsonlOffset: 0,
        lastActivityAt: Date.now(),
        chatJid,
        displayName,
    };
    emitAutoresearchStatus(broadcastEvent, placeholder, "running", summary, null, []);
}
export function getAutoresearchWidgetPayload(chatJid) {
    const normalizedChatJid = typeof chatJid === "string" && chatJid.trim() ? chatJid.trim() : null;
    if (activeExperiment && (!normalizedChatJid || activeExperiment.chatJid === normalizedChatJid)) {
        return buildAutoresearchWidgetPayload(activeExperiment, "running");
    }
    if (!normalizedChatJid)
        return null;
    return autoresearchWidgetsByChat.get(normalizedChatJid) ?? null;
}
export function dismissAutoresearchWidget(chatJid) {
    const normalizedChatJid = typeof chatJid === "string" && chatJid.trim() ? chatJid.trim() : null;
    if (!normalizedChatJid)
        return false;
    if (activeExperiment?.chatJid === normalizedChatJid)
        return false;
    const existed = autoresearchWidgetsByChat.delete(normalizedChatJid);
    if (existed) {
        autoresearchWidgetBroadcast("extension_ui_widget", {
            chat_jid: normalizedChatJid,
            key: "autoresearch",
            content: [],
            options: { surface: "status-panel", remove: true },
        });
    }
    return existed;
}
let autoresearchWidgetBroadcast = () => { };
function generateReport(projectDir, jsonlPath) {
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
        if (entry.type === "config")
            continue;
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
    variables: Type.Optional(Type.Array(Type.String(), { description: "Optional list of tracked variables/metrics to highlight in the launch UI." })),
});
const StopSchema = Type.Object({
    generate_report: Type.Optional(Type.Boolean({ description: "Generate a markdown experiment report (default true)." })),
});
const StatusSchema = Type.Object({});
let pendingLaunch = null;
/** Resolve the chat JID to use for live autoresearch status updates. */
function resolveStatusChatJid(explicitChatJid) {
    if (explicitChatJid?.trim())
        return explicitChatJid.trim();
    if (process.env.PICLAW_CHAT_JID?.trim())
        return process.env.PICLAW_CHAT_JID.trim();
    return "web:default";
}
export function getPendingLaunch() {
    return pendingLaunch;
}
export function consumePendingLaunch() {
    const launch = pendingLaunch;
    pendingLaunch = null;
    return launch;
}
function sessionMetadataPath(workDir) {
    return join(workDir, "autoresearch.session.json");
}
function writeSessionMetadata(workDir, metadata) {
    try {
        writeFileSync(sessionMetadataPath(workDir), JSON.stringify(metadata, null, 2) + "\n", "utf-8");
    }
    catch (error) {
        log.warn("Failed to write autoresearch session metadata", {
            workDir,
            error,
        });
    }
}
function readSessionMetadata(workDir) {
    try {
        const path = sessionMetadataPath(workDir);
        if (!existsSync(path))
            return null;
        const parsed = JSON.parse(readFileSync(path, "utf-8"));
        return parsed && typeof parsed === "object" ? parsed : null;
    }
    catch {
        return null;
    }
}
function formatContextWindowLabel(value) {
    if (!Number.isFinite(value) || (value ?? 0) <= 0)
        return "unknown ctx";
    const num = Number(value);
    if (num >= 1_000_000)
        return `${(num / 1_000_000).toFixed(num % 1_000_000 === 0 ? 0 : 1)}M ctx`;
    if (num >= 1_000)
        return `${(num / 1_000).toFixed(num % 1_000 === 0 ? 0 : 1)}k ctx`;
    return `${num} ctx`;
}
function buildModelPickerCard(models, currentModel, launch) {
    const choices = models.map((m) => ({ title: `${m.label} • ${formatContextWindowLabel(m.contextWindow)}`, value: m.label }));
    const defaultValue = currentModel && choices.find((c) => c.value === currentModel)
        ? currentModel
        : choices[0]?.value || "";
    const variableLabels = Array.isArray(launch?.variables)
        ? launch.variables.map((item) => String(item || '').trim()).filter(Boolean)
        : [];
    const facts = [
        { title: 'Project', value: launch?.project_dir || '—' },
        { title: 'Runs', value: launch?.max_iterations ? `Up to ${launch.max_iterations}` : 'Open-ended' },
        { title: 'Variables', value: variableLabels.length ? variableLabels.join(', ') : 'Auto-detect during run' },
    ];
    return {
        type: "adaptive_card",
        card_id: `autoresearch-model-pick-${Date.now()}`,
        schema_version: "1.5",
        state: "active",
        fallback_text: "Configure and launch the autoresearch experiment.",
        payload: {
            type: "AdaptiveCard",
            version: "1.5",
            body: [
                { type: "TextBlock", text: "🔬 Autoresearch — Launch Experiment", weight: "Bolder", size: "Medium" },
                { type: "TextBlock", text: launch?.prompt || 'No summary provided.', wrap: true, spacing: 'Small' },
                { type: 'FactSet', facts },
                { type: "TextBlock", text: "Model", weight: "Bolder", spacing: "Medium" },
                { type: "Input.ChoiceSet", id: "model", style: "compact", choices, value: defaultValue },
                { type: "TextBlock", text: "Isolation", weight: "Bolder", spacing: "Medium" },
                { type: "Input.Toggle", id: "sandbox", title: "Run in a copied sandbox (safer, uses more disk)", value: "true" },
                { type: "TextBlock", text: "When off, runs directly in the repo on a new git branch. Requires an existing git repository.", wrap: true, isSubtle: true, size: "Small" },
            ],
            actions: [
                { type: "Action.Submit", title: "Launch Experiment →", data: { intent: "autoresearch-launch" } },
            ],
        },
    };
}
// ── Tool implementations ────────────────────────────────────────
function buildResult(text, details = {}) {
    return {
        content: [{ type: "text", text }],
        details: { tool: "autoresearch", ...details },
    };
}
async function startAutoresearch(params, broadcastEvent, chatJid) {
    const resolvedChatJid = chatJid || resolveStatusChatJid();
    const failStart = (message, details = {}) => {
        clearAutoresearchStatusPanel(broadcastEvent, resolvedChatJid);
        return buildResult(message, details);
    };
    // Prerequisites
    const piPath = spawnSync("which", ["pi"], { encoding: "utf8" }).stdout.trim();
    if (!piPath)
        return buildResult("❌ pi CLI not found. Install pi first.");
    const tmuxPath = spawnSync("which", ["tmux"], { encoding: "utf8" }).stdout.trim();
    if (!tmuxPath)
        return buildResult("❌ tmux not found.");
    if (activeExperiment) {
        return buildResult(`❌ An experiment is already running: ${activeExperiment.id} in ${activeExperiment.projectDir}. Stop it first.`, { active_experiment: activeExperiment.id });
    }
    const projectDir = resolve(params.project_dir);
    if (!existsSync(projectDir))
        return buildResult(`❌ Project directory does not exist: ${projectDir}`);
    emitAutoresearchLaunchPlaceholder(broadcastEvent, params, resolvedChatJid);
    const useSandbox = params.sandbox !== false;
    // Generate a short unique experiment ID
    const id = `exp-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
    const sessionDir = join(SESSIONS_DIR, id);
    let workDir;
    let branchName = null;
    let worktreeRoot = null;
    if (useSandbox) {
        const sandboxDir = join(sessionDir, "sandbox");
        const jsonlPath = join(sandboxDir, "autoresearch.jsonl");
        const hasExistingData = existsSync(jsonlPath);
        if (hasExistingData) {
            log.info("Resuming existing sandboxed autoresearch experiment", {
                id,
                entryCount: parseJsonlFile(jsonlPath).length,
            });
        }
        else {
            mkdirSync(sessionDir, { recursive: true });
            try {
                execSync(`cp -a ${JSON.stringify(projectDir + "/")} ${JSON.stringify(sandboxDir)}`, { stdio: "ignore" });
            }
            catch (err) {
                return failStart(`❌ Failed to copy project to sandbox: ${err instanceof Error ? err.message : String(err)}`);
            }
            clearAutoresearchSessionFiles(sandboxDir);
        }
        workDir = sandboxDir;
    }
    else {
        // Direct mode — run on a fresh branch + git worktree so repo-root autoresearch
        // files from unrelated historical experiments cannot be resumed accidentally.
        branchName = `autoresearch/${id}`;
        try {
            const prepared = prepareDirectAutoresearchWorktree(projectDir, sessionDir, branchName);
            worktreeRoot = prepared.worktreeRoot;
            workDir = prepared.workDir;
        }
        catch (err) {
            return failStart(`❌ Failed to prepare direct autoresearch worktree ${branchName}: ${err instanceof Error ? err.message : String(err)}`);
        }
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
        writeFileSync(join(workDir, "autoresearch.config.json"), JSON.stringify({ maxIterations: params.max_iterations }, null, 2) + "\n");
    }
    const displayName = params.prompt.slice(0, 80) || basename(workDir) || "Experiment";
    writeSessionMetadata(workDir, {
        chat_jid: resolvedChatJid,
        display_name: displayName,
        model: params.model || null,
        max_iterations: params.max_iterations ?? null,
        variables: Array.isArray(params.variables) ? params.variables : undefined,
    });
    // Build tmux command
    const tmuxSession = `${TMUX_SESSION_PREFIX}${id}`;
    const model = params.model || "";
    const extPath = join(VENDOR_DIR, "extensions", "pi-autoresearch", "index.ts");
    const skillPath = join(VENDOR_DIR, "skills", "autoresearch-create");
    const piCommand = buildAutoresearchSubagentCommand({
        workDir,
        model,
        extPath,
        skillPath,
        sessionDir: join(sessionDir, "sessions"),
        prompt: params.prompt,
        hasExistingData,
    });
    const tmuxResult = spawnSync("tmux", [
        "new-session", "-d",
        "-s", tmuxSession,
        "-x", "200", "-y", "50",
        "bash", "-lc", piCommand,
    ], { stdio: "ignore" });
    if (tmuxResult.status !== 0) {
        return failStart(`❌ Failed to create tmux session (exit ${tmuxResult.status}).`);
    }
    // Set up active experiment tracking
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
        lastActivityAt: Date.now(),
        chatJid: resolvedChatJid,
        displayName,
    };
    // Start JSONL polling
    activeExperiment.pollInterval = setInterval(() => {
        if (!activeExperiment)
            return;
        // Check if tmux session is still alive
        if (!tmuxSessionExists(activeExperiment.tmuxSession)) {
            const jsonlP = activeExperiment.jsonlPath;
            stopPolling();
            const finalState = existsSync(jsonlP) && buildExperimentSummary(parseJsonlFile(jsonlP)).totalRuns > 0 ? "completed" : "failed";
            finalizeAutoresearchRun(activeExperiment, finalState, { reason: "process_exited", generateReport: true });
            activeExperiment = null;
            return;
        }
        // Read new JSONL lines
        const { entries, newOffset } = readNewJsonlLines(activeExperiment.jsonlPath, activeExperiment.lastJsonlOffset);
        if (entries.length === 0) {
            const idleMs = Date.now() - activeExperiment.lastActivityAt;
            // Idle detection: two tiers
            // 1) max_iterations reached + 2 min idle → completed
            // 2) general idle for 30 minutes (agent stopped, context limit, crash) → completed
            //    30 min allows for long-running experiments (ML training, large builds)
            const MAX_ITER_IDLE_MS = 2 * 60_000;
            const GENERAL_IDLE_MS = 30 * 60_000;
            const allEntries = parseJsonlFile(activeExperiment.jsonlPath);
            const runCount = allEntries.filter((e) => e.type !== "config").length;
            const maxReached = activeExperiment.maxIterations !== null && runCount >= activeExperiment.maxIterations;
            const shouldStop = (maxReached && idleMs > MAX_ITER_IDLE_MS) || (idleMs > GENERAL_IDLE_MS);
            if (shouldStop) {
                const expId = activeExperiment.id;
                const tmux = activeExperiment.tmuxSession;
                const reason = maxReached ? "max_iterations_idle" : "general_idle";
                stopPolling();
                finalizeAutoresearchRun(activeExperiment, "completed", { reason, generateReport: true });
                spawnSync("tmux", ["send-keys", "-t", tmux, "C-c", ""], { stdio: "ignore" });
                setTimeout(() => spawnSync("tmux", ["kill-session", "-t", tmux], { stdio: "ignore" }), 2000);
                log.info("Autoresearch experiment completed", {
                    experimentId: expId,
                    runCount,
                    idleSeconds: Math.round(idleMs / 1000),
                    reason,
                });
                activeExperiment = null;
                return;
            }
            return;
        }
        activeExperiment.lastJsonlOffset = newOffset;
        activeExperiment.lastActivityAt = Date.now();
        // Refresh the live status snapshot for each new JSONL entry.
        for (const _entry of entries) {
            emitAutoresearchStatus(broadcastEvent, activeExperiment, "running", buildActiveExperimentSummary(activeExperiment));
        }
    }, 2000);
    const parts = [
        hasExistingData ? `✅ Autoresearch resumed.` : `✅ Autoresearch launched.`,
        `Experiment: ${id}`,
        `tmux session: ${tmuxSession}`,
        `Project: ${workDir}`,
        worktreeRoot ? `Worktree: ${worktreeRoot}` : "",
        branchName ? `Branch: ${branchName} (direct mode)` : "Mode: sandboxed copy",
        model ? `Model: ${model}` : "Model: (pi default)",
        params.max_iterations ? `Max iterations: ${params.max_iterations}` : "",
        hasExistingData ? `Resuming with existing JSONL data.` : "",
        "",
        useSandbox ? `Experiment runs in a copied sandbox — the original repo is not modified by this run.` : `⚠️ Direct mode — changes are made in an isolated git worktree on branch ${branchName}. Existing repo-root autoresearch files are cleared in that worktree before launch to avoid stale experiment state reuse.`,
        `Use stop_autoresearch to stop and clean up.`,
    ].filter(Boolean);
    // Publish the live status pane snapshot immediately.
    const initialSummary = buildExperimentSummary([]);
    initialSummary.name = params.prompt.slice(0, 80);
    emitAutoresearchStatus(broadcastEvent, activeExperiment, "running", initialSummary);
    return buildResult(parts.join("\n"), {
        experiment_id: id,
        tmux_session: tmuxSession,
        project_dir: projectDir,
        jsonl_path: jsonlPath,
        started: true,
    });
}
function stopPolling() {
    if (activeExperiment?.pollInterval) {
        clearInterval(activeExperiment.pollInterval);
        activeExperiment.pollInterval = null;
    }
}
function finalizeAutoresearchRun(exp, state, options = {}) {
    const entries = existsSync(exp.jsonlPath) ? parseJsonlFile(exp.jsonlPath) : [];
    const summary = entries.length > 0 ? buildExperimentSummary(entries) : buildActiveExperimentSummary(exp);
    let reportPath = null;
    let report = null;
    if (options.generateReport !== false && existsSync(exp.jsonlPath)) {
        const markdown = generateReport(exp.projectDir, exp.jsonlPath);
        reportPath = join(exp.projectDir, `autoresearch-report-${exp.id}.md`);
        writeFileSync(reportPath, markdown, "utf-8");
        report = createReportRef(reportPath);
        postReportAttachment(exp.chatJid, exp, report, state);
    }
    emitAutoresearchStatus(autoresearchWidgetBroadcast, exp, state, summary, options.reason ?? null, entries, report);
    return { summary, reportPath, report };
}
async function stopAutoresearch(params) {
    if (!activeExperiment) {
        return buildResult("No experiment is currently running.", { active: false });
    }
    if (params.chat_jid && activeExperiment.chatJid !== params.chat_jid) {
        return buildResult("No experiment is currently running in this chat.", { active: false, chat_jid: params.chat_jid });
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
    const { summary, reportPath, report } = finalizeAutoresearchRun(exp, "stopped", {
        reason: "user_stopped",
        generateReport: params.generate_report !== false,
    });
    if (reportPath) {
        parts.push(`Report: ${reportPath}`);
        if (report?.downloadUrl || report?.openUrl) {
            parts.push(`Links: ${[report.openUrl ? `open ${report.openUrl}` : "", report.downloadUrl ? `download ${report.downloadUrl}` : ""].filter(Boolean).join(" • ")}`);
        }
    }
    if (existsSync(exp.jsonlPath)) {
        parts.push("", `Results: ${summary.totalRuns} runs, ${summary.kept} kept, ${summary.discarded} discarded`, summary.bestMetric !== null ? `Best ${summary.metricName}: ${summary.bestMetric}${summary.metricUnit}` : "", summary.confidence !== null ? `Confidence: ${summary.confidence.toFixed(1)}×` : "");
    }
    activeExperiment = null;
    return buildResult(parts.filter(Boolean).join("\n"), {
        experiment_id: exp.id,
        stopped: true,
        report_path: reportPath,
        report_media_id: report?.mediaId ?? null,
        report_open_url: report?.openUrl ?? null,
        report_download_url: report?.downloadUrl ?? null,
    });
}
export async function stopAutoresearchFromWeb(params = {}) {
    return stopAutoresearch(params);
}
async function autoresearchStatus() {
    if (!activeExperiment) {
        return buildResult("No experiment is currently running.", { active: false });
    }
    const exp = activeExperiment;
    const alive = tmuxSessionExists(exp.tmuxSession);
    if (!alive) {
        stopPolling();
        const { summary, reportPath, report } = finalizeAutoresearchRun(exp, existsSync(exp.jsonlPath) && parseJsonlFile(exp.jsonlPath).filter((entry) => entry.type !== "config").length > 0 ? "completed" : "failed", { reason: "process_exited", generateReport: true });
        activeExperiment = null;
        return buildResult(`Experiment ${exp.id} is no longer running (tmux session gone).` +
            `\nLast state: ${summary.totalRuns} runs, ${summary.kept} kept.` +
            (reportPath ? `\nReport: ${reportPath}` : ""), {
            active: false,
            experiment_id: exp.id,
            report_path: reportPath,
            report_media_id: report?.mediaId ?? null,
            report_open_url: report?.openUrl ?? null,
            report_download_url: report?.downloadUrl ?? null,
        });
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
        parts.push("", `Runs: ${summary.totalRuns} (${summary.kept} kept, ${summary.discarded} discarded, ${summary.crashed} crashed)`, summary.bestMetric !== null ? `Best ${summary.metricName}: ${summary.bestMetric}${summary.metricUnit}` : "", summary.confidence !== null ? `Confidence: ${summary.confidence.toFixed(1)}×` : "", summary.lastDescription ? `Last: ${summary.lastDescription}` : "");
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
export async function startAutoresearchFromCard(params) {
    const noop = () => { };
    const result = await startAutoresearch(params, noop, resolveStatusChatJid(params.chat_jid));
    return result.content[0]?.type === "text" ? result.content[0].text : "Launched.";
}
export const autoresearchSupervisor = (pi) => {
    // Broadcast helper — will be wired to web channel SSE if available
    let broadcastEvent = () => { };
    // Try to detect piclaw's broadcastEvent from the runtime
    try {
        const global = globalThis;
        if (typeof global.__PICLAW_BROADCAST_EVENT__ === "function") {
            broadcastEvent = global.__PICLAW_BROADCAST_EVENT__;
            autoresearchWidgetBroadcast = global.__PICLAW_BROADCAST_EVENT__;
        }
    }
    catch { /* ok */ }
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
                const models = [];
                try {
                    ctx.modelRegistry.refresh();
                    const seen = new Set();
                    for (const m of ctx.modelRegistry.getAvailable()) {
                        if (!m?.provider || !m?.id)
                            continue;
                        const label = `${m.provider}/${m.id}`;
                        if (seen.has(label))
                            continue;
                        seen.add(label);
                        models.push({ label, provider: m.provider, id: m.id, contextWindow: Number.isFinite(m.contextWindow) ? Number(m.contextWindow) : undefined });
                    }
                }
                catch { /* ok */ }
                if (models.length === 0) {
                    return buildResult("❌ No models available. Configure a model provider first (/login).");
                }
                const currentModel = ctx.model ? `${ctx.model.provider}/${ctx.model.id}` : null;
                const pickerChatJid = resolveStatusChatJid();
                pendingLaunch = {
                    project_dir: params.project_dir,
                    prompt: params.prompt,
                    max_iterations: params.max_iterations,
                    variables: Array.isArray(params.variables) ? params.variables : undefined,
                    chat_jid: pickerChatJid,
                };
                const card = buildModelPickerCard(models, currentModel, pendingLaunch);
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
        let tmuxSession = null;
        let experimentId = null;
        try {
            const result = spawnSync("tmux", ["list-sessions", "-F", "#{session_name}"], { encoding: "utf8" });
            if (result.status !== 0)
                return;
            const sessions = result.stdout.trim().split("\n").filter((s) => s.startsWith(TMUX_SESSION_PREFIX));
            if (sessions.length === 0)
                return;
            // Re-attach to the first found autoresearch session
            const discoveredTmuxSession = sessions[0];
            const discoveredExperimentId = discoveredTmuxSession.slice(TMUX_SESSION_PREFIX.length);
            tmuxSession = discoveredTmuxSession;
            experimentId = discoveredExperimentId;
            // Read the tmux pane's cwd to find the working dir (sandbox)
            const cwdResult = spawnSync("tmux", ["display-message", "-t", discoveredTmuxSession, "-p", "#{pane_current_path}"], { encoding: "utf8" });
            const projectDir = cwdResult.stdout?.trim() || "";
            if (!projectDir || !existsSync(projectDir))
                return;
            // Look for JSONL in the working dir (which is the sandbox)
            const jsonlPath = join(projectDir, "autoresearch.jsonl");
            if (!existsSync(jsonlPath))
                return;
            const metadata = readSessionMetadata(projectDir);
            activeExperiment = {
                id: discoveredExperimentId,
                tmuxSession: discoveredTmuxSession,
                projectDir,
                jsonlPath,
                model: typeof metadata?.model === "string" && metadata.model.trim() ? metadata.model.trim() : null,
                maxIterations: (() => {
                    if (typeof metadata?.max_iterations === "number")
                        return metadata.max_iterations;
                    try {
                        const c = JSON.parse(readFileSync(join(projectDir, "autoresearch.config.json"), "utf-8"));
                        return typeof c.maxIterations === "number" ? c.maxIterations : null;
                    }
                    catch {
                        return null;
                    }
                })(),
                startedAt: new Date().toISOString(),
                pollInterval: null,
                lastJsonlOffset: existsSync(jsonlPath) ? readFileSync(jsonlPath, "utf-8").length : 0,
                lastActivityAt: Date.now(),
                chatJid: typeof metadata?.chat_jid === "string" && metadata.chat_jid.trim() ? metadata.chat_jid.trim() : resolveStatusChatJid(),
                displayName: typeof metadata?.display_name === "string" && metadata.display_name.trim() ? metadata.display_name.trim() : (basename(projectDir) || discoveredExperimentId || "Experiment"),
            };
            // Resume polling
            activeExperiment.pollInterval = setInterval(() => {
                if (!activeExperiment)
                    return;
                if (!tmuxSessionExists(activeExperiment.tmuxSession)) {
                    stopPolling();
                    const summary = existsSync(activeExperiment.jsonlPath)
                        ? buildExperimentSummary(parseJsonlFile(activeExperiment.jsonlPath))
                        : buildActiveExperimentSummary(activeExperiment);
                    emitAutoresearchStatus(broadcastEvent, activeExperiment, summary.totalRuns > 0 ? "completed" : "failed", summary, "process_exited");
                    activeExperiment = null;
                    return;
                }
                const { entries, newOffset } = readNewJsonlLines(activeExperiment.jsonlPath, activeExperiment.lastJsonlOffset);
                if (entries.length === 0)
                    return;
                activeExperiment.lastJsonlOffset = newOffset;
                for (const _entry of entries) {
                    emitAutoresearchStatus(broadcastEvent, activeExperiment, "running", buildActiveExperimentSummary(activeExperiment));
                }
            }, 2000);
            // Publish an immediate live-status snapshot with the current state.
            const summary = existsSync(jsonlPath)
                ? buildExperimentSummary(parseJsonlFile(jsonlPath))
                : buildActiveExperimentSummary(activeExperiment);
            emitAutoresearchStatus(broadcastEvent, activeExperiment, "running", summary);
            log.info("Re-attached to running autoresearch experiment", {
                experimentId,
                tmuxSession,
            });
        }
        catch (err) {
            log.warn("Failed to re-attach to existing autoresearch session", {
                experimentId,
                tmuxSession,
                err,
            });
        }
    };
    // Run reattachment on next tick (after extension registration completes)
    setTimeout(reattachExisting, 1000);
};
