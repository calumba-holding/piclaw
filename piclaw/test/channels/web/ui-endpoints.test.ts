import { describe, expect, test } from "bun:test";
import {
  handleAgentRespondRequest,
  handleThoughtVisibilityRequest,
  handleWorkspaceVisibilityRequest,
  type UiEndpointsContext,
} from "../../../src/channels/web/ui-endpoints.js";

function createContext(overrides: Partial<UiEndpointsContext> = {}): UiEndpointsContext {
  let workspaceVisible = false;
  let workspaceShowHidden = false;

  return {
    json: (payload, status = 200) =>
      new Response(JSON.stringify(payload), {
        status,
        headers: { "Content-Type": "application/json" },
      }),
    getWorkspaceVisible: () => workspaceVisible,
    setWorkspaceVisible: (value) => {
      workspaceVisible = value;
    },
    getWorkspaceShowHidden: () => workspaceShowHidden,
    setWorkspaceShowHidden: (value) => {
      workspaceShowHidden = value;
    },
    setPanelExpanded: () => {},
    handleUiResponse: () => ({ status: "ok" }),
    ...overrides,
  };
}

describe("web ui endpoint helpers", () => {
  test("workspace visibility endpoint updates visible/show_hidden flags", async () => {
    const req = new Request("https://example.com/workspace/visibility", {
      method: "POST",
      body: JSON.stringify({ visible: true, show_hidden: true }),
      headers: { "Content-Type": "application/json" },
    });

    const res = await handleWorkspaceVisibilityRequest(req, createContext());
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ status: "ok", visible: true, show_hidden: true });
  });

  test("thought visibility endpoint validates and sets panel state", async () => {
    let call: { turnId: string; panel: "thought" | "draft"; expanded: boolean } | null = null;
    const req = new Request("https://example.com/agent/thought/visibility", {
      method: "POST",
      body: JSON.stringify({ turn_id: "turn-1", panel: "draft", expanded: true }),
      headers: { "Content-Type": "application/json" },
    });

    const res = await handleThoughtVisibilityRequest(req, createContext({
      setPanelExpanded: (turnId, panel, expanded) => {
        call = { turnId, panel, expanded };
      },
    }));

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ status: "ok", turn_id: "turn-1", panel: "draft", expanded: true });
    expect(call).toEqual({ turnId: "turn-1", panel: "draft", expanded: true });
  });

  test("agent respond endpoint validates request_id and delegates response", async () => {
    const badReq = new Request("https://example.com/agent/respond", {
      method: "POST",
      body: JSON.stringify({}),
      headers: { "Content-Type": "application/json" },
    });
    const badRes = await handleAgentRespondRequest(badReq, createContext());
    expect(badRes.status).toBe(400);
    expect(await badRes.json()).toEqual({ error: "Missing or invalid request_id" });

    const req = new Request("https://example.com/agent/respond", {
      method: "POST",
      body: JSON.stringify({ request_id: "ui-1", outcome: { ok: true } }),
      headers: { "Content-Type": "application/json" },
    });
    const res = await handleAgentRespondRequest(req, createContext({
      handleUiResponse: (requestId, outcome) => {
        expect(requestId).toBe("ui-1");
        expect(outcome).toEqual({ ok: true });
        return { status: "ok" };
      },
    }));

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ status: "ok" });
  });
});
