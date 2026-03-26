import { spawn } from "node:child_process";
import { openSync, closeSync, readlinkSync, readdirSync, readFileSync } from "node:fs";
import { FFIType, dlopen } from "bun:ffi";
import { WORKSPACE_DIR } from "../../../core/config.js";
import { DEFAULT_WEB_USER_ID, getWebSession } from "../../../db.js";
import { getSessionTokenFromRequest } from "../session-auth.js";
const DEFAULT_COLS = 120;
const DEFAULT_ROWS = 30;
const TERMINAL_FONT_FAMILY = "FiraCode Nerd Font Mono";
const FALLBACK_TERMINAL_OWNER = {
    token: "web-terminal-local-default",
    userId: DEFAULT_WEB_USER_ID,
};
const IS_LINUX = process.platform === "linux";
// ioctl request code for setting terminal window size (Linux)
const TIOCSWINSZ = 0x5414;
/**
 * Lazy-loaded libc ioctl binding via Bun FFI.
 * Used to call ioctl(fd, TIOCSWINSZ, &winsize) for PTY resize.
 */
let _libc = null;
let _libcLoaded = false;
function getLibc() {
    if (_libcLoaded)
        return _libc;
    _libcLoaded = true;
    try {
        const lib = dlopen("libc.so.6", {
            ioctl: {
                args: [FFIType.i32, FFIType.u64, FFIType.ptr],
                returns: FFIType.i32,
            },
        });
        _libc = {
            ioctl: (fd, request, buf) => lib.symbols.ioctl(fd, request, buf),
        };
    }
    catch {
        /* expected: PTY resizing is optional when libc FFI is unavailable. */
        _libc = null;
    }
    return _libc;
}
/**
 * Resize a PTY device via ioctl(TIOCSWINSZ).
 *
 * Opens the PTS device path, sets the kernel window size via the winsize
 * struct, then closes the fd. This is the same mechanism that terminal
 * emulators and Docker's exec resize API use.
 */
function resizePty(ptsPath, cols, rows) {
    const libc = getLibc();
    if (!libc)
        return false;
    let fd = -1;
    try {
        // struct winsize { unsigned short ws_row, ws_col, ws_xpixel, ws_ypixel; }
        const winsize = new Uint16Array([rows, cols, 0, 0]);
        fd = openSync(ptsPath, 0); // O_RDONLY
        return libc.ioctl(fd, TIOCSWINSZ, winsize) === 0;
    }
    catch {
        /* expected: PTY path can disappear during resize races. */
        return false;
    }
    finally {
        if (fd >= 0) {
            try {
                closeSync(fd);
            }
            catch { /* expected: fd may already be closed during PTY teardown. */ }
        }
    }
}
/**
 * Find child PIDs of a given parent by reading /proc.
 */
function getChildPids(parentPid) {
    if (!IS_LINUX)
        return [];
    try {
        return readdirSync("/proc")
            .filter((entry) => /^\d+$/.test(entry))
            .map((entry) => {
            try {
                const stat = readFileSync(`/proc/${entry}/stat`, "utf8");
                // Format: pid (comm) state ppid ...
                const match = stat.match(/^\d+\s+\(.*?\)\s+\S+\s+(\d+)/);
                return match && parseInt(match[1], 10) === parentPid ? parseInt(entry, 10) : 0;
            }
            catch {
                /* expected: /proc entries may vanish while scanning child processes. */
                return 0;
            }
        })
            .filter((pid) => pid > 0);
    }
    catch {
        /* expected: /proc traversal is unavailable or racing on non-Linux/teardown paths. */
        return [];
    }
}
/**
 * Find the PTS device path for the shell spawned inside `script`.
 *
 * The process tree is: piclaw → script → bash
 * We walk child PIDs and check /proc/<pid>/fd/0 for a /dev/pts/* link.
 */
