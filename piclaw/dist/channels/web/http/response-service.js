/**
 * web/http/response-service.ts – Unified response builder service.
 *
 * Wraps http-utils and static helpers into a cohesive API for handler
 * modules. Provides JSON responses, static file serving, and doc serving.
 *
 * Consumers: web/request-router.ts uses ResponseService methods.
 */
import { clampInt, jsonResponse, parseOptionalInt } from "./http-utils.js";
import { serveDocsStatic, serveStatic } from "./static.js";
/** Unified response builder combining JSON, static, and doc serving. */
export class ResponseService {
    json(data, status = 200) {
        return jsonResponse(data, status);
    }
    async serveStatic(relPath) {
        return serveStatic(relPath, () => this.json({ error: "Not found" }, 404));
    }
    async serveDocsStatic(relPath) {
        return serveDocsStatic(relPath, () => this.json({ error: "Not found" }, 404));
    }
    clampInt(value, fallback, min, max) {
        return clampInt(value, fallback, min, max);
    }
    parseOptionalInt(value) {
        return parseOptionalInt(value);
    }
}
