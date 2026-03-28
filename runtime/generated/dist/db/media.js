/**
 * db/media.ts – CRUD operations for the `media` and `message_media` tables.
 *
 * Manages binary file storage (images, documents, attachments) uploaded via
 * the web channel. Each media record can be linked to one or more messages
 * through the `message_media` join table.
 *
 * Consumers:
 *   - db/messages.ts uses attach/get/delete helpers when storing or removing
 *     messages that carry media attachments.
 *   - channels/web/media-service.ts calls createMedia() when handling uploads.
 *   - channels/web/handlers/media.ts calls getMediaById() to serve files.
 *   - agent-pool/attachments.ts uses getMediaInfoById() to describe
 *     attachments in the agent's context window.
 */
import { getDb } from "./connection.js";
/**
 * Link a set of media records to a message row.
 * Called by db/messages.ts after inserting/updating a message with attachments.
 */
export function attachMediaToMessage(messageRowId, mediaIds) {
    if (mediaIds.length === 0)
        return;
    const db = getDb();
    const stmt = db.prepare("INSERT OR IGNORE INTO message_media (message_rowid, media_id) VALUES (?, ?)");
    for (const mediaId of mediaIds) {
        stmt.run(messageRowId, mediaId);
    }
    // Extract searchable text from text-based media (SVG, markdown, plain text)
    // and append it to the FTS index so media content is full-text searchable.
    appendMediaTextToFts(db, messageRowId, mediaIds);
}
/**
 * Return the sorted list of media IDs attached to a single message.
 * Called by buildInteraction() in db/messages.ts.
 */
export function getMediaIdsForMessage(messageRowId) {
    const db = getDb();
    const rows = db
        .prepare("SELECT media_id FROM message_media WHERE message_rowid = ? ORDER BY media_id")
        .all(messageRowId);
    return rows.map((row) => row.media_id);
}
/**
 * Return the distinct set of media IDs attached to any of the given message rows.
 * Used by deleteThreadByRowId() in db/messages.ts before bulk deletion.
 */
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
/**
 * Delete media records that are no longer referenced by any message.
 * Called after message deletion to clean up orphaned blobs.
 * Returns the number of media records deleted.
 */
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
/**
 * Insert a new media record (file upload) and return its auto-increment ID.
 * Called by channels/web/media-service.ts on file upload.
 */
export function createMedia(filename, contentType, data, thumbnail, metadata) {
    const db = getDb();
    const res = db
        .prepare(`INSERT INTO media (filename, content_type, data, thumbnail, metadata)
       VALUES (?, ?, ?, ?, ?)`)
        .run(filename, contentType, data, thumbnail, metadata ? JSON.stringify(metadata) : null);
    return Number(res.lastInsertRowid || 0);
}
/**
 * Fetch a full media record (including binary data) by ID.
 * Used by channels/web/handlers/media.ts to serve file downloads.
 */
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
/**
 * Fetch media metadata (without the binary data/thumbnail blobs) by ID.
 * Used by agent-pool/attachments.ts to describe files in the agent prompt
 * without loading potentially large blobs into memory.
 */
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
// ── FTS text extraction for media ────────────────────────────────────────
/** Content types whose text content should be indexed alongside the message. */
const FTS_INDEXABLE_TYPES = new Set([
    "image/svg+xml",
    "text/markdown",
    "text/plain",
    "text/html",
    "text/csv",
    "text/xml",
    "application/xml",
    "application/json",
]);
function isTextIndexable(contentType) {
    return FTS_INDEXABLE_TYPES.has(contentType) || contentType.startsWith("text/");
}
/** Strip XML/HTML/SVG tags and return only the text content. */
function stripTags(text) {
    return text
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}
/**
 * Extract readable text from media blobs and append to the message's FTS entry.
 * Called by attachMediaToMessage() after linking media to a message.
 */
function appendMediaTextToFts(db, messageRowId, mediaIds) {
    const placeholders = mediaIds.map(() => "?").join(",");
    const rows = db
        .prepare(`SELECT content_type, data FROM media WHERE id IN (${placeholders})`)
        .all(...mediaIds);
    const textParts = [];
    for (const row of rows) {
        if (!isTextIndexable(row.content_type))
            continue;
        try {
            const raw = new TextDecoder().decode(row.data);
            const text = row.content_type.includes("svg") ||
                row.content_type.includes("html") ||
                row.content_type.includes("xml")
                ? stripTags(raw)
                : raw;
            if (text.length > 0 && text.length < 100_000) {
                textParts.push(text);
            }
        }
        catch {
            // skip non-decodable blobs
        }
    }
    if (textParts.length === 0)
        return;
    const msg = db
        .prepare("SELECT content, chat_jid, sender, sender_name, timestamp, is_bot_message FROM messages WHERE rowid = ?")
        .get(messageRowId);
    if (!msg)
        return;
    const combined = msg.content + "\n\n" + textParts.join("\n");
    // FTS5 content-sync: delete old entry, insert updated one
    db.prepare("INSERT INTO messages_fts(messages_fts, rowid, content, chat_jid, sender, sender_name, timestamp, is_bot_message) VALUES ('delete', ?, ?, ?, ?, ?, ?, ?)").run(messageRowId, msg.content, msg.chat_jid, msg.sender, msg.sender_name, msg.timestamp, msg.is_bot_message);
    db.prepare("INSERT INTO messages_fts(rowid, content, chat_jid, sender, sender_name, timestamp, is_bot_message) VALUES (?, ?, ?, ?, ?, ?, ?)").run(messageRowId, combined, msg.chat_jid, msg.sender, msg.sender_name, msg.timestamp, msg.is_bot_message);
}
