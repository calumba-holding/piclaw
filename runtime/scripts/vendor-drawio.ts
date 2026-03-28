#!/usr/bin/env bun
/**
 * vendor-drawio.ts — Download and extract draw.io webapp from GitHub releases.
 *
 * Downloads the draw.war file from jgraph/drawio releases, extracts the
 * minimal webapp files needed for embed mode using fflate (pure JS, no
 * external tools), and writes metadata.
 *
 * Pattern follows vendor-firacode-nerd-font.ts.
 */

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, relative, resolve } from "node:path";
import { unzipSync } from "fflate";

const DRAWIO_VERSION = "v29.6.1";
const WAR_URL = `https://github.com/jgraph/drawio/releases/download/${DRAWIO_VERSION}/draw.war`;
const CACHE_DIR = resolve(process.cwd(), "generated", "cache", "vendor", "drawio", DRAWIO_VERSION);
const WAR_PATH = resolve(CACHE_DIR, "draw.war");
const OUTPUT_DIR = "extensions/drawio-editor/vendor";
const METADATA_FILE = resolve(process.cwd(), OUTPUT_DIR, "drawio.meta.json");

/** Files/directories to copy from the extracted WAR. */
const COPY_PREFIXES = [
  "index.html",
  "favicon.ico",
  "js/app.min.js",
  "js/bootstrap.js",
  "js/main.js",
  "js/PreConfig.js",
  "js/PostConfig.js",
  "js/extensions.min.js",
  "js/stencils.min.js",
  "js/shapes-14-6-5.min.js",
  "js/deflate/",
  "js/jszip/",
  "js/spin/",
  "js/sanitizer/",
  "js/freehand/",
  "js/rough/",
  "js/cryptojs/",
  "styles/",
  "images/",
  "img/",
  "resources/",
  "mxgraph/",
  "math4/",
];

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

function shouldCopy(entryPath: string): boolean {
  return COPY_PREFIXES.some((prefix) =>
    prefix.endsWith("/") ? entryPath.startsWith(prefix) : entryPath === prefix
  );
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

function extractAndCopy(outputBase: string): number {
  process.stdout.write(`[vendor:drawio] Extracting WAR with fflate...\n`);
  const warBytes = readFileSync(WAR_PATH);
  const entries = unzipSync(new Uint8Array(warBytes));

  let copiedFiles = 0;
  for (const [path, data] of Object.entries(entries)) {
    if (!shouldCopy(path)) continue;
    // Skip directory entries (zero-length with trailing /)
    if (path.endsWith("/")) continue;
    const dest = resolve(outputBase, path);
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, data);
    copiedFiles++;
  }
  return copiedFiles;
}

async function main(): Promise<void> {
  const logPrefix = "[vendor:drawio]";
  const outputBase = resolve(process.cwd(), OUTPUT_DIR);

  await ensureWar();

  // Check if already extracted
  if (existsSync(resolve(outputBase, "index.html"))) {
    process.stdout.write(`${logPrefix} vendor already present, skipping extraction\n`);
    return;
  }

  const copiedFiles = extractAndCopy(outputBase);
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
