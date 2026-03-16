// @ts-nocheck
/**
 * drawio-pane.ts — WebPaneExtension for editing .drawio diagrams.
 *
 * In preview mode (workspace browser): shows a launch card with "Edit in Tab" button.
 * In edit/tab mode: loads the self-hosted draw.io editor in an iframe with
 * postMessage-based load/save via the workspace file API.
 */

import type { PaneCapability, PaneContext, PaneInstance, WebPaneExtension } from './pane-types.js';

const DRAWIO_EXTENSIONS = new Set(['.drawio']);

/** Also match .drawio.xml and .drawio.svg by checking full filename. */
function isDrawioFile(filePath?: string): boolean {
    if (!filePath) return false;
    const lower = filePath.toLowerCase();
    return lower.endsWith('.drawio') ||
           lower.endsWith('.drawio.xml') ||
           lower.endsWith('.drawio.svg') ||
           lower.endsWith('.drawio.png');
}

function getExtension(filePath?: string): string {
    if (!filePath) return '';
    const lower = filePath.toLowerCase();
    if (lower.endsWith('.drawio.xml')) return '.drawio.xml';
    if (lower.endsWith('.drawio.svg')) return '.drawio.svg';
    if (lower.endsWith('.drawio.png')) return '.drawio.png';
    const lastDot = filePath.lastIndexOf('.');
    if (lastDot < 0) return '';
    return filePath.slice(lastDot).toLowerCase();
}

function esc(s: string): string {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const DEFAULT_DRAWIO_XML = '<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';

function normalizeDrawioXml(value: string | null | undefined): string {
    const text = String(value || '').trim();
    return text ? text : DEFAULT_DRAWIO_XML;
}

// ── Preview card (workspace browser) ────────────────────────────

class DrawioPreviewCard implements PaneInstance {
    private container: HTMLElement;
    private disposed = false;

    constructor(container: HTMLElement, context: PaneContext) {
        this.container = container;
        const filePath = context.path || '';
        const name = filePath.split('/').pop() || 'diagram.drawio';

        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);';
        wrapper.innerHTML = `
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">📐</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${esc(name)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `;
        container.appendChild(wrapper);

        const btn = wrapper.querySelector('#drawio-open-tab') as HTMLButtonElement;
        if (btn) {
            btn.addEventListener('click', () => {
                const evt = new CustomEvent('drawio:open-tab', {
                    bubbles: true,
                    detail: { path: filePath },
                });
                container.dispatchEvent(evt);
            });
        }
    }

    getContent(): string | undefined { return undefined; }
    isDirty(): boolean { return false; }
    focus(): void {}
    resize(): void {}
    dispose(): void {
        if (this.disposed) return;
        this.disposed = true;
        this.container.innerHTML = '';
    }
}

// ── Full editor (editor tab) ────────────────────────────────────

class DrawioEditorInstance implements PaneInstance {
    private container: HTMLElement;
    private iframe: HTMLIFrameElement | null = null;
    private overlay: HTMLDivElement | null = null;
    private disposed = false;
    private filePath: string;
    private fileName: string;
    private xmlData = '';
    private fileLoaded = false;
    private editorReady = false;
    private loadSent = false;
    private saveChain: Promise<void> = Promise.resolve();
    private onMessageBound: (event: MessageEvent) => void;

    constructor(container: HTMLElement, context: PaneContext) {
        this.container = container;
        this.filePath = context.path || '';
        this.fileName = this.filePath.split('/').pop() || 'diagram.drawio';
        this.onMessageBound = this.onMessage.bind(this);

        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'position:relative;width:100%;height:100%;background:#1e1e1e;';

        this.overlay = document.createElement('div');
        this.overlay.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;';
        this.overlay.textContent = 'Loading draw.io editor…';
        wrapper.appendChild(this.overlay);

        const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const editorUrl = `/drawio/index.html?embed=1&proto=json&spin=1&modified=0&ui=dark&dark=${isDark ? '1' : '0'}`;

        this.iframe = document.createElement('iframe');
        this.iframe.src = editorUrl;
        this.iframe.style.cssText = 'width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;';
        wrapper.appendChild(this.iframe);
        container.appendChild(wrapper);

        window.addEventListener('message', this.onMessageBound);
        void this.loadFile();
    }

