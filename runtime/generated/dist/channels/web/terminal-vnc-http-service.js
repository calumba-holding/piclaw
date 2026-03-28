import { checkCsrfOrigin as defaultCheckCsrfOrigin } from "./http/security.js";
export function createWebTerminalVncHttpService(channel, configs) {
    return new WebTerminalVncHttpService({
        ...configs,
        json: (payload, status = 200) => channel.json(payload, status),
        authGateway: channel.authGateway,
        terminalService: channel.terminalService,
        vncService: channel.vncService,
    });
}
export class WebTerminalVncHttpService {
    deps;
    constructor(deps) {
        this.deps = deps;
    }
    handleTerminalSession(req) {
        if (!this.deps.webRuntimeConfig.terminalEnabled) {
            return this.deps.json({ enabled: false, error: "Web terminal is disabled." }, 200);
        }
        const authEnabled = this.deps.authGateway.isAuthEnabled();
        if (authEnabled && !this.deps.authGateway.isAuthenticated(req)) {
            return this.deps.json({ error: "Unauthorized" }, 401);
        }
        const owner = this.deps.terminalService.resolveOwnerFromRequest(req, !authEnabled);
        if (!owner) {
            return this.deps.json({ error: "Unauthorized" }, 401);
        }
        return this.deps.json(this.deps.terminalService.getSessionInfo(owner));
    }
    handleVncSession(req) {
        const url = new URL(req.url);
        const targetId = url.searchParams.get("target")?.trim() || "";
        const authEnabled = this.deps.authGateway.isAuthEnabled();
        if (authEnabled && !this.deps.authGateway.isAuthenticated(req)) {
            return this.deps.json({ error: "Unauthorized" }, 401);
        }
        if (targetId && !this.deps.vncService.resolveTargetReference(targetId)) {
            return this.deps.json({ error: "Unknown or disallowed VNC target", ...this.deps.vncService.getSessionInfo() }, 404);
        }
        return this.deps.json(this.deps.vncService.getSessionInfo(targetId || null), 200);
    }
    async handleVncHandoff(req) {
        const url = new URL(req.url);
        const targetId = url.searchParams.get("target")?.trim() || "";
        if (!targetId) {
            return this.deps.json({ error: "Missing VNC target." }, 400);
        }
        const authEnabled = this.deps.authGateway.isAuthEnabled();
        if (authEnabled && !this.deps.authGateway.isAuthenticated(req)) {
            return this.deps.json({ error: "Unauthorized" }, 401);
        }
        if (!this.checkCsrfOrigin(req)) {
            return this.deps.json({ error: "Origin not allowed" }, 403);
        }
        if (!this.deps.vncService.resolveTargetReference(targetId)) {
            return this.deps.json({ error: "Unknown or disallowed VNC target", ...this.deps.vncService.getSessionInfo() }, 404);
        }
        const handoff = this.deps.vncService.createHandoffFromRequest(req, targetId, !authEnabled);
        if (!handoff) {
            return this.deps.json({ error: "No live VNC session is available to transfer." }, 409);
        }
        return this.deps.json({ ok: true, handoff }, 200);
    }
    checkCsrfOrigin(req) {
        return (this.deps.checkCsrfOrigin ?? defaultCheckCsrfOrigin)(req);
    }
}
