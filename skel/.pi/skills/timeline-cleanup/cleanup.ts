/**
 * Timeline cleanup helper — delete low-value messages from the web chat.
 *
 * Usage:
 *   import { cleanupTimeline, cleanupAll } from "./cleanup.ts";
 *   const result = await cleanupTimeline({ patterns: ["reload"] });
 *   const results = await cleanupAll({ beforeRowid: 5000 });
 */
import Database from "bun:sqlite";
import { execSync } from "node:child_process";
import { copyFileSync, statSync, rmSync, writeFileSync, chmodSync } from "node:fs";

const DB_PATH = `${process.env.PICLAW_STORE || "/workspace/.piclaw/store"}/messages.db`;

export interface CleanupOptions {
  /** SQL LIKE patterns — each is wrapped in %...% automatically */
  patterns: string[];
  /** Target chat JID (default: web:default) */
  chatJid?: string;
  /** Only match messages with rowid < this value */
  beforeRowid?: number;
  /** Only match messages on/after this ISO timestamp */
  since?: string;
  /** Preview only — don't actually delete (default: false) */
  dryRun?: boolean;
  /** Also delete messages with media attachments (default: false) */
  includeMedia?: boolean;
  /** Only match messages shorter than this (default: no limit) */
  maxLength?: number;
  /** Only match messages from this sender (default: any) */
  senderFilter?: string;
  /** Match exact content values instead of LIKE patterns */
  exactMatches?: string[];
  /** Vacuum the DB after cleanup (default: false) */
  vacuum?: boolean;
  /** Delay between delete requests in ms (default: 1100) */
  throttleMs?: number;
  /** Retry deletes that hit 429 rate limits (default: true) */
  retryOn429?: boolean;
  /** Max retries for 429 responses (default: 2) */
  maxRetries?: number;
}

export interface CleanupResult {
  matched: number;
  skipped: number;
  deleted: number;
  failed: number;
  dbSizeBefore: string;
  dbSizeAfter: string;
}

function humanSize(bytes: number): string {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)}K`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}M`;
}

export async function cleanupTimeline(opts: CleanupOptions): Promise<CleanupResult> {
  const chatJid = opts.chatJid ?? "web:default";
  const dryRun = opts.dryRun ?? false;
  const includeMedia = opts.includeMedia ?? false;
  const vacuum = opts.vacuum ?? false;
  const throttleMs = Number.isFinite(opts.throttleMs) ? Math.max(0, Number(opts.throttleMs)) : 1100;
  const retryOn429 = opts.retryOn429 ?? true;
  const maxRetries = Number.isFinite(opts.maxRetries) ? Math.max(0, Number(opts.maxRetries)) : 2;
  const patterns = opts.patterns ?? [];
  const exactMatches = opts.exactMatches ?? [];

  if (!patterns.length && !exactMatches.length) {
    throw new Error("At least one pattern or exactMatch is required");
  }

  const dbSizeBefore = humanSize(statSync(DB_PATH).size);
  const db = new Database(DB_PATH, { readonly: true });

  // Build WHERE clauses
  const conditions: string[] = [];
  const params: (string | number)[] = [];
  let paramIdx = 1;

  // Chat JID
  conditions.push(`m.chat_jid = ?${paramIdx}`);
  params.push(chatJid);
  paramIdx++;

  // Before rowid
  if (opts.beforeRowid) {
    conditions.push(`m.rowid < ?${paramIdx}`);
    params.push(opts.beforeRowid);
    paramIdx++;
  }

  // Since timestamp
  if (opts.since) {
    conditions.push(`m.timestamp >= ?${paramIdx}`);
    params.push(opts.since);
    paramIdx++;
  }

  // Sender filter
  if (opts.senderFilter) {
    conditions.push(`m.sender = ?${paramIdx}`);
    params.push(opts.senderFilter);
    paramIdx++;
  }

  // Max length
  if (opts.maxLength) {
    conditions.push(`length(m.content) < ?${paramIdx}`);
    params.push(opts.maxLength);
    paramIdx++;
  }

  // Pattern matching (LIKE or exact)
  const matchClauses: string[] = [];
  for (const p of patterns) {
    matchClauses.push(`LOWER(m.content) LIKE ?${paramIdx}`);
    params.push(`%${p.toLowerCase()}%`);
    paramIdx++;
  }
  for (const e of exactMatches) {
    matchClauses.push(`LOWER(TRIM(m.content)) = ?${paramIdx}`);
    params.push(e.toLowerCase());
    paramIdx++;
  }
  if (matchClauses.length) {
    conditions.push(`(${matchClauses.join(" OR ")})`);
  }

  // Media filter
  const mediaFilter = includeMedia
    ? ""
    : " AND NOT EXISTS(SELECT 1 FROM message_media mm WHERE mm.message_rowid = m.rowid)";

  const where = conditions.join(" AND ");
  const countSql = `SELECT COUNT(*) as c FROM messages m WHERE ${where}`;
  const selectSql = `SELECT m.rowid FROM messages m WHERE ${where}${mediaFilter} ORDER BY m.rowid`;

  const countAll = db.prepare(countSql).get(...params) as { c: number };
  const rows = db.prepare(selectSql).all(...params) as { rowid: number }[];
  const skipped = countAll.c - rows.length;
  db.close();

  if (dryRun) {
    return { matched: countAll.c, skipped, deleted: 0, failed: 0, dbSizeBefore, dbSizeAfter: dbSizeBefore };
  }

  // Delete via HTTP API
  const PORT = process.env.PICLAW_WEB_PORT || "8080";
  const SECRET = process.env.PICLAW_INTERNAL_SECRET || process.env.PICLAW_WEB_INTERNAL_SECRET || "";
  const BASE_URL = `http://localhost:${PORT}`;
  let deleted = 0;
  let failed = 0;

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  for (const row of rows) {
    let attempt = 0;
    let done = false;
    while (!done) {
      try {
        const headers: Record<string, string> = {};
        if (SECRET) headers["x-piclaw-internal-secret"] = SECRET;
        const res = await fetch(`${BASE_URL}/post/${row.rowid}?cascade=true`, { method: "DELETE", headers });
        if (res.ok) {
          deleted++;
          done = true;
        } else if (res.status === 429 && retryOn429 && attempt < maxRetries) {
          attempt++;
          // Back off on rate limits, then retry
          await sleep(Math.max(throttleMs, 1000) * (attempt + 1));
          continue;
        } else {
          failed++;
          done = true;
        }
      } catch {
        failed++;
        done = true;
      }
    }

    if (throttleMs > 0) {
      await sleep(throttleMs);
    }
  }

  // Vacuum
  if (vacuum && deleted > 0) {
    vacuumDb();
  }

  const dbSizeAfter = humanSize(statSync(DB_PATH).size);
  return { matched: countAll.c, skipped, deleted, failed, dbSizeBefore, dbSizeAfter };
}

