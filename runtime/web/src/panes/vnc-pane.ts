// @ts-nocheck
/**
 * vnc-pane.ts — WebPaneExtension scaffold for a VNC viewer/proxy tab.
 *
 * This slice keeps the real pane host plus backend session/proxy plumbing,
 * and now adds the first real RFB/VNC render path: handshake parsing plus
 * raw-framebuffer rendering onto a canvas.
 */

import type { PaneCapability, PaneContext, PaneInstance, WebPaneExtension } from './pane-types.js';
import { isStandaloneWebAppMode } from '../ui/chat-window.js';
import { WebSocketRemoteDisplayBoundary } from './remote-display-socket.js';
import { loadRemoteDisplayWasmDecoder } from './remote-display-decoder.js';
import {
    buildVncWheelPointerEvents,
    computeContainedRemoteDisplayScale,
    encodeVncKeyEvent,
    encodeVncPointerEvent,
    mapClientToFramebufferPoint,
    normalizeVncPassword,
    resolveVncKeysymFromKeyboardEvent,
    vncButtonMaskForPointerButton,
} from './vnc-input.js';
import { VncRemoteDisplayProtocol } from './remote-display-vnc.js';

export const VNC_TAB_PREFIX = 'piclaw://vnc';

export function buildVncTabPath(targetId?: string | null): string {
    const target = String(targetId || '').trim();
    return target ? `${VNC_TAB_PREFIX}/${encodeURIComponent(target)}` : VNC_TAB_PREFIX;
}

function parseVncTargetFromPath(path?: string): string | null {
    const raw = String(path || '');
    if (raw === VNC_TAB_PREFIX) return null;
    if (!raw.startsWith(`${VNC_TAB_PREFIX}/`)) return null;
    const suffix = raw.slice(`${VNC_TAB_PREFIX}/`.length).trim();
    if (!suffix) return null;
    try {
        return decodeURIComponent(suffix);
    } catch {
        return suffix;
    }
}

function esc(value) {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

async function fetchVncSession(targetId = null) {
    const url = targetId ? `/vnc/session?target=${encodeURIComponent(targetId)}` : '/vnc/session';
    const response = await fetch(url, { credentials: 'same-origin' });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(body?.error || `HTTP ${response.status}`);
    return body;
}

async function createVncHandoff(targetId) {
    const url = `/vnc/handoff?target=${encodeURIComponent(String(targetId || '').trim())}`;
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
    });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
        throw new Error(body?.error || `HTTP ${response.status}`);
    }
    return body?.handoff || null;
}

function isPanePopoutMode() {
    if (typeof window === 'undefined') return false;
    try {
        const raw = new URLSearchParams(window.location.search).get('pane_popout');
        const normalized = String(raw || '').trim().toLowerCase();
        return normalized === '1' || normalized === 'true' || normalized === 'yes';
    } catch {
        return false;
    }
}

function canRequestPanePopout() {
    return !isStandaloneWebAppMode() && !isPanePopoutMode();
}

function buildVncWebSocketUrl(targetId, handoffToken = null) {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const url = new URL(`${protocol}//${window.location.host}/vnc/ws`);
    url.searchParams.set('target', String(targetId || ''));
    if (handoffToken) {
        url.searchParams.set('handoff', String(handoffToken));
    }
    return url.toString();
}

function buildDirectVncTargetReference(host, port) {
    const rawHost = String(host || '').trim();
    const normalizedPort = Math.floor(Number(port || 0));
    if (!rawHost || !Number.isFinite(normalizedPort) || normalizedPort <= 0 || normalizedPort > 65535) return null;
    const normalizedHost = rawHost.includes(':') && !rawHost.startsWith('[') ? `[${rawHost}]` : rawHost;
    return `${normalizedHost}:${normalizedPort}`;
}

function parseDirectVncTargetReference(value) {
    const text = String(value || '').trim();
    if (!text) return null;
    const ipv6Match = /^\[([^\]]+)\]:(\d+)$/.exec(text);
    if (ipv6Match) {
        return { host: ipv6Match[1], port: ipv6Match[2] };
    }
    const firstColon = text.indexOf(':');
    const lastColon = text.lastIndexOf(':');
    if (firstColon <= 0 || firstColon !== lastColon) return null;
    return {
        host: text.slice(0, lastColon),
        port: text.slice(lastColon + 1),
    };
}

function consumePanePopoutTransferToken(paramName) {
    if (typeof window === 'undefined') return null;
    try {
        const url = new URL(window.location.href);
        const token = url.searchParams.get(paramName)?.trim() || '';
        if (!token) return null;
        url.searchParams.delete(paramName);
        window.history?.replaceState?.(window.history.state, document.title, url.toString());
        return token;
    } catch {
        return null;
    }
}

