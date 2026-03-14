// @ts-nocheck
import { html, useEffect, useMemo, useRef, useState } from '../vendor/preact-htm.js';
import { getMediaBlob, getMediaText, getMediaUrl } from '../api.js';
import { renderMarkdown, renderMermaidDiagrams } from '../markdown.js';
import { formatFileSize, formatTimestamp } from '../utils/format.js';
import { getAttachmentPreviewKind, getAttachmentPreviewLabel, isMarkdownAttachmentPreview } from '../ui/attachment-preview.js';

function buildMetadata(info) {
    const size = info?.metadata?.size;
    const contentType = info?.content_type || 'application/octet-stream';
    return [
        { label: 'Type', value: contentType },
        { label: 'Size', value: typeof size === 'number' ? formatFileSize(size) : null },
        { label: 'Added', value: info?.created_at ? formatTimestamp(info.created_at) : null },
    ].filter((entry) => entry.value);
}

export function AttachmentPreviewModal({ mediaId, info, onClose }) {
    const filename = info?.filename || `attachment-${mediaId}`;
    const previewKind = useMemo(() => getAttachmentPreviewKind(info?.content_type), [info?.content_type]);
    const previewLabel = getAttachmentPreviewLabel(previewKind);
    const isMarkdown = useMemo(() => isMarkdownAttachmentPreview(info?.content_type), [info?.content_type]);
    const [loading, setLoading] = useState(previewKind === 'text' || previewKind === 'pdf');
    const [textContent, setTextContent] = useState('');
    const [blobUrl, setBlobUrl] = useState(null);
    const [error, setError] = useState(null);
    const markdownContainerRef = useRef(null);
    const metadata = useMemo(() => buildMetadata(info), [info]);
    const renderedMarkdown = useMemo(() => {
        if (!isMarkdown || !textContent) return '';
        return renderMarkdown(textContent);
    }, [isMarkdown, textContent]);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    useEffect(() => {
        if (!markdownContainerRef.current || !renderedMarkdown) return undefined;
        renderMermaidDiagrams(markdownContainerRef.current);
        return undefined;
    }, [renderedMarkdown]);

    useEffect(() => {
        let cancelled = false;
        let localBlobUrl = null;

        async function loadPreview() {
            if (previewKind === 'text') {
                setLoading(true);
                setError(null);
                try {
                    const text = await getMediaText(mediaId);
                    if (!cancelled) setTextContent(text);
                } catch {
                    if (!cancelled) setError('Failed to load text preview.');
                } finally {
                    if (!cancelled) setLoading(false);
                }
                return;
            }

            if (previewKind === 'pdf') {
                setLoading(true);
                setError(null);
                try {
                    const blob = await getMediaBlob(mediaId);
                    localBlobUrl = URL.createObjectURL(blob);
                    if (!cancelled) setBlobUrl(localBlobUrl);
                } catch {
                    if (!cancelled) setError('Failed to load PDF preview.');
                } finally {
                    if (!cancelled) setLoading(false);
                }
                return;
            }

            setLoading(false);
        }

        void loadPreview();

        return () => {
            cancelled = true;
            if (localBlobUrl) URL.revokeObjectURL(localBlobUrl);
        };
    }, [mediaId, previewKind]);

    return html`
        <div class="image-modal attachment-preview-modal" onClick=${onClose}>
            <div class="attachment-preview-shell" onClick=${(e) => { e.stopPropagation(); }}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${filename}</div>
                        <div class="attachment-preview-subtitle">${previewLabel}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        <a
                            href=${getMediaUrl(mediaId)}
                            download=${filename}
                            class="attachment-preview-download"
                            onClick=${(e) => e.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${onClose}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${loading && html`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!loading && error && html`<div class="attachment-preview-state">${error}</div>`}
                    ${!loading && !error && previewKind === 'image' && html`
                        <img class="attachment-preview-image" src=${getMediaUrl(mediaId)} alt=${filename} />
                    `}
                    ${!loading && !error && previewKind === 'pdf' && blobUrl && html`
                        <iframe class="attachment-preview-frame" src=${blobUrl} title=${filename}></iframe>
                    `}
                    ${!loading && !error && previewKind === 'text' && isMarkdown && html`
                        <div
                            ref=${markdownContainerRef}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{ __html: renderedMarkdown }}
                        />
                    `}
                    ${!loading && !error && previewKind === 'text' && !isMarkdown && html`
                        <pre class="attachment-preview-text">${textContent}</pre>
                    `}
                    ${!loading && !error && previewKind === 'unsupported' && html`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${metadata.map((entry) => html`
                        <div class="attachment-preview-meta-item" key=${entry.label}>
                            <span class="attachment-preview-meta-label">${entry.label}</span>
                            <span class="attachment-preview-meta-value">${entry.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `;
}