    private async loadFile(): Promise<void> {
        if (!this.filePath) {
            this.xmlData = DEFAULT_DRAWIO_XML;
            this.fileLoaded = true;
            this.trySendLoad();
            return;
        }
        try {
            const response = await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);
            if (response.ok) {
                this.xmlData = normalizeDrawioXml(await response.text());
            } else if (response.status === 404) {
                this.xmlData = DEFAULT_DRAWIO_XML;
            } else {
                throw new Error(`HTTP ${response.status}`);
            }
            this.fileLoaded = true;
            this.trySendLoad();
        } catch (error) {
            if (this.overlay) {
                this.overlay.textContent = `Failed to load: ${error instanceof Error ? error.message : String(error)}`;
            }
        }
    }

    private trySendLoad(): void {
        if (this.disposed || this.loadSent || !this.editorReady || !this.fileLoaded || !this.iframe?.contentWindow) {
            return;
        }
        this.loadSent = true;
        this.iframe.contentWindow.postMessage(JSON.stringify({
            action: 'load',
            xml: normalizeDrawioXml(this.xmlData),
            autosave: 1,
            title: this.fileName,
        }), '*');
        if (this.overlay) this.overlay.style.display = 'none';
    }

    private queueSave(xml: string, acknowledge: boolean): void {
        if (!this.filePath || !xml) return;
        this.saveChain = this.saveChain.then(async () => {
            const response = await fetch('/workspace/file', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ path: this.filePath, content: xml }),
            });
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            if (acknowledge && this.iframe?.contentWindow) {
                this.iframe.contentWindow.postMessage(JSON.stringify({
                    action: 'status',
                    message: 'Saved',
                    modified: false,
                }), '*');
            }
        }).catch((error) => {
            console.error('[drawio-pane] save failed:', error);
            if (this.overlay) {
                this.overlay.style.display = 'flex';
                this.overlay.textContent = `Save failed: ${error instanceof Error ? error.message : String(error)}`;
            }
        });
    }

    private onMessage(event: MessageEvent): void {
        if (this.disposed || event.source !== this.iframe?.contentWindow) return;
        let msg: any;
        try {
            msg = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        } catch {
            return;
        }
        switch (msg?.event) {
            case 'init':
                this.editorReady = true;
                this.trySendLoad();
                break;
            case 'autosave':
                if (typeof msg.xml === 'string') this.queueSave(msg.xml, false);
                break;
            case 'save':
                if (typeof msg.xml === 'string') this.queueSave(msg.xml, true);
                break;
            case 'exit':
            case 'export':
            default:
                break;
        }
    }

    getContent(): string | undefined { return undefined; }
    isDirty(): boolean { return false; }
    focus(): void { this.iframe?.focus(); }
    resize(): void {}
    dispose(): void {
        if (this.disposed) return;
        this.disposed = true;
        window.removeEventListener('message', this.onMessageBound);
        if (this.iframe) {
            this.iframe.src = 'about:blank';
            this.iframe = null;
        }
        this.overlay = null;
        this.container.innerHTML = '';
    }
}

// ── Extension ───────────────────────────────────────────────────

export const drawioPaneExtension: WebPaneExtension = {
    id: 'drawio-editor',
    label: 'Draw.io Editor',
    icon: 'git-merge',   // closest available icon for diagrams
    capabilities: ['edit', 'preview'] as PaneCapability[],
    placement: 'tabs',

    canHandle(context: PaneContext): boolean | number {
        if (!isDrawioFile(context?.path)) return false;
        // Priority 60 — beats text editor (default) and office viewer
        return 60;
    },

    mount(container: HTMLElement, context: PaneContext): PaneInstance {
        if (context?.mode === 'view') {
            return new DrawioPreviewCard(container, context);
        }
        return new DrawioEditorInstance(container, context);
    },
};
