/**
 * db/link-preview-image-cache.ts – metadata tracking for locally cached OG images.
 *
 * Stores mappings from external image URL -> local media row with TTL metadata.
 * The binary bytes live in the media table and are served via /media/:id.
 */
import { getDb } from "./connection.js";
import { deleteUnreferencedMedia } from "./media.js";
export function getLinkPreviewImageCache(sourceUrl) {
    const db = getDb();
    return db
        .prepare(`SELECT source_url, media_id, fetched_at, expires_at, last_used_at
         FROM link_preview_image_cache
        WHERE source_url = ?`)
        .get(sourceUrl);
}
export function upsertLinkPreviewImageCache(sourceUrl, mediaId, fetchedAt, expiresAt, lastUsedAt) {
    const db = getDb();
    const existing = getLinkPreviewImageCache(sourceUrl);
    db.prepare(`INSERT INTO link_preview_image_cache (source_url, media_id, fetched_at, expires_at, last_used_at)
     VALUES (?, ?, ?, ?, ?)
     ON CONFLICT(source_url) DO UPDATE SET
       media_id = excluded.media_id,
       fetched_at = excluded.fetched_at,
       expires_at = excluded.expires_at,
       last_used_at = excluded.last_used_at`).run(sourceUrl, mediaId, fetchedAt, expiresAt, lastUsedAt);
    return existing && existing.media_id !== mediaId ? [existing.media_id] : [];
}
export function touchLinkPreviewImageCache(sourceUrl, lastUsedAt) {
    const db = getDb();
    const result = db
        .prepare("UPDATE link_preview_image_cache SET last_used_at = ? WHERE source_url = ?")
        .run(lastUsedAt, sourceUrl);
    return Number(result.changes || 0) > 0;
}
export function purgeExpiredLinkPreviewImageCache(nowIso, limit = 32) {
    const db = getDb();
    const rows = db
        .prepare(`SELECT source_url, media_id
         FROM link_preview_image_cache
        WHERE expires_at <= ?
        ORDER BY expires_at ASC
        LIMIT ?`)
        .all(nowIso, limit);
    if (rows.length === 0)
        return { purgedEntries: 0, purgedMedia: 0 };
    const deleteStmt = db.prepare("DELETE FROM link_preview_image_cache WHERE source_url = ?");
    const mediaIds = [];
    for (const row of rows) {
        deleteStmt.run(row.source_url);
        mediaIds.push(row.media_id);
    }
    const purgedMedia = deleteUnreferencedMedia(mediaIds);
    return { purgedEntries: rows.length, purgedMedia };
}
