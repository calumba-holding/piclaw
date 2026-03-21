// @ts-nocheck
import { html, useEffect, useMemo } from '../vendor/preact-htm.js';
import { buildWidgetSrcDoc } from '../ui/generated-widget.js';

export function FloatingWidgetPane({ widget, onClose }) {
    useEffect(() => {
        if (!widget) return undefined;
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose?.();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [widget, onClose]);

    const srcDoc = useMemo(() => buildWidgetSrcDoc(widget), [widget]);
    if (!widget) return null;

    const artifact = widget?.artifact || {};
    const kind = artifact.kind || widget?.kind || 'html';
    const title = typeof widget?.title === 'string' && widget.title.trim() ? widget.title.trim() : 'Generated widget';
    const subtitle = typeof widget?.subtitle === 'string' && widget.subtitle.trim() ? widget.subtitle.trim() : '';
    const originLabel = widget?.originPostId ? `Message #${widget.originPostId}` : 'Timeline launch';
    const description = typeof widget?.description === 'string' && widget.description.trim() ? widget.description.trim() : '';
    const emptyState = !srcDoc;

    return html`
        <div class="floating-widget-backdrop" onClick=${() => onClose?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${title}
                onClick=${(e) => e.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${originLabel} • ${kind.toUpperCase()}</div>
                        <div class="floating-widget-title">${title}</div>
                        ${(subtitle || description) && html`
                            <div class="floating-widget-subtitle">${subtitle || description}</div>
                        `}
                    </div>
                    <button
                        class="floating-widget-close"
                        type="button"
                        onClick=${() => onClose?.()}
                        title="Close widget"
                        aria-label="Close widget"
                    >
                        Close
                    </button>
                </div>
                <div class="floating-widget-body">
                    ${emptyState
                        ? html`<div class="floating-widget-empty">Widget artifact is missing or unsupported.</div>`
                        : html`
                            <iframe
                                class="floating-widget-frame"
                                title=${title}
                                sandbox="allow-downloads"
                                referrerpolicy="no-referrer"
                                srcdoc=${srcDoc}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `;
}
