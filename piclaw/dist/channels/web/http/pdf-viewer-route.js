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
  * { box-sizing: border-box; }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
    background: #1e1e1e;
    color: #e0e0e0;
    font-family: system-ui, -apple-system, sans-serif;
  }
  object {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
    background: #1e1e1e;
  }
  .empty {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: #888;
    font: 14px system-ui, -apple-system, sans-serif;
    padding: 24px;
    text-align: center;
  }
  .fallback {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }
  .fallback-card {
    max-width: 420px;
    text-align: center;
  }
  .fallback-card a {
    color: #7dc3ff;
  }
</style>
</head>
<body>
<script>
(function () {
  'use strict';
  var params = new URLSearchParams(location.search);
  var path = params.get('path') || '';

  if (!path) {
    document.body.innerHTML = '<div class="empty">Missing <code>?path=...</code> query parameter.</div>';
    return;
  }

  var rawUrl = '/workspace/raw?path=' + encodeURIComponent(path);
  var name = path.split('/').pop() || 'document.pdf';
  var objectEl = document.createElement('object');
  objectEl.data = rawUrl;
  objectEl.type = 'application/pdf';
  objectEl.setAttribute('aria-label', name);
  objectEl.innerHTML = '<div class="fallback"><div class="fallback-card"><p>PDF preview is unavailable in this browser context.</p><p><a href="' + rawUrl + '" target="_blank" rel="noopener noreferrer">Open PDF in a new tab</a></p></div></div>';
  document.body.appendChild(objectEl);
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
