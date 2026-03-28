/**
 * db/types.ts – TypeScript interfaces for database row shapes.
 *
 * These types mirror the SQLite table schemas defined in db/connection.ts and
 * are used by every module that reads or writes the database:
 *   - db/messages.ts (ChatInfo, InteractionRow, InteractionData)
 *   - db/media.ts (MediaRecord)
 *   - db/tool-outputs.ts (ToolOutputRecord)
 *   - channels/web/* (rendering interactions in the timeline)
 *   - agent-pool.ts (storing agent responses as interactions)
 *   - agent-control/handlers/* (info/search commands query interactions)
 */
export {};
