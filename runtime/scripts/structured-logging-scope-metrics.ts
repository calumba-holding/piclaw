import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { buildNonCodeMask, collectFiles } from "./silent-swallow-metrics.ts";

const SCOPE_PATHS = [
  "runtime/src/agent-pool.ts",
  "runtime/src/channels/web.ts",
  "runtime/src/channels/whatsapp.ts",
  "runtime/src/channels/web/workspace/file-service.ts",
  "runtime/src/db/connection.ts",
  "runtime/src/runtime",
];

const RAW_CONSOLE_PATTERN = /\bconsole\.(log|warn|error|info|debug)\b/g;
const EXPECTED_GUARD_PATTERN = /expected:/g;
const LOGGER_IMPORT_PATTERN = /utils\/logger\.js/;
const ALLOWLIST = new Set<string>([
  "runtime/src/runtime/console-timestamps.ts",
]);

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

const files = expandScope(SCOPE_PATHS);
let rawConsoleCalls = 0;
let filesWithRawConsole = 0;
let allowlistedConsoleCalls = 0;
let filesUsingStructuredLogger = 0;
let expectedGuardMarkers = 0;

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
}

console.log(`METRIC scope_raw_console_calls=${rawConsoleCalls}`);
console.log(`METRIC scope_files_with_raw_console=${filesWithRawConsole}`);
console.log(`METRIC scope_allowlisted_console_calls=${allowlistedConsoleCalls}`);
console.log(`METRIC scope_files_using_structured_logger=${filesUsingStructuredLogger}`);
console.log(`METRIC scope_expected_guard_markers=${expectedGuardMarkers}`);

if (process.argv.includes("--check") && rawConsoleCalls > 0) {
  console.error(`[structured-logging-scope] Found ${rawConsoleCalls} non-allowlisted raw console call(s) across ${filesWithRawConsole} scope file(s).`);
  process.exit(1);
}