class VncPaneInstance implements PaneInstance {
    private container;
    private root;
    private statusEl;
    private bodyEl;
    private metricsEl;
    private targetSubtitleEl;
    private socketBoundary = null;
    private protocol = null;
    private disposed = false;
    private targetId = null;
    private targetLabel = null;
    private bytesIn = 0;
    private bytesOut = 0;
    private canvas = null;
    private canvasCtx = null;
    private displayPlaceholderEl = null;
    private displayInfoEl = null;
    private displayMetaEl = null;
    private displayStageEl = null;
    private chromeEl = null;
    private sessionShellEl = null;
    private resizeObserver = null;
    private displayScale = null;
    private readOnly = false;
    private pointerButtonMask = 0;
    private pressedKeysyms = new Map();
    private passwordInputEl = null;
    private authPassword = null;
    private directHostInputEl = null;
    private directPortInputEl = null;
    private directPasswordInputEl = null;
    private hasRenderedFrame = false;
    private frameTimeoutId = null;
    private rawFallbackAttempted = false;
    private protocolRecovering = false;
    private pendingHandoffToken = null;

    constructor(container, context) {
        this.container = container;
        this.targetId = parseVncTargetFromPath(context?.path);
        this.targetLabel = this.targetId || null;
        this.pendingHandoffToken = consumePanePopoutTransferToken('vnc_handoff');

        this.root = document.createElement('div');
        this.root.className = 'vnc-pane-shell';
        this.root.style.cssText = 'display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);';

        this.targetSubtitleEl = null;

        this.statusEl = document.createElement('div');
        this.statusEl.style.cssText = 'display:none;';
        this.statusEl.textContent = '';

        this.bodyEl = document.createElement('div');
        this.bodyEl.style.cssText = 'flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;';

        this.metricsEl = document.createElement('div');
        this.metricsEl.style.cssText = 'display:none;';
        this.updateMetrics();

        this.root.append(this.statusEl, this.bodyEl);
        this.container.appendChild(this.root);

        void this.load();
    }

    private setStatus(message) {
        this.statusEl.textContent = String(message || '');
    }

    private setSessionChromeVisible(visible) {
        if (this.chromeEl) {
            this.chromeEl.style.display = visible ? 'grid' : 'none';
        }
        if (this.sessionShellEl?.style) {
            this.sessionShellEl.style.gridTemplateRows = visible ? 'auto minmax(0,1fr)' : '1fr';
        }
        if (this.displayStageEl?.style) {
            this.displayStageEl.style.padding = visible ? '12px' : '0';
            this.displayStageEl.style.border = visible ? '1px solid var(--border-color)' : 'none';
            this.displayStageEl.style.borderRadius = visible ? '16px' : '0';
            this.displayStageEl.style.background = visible ? '#0a0a0a' : '#000';
        }
        if (this.displayPlaceholderEl?.style) {
            this.displayPlaceholderEl.style.display = visible ? 'block' : 'none';
        }
    }

    private updateMetrics() {
        this.metricsEl.textContent = `Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`;
    }

    private applyMetrics(metrics) {
        this.bytesIn = Number(metrics?.bytesIn || 0);
        this.bytesOut = Number(metrics?.bytesOut || 0);
        this.updateMetrics();
    }

    private openTargetTab(targetId, label) {
        this.targetId = String(targetId || '').trim() || null;
        this.targetLabel = String(label || targetId || '').trim() || this.targetId || 'VNC';
        if (this.targetId) {
            this.renderTargetSession({
                direct_connect_enabled: true,
                target: {
                    id: this.targetId,
                    label: this.targetLabel,
                    read_only: false,
                    direct_connect: true,
                },
            });
            this.setStatus('Connecting…');
            this.updateDisplayInfo('Connecting…');
            this.updateDisplayMeta('connecting');
        }
        void this.load();
    }

    private requestPanePopout(path, label) {
        this.container.dispatchEvent(new CustomEvent('pane:popout', {
            bubbles: true,
            detail: { path, label },
        }));
    }

    private resetLiveSession() {
        this.protocol = null;
        try { this.socketBoundary?.dispose?.(); } catch { /* expected: socket boundary may already be torn down during session resets. */ }
        this.socketBoundary = null;
        try { this.resizeObserver?.disconnect?.(); } catch { /* expected: resize observer may already be disconnected during session resets. */ }
        this.resizeObserver = null;
        this.canvas = null;
        this.canvasCtx = null;
        this.displayPlaceholderEl = null;
        this.displayInfoEl = null;
        this.displayMetaEl = null;
        this.displayStageEl = null;
        this.displayScale = null;
        this.passwordInputEl = null;
        this.directHostInputEl = null;
        this.directPortInputEl = null;
        this.directPasswordInputEl = null;
        this.hasRenderedFrame = false;
        this.rawFallbackAttempted = false;
        this.protocolRecovering = false;
        if (this.frameTimeoutId) {
            clearTimeout(this.frameTimeoutId);
            this.frameTimeoutId = null;
        }
        this.pressedKeysyms.clear();
    }

