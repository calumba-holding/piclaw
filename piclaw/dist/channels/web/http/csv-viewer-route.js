/**
 * csv-viewer-route.ts — Lightweight authenticated CSV/TSV viewer route.
 *
 * Serves a same-origin HTML viewer that fetches workspace files through
 * /workspace/raw and renders an interactive table in-browser.
 */
import { registerExtensionRoute } from "./extension-routes.js";
const ROUTE_PREFIX = "/csv-viewer";
const VIEWER_CSP = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "connect-src 'self'",
    "frame-src 'self'",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self'",
].join('; ');
function generateCsvViewerPage() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CSV Viewer</title>
<style>
  :root {
    color-scheme: light dark;
    --bg: #ffffff;
    --bg-secondary: #f7f9fa;
    --bg-tertiary: #f0f2f5;
    --text: #0f1419;
    --muted: #536471;
    --border: #dfe5ea;
    --accent: #1d9bf0;
    --danger: #b91c1c;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #000000;
      --bg-secondary: #111418;
      --bg-tertiary: #171b20;
      --text: #e7e9ea;
      --muted: #8b98a5;
      --border: #2f3336;
      --danger: #f87171;
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
    gap: 12px;
    align-items: center;
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    background: var(--bg-secondary);
    min-height: 48px;
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
  .toolbar-actions {
    display: inline-flex;
    gap: 8px;
    align-items: center;
  }
  .field {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--muted);
  }
  input[type="search"] {
    min-width: 220px;
    max-width: 32vw;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg);
    color: var(--text);
    padding: 7px 10px;
    font: inherit;
  }
  .status {
    padding: 10px 14px;
    font-size: 12px;
    color: var(--muted);
    border-bottom: 1px solid var(--border);
    background: var(--bg);
  }
  .status.error { color: var(--danger); }
  .grid-wrap {
    flex: 1;
    min-height: 0;
    overflow: auto;
    background: var(--bg);
  }
  table {
    border-collapse: separate;
    border-spacing: 0;
    min-width: 100%;
    width: max-content;
    font-size: 12px;
  }
  thead th {
    position: sticky;
    top: 0;
    z-index: 2;
    background: var(--bg-secondary);
    color: var(--text);
  }
  th, td {
    padding: 6px 10px;
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    text-align: left;
    vertical-align: top;
    max-width: 420px;
    white-space: pre-wrap;
    word-break: break-word;
  }
  th:first-child, td:first-child {
    position: sticky;
    left: 0;
    z-index: 1;
    background: var(--bg-tertiary);
    color: var(--muted);
    width: 56px;
    min-width: 56px;
  }
  thead th:first-child { z-index: 3; }
  tbody tr:nth-child(even) td:not(:first-child) {
    background: color-mix(in srgb, var(--bg-secondary) 55%, transparent);
  }
  .empty, .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--muted);
    font-size: 13px;
    padding: 24px;
    text-align: center;
  }
  .match {
    background: rgba(29,155,240,0.2);
    border-radius: 3px;
  }
</style>
</head>
<body>
  <div class="toolbar">
    <div class="title-wrap">
      <div id="title" class="title">Loading…</div>
      <div id="meta" class="meta">Preparing viewer</div>
    </div>
    <div class="toolbar-actions">
      <label class="field">Search <input id="search" type="search" placeholder="Filter visible rows"></label>
    </div>
  </div>
  <div id="status" class="status">Loading file…</div>
  <div id="grid" class="grid-wrap"><div class="loading">Loading file…</div></div>
