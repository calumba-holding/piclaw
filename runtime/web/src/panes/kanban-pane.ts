// @ts-nocheck
/**
 * kanban-pane.ts — WebPaneExtension for .kanban.md files.
 *
 * Mounts the kanban board editor (vendored Preact IIFE) into a pane tab.
 * Communication uses the __kanbanEditor mount/update/destroy API — no VS Code shims.
 */

import type { PaneCapability, PaneContext, PaneInstance, WebPaneExtension } from './pane-types.js';
import {
    h, render, Component, createContext,
    useState, useEffect, useCallback, useRef, useMemo,
    useReducer, useContext, useLayoutEffect, useImperativeHandle,
    useErrorBoundary, useDebugValue,
    html,
} from '../vendor/preact-htm.js';

const KANBAN_EXTENSION = /\.kanban\.md$/i;

/** Cache-bust token for vendor scripts — evaluated at bundle build time. */
const VENDOR_CACHE_BUST = String(Date.now());

function isDarkThemeActive(): boolean {
    const mode = document.documentElement?.dataset?.theme;
    if (mode === 'dark') return true;
    if (mode === 'light') return false;
    try {
        return !!window.matchMedia?.('(prefers-color-scheme: dark)')?.matches;
    } catch {
        return false;
    }
}

/** Bridge preact ES-module exports → window globals for the IIFE vendor script. */
function ensurePreactGlobals(): void {
    const w = window as any;
    if (w.preact) return;
    w.preact = { h, render, Component, createContext };
    w.preactHooks = {
        useState, useEffect, useCallback, useRef, useMemo,
        useReducer, useContext, useLayoutEffect, useImperativeHandle,
        useErrorBoundary, useDebugValue,
    };
    w.htm = { bind: () => html };
}

function ensureScript(src: string): Promise<void> {
    const baseSrc = src.split('?')[0];
    // If a new-style tag (our cache-busted version) exists, it's already loaded
    const existing = document.querySelector(`script[data-src="${baseSrc}"]`);
    if (existing) return Promise.resolve();
    // Remove any stale pre-deploy tag (no data-src) so we force a fresh load
    const stale = document.querySelector(`script[src="${baseSrc}"]`);
    if (stale) stale.remove();
    return new Promise((resolve, reject) => {
        const el = document.createElement('script');
        el.src = src;
        el.dataset.src = baseSrc;
        el.onload = () => resolve();
        el.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.head.appendChild(el);
    });
}

function ensureStylesheet(href: string): void {
    if (document.querySelector(`link[href="${href}"]`)) return;
    const el = document.createElement('link');
    el.rel = 'stylesheet';
    el.href = href;
    document.head.appendChild(el);
}

// ── Preview card ────────────────────────────────────────────────

class KanbanPreviewCard implements PaneInstance {
    private container: HTMLElement;

    constructor(container: HTMLElement, context: PaneContext) {
        this.container = container;
        const filePath = context.path || '';
        const name = filePath.split('/').pop() || 'kanban';

        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);';
        wrapper.innerHTML = `
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">📋</div>
                    <div style="font-size:14px;color:var(--text-primary);">${name}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Kanban Board</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="kb-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">
                    Edit in Tab
                </button>
            </div>
        `;
        container.appendChild(wrapper);
        wrapper.querySelector('#kb-open-tab')?.addEventListener('click', () => {
            container.dispatchEvent(new CustomEvent('kanban:open-tab', { bubbles: true, detail: { path: filePath } }));
        });
    }

    getContent() { return undefined; }
    isDirty() { return false; }
    focus() {}
    resize() {}
    dispose() { this.container.innerHTML = ''; }
}

// ── Full editor ─────────────────────────────────────────────────

class KanbanEditorInstance implements PaneInstance {
    private container: HTMLElement;
    private filePath: string;
    private dirty = false;
    private dirtyCallback: ((dirty: boolean) => void) | null = null;
    private disposed = false;
    private boardEl: HTMLElement | null = null;
    private pendingContent: string | null = null;
    private lastContent = '';
    private readonly themeListener = () => {
        (window as any).__kanbanEditor?.setTheme?.(isDarkThemeActive());
    };