    private renderTargets(payload) {
        this.resetLiveSession();
        const targets = Array.isArray(payload?.targets) ? payload.targets : [];
        const directConnectEnabled = Boolean(payload?.direct_connect_enabled);
        this.bodyEl.innerHTML = `
            <div style="width:100%;height:100%;min-height:0;display:grid;align-content:start;justify-items:center;gap:16px;overflow:auto;padding:24px;box-sizing:border-box;">
                ${directConnectEnabled ? `
                    <div style="width:min(540px,100%);padding:18px 18px 20px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:14px;box-shadow:0 16px 38px rgba(0,0,0,.22);">
                        <div style="display:grid;gap:6px;">
                            <div style="font-size:18px;font-weight:700;">Connect to VNC</div>
                            <div style="font-size:12px;color:var(--text-secondary);">Enter a server target to start a direct session.</div>
                        </div>
                        <div style="display:grid;gap:10px;align-items:end;">
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Server</span>
                                <input type="text" data-vnc-direct-host placeholder="server" spellcheck="false" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Port</span>
                                <input type="number" data-vnc-direct-port min="1" max="65535" step="1" placeholder="5900" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Password</span>
                                <input type="password" data-vnc-direct-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <button type="button" data-direct-open-tab="1" style="padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;min-height:40px;font-weight:600;">Connect</button>
                        </div>
                    </div>
                ` : ''}
                ${targets.length ? `
                    <div style="width:min(100%,900px);min-height:0;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));align-content:start;">
                        ${targets.map((target) => `
                            <div style="text-align:left;padding:16px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);color:inherit;display:flex;flex-direction:column;gap:12px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${esc(target.label || target.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${esc(target.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${target.readOnly ? 'Read-only target' : 'Interactive target'}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${esc(target.id)}" data-target-label="${esc(target.label || target.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                ` : `
                    <div style="min-height:0;display:grid;place-items:center;justify-items:center;">
                        <div style="width:min(100%,540px);text-align:center;padding:28px 24px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);font-size:13px;color:var(--text-secondary);line-height:1.5;">
                            No saved VNC targets yet. Connect directly above.
                        </div>
                    </div>
                `}
            </div>
        `;
        this.directHostInputEl = this.bodyEl.querySelector('[data-vnc-direct-host]');
        this.directPortInputEl = this.bodyEl.querySelector('[data-vnc-direct-port]');
        this.directPasswordInputEl = this.bodyEl.querySelector('[data-vnc-direct-password]');
        const openDirectTarget = () => {
            const targetRef = buildDirectVncTargetReference(this.directHostInputEl?.value, this.directPortInputEl?.value);
            if (!targetRef) {
                return;
            }
            this.authPassword = normalizeVncPassword(this.directPasswordInputEl ? this.directPasswordInputEl.value : this.authPassword);
            this.openTargetTab(targetRef, targetRef);
        };
        this.directHostInputEl?.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter') return;
            event.preventDefault();
            openDirectTarget();
        });
        this.directPortInputEl?.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter') return;
            event.preventDefault();
            openDirectTarget();
        });
        this.directPasswordInputEl?.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter') return;
            event.preventDefault();
            openDirectTarget();
        });
        this.bodyEl.querySelector('[data-direct-open-tab]')?.addEventListener('click', () => openDirectTarget());
        for (const button of Array.from(this.bodyEl.querySelectorAll('[data-target-open-tab]'))) {
            button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-target-open-tab');
                const label = button.getAttribute('data-target-label') || targetId || 'VNC';
                if (!targetId) return;
                this.openTargetTab(targetId, label);
            });
        }
    }

    private renderTargetSession(payload) {
        this.resetLiveSession();
        const target = payload?.target || {};
        const targetLabel = target?.label || this.targetId || 'VNC target';
        this.targetLabel = targetLabel;
        this.readOnly = Boolean(target.read_only);
        this.pointerButtonMask = 0;
        this.hasRenderedFrame = false;
        this.pressedKeysyms.clear();
        this.bodyEl.innerHTML = `
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${esc(target.id || this.targetId || '')} · ${target.read_only ? 'read-only' : 'interactive'} · websocket → TCP proxy</div>
                        <div data-display-info style="font-size:13px;color:var(--text-primary);line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                        <div data-display-meta style="font:11px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></div>
                    </div>
                    <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:end;">
                        <label style="display:grid;gap:4px;min-width:160px;flex:1 1 180px;">
                            <span style="font-size:11px;color:var(--text-secondary);">VNC password</span>
                            <input type="password" data-vnc-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:8px 10px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                        </label>
                        <button type="button" data-vnc-reconnect="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Reconnect</button>
                        <button type="button" data-open-target-picker="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Target</button>
                    </div>
                </div>
                <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:16px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:12px;position:relative;overflow:hidden;">
                    <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:0 12px 36px rgba(0,0,0,.35);border-radius:8px;background:#000;"></canvas>
                    <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.6;">
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${esc(targetLabel)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `;

        this.sessionShellEl = this.bodyEl.querySelector('[data-vnc-session-shell]');
        this.chromeEl = this.bodyEl.querySelector('[data-vnc-session-chrome]');
        this.displayStageEl = this.bodyEl.querySelector('[data-display-stage]');
        this.canvas = this.bodyEl.querySelector('[data-display-canvas]');
        this.displayPlaceholderEl = this.bodyEl.querySelector('[data-display-placeholder]');
        this.displayInfoEl = this.bodyEl.querySelector('[data-display-info]');
        this.displayMetaEl = this.bodyEl.querySelector('[data-display-meta]');
        this.canvasCtx = this.canvas?.getContext?.('2d', { alpha: false }) || null;
        if (this.canvasCtx) {
            this.canvasCtx.imageSmoothingEnabled = true;
            this.canvasCtx.imageSmoothingQuality = 'high';
        }
        this.updateDisplayInfo('Waiting for VNC protocol negotiation…');
        this.updateDisplayMeta();
        this.setSessionChromeVisible(true);
        this.attachDisplayResizeObserver();
        this.attachCanvasPointerHandlers();
        this.attachCanvasKeyboardHandlers();

        this.passwordInputEl = this.bodyEl.querySelector('[data-vnc-password]');
        if (this.passwordInputEl && this.authPassword !== null) {
            this.passwordInputEl.value = this.authPassword;
        }
        this.passwordInputEl?.addEventListener('input', () => {
            this.authPassword = normalizeVncPassword(this.passwordInputEl.value);
        });
        this.passwordInputEl?.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter') return;
            event.preventDefault();
            void this.connectSocket();
        });

        const reconnectBtn = this.bodyEl.querySelector('[data-vnc-reconnect]');
        reconnectBtn?.addEventListener('click', () => {
            this.authPassword = normalizeVncPassword(this.passwordInputEl ? this.passwordInputEl.value : this.authPassword);
            void this.connectSocket();
        });
        const pickerBtn = this.bodyEl.querySelector('[data-open-target-picker]');
        pickerBtn?.addEventListener('click', () => {
            this.openTargetTab('', 'VNC');
        });
    }

    private updateDisplayInfo(message) {
        if (this.displayInfoEl) {
            this.displayInfoEl.textContent = String(message || '');
        }
    }

    private updateDisplayMeta(extra = '') {
        if (!this.displayMetaEl) return;
        const protocolState = this.protocol?.state ? `state=${this.protocol.state}` : 'state=idle';
        const size = this.protocol?.framebufferWidth && this.protocol?.framebufferHeight
            ? `${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`
            : 'pending';
        const name = this.protocol?.serverName ? ` · name=${this.protocol.serverName}` : '';
        const scale = this.displayScale ? ` · scale=${Math.round(this.displayScale * 100)}%` : '';
        const suffix = extra ? ` · ${extra}` : '';
        this.displayMetaEl.textContent = `${protocolState} · framebuffer=${size}${name}${scale}${suffix}`;
    }

    private ensureCanvasSize(width, height, options = {}) {
        if (!this.canvas || !this.canvasCtx || !width || !height) return;
        if (this.canvas.width !== width || this.canvas.height !== height) {
            this.canvas.width = width;
            this.canvas.height = height;
        }
        const reveal = options?.reveal === true;
        this.canvas.style.display = reveal || this.hasRenderedFrame ? 'block' : 'none';
        this.canvas.style.aspectRatio = `${width} / ${height}`;
        if (this.displayPlaceholderEl) {
            this.displayPlaceholderEl.style.display = reveal || this.hasRenderedFrame ? 'none' : '';
        }
        this.updateCanvasScale();
    }

    private attachDisplayResizeObserver() {
        if (!this.displayStageEl || typeof ResizeObserver === 'undefined') return;
        try { this.resizeObserver?.disconnect?.(); } catch { /* expected: prior resize observer may already be disconnected before re-attachment. */ }
        this.resizeObserver = new ResizeObserver(() => {
            this.updateCanvasScale();
        });
        this.resizeObserver.observe(this.displayStageEl);
    }

    private updateCanvasScale() {
        if (!this.canvas || !this.displayStageEl || !this.canvas.width || !this.canvas.height) return;
        // Defer to next frame so the layout is stable after reveal/resize
        requestAnimationFrame(() => {
            if (!this.canvas || !this.displayStageEl) return;
            const bounds = this.displayStageEl.getBoundingClientRect?.();
            const availableWidth = Math.max(1, Math.floor(bounds?.width || this.displayStageEl.clientWidth || 0) - 32);
            const availableHeight = Math.max(1, Math.floor(bounds?.height || this.displayStageEl.clientHeight || 0) - 32);
            if (!availableWidth || !availableHeight) return;
            const scale = computeContainedRemoteDisplayScale(availableWidth, availableHeight, this.canvas.width, this.canvas.height);
            this.displayScale = scale;
            this.canvas.style.width = `${Math.max(1, Math.round(this.canvas.width * scale))}px`;
            this.canvas.style.height = `${Math.max(1, Math.round(this.canvas.height * scale))}px`;
            this.updateDisplayMeta();
        });
    }

    private getFramebufferPointFromEvent(event) {
        if (!this.canvas || !this.protocol?.framebufferWidth || !this.protocol?.framebufferHeight) return null;
        const rect = this.canvas.getBoundingClientRect?.();
        if (!rect || !rect.width || !rect.height) return null;
        return mapClientToFramebufferPoint(event.clientX, event.clientY, rect, this.protocol.framebufferWidth, this.protocol.framebufferHeight);
    }

    private sendPointerEvent(buttonMask, x, y) {
        if (!this.socketBoundary || !this.protocol || this.protocol.state !== 'connected') return;
        this.socketBoundary.send(encodeVncPointerEvent(buttonMask, x, y));
    }

    private attachCanvasPointerHandlers() {
        if (!this.canvas || this.readOnly) return;
        this.canvas.style.cursor = 'crosshair';
        this.canvas.style.touchAction = 'none';

        this.canvas.addEventListener('contextmenu', (event) => {
            event.preventDefault();
        });
        this.canvas.addEventListener('pointermove', (event) => {
            const point = this.getFramebufferPointFromEvent(event);
            if (!point) return;
            this.sendPointerEvent(this.pointerButtonMask, point.x, point.y);
        });
        this.canvas.addEventListener('pointerdown', (event) => {
            const point = this.getFramebufferPointFromEvent(event);
            if (!point) return;
            event.preventDefault();
            this.canvas?.focus?.();
            try { this.canvas?.setPointerCapture?.(event.pointerId); } catch { /* expected: pointer capture can fail when the canvas loses the pointer stream mid-gesture. */ }
            this.pointerButtonMask |= vncButtonMaskForPointerButton(event.button);
            this.sendPointerEvent(this.pointerButtonMask, point.x, point.y);
        });
        this.canvas.addEventListener('pointerup', (event) => {
            const point = this.getFramebufferPointFromEvent(event);
            if (!point) return;
            event.preventDefault();
            this.pointerButtonMask &= ~vncButtonMaskForPointerButton(event.button);
            this.sendPointerEvent(this.pointerButtonMask, point.x, point.y);
            try { this.canvas?.releasePointerCapture?.(event.pointerId); } catch { /* expected: pointer capture may already be gone when the gesture ends. */ }
        });
        this.canvas.addEventListener('pointercancel', (event) => {
            const point = this.getFramebufferPointFromEvent(event) || { x: 0, y: 0 };
            this.pointerButtonMask = 0;
            this.sendPointerEvent(0, point.x, point.y);
            try { this.canvas?.releasePointerCapture?.(event.pointerId); } catch { /* expected: pointer capture may already be gone on cancellation. */ }
        });
        this.canvas.addEventListener('wheel', (event) => {
            const point = this.getFramebufferPointFromEvent(event);
            if (!point) return;
            event.preventDefault();
            for (const payload of buildVncWheelPointerEvents(event.deltaY, point.x, point.y, this.pointerButtonMask)) {
                this.socketBoundary?.send?.(payload);
            }
        }, { passive: false });
    }

    private sendKeyEvent(down, keysym) {
        if (!this.socketBoundary || !this.protocol || this.protocol.state !== 'connected') return;
        this.socketBoundary.send(encodeVncKeyEvent(down, keysym));
    }

    private releasePressedKeys() {
        for (const keysym of this.pressedKeysyms.values()) {
            this.sendKeyEvent(false, keysym);
        }
        this.pressedKeysyms.clear();
    }

    private attachCanvasKeyboardHandlers() {
        if (!this.canvas || this.readOnly) return;
        this.canvas.addEventListener('keydown', (event) => {
            const keysym = resolveVncKeysymFromKeyboardEvent(event);
            if (keysym == null) return;
            if (event.repeat && this.pressedKeysyms.has(event.code || event.key)) {
                event.preventDefault();
                return;
            }
            event.preventDefault();
            const keyId = event.code || event.key;
            this.pressedKeysyms.set(keyId, keysym);
            this.sendKeyEvent(true, keysym);
        });
        this.canvas.addEventListener('keyup', (event) => {
            const keyId = event.code || event.key;
            const keysym = this.pressedKeysyms.get(keyId) ?? resolveVncKeysymFromKeyboardEvent(event);
            if (keysym == null) return;
            event.preventDefault();
            this.pressedKeysyms.delete(keyId);
            this.sendKeyEvent(false, keysym);
        });
        this.canvas.addEventListener('blur', () => {
            this.releasePressedKeys();
        });
    }

    private drawRgbaRect(rect) {
        if (!this.canvasCtx || !this.canvas) return;
        this.ensureCanvasSize(this.canvas.width || rect.width, this.canvas.height || rect.height, { reveal: true });
        const imageData = new ImageData(rect.rgba, rect.width, rect.height);
        this.canvasCtx.putImageData(imageData, rect.x, rect.y);
        this.hasRenderedFrame = true;
    }

    private copyCanvasRect(rect) {
        if (!this.canvasCtx || !this.canvas) return;
        this.ensureCanvasSize(this.canvas.width || rect.width, this.canvas.height || rect.height, { reveal: true });
        const imageData = this.canvasCtx.getImageData(rect.srcX, rect.srcY, rect.width, rect.height);
        this.canvasCtx.putImageData(imageData, rect.x, rect.y);
        this.hasRenderedFrame = true;
    }

    private scheduleRawFallbackTimeout() {
        if (this.frameTimeoutId) {
            clearTimeout(this.frameTimeoutId);
            this.frameTimeoutId = null;
        }
        if (this.rawFallbackAttempted || this.protocolRecovering) return;
        this.frameTimeoutId = setTimeout(() => {
            if (this.hasRenderedFrame || this.rawFallbackAttempted || this.protocolRecovering) return;
            if (this.protocol && this.socketBoundary) {
                this.rawFallbackAttempted = true;
                this.protocolRecovering = true;
                this.setStatus('No framebuffer update yet; retrying with RAW encoding.');
                this.updateDisplayInfo('No framebuffer update yet. Retrying with RAW encoding.');
                this.updateDisplayMeta('reconnect-encoding-fallback');
                void this.connectWithEncodings('0');
            }
        }, 2200);
    }

    private applyRemoteDisplayEvent(event) {
        if (!event) return;
        switch (event.type) {
            case 'protocol-version':
                this.setStatus(`Negotiated ${event.protocol.toUpperCase()} ${event.server} → ${event.client}.`);
                this.updateDisplayInfo(`Negotiated ${event.server} → ${event.client}.`);
                this.updateDisplayMeta();
                return;
            case 'security-types':
                this.setStatus(`Server offered security types: ${event.types.join(', ') || 'none'}.`);
                this.updateDisplayInfo(`Security types: ${event.types.join(', ') || 'none'}.`);
                this.updateDisplayMeta();
                return;
            case 'security-selected':
                this.setStatus(`Using ${event.protocol.toUpperCase()} security type ${event.label}.`);
                this.updateDisplayInfo(`Security: ${event.label}.`);
                this.updateDisplayMeta();
                return;
            case 'security-result':
                this.setStatus('Security negotiation complete. Waiting for server init…');
                this.updateDisplayInfo('Security negotiation complete. Waiting for server init…');
                this.updateDisplayMeta();
                return;
            case 'display-init':
                this.ensureCanvasSize(event.width, event.height);
                this.setSessionChromeVisible(false);
                this.setStatus(`Connected to ${this.targetLabel || this.targetId || 'target'} — waiting for first framebuffer update (${event.width}×${event.height}).`);
                this.updateDisplayInfo(`Connected to ${event.name || this.targetLabel || this.targetId || 'remote display'}. Waiting for first framebuffer update…`);
                this.updateDisplayMeta('awaiting-frame');
                this.scheduleRawFallbackTimeout();
                return;
            case 'framebuffer-update':
                if (this.frameTimeoutId) {
                    clearTimeout(this.frameTimeoutId);
                    this.frameTimeoutId = null;
                }
                let painted = false;

                // Pipeline mode: WASM owns the full framebuffer — paint it in one
                // putImageData call instead of iterating individual rects.
                const hasPipelineRects = (event.rects || []).some(r => r.kind === 'pipeline');
                if (event.framebuffer && event.framebuffer.length > 0 && event.width > 0 && event.height > 0 && hasPipelineRects) {
                    this.ensureCanvasSize(event.width, event.height, { reveal: true });
                    for (const rect of event.rects || []) {
                        if (rect.kind === 'resize') {
                            this.ensureCanvasSize(rect.width, rect.height);
                        }
                    }
                    const ctx = this.canvas?.getContext('2d', { alpha: false });
                    if (ctx) {
                        const img = new ImageData(new Uint8ClampedArray(event.framebuffer), event.width, event.height);
                        ctx.putImageData(img, 0, 0);
                        painted = true;
                    }
                } else {
                    // Non-pipeline mode: per-rect rendering
                    for (const rect of event.rects || []) {
                        if (rect.kind === 'resize') {
                            this.ensureCanvasSize(rect.width, rect.height);
                            continue;
                        }
                        if (rect.kind === 'copy') {
                            this.ensureCanvasSize(event.width, event.height, { reveal: true });
                            this.copyCanvasRect(rect);
                            painted = true;
                            continue;
                        }
                        if (rect.kind === 'rgba') {
                            this.ensureCanvasSize(event.width, event.height, { reveal: true });
                            this.drawRgbaRect(rect);
                            painted = true;
                        }
                    }
                }
                if (painted || this.hasRenderedFrame) {
                    this.protocolRecovering = false;
                    this.setStatus(`Rendering live framebuffer — ${event.width}×${event.height}.`);
                    this.updateDisplayInfo(`Framebuffer update applied (${(event.rects || []).length} rect${(event.rects || []).length === 1 ? '' : 's'}).`);
                    this.updateDisplayMeta();
                } else {
                    this.setStatus(`Connected to ${this.targetLabel || this.targetId || 'target'} — waiting for painted framebuffer data.`);
                    this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(event.rects || []).length} rect${(event.rects || []).length === 1 ? '' : 's'}).`);
                    this.updateDisplayMeta('awaiting-frame');
                    this.scheduleRawFallbackTimeout();
                }
                return;
            case 'clipboard':
                this.setStatus('Remote clipboard updated.');
                this.updateDisplayInfo(`Clipboard text received (${event.text.length} chars).`);
                this.updateDisplayMeta();
                return;
            case 'bell':
                this.setStatus('Remote display bell received.');
                this.updateDisplayInfo('Remote display bell received.');
                this.updateDisplayMeta();
                return;
        }
    }

