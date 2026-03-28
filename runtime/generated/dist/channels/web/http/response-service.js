/**
 * web/http/response-service.ts – Unified response builder service.
 *
 * Wraps http-utils and static helpers into a cohesive API for handler
 * modules. Provides JSON responses, static file serving, and doc serving.
 *
 * Consumers: web/request-router.ts uses ResponseService methods.
 */
import { clampInt, errorJson, jsonResponse, okJson, parseOptionalInt } from "./http-utils.js";
import { serveDocsStatic, serveStatic } from "./static.js";
/** Unified response builder combining JSON, static, and doc serving. */
export class ResponseService {
    /**
     * Build a JSON response.
     * @param data Serializable payload to encode.
     * @param status HTTP status code.
     * @param headers Optional response headers.
     * @returns JSON response.
     */
    json(data, status = 200, headers) {
        return jsonResponse(data, status, headers);
    }
    /**
     * Build the standard success response envelope.
     * @param data Additional payload fields merged into the success envelope.
     * @param status HTTP status code.
     * @param headers Optional response headers.
     * @returns JSON success response.
     */
    ok(data = {}, status = 200, headers) {
        return okJson(data, status, headers);
    }
    /**
     * Build the standard JSON error response envelope.
     * @param message Human-readable error message.
     * @param status HTTP status code.
     * @param headers Optional response headers.
     * @returns JSON error response.
     */
    error(message, status = 400, headers) {
        return errorJson(message, status, headers);
    }
    /**
     * Serve a static web asset.
     * @param relPath Relative asset path inside the static directory.
     * @returns Static-file response, or a 404 JSON error wrapper.
     */
    async serveStatic(relPath) {
        return serveStatic(relPath, () => this.error("Not found", 404));
    }
    /**
     * Serve a static documentation asset.
     * @param relPath Relative asset path inside the docs directory.
     * @returns Static docs-file response, or a 404 JSON error wrapper.
     */
    async serveDocsStatic(relPath) {
        return serveDocsStatic(relPath, () => this.error("Not found", 404));
    }
    /**
     * Parse and clamp an integer value.
     * @param value Raw string value to parse.
     * @param fallback Value returned when parsing fails.
     * @param min Minimum allowed integer.
     * @param max Maximum allowed integer.
     * @returns Parsed integer constrained to the configured bounds.
     */
    clampInt(value, fallback, min, max) {
        return clampInt(value, fallback, min, max);
    }
    /**
     * Parse an optional integer value.
     * @param value Raw string value to parse.
     * @returns Parsed integer, or null when input is missing/invalid.
     */
    parseOptionalInt(value) {
        return parseOptionalInt(value);
    }
}
