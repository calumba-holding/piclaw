/**
 * db/web-content.ts – Content length clamping for the web UI timeline.
 *
 * Very large message content (e.g. pasted log files, huge tool outputs) can
 * slow down the web timeline. This module decides whether content should be
 * truncated or previewed before being sent to the browser.
 *
 * The thresholds are configurable via environment variables:
 *   - PICLAW_WEB_MAX_CONTENT_CHARS  – hard cap (default 256 KB chars)
 *   - PICLAW_WEB_PREVIEW_CHARS      – soft preview limit (default 16 KB chars)
 *
 * Consumers:
 *   - db/messages.ts calls clampWebContent() inside buildInteraction() so
 *     every InteractionRow returned to the web channel is size-safe.
 *   - channels/web/message-store.ts uses shouldPreviewWebContent() and
 *     getWebPreviewMaxChars() for streaming draft preview decisions.
 */
/** Absolute maximum characters stored in an interaction's content field. */
const DEFAULT_WEB_CONTENT_MAX_CHARS = 262_144;
/** Below this length, content is shown in full; above it, a preview is returned. */
const DEFAULT_WEB_CONTENT_PREVIEW_CHARS = 16_000;
/** Resolved hard cap (env-overridable). */
const WEB_CONTENT_MAX_CHARS = (() => {
    const raw = Number.parseInt(process.env.PICLAW_WEB_MAX_CONTENT_CHARS || "", 10);
    return Number.isFinite(raw) && raw > 0 ? raw : DEFAULT_WEB_CONTENT_MAX_CHARS;
})();
/** Resolved preview threshold (env-overridable, capped at WEB_CONTENT_MAX_CHARS). */
const WEB_CONTENT_PREVIEW_CHARS = (() => {
    const raw = Number.parseInt(process.env.PICLAW_WEB_PREVIEW_CHARS || "", 10);
    if (Number.isFinite(raw) && raw > 0)
        return Math.min(raw, WEB_CONTENT_MAX_CHARS);
    return Math.min(DEFAULT_WEB_CONTENT_PREVIEW_CHARS, WEB_CONTENT_MAX_CHARS);
})();
/** Regex to detect inline SVG content which should never be previewed/truncated. */
const SVG_HINT = /data:image\/svg\+xml|<svg[\s>]/i;
/** Check if content contains SVG markup that should be kept intact. */
export function isSvgContent(content) {
    return SVG_HINT.test(content);
}
/**
 * Determine whether content exceeds the preview threshold and is therefore
 * a candidate for preview truncation (SVG content is exempt).
 */
export function shouldPreviewWebContent(content) {
    if (!content)
        return false;
    if (content.length <= WEB_CONTENT_PREVIEW_CHARS)
        return false;
    if (isSvgContent(content))
        return false;
    return true;
}
/** Return the current preview character limit. */
export function getWebPreviewMaxChars() {
    return WEB_CONTENT_PREVIEW_CHARS;
}
/**
 * Clamp content for safe delivery to the web timeline:
 *   1. If content exceeds the hard cap → return empty content + truncated meta.
 *   2. If content exceeds the preview threshold → return a prefix + preview meta.
 *   3. Otherwise → return content unchanged (no meta).
 *
 * The returned `meta` (if present) tells the web UI that the content was
 * shortened and includes the original length for display purposes.
 */
export function clampWebContent(content) {
    const safeContent = typeof content === "string" ? content : String(content ?? "");
    const length = safeContent.length;
    // Hard truncation – content is too large to store even as a preview.
    if (length > WEB_CONTENT_MAX_CHARS) {
        return {
            content: "",
            meta: {
                truncated: true,
                original_length: length,
                max_length: WEB_CONTENT_MAX_CHARS,
            },
        };
    }
    // Soft preview – show a prefix and let the UI offer "show more".
    if (shouldPreviewWebContent(safeContent)) {
        const preview = safeContent.slice(0, WEB_CONTENT_PREVIEW_CHARS).trimEnd();
        return {
            content: preview,
            meta: {
                truncated: true,
                preview: true,
                original_length: length,
                max_length: WEB_CONTENT_PREVIEW_CHARS,
            },
        };
    }
    return { content: safeContent };
}
