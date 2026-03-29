import { getLocalStorageItem } from '../utils/storage.js';

/** Shared localStorage key for the BTW side-conversation session cache. */
export const BTW_SESSION_KEY = 'piclaw_btw_session';

/** Cooldown window that prevents duplicate branch-rename submits. */
export const RENAME_BRANCH_FORM_GUARD_MS = 900;

/** Window-global lock key used to share rename-submit state across reloads/HMR. */
export const RENAME_BRANCH_FORM_LOCK_KEY = '__piclawRenameBranchFormLock__';

function getDefaultImportMetaUrl() {
    try {
        return import.meta.url;
    } catch {
        return null;
    }
}

function readModeParam(raw) {
    const value = typeof raw === 'string' ? raw.trim().toLowerCase() : '';
    return value === '1' || value === 'true' || value === 'yes';
}

function readTextParam(locationParams, key, fallback = '') {
    const raw = locationParams?.get?.(key);
    return raw && raw.trim() ? raw.trim() : fallback;
}

/**
 * Resolve the current authenticated app bundle version from import.meta or the loaded script tag.
 *
 * @param {object} [options]
 * @param {string|null|undefined} [options.importMetaUrl]
 * @param {DocumentLike|null|undefined} [options.document]
 * @param {string|null|undefined} [options.origin]
 * @returns {string|null}
 */
export function getCurrentAppAssetVersion(options = {}) {
    const importMetaUrl = options.importMetaUrl === undefined ? getDefaultImportMetaUrl() : options.importMetaUrl;
    const doc = options.document === undefined ? (typeof document !== 'undefined' ? document : null) : options.document;
    const origin = options.origin === undefined ? (typeof window !== 'undefined' ? window.location.origin : 'http://localhost') : options.origin;

    try {
        const direct = importMetaUrl ? new URL(importMetaUrl).searchParams.get('v') : null;
        if (direct && direct.trim()) return direct.trim();
    } catch {
        /* expected: importMetaUrl may be missing or malformed in some contexts. */
    }

    try {
        const script = Array.from(doc?.querySelectorAll?.('script[type="module"][src]') || [])
            .find((node) => String(node?.getAttribute?.('src') || '').includes('/static/dist/app.bundle.js'));
        const src = script?.getAttribute?.('src') || '';
        if (!src) return null;
        const resolved = new URL(src, origin || 'http://localhost');
        const fallback = resolved.searchParams.get('v');
        return fallback && fallback.trim() ? fallback.trim() : null;
    } catch {
        return null;
    }
}

/** Return the shared cross-reload branch-rename form lock. */
export function getRenameBranchFormLock(options = {}) {
    const win = options.window === undefined ? (typeof window !== 'undefined' ? window : null) : options.window;
    if (!win) return null;
    const existing = win[RENAME_BRANCH_FORM_LOCK_KEY];
    if (existing && typeof existing === 'object') {
        return existing;
    }
    const created = { inFlight: false, cooldownUntil: 0 };
    win[RENAME_BRANCH_FORM_LOCK_KEY] = created;
    return created;
}

/** Human-readable label for the active timeline search scope. */
export function describeSearchScope(scope) {
    if (scope === 'root') return 'Branch family';
    if (scope === 'all') return 'All chats';
    return 'Current branch';
}

/**
 * Load the persisted BTW side-conversation snapshot from local storage.
 *
 * @param {object} [options]
 * @param {(key: string) => string | null | undefined} [options.readItem]
 * @param {string} [options.storageKey]
 * @returns {{question: string, answer: string, thinking: string, error: string | null, model: null, status: 'success' | 'error'} | null}
 */
export function loadStoredBtwSession(options = {}) {
    const readItem = typeof options.readItem === 'function' ? options.readItem : getLocalStorageItem;
    const storageKey = options.storageKey || BTW_SESSION_KEY;
    const raw = readItem(storageKey);
    if (!raw) return null;
    try {
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== 'object') return null;
        const question = typeof parsed.question === 'string' ? parsed.question : '';
        const answer = typeof parsed.answer === 'string' ? parsed.answer : '';
        const thinking = typeof parsed.thinking === 'string' ? parsed.thinking : '';
        const error = typeof parsed.error === 'string' && parsed.error.trim() ? parsed.error : null;
        const status = parsed.status === 'running'
            ? 'error'
            : (parsed.status === 'success' || parsed.status === 'error' ? parsed.status : 'success');
        return {
            question,
            answer,
            thinking,
            error: status === 'error' ? (error || 'BTW stream interrupted. You can retry.') : error,
            model: null,
            status,
        };
    } catch {
        return null;
    }
}

/**
 * Parse location-driven shell modes for the main app.
 *
 * @param {URLSearchParams | { get(key: string): string | null }} locationParams
 * @param {{ defaultChatJid?: string }} [options]
 * @returns {{
 *   currentChatJid: string,
 *   chatOnlyMode: boolean,
 *   panePopoutMode: boolean,
 *   panePopoutPath: string,
 *   panePopoutLabel: string,
 *   branchLoaderMode: boolean,
 *   branchLoaderSourceChatJid: string,
 * }}
 */
export function readAppLocationModes(locationParams, options = {}) {
    const defaultChatJid = options.defaultChatJid || 'web:default';
    const currentChatJid = readTextParam(locationParams, 'chat_jid', defaultChatJid);
    const chatOnlyMode = readModeParam(locationParams?.get?.('chat_only') || locationParams?.get?.('chat-only'));
    const panePopoutMode = readModeParam(locationParams?.get?.('pane_popout'));
    const panePopoutPath = readTextParam(locationParams, 'pane_path');
    const panePopoutLabel = readTextParam(locationParams, 'pane_label');
    const branchLoaderMode = readModeParam(locationParams?.get?.('branch_loader'));
    const branchLoaderSourceChatJid = readTextParam(locationParams, 'branch_source_chat_jid', currentChatJid);

    return {
        currentChatJid,
        chatOnlyMode,
        panePopoutMode,
        panePopoutPath,
        panePopoutLabel,
        branchLoaderMode,
        branchLoaderSourceChatJid,
    };
}

/**
 * @typedef {{
 *   querySelectorAll?(selector: string): ArrayLike<{ getAttribute?(name: string): string | null | undefined }> | null | undefined,
 * }} DocumentLike
 */
