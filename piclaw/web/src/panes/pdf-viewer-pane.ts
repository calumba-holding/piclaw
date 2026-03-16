// @ts-nocheck
/**
 * pdf-viewer-pane.ts — WebPaneExtension for PDF preview + readonly tab viewing.
 */

import type { PaneCapability, PaneContext, PaneInstance, WebPaneExtension } from './pane-types.js';

const PDF_EXTENSIONS = /\.pdf$/i;

class PdfViewerInstance implements PaneInstance {
    private container: HTMLElement;
    private iframe: HTMLIFrameElement | null = null;
    private disposed = false;

    constructor(container: HTMLElement, context: PaneContext) {
        this.container = container;
        const filePath = context.path || '';
        const viewerUrl = `/pdf-viewer/?path=${encodeURIComponent(filePath)}`;

        this.iframe = document.createElement('iframe');
        this.iframe.src = viewerUrl;
        this.iframe.style.cssText = 'width:100%;height:100%;border:none;background:var(--bg-primary,#000);';
        container.appendChild(this.iframe);
    }

    getContent(): string | undefined { return undefined; }
    isDirty(): boolean { return false; }
    focus(): void { this.iframe?.focus(); }
    resize(): void {}
    dispose(): void {
        if (this.disposed) return;
        this.disposed = true;
        if (this.iframe) {
            this.iframe.src = 'about:blank';
            this.iframe = null;
        }
        this.container.innerHTML = '';
    }
}

export const pdfViewerPaneExtension: WebPaneExtension = {
    id: 'pdf-viewer',
    label: 'PDF Viewer',
    icon: 'file-text',
    capabilities: ['readonly', 'preview'] as PaneCapability[],
    placement: 'tabs',

    canHandle(context: PaneContext): boolean | number {
        const path = context?.path || '';
        if (!PDF_EXTENSIONS.test(path)) return false;
        return 52;
    },

    mount(container: HTMLElement, context: PaneContext): PaneInstance {
        return new PdfViewerInstance(container, context);
    },
};
