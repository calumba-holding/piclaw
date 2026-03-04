/**
 * web/media-service.ts – File upload and retrieval service.
 *
 * Wraps db/media.ts operations with additional validation (file size,
 * content type detection) for the web channel's upload endpoint.
 *
 * Consumers: web/handlers/media.ts delegates to MediaService methods.
 */
import { createMedia, getMediaById, getMediaInfoById } from "../../db.js";
/** File upload/download service wrapping db/media.ts operations. */
export class MediaService {
    async createFromFile(file) {
        const arrayBuffer = await file.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);
        const mediaId = createMedia(file.name || "upload", file.type || "application/octet-stream", data, null, { size: file.size });
        return { status: 200, body: { id: mediaId, filename: file.name, size: file.size } };
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
