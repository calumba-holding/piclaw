/**
 * web/http/http-utils.ts – Low-level HTTP response helpers.
 *
 * Provides jsonResponse(), parseOptionalInt(), clampInt(), and other
 * small utilities for building API responses.
 *
 * Consumers: All web/handlers/*.ts modules and web/http/response-service.ts.
 */
/**
 * Build a JSON HTTP response with consistent content-type handling.
 * @param data Serializable payload to encode as JSON.
 * @param status HTTP status code for the response.
 * @param headers Optional response headers merged into the output.
 * @returns A `Response` with JSON body and `Content-Type` set when absent.
 */
export function jsonResponse(data, status = 200, headers) {
    const responseHeaders = new Headers(headers);
    if (!responseHeaders.has("Content-Type"))
        responseHeaders.set("Content-Type", "application/json");
    return new Response(JSON.stringify(data), {
        status,
        headers: responseHeaders,
    });
}
/**
 * Build the lightweight success envelope used by simple JSON mutation endpoints.
 * @param data Additional fields to merge into the `{ status: "ok" }` payload.
 * @param status HTTP status code for the response.
 * @param headers Optional response headers merged into the output.
 * @returns JSON success response.
 */
export function okJson(data = {}, status = 200, headers) {
    return jsonResponse({ status: "ok", ...data }, status, headers);
}
/**
 * Build the standard lightweight error envelope used by JSON endpoints.
 * @param error Human-readable error message.
 * @param status HTTP status code for the response.
 * @param headers Optional response headers merged into the output.
 * @returns JSON error response.
 */
export function errorJson(error, status = 400, headers) {
    return jsonResponse({ error }, status, headers);
}
/**
 * Parse and clamp an integer query/header value between bounds.
 * @param value Raw string value to parse.
 * @param fallback Value returned when parsing fails.
 * @param min Minimum allowed integer.
 * @param max Maximum allowed integer.
 * @returns Parsed integer constrained to the `[min, max]` range, or fallback on invalid input.
 */
export function clampInt(value, fallback, min, max) {
    const parsed = value ? parseInt(value, 10) : fallback;
    if (Number.isNaN(parsed))
        return fallback;
    return Math.min(Math.max(parsed, min), max);
}
/**
 * Parse an optional string as an integer.
 * @param value Raw string value to parse.
 * @returns Parsed integer, or null when input is missing/invalid.
 */
export function parseOptionalInt(value) {
    if (!value)
        return null;
    const parsed = parseInt(value, 10);
    return Number.isNaN(parsed) ? null : parsed;
}
