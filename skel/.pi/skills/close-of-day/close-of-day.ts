#!/usr/bin/env bun
/**
 * close-of-day.ts – refresh situation notes and perform timeline noise cleanup
 * using the unified messages tool actions.
 */

import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { parseArgs } from "util";

type MessagesParams = Record<string, unknown>;

function resolveExistingPath(label: string, candidates: string[]): string {
  for (const candidate of candidates) {
    if (existsSync(candidate)) return candidate;
  }
  throw new Error(`Could not resolve ${label}. Tried: ${candidates.join(", ")}`);
}

const dbModulePath = resolveExistingPath("piclaw db module", [
  "/workspace/piclaw/piclaw/src/db.ts",
  "/home/agent/piclaw/piclaw/src/db.ts",
  "/usr/local/lib/bun/install/global/node_modules/piclaw/src/db.ts",
]);
const messagesCrudModulePath = resolveExistingPath("messages-crud module", [
  "/workspace/piclaw/piclaw/src/extensions/messages-crud.ts",
  "/home/agent/piclaw/piclaw/src/extensions/messages-crud.ts",
  "/usr/local/lib/bun/install/global/node_modules/piclaw/src/extensions/messages-crud.ts",
]);

const { initDatabase } = await import(dbModulePath);
const { runMessagesTool } = await import(messagesCrudModulePath) as {
  runMessagesTool: (params: MessagesParams, defaultChat?: string, postFn?: unknown) => unknown;
};

interface SearchResultRow {
  rowid: number;
  chat_jid: string;
  sender: string;
  sender_name: string;
  content: string;
  timestamp: string;
  is_bot_message: number;
}

interface SearchDetails {
  action: string;
  count?: number;
  query?: string;
  limit?: number;
  offset?: number;
  results?: SearchResultRow[];
}

interface DeleteDetails {
  action: string;
  requested_row_ids?: number[];
  deleted_row_ids?: number[];
  skipped_row_ids?: number[];
  skipped_reasons?: Record<string, string[]>;
  skipped_count?: number;
  count?: number;
  dry_run?: boolean;
}

type MessageRole = "user" | "assistant";

type CleanupGroup = {
  name: string;
  patterns?: string[];
  exactMatches?: string[];
  role?: MessageRole;
  maxLength?: number;
};


// --help support
if (Bun.argv.includes("--help") || Bun.argv.includes("-h")) {
  console.log("Usage: bun close-of-day.ts [options]");
  console.log("");
  console.log("  Run a daily end-of-day sweep: refresh situation notes, back up state, clean low-value timeline traffic, and run the daily-notes summarisation flow before declaring the day closed.");
  process.exit(0);
}
const argConfig = parseArgs({
  args: Bun.argv.slice(2),
  options: {
    days: { type: "string", default: "1" },
    "chat-jid": { type: "string", default: "web:default" },
    since: { type: "string", default: "" },
    report: { type: "string", default: "" },
    "dry-run": { type: "boolean", default: true },
    apply: { type: "boolean", default: false },
    cleanup: { type: "boolean", default: true },
    "cleanup-only": { type: "boolean", default: false },
    "situate-only": { type: "boolean", default: false },
    "include-media": { type: "boolean", default: false },
    "report-only": { type: "boolean", default: false },
    "skip-backup": { type: "boolean", default: false },
    "backup-cmd": { type: "string", default: "/workspace/.piclaw/restic/backup.sh" },
  },
  strict: true,
});

const CHAT_JID = argConfig.values["chat-jid"] || "web:default";
const parsedDays = Number.parseInt(argConfig.values.days || "1", 10);
const DAYS = Number.isFinite(parsedDays) && parsedDays > 0 ? parsedDays : 1;
const includeMedia = argConfig.values["include-media"] || false;
const cleanupOnly = argConfig.values["cleanup-only"] || false;
const situateOnly = argConfig.values["situate-only"] || false;
const reportOnly = argConfig.values["report-only"] || false;
const skipBackup = argConfig.values["skip-backup"] || false;
const backupCommand = String(argConfig.values["backup-cmd"] || "/workspace/.piclaw/restic/backup.sh");

