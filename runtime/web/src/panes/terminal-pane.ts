// @ts-nocheck
/**
 * terminal-pane.ts — Terminal dock pane extension.
 *
 * Bootstraps the vendored ghostty-web frontend and connects it to the
 * authenticated web terminal backend when available.
 */

import type { WebPaneExtension, PaneContext, PaneInstance, PaneCapability } from './pane-types.js';

const GHOSTTY_WEB_MODULE = '/static/js/vendor/ghostty-web.js';
const GHOSTTY_WASM_MODULE = '/static/js/vendor/ghostty-vt.wasm';
export const TERMINAL_TAB_PATH = 'piclaw://terminal';
const TERMINAL_FONT_FAMILY = 'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace';
const TERMINAL_FONT_LOAD_SPEC = '400 13px "FiraCode Nerd Font Mono"';
const TERMINAL_FONT_LOAD_SPEC_BOLD = '700 13px "FiraCode Nerd Font Mono"';
const LIGHT_TERMINAL_PALETTE = {
    yellow: '#9a6700',
    magenta: '#8250df',
    cyan: '#1b7c83',
    brightBlack: '#57606a',
    brightRed: '#cf222e',
    brightGreen: '#1a7f37',
    brightYellow: '#bf8700',
    brightBlue: '#0550ae',
    brightMagenta: '#6f42c1',
    brightCyan: '#0a7b83',
};
const DARK_TERMINAL_PALETTE = {
    yellow: '#d29922',
    magenta: '#bc8cff',
    cyan: '#39c5cf',
    brightBlack: '#8b949e',
    brightRed: '#ff7b72',
    brightGreen: '#7ee787',
    brightYellow: '#e3b341',
    brightBlue: '#79c0ff',
    brightMagenta: '#d2a8ff',
    brightCyan: '#56d4dd',
};

let ghosttyInitPromise = null;
let terminalFontsReadyPromise = null;

function shouldRewriteGhosttyWasmRequest(url) {
    if (!url) return false;
    return url.startsWith('data:application/wasm') || /(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(url);
}

async function withGhosttyWasmFetchShim(run) {
    const originalFetch = globalThis.fetch?.bind(globalThis);
    if (!originalFetch) {
        return await run();
    }
    const wasmUrl = new URL(GHOSTTY_WASM_MODULE, window.location.origin).href;
    const patchedFetch = (input, init) => {
        const requestUrl = input instanceof Request
            ? input.url
            : input instanceof URL
                ? input.href
                : String(input);
        if (!shouldRewriteGhosttyWasmRequest(requestUrl)) {
            return originalFetch(input, init);
        }
        if (input instanceof Request) {
            return originalFetch(new Request(wasmUrl, input));
        }
        return originalFetch(wasmUrl, init);
    };
    globalThis.fetch = patchedFetch;
    try {
        return await run();
    } finally {
        globalThis.fetch = originalFetch;
    }
}

async function loadGhosttyWeb() {
    const moduleUrl = new URL(GHOSTTY_WEB_MODULE, window.location.origin).href;
    const mod = await import(moduleUrl);
    if (!ghosttyInitPromise) {
        ghosttyInitPromise = withGhosttyWasmFetchShim(() => Promise.resolve(mod.init?.())).catch((error) => {
            ghosttyInitPromise = null;
            throw error;
        });
    }
    await ghosttyInitPromise;
    return mod;
}

async function ensureTerminalFontsReady() {
    if (typeof document === 'undefined' || !('fonts' in document) || !document.fonts) {
        return;
    }
    if (!terminalFontsReadyPromise) {
        terminalFontsReadyPromise = Promise.allSettled([
            document.fonts.load(TERMINAL_FONT_LOAD_SPEC),
            document.fonts.load(TERMINAL_FONT_LOAD_SPEC_BOLD),
            document.fonts.ready,
        ]).then(() => undefined).catch(() => undefined);
    }
    await terminalFontsReadyPromise;
}

async function fetchTerminalSession() {
    const response = await fetch('/terminal/session', {
        method: 'GET',
        credentials: 'same-origin',
    });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
        throw new Error(body?.error || `HTTP ${response.status}`);
    }
    return body;
}

function buildTerminalWebSocketUrl(path) {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    return `${protocol}//${window.location.host}${path}`;
}

