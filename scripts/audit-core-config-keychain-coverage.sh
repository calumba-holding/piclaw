#!/bin/bash
set -euo pipefail

ROOT_DIR=$(cd "$(dirname "$0")/.." && pwd)
ARTIFACT_DIR="$ROOT_DIR/artifacts/add-tests-core-config-and-keychain"
BASE_LCOV="$ARTIFACT_DIR/base.lcov.info"
CONFIG_IMPORT_LCOV="$ARTIFACT_DIR/config-import.lcov.info"
KEYCHAIN_IMPORT_LCOV="$ARTIFACT_DIR/keychain-import.lcov.info"
MERGED_LCOV="$ROOT_DIR/runtime/coverage/lcov.info"
SUMMARY_JSON="$ARTIFACT_DIR/coverage-summary.json"
SUMMARY_MD="$ARTIFACT_DIR/coverage-summary.md"
TEST_LOG="$ARTIFACT_DIR/targeted-test-output.log"

mkdir -p "$ARTIFACT_DIR"
: > "$TEST_LOG"

run_suite() {
  local label="$1"
  local out_lcov="$2"
  shift 2

  {
    echo "== $label =="
    (cd "$ROOT_DIR/runtime" && rm -rf coverage && PICLAW_DB_IN_MEMORY=1 bun test --max-concurrency=1 "$@" --coverage --coverage-reporter=lcov)
    echo
  } >>"$TEST_LOG" 2>&1

  if [[ ! -f "$ROOT_DIR/runtime/coverage/lcov.info" ]]; then
    echo "Expected coverage report at $ROOT_DIR/runtime/coverage/lcov.info for $label" >&2
    exit 1
  fi

  cp "$ROOT_DIR/runtime/coverage/lcov.info" "$out_lcov"
}

run_suite "base" "$BASE_LCOV" test/config/config.test.ts test/keychain.test.ts
run_suite "config-import" "$CONFIG_IMPORT_LCOV" test/config/config-coverage-import.test.ts
run_suite "keychain-import" "$KEYCHAIN_IMPORT_LCOV" test/keychain-coverage-import.test.ts

summary_json=$(bun -e '
const fs = require("fs");
const [summaryJsonPath, summaryMdPath, mergedLcovPath, ...lcovPaths] = process.argv.slice(1);
const targets = ["src/core/config.ts", "src/secure/keychain.ts"];
const merged = new Map();

for (const target of targets) {
  merged.set(target, new Map());
}

for (const lcovPath of lcovPaths) {
  let file = null;
  for (const line of fs.readFileSync(lcovPath, "utf8").split(/\r?\n/)) {
    if (line.startsWith("SF:")) {
      file = line.slice(3);
      continue;
    }
    if (!targets.includes(file || "")) continue;
    if (!line.startsWith("DA:")) continue;
    const [lineNoRaw, hitsRaw] = line.slice(3).split(",");
    const lineNo = Number(lineNoRaw);
    const hits = Number(hitsRaw);
    const fileMap = merged.get(file);
    fileMap.set(lineNo, Math.max(fileMap.get(lineNo) || 0, hits));
  }
}

let mergedLcov = "";
const summary = {
  generatedAt: new Date().toISOString(),
  command: "./scripts/audit-core-config-keychain-coverage.sh",
};
let uncoveredTotal = 0;
for (const target of targets) {
  const lineMap = merged.get(target);
  const lines = [...lineMap.entries()].sort((a, b) => a[0] - b[0]);
  const lf = lines.length;
  const lh = lines.filter(([, hits]) => hits > 0).length;
  uncoveredTotal += lf - lh;
  const key = target.endsWith("config.ts") ? "config" : "keychain";
  summary[key] = {
    file: target,
    lf,
    lh,
    uncovered: lf - lh,
    line_pct: lf === 0 ? 0 : Number(((lh / lf) * 100).toFixed(2)),
  };
  mergedLcov += `SF:${target}\n`;
  for (const [lineNo, hits] of lines) {
    mergedLcov += `DA:${lineNo},${hits}\n`;
  }
  mergedLcov += `LF:${lf}\nLH:${lh}\nend_of_record\n`;
}
summary.uncovered_lines = uncoveredTotal;
summary.min_line_pct = Math.min(summary.config.line_pct, summary.keychain.line_pct);
fs.mkdirSync(require("path").dirname(mergedLcovPath), { recursive: true });
fs.writeFileSync(mergedLcovPath, mergedLcov);
fs.writeFileSync(summaryJsonPath, JSON.stringify(summary, null, 2) + "\n");
const md = [
  "# Coverage summary: core/config + secure/keychain",
  "",
  "- Command: `./scripts/audit-core-config-keychain-coverage.sh`",
  "- Targeted test log: `artifacts/add-tests-core-config-and-keychain/targeted-test-output.log`",
  "- Merged LCOV report: `runtime/coverage/lcov.info`",
  "- Component LCOV reports:",
  "  - `artifacts/add-tests-core-config-and-keychain/base.lcov.info`",
  "  - `artifacts/add-tests-core-config-and-keychain/config-import.lcov.info`",
  "  - `artifacts/add-tests-core-config-and-keychain/keychain-import.lcov.info`",
  "",
  "| Module | Lines hit | Lines found | Line coverage |",
  "| --- | ---: | ---: | ---: |",
  `| \`src/core/config.ts\` | ${summary.config.lh} | ${summary.config.lf} | ${summary.config.line_pct}% |`,
  `| \`src/secure/keychain.ts\` | ${summary.keychain.lh} | ${summary.keychain.lf} | ${summary.keychain.line_pct}% |`,
  "",
  `- Combined uncovered lines: ${summary.uncovered_lines}`,
].join("\n");
fs.writeFileSync(summaryMdPath, `${md}\n`);
console.log(JSON.stringify(summary));
' "$SUMMARY_JSON" "$SUMMARY_MD" "$MERGED_LCOV" "$BASE_LCOV" "$CONFIG_IMPORT_LCOV" "$KEYCHAIN_IMPORT_LCOV")

config_pct=$(bun -e 'const s = JSON.parse(process.argv[1]); console.log(s.config.line_pct);' "$summary_json")
keychain_pct=$(bun -e 'const s = JSON.parse(process.argv[1]); console.log(s.keychain.line_pct);' "$summary_json")
uncovered_lines=$(bun -e 'const s = JSON.parse(process.argv[1]); console.log(s.uncovered_lines);' "$summary_json")

echo "METRIC uncovered_lines=${uncovered_lines}"
echo "METRIC config_pct=${config_pct}"
echo "METRIC keychain_pct=${keychain_pct}"

echo "coverage summary written to $SUMMARY_MD"
