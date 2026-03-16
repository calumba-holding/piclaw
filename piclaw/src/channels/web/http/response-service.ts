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
  json(data: unknown, status = 200, headers?: HeadersInit): Response {
    return jsonResponse(data, status, headers);
  }

  ok(data: Record<string, unknown> = {}, status = 200, headers?: HeadersInit): Response {
    return okJson(data, status, headers);
  }

  error(message: string, status = 400, headers?: HeadersInit): Response {
    return errorJson(message, status, headers);
  }

  async serveStatic(relPath: string): Promise<Response> {
    return serveStatic(relPath, () => this.error("Not found", 404));
  }

  async serveDocsStatic(relPath: string): Promise<Response> {
    return serveDocsStatic(relPath, () => this.error("Not found", 404));
  }

  clampInt(value: string | null, fallback: number, min: number, max: number): number {
    return clampInt(value, fallback, min, max);
  }

  parseOptionalInt(value: string | null): number | null {
    return parseOptionalInt(value);
  }
}