function detectDarkTheme() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return false;
    const root = document.documentElement;
    const body = document.body;
    const rootTheme = root?.getAttribute?.('data-theme')?.toLowerCase?.() || '';
    if (rootTheme === 'dark') return true;
    if (rootTheme === 'light') return false;
    if (root?.classList?.contains('dark') || body?.classList?.contains('dark')) return true;
    if (root?.classList?.contains('light') || body?.classList?.contains('light')) return false;
    return Boolean(window.matchMedia?.('(prefers-color-scheme: dark)')?.matches);
}

function readThemeVar(name, fallback = '') {
    if (typeof document === 'undefined') return fallback;
    const value = getComputedStyle(document.documentElement).getPropertyValue(name)?.trim();
    return value || fallback;
}

function withAlpha(hexColor, alphaHex) {
    if (!hexColor || !hexColor.startsWith('#')) return hexColor;
    const value = hexColor.slice(1);
    if (value.length === 3) {
        return `#${value[0]}${value[0]}${value[1]}${value[1]}${value[2]}${value[2]}${alphaHex}`;
    }
    if (value.length === 6) {
        return `#${value}${alphaHex}`;
    }
    return hexColor;
}

function buildTerminalTheme() {
    const isDark = detectDarkTheme();
    const palette = isDark ? DARK_TERMINAL_PALETTE : LIGHT_TERMINAL_PALETTE;
    const background = readThemeVar('--bg-primary', isDark ? '#000000' : '#ffffff');
    const foreground = readThemeVar('--text-primary', isDark ? '#e7e9ea' : '#0f1419');
    const secondary = readThemeVar('--text-secondary', isDark ? '#71767b' : '#536471');
    const accent = readThemeVar('--accent-color', '#1d9bf0');
    const danger = readThemeVar('--danger-color', isDark ? '#ff7b72' : '#cf222e');
    const success = readThemeVar('--success-color', isDark ? '#7ee787' : '#1a7f37');
    const hover = readThemeVar('--bg-hover', isDark ? '#1d1f23' : '#e8ebed');
    const border = readThemeVar('--border-color', isDark ? '#2f3336' : '#eff3f4');
    const selectionBackground = readThemeVar('--accent-soft-strong', withAlpha(accent, isDark ? '47' : '33'));

    return {
        background,
        foreground,
        cursor: accent,
        cursorAccent: background,
        selectionBackground,
        selectionForeground: foreground,
        black: hover,
        red: danger,
        green: success,
        yellow: palette.yellow,
        blue: accent,
        magenta: palette.magenta,
        cyan: palette.cyan,
        white: foreground,
        brightBlack: palette.brightBlack,
        brightRed: palette.brightRed,
        brightGreen: palette.brightGreen,
        brightYellow: palette.brightYellow,
        brightBlue: palette.brightBlue,
        brightMagenta: palette.brightMagenta,
        brightCyan: palette.brightCyan,
        brightWhite: border,
    };
}

class TerminalPaneInstance implements PaneInstance {
    private container: HTMLElement;
    private disposed = false;
    private termEl: HTMLElement;
    private bodyEl: HTMLElement;
    private statusEl: HTMLElement;
    private terminal = null;
    private fitAddon = null;
    private socket = null;
    private themeObserver = null;
    private themeChangeListener = null;
    private mediaQuery = null;
    private mediaQueryListener = null;
    private resizeObserver = null;
    private dockResizeListener = null;
    private windowResizeListener = null;
    private resizeFrame = 0;
    private lastAppliedThemeSignature = null;
    private lastResizeSignature: string | null = null;

    constructor(container: HTMLElement, _context: PaneContext) {
        this.container = container;

        this.termEl = document.createElement('div');
        this.termEl.className = 'terminal-pane-content';
        this.termEl.setAttribute('tabindex', '0');

        this.statusEl = document.createElement('span');
        this.statusEl.className = 'terminal-pane-status';
        this.statusEl.textContent = 'Loading terminal…';

        this.bodyEl = document.createElement('div');
        this.bodyEl.className = 'terminal-pane-body';
        this.bodyEl.innerHTML = '<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>';

        this.termEl.append(this.bodyEl);
        container.appendChild(this.termEl);

        void this.bootstrapGhostty();
    }

    private setStatus(message: string): void {
        this.statusEl.textContent = message;
        this.termEl.dataset.connectionStatus = message;
        this.termEl.setAttribute('aria-label', `Terminal ${message}`);
    }

