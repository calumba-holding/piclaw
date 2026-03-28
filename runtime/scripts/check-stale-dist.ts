#!/usr/bin/env bun

import { existsSync, readdirSync, statSync } from "fs";
import { join, relative } from "path";

const ALLOWED_STALE_DIST_FILES = new Set<string>();

function walkFiles(baseDir: string, suffix: string): string[] {
  if (!existsSync(baseDir)) return [];
  const out: string[] = [];

  const walk = (dir: string) => {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      const stats = statSync(full);
      if (stats.isDirectory()) {
        walk(full);
      } else if (stats.isFile() && full.endsWith(suffix)) {
        out.push(full);
      }
    }
  };

  walk(baseDir);
  return out;
}

export function findStaleDistFiles(projectDir: string): string[] {
  const srcDir = join(projectDir, "src");
  const distDir = join(projectDir, "generated", "dist");
  if (!existsSync(distDir)) return [];

  const sourceTs = walkFiles(srcDir, ".ts");
  const expected = new Set(
    sourceTs.map((file) => {
      const rel = relative(srcDir, file);
      return join(distDir, rel).replace(/\.ts$/, ".js");
    })
  );

  const builtJs = walkFiles(distDir, ".js");
  return builtJs
    .filter((file) => !expected.has(file))
    .map((file) => relative(projectDir, file))
    .sort();
}

export function filterUnexpectedStaleDistFiles(staleFiles: string[]): string[] {
  return staleFiles.filter((file) => !ALLOWED_STALE_DIST_FILES.has(file));
}

if (import.meta.main) {
  const stale = findStaleDistFiles(process.cwd());
  const unexpected = filterUnexpectedStaleDistFiles(stale);
  if (unexpected.length > 0) {
    console.error("[stale-dist] found unexpected generated/dist files without matching src/*.ts:");
    for (const file of unexpected) {
      console.error(` - ${file}`);
    }
    process.exit(1);
  }

  if (stale.length > 0) {
    console.warn(`[stale-dist] ok (allowlisted stale files present: ${stale.length})`);
  } else {
    console.log("[stale-dist] ok");
  }
}
