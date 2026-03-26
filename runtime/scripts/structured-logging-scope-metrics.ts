import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { buildNonCodeMask, collectFiles } from "./silent-swallow-metrics.ts";

const PRIMARY_SCOPE_PATHS = [
  "runtime/src/agent-pool.ts",
  "runtime/src/channels/web.ts",
  "runtime/src/channels/whatsapp.ts",
  "runtime/src/channels/web/workspace/file-service.ts",
  "runtime/src/db/connection.ts",
  "runtime/src/runtime",
];

const ADJACENT_SCOPE_PATHS = [
  "runtime/src/ipc.ts",
  "runtime/src/task-scheduler.ts",
  "runtime/src/queue.ts",
  "runtime/src/agent-pool/slash-command.ts",
  "runtime/src/channels/web/recovery.ts",
  "runtime/src/channels/web/handlers/agent.ts",
];

const BACKEND_SERVICE_SCOPE_PATHS = [
  "runtime/src/index.ts",
  "runtime/src/channels/pushover.ts",
  "runtime/src/channels/web/sse.ts",
  "runtime/src/channels/web/auth-gateway.ts",
  "runtime/src/channels/web/manifest.ts",
  "runtime/src/channels/web/webauthn-auth.ts",
  "runtime/src/channels/web/avatar-service.ts",
  "runtime/src/channels/web/http/extension-routes.ts",
  "runtime/src/channels/web/http/request-guards.ts",
  "runtime/src/channels/web/ui-bridge.ts",
  "runtime/src/channels/web/workspace/watcher.ts",
  "runtime/src/channels/web/link-previews.ts",
  "runtime/src/agent-control/handlers/control.ts",
  "runtime/src/agent-control/handlers/login.ts",
  "runtime/src/extensions/autoresearch-supervisor.ts",
  "runtime/src/extensions/exit-process.ts",
  "runtime/src/extensions/file-attachments.ts",
];

const REMAINING_OPERATIONAL_SCOPE_PATHS = [
  "runtime/src/core/config.ts",
  "runtime/src/agent-pool/orphan-tool-results.ts",
];

const RAW_CONSOLE_PATTERN = /\bconsole\.(log|warn|error|info|debug)\b/g;
const EXPECTED_GUARD_PATTERN = /expected:/g;
const LOGGER_IMPORT_PATTERN = /utils\/logger\.js/;
const ALLOWLIST = new Set<string>([
  "runtime/src/runtime/console-timestamps.ts",
]);
const QUIET_CATCH_SIGNAL_PATTERN = /\breturn\b|\bthrow\b|\b(?:log|logger)\.(?:debug|info|warn|error)\b|\bconsole\.(?:log|warn|error|info|debug)\b/g;

function toRepoPath(filePath: string): string {
  return filePath.split(path.sep).join("/");
}

function expandScope(paths: string[]): string[] {
  const files: string[] = [];
  for (const scopePath of paths) {
    if (!existsSync(scopePath)) continue;
    const stat = statSync(scopePath);
    if (stat.isDirectory()) {
      files.push(...collectFiles([scopePath]));
      continue;
    }
    files.push(scopePath);
  }
  return Array.from(new Set(files.map(toRepoPath))).sort();
}

function countMatches(source: string, pattern: RegExp): number {
  const nonCodeMask = buildNonCodeMask(source);
  pattern.lastIndex = 0;
  let total = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(source)) !== null) {
    if (nonCodeMask[match.index]) continue;
    total++;
  }
  return total;
}

