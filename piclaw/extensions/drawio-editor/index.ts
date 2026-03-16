/**
 * drawio-editor/index.ts — Self-hosted draw.io diagram editor extension.
 *
 * Registers an HTTP route at /drawio/* that serves the vendored draw.io
 * webapp in embed mode. The editor communicates via postMessage with a
 * thin wrapper page that handles loading/saving diagrams from the
 * workspace via the piclaw raw file API.
 *
 * Architecture:
 *   - Uses piclaw's registerRoute() (via globalThis.__piclaw_registerRoute)
 *     to serve the draw.io webapp from the vendor/ directory.
 *   - A wrapper page (/drawio/edit.html) embeds the editor in an iframe
 *     and handles the postMessage protocol for load/save.
 *   - Diagrams are stored as .drawio XML files in the workspace.
 */

import { resolve, extname, dirname } from "node:path";
import { existsSync, readFileSync, realpathSync, statSync } from "node:fs";

// ── Constants ───────────────────────────────────────────────────

const EXT_DIR = typeof import.meta.dir === "string"
  ? import.meta.dir
  : dirname(new URL(import.meta.url).pathname);
const VENDOR_DIR = resolve(EXT_DIR, "vendor");
const ROUTE_PREFIX = "/drawio";

const DRAWIO_EXTENSIONS = [".drawio", ".drawio.xml", ".drawio.svg", ".drawio.png"];
const DEFAULT_DRAWIO_XML = '<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';

const MIME_TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".xml": "application/xml; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

const DRAWIO_FRAME_CSP =
  "default-src 'self'; script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval'; style-src 'self' 'unsafe-inline'; " +
  "img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; frame-src 'self'; " +
  "frame-ancestors 'self'; base-uri 'self'; form-action 'self'";

// ── Editor wrapper page ─────────────────────────────────────────

/**
 * Generates the wrapper HTML page that embeds draw.io in an iframe
 * and handles the postMessage protocol for load/save.
 */
function generateEditorPage(): string {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Draw.io Editor</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 100%; height: 100%; overflow: hidden; background: #1e1e1e; }
  #editor-frame { width: 100%; height: 100%; border: none; }
  .loading {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    color: #999; font-family: system-ui, sans-serif; font-size: 14px;
    text-align: center;
  }
  .loading.hidden { display: none; }
</style>
</head>
<body>
<div id="loading" class="loading">Loading draw.io editor…</div>
<iframe id="editor-frame" style="display:none"></iframe>
<script>
'use strict';

var params = new URLSearchParams(location.search);
var filePath = params.get('path') || '';
var fileName = filePath.split('/').pop() || 'diagram.drawio';
var frame = document.getElementById('editor-frame');
var loading = document.getElementById('loading');
var DEFAULT_DRAWIO_XML = ${JSON.stringify(DEFAULT_DRAWIO_XML)};
var xmlData = DEFAULT_DRAWIO_XML;
var modified = false;

function normalizeDrawioXml(value) {
  var text = String(value || '').trim();
  return text || DEFAULT_DRAWIO_XML;
}

// Load the file contents from workspace
function loadFile() {
  if (!filePath) {
    xmlData = DEFAULT_DRAWIO_XML;
    startEditor();
    return;
  }
  fetch('/workspace/raw?path=' + encodeURIComponent(filePath))
    .then(function(r) {
      if (r.ok) return r.text();
      if (r.status === 404) return DEFAULT_DRAWIO_XML; // new file
      throw new Error('HTTP ' + r.status);
    })
    .then(function(text) {
      xmlData = normalizeDrawioXml(text);
      startEditor();
    })
    .catch(function(err) {
      loading.textContent = 'Failed to load: ' + err.message;
    });
}

function startEditor() {
  // Embed mode URL with dark theme
  var isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var editorUrl = '${ROUTE_PREFIX}/index.html?embed=1&proto=json&spin=1&modified=0'
    + '&ui=dark&dark=' + (isDark ? '1' : '0');
  frame.src = editorUrl;
  frame.style.display = 'block';
}

// Handle postMessage from draw.io iframe
window.addEventListener('message', function(e) {
  // Only accept messages from our iframe
  if (e.source !== frame.contentWindow) return;

  var msg;
  try { msg = JSON.parse(e.data); } catch(_) { return; }

  switch (msg.event) {
    case 'init':
      loading.classList.add('hidden');
      // Send load action with the diagram XML
      frame.contentWindow.postMessage(JSON.stringify({
        action: 'load',
        xml: normalizeDrawioXml(xmlData),
        autosave: 1,
        title: fileName
      }), '*');
      break;

    case 'autosave':
    case 'save':
      if (!filePath || !msg.xml) break;
      modified = true;
      // Save via workspace file API (PUT /workspace/file)
      fetch('/workspace/file', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: filePath, content: msg.xml })
      }).then(function(r) {
        if (!r.ok) console.error('[drawio] save failed:', r.status);
        // Acknowledge save
        if (msg.event === 'save') {
          frame.contentWindow.postMessage(JSON.stringify({
            action: 'status',
            message: 'Saved',
            modified: false
          }), '*');
        }
      }).catch(function(err) {
        console.error('[drawio] save error:', err);
      });
      break;

    case 'exit':
      // User closed the editor — navigate back or close
      if (window.opener) {
        window.close();
      } else {
        history.back();
      }
      break;

    case 'export':
      // Handle export if needed
      break;
  }
});

