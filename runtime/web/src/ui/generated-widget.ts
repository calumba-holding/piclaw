export type GeneratedWidgetKind = "html" | "svg";

export interface GeneratedWidgetArtifact {
  kind: GeneratedWidgetKind;
  html?: string;
  svg?: string;
}

export interface GeneratedWidgetPayload {
  title: string;
  subtitle: string;
  description: string;
  originPostId: number | null;
  originChatJid: string | null;
  widgetId: string | null;
  artifact: GeneratedWidgetArtifact;
}

function getArtifact(block: any): GeneratedWidgetArtifact | null {
  const artifact = block?.artifact || {};
  const kind = artifact.kind || block?.kind || null;
  if (kind !== "html" && kind !== "svg") return null;

  if (kind === "html") {
    const html = typeof artifact.html === "string" ? artifact.html : (typeof block?.html === "string" ? block.html : "");
    return html ? { kind, html } : null;
  }

  const svg = typeof artifact.svg === "string" ? artifact.svg : (typeof block?.svg === "string" ? block.svg : "");
  return svg ? { kind, svg } : null;
}

export function buildGeneratedWidgetPayload(block: any, post?: any): GeneratedWidgetPayload | null {
  if (!block || block.type !== "generated_widget") return null;
  const artifact = getArtifact(block);
  if (!artifact) return null;

  return {
    title: block.title || block.name || "Generated widget",
    subtitle: typeof block.subtitle === "string" ? block.subtitle : "",
    description: block.description || block.subtitle || "",
    originPostId: Number.isFinite(post?.id) ? post.id : null,
    originChatJid: typeof post?.chat_jid === "string" ? post.chat_jid : null,
    widgetId: block.widget_id || block.id || null,
    artifact,
  };
}

export function canRenderGeneratedWidget(block: any): boolean {
  return buildGeneratedWidgetPayload(block, null) !== null;
}

export function buildWidgetSrcDoc(widget: any): string {
  const artifact = widget?.artifact || {};
  const kind = artifact.kind || widget?.kind || null;
  const rawHtml = typeof artifact.html === 'string' ? artifact.html : (typeof widget?.html === 'string' ? widget.html : '');
  const rawSvg = typeof artifact.svg === 'string' ? artifact.svg : (typeof widget?.svg === 'string' ? widget.svg : '');
  const title = typeof widget?.title === 'string' && widget.title.trim() ? widget.title.trim() : 'Generated widget';
  const content = kind === 'svg' ? rawSvg : rawHtml;
  if (!content) return '';

  const csp = [
    "default-src 'none'",
    "img-src data: blob: https: http:",
    "style-src 'unsafe-inline'",
    "font-src data: https: http:",
    "media-src data: blob: https: http:",
    "connect-src 'none'",
    "frame-src 'none'",
    "script-src 'none'",
    "object-src 'none'",
    "base-uri 'none'",
    "form-action 'none'",
  ].join('; ');

  const body = kind === 'svg'
    ? `<div class="widget-svg-shell">${content}</div>`
    : content;

  return `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${csp}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title.replace(/[<&>]/g, '')}</title>
<style>
:root { color-scheme: dark light; }
html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #0f1117;
  color: #f5f7fb;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
body {
  box-sizing: border-box;
}
.widget-svg-shell {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
}
.widget-svg-shell svg {
  max-width: 100%;
  height: auto;
}
</style>
</head>
<body>${body}</body>
</html>`;
}
