/**
 * web/media-service.ts – File upload and retrieval service.
 *
 * Wraps db/media.ts operations with validation:
 *   - File size limit (10 MB) — returns 413 if exceeded
 *   - Content-type normalization (non-image types are served as downloads)
 *
 * Consumers: web/handlers/media.ts delegates to MediaService methods.
 */
import { readFileSync, statSync } from "fs";
import { basename, extname } from "path";
import { createMedia, getMediaById, getMediaInfoById } from "../../db.js";
/**
 * Max upload size: 10 MB.
 * This is enforced at the application level. The Bun.serve()
 * maxRequestBodySize (512 MB) is a separate hard cap.
 */
const MAX_MEDIA_UPLOAD_BYTES = 10 * 1024 * 1024;
/**
 * File upload/download service wrapping db/media.ts operations.
 * Validates size and normalizes content type before persisting.
 */
const normalizeContentType = (value, fallback) => {
    const type = (value || fallback || "application/octet-stream").toLowerCase();
    return type || "application/octet-stream";
};
const EXTENSION_MEDIA_TYPES = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".bmp": "image/bmp",
    ".ico": "image/x-icon",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".mp3": "audio/mpeg",
    ".ogg": "audio/ogg",
    ".wav": "audio/wav",
    ".pdf": "application/pdf",
    ".txt": "text/plain",
    ".md": "text/markdown",
    ".csv": "text/csv",
    ".html": "text/html",
    ".xml": "text/xml",
    ".json": "application/json",
    ".zip": "application/zip",
    ".gz": "application/gzip",
};
const inferContentTypeFromPath = (filePath) => {
    const extension = extname(filePath).toLowerCase();
    return EXTENSION_MEDIA_TYPES[extension] || "application/octet-stream";
};
/**
 * Service for validating and persisting uploaded media blobs.
 *
 * Used by web handlers and IPC path-based ingestion to create media rows and
 * retrieve media payloads/metadata for rendering and downloads.
 */
export class MediaService {
    /**
     * Validate and store an uploaded file.
     * Returns 413 if file exceeds MAX_MEDIA_UPLOAD_BYTES.
     */
    async createFromFile(file) {
        // Size check — reject before reading the full body into memory
        if (file.size > MAX_MEDIA_UPLOAD_BYTES) {
            return {
                status: 413,
                body: { error: `File too large (max ${MAX_MEDIA_UPLOAD_BYTES / 1024 / 1024} MB)` },
            };
        }
        const contentType = normalizeContentType(file.type, inferContentTypeFromPath(file.name || "upload"));
        const arrayBuffer = await file.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);
        const mediaId = createMedia(file.name || "upload", contentType, data, null, { size: file.size });
        return { status: 200, body: { id: mediaId, filename: file.name, size: file.size, contentType } };
    }
    /**
     * Validate and store a file by filesystem path.
     * Returns 413 if file exceeds MAX_MEDIA_UPLOAD_BYTES.
     * Returns 404 if the file does not exist.
     */
    async createFromPath(filePath, contentTypeOverride, filenameOverride) {
        let stats;
        try {
            stats = statSync(filePath);
        }
        catch {
            return { status: 404, body: { error: `Media file not found: ${filePath}` } };
        }
        if (!stats.isFile()) {
            return { status: 400, body: { error: `Media path is not a regular file: ${filePath}` } };
        }
        if (stats.size > MAX_MEDIA_UPLOAD_BYTES) {
            return {
                status: 413,
                body: { error: `File too large (max ${MAX_MEDIA_UPLOAD_BYTES / 1024 / 1024} MB)` },
            };
        }
        const contentType = normalizeContentType(contentTypeOverride, inferContentTypeFromPath(filePath));
        let data;
        try {
            data = new Uint8Array(readFileSync(filePath));
        }
        catch {
            return { status: 500, body: { error: `Unable to read media file: ${filePath}` } };
        }
        const mediaId = createMedia(filenameOverride || basename(filePath), contentType, data, null, { size: stats.size });
        return {
            status: 200,
            body: {
                id: mediaId,
                filename: filenameOverride || basename(filePath),
                size: stats.size,
                contentType,
            },
        };
    }
    getMedia(id, thumbnail) {
        const media = getMediaById(id);
        if (!media)
            return { status: 404, body: new Blob([JSON.stringify({ error: "Media not found" })]) };
        const blob = thumbnail && media.thumbnail ? media.thumbnail : media.data;
        const buffer = blob.buffer.slice(blob.byteOffset, blob.byteOffset + blob.byteLength);
        const body = new Blob([buffer], { type: media.content_type });
        return { status: 200, body, contentType: media.content_type };
    }
    getInfo(id) {
        const info = getMediaInfoById(id);
        if (!info)
            return { status: 404, body: { error: "Media not found" } };
        return { status: 200, body: info };
    }
}
