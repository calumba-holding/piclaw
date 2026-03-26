import { afterEach, expect, test } from "bun:test";
import "../helpers.js";
import { importFresh, setEnv } from "../helpers.js";

let restoreEnv: (() => void) | null = null;

afterEach(() => {
  restoreEnv?.();
  restoreEnv = null;
});

test("structured logger respects PICLAW_LOG_LEVEL threshold", async () => {
  restoreEnv = setEnv({ PICLAW_LOG_LEVEL: "warn", LOG_LEVEL: undefined });

  const stdoutChunks: string[] = [];
  const stderrChunks: string[] = [];
  const originalStdoutWrite = process.stdout.write.bind(process.stdout);
  const originalStderrWrite = process.stderr.write.bind(process.stderr);

  (process.stdout.write as unknown as (chunk: string | Uint8Array) => boolean) = ((chunk: string | Uint8Array) => {
    stdoutChunks.push(typeof chunk === "string" ? chunk : Buffer.from(chunk).toString("utf8"));
    return true;
  }) as typeof process.stdout.write;
  (process.stderr.write as unknown as (chunk: string | Uint8Array) => boolean) = ((chunk: string | Uint8Array) => {
    stderrChunks.push(typeof chunk === "string" ? chunk : Buffer.from(chunk).toString("utf8"));
    return true;
  }) as typeof process.stderr.write;

  try {
    const { createLogger } = await importFresh<typeof import("../src/utils/logger.js")>("../src/utils/logger.js");
    const log = createLogger("test.logger");
    log.debug("debug message");
    log.info("info message");
    log.warn("warn message");
    log.error("error message");
  } finally {
    process.stdout.write = originalStdoutWrite;
    process.stderr.write = originalStderrWrite;
  }

  const stdout = stdoutChunks.join("");
  const stderr = stderrChunks.join("");

  expect(stdout).not.toContain("debug message");
  expect(stdout).not.toContain("info message");
  expect(stderr).toContain("warn message");
  expect(stderr).toContain("error message");
});
