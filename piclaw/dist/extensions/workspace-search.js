/**
 * workspace-search – indexes workspace notes + skills into SQLite FTS and exposes a search tool.
 */
import { Type } from "@sinclair/typebox";
import { searchWorkspace } from "../workspace-search.js";
const WorkspaceSearchSchema = Type.Object({
    query: Type.String({ description: "FTS query text (matches workspace content)." }),
    scope: Type.Optional(Type.String({ description: "Scope to search: notes|skills|all (default all)." })),
    limit: Type.Optional(Type.Integer({ description: "Max results (1-50).", minimum: 1, maximum: 50 })),
    offset: Type.Optional(Type.Integer({ description: "Offset for pagination.", minimum: 0 })),
    refresh: Type.Optional(Type.Boolean({ description: "Re-index notes/skills before searching (default true)." })),
    max_kb: Type.Optional(Type.Integer({ description: "Max file size (KB) to index (default 512)." })),
});
async function execute(_toolCallId, params, _signal, _onUpdate, _ctx) {
    const { rows, limit, offset, error } = await searchWorkspace({
        query: params.query,
        scope: params.scope,
        limit: params.limit,
        offset: params.offset,
        refresh: params.refresh,
        max_kb: params.max_kb,
    });
    if (error) {
        return { content: [{ type: "text", text: error }], details: { count: 0, results: [] } };
    }
    if (!rows.length) {
        return { content: [{ type: "text", text: "No matching workspace files found." }], details: { count: 0, results: [] } };
    }
    const header = `Found ${rows.length} file${rows.length === 1 ? "" : "s"} (limit ${limit}, offset ${offset}).`;
    const lines = rows.map((row) => `• ${row.path} — ${row.snippet}`);
    return { content: [{ type: "text", text: `${header}\n${lines.join("\n")}` }], details: { count: rows.length, results: rows } };
}
export const workspaceSearch = (api) => {
    api.registerTool({
        name: "search_workspace",
        label: "search_workspace",
        description: "Search indexed workspace content (notes + skills by default).",
        parameters: WorkspaceSearchSchema,
        execute,
    });
};
