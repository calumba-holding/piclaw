/**
 * channels/web/request-origin.ts – Track the last seen web origin per chat.
 *
 * Used to build absolute URLs (e.g. passkey enrol links) that match the
 * hostname used by the current browser session, even when behind proxies.
 */

const originByChatJid = new Map<string, string>();

const parseForwardedValue = (value: string | null): string | null => {
  if (!value) return null;
  return value.split(",")[0]?.trim() || null;
};

export function rememberWebOrigin(chatJid: string, req: Request): void {
  try {
    const url = new URL(req.url);
    const forwardedHost = parseForwardedValue(req.headers.get("x-forwarded-host"));
    const forwardedProto = parseForwardedValue(req.headers.get("x-forwarded-proto"));
    const host = forwardedHost || req.headers.get("host") || url.host;
    const proto = forwardedProto || url.protocol.replace(":", "") || "http";
    if (!host) return;
    originByChatJid.set(chatJid, `${proto}://${host}`);
  } catch {
    // ignore parse failures
  }
}

export function getWebOrigin(chatJid: string): string | null {
  return originByChatJid.get(chatJid) || null;
}
