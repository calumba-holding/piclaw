/**
 * link.ts — Link and image decorations.
 *
 * Links: replace markdown syntax with clickable link widget.
 * Images: show inline image widget with optional caption.
 *
 * Lezer structure:
 *   Link  → LinkMark("[") + content + LinkMark("](") + URL + LinkMark(")")
 *   Image → LinkMark("![") + content + LinkMark("](") + URL + LinkMark(")")
 */
import { registerDecorator, Decoration, WidgetType } from './live-preview.js';
import type { DecorationEntry, SyntaxNode, EditorView } from './live-preview.js';

function normalizeLinkHref(raw: string): string | null {
    const value = raw.trim();
    if (!value) return null;

    // Allow anchors and site-relative links as-is.
    if (value.startsWith('#') || value.startsWith('/')) return value;

    try {
        const parsed = new URL(value, window.location.href);
        const allowed = new Set(['http:', 'https:', 'mailto:', 'tel:', 'file:']);
        if (!allowed.has(parsed.protocol)) return null;
        return parsed.href;
    } catch {
        return null;
    }
}

function normalizeLinkTitle(raw: string): string {
    const trimmed = raw.trim();
    if (!trimmed) return '';
    if ((trimmed.startsWith('"') && trimmed.endsWith('"'))
        || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
        return trimmed.slice(1, -1).trim();
    }
    return trimmed;
}

class LinkWidget extends WidgetType {
    text: string;
    rawUrl: string;
    title: string;

    constructor(text: string, rawUrl: string, title = '') {
        super();
        this.text = text;
        this.rawUrl = rawUrl;
        this.title = title;
    }

    toDOM(): HTMLElement {
        const anchor = document.createElement('a');
        anchor.className = 'cm-md-link cm-md-link-widget';
        anchor.textContent = this.text || this.rawUrl;

        const href = normalizeLinkHref(this.rawUrl);
        if (href) {
            anchor.href = href;
            anchor.target = '_blank';
            anchor.rel = 'noopener noreferrer';
        } else {
            anchor.href = '#';
            anchor.classList.add('cm-md-link-invalid');
        }

        anchor.title = this.title || this.rawUrl;

        // Keep editor focus stable; open links intentionally on click.
        anchor.addEventListener('mousedown', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!href) return;
            window.open(href, '_blank', 'noopener,noreferrer');
        });

        return anchor;
    }

    eq(other: LinkWidget): boolean {
        return this.text === other.text
            && this.rawUrl === other.rawUrl
            && this.title === other.title;
    }

    ignoreEvent(): boolean {
        return false;
    }
}

function linkDecorator(node: SyntaxNode, view: EditorView): DecorationEntry[] {
    const marks: SyntaxNode[] = [];
    let urlNode: SyntaxNode | null = null;
    let titleNode: SyntaxNode | null = null;

    for (let child = node.firstChild; child; child = child.nextSibling) {
        if (child.type.name === 'LinkMark') marks.push(child);
        else if (child.type.name === 'URL') urlNode = child;
        else if (child.type.name === 'LinkTitle') titleNode = child;
    }

    if (marks.length < 2 || !urlNode) return [];

    const openMark = marks[0];
    const secondMark = marks[1];

    const textFrom = openMark.to;
    const textTo = secondMark.from;
    const text = view.state.doc.sliceString(textFrom, textTo);
    const url = view.state.doc.sliceString(urlNode.from, urlNode.to);
    const title = titleNode
        ? normalizeLinkTitle(view.state.doc.sliceString(titleNode.from, titleNode.to))
        : '';

    return [{
        from: node.from,
        to: node.to,
        decoration: Decoration.replace({
            widget: new LinkWidget(text, url, title),
        }),
    }];
}

class ImageWidget extends WidgetType {
    url: string;
    alt: string;

    constructor(url: string, alt: string) {
        super();
        this.url = url;
        this.alt = alt;
    }

    toDOM(): HTMLElement {
        const wrapper = document.createElement('figure');
        wrapper.className = 'cm-md-image-wrap';

        const img = document.createElement('img');
        img.src = this.url;
        img.alt = this.alt;
        img.className = 'cm-md-image';
        img.loading = 'lazy';
        img.decoding = 'async';

        img.addEventListener('mousedown', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
        img.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const href = normalizeLinkHref(this.url);
            if (!href) return;
            window.open(href, '_blank', 'noopener,noreferrer');
        });

        img.onerror = () => {
            img.remove();
            const fallback = document.createElement('span');
            fallback.className = 'cm-md-image-fallback';
            fallback.textContent = this.alt ? `[Image: ${this.alt}]` : '[Image unavailable]';
            wrapper.appendChild(fallback);
        };

        wrapper.appendChild(img);

        if (this.alt.trim()) {
            const caption = document.createElement('figcaption');
            caption.className = 'cm-md-image-caption';
            caption.textContent = this.alt;
            wrapper.appendChild(caption);
        }

        return wrapper;
    }

    eq(other: ImageWidget): boolean {
        return this.url === other.url && this.alt === other.alt;
    }

    ignoreEvent(): boolean {
        return false;
    }
}

function imageDecorator(node: SyntaxNode, view: EditorView): DecorationEntry[] {
    let urlNode: SyntaxNode | null = null;
    let altText = '';

    // Collect children
    const marks: SyntaxNode[] = [];
    for (let child = node.firstChild; child; child = child.nextSibling) {
        if (child.type.name === 'URL') urlNode = child;
        else if (child.type.name === 'LinkMark') marks.push(child);
    }

    if (!urlNode) return [];

    const url = view.state.doc.sliceString(urlNode.from, urlNode.to);

    // Extract alt text: content between first mark end and second mark start
    if (marks.length >= 2) {
        altText = view.state.doc.sliceString(marks[0].to, marks[1].from);
    }

    // Replace entire image syntax with widget
    return [{
        from: node.from,
        to: node.to,
        decoration: Decoration.replace({
            widget: new ImageWidget(url, altText),
        }),
    }];
}

registerDecorator('Link', linkDecorator);
registerDecorator('Image', imageDecorator);