    private getResizeSignature(): string {
        try {
            const containerRect = this.container?.getBoundingClientRect?.();
            const bodyRect = this.bodyEl?.getBoundingClientRect?.();
            const cWidth = Number.isFinite(containerRect?.width) ? containerRect.width : 0;
            const cHeight = Number.isFinite(containerRect?.height) ? containerRect.height : 0;
            const bWidth = Number.isFinite(bodyRect?.width) ? bodyRect.width : 0;
            const bHeight = Number.isFinite(bodyRect?.height) ? bodyRect.height : 0;
            return `${Math.round(cWidth)}x${Math.round(cHeight)}:${Math.round(bWidth)}x${Math.round(bHeight)}`;
        } catch {
            return "0x0:0x0";
        }
    }

    private syncHostLayout(): void {
        const host = this.bodyEl.querySelector('.terminal-live-host');
        if (!(host instanceof HTMLElement)) return;

        const primaryChild = host.firstElementChild;
        if (primaryChild instanceof HTMLElement) {
            primaryChild.style.width = '100%';
            primaryChild.style.height = '100%';
            primaryChild.style.maxWidth = '100%';
            primaryChild.style.minWidth = '0';
            primaryChild.style.display = 'block';
        }

        const canvas = host.querySelector('canvas');
        if (canvas instanceof HTMLElement) {
            canvas.style.display = 'block';
            canvas.style.maxWidth = 'none';
        }
    }

    private scheduleResize(): void {
        if (this.disposed) return;

        const signature = this.getResizeSignature();
        if (this.lastResizeSignature === signature) {
            return;
        }

        if (this.resizeFrame) {
            cancelAnimationFrame(this.resizeFrame);
        }
        this.resizeFrame = requestAnimationFrame(() => {
            this.resizeFrame = 0;
            this.lastResizeSignature = this.getResizeSignature();
            this.resize();
        });
    }

    private async bootstrapGhostty(): Promise<void> {
        try {
            const mod = await loadGhosttyWeb();
            await ensureTerminalFontsReady();
            if (this.disposed) return;

            this.bodyEl.innerHTML = '';
            const terminalHost = document.createElement('div');
            terminalHost.className = 'terminal-live-host';
            this.bodyEl.appendChild(terminalHost);

            const terminal = new mod.Terminal({
                cols: 120,
                rows: 30,
                cursorBlink: true,
                fontFamily: TERMINAL_FONT_FAMILY,
                fontSize: 13,
                theme: buildTerminalTheme(),
            });

            let fitAddon = null;
            if (typeof mod.FitAddon === 'function') {
                fitAddon = new mod.FitAddon();
                terminal.loadAddon?.(fitAddon);
            }

            await terminal.open(terminalHost);
            this.syncHostLayout();
            terminal.loadFonts?.();
            fitAddon?.observeResize?.();

            this.terminal = terminal;
            this.fitAddon = fitAddon;
            this.installThemeSync();
            this.installResizeSync();
            this.scheduleResize();

            await this.connectBackend();
        } catch (error) {
            console.error('[terminal-pane] Failed to bootstrap ghostty-web:', error);
            if (this.disposed) return;
            this.bodyEl.innerHTML = '<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>';
            this.setStatus('Load failed');
        }
    }

    private applyTheme() {
        if (!this.terminal) return;
        const theme = buildTerminalTheme();
        const themeSignature = JSON.stringify(theme);
        const themeChanged = this.lastAppliedThemeSignature !== null && this.lastAppliedThemeSignature !== themeSignature;
        try {
            this.termEl.style.backgroundColor = theme.background;
            this.bodyEl.style.backgroundColor = theme.background;
            const host = this.bodyEl.querySelector('.terminal-live-host');
            if (host instanceof HTMLElement) {
                host.style.backgroundColor = theme.background;
                host.style.color = theme.foreground;
            }
            const canvas = this.bodyEl.querySelector('canvas');
            if (canvas instanceof HTMLElement) {
                canvas.style.backgroundColor = theme.background;
                canvas.style.color = theme.foreground;
            }
        } catch {
            /* expected: theme repaint can race with terminal DOM teardown. */
        }
        try {
            if (this.terminal.options) {
                this.terminal.options.theme = theme;
            }
        } catch {
            /* expected: terminal options can be transient while Ghostty is booting. */
        }
        try {
            if (themeChanged && this.terminal.reset) {
                this.terminal.reset();
            }
        } catch {
            /* expected: theme reset can fail briefly during terminal bootstrap/disposal. */
        }
        try {
            this.terminal.renderer?.setTheme?.(theme);
            this.terminal.renderer?.clear?.();
        } catch {
            /* expected: renderer theme hooks are optional across Ghostty/xterm variants. */
        }
        try {
            this.terminal.loadFonts?.();
        } catch {
            /* expected: font reloads are best-effort while the terminal runtime settles. */
        }
        try {
            this.terminal.renderer?.remeasureFont?.();
        } catch {
            /* expected: renderer font metrics can be unavailable during theme churn. */
        }
        try {
            if (this.terminal.wasmTerm && this.terminal.renderer?.render) {
                this.terminal.renderer.render(this.terminal.wasmTerm, true, this.terminal.viewportY || 0, this.terminal);
                this.terminal.renderer.render(this.terminal.wasmTerm, false, this.terminal.viewportY || 0, this.terminal);
            }
        } catch {
            /* expected: forcing a repaint can race with renderer disposal. */
        }
        try {
            this.resize();
        } catch {
            /* expected: resize can race with late terminal bootstrap/teardown. */
        }
        try {
            if (themeChanged && this.socket?.readyState === WebSocket.OPEN) {
                this.socket.send(JSON.stringify({ type: 'input', data: '\f' }));
            }
        } catch {
            /* expected: backend websocket may disconnect during theme-driven refresh. */
        }
        try {
            this.terminal.refresh?.();
        } catch {
            /* expected: refresh is best-effort while the renderer is settling. */
        }
        this.lastAppliedThemeSignature = themeSignature;
    }

