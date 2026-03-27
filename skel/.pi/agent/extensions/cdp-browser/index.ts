/**
 * CDP Browser Control Extension for pi
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Single-file, cross-platform extension for controlling any Chromium-based
 * browser (Edge, Chrome, Chromium) via the Chrome DevTools Protocol.
 * Zero external dependencies — uses only Bun built-ins (WebSocket, fetch).
 *
 * ── Architecture ─────────────────────────────────────────────────────
 *
 *   Bun WebSocket   → CDP WebSocket connection to browser tabs
 *   Bun fetch       → CDP REST endpoints (/json, /json/version, /json/new)
 *   node:fs         → Screenshot file output
 *   node:child_process → Browser auto-launch if none running
 *
 * ── Browser discovery (cross-platform) ───────────────────────────────
 *
 * On first use, if no CDP port is found, the extension searches for an
 * installed browser in preference order: Edge → Chrome → Chromium.
 *
 *   Windows:
 *     Program Files (x86)\Microsoft\Edge\Application\msedge.exe
 *     Program Files\Google\Chrome\Application\chrome.exe
 *
 *   macOS:
 *     /Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge
 *     /Applications/Google Chrome.app/Contents/MacOS/Google Chrome
 *     /Applications/Chromium.app/Contents/MacOS/Chromium
 *
 *   Linux:
 *     /usr/bin/microsoft-edge[-stable]
 *     /usr/bin/google-chrome[-stable]
 *     /usr/bin/chromium[-browser], /snap/bin/chromium
 *
 * If found, it launches with --remote-debugging-port=9224 and waits
 * for the CDP endpoint to become available (up to 10 seconds).
 *
 * ── Tools at a glance ────────────────────────────────────────────────
 *
 *   cdp_browser action=tabs
 *     List all open browser tabs with their titles and URLs.
 *     Also shows the CDP port and browser version.
 *     Use this first to see what's available.
 *
 *   cdp_browser action=eval expr="document.title" match="teams"
 *     Evaluate a JavaScript expression in a tab matched by title/URL
 *     substring. Returns the result as JSON. Supports awaitPromise
 *     for async expressions. Use for reading page state, extracting
 *     data, or triggering actions inside web apps.
 *
 *   cdp_browser action=navigate url="https://..." match="teams"
 *     Navigate an existing tab to a new URL. The match parameter
 *     selects which tab to navigate. If omitted, uses the first tab.
 *
 *   cdp_browser action=open url="https://..."
 *     Open a new browser tab at the given URL via the /json/new
 *     CDP endpoint. The tab opens in the existing browser instance.
 *
 *   cdp_browser action=close match="outlook"
 *     Close all tabs whose title or URL contains the match string.
 *     Returns the list of closed tab titles.
 *
 *   cdp_browser action=click selector="button.submit" match="teams"
 *     Click a DOM element by CSS selector inside a matched tab.
 *     Uses element.click() via Runtime.evaluate. For clicking
 *     outside the DOM (native UI), use the win_click tool instead.
 *
 *   cdp_browser action=screenshot match="teams" outPath="shot.png"
 *     Capture a full-page screenshot of a tab as PNG. Uses the
 *     Page.captureScreenshot CDP method. Works regardless of whether
 *     the browser window is visible or the screen is locked.
 *
 *   cdp_browser action=sleep ms=3000
 *     Wait for the specified number of milliseconds. Useful for
 *     sequencing multiple CDP actions with pauses between them.
 *
 * ── CDP concepts ─────────────────────────────────────────────────────
 *
 * - Each browser tab has a WebSocket debug URL (ws://localhost:PORT/devtools/page/ID)
 * - The /json REST endpoint lists all tabs with their debug URLs
 * - /json/new?URL opens a new tab; /json/close/ID closes one (both PUT)
 * - Runtime.evaluate runs JS in the page context
 * - Page.navigate changes the URL; Page.captureScreenshot takes a PNG
 * - Network.enable + event listeners can intercept requests/responses
 *
 * ── Limitations ──────────────────────────────────────────────────────
 *
 * - Only sees web content inside browser tabs — for native Windows UI
 *   elements (buttons, menus, dialogs), use the win_ui extension
 * - Browser must be launched with --remote-debugging-port=PORT
 * - Only one CDP client can connect to a tab's WebSocket at a time
 * - Screenshots are of the page viewport, not the browser chrome
 * - Cross-origin iframes may require separate Runtime.evaluate calls
 *   targeting the iframe's execution context
 */

import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import { Type } from "@sinclair/typebox";
import * as fs from "node:fs";
import * as path from "node:path";
import { tmpdir } from "node:os";
import { spawn, spawnSync } from "node:child_process";

// Zero external dependencies — uses Bun's built-in WebSocket and fetch.
// Note: if CDP connections fail after Edge crashes/restarts, kill all Edge
// processes and relaunch — stale CDP sessions cause WebSocket issues.

