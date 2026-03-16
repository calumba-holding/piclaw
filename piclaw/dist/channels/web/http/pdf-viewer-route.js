/**
 * pdf-viewer-route.ts — Lightweight authenticated PDF viewer route.
 *
 * Serves a same-origin HTML wrapper around the browser's built-in PDF renderer.
 */
import { registerExtensionRoute } from "./extension-routes.js";
const ROUTE_PREFIX = "/pdf-viewer";
const VIEWER_CSP = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "connect-src 'self'",
    "frame-src 'self' blob:",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self'",
].join('; ');
function generatePdfViewerPage() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>PDF Viewer</title>
<style>
  :root {
    color-scheme: light dark;
    --bg: #ffffff;
    --bg-secondary: #f7f9fa;
    --text: #0f1419;
    --muted: #536471;
    --border: #dfe5ea;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #000000;
      --bg-secondary: #111418;
      --text: #e7e9ea;
      --muted: #8b98a5;
      --border: #2f3336;
    }
  }
  * { box-sizing: border-box; }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
    background: var(--bg);
    color: var(--text);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }
  body {
    display: flex;
    flex-direction: column;
  }
  .toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    min-height: 48px;
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    background: var(--bg-secondary);
  }
  .title-wrap {
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;
  }
  .title {
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .meta {
    font-size: 11px;
    color: var(--muted);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .actions {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 30px;
    padding: 0 10px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg);
    color: var(--text);
    font: inherit;
    cursor: pointer;
    text-decoration: none;
  }
  .frame-wrap {
    flex: 1;
    min-height: 0;
    background: var(--bg);
  }
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    background: var(--bg);
  }
  .empty {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    color: var(--muted);
    font-size: 13px;
    padding: 24px;
    text-align: center;
  }
</style>
</head>
<body>
  <div class="toolbar">
    <div class="title-wrap">
      <div id="title" class="title">PDF Viewer</div>
      <div id="meta" class="meta">Loading document…</div>
    </div>
    <div class="actions">
      <a id="openRaw" class="btn" href="#" target="_blank" rel="noopener">Open raw PDF</a>
    </div>
  </div>
  <div id="frameWrap" class="frame-wrap"><div class="empty">Loading document…</div></div>
<script>
(function () {
  'use strict';
  var params = new URLSearchParams(location.search);
  var path = params.get('path') || '';
  var titleEl = document.getElementById('title');
  var metaEl = document.getElementById('meta');
  var frameWrap = document.getElementById('frameWrap');
  var openRaw = document.getElementById('openRaw');

  if (!path) {
    metaEl.textContent = 'Missing path parameter';
    frameWrap.innerHTML = '<div class="empty">Missing <code>?path=...</code> query parameter.</div>';
    return;
  }

  var fileName = path.split('/').pop() || 'document.pdf';
  var rawUrl = '/workspace/raw?path=' + encodeURIComponent(path);
  titleEl.textContent = fileName;
  metaEl.textContent = path;
  openRaw.href = rawUrl;

  var iframe = document.createElement('iframe');
  iframe.src = rawUrl;
  iframe.title = fileName;
  iframe.addEventListener('load', function () {
    metaEl.textContent = 'Embedded browser PDF viewer';
  });
  frameWrap.innerHTML = '';
  frameWrap.appendChild(iframe);
})();
</script>
</body>
</html>`;
}
function handlePdfViewerRoute(req, pathname) {
    if (req.method !== "GET" && req.method !== "HEAD") {
        return new Response("Method Not Allowed", { status: 405 });
    }
    const relative = pathname.replace(/^\/pdf-viewer\/?/, "");
    if (relative && !relative.startsWith("?")) {
        return new Response("Not Found", { status: 404 });
    }
    const headers = {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-cache",
        "X-Frame-Options": "SAMEORIGIN",
        "Content-Security-Policy": VIEWER_CSP,
    };
    if (req.method === "HEAD") {
        return new Response(null, { status: 200, headers });
    }
    return new Response(generatePdfViewerPage(), { status: 200, headers });
}
registerExtensionRoute(ROUTE_PREFIX, handlePdfViewerRoute, import.meta.dir);
