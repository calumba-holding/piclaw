import {
  DEFAULT_FUZZ_ARTIFACT_DIR,
  DEFAULT_FUZZ_ITERATIONS,
  DEFAULT_FUZZ_SEED,
  printAuditMetrics,
  runWebControlPlaneFuzzAudit,
} from "../test/channels/web/web-control-plane-fuzz-audit.ts";

function readInt(name: string, fallback: number): number {
  const value = process.env[name];
  if (!value) return fallback;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

const seed = readInt("PICLAW_FUZZ_SEED", DEFAULT_FUZZ_SEED);
const iterations = readInt("PICLAW_FUZZ_ITERATIONS", DEFAULT_FUZZ_ITERATIONS);
const replayCaseId = process.env.PICLAW_FUZZ_REPLAY_CASE ? readInt("PICLAW_FUZZ_REPLAY_CASE", 0) : null;
const artifactDir = process.env.PICLAW_FUZZ_ARTIFACT_DIR || DEFAULT_FUZZ_ARTIFACT_DIR;

const summary = await runWebControlPlaneFuzzAudit({ seed, iterations, replayCaseId, artifactDir });
printAuditMetrics(summary);

const exitCode = process.env.PICLAW_FUZZ_STRICT === "1" && summary.web_fuzz_gap_count > 0 ? 1 : 0;
await Bun.sleep(0);
process.exit(exitCode);