/** Vacuum the database. Requires a brief piclaw restart via a detached script. */
export function vacuumDb(): void {
  const tmpDb = "/tmp/messages-vacuum.db";
  try {
    copyFileSync(DB_PATH, tmpDb);
    rmSync(`${DB_PATH}-wal`, { force: true });
    rmSync(`${DB_PATH}-shm`, { force: true });
    execSync(`sqlite3 ${tmpDb} "VACUUM;"`, { timeout: 30000 });
    const script = [
      "#!/bin/bash",
      "sudo supervisorctl stop piclaw >/dev/null 2>&1",
      "sleep 2",
      `rm -f "${DB_PATH}-wal" "${DB_PATH}-shm"`,
      `cp "${tmpDb}" "${DB_PATH}"`,
      "sudo supervisorctl start piclaw >/dev/null 2>&1",
      `echo "$(date) Vacuum swap complete" >> /tmp/vacuum-swap.log`,
    ].join("\n");
    const scriptPath = "/tmp/vacuum-swap.sh";
    writeFileSync(scriptPath, script);
    chmodSync(scriptPath, 0o755);
    execSync(`setsid ${scriptPath} </dev/null >/dev/null 2>&1 &`);
  } catch (e) {
    console.error("[timeline-cleanup] Vacuum failed:", e);
  }
}

// ── Built-in pattern groups ──────────────────────────────────────────────

interface GroupOptions {
  beforeRowid?: number;
  since?: string;
  chatJid?: string;
  dryRun?: boolean;
  vacuum?: boolean;
}

