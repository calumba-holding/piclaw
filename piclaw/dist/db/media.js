import { getDb } from "./connection.js";
export function attachMediaToMessage(messageRowId, mediaIds) {
    if (mediaIds.length === 0)
        return;
    const db = getDb();
    const stmt = db.prepare("INSERT OR IGNORE INTO message_media (message_rowid, media_id) VALUES (?, ?)");
    for (const mediaId of mediaIds) {
        stmt.run(messageRowId, mediaId);
    }
}
export function getMediaIdsForMessage(messageRowId) {
    const db = getDb();
    const rows = db
        .prepare("SELECT media_id FROM message_media WHERE message_rowid = ? ORDER BY media_id")
        .all(messageRowId);
    return rows.map((row) => row.media_id);
}
export function getMediaIdsForMessages(messageRowIds) {
    if (messageRowIds.length === 0)
        return [];
    const db = getDb();
    const placeholders = messageRowIds.map(() => "?").join(",");
    const rows = db
        .prepare(`SELECT DISTINCT media_id FROM message_media WHERE message_rowid IN (${placeholders})`)
        .all(...messageRowIds);
    return rows.map((row) => row.media_id);
}
export function deleteUnreferencedMedia(mediaIds) {
    if (mediaIds.length === 0)
        return 0;
    const db = getDb();
    const placeholders = mediaIds.map(() => "?").join(",");
    const res = db
        .prepare(`DELETE FROM media WHERE id IN (${placeholders}) AND id NOT IN (SELECT media_id FROM message_media)`)
        .run(...mediaIds);
    return Number(res.changes || 0);
}
export function createMedia(filename, contentType, data, thumbnail, metadata) {
    const db = getDb();
    const res = db
        .prepare(`INSERT INTO media (filename, content_type, data, thumbnail, metadata)
       VALUES (?, ?, ?, ?, ?)`)
        .run(filename, contentType, data, thumbnail, metadata ? JSON.stringify(metadata) : null);
    return Number(res.lastInsertRowid || 0);
}
export function getMediaById(id) {
    const db = getDb();
    const row = db
        .prepare("SELECT id, filename, content_type, data, thumbnail, metadata, created_at FROM media WHERE id = ?")
        .get(id);
    if (!row)
        return undefined;
    return {
        id: row.id,
        filename: row.filename,
        content_type: row.content_type,
        data: row.data,
        thumbnail: row.thumbnail,
        metadata: row.metadata ? JSON.parse(row.metadata) : null,
        created_at: row.created_at,
    };
}
export function getMediaInfoById(id) {
    const db = getDb();
    const row = db
        .prepare("SELECT id, filename, content_type, metadata, created_at FROM media WHERE id = ?")
        .get(id);
    if (!row)
        return undefined;
    return {
        id: row.id,
        filename: row.filename,
        content_type: row.content_type,
        metadata: row.metadata ? JSON.parse(row.metadata) : null,
        created_at: row.created_at,
    };
}
