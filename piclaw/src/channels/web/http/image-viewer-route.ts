/**
 * image-viewer-route.ts — Lightweight authenticated image viewer route.
 *
 * Serves a same-origin zoomable image viewer that loads workspace images via
 * /workspace/raw.
 */

import { registerExtensionRoute } from "./extension-routes.js";

const ROUTE_PREFIX = "/image-viewer";
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

function generateImageViewerPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Image Viewer</title>
<style>
  :root {
    color-scheme: light dark;
    --bg: #ffffff;
    --bg-secondary: #f7f9fa;
    --text: #0f1419;
    --muted: #536471;
    --border: #dfe5ea;
    --accent: #1d9bf0;
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
    flex-wrap: wrap;
  }
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 32px;
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
  .stage {
    flex: 1;
    min-height: 0;
    overflow: auto;
    background-image:
      linear-gradient(45deg, rgba(128,128,128,0.12) 25%, transparent 25%),
      linear-gradient(-45deg, rgba(128,128,128,0.12) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, rgba(128,128,128,0.12) 75%),
      linear-gradient(-45deg, transparent 75%, rgba(128,128,128,0.12) 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  }
  .inner {
    min-width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }
  img {
    max-width: none;
    max-height: none;
    transform-origin: center center;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    border-radius: 4px;
    background: white;
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
      <div id="title" class="title">Image Viewer</div>
      <div id="meta" class="meta">Loading image…</div>
    </div>
    <div class="actions">
      <button id="zoomOut" class="btn" type="button">−</button>
      <button id="zoomReset" class="btn" type="button">100%</button>
      <button id="zoomIn" class="btn" type="button">+</button>
      <a id="openRaw" class="btn" href="#" target="_blank" rel="noopener">Open raw image</a>
    </div>
  </div>
  <div id="stage" class="stage"><div class="inner"><div class="empty">Loading image…</div></div></div>
<script>
(function () {
  'use strict';
  var params = new URLSearchParams(location.search);
  var path = params.get('path') || '';
  var titleEl = document.getElementById('title');
  var metaEl = document.getElementById('meta');
  var stageEl = document.getElementById('stage');
  var openRaw = document.getElementById('openRaw');
  var zoomOutBtn = document.getElementById('zoomOut');
  var zoomResetBtn = document.getElementById('zoomReset');
  var zoomInBtn = document.getElementById('zoomIn');
  var scale = 1;
  var img = null;

  function applyScale() {
    if (!img) return;
    img.style.transform = 'scale(' + scale + ')';
    zoomResetBtn.textContent = Math.round(scale * 100) + '%';
  }

  function clampScale(next) {
    return Math.max(0.1, Math.min(8, next));
  }

  if (!path) {
    metaEl.textContent = 'Missing path parameter';
    stageEl.innerHTML = '<div class="inner"><div class="empty">Missing <code>?path=...</code> query parameter.</div></div>';
    return;
  }

  var fileName = path.split('/').pop() || 'image';
  var rawUrl = '/workspace/raw?path=' + encodeURIComponent(path);
  titleEl.textContent = fileName;
  metaEl.textContent = path;
  openRaw.href = rawUrl;

  zoomOutBtn.addEventListener('click', function () {
    scale = clampScale(scale / 1.2);
    applyScale();
  });
  zoomInBtn.addEventListener('click', function () {
    scale = clampScale(scale * 1.2);
    applyScale();
  });
  zoomResetBtn.addEventListener('click', function () {
    scale = 1;
    applyScale();
  });
  stageEl.addEventListener('wheel', function (event) {
    if (!event.ctrlKey && !event.metaKey) return;
    event.preventDefault();
    scale = clampScale(scale * (event.deltaY < 0 ? 1.08 : 1 / 1.08));
    applyScale();
  }, { passive: false });

  img = document.createElement('img');
  img.alt = fileName;
  img.src = rawUrl;
  img.addEventListener('load', function () {
    metaEl.textContent = (img.naturalWidth || 0) + ' × ' + (img.naturalHeight || 0) + ' px';
  });
  img.addEventListener('error', function () {
    stageEl.innerHTML = '<div class="inner"><div class="empty">Failed to load image.</div></div>';
    metaEl.textContent = 'Load error';
  });

  var inner = document.createElement('div');
  inner.className = 'inner';
  inner.appendChild(img);
  stageEl.innerHTML = '';
  stageEl.appendChild(inner);
  applyScale();
})();
</script>
</body>
</html>`;
}

function handleImageViewerRoute(req: Request, pathname: string): Response | null {
  if (req.method !== "GET" && req.method !== "HEAD") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const relative = pathname.replace(/^\/image-viewer\/?/, "");
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

  return new Response(generateImageViewerPage(), { status: 200, headers });
}

registerExtensionRoute(ROUTE_PREFIX, handleImageViewerRoute, import.meta.dir);
