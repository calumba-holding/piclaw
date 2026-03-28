import { describe, expect, test } from "bun:test";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";
import { findStaleDistFiles, filterUnexpectedStaleDistFiles } from "../../scripts/check-stale-dist.ts";

describe("check-stale-dist", () => {
  test("returns empty when generated/dist is missing", () => {
    const dir = mkdtempSync(join(tmpdir(), "stale-dist-"));
    try {
      mkdirSync(join(dir, "src"), { recursive: true });
      writeFileSync(join(dir, "src", "index.ts"), "export {};\n");
      expect(findStaleDistFiles(dir)).toEqual([]);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  test("detects stale generated/dist files not present in src", () => {
    const dir = mkdtempSync(join(tmpdir(), "stale-dist-"));
    try {
      mkdirSync(join(dir, "src", "a"), { recursive: true });
      mkdirSync(join(dir, "generated", "dist", "a"), { recursive: true });
      writeFileSync(join(dir, "src", "a", "ok.ts"), "export {};\n");
      writeFileSync(join(dir, "generated", "dist", "a", "ok.js"), "\n");
      writeFileSync(join(dir, "generated", "dist", "legacy.js"), "\n");

      expect(findStaleDistFiles(dir)).toEqual(["generated/dist/legacy.js"]);
      expect(filterUnexpectedStaleDistFiles(["generated/dist/legacy.js"])).toEqual(["generated/dist/legacy.js"]);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  test("ignores generated/dist files with matching source file", () => {
    const dir = mkdtempSync(join(tmpdir(), "stale-dist-"));
    try {
      mkdirSync(join(dir, "src", "nested"), { recursive: true });
      mkdirSync(join(dir, "generated", "dist", "nested"), { recursive: true });
      writeFileSync(join(dir, "src", "nested", "file.ts"), "export {};\n");
      writeFileSync(join(dir, "generated", "dist", "nested", "file.js"), "\n");

      expect(findStaleDistFiles(dir)).toEqual([]);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  test("filterUnexpectedStaleDistFiles returns all entries when allowlist is empty", () => {
    expect(filterUnexpectedStaleDistFiles(["generated/dist/config.js", "generated/dist/new-stale.js"])).toEqual([
      "generated/dist/config.js",
      "generated/dist/new-stale.js",
    ]);
  });
});
