// @ts-nocheck
import { html, useEffect, useMemo, useRef } from '../vendor/preact-htm.js';
import {
    buildWidgetSrcDoc,
    getGeneratedWidgetEmptyStateMessage,
    getGeneratedWidgetHostPayload,
    getGeneratedWidgetIframeSandbox,
    getGeneratedWidgetInitPayload,
    getGeneratedWidgetSessionKey,
} from '../ui/generated-widget.js';

export function FloatingWidgetPane({ widget, onClose, onWidgetEvent }) {
    const frameRef = useRef(null);
    const frameLoadedRef = useRef(false);
    const srcDoc = useMemo(() => buildWidgetSrcDoc(widget), [widget]);

    useEffect(() => {
        if (!widget) return undefined;
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose?.();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [widget, onClose]);

    useEffect(() => {
        frameLoadedRef.current = false;
    }, [srcDoc]);

    useEffect(() => {
        if (!widget) return undefined;
        const iframe = frameRef.current;
        if (!iframe) return undefined;

        const postToFrame = (type) => {
            try {
                iframe.contentWindow?.postMessage({
                    __piclawGeneratedWidgetHost: true,
                    type,
                    widgetId: widget?.widgetId || null,
                    toolCallId: widget?.toolCallId || null,
                    turnId: widget?.turnId || null,
                    payload: type === 'widget.init'
                        ? getGeneratedWidgetInitPayload(widget)
                        : getGeneratedWidgetHostPayload(widget),
                }, '*');
            } catch {}
        };

        const handleLoad = () => {
            if (frameLoadedRef.current) return;
            frameLoadedRef.current = true;
            postToFrame('widget.init');
            postToFrame('widget.update');
        };

        iframe.addEventListener('load', handleLoad);

        const readyState = iframe.contentDocument?.readyState;
        if (readyState === 'complete' || readyState === 'interactive') {
            queueMicrotask(handleLoad);
        }

        return () => iframe.removeEventListener('load', handleLoad);
    }, [widget, srcDoc]);

    useEffect(() => {
        if (!widget || !frameLoadedRef.current) return undefined;
        const iframe = frameRef.current;
        if (!iframe?.contentWindow) return undefined;
        try {
            iframe.contentWindow.postMessage({
                __piclawGeneratedWidgetHost: true,
                type: 'widget.update',
                widgetId: widget?.widgetId || null,
                toolCallId: widget?.toolCallId || null,
                turnId: widget?.turnId || null,
                payload: getGeneratedWidgetHostPayload(widget),
            }, '*');
        } catch {}
        return undefined;
    }, [widget]);

    useEffect(() => {
        if (!widget) return undefined;
        const handleMessage = (event) => {
            const iframe = frameRef.current;
            if (!iframe?.contentWindow || event.source !== iframe.contentWindow) return;
            const data = event?.data;
            if (!data || data.__piclawGeneratedWidget !== true) return;

            const incomingKey = getGeneratedWidgetSessionKey({
                widgetId: data.widgetId,
                toolCallId: data.toolCallId,
            });
            const currentKey = getGeneratedWidgetSessionKey(widget);
            if (incomingKey && currentKey && incomingKey !== currentKey) return;

            onWidgetEvent?.(data, widget);
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [widget, onWidgetEvent]);

    if (!widget) return null;

    const artifact = widget?.artifact || {};
    const kind = artifact.kind || widget?.kind || 'html';
    const title = typeof widget?.title === 'string' && widget.title.trim() ? widget.title.trim() : 'Generated widget';
    const subtitle = typeof widget?.subtitle === 'string' && widget.subtitle.trim() ? widget.subtitle.trim() : '';
    const source = widget?.source === 'live' ? 'live' : 'timeline';
    const status = typeof widget?.status === 'string' && widget.status.trim() ? widget.status.trim() : 'final';
    const originLabel = source === 'live'
        ? `Live widget • ${status.toUpperCase()}`
        : (widget?.originPostId ? `Message #${widget.originPostId}` : 'Timeline launch');
    const description = typeof widget?.description === 'string' && widget.description.trim() ? widget.description.trim() : '';
    const emptyState = !srcDoc;
    const emptyMessage = getGeneratedWidgetEmptyStateMessage(widget);
    const sandbox = getGeneratedWidgetIframeSandbox(widget);

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
                        ? html`<div class="floating-widget-empty">${emptyMessage}</div>`
                        : html`
                            <iframe
                                ref=${frameRef}
                                class="floating-widget-frame"
                                title=${title}
                                sandbox=${sandbox}
                                referrerpolicy="no-referrer"
                                srcdoc=${srcDoc}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `;
}