    private async handleSocketMessage(message) {
        if (message?.kind === 'control') {
            const payload = message.payload;
            if (payload?.type === 'vnc.error') {
                this.setStatus(`Proxy error: ${payload.error || 'Unknown error'}`);
                this.updateDisplayInfo(`Proxy error: ${payload.error || 'Unknown error'}`);
                this.updateDisplayMeta('proxy-error');
                return;
            }
            if (payload?.type === 'vnc.connected') {
                const label = payload?.target?.label || this.targetLabel || this.targetId;
                this.setStatus(`Connected to ${label}. Waiting for VNC/RFB data…`);
                this.updateDisplayInfo(`Connected to ${label}. Waiting for VNC handshake…`);
                this.updateDisplayMeta();
                return;
            }
            if (payload?.type === 'pong') {
                return;
            }
            return;
        }

        const protocol = this.protocol || (this.protocol = new VncRemoteDisplayProtocol());
        try {
            const chunk = message.data instanceof Blob ? await message.data.arrayBuffer() : message.data;
            const result = protocol.receive(chunk);
            for (const outgoing of result.outgoing || []) {
                this.socketBoundary?.send?.(outgoing);
            }
            for (const event of result.events || []) {
                this.applyRemoteDisplayEvent(event);
            }
        } catch (error) {
            const message = error?.message || 'Unknown error';
            this.setSessionChromeVisible(true);
            this.setStatus(`Display protocol error: ${message}`);
            this.updateDisplayInfo(`Display protocol error: ${message}`);
            this.updateDisplayMeta('protocol-error');
            if (this.frameTimeoutId) {
                clearTimeout(this.frameTimeoutId);
                this.frameTimeoutId = null;
            }
            if (!this.rawFallbackAttempted && !this.protocolRecovering && /unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(message)) {
                this.rawFallbackAttempted = true;
                this.protocolRecovering = true;
                void this.connectWithEncodings('0');
            }
        }
    }

