#!/usr/bin/env bun
/**
 * postinstall.ts — Run after `bun add -g github:rcarmo/piclaw`.
 *
 * Ensures vendored assets that are .gitignored (too large to commit)
 * are present. Only uses bun and node:* builtins — no devDependencies
 * required.
 *
 * What's already committed to git (available immediately):
 *   - Mermaid, CodeMirror, Preact, Marked, KaTeX (JS/CSS/fonts)
 *   - Ghostty Web (JS + WASM)
 *   - VNC decoder (WASM)
 *   - Office viewer libs
 *   - Terminal fonts
 *   - Adaptive Cards
 *   - Web bundles (app.bundle.js, login.bundle.js, CSS)
 *
 * What this script builds:
 *   - Draw.io viewer (~35 MB, downloaded from GitHub releases)
 *
 * Safe to re-run: checks whether output already exists.
 */

import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = dirname(import.meta.dir);
const LOG = "[postinstall]";

function run(label: string, cmd: string[], cwd = ROOT): boolean {
  console.log(`${LOG} ${label}...`);
  const result = spawnSync(cmd[0], cmd.slice(1), {
    cwd,
    stdio: "inherit",
    env: { ...process.env },
  });
  if (result.status !== 0) {
    console.warn(`${LOG} ⚠ ${label} failed (exit ${result.status}), skipping`);
    return false;
  }
  return true;
}

// Draw.io viewer (~35 MB, .gitignored — downloads from GitHub releases)
const drawioIndex = resolve(ROOT, "runtime/extensions/viewers/drawio-editor/vendor/index.html");
if (!existsSync(drawioIndex)) {
  run("Vendoring draw.io", ["bun", "run", "build:vendor:drawio"]);
} else {
  console.log(`${LOG} draw.io vendor already present, skipping`);
}

console.log(`${LOG} Done`);
