import { describe, expect, test } from "bun:test";
import {
  handleAgentRespondRequest,
  handleThoughtVisibilityRequest,
  handleWorkspaceVisibilityRequest,
  type UiEndpointsContext,
} from "../../../../src/channels/web/endpoints/ui-endpoints.js";
import { createJsonResponder, jsonRequest } from "../helpers/http.js";

function createContext(overrides: Partial<UiEndpointsContext> = {}): UiEndpointsContext {
  let workspaceVisible = false;
  let workspaceShowHidden = false;

  return {
    json: createJsonResponder(),
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
    const req = jsonRequest("https://example.com/workspace/visibility", {
      visible: true,
      show_hidden: true,
    });

    const res = await handleWorkspaceVisibilityRequest(req, createContext());
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ status: "ok", visible: true, show_hidden: true });
  });

  test("thought visibility endpoint validates and sets panel state", async () => {
    let call: { turnId: string; panel: "thought" | "draft"; expanded: boolean } | null = null;
    const req = jsonRequest("https://example.com/agent/thought/visibility", {
      turn_id: "turn-1",
      panel: "draft",
      expanded: true,
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

  test("thought visibility endpoint rejects malformed object shapes", async () => {
    const badReq = new Request("https://example.com/agent/thought/visibility", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(null),
    });
    const badRes = await handleThoughtVisibilityRequest(badReq, createContext());
    expect(badRes.status).toBe(400);
    expect(await badRes.json()).toEqual({ error: "JSON body must be an object" });
  });

  test("agent respond endpoint validates request_id and delegates response", async () => {
    const badReq = jsonRequest("https://example.com/agent/respond", {});
    const badRes = await handleAgentRespondRequest(badReq, createContext());
    expect(badRes.status).toBe(400);
    expect(await badRes.json()).toEqual({ error: "Missing or invalid request_id" });

    const malformedReq = new Request("https://example.com/agent/respond", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(null),
    });
    const malformedRes = await handleAgentRespondRequest(malformedReq, createContext());
    expect(malformedRes.status).toBe(400);
    expect(await malformedRes.json()).toEqual({ error: "JSON body must be an object" });

    const req = jsonRequest("https://example.com/agent/respond", {
      request_id: "ui-1",
      outcome: { ok: true },
      chat_jid: "web:branch",
    });
    const res = await handleAgentRespondRequest(req, createContext({
      handleUiResponse: (requestId, outcome, chatJid) => {
        expect(requestId).toBe("ui-1");
        expect(outcome).toEqual({ ok: true });
        expect(chatJid).toBe("web:branch");
        return { status: "ok" };
      },
    }));

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ status: "ok" });
  });
});
