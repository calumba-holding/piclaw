// @ts-nocheck
/**
 * mindmap-pane.ts — WebPaneExtension for .mindmap.yaml files.
 *
 * Mounts the D3-based mindmap editor into a pane tab using the
 * __mindmapEditor mount/update/destroy API — no VS Code shims.
 */

import type { PaneCapability, PaneContext, PaneInstance, WebPaneExtension } from './pane-types.js';

const MINDMAP_EXTENSION = /\.mindmap\.ya?ml$/i;

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

function ensureScript(src: string): Promise<void> {
    const baseSrc = src.split('?')[0];
    const existing = document.querySelector(`script[data-src="${baseSrc}"]`);
    if (existing) return Promise.resolve();
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

/** Create the toolbar + context-menu DOM the mindmap editor expects. */
function createMindmapChrome(container: HTMLElement): void {
    // SVG canvas
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.id = 'mindmap-svg';
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.style.cssText = 'display:block;position:absolute;inset:0;';
    container.appendChild(svg);

    // Toolbar
    const toolbar = document.createElement('div');
    toolbar.id = 'toolbar';
    toolbar.className = 'mindmap-toolbar';
    toolbar.innerHTML = `
        <select id="layout-select">
            <option value="horizontal-tree">Horizontal Tree</option>
            <option value="vertical-tree">Vertical Tree</option>
            <option value="radial">Radial</option>
            <option value="force-directed">Force Directed</option>
        </select>
        <button type="button" id="zoom-fit" title="Fit to view">⊞</button>
        <button type="button" id="zoom-in"  title="Zoom in">+</button>
        <button type="button" id="zoom-out" title="Zoom out">−</button>
        <button type="button" id="reset-layout" title="Reset layout">↻</button>
    `;
    container.appendChild(toolbar);

    // Context menu
    const ctx = document.createElement('div');
    ctx.id = 'context-menu';
    ctx.className = 'context-menu hidden';
    ctx.innerHTML = `
        <button data-action="cut">Cut</button>
        <button data-action="copy">Copy</button>
        <button data-action="paste">Paste</button>
        <hr/>
        <button data-action="add-child">Add child</button>
        <button data-action="add-sibling">Add sibling</button>
        <hr/>
        <button data-action="delete">Delete</button>
    `;
    container.appendChild(ctx);
}

// ── Preview card ────────────────────────────────────────────────

class MindmapPreviewCard implements PaneInstance {
    private container: HTMLElement;

    constructor(container: HTMLElement, context: PaneContext) {
        this.container = container;
        const filePath = context.path || '';
        const name = filePath.split('/').pop() || 'mindmap';
        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);';
        wrapper.innerHTML = `
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">🧠</div>
                    <div style="font-size:14px;color:var(--text-primary);">${name}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Mindmap Editor</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="mm-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">Edit in Tab</button>
            </div>`;
        container.appendChild(wrapper);
        wrapper.querySelector('#mm-open-tab')?.addEventListener('click', () => {
            container.dispatchEvent(new CustomEvent('mindmap:open-tab', { bubbles: true, detail: { path: filePath } }));
        });
    }

    getContent() { return undefined; }
    isDirty() { return false; }
    focus() {}
    resize() {}
    dispose() { this.container.innerHTML = ''; }
}

// ── Full editor ─────────────────────────────────────────────────

