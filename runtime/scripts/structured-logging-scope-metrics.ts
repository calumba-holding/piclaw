import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { buildNonCodeMask, collectFiles } from "./silent-swallow-metrics.ts";

interface LoggingScopeDefinition {
  name: string;
  paths: string[];
  rawConsoleMetric: string;
  filesWithRawConsoleMetric: string;
  filesUsingStructuredLoggerMetric: string;
  enforceInCheck: boolean;
}

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

const LOGGING_SCOPES: LoggingScopeDefinition[] = [
  {
    name: "structured-logging-scope",
    paths: PRIMARY_SCOPE_PATHS,
    rawConsoleMetric: "scope_raw_console_calls",
    filesWithRawConsoleMetric: "scope_files_with_raw_console",
    filesUsingStructuredLoggerMetric: "scope_files_using_structured_logger",
    enforceInCheck: true,
  },
  {
    name: "adjacent-runtime",
    paths: ADJACENT_SCOPE_PATHS,
    rawConsoleMetric: "adjacent_runtime_raw_console_calls",
    filesWithRawConsoleMetric: "adjacent_runtime_files_with_raw_console",
    filesUsingStructuredLoggerMetric: "adjacent_runtime_files_using_structured_logger",
    enforceInCheck: true,
  },
  {
    name: "backend-service",
    paths: BACKEND_SERVICE_SCOPE_PATHS,
    rawConsoleMetric: "backend_service_raw_console_calls",
    filesWithRawConsoleMetric: "backend_service_files_with_raw_console",
    filesUsingStructuredLoggerMetric: "backend_service_files_using_structured_logger",
    enforceInCheck: true,
  },
  {
    name: "remaining-operational",
    paths: REMAINING_OPERATIONAL_SCOPE_PATHS,
    rawConsoleMetric: "remaining_operational_raw_console_calls",
    filesWithRawConsoleMetric: "remaining_operational_files_with_raw_console",
    filesUsingStructuredLoggerMetric: "remaining_operational_files_using_structured_logger",
    enforceInCheck: true,
  },
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

const scopeMetrics = new Map(
  LOGGING_SCOPES.map((scope) => [scope.name, collectScopeMetrics(expandScope(scope.paths))]),
);
const primaryScopeMetrics = scopeMetrics.get("structured-logging-scope");

if (!primaryScopeMetrics) {
  throw new Error("Missing primary structured logging scope metrics.");
}

console.log(`METRIC scope_raw_console_calls=${primaryScopeMetrics.rawConsoleCalls}`);
console.log(`METRIC scope_files_with_raw_console=${primaryScopeMetrics.filesWithRawConsole}`);
console.log(`METRIC scope_allowlisted_console_calls=${primaryScopeMetrics.allowlistedConsoleCalls}`);
console.log(`METRIC scope_files_using_structured_logger=${primaryScopeMetrics.filesUsingStructuredLogger}`);
console.log(`METRIC scope_expected_guard_markers=${primaryScopeMetrics.expectedGuardMarkers}`);
console.log(`METRIC scope_undocumented_quiet_catches=${primaryScopeMetrics.undocumentedQuietCatches}`);

for (const scope of LOGGING_SCOPES) {
  if (scope.name === "structured-logging-scope") continue;
  const metrics = scopeMetrics.get(scope.name);
  if (!metrics) continue;
  console.log(`METRIC ${scope.rawConsoleMetric}=${metrics.rawConsoleCalls}`);
  console.log(`METRIC ${scope.filesWithRawConsoleMetric}=${metrics.filesWithRawConsole}`);
  console.log(`METRIC ${scope.filesUsingStructuredLoggerMetric}=${metrics.filesUsingStructuredLogger}`);
}

console.log(`METRIC structured_logging_guarded_scopes=${LOGGING_SCOPES.filter((scope) => scope.enforceInCheck).length}`);

if (process.argv.includes("--check")) {
  const failures = LOGGING_SCOPES.flatMap((scope) => {
    if (!scope.enforceInCheck) return [];
    const metrics = scopeMetrics.get(scope.name);
    if (!metrics || metrics.rawConsoleCalls === 0) return [];
    return [
      `[${scope.name}] Found ${metrics.rawConsoleCalls} non-allowlisted raw console call(s) across ${metrics.filesWithRawConsole} scope file(s).`,
    ];
  });

  if (failures.length > 0) {
    for (const failure of failures) {
      console.error(failure);
    }
    process.exit(1);
  }
}