const DRY_RUN = argConfig.values.apply ? false : Boolean(argConfig.values["dry-run"]);
const DO_CLEANUP = Boolean(argConfig.values.cleanup);

const sinceFromDays = new Date(Date.now() - Math.max(1, DAYS) * 86_400_000).toISOString();
const SINCE = (argConfig.values.since && argConfig.values.since.trim()) || sinceFromDays;
const TODAY = new Date().toISOString().slice(0, 10);
const REPORT_PATH = argConfig.values.report || `/workspace/exports/close-of-day-${TODAY}.md`;

function normalizeQuery(input: string): string {
  return input
    .replace(/%+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function parseSearchDetails(result: unknown): SearchDetails | null {
  const value = result as { details?: unknown };
  return value?.details && typeof value.details === "object"
    ? (value.details as SearchDetails)
    : null;
}

function parseDeleteDetails(result: unknown): DeleteDetails | null {
  const value = result as { details?: unknown };
  return value?.details && typeof value.details === "object"
    ? (value.details as DeleteDetails)
    : null;
}

function runMessageSearch(params: MessagesParams): SearchResultRow[] {
  const result = runMessagesTool({
    action: "search",
    ...params,
    details_max_chars: 12000,
  });

  const details = parseSearchDetails(result);
  const rows = Array.isArray(details?.results) ? details.results : [];
  return rows.filter((row) => typeof row.rowid === "number");
}

function runResticBackup(): void {
  if (skipBackup) {
    console.log("\n=== Close-of-day: backup skipped ===");
    return;
  }

  const command = backupCommand.trim();
  if (!command) {
    console.log("\n=== Close-of-day: backup skipped (no command configured) ===");
    return;
  }

  console.log(`\n=== Close-of-day: running backup ===`);
  console.log(`Command: ${command}`);
  try {
    const output = execSync(command, { encoding: "utf8", maxBuffer: 8 * 1024 * 1024 }).toString();
    if (output.trim().length > 0) {
      console.log(output.trim());
    }
    console.log("Backup completed.");
  } catch (error: unknown) {
    const toText = (value: unknown): string => {
      if (typeof value === "string") return value;
      if (value instanceof Buffer) return value.toString("utf8");
      if (value instanceof Uint8Array) return new TextDecoder().decode(value);
      return "";
    };

    const err = error as { message?: string; stdout?: unknown; stderr?: unknown };
    const stdout = toText(err?.stdout);
    const stderr = toText(err?.stderr);
    if (stdout) console.log(`Backup stdout:\n${stdout}`);
    if (stderr) console.error(`Backup stderr:\n${stderr}`);

    const message = err?.message || String(error);
    throw new Error(`Restic backup failed: ${message}`);
  }
}

function searchPatternGroup(group: CleanupGroup, since: string): number[] {
  const ids = new Set<number>();

  const addMatches = (rows: SearchResultRow[], exactRequired: string | null) => {
    for (const row of rows) {
      if (typeof row.rowid !== "number" || !Number.isFinite(row.rowid)) continue;
      if (group.maxLength && row.content.length > group.maxLength) continue;

      if (exactRequired) {
        if ((row.content || "").trim().toLowerCase() !== exactRequired) continue;
      }

      ids.add(row.rowid);
    }
  };

  for (const pattern of (group.patterns ?? []).map(normalizeQuery).filter(Boolean)) {
    let offset = 0;
    const limit = 50;
    while (true) {
      const role = group.role;
      const query: MessagesParams = {
        action: "search",
        chat_jid: CHAT_JID,
        query: pattern,
        since,
        limit,
        offset,
        ...(role ? { role } : {}),
      };

      const rows = runMessageSearch(query);
      if (rows.length === 0) break;
      addMatches(rows, null);

      if (rows.length < limit) break;
      offset += rows.length;
    }
  }

  for (const exactRaw of (group.exactMatches ?? []).map(cleanText).filter(Boolean)) {
    const exactValue = exactRaw.toLowerCase();
    let offset = 0;
    const limit = 50;
    while (true) {
      const role = group.role;
      const query: MessagesParams = {
        action: "search",
        chat_jid: CHAT_JID,
        query: exactRaw,
        since,
        limit,
        offset,
        ...(role ? { role } : {}),
      };

      const rows = runMessageSearch(query);
      if (rows.length === 0) break;
      addMatches(rows, exactValue);

      if (rows.length < limit) break;
      offset += rows.length;
    }
  }

  return Array.from(ids).sort((a, b) => a - b);
}

function deleteByRows(rowIds: number[], dryRun: boolean, force: boolean): DeleteDetails {
  const requested = Array.from(new Set(rowIds.filter((id) => Number.isInteger(id) && id > 0))).sort((a, b) => a - b);
  if (requested.length === 0) {
    return {
      action: "delete",
      requested_row_ids: [],
      deleted_row_ids: [],
      skipped_row_ids: [],
      skipped_count: 0,
      count: 0,
      dry_run: dryRun,
    };
  }

  const deleted = new Set<number>();
  const skipped = new Set<number>();
  const skippedReasons: Record<string, string[]> = {};

  for (let i = 0; i < requested.length; i += 50) {
    const chunk = requested.slice(i, i + 50);
    const result = runMessagesTool({
      action: "delete",
      chat_jid: CHAT_JID,
      row_ids: chunk,
      dry_run: dryRun,
      force,
    });

    const details = parseDeleteDetails(result);
    for (const id of details?.deleted_row_ids ?? []) {
      if (typeof id === "number" && Number.isFinite(id)) deleted.add(id);
    }

    for (const id of details?.skipped_row_ids ?? []) {
      if (typeof id === "number" && Number.isFinite(id)) skipped.add(id);
    }

    if (details?.skipped_reasons) {
      for (const [rawId, reasons] of Object.entries(details.skipped_reasons)) {
        if (reasons?.length) skippedReasons[rawId] = reasons;
      }
    }

    const failedMessage = Array.isArray(result?.content)
      ? result.content
          .map((piece) => (piece as { text?: string }).text)
          .filter((v): v is string => typeof v === "string")
      : [];
    if (failedMessage.some((msg) => msg.includes("not found") || msg.includes("cannot infer"))) {
      // Continue; partial failures are tracked in skipped reasons above.
    }
  }

  return {
    action: "delete",
    requested_row_ids: requested,
    deleted_row_ids: Array.from(deleted).sort((a, b) => a - b),
    skipped_row_ids: Array.from(skipped).sort((a, b) => a - b),
    skipped_reasons: skippedReasons,
    skipped_count: skipped.size,
    count: deleted.size,
    dry_run: dryRun,
  };
}

async function runSituate(): Promise<void> {
  const cmd = [
    "bun run /workspace/scripts/situate.ts",
    `--days ${Math.max(1, DAYS)}`,
    "--chat",
    CHAT_JID,
    "--out",
    REPORT_PATH,
    "--update-notes",
  ].join(" ");

  console.log(`\n=== Close-of-day: situation update ===`);
  console.log(`Generating report: ${REPORT_PATH}`);
  const output = execSync(cmd, { encoding: "utf8", maxBuffer: 5 * 1024 * 1024 }).toString();
  console.log(output.trim());
}

function runCleanup(): Record<string, DeleteDetails> {
  runResticBackup();

  console.log(`\n=== Close-of-day: timeline cleanup ===`);
  console.log(`Mode: ${DRY_RUN ? "dry-run" : "live delete"}`);
  console.log(`Chat: ${CHAT_JID}`);
  console.log(`Since: ${SINCE}`);

  const groups: CleanupGroup[] = [
    {
      name: "reloads",
      patterns: ["reload", "supervisorctl restart", "restart-piclaw", "local-install", "bun pm pack"],
      maxLength: 500,
    },
    {
      name: "compaction",
      patterns: ["compaction", "compacting", "auto-compact"],
      maxLength: 500,
    },
    {
      name: "greetings",
      exactMatches: [
        "hey",
        "hello",
        "hi",
        "hey!",
        "hello!",
        "hi!",
        "hey?",
        "hello?",
        "hey there",
        "hello there",
        "good morning",
      ],
      maxLength: 30,
    },
    {
      name: "agent_intros",
      patterns: ["good to see you", "ready to help", "how can i help"],
      role: "assistant",
      maxLength: 300,
    },
    {
      name: "slash_commands",
      patterns: ["/"],
      maxLength: 50,
    },
    {
      name: "slash_responses",
      patterns: [
        "unknown command:",
        "current model:",
        "active model:",
        "switched model",
        "switching model",
        "model switched",
        "model switch",
        "cycle model",
        "cycle thinking",
        "thinking level:",
        "thinking set",
        "thinking:",
        "supports thinking",
      ],
      role: "assistant",
      maxLength: 300,
    },
    {
      name: "acks",
      exactMatches: [
        "yes",
        "yes please",
        "ok",
        "okay",
        "sure",
        "go",
        "done",
        "fixed",
        "nice",
        "great",
        "perfect",
        "thanks",
        "good",
        "cool",
        "yep",
        "nope",
        "well?",
        "so?",
        "stop",
        "try again",
        "retry",
        "again",
        "any news?",
        "hello?",
        "proceed",
      ],
      maxLength: 30,
    },
    {
      name: "filler",
      patterns: [
        "let me check",
        "let me look",
        "let me verify",
        "let me read",
        "let me find",
        "let me examine",
        "let me also",
        "let me see",
        "now let me",
        "now i need to",
      ],
      role: "assistant",
      maxLength: 200,
    },
    {
      name: "version_bumps",
      patterns: ["bumped version", "tagged v0.", "bump patch", "bump version"],
      maxLength: 300,
    },
    {
      name: "build_noise",
      patterns: [
        "make lint",
        "make test",
        "make build",
        "bun run build",
        "bun run lint",
        "bun run test",
        "pass 0 fail",
        "tests across",
        "lint, test",
      ],
      maxLength: 300,
    },
    {
      name: "git_ops",
      patterns: ["git add -a", "git commit -m", "git push", "git status --short", "git diff --cached"],
      maxLength: 200,
    },
    {
      name: "pkg_install",
      patterns: ["bun install", "bun add", "bun update", "packages installed", "npm view"],
      maxLength: 300,
    },
  ];

  const results: Record<string, DeleteDetails> = {};

  for (const group of groups) {
    const rowIds = searchPatternGroup(group, SINCE);
    const details = deleteByRows(rowIds, DRY_RUN, includeMedia);
    results[group.name] = details;

    const deleted = details.count ?? 0;
    const skipped = details.skipped_count ?? 0;
    const total = (details.requested_row_ids ?? []).length;
    console.log(`- ${group.name}: found ${total}, ${DRY_RUN ? "would delete" : "deleted"} ${deleted}, skipped ${skipped}`);
  }

  const totalDeleted = Object.values(results).reduce((acc, item) => acc + (item.count || 0), 0);
  const totalSkipped = Object.values(results).reduce((acc, item) => acc + (item.skipped_count || 0), 0);
  const totalRequested = Object.values(results).reduce((acc, item) => {
    const requested = new Set<number>(item.requested_row_ids || []);
    return acc + requested.size;
  }, 0);

  console.log(`\nCleanup totals: ${totalRequested} requested, ${totalDeleted} deleted, ${totalSkipped} skipped`);

  return results;
}

async function main(): Promise<void> {
  initDatabase();

  if (cleanupOnly) {
    runCleanup();
    return;
  }

  if (!situateOnly && DO_CLEANUP) {
    runSituate();
    if (!reportOnly) {
      runCleanup();
    }
    return;
  }

  if (situateOnly) {
    await runSituate();
    return;
  }

  await runSituate();
  if (!reportOnly && DO_CLEANUP) {
    runCleanup();
  }
}

await main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error("close-of-day failed:", message);
  process.exit(1);
});
