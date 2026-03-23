#!/usr/bin/env bun
/**
 * vendor-drawio.ts — Download and extract draw.io webapp from GitHub releases.
 *
 * Downloads the draw.war file from jgraph/drawio releases, extracts the
 * minimal webapp files needed for embed mode, and writes metadata.
 *
 * Pattern follows vendor-firacode-nerd-font.ts.
 */

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, relative, resolve } from "node:path";

const DRAWIO_VERSION = "v29.6.1";
const WAR_URL = `https://github.com/jgraph/drawio/releases/download/${DRAWIO_VERSION}/draw.war`;
const CACHE_DIR = resolve(process.cwd(), ".cache", "vendor", "drawio", DRAWIO_VERSION);
const WAR_PATH = resolve(CACHE_DIR, "draw.war");
const EXTRACT_DIR = resolve(CACHE_DIR, "webapp");
const OUTPUT_DIR = "extensions/drawio-editor/vendor";
const METADATA_FILE = resolve(process.cwd(), OUTPUT_DIR, "drawio.meta.json");

/** Files/directories to copy from the extracted WAR. */
const COPY_ITEMS = [
  // Entry point
  "index.html",
  "favicon.ico",
  // Core JS
  "js/app.min.js",
  "js/bootstrap.js",
  "js/main.js",
  "js/PreConfig.js",
  "js/PostConfig.js",
  "js/extensions.min.js",
  "js/stencils.min.js",
  "js/shapes-14-6-5.min.js",
  // JS subdirectories (referenced by app)
  "js/deflate/",
  "js/jszip/",
  "js/spin/",
  "js/sanitizer/",
  "js/freehand/",
  "js/rough/",
  "js/cryptojs/",
  // Styles
  "styles/",
  // Images (toolbar icons, UI elements)
  "images/",
  // Shape library assets (AWS/Azure/GCP/etc.)
  "img/",
  // Localization and app resources
  "resources/",
  // mxGraph resources
  "mxgraph/",
  // Math rendering
  "math4/",
];

function sha256ForFile(path: string): string {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

function dirSizeBytes(dir: string): number {
  let total = 0;
  for (const entry of readdirSync(dir, { withFileTypes: true, recursive: true })) {
    if (entry.isFile()) {
      const fullPath = resolve(entry.parentPath ?? entry.path, entry.name);
      total += statSync(fullPath).size;
    }
  }
  return total;
}

function copyRecursive(src: string, dest: string): void {
  const st = statSync(src);
  if (st.isDirectory()) {
    mkdirSync(dest, { recursive: true });
    for (const name of readdirSync(src)) {
      copyRecursive(resolve(src, name), resolve(dest, name));
    }
  } else {
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, readFileSync(src));
  }
}

async function ensureWar(): Promise<void> {
  mkdirSync(CACHE_DIR, { recursive: true });
  if (existsSync(WAR_PATH)) return;

  process.stdout.write(`[vendor:drawio] Downloading ${WAR_URL}...\n`);
  const response = await fetch(WAR_URL, {
    headers: { "User-Agent": "piclaw-vendor-workflow" },
    redirect: "follow",
  });
  if (!response.ok) {
    throw new Error(`Failed to download ${WAR_URL}: HTTP ${response.status}`);
  }
  const bytes = new Uint8Array(await response.arrayBuffer());
  writeFileSync(WAR_PATH, bytes);
  process.stdout.write(`[vendor:drawio] WAR downloaded: ${(bytes.length / 1048576).toFixed(1)} MB\n`);
}

function ensureExtracted(): void {
  if (existsSync(resolve(EXTRACT_DIR, "index.html"))) return;

  mkdirSync(EXTRACT_DIR, { recursive: true });
  process.stdout.write(`[vendor:drawio] Extracting WAR...\n`);
  const proc = Bun.spawnSync(["unzip", "-qo", WAR_PATH, "-d", EXTRACT_DIR], {
    cwd: CACHE_DIR,
    stdout: "pipe",
    stderr: "pipe",
  });
  if (proc.exitCode !== 0) {
    throw new Error(`Failed to extract WAR: ${proc.stderr.toString()}`);
  }
}

async function main(): Promise<void> {
  const logPrefix = "[vendor:drawio]";
  const outputBase = resolve(process.cwd(), OUTPUT_DIR);

  await ensureWar();
  ensureExtracted();

  // Copy minimal files
  let copiedFiles = 0;
  for (const item of COPY_ITEMS) {
    const src = resolve(EXTRACT_DIR, item);
    const dest = resolve(outputBase, item);
    if (!existsSync(src)) {
      process.stdout.write(`${logPrefix} WARN: ${item} not found in WAR, skipping\n`);
      continue;
    }
    copyRecursive(src, dest);
    copiedFiles++;
  }

  const totalSize = dirSizeBytes(outputBase);
  const totalMb = (totalSize / 1048576).toFixed(1);

  // Write metadata
  const metadata = {
    manifest_id: "drawio",
    package_name: "drawio",
    package_version: DRAWIO_VERSION,
    package_license: "Apache-2.0",
    package_repository: "https://github.com/jgraph/drawio",
    source_url: WAR_URL,
    output_dir: OUTPUT_DIR,
    total_size_bytes: totalSize,
    copied_items: copiedFiles,
    metadata_file: relative(process.cwd(), METADATA_FILE),
  };

  mkdirSync(dirname(METADATA_FILE), { recursive: true });
  writeFileSync(METADATA_FILE, `${JSON.stringify(metadata, null, 2)}\n`, "utf8");

  process.stdout.write([
    `${logPrefix} extracted ${copiedFiles} items (${totalMb} MB)`,
    `${logPrefix} version: ${DRAWIO_VERSION}`,
    `${logPrefix} source: ${WAR_URL}`,
    `${logPrefix} metadata: ${relative(process.cwd(), METADATA_FILE)}`,
  ].join("\n") + "\n");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
