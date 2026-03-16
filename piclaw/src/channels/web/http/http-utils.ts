/**
 * web/http/http-utils.ts – Low-level HTTP response helpers.
 *
 * Provides jsonResponse(), parseOptionalInt(), clampInt(), and other
 * small utilities for building API responses.
 *
 * Consumers: All web/handlers/*.ts modules and web/http/response-service.ts.
 */

/** Build a JSON HTTP response with consistent content-type headers. */
export function jsonResponse(data: unknown, status = 200, headers?: HeadersInit): Response {
  const responseHeaders = new Headers(headers);
  if (!responseHeaders.has("Content-Type")) responseHeaders.set("Content-Type", "application/json");
  return new Response(JSON.stringify(data), {
    status,
    headers: responseHeaders,
  });
}

/** Build the standard lightweight success envelope used by simple web mutations. */
export function okJson(data: Record<string, unknown> = {}, status = 200, headers?: HeadersInit): Response {
  return jsonResponse({ status: "ok", ...data }, status, headers);
}

/** Build the standard lightweight error envelope used by web JSON endpoints. */
export function errorJson(error: string, status = 400, headers?: HeadersInit): Response {
  return jsonResponse({ error }, status, headers);
}

/** Clamp an integer value between min and max bounds. */
export function clampInt(value: string | null, fallback: number, min: number, max: number): number {
  const parsed = value ? parseInt(value, 10) : fallback;
  if (Number.isNaN(parsed)) return fallback;
  return Math.min(Math.max(parsed, min), max);
}

/** Parse a string to an integer, returning undefined if invalid. */
export function parseOptionalInt(value: string | null): number | null {
  if (!value) return null;
  const parsed = parseInt(value, 10);
  return Number.isNaN(parsed) ? null : parsed;
}
