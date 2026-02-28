// @ts-nocheck
import { html, useRef, useState } from '../vendor/preact-htm.js';
import { sendAgentMessage, uploadMedia } from '../api.js';

/**
 * Compose box component
 */
export function ComposeBox({ onPost, onFocus, searchMode, onSearch, onEnterSearch, onExitSearch }) {
    const [content, setContent] = useState('');
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);
    const [mediaFiles, setMediaFiles] = useState([]);
    const textareaRef = useRef(null);

    const handleSubmit = async () => {
        if (!content.trim() && mediaFiles.length === 0) return;

        setLoading(true);
        try {
            // Upload media files first
            const mediaIds = [];
            for (const file of mediaFiles) {
                const result = await uploadMedia(file);
                mediaIds.push(result.id);
            }

            // Send to agent by default
            await sendAgentMessage('default', content, null, mediaIds);

            setContent('');
            setMediaFiles([]);
            onPost?.();
        } catch (error) {
            console.error('Failed to post:', error);
            alert('Failed to post: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (searchMode) {
                if (searchText.trim()) {
                    onSearch?.(searchText.trim());
                }
            } else {
                handleSubmit();
            }
        }
    };

    const handleFileChange = (e) => {
        setMediaFiles([...e.target.files]);
    };

    // Auto-resize textarea
    const handleInput = (e) => {
        const value = e.target.value;
        if (searchMode) {
            setSearchText(value);
        } else {
            setContent(value);
        }
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
        }
    };

    return html`
        <div class="compose-box">
            <div class="compose-input-wrapper">
                <textarea
                    ref=${textareaRef}
                    placeholder=${searchMode ? "Search (Enter to run)..." : "Message (Enter to send, Shift+Enter for newline)..."}
                    value=${searchMode ? searchText : content}
                    onInput=${handleInput}
                    onKeyDown=${handleKeyDown}
                    onFocus=${onFocus}
                    onClick=${onFocus}
                    disabled=${loading}
                    rows="1"
                />
                <div class="compose-actions ${searchMode ? 'search-mode' : ''}">
                    <button
                        class="icon-btn search-toggle"
                        onClick=${searchMode ? onExitSearch : onEnterSearch}
                        title=${searchMode ? "Close search" : "Search"}
                    >
                        ${searchMode ? html`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        ` : html`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${!searchMode && html`
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${handleFileChange} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            onClick=${handleSubmit}
                            disabled=${loading || (!content.trim() && mediaFiles.length === 0)}
                            title="Send (Ctrl+Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
            ${mediaFiles.length > 0 && html`
                <div class="media-files-preview">
                    ${mediaFiles.map(f => html`<span key=${f.name} class="media-file-tag">${f.name}</span>`)}
                </div>
            `}
        </div>
    `;
}