const CDP_PORTS = [9224, 9225, 9226, 9227, 9228];

// ── Cross-platform browser discovery ────────────────────────────────────
// Finds Edge → Chrome → Chromium, preferring Edge. Returns the first
// executable that exists on disk.

type BrowserLaunch = { command: string; name: string };

function commandExists(command: string): boolean {
	try {
		const res = spawnSync(command, ["--version"], { stdio: "ignore" });
		return (res.status ?? 1) === 0;
	} catch {
		return false;
	}
}

function browserExists(candidate: BrowserLaunch): boolean {
	const looksLikePath = candidate.command.includes(path.sep) || candidate.command.includes("/") || candidate.command.includes("\\");
	return looksLikePath ? fs.existsSync(candidate.command) : commandExists(candidate.command);
}

function findBrowser(): BrowserLaunch | null {
	const platform = process.platform;
	const candidates: BrowserLaunch[] = [];

	if (platform === "win32") {
		const pf86 = process.env["ProgramFiles(x86)"] ?? "C:\\Program Files (x86)";
		const pf = process.env["ProgramFiles"] ?? "C:\\Program Files";
		const local = process.env["LOCALAPPDATA"] ?? "";
		candidates.push(
			{ command: path.join(pf86, "Microsoft/Edge/Application/msedge.exe"), name: "Edge" },
			{ command: path.join(pf, "Microsoft/Edge/Application/msedge.exe"), name: "Edge" },
			{ command: path.join(local, "Microsoft/Edge/Application/msedge.exe"), name: "Edge" },
			{ command: path.join(pf, "Google/Chrome/Application/chrome.exe"), name: "Chrome" },
			{ command: path.join(pf86, "Google/Chrome/Application/chrome.exe"), name: "Chrome" },
			{ command: path.join(local, "Google/Chrome/Application/chrome.exe"), name: "Chrome" },
			{ command: "msedge.exe", name: "Edge" },
			{ command: "chrome.exe", name: "Chrome" },
		);
	} else if (platform === "darwin") {
		candidates.push(
			{ command: "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge", name: "Edge" },
			{ command: path.join(process.env.HOME ?? "", "Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge"), name: "Edge" },
			{ command: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", name: "Chrome" },
			{ command: path.join(process.env.HOME ?? "", "Applications/Google Chrome.app/Contents/MacOS/Google Chrome"), name: "Chrome" },
			{ command: "/Applications/Chromium.app/Contents/MacOS/Chromium", name: "Chromium" },
			{ command: "Microsoft Edge", name: "Edge" },
			{ command: "Google Chrome", name: "Chrome" },
			{ command: "Chromium", name: "Chromium" },
		);
	} else {
		candidates.push(
			{ command: "/usr/bin/microsoft-edge", name: "Edge" },
			{ command: "/usr/bin/microsoft-edge-stable", name: "Edge" },
			{ command: "/usr/bin/google-chrome", name: "Chrome" },
			{ command: "/usr/bin/google-chrome-stable", name: "Chrome" },
			{ command: "/usr/bin/chromium", name: "Chromium" },
			{ command: "/usr/bin/chromium-browser", name: "Chromium" },
			{ command: "/snap/bin/chromium", name: "Chromium" },
			{ command: "microsoft-edge", name: "Edge" },
			{ command: "microsoft-edge-stable", name: "Edge" },
			{ command: "google-chrome", name: "Chrome" },
			{ command: "google-chrome-stable", name: "Chrome" },
			{ command: "chromium", name: "Chromium" },
			{ command: "chromium-browser", name: "Chromium" },
		);
	}

	for (const candidate of candidates) {
		if (browserExists(candidate)) return candidate;
	}
	return null;
}

/** Launch a browser with CDP enabled if none is running */
async function ensureBrowser(): Promise<number | null> {
	// First check if one is already running
	const existing = await findCdpPort();
	if (existing) return existing;

	// Launch one
	const browser = findBrowser();
	if (!browser) return null;

	const port = CDP_PORTS[0];
	const args = [
		`--remote-debugging-port=${port}`,
		"--no-first-run",
		"--disable-features=AutomationControlled",
	];
	const proc = spawn(browser.command, args, { detached: true, stdio: "ignore" });
	proc.unref();

	// Wait for CDP to come up
	const deadline = Date.now() + 10000;
	while (Date.now() < deadline) {
		try {
			await httpGet(`http://localhost:${port}/json/version`, 1500);
			return port;
		} catch {
			void 0;
		}
		await new Promise(r => setTimeout(r, 500));
	}
	return null;
}

async function httpGet(url: string, timeout = 3000): Promise<any> {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), timeout);
	try {
		const resp = await fetch(url, { signal: controller.signal });
		const text = await resp.text();
		try { return JSON.parse(text); } catch { return text; }
	} finally { clearTimeout(timer); }
}

