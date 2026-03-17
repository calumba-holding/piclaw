#!/usr/bin/env bun
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, extname } from "path";
import { createRequire } from "node:module";
import { Database } from "bun:sqlite";


// --help support
if (process.argv.includes("--help") || process.argv.includes("-h")) {
  console.log("Usage: bun export-timeline-pdf.ts [options]");
  console.log("");
  console.log("  Export a chat timeline to a PDF using the web UI renderer and Playwright.");
  process.exit(0);
}
const args = process.argv.slice(2);

const getArg = (name: string): string | undefined => {
  const idx = args.indexOf(name);
  if (idx >= 0 && idx + 1 < args.length) {
    const value = args[idx + 1];
    if (!value.startsWith("--")) return value;
  }
  return undefined;
};

const chatJid = getArg("--chat") || "web:default";
const fromArg = getArg("--from");
const toArg = getArg("--to");
const theme = (getArg("--theme") || "light").toLowerCase();
const outPath = getArg("--out") || `/workspace/exports/timeline-${chatJid.replace(/[^a-z0-9]+/gi, "_")}.pdf`;
const embedImages = (getArg("--embed-images") || "true").toLowerCase() !== "false";
const maxImageBytes = Number(getArg("--max-image-bytes") || "4000000");

const ensureDir = (path: string) => mkdirSync(path, { recursive: true });
ensureDir(join(outPath, ".."));

function resolveExistingPath(label: string, candidates: string[]): string {
  for (const candidate of candidates) {
    if (existsSync(candidate)) return candidate;
  }
  throw new Error(`Could not resolve ${label}. Tried: ${candidates.join(", ")}`);
}

const PICLAW_ROOT = resolveExistingPath("piclaw source root", [
  "/workspace/piclaw/piclaw",
  "/home/agent/piclaw/piclaw",
  "/usr/local/lib/bun/install/global/node_modules/piclaw",
]);

const cssPath = resolveExistingPath("web stylesheet", [join(PICLAW_ROOT, "web/static/css/styles.css")]);
const css = readFileSync(cssPath, "utf8");

const markedPath = resolveExistingPath("marked bundle", [join(PICLAW_ROOT, "web/static/js/marked.min.js")]);
const markedSource = readFileSync(markedPath, "utf8");

const mermaidSourcePath = resolveExistingPath("mermaid bundle", [join(PICLAW_ROOT, "web/static/js/vendor/beautiful-mermaid.js")]);
const mermaidSource = readFileSync(mermaidSourcePath, "utf8");

const moduleStub: { exports: any } = { exports: {} };
const exportsStub = moduleStub.exports;
// Evaluate marked UMD bundle to get a parser without installing deps.
new Function("exports", "module", "define", "globalThis", "self", markedSource)(
  exportsStub,
  moduleStub,
  undefined,
  globalThis,
  globalThis,
);
const markedLib = moduleStub.exports.marked || moduleStub.exports || globalThis.marked;

const decodeEntities = (text: string) =>
  text
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");

const decodeEntitiesDeep = (text: string, maxDepth = 2) => {
  let current = text;
  for (let i = 0; i < maxDepth; i += 1) {
    const next = decodeEntities(current);
    if (next === current) break;
    current = next;
  }
  return current;
};

const extractMermaidBlocks = (text: string) => {
  if (!text) return { text: "", blocks: [] as string[] };
  const normalized = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const lines = normalized.split("\n");
  const blocks: string[] = [];
  const output: string[] = [];
  let inMermaid = false;
  let current: string[] = [];

  for (const line of lines) {
    if (!inMermaid && line.trim().match(/^```mermaid\s*$/i)) {
      inMermaid = true;
      current = [];
      continue;
    }
    if (inMermaid && line.trim().match(/^```\s*$/)) {
      const idx = blocks.length;
      blocks.push(current.join("\n"));
      output.push(`@@MERMAID_BLOCK_${idx}@@`);
      inMermaid = false;
      current = [];
      continue;
    }
    if (inMermaid) {
      current.push(line);
    } else {
      output.push(line);
    }
  }

  if (inMermaid) {
    output.push("```mermaid");
    output.push(...current);
  }

  return { text: output.join("\n"), blocks };
};