    constructor(container: HTMLElement, context: PaneContext) {
        this.container = container;
        this.filePath = context.path || '';
        this.init(context.content);
    }

    private async resolveInitialContent(content?: string): Promise<string> {
        if (content !== undefined) return content;
        if (!this.filePath) return '';
        try {
            const res = await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`);
            const data = await res.json();
            return data?.text || '';
        } catch {
            return '';
        }
    }

    private async init(initialContentMaybe?: string) {
        const initialContent = await this.resolveInitialContent(initialContentMaybe);
        if (this.disposed) return;
        this.lastContent = initialContent;
        ensureStylesheet('/static/css/kanban.css');

        this.boardEl = document.createElement('div');
        this.boardEl.id = 'kanban-container';
        this.boardEl.style.cssText = 'width:100%;height:100%;overflow:auto;position:relative;';
        this.container.appendChild(this.boardEl);

        const isDark = isDarkThemeActive();

        try {
            ensurePreactGlobals();
            await ensureScript('/static/js/vendor/kanban-editor.js?v=' + VENDOR_CACHE_BUST);
            if (this.disposed) return;

            const api = (window as any).__kanbanEditor;
            if (!api) throw new Error('__kanbanEditor not found');

            api.mount(this.boardEl, {
                content: initialContent,
                isDark,
                onEdit: (md: string) => {
                    this.lastContent = md;
                    this.dirty = true;
                    this.dirtyCallback?.(true);
                    this.saveToWorkspace(md);
                },
            });
            if (this.pendingContent !== null) {
                api.update(this.pendingContent);
                this.lastContent = this.pendingContent;
                this.pendingContent = null;
            }
            window.addEventListener('piclaw-theme-change', this.themeListener as EventListener);
        } catch (err) {
            console.error('[kanban] Failed to load kanban renderer:', err);
            if (this.boardEl) {
                this.boardEl.innerHTML = `<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>`;
            }
        }
    }

    private async saveToWorkspace(mdContent: string) {
        if (!this.filePath) return;
        try {
            const res = await fetch('/workspace/file', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ path: this.filePath, content: mdContent }),
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            this.dirty = false;
            this.dirtyCallback?.(false);
        } catch (err) {
            console.error('[kanban] Save failed:', err);
        }
    }

    getContent(): string | undefined { return undefined; }
    isDirty(): boolean { return this.dirty; }

    setContent(content: string, _mtime: string): void {
        if (content === this.lastContent) return;
        const api = (window as any).__kanbanEditor;
        if (api?.update) api.update(content);
        else this.pendingContent = content;
        this.lastContent = content;
        this.dirty = false;
        this.dirtyCallback?.(false);
    }

    focus(): void { this.boardEl?.focus(); }
    resize(): void {}

    onDirtyChange(cb: (dirty: boolean) => void): void {
        this.dirtyCallback = cb;
    }

    dispose(): void {
        if (this.disposed) return;
        this.disposed = true;
        window.removeEventListener('piclaw-theme-change', this.themeListener as EventListener);
        (window as any).__kanbanEditor?.destroy();
        this.pendingContent = null;
        this.container.innerHTML = '';
    }
}

// ── Extension ───────────────────────────────────────────────────

export const kanbanPaneExtension: WebPaneExtension = {
    id: 'kanban-editor',
    label: 'Kanban Board',
    icon: 'kanban',
    capabilities: ['edit', 'preview'] as PaneCapability[],
    placement: 'tabs',

    canHandle(context: PaneContext): boolean | number {
        const path = context?.path || '';
        if (!KANBAN_EXTENSION.test(path)) return false;
        return 50;
    },

    mount(container: HTMLElement, context: PaneContext): PaneInstance {
        if (context?.mode === 'view') return new KanbanPreviewCard(container, context);
        return new KanbanEditorInstance(container, context);
    },
};
