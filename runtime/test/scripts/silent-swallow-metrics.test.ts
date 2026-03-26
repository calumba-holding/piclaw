import { describe, expect, test } from "bun:test";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { getSilentSwallowMetrics } from "../../scripts/silent-swallow-metrics.ts";

async function withTempDir(prefix: string, run: (dir: string) => Promise<void> | void): Promise<void> {
  const dir = mkdtempSync(join(tmpdir(), prefix));
  try {
    await run(dir);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

describe("silent-swallow-metrics", () => {
  test("ignores comment-only silent swallow strings", async () => {
    await withTempDir("silent-swallow-comments-", async (dir) => {
      mkdirSync(join(dir, "src"), { recursive: true });
      writeFileSync(join(dir, "src", "sample.ts"), [
        "// catch {} should not count",
        "/* Promise.resolve().catch(() => {}) should not count */",
        "const note = \"catch {} in a string should not count\";",
        "const tmpl = `Promise.resolve().catch(() => {}) in template text should not count`;",
      ].join("\n"));

      const metrics = getSilentSwallowMetrics({
        repoDirs: [join(dir, "src")],
        runtimeCoreDirs: [join(dir, "src")],
      });

      expect(metrics.repoSilentCatchBlocks).toBe(0);
      expect(metrics.repoSilentPromiseCatches).toBe(0);
    });
  });

  test("detects empty catch blocks and empty promise catches", async () => {
    await withTempDir("silent-swallow-detect-", async (dir) => {
      mkdirSync(join(dir, "src"), { recursive: true });
      writeFileSync(join(dir, "src", "sample.ts"), [
        "try { doThing(); } catch {}",
        "Promise.resolve().catch(() => {});",
        "try { doOtherThing(); } catch { /* expected: intentional swallow */ }",
        "const formatted = `value: ${String(tryLater)}`;",
      ].join("\n"));

      const metrics = getSilentSwallowMetrics({
        repoDirs: [join(dir, "src")],
        runtimeCoreDirs: [join(dir, "src")],
      });

      expect(metrics.repoSilentCatchBlocks).toBe(1);
      expect(metrics.repoSilentPromiseCatches).toBe(1);
      expect(metrics.repoFilesWithSilentCatches).toBe(1);
      expect(metrics.runtimeCoreSilentCatches).toBe(1);
    });
  });

  test("fails in --check mode when silent swallows are present", async () => {
    await withTempDir("silent-swallow-check-", async (dir) => {
      mkdirSync(join(dir, "src"), { recursive: true });
      writeFileSync(join(dir, "src", "sample.ts"), [
        "try { work(); } catch {}",
        "Promise.resolve().catch(() => {});",
      ].join("\n"));

      const proc = Bun.spawnSync({
        cmd: ["bun", "run", "runtime/scripts/silent-swallow-metrics.ts", "--check"],
        cwd: "/workspace/piclaw",
        env: {
          ...process.env,
          PICLAW_SILENT_SWALLOW_SCAN_ROOTS: join(dir, "src"),
          PICLAW_SILENT_SWALLOW_RUNTIME_CORE_ROOTS: join(dir, "src"),
        },
        stdout: "pipe",
        stderr: "pipe",
      });

      expect(proc.exitCode).toBe(1);
      expect(new TextDecoder().decode(proc.stderr)).toContain("[check:silent-swallows]");
    });
  });
});