loadFile();
</script>
</body>
</html>`;
}

// ── Route handler ───────────────────────────────────────────────

function getMimeType(path: string): string {
  const ext = extname(path).toLowerCase();
  return MIME_TYPES[ext] || "application/octet-stream";
}

function handleRoute(req: Request, pathname: string): Response | null {
  if (req.method !== "GET" && req.method !== "HEAD") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  // Serve the editor wrapper page
  let relative = pathname.replace(/^\/drawio\/?/, "") || "";
  const qIdx = relative.indexOf("?");
  if (qIdx >= 0) relative = relative.substring(0, qIdx);

  // /drawio/edit or /drawio/edit.html → wrapper page
  if (relative === "" || relative === "edit" || relative === "edit.html") {
    return new Response(generateEditorPage(), {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-cache",
        // Allow embedding in same-origin iframes (pane system)
        "X-Frame-Options": "SAMEORIGIN",
        "Content-Security-Policy": DRAWIO_FRAME_CSP,
      },
    });
  }

  if (relative.includes("..") || relative.startsWith("/")) {
    return new Response("Forbidden", { status: 403 });
  }

  // Serve vendored draw.io files
  const filePath = resolve(VENDOR_DIR, relative);

  let realPath: string;
  try {
    realPath = realpathSync(filePath);
  } catch {
    return new Response("Not Found", { status: 404 });
  }

  if (!existsSync(realPath)) {
    return new Response("Not Found", { status: 404 });
  }

  const st = statSync(realPath);
  if (!st.isFile()) {
    return new Response("Not Found", { status: 404 });
  }

  return new Response(Bun.file(realPath), {
    headers: {
      "Content-Type": getMimeType(realPath),
      "Content-Length": String(st.size),
      // draw.io JS is versioned by release; cache for 1 day
      "Cache-Control": "public, max-age=86400",
      // Override global X-Frame-Options: DENY so the draw.io editor
      // can be loaded inside same-origin iframes.
      "X-Frame-Options": "SAMEORIGIN",
      // Override the global CSP frame-ancestors 'none' so draw.io can be
      // embedded by our wrapper page and pane iframe on the same origin.
      "Content-Security-Policy": DRAWIO_FRAME_CSP,
    },
  });
}

// ── Extension entry point ───────────────────────────────────────

export default function drawioEditor(pi: any) {
  // Register the HTTP route
  const registerRoute = (globalThis as any).__piclaw_registerRoute;
  if (typeof registerRoute === "function") {
    registerRoute(ROUTE_PREFIX, handleRoute, EXT_DIR);
    console.log(`[drawio-editor] Route registered: /drawio/* → ${VENDOR_DIR}`);
  } else {
    console.warn("[drawio-editor] WARNING: __piclaw_registerRoute not available.");
  }

  // Register tool for the LLM to open the diagram editor
  pi.registerTool({
    name: "open_drawio_editor",
    label: "Open Draw.io Editor",
    description:
      "Open a .drawio diagram file in the self-hosted draw.io editor. " +
      "Returns a URL the user can open to edit the diagram in their browser.",
    parameters: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description: "Workspace path to the .drawio file (created if it doesn't exist).",
        },
      },
      required: ["path"],
    },
    async execute(_toolCallId: string, params: { path: string }) {
      const filePath = params.path.replace(/^@/, "");

      // Validate extension
      const hasValidExt = DRAWIO_EXTENSIONS.some(ext => filePath.toLowerCase().endsWith(ext));
      if (!hasValidExt && !filePath.toLowerCase().endsWith(".xml")) {
        throw new Error(
          `Unsupported file type. Expected: ${DRAWIO_EXTENSIONS.join(", ")} or .xml`
        );
      }

      const editorUrl = `${ROUTE_PREFIX}/edit?path=${encodeURIComponent(filePath)}`;

      return {
        content: [
          {
            type: "text" as const,
            text: `Draw.io editor URL: ${editorUrl}\n\nOpen this URL in the browser to edit the diagram. Changes are auto-saved to the workspace.`,
          },
        ],
        details: { editorUrl, path: filePath },
      };
    },
  });
}
