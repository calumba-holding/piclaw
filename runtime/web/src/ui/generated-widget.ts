export type GeneratedWidgetKind = "html" | "svg";
export type GeneratedWidgetSource = "timeline" | "live";
export type GeneratedWidgetStatus = "loading" | "streaming" | "final" | "error";

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
  source?: GeneratedWidgetSource;
  status?: GeneratedWidgetStatus;
  turnId?: string | null;
  toolCallId?: string | null;
  width?: number | null;
  height?: number | null;
  error?: string | null;
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

function getLiveArtifact(block: any): GeneratedWidgetArtifact {
  const artifact = block?.artifact && typeof block.artifact === 'object' ? block.artifact : {};
  const rawSvg = typeof artifact.svg === 'string' ? artifact.svg : (typeof block?.svg === 'string' ? block.svg : '');
  const rawHtml = typeof artifact.html === 'string'
    ? artifact.html
    : (typeof block?.html === 'string'
      ? block.html
      : (typeof block?.w === 'string'
        ? block.w
        : (typeof block?.content === 'string' ? block.content : '')));

  const requestedKind = artifact.kind || block?.kind || null;
  const kind = requestedKind === 'svg' || rawSvg ? 'svg' : 'html';
  if (kind === 'svg') {
    return rawSvg ? { kind, svg: rawSvg } : { kind };
  }
  return rawHtml ? { kind, html: rawHtml } : { kind };
}

function readFiniteNumber(value: unknown): number | null {
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

function readOptionalString(value: unknown): string | null {
  return typeof value === 'string' && value.trim() ? value.trim() : null;
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
    source: 'timeline',
    status: 'final',
  };
}

export function normalizeLiveGeneratedWidgetPayload(block: any): GeneratedWidgetPayload | null {
  if (!block || typeof block !== 'object') return null;

  const artifact = getLiveArtifact(block);
  const widgetId = readOptionalString(block?.widget_id) || readOptionalString(block?.widgetId) || readOptionalString(block?.tool_call_id) || readOptionalString(block?.toolCallId);
  const toolCallId = readOptionalString(block?.tool_call_id) || readOptionalString(block?.toolCallId);
  const turnId = readOptionalString(block?.turn_id) || readOptionalString(block?.turnId);
  const title = readOptionalString(block?.title) || readOptionalString(block?.name) || 'Generated widget';
  const subtitle = readOptionalString(block?.subtitle) || '';
  const description = readOptionalString(block?.description) || subtitle;
  const status = readOptionalString(block?.status);
  const normalizedStatus = status === 'loading' || status === 'streaming' || status === 'final' || status === 'error'
    ? status
    : 'streaming';

  return {
    title,
    subtitle,
    description,
    originPostId: readFiniteNumber(block?.origin_post_id) ?? readFiniteNumber(block?.originPostId),
    originChatJid: readOptionalString(block?.origin_chat_jid) || readOptionalString(block?.originChatJid) || readOptionalString(block?.chat_jid) || null,
    widgetId,
    artifact,
    source: 'live',
    status: normalizedStatus,
    turnId,
    toolCallId,
    width: readFiniteNumber(block?.width),
    height: readFiniteNumber(block?.height),
    error: readOptionalString(block?.error),
  };
}

export function canRenderGeneratedWidget(block: any): boolean {
  return buildGeneratedWidgetPayload(block, null) !== null;
}

export function getGeneratedWidgetSessionKey(widget: any): string | null {
  const toolCallId = readOptionalString(widget?.toolCallId) || readOptionalString(widget?.tool_call_id);
  if (toolCallId) return toolCallId;

  const widgetId = readOptionalString(widget?.widgetId) || readOptionalString(widget?.widget_id);
  if (widgetId) return widgetId;

  const originPostId = readFiniteNumber(widget?.originPostId) ?? readFiniteNumber(widget?.origin_post_id);
  if (originPostId !== null) return `post:${originPostId}`;
  return null;
}

export function getGeneratedWidgetEmptyStateMessage(widget: any): string {
  const status = readOptionalString(widget?.status);
  if (status === 'loading' || status === 'streaming') {
    return 'Widget is loading…';
  }
  if (status === 'error') {
    return readOptionalString(widget?.error) || 'Widget failed to load.';
  }
  return 'Widget artifact is missing or unsupported.';
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