/** Run all standard cleanup groups and return per-group results. */
export async function cleanupAll(
  opts: GroupOptions = {}
): Promise<Record<string, CleanupResult>> {
  const base = { chatJid: opts.chatJid, beforeRowid: opts.beforeRowid, since: opts.since, dryRun: opts.dryRun };
  const results: Record<string, CleanupResult> = {};

  // Reloads
  results.reloads = await cleanupTimeline({
    ...base,
    patterns: ["reload", "supervisorctl restart", "restart-piclaw", "local-install", "bun pm pack"],
    maxLength: 500,
  });

  // Compaction
  results.compaction = await cleanupTimeline({
    ...base,
    patterns: ["compaction", "compacting", "auto-compact"],
    maxLength: 500,
  });

  // User greetings
  results.greetings = await cleanupTimeline({
    ...base,
    exactMatches: [
      "hey", "hello", "hi", "hey!", "hello!", "hi!",
      "hey?", "hello?", "hey there", "hello there", "good morning",
    ],
    patterns: [],
    maxLength: 30,
  });

  // Agent intros
  results.agent_intros = await cleanupTimeline({
    ...base,
    patterns: ["good to see you", "ready to help", "how can i help"],
    senderFilter: "web-agent",
    maxLength: 300,
  });

  // Slash commands
  results.slash_commands = await cleanupTimeline({
    ...base,
    patterns: ["/"],
    maxLength: 50,
  });

  // Slash command responses (includes model/thinking switches)
  results.slash_responses = await cleanupTimeline({
    ...base,
    patterns: [
      "unknown command:",
      "current model:",
      "active model:",
      "switched%model",
      "switching%model",
      "model switched",
      "model switch",
      "cycle model",
      "cycle thinking",
      "thinking level:",
      "thinking set",
      "thinking:",
      "supports thinking",
    ],
    senderFilter: "web-agent",
    maxLength: 300,
  });

  // One-word acknowledgments
  results.acks = await cleanupTimeline({
    ...base,
    exactMatches: [
      "yes", "yes please", "ok", "okay", "sure", "go", "done", "fixed",
      "nice", "great", "perfect", "thanks", "good", "cool", "yep", "nope",
      "well?", "so?", "stop", "try again", "retry", "again", "any news?",
      "hello?", "proceed",
    ],
    patterns: [],
    maxLength: 30,
  });

  // Transition filler
  results.filler = await cleanupTimeline({
    ...base,
    patterns: [
      "let me check", "let me look", "let me verify", "let me read",
      "let me find", "let me examine", "let me also", "let me see",
      "now let me", "now i need to",
    ],
    senderFilter: "web-agent",
    maxLength: 200,
  });

  // Version bumps
  results.version_bumps = await cleanupTimeline({
    ...base,
    patterns: ["bumped version", "tagged v0.", "bump patch", "bump%version"],
    maxLength: 300,
  });

  // Build/lint/test noise
  results.build_noise = await cleanupTimeline({
    ...base,
    patterns: [
      "make lint", "make test", "make build",
      "bun run build", "bun run lint", "bun run test",
      "pass%0 fail", "tests across%files", "lint, test",
    ],
    maxLength: 300,
  });

  // Git operations
  results.git_ops = await cleanupTimeline({
    ...base,
    patterns: ["git add -a", "git commit -m", "git push", "git status --short", "git diff --cached"],
    maxLength: 200,
  });

  // Package install noise
  results.pkg_install = await cleanupTimeline({
    ...base,
    patterns: ["bun install", "bun add", "bun update", "packages installed", "npm view"],
    maxLength: 300,
  });

  // Vacuum at the end if requested
  if (opts.vacuum && !opts.dryRun) {
    const totalDeleted = Object.values(results).reduce((sum, r) => sum + r.deleted, 0);
    if (totalDeleted > 0) vacuumDb();
  }

  return results;
}

// ── CLI entrypoint ───────────────────────────────────────────────────────

if (import.meta.main) {

// --help support
if (process.argv.includes("--help") || process.argv.includes("-h")) {
  console.log("Usage: bun cleanup.ts [options]");
  console.log("");
  console.log("  Delete low-value messages from the web timeline by keyword patterns. Protects messages with user-uploaded images. Optionally vacuums the DB afterward.");
  process.exit(0);
}
  const args = process.argv.slice(2);

  const sinceIdx = args.indexOf("--since");
  const since = sinceIdx >= 0 ? args[sinceIdx + 1] : undefined;
  const daysIdx = args.indexOf("--days");
  const days = daysIdx >= 0 ? Number(args[daysIdx + 1]) : undefined;
  const computedSince = Number.isFinite(days)
    ? new Date(Date.now() - Math.max(0, days) * 24 * 60 * 60 * 1000).toISOString()
    : undefined;
  const sinceValue = since || computedSince;

  if (args.includes("--all")) {
    const dryRun = args.includes("--dry-run");
    const vacuum = args.includes("--vacuum");
    const beforeIdx = args.indexOf("--before");
    const beforeRowid = beforeIdx >= 0 ? Number(args[beforeIdx + 1]) : undefined;

    const results = await cleanupAll({ beforeRowid, since: sinceValue, dryRun, vacuum });
    let totalDeleted = 0;
    for (const [group, result] of Object.entries(results)) {
      if (result.deleted > 0 || result.matched > 0) {
        console.log(`${group}: matched=${result.matched} deleted=${result.deleted} skipped=${result.skipped}`);
      }
      totalDeleted += result.deleted;
    }
    console.log(`\nTotal deleted: ${totalDeleted}`);
  } else {
    const patternsIdx = args.indexOf("--patterns");
    const patterns =
      patternsIdx >= 0 && args[patternsIdx + 1]
        ? args[patternsIdx + 1].split(",").map((s) => s.trim())
        : [];

    if (!patterns.length) {
      console.error("Usage:");
      console.error("  bun run cleanup.ts --all [--dry-run] [--vacuum] [--before ROWID] [--since ISO] [--days N]");
      console.error("  bun run cleanup.ts --patterns 'reload,compaction' [--dry-run] [--vacuum] [--before ROWID] [--since ISO] [--days N]");
      process.exit(1);
    }

    const dryRun = args.includes("--dry-run");
    const vacuum = args.includes("--vacuum");
    const beforeIdx = args.indexOf("--before");
    const beforeRowid = beforeIdx >= 0 ? Number(args[beforeIdx + 1]) : undefined;

    const result = await cleanupTimeline({ patterns, dryRun, vacuum, beforeRowid, since: sinceValue });
    console.log(JSON.stringify(result, null, 2));
  }
}
