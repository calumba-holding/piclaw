import { describe, expect, test } from "bun:test";

import {
  WebTerminalVncHttpService,
  type WebTerminalVncHttpServiceDeps,
} from "../../../src/channels/web/terminal-vnc-http-service.js";

function json(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function createRequest(path: string, init: RequestInit = {}): Request {
  return new Request(`http://localhost${path}`, {
    headers: {
      origin: "http://localhost",
      host: "localhost",
      ...(init.headers || {}),
    },
    ...init,
  });
}

function createFixture(overrides: Partial<WebTerminalVncHttpServiceDeps> = {}) {
  const state = {
    authChecks: [] as string[],
    terminalResolveCalls: [] as boolean[],
    terminalSessionInfoOwners: [] as Array<{ token: string; userId: string }>,
    vncResolveCalls: [] as string[],
    vncSessionInfoCalls: [] as Array<string | null | undefined>,
    vncHandoffCalls: [] as Array<{ targetId: string; allowUnauthenticated: boolean }>,
    csrfChecks: [] as string[],
  };

  const terminalOwner = { kind: "terminal" as const, token: "terminal-token", userId: "user-1" };
  const vncTarget = { id: "desk", label: "Desk", host: "10.0.0.1", port: 5901 };
  const handoff = { token: "handoff-1", expires_at: "2026-03-27T00:00:00.000Z" };

  const deps: WebTerminalVncHttpServiceDeps = {
    webRuntimeConfig: {
      terminalEnabled: true,
    },
    json,
    authGateway: {
      isAuthEnabled: () => {
        state.authChecks.push("enabled");
        return false;
      },
      isAuthenticated: () => {
        state.authChecks.push("authenticated");
        return true;
      },
    },
    terminalService: {
      resolveOwnerFromRequest: (_req, allowUnauthenticated = false) => {
        state.terminalResolveCalls.push(allowUnauthenticated);
        return terminalOwner;
      },
      getSessionInfo: (owner) => {
        state.terminalSessionInfoOwners.push({ token: owner.token, userId: owner.userId });
        return { enabled: true, transport: "websocket", ws_path: "/terminal/ws", owner: owner.token };
      },
    },
    vncService: {
      resolveTargetReference: (targetId) => {
        state.vncResolveCalls.push(targetId);
        return targetId === vncTarget.id ? vncTarget : null;
      },
      getSessionInfo: (targetId) => {
        state.vncSessionInfoCalls.push(targetId);
        return {
          enabled: true,
          transport: "websocket",
          ws_path: "/vnc/ws",
          targets: [{ id: vncTarget.id, label: vncTarget.label, readOnly: false }],
          ...(targetId ? { target: { id: targetId, label: targetId, read_only: false, direct_connect: false } } : {}),
        };
      },
      createHandoffFromRequest: (_req, targetId, allowUnauthenticated = false) => {
        state.vncHandoffCalls.push({ targetId, allowUnauthenticated });
        return targetId === vncTarget.id ? handoff : null;
      },
    },
    checkCsrfOrigin: (req) => {
      state.csrfChecks.push(new URL(req.url).pathname);
      return true;
    },
    ...overrides,
  };

  return {
    state,
    terminalOwner,
    vncTarget,
    handoff,
    service: new WebTerminalVncHttpService(deps),
  };
}

describe("web terminal/VNC HTTP service", () => {
  test("terminal session preserves auth gating and owner/session-info delegation", async () => {
    const disabled = createFixture({
      webRuntimeConfig: { terminalEnabled: false },
    });
    const disabledResponse = disabled.service.handleTerminalSession(createRequest("/terminal/session"));
    expect(disabledResponse.status).toBe(200);
    expect(await disabledResponse.json()).toEqual({ enabled: false, error: "Web terminal is disabled." });

    const unauthenticated = createFixture({
      authGateway: {
        isAuthEnabled: () => true,
        isAuthenticated: () => false,
      },
    });
    expect(unauthenticated.service.handleTerminalSession(createRequest("/terminal/session")).status).toBe(401);
    expect(unauthenticated.state.terminalResolveCalls).toEqual([]);

    const fixture = createFixture();
    const response = fixture.service.handleTerminalSession(createRequest("/terminal/session"));
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      enabled: true,
      transport: "websocket",
      ws_path: "/terminal/ws",
      owner: "terminal-token",
    });
    expect(fixture.state.authChecks).toEqual(["enabled"]);
    expect(fixture.state.terminalResolveCalls).toEqual([true]);
    expect(fixture.state.terminalSessionInfoOwners).toEqual([{ token: "terminal-token", userId: "user-1" }]);
  });

  test("VNC session preserves auth gating, target validation, and response shaping", async () => {
    const unauthenticated = createFixture({
      authGateway: {
        isAuthEnabled: () => true,
        isAuthenticated: () => false,
      },
    });
    expect(unauthenticated.service.handleVncSession(createRequest("/vnc/session?target=desk")).status).toBe(401);
    expect(unauthenticated.state.vncResolveCalls).toEqual([]);

    const unknownTarget = createFixture();
    const unknownResponse = unknownTarget.service.handleVncSession(createRequest("/vnc/session?target=unknown"));
    expect(unknownResponse.status).toBe(404);
    expect(await unknownResponse.json()).toEqual({
      error: "Unknown or disallowed VNC target",
      enabled: true,
      transport: "websocket",
      ws_path: "/vnc/ws",
      targets: [{ id: "desk", label: "Desk", readOnly: false }],
    });
    expect(unknownTarget.state.vncResolveCalls).toEqual(["unknown"]);
    expect(unknownTarget.state.vncSessionInfoCalls).toEqual([undefined]);

    const fixture = createFixture();
    const response = fixture.service.handleVncSession(createRequest("/vnc/session?target=desk"));
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      enabled: true,
      transport: "websocket",
      ws_path: "/vnc/ws",
      targets: [{ id: "desk", label: "Desk", readOnly: false }],
      target: { id: "desk", label: "desk", read_only: false, direct_connect: false },
    });
    expect(fixture.state.authChecks).toEqual(["enabled"]);
    expect(fixture.state.vncResolveCalls).toEqual(["desk"]);
    expect(fixture.state.vncSessionInfoCalls).toEqual(["desk"]);
  });

  test("VNC handoff preserves auth, CSRF, target validation, and transfer behavior", async () => {
    const missingTarget = createFixture();
    expect((await missingTarget.service.handleVncHandoff(createRequest("/vnc/handoff", { method: "POST" }))).status).toBe(400);
    expect(missingTarget.state.csrfChecks).toEqual([]);

    const unauthenticated = createFixture({
      authGateway: {
        isAuthEnabled: () => true,
        isAuthenticated: () => false,
      },
    });
    expect((await unauthenticated.service.handleVncHandoff(createRequest("/vnc/handoff?target=desk", { method: "POST" }))).status).toBe(401);
    expect(unauthenticated.state.csrfChecks).toEqual([]);

    const csrfBlocked = createFixture({
      checkCsrfOrigin: () => false,
    });
    expect((await csrfBlocked.service.handleVncHandoff(createRequest("/vnc/handoff?target=desk", { method: "POST" }))).status).toBe(403);
    expect(csrfBlocked.state.vncResolveCalls).toEqual([]);
    expect(csrfBlocked.state.vncHandoffCalls).toEqual([]);

    const unknownTarget = createFixture();
    const unknownResponse = await unknownTarget.service.handleVncHandoff(createRequest("/vnc/handoff?target=unknown", { method: "POST" }));
    expect(unknownResponse.status).toBe(404);
    expect(await unknownResponse.json()).toEqual({
      error: "Unknown or disallowed VNC target",
      enabled: true,
      transport: "websocket",
      ws_path: "/vnc/ws",
      targets: [{ id: "desk", label: "Desk", readOnly: false }],
    });
    expect(unknownTarget.state.vncResolveCalls).toEqual(["unknown"]);
    expect(unknownTarget.state.vncHandoffCalls).toEqual([]);

    const noLiveSession = createFixture({
      vncService: {
        resolveTargetReference: (targetId) => {
          noLiveSession.state.vncResolveCalls.push(targetId);
          return targetId === noLiveSession.vncTarget.id ? noLiveSession.vncTarget : null;
        },
        getSessionInfo: (targetId) => {
          noLiveSession.state.vncSessionInfoCalls.push(targetId);
          return {
            enabled: true,
            transport: "websocket",
            ws_path: "/vnc/ws",
            targets: [{ id: noLiveSession.vncTarget.id, label: noLiveSession.vncTarget.label, readOnly: false }],
          };
        },
        createHandoffFromRequest: (_req, targetId, allowUnauthenticated = false) => {
          noLiveSession.state.vncHandoffCalls.push({ targetId, allowUnauthenticated });
          return null;
        },
      },
    });
    expect((await noLiveSession.service.handleVncHandoff(createRequest("/vnc/handoff?target=desk", { method: "POST" }))).status).toBe(409);
    expect(noLiveSession.state.vncHandoffCalls).toEqual([{ targetId: "desk", allowUnauthenticated: true }]);

    const fixture = createFixture();
    const response = await fixture.service.handleVncHandoff(createRequest("/vnc/handoff?target=desk", { method: "POST" }));
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true, handoff: fixture.handoff });
    expect(fixture.state.authChecks).toEqual(["enabled"]);
    expect(fixture.state.csrfChecks).toEqual(["/vnc/handoff"]);
    expect(fixture.state.vncResolveCalls).toEqual(["desk"]);
    expect(fixture.state.vncHandoffCalls).toEqual([{ targetId: "desk", allowUnauthenticated: true }]);
  });
});