async function httpPut(url: string, timeout = 5000): Promise<any> {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), timeout);
	try {
		const resp = await fetch(url, { method: "PUT", signal: controller.signal });
		const text = await resp.text();
		try { return JSON.parse(text); } catch { return text; }
	} finally { clearTimeout(timer); }
}

async function findCdpPort(): Promise<number | null> {
	for (const p of CDP_PORTS) {
		try { await httpGet(`http://localhost:${p}/json/version`, 2000); return p; } catch {
			continue;
		}
	}
	return null;
}

async function getTargets(port: number) {
	const targets: any[] = await httpGet(`http://localhost:${port}/json`);
	return targets.filter(t => t.type === "page");
}

async function connectToTab(port: number, match?: string): Promise<{ ws: WebSocket; target: any }> {
	const pages = await getTargets(port);
	const target = match
		? pages.find(t => t.url?.includes(match) || t.title?.toLowerCase().includes(match.toLowerCase()))
		: pages[0];
	if (!target) throw new Error(`No tab matching "${match}". Available: ${pages.map(t => t.title).join(", ")}`);
	const ws = await new Promise<WebSocket>((resolve, reject) => {
		const socket = new WebSocket(target.webSocketDebuggerUrl);
		const timeout = setTimeout(() => reject(new Error("WS timeout")), 5000);
		socket.addEventListener("open", () => {
			clearTimeout(timeout);
			resolve(socket);
		});
		socket.addEventListener("error", () => {
			clearTimeout(timeout);
			reject(new Error("WS connect error"));
		});
	});
	return { ws, target };
}

function closeWebSocketQuietly(ws: WebSocket | null | undefined): void {
	if (!ws) return;
	try {
		ws.close();
	} catch {
		// Ignore close errors from already-closed/stale CDP sockets.
	}
}

async function withConnectedTab<T>(port: number, match: string | undefined, run: (ws: WebSocket, target: any) => Promise<T>): Promise<T> {
	const { ws, target } = await connectToTab(port, match);
	try {
		return await run(ws, target);
	} finally {
		closeWebSocketQuietly(ws);
	}
}

function buildClickExpression(selector: string): string {
	const selectorLiteral = JSON.stringify(selector);
	return `(() => {
		const selector = ${selectorLiteral};
		const el = document.querySelector(selector);
		if (!el) return 'not found: ' + selector;
		el.click();
		return 'clicked: ' + ((el.textContent || el.tagName || '').substring(0, 60));
	})()`;
}

function cdpSend(ws: WebSocket, method: string, params?: any): Promise<any> {
	const id = Math.floor(Math.random() * 100000);
	ws.send(JSON.stringify({ id, method, params }));
	return new Promise((resolve) => {
		const timer = setTimeout(() => { ws.removeEventListener("message", handler); resolve(null); }, 15000);
		const handler = (event: any) => {
			try {
				const msg = JSON.parse(typeof event.data === "string" ? event.data : event.data.toString());
				if (msg.id === id) { ws.removeEventListener("message", handler); clearTimeout(timer); resolve(msg.result ?? msg.error ?? null); }
			} catch {
				return;
			}
		};
		ws.addEventListener("message", handler);
	});
}

function truncate(text: string, max = 40000) {
	if (text.length <= max) return text;
	return text.substring(0, max) + `\n\n[Truncated at ${max} chars]`;
}