class MindmapEditorInstance implements PaneInstance {
    private container: HTMLElement;
    private filePath: string;
    private dirty = false;
    private dirtyCallback: ((dirty: boolean) => void) | null = null;
    private disposed = false;
    private mindmapEl: HTMLElement | null = null;
    private pendingContent: string | null = null;
    private readonly themeListener = () => {
        (window as any).__mindmapEditor?.setTheme?.(isDarkThemeActive());
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
        ensureStylesheet('/static/css/mindmap.css');

        // Load vendor deps
        await Promise.all([
            ensureScript('/static/js/vendor/d3-mindmap.min.js?v=' + VENDOR_CACHE_BUST),
            ensureScript('/static/js/vendor/js-yaml.min.js?v=' + VENDOR_CACHE_BUST),
        ]);
        if (this.disposed) return;

        // Create container + chrome (SVG, toolbar, context menu)
        this.mindmapEl = document.createElement('div');
        this.mindmapEl.id = 'mindmap-container';
        this.mindmapEl.tabIndex = -1; // focusable but not in tab order
        this.mindmapEl.style.cssText = 'width:100%;height:100%;overflow:hidden;position:relative;outline:none;';
        this.container.appendChild(this.mindmapEl);
        createMindmapChrome(this.mindmapEl);

        const isDark = isDarkThemeActive();

        const fileDir = this.filePath.replace(/\/[^/]+$/, '') || '/';

        try {
            await ensureScript('/static/js/vendor/mindmap-editor.js?v=' + VENDOR_CACHE_BUST);
            if (this.disposed) return;

            const api = (window as any).__mindmapEditor;
            if (!api) throw new Error('__mindmapEditor not found');

            api.mount({
                content: initialContent,
                isDark,
                onEdit: (yaml: string) => {
                    this.dirty = true;
                    this.dirtyCallback?.(true);
                    this.saveToWorkspace(yaml);
                },
                resolveImagePath: (relPath: string) => {
                    if (relPath.startsWith('data:') || relPath.startsWith('http')) return relPath;
                    return `/workspace/raw?path=${encodeURIComponent(fileDir + '/' + relPath)}`;
                },
            });
            if (this.pendingContent !== null) {
                api.update(this.pendingContent);
                this.pendingContent = null;
            }
            window.addEventListener('piclaw-theme-change', this.themeListener as EventListener);
        } catch (err) {
            console.error('[mindmap] Failed to load mindmap renderer:', err);
            if (this.mindmapEl) {
                this.mindmapEl.innerHTML = `<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>`;
            }
        }
    }

    private async saveToWorkspace(yamlContent: string) {
        if (!this.filePath) return;
        try {
            const res = await fetch('/workspace/file', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ path: this.filePath, content: yamlContent }),
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            this.dirty = false;
            this.dirtyCallback?.(false);
        } catch (err) {
            console.error('[mindmap] Save failed:', err);
        }
    }

    getContent(): string | undefined { return undefined; }
    isDirty(): boolean { return this.dirty; }

    setContent(content: string, _mtime: string): void {
        const api = (window as any).__mindmapEditor;
        if (api?.update) api.update(content);
        else this.pendingContent = content;
        this.dirty = false;
        this.dirtyCallback?.(false);
    }

    focus(): void { this.mindmapEl?.focus(); }

    resize(): void {
        window.dispatchEvent(new Event('resize'));
    }

    onDirtyChange(cb: (dirty: boolean) => void): void {
        this.dirtyCallback = cb;
    }

    dispose(): void {
        if (this.disposed) return;
        this.disposed = true;
        window.removeEventListener('piclaw-theme-change', this.themeListener as EventListener);
        (window as any).__mindmapEditor?.destroy();
        this.pendingContent = null;
        this.container.innerHTML = '';
    }
}

// ── Extension ───────────────────────────────────────────────────

export const mindmapPaneExtension: WebPaneExtension = {
    id: 'mindmap-editor',
    label: 'Mindmap Editor',
    icon: 'mindmap',
    capabilities: ['edit', 'preview'] as PaneCapability[],
    placement: 'tabs',

    canHandle(context: PaneContext): boolean | number {
        const path = context?.path || '';
        if (!MINDMAP_EXTENSION.test(path)) return false;
        return 50;
    },

    mount(container: HTMLElement, context: PaneContext): PaneInstance {
        if (context?.mode === 'view') return new MindmapPreviewCard(container, context);
        return new MindmapEditorInstance(container, context);
    },
};
