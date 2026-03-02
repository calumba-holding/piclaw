import { getDb } from "./connection.js";
import type { MediaRecord } from "./types.js";

export function attachMediaToMessage(messageRowId: number, mediaIds: number[]): void {
  if (mediaIds.length === 0) return;
  const db = getDb();
  const stmt = db.prepare("INSERT OR IGNORE INTO message_media (message_rowid, media_id) VALUES (?, ?)");
  for (const mediaId of mediaIds) {
    stmt.run(messageRowId, mediaId);
  }
}

export function getMediaIdsForMessage(messageRowId: number): number[] {
  const db = getDb();
  const rows = db
    .prepare("SELECT media_id FROM message_media WHERE message_rowid = ? ORDER BY media_id")
    .all(messageRowId) as Array<{ media_id: number }>;
  return rows.map((row) => row.media_id);
}

export function getMediaIdsForMessages(messageRowIds: number[]): number[] {
  if (messageRowIds.length === 0) return [];
  const db = getDb();
  const placeholders = messageRowIds.map(() => "?").join(",");
  const rows = db
    .prepare(`SELECT DISTINCT media_id FROM message_media WHERE message_rowid IN (${placeholders})`)
    .all(...messageRowIds) as Array<{ media_id: number }>;
  return rows.map((row) => row.media_id);
}

export function deleteUnreferencedMedia(mediaIds: number[]): number {
  if (mediaIds.length === 0) return 0;
  const db = getDb();
  const placeholders = mediaIds.map(() => "?").join(",");
  const res = db
    .prepare(`DELETE FROM media WHERE id IN (${placeholders}) AND id NOT IN (SELECT media_id FROM message_media)`)
    .run(...mediaIds);
  return Number(res.changes || 0);
}

export function createMedia(
  filename: string,
  contentType: string,
  data: Uint8Array,
  thumbnail: Uint8Array | null,
  metadata: Record<string, any> | null
): number {
  const db = getDb();
  const res = db
    .prepare(
      `INSERT INTO media (filename, content_type, data, thumbnail, metadata)
       VALUES (?, ?, ?, ?, ?)`
    )
    .run(filename, contentType, data, thumbnail, metadata ? JSON.stringify(metadata) : null);
  return Number(res.lastInsertRowid || 0);
}

export function getMediaById(id: number): MediaRecord | undefined {
  const db = getDb();
  const row = db
    .prepare("SELECT id, filename, content_type, data, thumbnail, metadata, created_at FROM media WHERE id = ?")
    .get(id) as {
      id: number;
      filename: string;
      content_type: string;
      data: Uint8Array;
      thumbnail: Uint8Array | null;
      metadata: string | null;
      created_at: string;
    } | undefined;
  if (!row) return undefined;
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

export function getMediaInfoById(id: number): Omit<MediaRecord, "data" | "thumbnail"> | undefined {
  const db = getDb();
  const row = db
    .prepare("SELECT id, filename, content_type, metadata, created_at FROM media WHERE id = ?")
    .get(id) as {
      id: number;
      filename: string;
      content_type: string;
      metadata: string | null;
      created_at: string;
    } | undefined;
  if (!row) return undefined;
  return {
    id: row.id,
    filename: row.filename,
    content_type: row.content_type,
    metadata: row.metadata ? JSON.parse(row.metadata) : null,
    created_at: row.created_at,
  };
}