    private installThemeSync() {
        if (typeof window === 'undefined' || typeof document === 'undefined') return;
        const syncTheme = () => requestAnimationFrame(() => this.applyTheme());
        syncTheme();

        const onThemeChange = () => syncTheme();
        window.addEventListener('piclaw-theme-change', onThemeChange);
        this.themeChangeListener = onThemeChange;

        const media = window.matchMedia?.('(prefers-color-scheme: dark)');
        const onMediaChange = () => syncTheme();
        if (media?.addEventListener) media.addEventListener('change', onMediaChange);
        else if (media?.addListener) media.addListener(onMediaChange);
        this.mediaQuery = media;
        this.mediaQueryListener = onMediaChange;

        const observer = typeof MutationObserver !== 'undefined'
            ? new MutationObserver(() => syncTheme())
            : null;
        observer?.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class', 'data-theme', 'style'],
        });
        if (document.body) {
            observer?.observe(document.body, {
                attributes: true,
                attributeFilter: ['class', 'data-theme'],
            });
        }
        this.themeObserver = observer;
    }

    private installResizeSync() {
        if (typeof window === 'undefined') return;

        const onDockResize = () => this.scheduleResize();
        const onWindowResize = () => this.scheduleResize();
        window.addEventListener('dock-resize', onDockResize);
        window.addEventListener('resize', onWindowResize);
        this.dockResizeListener = onDockResize;
        this.windowResizeListener = onWindowResize;

        if (typeof ResizeObserver !== 'undefined') {
            const observer = new ResizeObserver(() => {
                if (this.disposed) return;
                this.scheduleResize();
            });
            observer.observe(this.container);
            this.resizeObserver = observer;
        }
    }

    private async connectBackend() {
        const terminal = this.terminal;
        if (!terminal) return;

        try {
            const session = await fetchTerminalSession();
            if (this.disposed) return;

            if (!session?.enabled) {
                terminal.write?.(`Terminal backend unavailable: ${session?.error || 'disabled'}\r\n`);
                this.setStatus('Unavailable');
                return;
            }

            const socket = new WebSocket(buildTerminalWebSocketUrl(session.ws_path || '/terminal/ws'));
            this.socket = socket;
            this.setStatus('Connecting…');

            terminal.onData?.((data) => {
                if (socket.readyState === WebSocket.OPEN) {
                    socket.send(JSON.stringify({ type: 'input', data }));
                }
            });

            terminal.onResize?.(({ cols, rows }) => {
                if (socket.readyState === WebSocket.OPEN) {
                    socket.send(JSON.stringify({ type: 'resize', cols, rows }));
                }
            });

            socket.addEventListener('open', () => {
                if (this.disposed) return;
                this.setStatus('Connected');
                this.scheduleResize();
            });

            socket.addEventListener('message', (event) => {
                if (this.disposed) return;
                let payload = null;
                try {
                    payload = JSON.parse(String(event.data));
                } catch {
                    payload = { type: 'output', data: String(event.data) };
                }

                if (payload?.type === 'output' && typeof payload.data === 'string') {
                    terminal.write?.(payload.data);
                    return;
                }
                if (payload?.type === 'exit') {
                    terminal.write?.(`\r\n[terminal exited]\r\n`);
                    this.setStatus('Exited');
                }
            });

            socket.addEventListener('close', () => {
                if (this.disposed) return;
                this.setStatus('Disconnected');
            });

            socket.addEventListener('error', () => {
                if (this.disposed) return;
                this.setStatus('Connection error');
            });
        } catch (error) {
            terminal.write?.(`Terminal backend unavailable: ${error instanceof Error ? error.message : String(error)}\r\n`);
            this.setStatus('Unavailable');
        }
    }

    private sendResize() {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN || !this.fitAddon?.proposeDimensions) {
            return;
        }
        const dims = this.fitAddon.proposeDimensions();
        if (!dims) return;
        this.socket.send(JSON.stringify({ type: 'resize', cols: dims.cols, rows: dims.rows }));
    }

    getContent(): string | undefined {
        return undefined;
    }

    isDirty(): boolean {
        return false;
    }

    focus(): void {
        if (this.terminal?.focus) {
            this.terminal.focus();
            return;
        }
        this.termEl?.focus();
    }

    resize(): void {
        this.syncHostLayout();
        try {
            this.terminal?.renderer?.remeasureFont?.();
        } catch {
            /* expected: renderer font metrics may be unavailable during resize churn. */
        }
        try {
            this.fitAddon?.fit?.();
        } catch {
            /* expected: fit addon is best-effort while the terminal host is mounting/unmounting. */
        }
        try {
            this.terminal?.refresh?.();
        } catch {
            /* expected: refresh can race with renderer disposal. */
        }
        this.syncHostLayout();
        this.sendResize();
    }

    dispose(): void {
        if (this.disposed) return;
        this.disposed = true;
        try {
            if (this.resizeFrame) {
                cancelAnimationFrame(this.resizeFrame);
                this.resizeFrame = 0;
            }
        } catch {
            /* expected: resize frame may already be cancelled during teardown. */
        }
        try {
            if (this.themeChangeListener) {
                window.removeEventListener('piclaw-theme-change', this.themeChangeListener);
            }
        } catch {
            /* expected: window listeners may already be detached during teardown. */
        }
        try {
            if (this.mediaQuery && this.mediaQueryListener) {
                if (this.mediaQuery.removeEventListener) this.mediaQuery.removeEventListener('change', this.mediaQueryListener);
                else if (this.mediaQuery.removeListener) this.mediaQuery.removeListener(this.mediaQueryListener);
            }
        } catch {
            /* expected: media-query listeners differ across browser implementations. */
        }
        try {
            if (this.dockResizeListener) {
                window.removeEventListener('dock-resize', this.dockResizeListener);
            }
            if (this.windowResizeListener) {
                window.removeEventListener('resize', this.windowResizeListener);
            }
        } catch {
            /* expected: resize listeners may already be detached during teardown. */
        }
        try {
            this.themeObserver?.disconnect?.();
        } catch {
            /* expected: mutation observer may already be disconnected. */
        }
        try {
            this.resizeObserver?.disconnect?.();
        } catch {
            /* expected: resize observer may already be disconnected. */
        }
        try {
            this.socket?.close?.();
        } catch {
            /* expected: backend websocket may already be closed during teardown. */
        }
        try {
            this.fitAddon?.dispose?.();
        } catch {
            /* expected: fit addon may already be disposed during teardown. */
        }
        try {
            this.terminal?.dispose?.();
        } catch {
            /* expected: terminal runtime may already be disposed during teardown. */
        }
        this.termEl?.remove();
    }
}

export const terminalPaneExtension: WebPaneExtension = {
    id: 'terminal',
    label: 'Terminal',
    icon: 'terminal',
    capabilities: ['terminal'] as PaneCapability[],
    placement: 'dock',

    mount(container: HTMLElement, context: PaneContext): PaneInstance {
        return new TerminalPaneInstance(container, context);
    },
};

export const terminalTabPaneExtension: WebPaneExtension = {
    id: 'terminal-tab',
    label: 'Terminal',
    icon: 'terminal',
    capabilities: ['terminal'] as PaneCapability[],
    placement: 'tabs',

    canHandle(context: PaneContext): boolean | number {
        return context?.path === TERMINAL_TAB_PATH ? 10_000 : false;
    },

    mount(container: HTMLElement, context: PaneContext): PaneInstance {
        return new TerminalPaneInstance(container, context);
    },
};