<script>
(function () {
  'use strict';

  var params = new URLSearchParams(location.search);
  var path = params.get('path') || '';
  var titleEl = document.getElementById('title');
  var metaEl = document.getElementById('meta');
  var statusEl = document.getElementById('status');
  var gridEl = document.getElementById('grid');
  var searchEl = document.getElementById('search');
  var fileName = path.split('/').pop() || 'table';
  var allRows = [];
  var header = [];
  var delimiter = ',';

  titleEl.textContent = fileName;

  function setStatus(text, isError) {
    statusEl.textContent = text;
    statusEl.className = isError ? 'status error' : 'status';
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function detectDelimiter(text, filePath) {
    var lower = String(filePath || '').toLowerCase();
    if (lower.endsWith('.tsv')) return '\\t';
    var lines = text.split(/\\r\\n?|\\n/).filter(function (line) { return line.length > 0; }).slice(0, 12);
    var candidates = [',', ';', '\\t', '|'];
    var best = ',';
    var bestScore = -1;
    for (var i = 0; i < candidates.length; i++) {
      var delim = candidates[i];
      var counts = lines.map(function (line) {
        return line.split(delim).length;
      }).filter(function (count) {
        return count > 1;
      });
      if (!counts.length) continue;
      var min = Math.min.apply(Math, counts);
      var max = Math.max.apply(Math, counts);
      var score = (counts.length * 100) + min - (max - min);
      if (score > bestScore) {
        best = delim;
        bestScore = score;
      }
    }
    return best;
  }

  function parseDelimited(text, delim) {
    var rows = [];
    var row = [];
    var cell = '';
    var inQuotes = false;
    for (var i = 0; i < text.length; i++) {
      var ch = text[i];
      if (inQuotes) {
        if (ch === '"') {
          if (text[i + 1] === '"') {
            cell += '"';
            i++;
          } else {
            inQuotes = false;
          }
        } else {
          cell += ch;
        }
        continue;
      }
      if (ch === '"') {
        inQuotes = true;
        continue;
      }
      if (ch === delim) {
        row.push(cell);
        cell = '';
        continue;
      }
      if (ch === '\\n') {
        row.push(cell);
        rows.push(row);
        row = [];
        cell = '';
        continue;
      }
      if (ch === '\\r') {
        continue;
      }
      cell += ch;
    }
    if (cell.length || row.length) {
      row.push(cell);
      rows.push(row);
    }
    return rows;
  }

  function visibleRows() {
    var query = String(searchEl.value || '').trim().toLowerCase();
    if (!query) return allRows;
    return allRows.filter(function (row) {
      for (var i = 0; i < row.length; i++) {
        if (String(row[i] || '').toLowerCase().indexOf(query) >= 0) return true;
      }
      return false;
    });
  }

  function highlight(text, query) {
    var raw = String(text || '');
    if (!query) return escapeHtml(raw);
    var lower = raw.toLowerCase();
    var q = query.toLowerCase();
    var idx = lower.indexOf(q);
    if (idx < 0) return escapeHtml(raw);
    return escapeHtml(raw.slice(0, idx)) + '<span class="match">' + escapeHtml(raw.slice(idx, idx + q.length)) + '</span>' + escapeHtml(raw.slice(idx + q.length));
  }

  function render() {
    var rows = visibleRows();
    var query = String(searchEl.value || '').trim();
    if (!header.length) {
      gridEl.innerHTML = '<div class="empty">No tabular rows found.</div>';
      setStatus('No rows to display', false);
      return;
    }

    var html = ['<table><thead><tr><th>#</th>'];
    for (var c = 0; c < header.length; c++) {
      html.push('<th>' + escapeHtml(header[c] || ('Column ' + (c + 1))) + '</th>');
    }
    html.push('</tr></thead><tbody>');

    for (var r = 0; r < rows.length; r++) {
      html.push('<tr><td>' + String(r + 1) + '</td>');
      for (var cc = 0; cc < header.length; cc++) {
        html.push('<td>' + highlight(rows[r][cc] == null ? '' : rows[r][cc], query) + '</td>');
      }
      html.push('</tr>');
    }

    html.push('</tbody></table>');
    gridEl.innerHTML = html.join('');
    metaEl.textContent = (delimiter === '\\t' ? 'TSV' : 'Delimited') + ' • ' + rows.length + ' row' + (rows.length === 1 ? '' : 's') + ' • ' + header.length + ' column' + (header.length === 1 ? '' : 's');
    setStatus(query ? ('Showing ' + rows.length + ' matching rows') : ('Showing ' + rows.length + ' rows'), false);
  }

  searchEl.addEventListener('input', render);

  if (!path) {
    titleEl.textContent = 'CSV Viewer';
    metaEl.textContent = 'No file selected';
    setStatus('Missing path parameter', true);
    gridEl.innerHTML = '<div class="empty">Missing <code>?path=...</code> query parameter.</div>';
    return;
  }

  fetch('/workspace/raw?path=' + encodeURIComponent(path))
    .then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.text();
    })
    .then(function (text) {
      delimiter = detectDelimiter(text, path);
      var rows = parseDelimited(text, delimiter).filter(function (row) {
        return row.some(function (cell) { return String(cell || '').length > 0; });
      });
      if (!rows.length) {
        header = [];
        allRows = [];
        render();
        return;
      }
      var maxColumns = rows.reduce(function (max, row) { return Math.max(max, row.length); }, 0);
      header = rows[0].slice();
      while (header.length < maxColumns) header.push('Column ' + (header.length + 1));
      for (var i = 0; i < header.length; i++) {
        if (!String(header[i] || '').trim()) header[i] = 'Column ' + (i + 1);
      }
      allRows = rows.slice(1).map(function (row) {
        var next = row.slice();
        while (next.length < maxColumns) next.push('');
        return next;
      });
      render();
    })
    .catch(function (err) {
      setStatus('Failed to load file: ' + err.message, true);
      metaEl.textContent = 'Load error';
      gridEl.innerHTML = '<div class="empty">Failed to load file.</div>';
    });
})();
</script>
</body>
</html>`;
}
function handleCsvViewerRoute(req, pathname) {
    if (req.method !== "GET" && req.method !== "HEAD") {
        return new Response("Method Not Allowed", { status: 405 });
    }
    const relative = pathname.replace(/^\/csv-viewer\/?/, "");
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
    return new Response(generateCsvViewerPage(), { status: 200, headers });
}
registerExtensionRoute(ROUTE_PREFIX, handleCsvViewerRoute, import.meta.dir);
