import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

export const DEFAULT_REPO_DIRS = ["runtime/src", "runtime/web/src", "runtime/scripts", "runtime/extensions", "runtime/test", "skel/scripts"];
export const DEFAULT_RUNTIME_CORE_DIRS = ["runtime/src", "runtime/web/src"];
export const VALID_EXT = /\.(ts|tsx|js)$/;
export const EMPTY_CATCH_PATTERN = /catch\s*(\([^)]*\))?\s*\{\s*\}/g;
export const EMPTY_PROMISE_CATCH_PATTERN = /\.catch\(\s*(\(\)\s*=>|function\s*\()\s*\{\s*\}\s*\)/g;

type ParserState = "code" | "lineComment" | "blockComment" | "singleQuote" | "doubleQuote" | "template";

export interface SilentSwallowMetrics {
  repoSilentCatchBlocks: number;
  repoFilesWithSilentCatches: number;
  repoSilentPromiseCatches: number;
  runtimeCoreSilentCatches: number;
}

export function shouldSkipPath(filePath: string): boolean {
  return filePath.includes("/vendor/") || filePath.includes("/static/") || filePath.endsWith(".min.js");
}

export function collectFiles(roots: string[]): string[] {
  const files: string[] = [];
  const walk = (dir: string) => {
    for (const name of readdirSync(dir)) {
      const filePath = path.join(dir, name);
      const stat = statSync(filePath);
      if (stat.isDirectory()) {
        if (shouldSkipPath(filePath)) continue;
        walk(filePath);
        continue;
      }
      if (!VALID_EXT.test(name)) continue;
      if (shouldSkipPath(filePath)) continue;
      files.push(filePath);
    }
  };
  roots.forEach(walk);
  return files;
}

export function buildNonCodeMask(source: string): Uint8Array {
  const mask = new Uint8Array(source.length);
  let state: ParserState = "code";
  let escaped = false;
  const templateExprDepth: number[] = [];

  for (let i = 0; i < source.length; i++) {
    const ch = source[i];
    const next = source[i + 1] || "";

    if (state === "lineComment") {
      mask[i] = 1;
      if (ch === "\n") state = "code";
      continue;
    }

    if (state === "blockComment") {
      mask[i] = 1;
      if (ch === "*" && next === "/") {
        mask[i + 1] = 1;
        i++;
        state = "code";
      }
      continue;
    }

    if (state === "singleQuote") {
      mask[i] = 1;
      if (escaped) {
        escaped = false;
      } else if (ch === "\\") {
        escaped = true;
      } else if (ch === "'") {
        state = "code";
      }
      continue;
    }

    if (state === "doubleQuote") {
      mask[i] = 1;
      if (escaped) {
        escaped = false;
      } else if (ch === "\\") {
        escaped = true;
      } else if (ch === '"') {
        state = "code";
      }
      continue;
    }

    if (state === "template") {
      mask[i] = 1;
      if (escaped) {
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        escaped = true;
        continue;
      }
      if (ch === "$" && next === "{") {
        mask[i + 1] = 1;
        i++;
        templateExprDepth.push(1);
        state = "code";
        continue;
      }
      if (ch === "`") {
        state = "code";
      }
      continue;
    }

    if (templateExprDepth.length > 0) {
      if (ch === "{") {
        templateExprDepth[templateExprDepth.length - 1] += 1;
        continue;
      }
      if (ch === "}") {
        const nextDepth = templateExprDepth[templateExprDepth.length - 1] - 1;
        if (nextDepth <= 0) {
          templateExprDepth.pop();
          state = "template";
        } else {
          templateExprDepth[templateExprDepth.length - 1] = nextDepth;
        }
        continue;
      }
    }

    if (ch === "/" && next === "/") {
      mask[i] = 1;
      mask[i + 1] = 1;
      i++;
      state = "lineComment";
      continue;
    }
    if (ch === "/" && next === "*") {
      mask[i] = 1;
      mask[i + 1] = 1;
      i++;
      state = "blockComment";
      continue;
    }
    if (ch === "'") {
      mask[i] = 1;
      state = "singleQuote";
      continue;
    }
    if (ch === '"') {
      mask[i] = 1;
      state = "doubleQuote";
      continue;
    }
    if (ch === "`") {
      mask[i] = 1;
      state = "template";
      continue;
    }
  }

  return mask;
}

export function countMatches(files: string[], pattern: RegExp): { total: number; filesWithMatches: Set<string> } {
  let total = 0;
  const filesWithMatches = new Set<string>();
  for (const filePath of files) {
    const source = readFileSync(filePath, "utf8");
    const nonCodeMask = buildNonCodeMask(source);
    pattern.lastIndex = 0;
    let fileCount = 0;
    let match: RegExpExecArray | null;
    while ((match = pattern.exec(source)) !== null) {
      const index = match.index;
      if (nonCodeMask[index]) continue;
      fileCount++;
    }
    if (!fileCount) continue;
    total += fileCount;
    filesWithMatches.add(filePath);
  }
  return { total, filesWithMatches };
}

function parseEnvRoots(key: string, fallback: string[]): string[] {
  const raw = (process.env[key] || "").trim();
  if (!raw) return fallback;
  return raw.split(path.delimiter).map((part) => part.trim()).filter(Boolean);
}

export function getSilentSwallowMetrics(options: {
  repoDirs?: string[];
  runtimeCoreDirs?: string[];
} = {}): SilentSwallowMetrics {
  const repoDirs = options.repoDirs ?? parseEnvRoots("PICLAW_SILENT_SWALLOW_SCAN_ROOTS", DEFAULT_REPO_DIRS);
  const runtimeCoreDirs = options.runtimeCoreDirs ?? parseEnvRoots("PICLAW_SILENT_SWALLOW_RUNTIME_CORE_ROOTS", DEFAULT_RUNTIME_CORE_DIRS);

  const repoFiles = collectFiles(repoDirs);
  const runtimeCoreFiles = collectFiles(runtimeCoreDirs);
  const repoCatch = countMatches(repoFiles, EMPTY_CATCH_PATTERN);
  const repoPromise = countMatches(repoFiles, EMPTY_PROMISE_CATCH_PATTERN);
  const coreCatch = countMatches(runtimeCoreFiles, EMPTY_CATCH_PATTERN);

  return {
    repoSilentCatchBlocks: repoCatch.total,
    repoFilesWithSilentCatches: repoCatch.filesWithMatches.size,
    repoSilentPromiseCatches: repoPromise.total,
    runtimeCoreSilentCatches: coreCatch.total,
  };
}

export function printSilentSwallowMetrics(metrics: SilentSwallowMetrics): void {
  console.log(`METRIC repo_silent_catch_blocks=${metrics.repoSilentCatchBlocks}`);
  console.log(`METRIC repo_files_with_silent_catches=${metrics.repoFilesWithSilentCatches}`);
  console.log(`METRIC repo_silent_promise_catches=${metrics.repoSilentPromiseCatches}`);
  console.log(`METRIC runtime_core_silent_catches=${metrics.runtimeCoreSilentCatches}`);
}

if (import.meta.main) {
  const checkMode = process.argv.includes("--check");
  const metrics = getSilentSwallowMetrics();
  printSilentSwallowMetrics(metrics);

  if (checkMode && (metrics.repoSilentCatchBlocks > 0 || metrics.repoSilentPromiseCatches > 0)) {
    console.error(
      `[check:silent-swallows] Found ${metrics.repoSilentCatchBlocks} empty catch block(s) and ${metrics.repoSilentPromiseCatches} empty promise catch(es).`,
    );
    process.exit(1);
  }
}