function findChildPts(parentPid) {
    if (!IS_LINUX)
        return null;
    const childPids = getChildPids(parentPid);
    for (const cpid of childPids) {
        try {
            const target = readlinkSync(`/proc/${cpid}/fd/0`);
            if (target.startsWith("/dev/pts/")) {
                return { ptsPath: target, childPids };
            }
        }
        catch {
            /* expected: child may exit before /proc/<pid>/fd/0 can be inspected. */
        }
    }
    return null;
}
function normalizeChunk(chunk) {
    if (typeof chunk === "string")
        return chunk;
    return Buffer.from(chunk).toString("utf8");
}
function defaultSpawnProcess(cwd) {
    return spawn("/usr/bin/script", ["-qf", "-c", "/usr/bin/bash -i", "/dev/null"], {
        cwd,
        env: {
            ...process.env,
            TERM: process.env.TERM || "xterm-256color",
            COLORTERM: process.env.COLORTERM || "truecolor",
            CLICOLOR: process.env.CLICOLOR || "1",
            FORCE_COLOR: process.env.FORCE_COLOR || "1",
            HOME: process.env.HOME || "/home/agent",
            COLUMNS: String(DEFAULT_COLS),
            LINES: String(DEFAULT_ROWS),
        },
        stdio: ["pipe", "pipe", "pipe"],
    });
}
export class TerminalSessionService {
    sessions = new Map();
    spawnProcess;
    constructor(options = {}) {
        this.spawnProcess = options.spawnProcess ?? defaultSpawnProcess;
    }
    resolveOwnerFromRequest(req, allowUnauthenticated = false) {
        const token = getSessionTokenFromRequest(req);
        if (token) {
            const session = getWebSession(token);
            if (session) {
                return { kind: "terminal", token, userId: session.user_id };
            }
        }
        return allowUnauthenticated ? { kind: "terminal", ...FALLBACK_TERMINAL_OWNER } : null;
    }
    getSessionInfo(owner) {
        const session = this.sessions.get(owner.token);
        return {
            enabled: true,
            transport: "websocket",
            ws_path: "/terminal/ws",
            cwd: WORKSPACE_DIR,
            shell: "/usr/bin/bash -i",
            font_family: TERMINAL_FONT_FAMILY,
            active: Boolean(session),
            connected_clients: session?.clients.size ?? 0,
        };
    }
    attachClient(ws) {
        const owner = ws.data;
        const session = this.ensureSession(owner);
        session.clients.add(ws);
        this.send(ws, {
            type: "session",
            cwd: session.cwd,
            cols: session.cols,
            rows: session.rows,
            font_family: TERMINAL_FONT_FAMILY,
        });
    }
    handleMessage(ws, rawMessage) {
        const session = this.sessions.get(ws.data.token);
        if (!session)
            return;
        const messageText = typeof rawMessage === "string" ? rawMessage : Buffer.from(rawMessage).toString("utf8");
        const payload = this.parseClientMessage(messageText);
        if (payload.type === "input") {
            if (typeof payload.data === "string" && payload.data.length > 0) {
                session.process.stdin.write(payload.data);
            }
            return;
        }
        if (payload.type === "resize") {
            const cols = Number.isFinite(payload.cols) ? Math.max(20, Math.min(400, Math.floor(payload.cols))) : session.cols;
            const rows = Number.isFinite(payload.rows) ? Math.max(5, Math.min(200, Math.floor(payload.rows))) : session.rows;
            if (cols !== session.cols || rows !== session.rows) {
                session.cols = cols;
                session.rows = rows;
                this.resizeSession(session, cols, rows);
            }
            return;
        }
    }
    detachClient(ws) {
        const session = this.sessions.get(ws.data.token);
        if (!session)
            return;
        session.clients.delete(ws);
    }
    parseClientMessage(messageText) {
        try {
            return JSON.parse(messageText);
        }
        catch {
            /* expected: plain text input frames are not JSON control messages. */
            return { type: "input", data: messageText };
        }
    }
    shutdown() {
        for (const session of this.sessions.values()) {
            try {
                session.process.kill("SIGHUP");
            }
            catch {
                /* expected: terminal process may already be gone during shutdown. */
            }
        }
        this.sessions.clear();
    }
    /**
     * Resize a terminal session's PTY via ioctl(TIOCSWINSZ) + SIGWINCH.
     *
     * On first resize, discovers the PTS device path by walking /proc for
     * the child shell's fd/0 link. Once found, caches it for subsequent
     * resizes. Sends SIGWINCH to all child processes after updating the
     * kernel window size.
     */
    resizeSession(session, cols, rows) {
        const pid = session.process.pid;
        if (!pid)
            return;
        if (!session.ptsPath) {
            const result = findChildPts(pid);
            if (result)
                session.ptsPath = result.ptsPath;
        }
        if (!session.ptsPath)
            return;
        if (resizePty(session.ptsPath, cols, rows)) {
            // Send SIGWINCH to child processes so they re-query the terminal size
            for (const cpid of getChildPids(pid)) {
                try {
                    process.kill(cpid, "SIGWINCH");
                }
                catch { /* expected: child may exit between pid scan and signal delivery. */ }
            }
        }
    }
    ensureSession(owner) {
        const existing = this.sessions.get(owner.token);
        if (existing)
            return existing;
        const proc = this.spawnProcess(WORKSPACE_DIR);
        const session = {
            owner,
            process: proc,
            clients: new Set(),
            createdAt: new Date().toISOString(),
            cwd: WORKSPACE_DIR,
            cols: DEFAULT_COLS,
            rows: DEFAULT_ROWS,
            ptsPath: null,
        };
        proc.stdout.on("data", (chunk) => {
            this.broadcast(session, { type: "output", data: normalizeChunk(chunk) });
        });
        proc.stderr.on("data", (chunk) => {
            this.broadcast(session, { type: "output", data: normalizeChunk(chunk) });
        });
        proc.on("exit", (code, signal) => {
            this.broadcast(session, { type: "exit", code: code ?? null, signal: signal ?? null });
            this.sessions.delete(owner.token);
        });
        // Discover PTS device path after a short delay to let `script` allocate the PTY,
        // then set the initial window size via ioctl so the shell starts with correct dimensions.
        if (IS_LINUX && proc.pid) {
            setTimeout(() => {
                if (!proc.pid)
                    return;
                const result = findChildPts(proc.pid);
                if (result) {
                    session.ptsPath = result.ptsPath;
                    resizePty(result.ptsPath, session.cols, session.rows);
                    for (const cpid of result.childPids) {
                        try {
                            process.kill(cpid, "SIGWINCH");
                        }
                        catch { /* expected: child may exit before the delayed resize signal lands. */ }
                    }
                }
            }, 300);
        }
        this.sessions.set(owner.token, session);
        return session;
    }
    broadcast(session, payload) {
        const encoded = JSON.stringify(payload);
        for (const client of Array.from(session.clients)) {
            this.send(client, encoded, true);
        }
    }
    send(ws, payload, preEncoded = false) {
        try {
            ws.send(preEncoded ? payload : JSON.stringify(payload));
        }
        catch {
            /* expected: browser websocket may close between broadcast iteration and send. */
        }
    }
}
