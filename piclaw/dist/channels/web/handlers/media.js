/**
 * web/handlers/media.ts – HTTP handlers for media upload and retrieval.
 *
 * Handles POST /media (upload) and GET /media/:id (download/thumbnail).
 *
 * Consumers: web/request-router.ts routes media paths here.
 */
import { MediaService } from "../media-service.js";
const mediaService = new MediaService();
/** Handle POST /media: file upload. */
export async function handleMediaUpload(channel, req) {
    let form;
    try {
        form = await req.formData();
    }
    catch {
        return channel.json({ error: "Invalid form data" }, 400);
    }
    const file = form.get("file");
    if (!(file instanceof File))
        return channel.json({ error: "Missing file" }, 400);
    const result = await mediaService.createFromFile(file);
    return channel.json(result.body, result.status);
}
/** Route media requests to upload, download, or info handlers. */
export function handleMedia(channel, id, thumbnail) {
    const result = mediaService.getMedia(id, thumbnail);
    if (result.status !== 200)
        return channel.json({ error: "Media not found" }, result.status);
    return new Response(result.body, {
        headers: {
            "Content-Type": result.contentType || "application/octet-stream",
        },
    });
}
/** Handle GET /media/:id/info: metadata query. */
export function handleMediaInfo(channel, id) {
    const result = mediaService.getInfo(id);
    return channel.json(result.body, result.status);
}