    private async connectSocket(preferredEncodings = null) {
        if (!this.targetId || this.disposed) return;
        if (this.protocolRecovering && preferredEncodings == null) {
            this.protocolRecovering = false;
        }

        try { this.socketBoundary?.dispose?.(); } catch { /* expected: previous socket boundary may already be torn down before reconnect. */ }

        if (preferredEncodings == null) {
            this.rawFallbackAttempted = false;
            this.protocolRecovering = false;
        }

        const handoffToken = this.pendingHandoffToken || null;

        const selectedEncodings = preferredEncodings == null ? null : String(preferredEncodings).trim();
        const wasmDecoder = await loadRemoteDisplayWasmDecoder();
        const protocolOptions: any = {};
        if (wasmDecoder) {
            protocolOptions.pipeline = wasmDecoder;
            protocolOptions.decodeRawRect = (bytes, width, height, pixelFormat) =>
                wasmDecoder.decodeRawRectToRgba(bytes, width, height, pixelFormat);
        }
        const normalizedPassword = normalizeVncPassword(this.authPassword);
        if (normalizedPassword !== null) {
            protocolOptions.password = normalizedPassword;
        }
        if (selectedEncodings) {
            protocolOptions.encodings = selectedEncodings;
        }

        this.protocol = new VncRemoteDisplayProtocol(protocolOptions);
        this.hasRenderedFrame = false;
        this.frameTimeoutId = null;

        // Hide stale framebuffer from a previous connection until the first
        // frame arrives. Without this the old canvas stays visible during
        // the handshake, often at the wrong scale.
        if (this.canvas) {
            this.canvas.style.display = 'none';
        }
        if (this.displayPlaceholderEl) {
            this.displayPlaceholderEl.style.display = '';
        }

        this.socketBoundary = new WebSocketRemoteDisplayBoundary({
            url: buildVncWebSocketUrl(this.targetId, handoffToken),
            binaryType: 'arraybuffer',
            onOpen: () => {
                if (handoffToken && this.pendingHandoffToken === handoffToken) {
                    this.pendingHandoffToken = null;
                }
                this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`);
                this.updateDisplayInfo('WebSocket proxy connected. Waiting for handshake…');
                this.updateDisplayMeta();
                this.socketBoundary?.sendControl?.({ type: 'ping' });
            },
            onMetrics: (metrics) => {
                this.applyMetrics(metrics);
            },
            onMessage: (message) => {
                void this.handleSocketMessage(message);
            },
            onClose: () => {
                this.setSessionChromeVisible(true);
                if (this.frameTimeoutId) {
                    clearTimeout(this.frameTimeoutId);
                    this.frameTimeoutId = null;
                }
                if (this.disposed) return;
                this.setStatus(this.bytesIn > 0
                    ? `Proxy closed after receiving ${this.bytesIn} byte(s).`
                    : 'Proxy closed.');
                this.updateDisplayInfo(this.bytesIn > 0
                    ? 'Remote display transport closed after receiving data.'
                    : 'Remote display transport closed.');
                this.updateDisplayMeta('closed');
            },
            onError: () => {
                this.setSessionChromeVisible(true);
                this.setStatus('WebSocket proxy connection failed.');
                this.updateDisplayInfo('WebSocket proxy connection failed.');
                this.updateDisplayMeta('socket-error');
            },
        });
        this.socketBoundary.connect();
    }

    private connectWithEncodings(encodings) {
        return this.connectSocket(encodings);
    }

    private async load() {
        this.setStatus('');
        try {
            const payload = await fetchVncSession(this.targetId);
            if (!payload?.enabled) {
                this.renderTargets(payload);
                this.setStatus('');
                return;
            }
            if (!this.targetId) {
                this.renderTargets(payload);
                this.setStatus('');
                return;
            }
            this.renderTargetSession(payload);
            await this.connectSocket();
        } catch (error) {
            this.resetLiveSession();
            this.bodyEl.innerHTML = `
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${esc(error?.message || 'Unknown error')}</div>
                </div>
            `;
            this.setStatus(`Session load failed: ${error?.message || 'Unknown error'}`);
        }
    }

    async preparePopoutTransfer() {
        if (!this.targetId) return null;
        const handoff = await createVncHandoff(this.targetId);
        const token = typeof handoff?.token === 'string' ? handoff.token.trim() : '';
        if (!token) {
            throw new Error('No live VNC session is available to transfer.');
        }
        return { vnc_handoff: token };
    }

    getContent() { return undefined; }
    isDirty() { return false; }
    focus() { this.canvas?.focus?.(); this.root?.focus?.(); }
    resize() { this.updateCanvasScale(); }
    dispose() {
        if (this.disposed) return;
        this.disposed = true;
        this.resetLiveSession();
        this.root?.remove?.();
    }
}

export const vncPaneExtension = {
    id: 'vnc-viewer',
    label: 'VNC',
    icon: 'display',
    capabilities: ['preview'] as PaneCapability[],
    placement: 'tabs',

    canHandle(context: PaneContext): boolean | number {
        const path = String(context?.path || '');
        return path === VNC_TAB_PREFIX || path.startsWith(`${VNC_TAB_PREFIX}/`) ? 9_000 : false;
    },

    mount(container: HTMLElement, context: PaneContext): PaneInstance {
        return new VncPaneInstance(container, context);
    },
} satisfies WebPaneExtension;
