/**
 * office-viewer/index.ts — Lightweight Office document viewer extension.
 *
 * Uses three client-side JS libraries for rendering:
 *   - docx-preview for .docx (layout-preserving HTML render)
 *   - SheetJS (xlsx) for .xlsx/.xls/.csv (parse → HTML table)
 *   - PptxViewJS for .pptx (canvas-based slide rendering)
 *
 * No WASM, no SharedArrayBuffer, no HTTPS requirement.
 * Works over plain HTTP.
 */

import { resolve, extname, dirname } from "node:path";
import { existsSync, realpathSync, statSync } from "node:fs";

// ── Constants ───────────────────────────────────────────────────

const EXT_DIR = typeof import.meta.dir === "string" ? import.meta.dir : dirname(new URL(import.meta.url).pathname);
const VENDOR_DIR = resolve(EXT_DIR, "vendor");
const ROUTE_PREFIX = "/office-viewer";

const OFFICE_EXTENSIONS = [
  ".docx", ".doc", ".odt", ".rtf",
  ".xlsx", ".xls", ".ods", ".csv",
  ".pptx", ".ppt", ".odp",
];

const MIME_TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".woff2": "font/woff2",
};

/** Standard security headers — no COOP/COEP needed (no WASM workers). */
const HEADERS: Record<string, string> = {
  "X-Frame-Options": "SAMEORIGIN",
};

// ── Route handler ───────────────────────────────────────────────

function getMimeType(path: string): string {
  return MIME_TYPES[extname(path).toLowerCase()] || "application/octet-stream";
}

function handleRoute(req: Request, pathname: string): Response | null {
  if (req.method !== "GET" && req.method !== "HEAD") {
    return new Response("Method Not Allowed", { status: 405, headers: HEADERS });
  }

  let relative = pathname.replace(/^\/office-viewer\/?/, "") || "viewer.html";
  const qIdx = relative.indexOf("?");
  if (qIdx >= 0) relative = relative.substring(0, qIdx);

  if (relative.includes("..") || relative.startsWith("/")) {
    return new Response("Forbidden", { status: 403, headers: HEADERS });
  }

  const filePath = resolve(VENDOR_DIR, relative);

  let realPath: string;
  try {
    realPath = realpathSync(filePath);
  } catch {
    return new Response("Not Found", { status: 404, headers: HEADERS });
  }

  if (!existsSync(realPath) || !statSync(realPath).isFile()) {
    return new Response("Not Found", { status: 404, headers: HEADERS });
  }

  return new Response(Bun.file(realPath), {
    headers: {
      ...HEADERS,
      "Content-Type": getMimeType(realPath),
      "Content-Length": String(statSync(realPath).size),
      "Cache-Control": "public, max-age=86400",
    },
  });
}

// ── Extension entry point ───────────────────────────────────────

export default function officeViewer(pi: any) {
  const registerRoute = (globalThis as any).__piclaw_registerRoute;
  if (typeof registerRoute === "function") {
    registerRoute(ROUTE_PREFIX, handleRoute, EXT_DIR);
    console.log("[office-viewer] Route registered: /office-viewer/* → " + VENDOR_DIR);
  } else {
    console.warn("[office-viewer] WARNING: __piclaw_registerRoute not available. Route NOT registered.");
  }

  pi.registerTool({
    name: "open_office_viewer",
    label: "Open Office Viewer",
    description:
      "Open an Office document (.docx, .xlsx, .pptx, .odt, .ods, .odp) in the ZetaOffice WASM viewer. " +
      "Returns a URL the user can open in their browser.",
    parameters: {
      type: "object",
      properties: {
        path: { type: "string", description: "Workspace path to the Office document." },
      },
      required: ["path"],
    },
    async execute(_toolCallId: string, params: { path: string }) {
      const filePath = params.path.replace(/^@/, "");
      const ext = extname(filePath).toLowerCase();

      if (!OFFICE_EXTENSIONS.includes(ext)) {
        throw new Error(
          `Unsupported file type: ${ext}. Supported: ${OFFICE_EXTENSIONS.join(", ")}`
        );
      }

      const fullPath = resolve(process.cwd(), filePath);
      if (!existsSync(fullPath)) {
        throw new Error(`File not found: ${filePath}`);
      }

      const rawUrl = `/workspace/raw?path=${encodeURIComponent(filePath)}`;
      const nameStr = filePath.split("/").pop() || "document";
      const viewerUrl = `${ROUTE_PREFIX}/?url=${encodeURIComponent(rawUrl)}&name=${encodeURIComponent(nameStr)}`;

      return {
        content: [
          {
            type: "text" as const,
            text: `Office viewer URL: ${viewerUrl}\n\nThe user can open this in their browser to view the document.`,
          },
        ],
        details: { viewerUrl, path: filePath, format: ext },
      };
    },
  });
}
