import type { WebChannel } from "../../web.js";
import { WorkspaceService } from "../workspace/service.js";

const workspaceService = new WorkspaceService();

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export function handleWorkspaceTree(_channel: WebChannel, req: Request): Response {
  const url = new URL(req.url);
  const result = workspaceService.getTree(
    url.searchParams.get("path"),
    url.searchParams.get("depth")
  );
  return jsonResponse(result.body, result.status);
}

export function handleWorkspaceFile(_channel: WebChannel, req: Request): Response {
  const url = new URL(req.url);
  const result = workspaceService.getFile(
    url.searchParams.get("path"),
    url.searchParams.get("max")
  );
  return jsonResponse(result.body, result.status);
}

export function handleWorkspaceRaw(_channel: WebChannel, req: Request): Response {
  const url = new URL(req.url);
  const result = workspaceService.getRaw(url.searchParams.get("path"));
  if (result.status !== 200) {
    return new Response(result.body as string, { status: result.status });
  }
  return new Response(result.body as Blob, {
    headers: { "Content-Type": result.contentType || "application/octet-stream" },
  });
}

export async function handleWorkspaceAttach(_channel: WebChannel, req: Request): Promise<Response> {
  let data: { path?: string };
  try {
    data = await req.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON" }, 400);
  }

  const result = workspaceService.attachFile(data.path || null);
  return jsonResponse(result.body, result.status);
}

export function startWorkspaceWatcher(channel: WebChannel): { close: () => Promise<void> } {
  return workspaceService.startWatcher((updates) => {
    if (!channel.workspaceVisible) return;
    channel.broadcastEvent("workspace_update", { updates });
  });
}