function findMatchingBrace(source: string, nonCodeMask: Uint8Array, openIndex: number): number {
  let depth = 0;
  for (let i = openIndex; i < source.length; i++) {
    if (nonCodeMask[i]) continue;
    const ch = source[i];
    if (ch === "{") {
      depth += 1;
      continue;
    }
    if (ch === "}") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function countUndocumentedQuietCatches(source: string): number {
  const nonCodeMask = buildNonCodeMask(source);
  const catchPattern = /catch\s*(\([^)]*\))?\s*\{/g;
  let total = 0;
  let match: RegExpExecArray | null;
  while ((match = catchPattern.exec(source)) !== null) {
    if (nonCodeMask[match.index]) continue;
    const openBraceIndex = source.indexOf("{", match.index);
    if (openBraceIndex < 0) continue;
    const closeBraceIndex = findMatchingBrace(source, nonCodeMask, openBraceIndex);
    if (closeBraceIndex < 0) continue;
    const body = source.slice(openBraceIndex + 1, closeBraceIndex);
    if (/expected:/.test(body)) continue;
    if (QUIET_CATCH_SIGNAL_PATTERN.test(body)) {
      QUIET_CATCH_SIGNAL_PATTERN.lastIndex = 0;
      continue;
    }
    QUIET_CATCH_SIGNAL_PATTERN.lastIndex = 0;
    total += 1;
  }
  return total;
}

function collectScopeMetrics(files: string[]): {
  rawConsoleCalls: number;
  filesWithRawConsole: number;
  allowlistedConsoleCalls: number;
  filesUsingStructuredLogger: number;
  expectedGuardMarkers: number;
  undocumentedQuietCatches: number;
} {
  let rawConsoleCalls = 0;
  let filesWithRawConsole = 0;
  let allowlistedConsoleCalls = 0;
  let filesUsingStructuredLogger = 0;
  let expectedGuardMarkers = 0;
  let undocumentedQuietCatches = 0;

  for (const filePath of files) {
    const source = readFileSync(filePath, "utf8");
    const rawCount = countMatches(source, RAW_CONSOLE_PATTERN);
    if (ALLOWLIST.has(filePath)) {
      allowlistedConsoleCalls += rawCount;
    } else if (rawCount > 0) {
      rawConsoleCalls += rawCount;
      filesWithRawConsole++;
    }
    if (LOGGER_IMPORT_PATTERN.test(source)) filesUsingStructuredLogger++;
    expectedGuardMarkers += (source.match(EXPECTED_GUARD_PATTERN) || []).length;
    undocumentedQuietCatches += countUndocumentedQuietCatches(source);
  }

  return {
    rawConsoleCalls,
    filesWithRawConsole,
    allowlistedConsoleCalls,
    filesUsingStructuredLogger,
    expectedGuardMarkers,
    undocumentedQuietCatches,
  };
}

const primaryScopeMetrics = collectScopeMetrics(expandScope(PRIMARY_SCOPE_PATHS));
const adjacentScopeMetrics = collectScopeMetrics(expandScope(ADJACENT_SCOPE_PATHS));
const backendServiceScopeMetrics = collectScopeMetrics(expandScope(BACKEND_SERVICE_SCOPE_PATHS));
const remainingOperationalScopeMetrics = collectScopeMetrics(expandScope(REMAINING_OPERATIONAL_SCOPE_PATHS));

console.log(`METRIC scope_raw_console_calls=${primaryScopeMetrics.rawConsoleCalls}`);
console.log(`METRIC scope_files_with_raw_console=${primaryScopeMetrics.filesWithRawConsole}`);
console.log(`METRIC scope_allowlisted_console_calls=${primaryScopeMetrics.allowlistedConsoleCalls}`);
console.log(`METRIC scope_files_using_structured_logger=${primaryScopeMetrics.filesUsingStructuredLogger}`);
console.log(`METRIC scope_expected_guard_markers=${primaryScopeMetrics.expectedGuardMarkers}`);
console.log(`METRIC scope_undocumented_quiet_catches=${primaryScopeMetrics.undocumentedQuietCatches}`);
console.log(`METRIC adjacent_runtime_raw_console_calls=${adjacentScopeMetrics.rawConsoleCalls}`);
console.log(`METRIC adjacent_runtime_files_with_raw_console=${adjacentScopeMetrics.filesWithRawConsole}`);
console.log(`METRIC adjacent_runtime_files_using_structured_logger=${adjacentScopeMetrics.filesUsingStructuredLogger}`);
console.log(`METRIC backend_service_raw_console_calls=${backendServiceScopeMetrics.rawConsoleCalls}`);
console.log(`METRIC backend_service_files_with_raw_console=${backendServiceScopeMetrics.filesWithRawConsole}`);
console.log(`METRIC backend_service_files_using_structured_logger=${backendServiceScopeMetrics.filesUsingStructuredLogger}`);
console.log(`METRIC remaining_operational_raw_console_calls=${remainingOperationalScopeMetrics.rawConsoleCalls}`);
console.log(`METRIC remaining_operational_files_with_raw_console=${remainingOperationalScopeMetrics.filesWithRawConsole}`);
console.log(`METRIC remaining_operational_files_using_structured_logger=${remainingOperationalScopeMetrics.filesUsingStructuredLogger}`);

if (process.argv.includes("--check") && primaryScopeMetrics.rawConsoleCalls > 0) {
  console.error(`[structured-logging-scope] Found ${primaryScopeMetrics.rawConsoleCalls} non-allowlisted raw console call(s) across ${primaryScopeMetrics.filesWithRawConsole} scope file(s).`);
  process.exit(1);
}