export default function (pi: ExtensionAPI) {

	pi.registerTool({
		name: "cdp_browser",
		label: "CDP Browser Control",
		description:
			"Control any Chromium browser (Edge/Chrome) via Chrome DevTools Protocol. " +
			"Actions: tabs (list tabs), eval (run JS), navigate (go to URL), open (new tab), " +
			"close (close tabs), click (click element), screenshot (capture page), sleep (wait ms).",
		promptSnippet: "Control Edge browser tabs, evaluate JS, navigate, screenshot via CDP",
		parameters: Type.Object({
			action: Type.String({ description: "One of: tabs, eval, navigate, open, close, click, screenshot, sleep" }),
			expr: Type.Optional(Type.String({ description: "JS expression (for eval action)" })),
			url: Type.Optional(Type.String({ description: "URL (for navigate/open actions)" })),
			selector: Type.Optional(Type.String({ description: "CSS selector (for click action)" })),
			match: Type.Optional(Type.String({ description: "Tab title/URL substring to target a specific tab" })),
			outPath: Type.Optional(Type.String({ description: "Output file path (for screenshot)" })),
			ms: Type.Optional(Type.Number({ description: "Milliseconds to sleep (for sleep action, default 3000)" })),
		}),
		async execute(_id, params, _signal, _onUpdate, ctx) {
			const port = await findCdpPort() ?? await ensureBrowser();
			if (!port) {
				const browser = findBrowser();
				return { content: [{ type: "text", text: browser
					? `No CDP browser found. ${browser.name} exists at ${browser.command} but couldn't launch with CDP. Try: "${browser.command}" --remote-debugging-port=9224`
					: "No Chromium browser found. Install Edge, Chrome, or Chromium and launch with --remote-debugging-port=9224" }], details: {} };
			}

			switch (params.action) {

				case "tabs": {
					const version = await httpGet(`http://localhost:${port}/json/version`);
					const pages = await getTargets(port);
					const lines = [`CDP: port ${port} | ${version.Browser}`, `Tabs: ${pages.length}`, ""];
					pages.forEach((p, i) => {
						lines.push(`${i + 1}. ${p.title}`);
						lines.push(`   ${p.url.substring(0, 150)}`);
					});
					return { content: [{ type: "text", text: lines.join("\n") }], details: { port, tabCount: pages.length } };
				}

				case "eval": {
					if (!params.expr) throw new Error("expr is required for eval action");
					return await withConnectedTab(port, params.match, async (ws) => {
						const result = await cdpSend(ws, "Runtime.evaluate", { expression: params.expr, returnByValue: true, awaitPromise: true });
						const val = result?.result?.value;
						const text = val !== undefined ? (typeof val === "string" ? val : JSON.stringify(val, null, 2)) : JSON.stringify(result, null, 2);
						return { content: [{ type: "text", text: truncate(text) }], details: {} };
					});
				}

				case "navigate": {
					if (!params.url) throw new Error("url is required for navigate action");
					return await withConnectedTab(port, params.match, async (ws) => {
						await cdpSend(ws, "Page.enable");
						await cdpSend(ws, "Page.navigate", { url: params.url });
						return { content: [{ type: "text", text: `Navigated to: ${params.url}` }], details: {} };
					});
				}

				case "open": {
					if (!params.url) throw new Error("url is required for open action");
					await httpPut(`http://localhost:${port}/json/new?${encodeURIComponent(params.url)}`);
					return { content: [{ type: "text", text: `Opened new tab: ${params.url}` }], details: {} };
				}

				case "close": {
					if (!params.match) throw new Error("match is required for close action");
					const pages = await getTargets(port);
					const matching = pages.filter(t => t.url?.includes(params.match!) || t.title?.toLowerCase().includes(params.match!.toLowerCase()));
					const closed: string[] = [];
					for (const t of matching) {
						try {
							await httpPut(`http://localhost:${port}/json/close/${t.id}`);
							closed.push(t.title);
						} catch {
							continue;
						}
					}
					return { content: [{ type: "text", text: closed.length > 0 ? `Closed ${closed.length} tab(s): ${closed.join(", ")}` : `No tabs matching "${params.match}"` }], details: { closed } };
				}

				case "click": {
					if (!params.selector) throw new Error("selector is required for click action");
					return await withConnectedTab(port, params.match, async (ws) => {
						const result = await cdpSend(ws, "Runtime.evaluate", {
							expression: buildClickExpression(params.selector),
							returnByValue: true,
						});
						return { content: [{ type: "text", text: result?.result?.value ?? "no result" }], details: {} };
					});
				}

				case "screenshot": {
					return await withConnectedTab(port, params.match, async (ws) => {
						await cdpSend(ws, "Page.enable");
						const result = await cdpSend(ws, "Page.captureScreenshot", { format: "png" });
						if (result?.data) {
							const defaultDir = ctx?.cwd ? path.join(ctx.cwd, "tmp") : tmpdir();
							fs.mkdirSync(defaultDir, { recursive: true });
							const file = params.outPath || path.join(defaultDir, "cdp-screenshot.png");
							fs.writeFileSync(file, Buffer.from(result.data, "base64"));
							return { content: [{ type: "text", text: `Screenshot saved: ${file}` }], details: { file } };
						}
						return { content: [{ type: "text", text: "Failed to capture screenshot" }], details: {} };
					});
				}

				case "sleep": {
					const ms = params.ms || 3000;
					await new Promise(resolve => setTimeout(resolve, ms));
					return { content: [{ type: "text", text: `Slept ${ms}ms` }], details: { ms } };
				}

				default:
					throw new Error(`Unknown action: ${params.action}. Use: tabs, eval, navigate, open, close, click, screenshot, sleep`);
			}
		},
	});

	pi.registerCommand("cdp-tabs", {
		description: "List browser tabs via CDP",
		handler: async (_args, ctx) => {
			const port = await findCdpPort();
			if (!port) { ctx.ui.notify("No CDP browser found", "warning"); return; }
			const pages = await getTargets(port);
			ctx.ui.notify(`${pages.length} tabs: ${pages.map(p => p.title).join(" | ")}`, "info");
		},
	});
}
