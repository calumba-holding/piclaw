/**
 * channels/web/ui-endpoints.ts – workspace/thought/ui-response endpoint helpers.
 */
import { parseJsonObjectRequest } from "./json-body.js";
import { errorJson, okJson } from "./http/http-utils.js";
/** POST /workspace/visibility helper. */
export async function handleWorkspaceVisibilityRequest(req, ctx) {
    let data;
    try {
        data = await req.json();
    }
    catch {
        return errorJson("Invalid JSON", 400);
    }
    if (typeof data.visible === "boolean") {
        ctx.setWorkspaceVisible(data.visible);
    }
    else {
        ctx.setWorkspaceVisible(Boolean(data.visible));
    }
    if (typeof data.show_hidden === "boolean") {
        ctx.setWorkspaceShowHidden(data.show_hidden);
    }
    else if (typeof data.showHidden === "boolean") {
        ctx.setWorkspaceShowHidden(data.showHidden);
    }
    return okJson({
        visible: ctx.getWorkspaceVisible(),
        show_hidden: ctx.getWorkspaceShowHidden(),
    });
}
/** POST /agent/thought/visibility helper. */
export async function handleThoughtVisibilityRequest(req, ctx) {
    const parsed = await parseJsonObjectRequest(req);
    if (!parsed.ok)
        return errorJson(parsed.error, 400);
    const data = parsed.payload;
    const turnId = (data.turn_id || data.turnId || "").trim();
    const panel = data.panel === "draft" ? "draft" : "thought";
    const expanded = Boolean(data.expanded);
    if (!turnId)
        return errorJson("Missing turn_id", 400);
    ctx.setPanelExpanded(turnId, panel, expanded);
    return okJson({ turn_id: turnId, panel, expanded });
}
/** POST /agent/respond helper. */
export async function handleAgentRespondRequest(req, ctx) {
    const parsed = await parseJsonObjectRequest(req);
    if (!parsed.ok)
        return errorJson(parsed.error, 400);
    const data = parsed.payload;
    if (!data.request_id || typeof data.request_id !== "string") {
        return errorJson("Missing or invalid request_id", 400);
    }
    if (data.request_id.length > 256) {
        return errorJson("request_id too long", 400);
    }
    const status = ctx.handleUiResponse(data.request_id, data.outcome, data.chat_jid);
    return ctx.json(status);
}
