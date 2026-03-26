#!/bin/bash
set -euo pipefail

ROOT_DIR=$(cd "$(dirname "$0")/.." && pwd)
ARTIFACT_DIR="$ROOT_DIR/artifacts/add-tests-core-config-and-keychain"
LCOV_PATH="$ROOT_DIR/runtime/coverage/lcov.info"
SUMMARY_JSON="$ARTIFACT_DIR/coverage-summary.json"
SUMMARY_MD="$ARTIFACT_DIR/coverage-summary.md"
TEST_LOG="$ARTIFACT_DIR/targeted-test-output.log"

mkdir -p "$ARTIFACT_DIR"

(
  cd "$ROOT_DIR/runtime"
  rm -rf coverage
  PICLAW_DB_IN_MEMORY=1 bun test --max-concurrency=1 test/config/config.test.ts test/keychain.test.ts \
    --coverage --coverage-reporter=lcov >"$TEST_LOG" 2>&1
)

if [[ ! -f "$LCOV_PATH" ]]; then
  echo "Expected coverage report at $LCOV_PATH" >&2
  exit 1
fi

summary_json=$(bun -e '
const fs = require("fs");
const [lcovPath, summaryJsonPath, summaryMdPath] = process.argv.slice(1);
const targets = new Map([
  ["src/core/config.ts", "config"],
  ["src/secure/keychain.ts", "keychain"],
]);
const records = Object.fromEntries([...targets.values()].map((name) => [name, { file: "", lf: 0, lh: 0 }]));
let current = null;
for (const line of fs.readFileSync(lcovPath, "utf8").split(/\r?\n/)) {
  if (line.startsWith("SF:")) {
    const file = line.slice(3);
    current = targets.get(file) || null;
    if (current) records[current].file = file;
    continue;
  }
  if (!current) continue;
  if (line.startsWith("LF:")) records[current].lf = Number(line.slice(3));
  if (line.startsWith("LH:")) records[current].lh = Number(line.slice(3));
}
for (const [key, value] of Object.entries(records)) {
  if (!value.file) {
    console.error(`Missing LCOV record for ${key}`);
    process.exit(1);
  }
  value.uncovered = value.lf - value.lh;
  value.line_pct = value.lf === 0 ? 0 : Number(((value.lh / value.lf) * 100).toFixed(2));
}
const summary = {
  generatedAt: new Date().toISOString(),
  command: "PICLAW_DB_IN_MEMORY=1 bun test --max-concurrency=1 test/config/config.test.ts test/keychain.test.ts --coverage --coverage-reporter=lcov",
  config: records.config,
  keychain: records.keychain,
  uncovered_lines: records.config.uncovered + records.keychain.uncovered,
  min_line_pct: Math.min(records.config.line_pct, records.keychain.line_pct),
};
fs.writeFileSync(summaryJsonPath, JSON.stringify(summary, null, 2) + "\n");
const md = [
  "# Coverage summary: core/config + secure/keychain",
  "",
  `- Command: \`${summary.command}\``,
  "- Targeted test log: `artifacts/add-tests-core-config-and-keychain/targeted-test-output.log`",
  "- LCOV report: `runtime/coverage/lcov.info`",
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
' "$LCOV_PATH" "$SUMMARY_JSON" "$SUMMARY_MD")

config_pct=$(bun -e 'const s = JSON.parse(process.argv[1]); console.log(s.config.line_pct);' "$summary_json")
keychain_pct=$(bun -e 'const s = JSON.parse(process.argv[1]); console.log(s.keychain.line_pct);' "$summary_json")
uncovered_lines=$(bun -e 'const s = JSON.parse(process.argv[1]); console.log(s.uncovered_lines);' "$summary_json")

echo "METRIC uncovered_lines=${uncovered_lines}"
echo "METRIC config_pct=${config_pct}"
echo "METRIC keychain_pct=${keychain_pct}"

echo "coverage summary written to $SUMMARY_MD"