const injectMermaidBlocks = (html: string, blocks: string[]) => {
  if (!html || !blocks || blocks.length === 0) return html;
  const replaced = html.replace(/@@MERMAID_BLOCK_(\d+)@@/g, (match, idxStr) => {
    const idx = Number(idxStr);
    const raw = blocks[idx] ?? "";
    const decoded = decodeEntitiesDeep(raw, 5);
    const encoded = Buffer.from(encodeURIComponent(decoded)).toString("base64");
    return `<div class=\"mermaid-container\" data-mermaid=\"${encoded}\"><div class=\"mermaid-loading\">Loading diagram...</div></div>`;
  });
  return replaced.replace(/<p>\s*(<div class=\"mermaid-container\"[\s\S]*?<\/div>)\s*<\/p>/g, "$1");
};

const renderMarkdown = (value: string) => {
  if (!value) return "";
  const { text: stripped, blocks } = extractMermaidBlocks(value);
  let html = stripped;
  if (typeof markedLib?.parse === "function") {
    html = markedLib.parse(stripped, { headerIds: false, mangle: false, breaks: true });
  } else if (typeof markedLib === "function") {
    html = markedLib(stripped, { headerIds: false, mangle: false, breaks: true });
  } else {
    html = stripped.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");
  }
  return injectMermaidBlocks(html, blocks);
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const formatTime = (timestamp: string) => {
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return timestamp;
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = diffMs / 1000;
  const dayMs = 24 * 60 * 60 * 1000;

  if (diffMs < dayMs) {
    if (diffSec < 60) return "just now";
    if (diffSec < 3600) return `${Math.floor(diffSec / 60)}m`;
    return `${Math.floor(diffSec / 3600)}h`;
  }

  if (diffMs < 5 * dayMs) {
    const weekday = date.toLocaleDateString(undefined, { weekday: "short" });
    const time = date.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
    return `${weekday} ${time}`;
  }

  const datePart = date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  const timePart = date.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
  return `${datePart} ${timePart}`;
};

const parseJson = <T>(value: string | null): T | null => {
  if (!value) return null;
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
};

const guessContentType = (source: string) => {
  const lower = source.toLowerCase();
  const ext = extname(lower);
  if (ext === ".svg") return "image/svg+xml";
  if (ext === ".png") return "image/png";
  if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
  if (ext === ".gif") return "image/gif";
  if (ext === ".webp") return "image/webp";
  if (lower.includes("avatars.githubusercontent.com")) return "image/png";
  return "application/octet-stream";
};

const toDataUri = async (source?: string | null): Promise<string | null> => {
  if (!source) return null;
  if (source.startsWith("http://") || source.startsWith("https://")) {
    try {
      const res = await fetch(source);
      if (!res.ok) return null;
      const buffer = Buffer.from(await res.arrayBuffer());
      const contentType = res.headers.get("content-type") || guessContentType(source);
      return `data:${contentType};base64,${buffer.toString("base64")}`;
    } catch {
      return null;
    }
  }
  try {
    const buffer = readFileSync(source);
    const contentType = guessContentType(source);
    return `data:${contentType};base64,${Buffer.from(buffer).toString("base64")}`;
  } catch {
    return null;
  }
};

const dbPath = `${process.env.PICLAW_STORE || "/workspace/.piclaw/store"}/messages.db`;
const db = new Database(dbPath, { readonly: true });
const where: string[] = ["chat_jid = ?"];
const params: string[] = [chatJid];
if (fromArg) {
  where.push("timestamp >= ?");
  params.push(fromArg);
}
if (toArg) {
  where.push("timestamp <= ?");
  params.push(toArg);
}

const messages = db
  .query(
    `SELECT rowid, sender, sender_name, content, timestamp, is_bot_message, content_blocks, link_previews, thread_id
     FROM messages
     WHERE ${where.join(" AND ")}
     ORDER BY rowid ASC`,
  )
  .all(...params) as Array<{
  rowid: number;
  sender: string | null;
  sender_name: string | null;
  content: string | null;
  timestamp: string;
  is_bot_message: number;
  content_blocks: string | null;
  link_previews: string | null;
  thread_id: number | null;
}>;

const mediaRows = db
  .query(
    `SELECT mm.message_rowid as message_rowid, m.id as id, m.filename as filename, m.content_type as content_type, m.data as data, m.metadata as metadata
     FROM message_media mm
     JOIN media m ON m.id = mm.media_id
     JOIN messages msg ON msg.rowid = mm.message_rowid
     WHERE ${where
       .map((clause) => clause.replace("timestamp", "msg.timestamp").replace("chat_jid", "msg.chat_jid"))
       .join(" AND ")}
     ORDER BY mm.message_rowid ASC, mm.media_id ASC`,
  )
  .all(...params) as Array<{
  message_rowid: number;
  id: number;
  filename: string | null;
  content_type: string | null;
  data: Uint8Array | null;
  metadata: string | null;
}>;

const attachmentsByMessage = new Map<number, typeof mediaRows>();
for (const row of mediaRows) {
  const list = attachmentsByMessage.get(row.message_rowid) || [];
  list.push(row);
  attachmentsByMessage.set(row.message_rowid, list);
}

const config = parseJson<any>(readFileSync("/workspace/.piclaw/config.json", "utf8")) || {};
const agentName = config?.assistant?.assistantName || "Assistant";
const userName = config?.user?.userName || "You";
const userAvatarBackground = (config?.user?.userAvatarBackground || "").toString().trim().toLowerCase();

const avatarLetter = (name: string) => {
  const trimmed = name.trim();
  return trimmed ? trimmed[0].toUpperCase() : "?";
};

const formatFileSize = (bytes: number) => {
  if (!Number.isFinite(bytes)) return "";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const agentAvatarData = await toDataUri(config?.assistant?.assistantAvatar);
const userAvatarData = await toDataUri(config?.user?.userAvatar);

const buildAvatarHtml = (name: string, avatarData: string | null, isAgent: boolean) => {
  const baseClass = `post-avatar ${isAgent ? "agent-avatar" : ""}`;
  const clearBg = !isAgent && avatarData && (userAvatarBackground === "clear" || userAvatarBackground === "transparent");
  const style = clearBg ? " style=\"background-color: transparent;\"" : "";
  if (avatarData) {
    return `<div class=\"${baseClass} has-image\"${style}><img src=\"${avatarData}\" alt=\"${escapeHtml(name)}\" /></div>`;
  }
  return `<div class=\"${baseClass}\"${style}>${escapeHtml(avatarLetter(name))}</div>`;
};

const buildAttachmentHtml = (items: typeof mediaRows) => {
  if (!items.length) return "";
  const images: string[] = [];
  const files: string[] = [];

  for (const item of items) {
    const type = item.content_type || "";
    const data = item.data as Uint8Array | null;
    const metadata = parseJson<{ size?: number }>(item.metadata) || {};
    const size = metadata.size || (data ? data.length : 0);
    const filename = item.filename || `media-${item.id}`;

    if (embedImages && type.startsWith("image/") && data && size <= maxImageBytes) {
      const base64 = Buffer.from(data).toString("base64");
      images.push(`<img src=\"data:${type};base64,${base64}\" alt=\"${escapeHtml(filename)}\" />`);
    } else {
      const sizeLabel = size ? ` • ${formatFileSize(size)}` : "";
      files.push(`
        <div class=\"file-attachment\">
          <div class=\"file-info\">
            <span class=\"file-name\">${escapeHtml(filename)}</span>
            <span class=\"file-size\">${escapeHtml(sizeLabel)}</span>
          </div>
        </div>
      `);
    }
  }

  const imageHtml = images.length ? `<div class=\"media-preview\">${images.join("\n")}</div>` : "";
  const fileHtml = files.length ? `<div class=\"file-attachments\">${files.join("\n")}</div>` : "";
  return `${imageHtml}${fileHtml}`;
};

const buildLinkPreviewHtml = (raw: string | null) => {
  const previews = parseJson<Array<any>>(raw) || [];
  if (!previews.length) return "";
  return `
    <div class=\"link-previews\">
      ${previews
        .map((preview) => {
          const url = preview.url || "";
          const title = preview.title || url;
          const description = preview.description || "";
          const site = preview.site_name || (url ? new URL(url).hostname : "");
          const image = preview.image || "";
          const classes = image ? "link-preview has-image" : "link-preview";
          const style = image ? ` style=\"background-image: url('${image}')\"` : "";
          return `
            <a href=\"${escapeHtml(url)}\" class=\"${classes}\"${style} target=\"_blank\" rel=\"noopener noreferrer\">
              <div class=\"link-preview-overlay\">
                <div class=\"link-preview-site\">${escapeHtml(site)}</div>
                <div class=\"link-preview-title\">${escapeHtml(title)}</div>
                ${description ? `<div class=\"link-preview-description\">${escapeHtml(description)}</div>` : ""}
              </div>
            </a>
          `;
        })
        .join("\n")}
    </div>
  `;
};

const agentAvatarHtml = buildAvatarHtml(agentName, agentAvatarData, true);
const userAvatarHtml = buildAvatarHtml(userName, userAvatarData, false);

const postHtml = messages
  .map((msg) => {
    const isAgent = msg.is_bot_message === 1;
    const author = isAgent ? agentName : userName;
    const avatarHtml = isAgent ? agentAvatarHtml : userAvatarHtml;
    const time = formatTime(msg.timestamp);
    const contentHtml = msg.content ? renderMarkdown(msg.content) : "";
    const attachments = attachmentsByMessage.get(msg.rowid) || [];
    const attachmentsHtml = buildAttachmentHtml(attachments);
    const linkPreviewHtml = buildLinkPreviewHtml(msg.link_previews);
    const threadClass = msg.thread_id && msg.thread_id !== msg.rowid ? "thread-reply" : "";

    return `
      <div class=\"post ${isAgent ? "agent-post" : ""} ${threadClass}\">
        ${avatarHtml}
        <div class=\"post-body\">
          <div class=\"post-meta\">
            <span class=\"post-author\">${escapeHtml(author)}</span>
            <span class=\"post-time\">${escapeHtml(time)}</span>
          </div>
          ${contentHtml ? `<div class=\"post-content\">${contentHtml}</div>` : ""}
          ${attachmentsHtml}
          ${linkPreviewHtml}
        </div>
      </div>
    `;
  })
  .join("\n");

const extraCss = `
  @page { margin: 18mm; }
  html, body, #app { height: auto !important; min-height: auto !important; }
  body { margin: 0; }
  #app { display: block !important; }
  .timeline { height: auto !important; overflow: visible !important; flex: initial !important; }
  .timeline-content { padding: var(--spacing-lg) var(--spacing-xl); }
  .post { animation: none !important; break-inside: avoid; page-break-inside: avoid; }
  .post:hover { background: transparent; }
  .post-delete-btn { display: none !important; }
  .file-attachment { display: block; }
  .mermaid-container { min-height: 160px; overflow: visible; }
  .mermaid-container svg { width: 100% !important; height: auto !important; max-height: none !important; }
`;

const html = `<!doctype html>
<html lang=\"en\">
<head>
  <meta charset=\"utf-8\" />
  <title>Piclaw timeline export</title>
  <style>${css}\n${extraCss}</style>
</head>
<body class=\"${theme === "dark" ? "dark" : "light"}\">
  <div id=\"app\">
    <div class=\"timeline normal\">
      <div class=\"timeline-content\">
        ${postHtml}
      </div>
    </div>
  </div>
  <script>${mermaidSource}</script>
  <script>
    (async () => {
      if (!window.beautifulMermaid) {
        document.documentElement.dataset.mermaidDone = 'true';
        return;
      }
      const { renderMermaid, THEMES } = window.beautifulMermaid;
      const isDark = document.body.classList.contains('dark');
      const theme = isDark ? THEMES['tokyo-night'] : THEMES['github-light'];
      const pending = document.querySelectorAll('.mermaid-container[data-mermaid]');
      for (const el of pending) {
        try {
          const encoded = el.dataset.mermaid;
          const raw = decodeURIComponent(atob(encoded));
          const svg = await renderMermaid(raw, { ...theme, transparent: true });
          el.innerHTML = svg;
          const svgEl = el.querySelector('svg');
          if (svgEl) {
            svgEl.removeAttribute('height');
            svgEl.removeAttribute('width');
            svgEl.style.width = '100%';
            const box = svgEl.viewBox?.baseVal;
            if (box && box.width > 0 && box.height > 0) {
              const containerWidth = el.clientWidth || 680;
              const height = containerWidth * (box.height / box.width);
              svgEl.style.height = String(height) + 'px';
            } else {
              svgEl.style.height = 'auto';
            }
          }
          el.removeAttribute('data-mermaid');
        } catch (e) {
          el.innerHTML = '<pre class="mermaid-error">Diagram error: ' + (e?.message || e) + '</pre>';
          el.removeAttribute('data-mermaid');
        }
      }
      document.documentElement.dataset.mermaidDone = 'true';
    })();
  </script>
</body>
</html>`;

const htmlPath = outPath.replace(/\.pdf$/i, ".html");
writeFileSync(htmlPath, html, "utf8");

const playwrightPackageJson = resolveExistingPath("playwright package.json", [
  "/workspace/scripts/playwright/package.json",
  "/home/agent/piclaw/scripts/playwright/package.json",
]);
const require = createRequire(playwrightPackageJson);
const { chromium } = require("playwright");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
await page.goto(`file://${htmlPath}`, { waitUntil: "load" });
try {
  await page.waitForFunction(() => document.documentElement.dataset.mermaidDone === "true", null, { timeout: 15000 });
} catch {
  // Continue even if mermaid rendering times out.
}
await page.pdf({
  path: outPath,
  format: "A4",
  printBackground: true,
});
await browser.close();

process.stdout.write(outPath);
