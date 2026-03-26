import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const repoDirs = ["runtime/src", "runtime/web/src", "runtime/scripts", "runtime/extensions", "runtime/test", "skel/scripts"];
const runtimeCoreDirs = ["runtime/src", "runtime/web/src"];
const validExt = /\.(ts|tsx|js)$/;
const emptyCatchPattern = /catch\s*(\([^)]*\))?\s*\{\s*\}/g;
const emptyPromiseCatchPattern = /\.catch\(\s*(\(\)\s*=>|function\s*\()\s*\{\s*\}\s*\)/g;

type ParserState = "code" | "lineComment" | "blockComment" | "singleQuote" | "doubleQuote" | "template";

function shouldSkipPath(filePath: string): boolean {
  return filePath.includes("/vendor/") || filePath.includes("/static/") || filePath.endsWith(".min.js");
}

function collectFiles(roots: string[]): string[] {
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
      if (!validExt.test(name)) continue;
      if (shouldSkipPath(filePath)) continue;
      files.push(filePath);
    }
  };
  roots.forEach(walk);
  return files;
}

function buildCommentMask(source: string): Uint8Array {
  const mask = new Uint8Array(source.length);
  let state: ParserState = "code";
  let escaped = false;

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
      if (escaped) {
        escaped = false;
      } else if (ch === "\\") {
        escaped = true;
      } else if (ch === "`") {
        state = "code";
      }
      continue;
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
      state = "singleQuote";
      continue;
    }
    if (ch === '"') {
      state = "doubleQuote";
      continue;
    }
    if (ch === "`") {
      state = "template";
      continue;
    }
  }

  return mask;
}

function countMatches(files: string[], pattern: RegExp): { total: number; filesWithMatches: Set<string> } {
  let total = 0;
  const filesWithMatches = new Set<string>();
  for (const filePath of files) {
    const source = readFileSync(filePath, "utf8");
    const commentMask = buildCommentMask(source);
    pattern.lastIndex = 0;
    let fileCount = 0;
    let match: RegExpExecArray | null;
    while ((match = pattern.exec(source)) !== null) {
      const index = match.index;
      if (commentMask[index]) continue;
      fileCount++;
    }
    if (!fileCount) continue;
    total += fileCount;
    filesWithMatches.add(filePath);
  }
  return { total, filesWithMatches };
}

const repoFiles = collectFiles(repoDirs);
const runtimeCoreFiles = collectFiles(runtimeCoreDirs);
const repoCatch = countMatches(repoFiles, emptyCatchPattern);
const repoPromise = countMatches(repoFiles, emptyPromiseCatchPattern);
const coreCatch = countMatches(runtimeCoreFiles, emptyCatchPattern);
const checkMode = process.argv.includes("--check");

console.log(`METRIC repo_silent_catch_blocks=${repoCatch.total}`);
console.log(`METRIC repo_files_with_silent_catches=${repoCatch.filesWithMatches.size}`);
console.log(`METRIC repo_silent_promise_catches=${repoPromise.total}`);
console.log(`METRIC runtime_core_silent_catches=${coreCatch.total}`);

if (checkMode && (repoCatch.total > 0 || repoPromise.total > 0)) {
  console.error(
    `[check:silent-swallows] Found ${repoCatch.total} empty catch block(s) and ${repoPromise.total} empty promise catch(es).`,
  );
  process.exit(1);
}
