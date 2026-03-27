// @ts-nocheck
/**
 * app.ts - Main web UI entry point.
 *
 * This file is the root of the authenticated SPA. It imports all components,
 * the API client, and the markdown renderer, and is bundled to:
 *   web/static/dist/app.bundle.js
 *
 * Bundle split:
 *   - app.bundle.js   (authenticated web UI)
 *   - login.bundle.js (login page behavior only)
 *
 * Auth segmentation:
 *   request-router-service.ts only exposes login.bundle.js to unauthenticated
 *   visitors. app.bundle.js remains auth-gated.
 */
import { html, render, useState, useEffect, useCallback, useRef, useMemo } from './vendor/preact-htm.js';
import * as api from './api.js';
import { ComposeBox, QueuedFollowupStack } from './components/compose-box.js';
import { BtwPanel } from './components/btw-panel.js';
import { FloatingWidgetPane } from './components/floating-widget-pane.js';
import { AgentRequestModal, AgentStatus } from './components/status.js';
import { Timeline } from './components/timeline.js';
import { WorkspaceExplorer } from './components/workspace-explorer.js';
import { TabStrip } from './components/tab-strip.js';
import { MarkdownPreview } from './components/markdown-preview.js';
import { paneRegistry, editorPaneExtension, preloadEditorBundle, terminalPaneExtension, terminalTabPaneExtension, TERMINAL_TAB_PATH, vncPaneExtension, VNC_TAB_PREFIX, workspacePreviewPaneExtension, workspaceMarkdownPreviewPaneExtension, officeViewerPaneExtension, csvViewerPaneExtension, pdfViewerPaneExtension, imageViewerPaneExtension, videoViewerPaneExtension, drawioPaneExtension, mindmapPaneExtension, kanbanPaneExtension, tabStore } from './panes/index.js';
import { getLocalStorageBoolean, getLocalStorageItem, getLocalStorageNumber, setLocalStorageItem } from './utils/storage.js';
import { useSseConnection } from './ui/use-sse-connection.js';
import { useNotifications } from './ui/use-notifications.js';
import { useTimeline } from './ui/use-timeline.js';
import { dedupePosts } from './ui/timeline-utils.js';
import { useAgentState } from './ui/use-agent-state.js';
import { useSplitters } from './ui/use-splitters.js';
import { useEditorState } from './ui/use-editor-state.js';
import { initTheme, applyThemeFromEvent } from './ui/theme.js';
import {
    LAST_ACTIVITY_TTL_MS,
    SILENCE_FINALIZE_MS,
    SILENCE_REFRESH_MS,
    SILENCE_WARNING_MS,
    buildAgentsMap,
    estimatePreviewLines,
    isIOSDevice,
    useTimestampRefresh,
} from './ui/app-helpers.js';
import { resolveFilePillOpenAction } from './ui/file-pill-open.js';
import { parseBtwCommand, buildBtwInjectionText, resolveBtwChatJid } from './ui/btw.js';
import {
    buildBranchLoaderUrl,
    buildChatWindowUrl,
    buildPanePopoutUrl,
    closeProvisionalChatWindow,
    describeBranchOpenError,
    getChatWindowOpenOptions,
    getPaneWindowOpenOptions,
    navigateProvisionalChatWindow,
    openProvisionalChatWindow,
    isStandaloneWebAppMode,
    primeProvisionalChatWindow,
} from './ui/chat-window.js';
import { resolveQueueActionChatJid, shouldClearQueuedSteerState } from './ui/queue-state.js';
import {
    normalizeLiveGeneratedWidgetPayload,
    getGeneratedWidgetSessionKey,
    getGeneratedWidgetSubmissionText,
    getGeneratedWidgetShouldCloseOnSubmit,
} from './ui/generated-widget.js';
import { isCompactionStatus } from './ui/status-duration.js';
import { installStandaloneMobileViewportFix } from './ui/mobile-viewport.js';
import { resolveOptionalApi } from './ui/optional-api.js';
import { dispatchExtensionUiBrowserEvent, isExtensionUiEventType } from './ui/extension-ui-events.js';
import { watchReturnToApp, watchStandaloneWebAppMode } from './ui/app-resume.js';
import { describeBranchRestoreResult, formatBranchPickerLabel, getBranchHandleDraftState } from './ui/branch-lifecycle.js';

const BTW_SESSION_KEY = 'piclaw_btw_session';

const RENAME_BRANCH_FORM_GUARD_MS = 900;
const RENAME_BRANCH_FORM_LOCK_KEY = '__piclawRenameBranchFormLock__';

/**
 * Shared lock object kept on `window` so duplicate rename forms/submits are blocked
 * even if this module gets re-evaluated (HMR/reload) or invoked via a different app
 * instance in the same page lifecycle.
 */
const getRenameBranchFormLock = () => {
    if (typeof window === 'undefined') return null;
    const win = window;
    const key = RENAME_BRANCH_FORM_LOCK_KEY;
    const existing = (win as any)[key];
    if (existing && typeof existing === 'object') {
        return existing;
    }
    const created = { inFlight: false, cooldownUntil: 0 };
    (win as any)[key] = created;
    return created;
};

function describeSearchScope(scope) {
    if (scope === 'root') return 'Branch family';
    if (scope === 'all') return 'All chats';
    return 'Current branch';
}

function loadStoredBtwSession() {
    const raw = getLocalStorageItem(BTW_SESSION_KEY);
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

const searchPosts = api.searchPosts;
const deletePost = api.deletePost;
const getAgents = api.getAgents;
const getAgentThought = api.getAgentThought;
const setAgentThoughtVisibility = api.setAgentThoughtVisibility;
const getAgentStatus = api.getAgentStatus;
const getAgentContext = resolveOptionalApi(api, 'getAgentContext', null);
const getAutoresearchStatus = resolveOptionalApi(api, 'getAutoresearchStatus', null);
const stopAutoresearch = resolveOptionalApi(api, 'stopAutoresearch', { status: 'ok' });
const dismissAutoresearch = resolveOptionalApi(api, 'dismissAutoresearch', { status: 'ok' });
const getAgentModels = resolveOptionalApi(api, 'getAgentModels', { current: null, models: [] });
const getActiveChatAgents = resolveOptionalApi(api, 'getActiveChatAgents', { chats: [] });
const getChatBranches = resolveOptionalApi(api, 'getChatBranches', { chats: [] });
const renameChatBranch = resolveOptionalApi(api, 'renameChatBranch', null);
const pruneChatBranch = resolveOptionalApi(api, 'pruneChatBranch', null);
const restoreChatBranch = resolveOptionalApi(api, 'restoreChatBranch', null);
const getAgentQueueState = resolveOptionalApi(api, 'getAgentQueueState', { count: 0 });
const steerAgentQueueItem = resolveOptionalApi(api, 'steerAgentQueueItem', { removed: false, queued: 'steer' });
const removeAgentQueueItem = resolveOptionalApi(api, 'removeAgentQueueItem', { removed: false });
const streamSidePrompt = resolveOptionalApi(api, 'streamSidePrompt', null);

// Configure marked for safe rendering
if (window.marked) {
    marked.setOptions({
        breaks: true,  // Convert \n to <br>
        gfm: true,     // GitHub Flavored Markdown
    });
}

/**
 * Main App component
 */
// Register built-in pane extensions
paneRegistry.register(editorPaneExtension);
paneRegistry.register(workspacePreviewPaneExtension);
paneRegistry.register(workspaceMarkdownPreviewPaneExtension);
paneRegistry.register(officeViewerPaneExtension);
paneRegistry.register(csvViewerPaneExtension);
paneRegistry.register(pdfViewerPaneExtension);
paneRegistry.register(imageViewerPaneExtension);
paneRegistry.register(videoViewerPaneExtension);
paneRegistry.register(drawioPaneExtension);
paneRegistry.register(mindmapPaneExtension);
paneRegistry.register(kanbanPaneExtension);
paneRegistry.register(vncPaneExtension);
// Preload the editor bundle in the background so first file open is instant
preloadEditorBundle();

// Terminal dock pane is now part of the default web UI surface.
paneRegistry.register(terminalPaneExtension);
// Terminal can also be opened as a full tab via a synthetic path.
paneRegistry.register(terminalTabPaneExtension);

function MainApp({ locationParams, navigate }) {
    const currentChatJid = useMemo(() => {
        const raw = locationParams.get('chat_jid');
        return raw && raw.trim() ? raw.trim() : 'web:default';
    }, [locationParams]);
    const chatOnlyMode = useMemo(() => {
        const raw = (locationParams.get('chat_only') || locationParams.get('chat-only') || '').trim().toLowerCase();
        return raw === '1' || raw === 'true' || raw === 'yes';
    }, [locationParams]);
    const panePopoutMode = useMemo(() => {
        const raw = (locationParams.get('pane_popout') || '').trim().toLowerCase();
        return raw === '1' || raw === 'true' || raw === 'yes';
    }, [locationParams]);
    const panePopoutPath = useMemo(() => {
        const raw = locationParams.get('pane_path');
        return raw && raw.trim() ? raw.trim() : '';
    }, [locationParams]);
    const panePopoutLabel = useMemo(() => {
        const raw = locationParams.get('pane_label');
        return raw && raw.trim() ? raw.trim() : '';
    }, [locationParams]);
    const branchLoaderMode = useMemo(() => {
        const raw = (locationParams.get('branch_loader') || '').trim().toLowerCase();
        return raw === '1' || raw === 'true' || raw === 'yes';
    }, [locationParams]);
    const branchLoaderSourceChatJid = useMemo(() => {
        const raw = locationParams.get('branch_source_chat_jid');
        return raw && raw.trim() ? raw.trim() : currentChatJid;
    }, [currentChatJid, locationParams]);

    const [connectionStatus, setConnectionStatus] = useState('disconnected');
    const [isWebAppMode, setIsWebAppMode] = useState(() => isStandaloneWebAppMode());
    const [currentHashtag, setCurrentHashtag] = useState(null);
    const [searchQuery, setSearchQuery] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchScope, setSearchScope] = useState('current');
    const [fileRefs, setFileRefs] = useState([]);
    const [messageRefs, setMessageRefs] = useState([]);
    const [intentToast, setIntentToast] = useState(null);
    const {
        agentStatus,
        setAgentStatus,
        agentDraft,
        setAgentDraft,
        agentPlan,
        setAgentPlan,
        agentThought,
        setAgentThought,
        pendingRequest,
        setPendingRequest,
        currentTurnId,
        setCurrentTurnId,
        steerQueuedTurnId,
        setSteerQueuedTurnId,
        lastAgentEventRef,
        lastSilenceNoticeRef,
        isAgentRunningRef,
        draftBufferRef,
        thoughtBufferRef,
        pendingRequestRef,
        stalledPostIdRef,
        currentTurnIdRef,
        steerQueuedTurnIdRef,
        thoughtExpandedRef,
        draftExpandedRef,
    } = useAgentState();
    const [agents, setAgents] = useState({});
    const [activeModel, setActiveModel] = useState(null);
    const [activeThinkingLevel, setActiveThinkingLevel] = useState(null);
    const [supportsThinking, setSupportsThinking] = useState(false);
    const [activeModelUsage, setActiveModelUsage] = useState(null);
    const [activeChatAgents, setActiveChatAgents] = useState([]);
    const [currentChatBranches, setCurrentChatBranches] = useState([]);
    const [contextUsage, setContextUsage] = useState(null);
    const [extensionStatusPanels, setExtensionStatusPanels] = useState(() => new Map());
    const [pendingExtensionPanelActions, setPendingExtensionPanelActions] = useState(() => new Set());
    const [followupQueueItems, setFollowupQueueItems] = useState([]);
    const [isAgentTurnActive, setIsAgentTurnActive] = useState(false);
    const [btwSession, setBtwSession] = useState(() => loadStoredBtwSession());
    const [floatingWidget, setFloatingWidget] = useState(null);
    const dismissedLiveWidgetKeysRef = useRef(new Set());
    const currentChatAgent = useMemo(
        () => activeChatAgents.find((chat) => chat?.chat_jid === currentChatJid) || null,
        [activeChatAgents, currentChatJid],
    );
    const currentBranchRecord = useMemo(
        () => currentChatBranches.find((chat) => chat?.chat_jid === currentChatJid) || currentChatAgent || null,
        [currentChatAgent, currentChatBranches, currentChatJid],
    );
    const currentRootChatJid = currentBranchRecord?.root_chat_jid || currentChatAgent?.root_chat_jid || currentChatJid;
    const activeSearchScopeLabel = describeSearchScope(searchScope);
    const [branchLoaderState, setBranchLoaderState] = useState(() => ({
        status: branchLoaderMode ? 'running' : 'idle',
        message: branchLoaderMode ? 'Preparing a new chat branch…' : '',
    }));
    const followupQueueCount = followupQueueItems.length;
    const followupQueueRowIdsRef = useRef(new Set());
    const followupQueueItemsRef = useRef([]);
    // Row IDs that were locally dismissed (e.g. injected as steering).
    // refreshQueueState filters these out so the server can't re-add them
    // before the placeholder is actually consumed server-side.
    const dismissedQueueRowIdsRef = useRef(new Set());
    const queueRefreshGenRef = useRef(0);
    const silentRecoveryRef = useRef({ inFlight: false, lastAttemptAt: 0, turnId: null });
    // Keep refs in sync during render for immediate access in stable callbacks
    followupQueueRowIdsRef.current = new Set(followupQueueItems.map((item) => item.row_id));
    followupQueueItemsRef.current = followupQueueItems;
    const {
        notificationsEnabled,
        notificationPermission,
        toggleNotifications: handleToggleNotifications,
        notify,
    } = useNotifications();
    const [removingPostIds, setRemovingPostIds] = useState(() => new Set());
    const [workspaceOpen, setWorkspaceOpen] = useState(() => getLocalStorageBoolean('workspaceOpen', true));

    // Stable ref so useEditorState can call removeFileRef without a forward-reference TDZ
    const removeFileRefRef = useRef(null);

    // Editor state hook (file load/save, tabs, dirty, view state, SSE sync)
    const {
        editorOpen, tabStripTabs, tabStripActiveId, previewTabs, tabPaneOverrides,
        openEditor, closeEditor, handleTabClose, handleTabActivate,
        handleTabCloseOthers, handleTabCloseAll, handleTabTogglePin,
        handleTabTogglePreview, handleTabEditSource, revealInExplorer,
    } = useEditorState({ onTabClosed: (path) => removeFileRefRef.current?.(path) });

    // Editor extension container ref + instance tracking
    const editorContainerRef = useRef(null);
    const editorInstanceRef = useRef(null);
    const dockContainerRef = useRef(null);
    const dockInstanceRef = useRef(null);

    // Dock (terminal) toggle state - only available when dock panes registered
    const hasDockPanes = paneRegistry.getDockPanes().length > 0;
    const [dockVisible, setDockVisible] = useState(false);
    const toggleDock = useCallback(() => setDockVisible((v) => !v), []);
    const openTerminalTab = useCallback(() => {
        openEditor(TERMINAL_TAB_PATH, { label: 'Terminal' });
    }, [openEditor]);
    const openVncTab = useCallback(() => {
        openEditor(VNC_TAB_PREFIX, { label: 'VNC' });
    }, [openEditor]);
    const activePaneTab = useMemo(
        () => tabStripTabs.find((tab) => tab.id === tabStripActiveId) || tabStripTabs[0] || null,
        [tabStripActiveId, tabStripTabs],
    );
    const activePaneOverrideId = useMemo(
        () => (tabStripActiveId ? (tabPaneOverrides.get(tabStripActiveId) || null) : null),
        [tabPaneOverrides, tabStripActiveId],
    );
    const panePopoutTitle = useMemo(
        () => panePopoutLabel || activePaneTab?.label || panePopoutPath || 'Pane',
        [activePaneTab?.label, panePopoutLabel, panePopoutPath],
    );
    const panePopoutHasMenuActions = useMemo(
        () => tabStripTabs.length > 1 || Boolean(tabStripActiveId && previewTabs.has(tabStripActiveId)),
        [previewTabs, tabStripActiveId, tabStripTabs.length],
    );
    const isVncPanePopout = useMemo(
        () => panePopoutPath === VNC_TAB_PREFIX || panePopoutPath.startsWith(`${VNC_TAB_PREFIX}/`),
        [panePopoutPath],
    );
    const hidePanePopoutControls = useMemo(
        () => (panePopoutPath === TERMINAL_TAB_PATH && !panePopoutHasMenuActions) || isVncPanePopout,
        [isVncPanePopout, panePopoutHasMenuActions, panePopoutPath],
    );
    const showEditorPaneContainer = panePopoutMode || (!chatOnlyMode && (editorOpen || (hasDockPanes && dockVisible)));

    // ── Zen mode ────────────────────────────────────────────────
    const [zenMode, setZenMode] = useState(false);
    const zenDockWasVisibleRef = useRef(false);

    const enterZenMode = useCallback(() => {
        if (!editorOpen || chatOnlyMode) return;
        // Remember dock state and auto-close
        zenDockWasVisibleRef.current = dockVisible;
        if (dockVisible) setDockVisible(false);
        setZenMode(true);
    }, [editorOpen, chatOnlyMode, dockVisible]);

    const exitZenMode = useCallback(() => {
        if (!zenMode) return;
        setZenMode(false);
        // Restore dock if it was open before zen
        if (zenDockWasVisibleRef.current) {
            setDockVisible(true);
            zenDockWasVisibleRef.current = false;
        }
    }, [zenMode]);

    const toggleZenMode = useCallback(() => {
        if (zenMode) exitZenMode();
        else enterZenMode();
    }, [zenMode, enterZenMode, exitZenMode]);

    // Exit zen mode when the last editor tab closes
    useEffect(() => {
        if (zenMode && !editorOpen) exitZenMode();
    }, [zenMode, editorOpen, exitZenMode]);

    useEffect(() => {
        if (!panePopoutMode || !panePopoutPath) return;
        const activeId = tabStore.getActiveId();
        if (activeId === panePopoutPath) return;
        openEditor(panePopoutPath, panePopoutLabel ? { label: panePopoutLabel } : undefined);
    }, [openEditor, panePopoutLabel, panePopoutMode, panePopoutPath]);

    // Mount/dispose editor extension instance when active tab changes
    useEffect(() => {
        const container = editorContainerRef.current;
        if (!container) return;

        // Dispose previous instance
        if (editorInstanceRef.current) {
            editorInstanceRef.current.dispose();
            editorInstanceRef.current = null;
        }

        const activeId = tabStripActiveId;
        if (!activeId) return;

        // Mount new instance
        const context = { path: activeId, mode: 'edit' };
        const ext = (activePaneOverrideId ? paneRegistry.get(activePaneOverrideId) : null)
            || paneRegistry.resolve(context)
            || paneRegistry.get('editor');
        if (!ext) {
            // No pane extension available - show fallback message
            container.innerHTML = '<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';
            return;
        }

        const instance = ext.mount(container, context);
        editorInstanceRef.current = instance;

        // Wire PaneInstance callbacks
        instance.onDirtyChange?.((dirty) => {
            tabStore.setDirty(activeId, dirty);
        });

        instance.onSaveRequest?.(() => {
            // Save is handled internally by the extension now
        });

        instance.onClose?.(() => {
            closeEditor();
        });

        // Restore view state from tab store
        const viewState = tabStore.getViewState(activeId);
        if (viewState && typeof instance.restoreViewState === 'function') {
            // Wait for CodeMirror to settle
            requestAnimationFrame(() => instance.restoreViewState(viewState));
        }

        // Track view state changes
        if (typeof instance.onViewStateChange === 'function') {
            instance.onViewStateChange((state) => {
                tabStore.saveViewState(activeId, state);
            });
        }

        // Focus the editor
        requestAnimationFrame(() => instance.focus());

        return () => {
            if (editorInstanceRef.current === instance) {
                instance.dispose();
                editorInstanceRef.current = null;
            }
        };
    }, [tabStripActiveId, activePaneOverrideId, closeEditor]);

    const refreshActiveEditorFromWorkspace = useCallback(async (updates) => {
        const activePath = typeof tabStripActiveId === 'string' ? tabStripActiveId.trim() : '';
        const instance = editorInstanceRef.current;
        if (!activePath || !instance?.setContent) return;
        if (typeof instance.isDirty === 'function' && instance.isDirty()) return;

        const relevant = Array.isArray(updates) && updates.length > 0
            ? updates.some((update) => {
                const changedPaths = Array.isArray(update?.changed_paths)
                    ? update.changed_paths
                        .map((value) => typeof value === 'string' ? value.trim() : '')
                        .filter(Boolean)
                    : [];
                if (changedPaths.length > 0) {
                    return changedPaths.some((changedPath) => changedPath === '.' || changedPath === activePath);
                }
                const relPath = typeof update?.path === 'string' ? update.path.trim() : '';
                return !relPath || relPath === '.' || relPath === activePath;
            })
            : true;
        if (!relevant) return;

        try {
            const payload = await api.getWorkspaceFile(activePath, 1_000_000, 'edit');
            const nextText = typeof payload?.text === 'string' ? payload.text : '';
            const nextMtime = typeof payload?.mtime === 'string' && payload.mtime.trim()
                ? payload.mtime.trim()
                : new Date().toISOString();
            instance.setContent(nextText, nextMtime);
        } catch (error) {
            console.warn('[workspace_update] Failed to refresh active pane:', error);
        }
    }, [tabStripActiveId]);

    useEffect(() => {
        const container = dockContainerRef.current;

        if (dockInstanceRef.current) {
            dockInstanceRef.current.dispose();
            dockInstanceRef.current = null;
        }

        if (!container || !hasDockPanes || !dockVisible) return;

        const ext = paneRegistry.getDockPanes()[0];
        if (!ext) {
            container.innerHTML = '<div class="terminal-placeholder">No dock pane available.</div>';
            return;
        }

        const instance = ext.mount(container, { mode: 'view' });
        dockInstanceRef.current = instance;
        requestAnimationFrame(() => instance.focus?.());

        return () => {
            if (dockInstanceRef.current === instance) {
                instance.dispose();
                dockInstanceRef.current = null;
            }
        };
    }, [hasDockPanes, dockVisible]);

    const [userProfile, setUserProfile] = useState({ name: 'You', avatar_url: null, avatar_background: null });
    const hasConnectedOnceRef = useRef(false);
    const wasAgentActiveRef = useRef(false); // tracks active→idle transition for timeline refresh
    const agentStatusRef = useRef(null);
    const activeChatJidRef = useRef(currentChatJid);
    const chatPaneStateByChatRef = useRef(new Map());
    const paneStateOwnerChatJidRef = useRef(currentChatJid);
    const draftThrottleRef = useRef(0);
    const thoughtThrottleRef = useRef(0);
    const agentsRef = useRef({});
    const userProfileRef = useRef({ name: null, avatar_url: null });
    const viewStateRef = useRef({ currentHashtag: null, searchQuery: null, searchOpen: false });
    const timelineRef = useRef(null);
    const appShellRef = useRef(null);
    const sidebarWidthRef = useRef(0);
    const editorWidthRef = useRef(0);
    const dockHeightRef = useRef(0);
    const lastNotifiedIdRef = useRef(null);
    const lastAgentResponseRef = useRef(null);
    const btwAbortRef = useRef(null);
    const lastActivityTimerRef = useRef(null);
    const lastActivityTokenRef = useRef(0);
    const brandingRef = useRef({ title: null, avatarBase: null });
    const intentToastTimerRef = useRef(null);
    const renameBranchInFlightRef = useRef(false);
    const [isRenamingBranch, setIsRenamingBranch] = useState(false);
    const renameBranchLockUntilRef = useRef(0);
    const [isRenameBranchFormOpen, setIsRenameBranchFormOpen] = useState(false);
    const [renameBranchNameDraft, setRenameBranchNameDraft] = useState('');
    const renameBranchDraftState = useMemo(
        () => getBranchHandleDraftState(renameBranchNameDraft, currentBranchRecord?.agent_name || ''),
        [currentBranchRecord?.agent_name, renameBranchNameDraft],
    );
    const renameBranchNameInputRef = useRef(null);

    const clearIntentToast = useCallback(() => {
        if (intentToastTimerRef.current) {
            clearTimeout(intentToastTimerRef.current);
            intentToastTimerRef.current = null;
        }
        setIntentToast(null);
    }, []);

    // Refresh timestamps every 30 seconds
    useTimestampRefresh(30000);

    useEffect(() => {
        if (!isRenameBranchFormOpen) return;
        requestAnimationFrame(() => {
            if (isRenameBranchFormOpen) {
                renameBranchNameInputRef.current?.focus();
                renameBranchNameInputRef.current?.select?.();
            }
        });
    }, [isRenameBranchFormOpen]);

    useEffect(() => {
        return initTheme();
    }, []);

    useEffect(() => {
        return watchStandaloneWebAppMode(setIsWebAppMode);
    }, []);

    useEffect(() => {
        setLocalStorageItem('workspaceOpen', String(workspaceOpen));
    }, [workspaceOpen]);

    useEffect(() => {
        return installStandaloneMobileViewportFix();
    }, []);

    useEffect(() => {
        return () => {
            clearIntentToast();
        };
    }, [clearIntentToast]);

    useEffect(() => {
        if (!btwSession) {
            setLocalStorageItem(BTW_SESSION_KEY, '');
            return;
        }
        setLocalStorageItem(BTW_SESSION_KEY, JSON.stringify({
            question: btwSession.question || '',
            answer: btwSession.answer || '',
            thinking: btwSession.thinking || '',
            error: btwSession.error || null,
            status: btwSession.status || 'success',
        }));
    }, [btwSession]);

    useEffect(() => {
        agentsRef.current = agents || {};
    }, [agents]);

    useEffect(() => {
        activeChatJidRef.current = currentChatJid;
    }, [currentChatJid]);

    useEffect(() => {
        userProfileRef.current = userProfile || { name: 'You', avatar_url: null, avatar_background: null };
    }, [userProfile]);

    const applyBranding = useCallback((name, avatarUrl, avatarVersion = null) => {
        if (typeof document === 'undefined') return;
        const title = (name || '').trim() || 'PiClaw';
        if (brandingRef.current.title !== title) {
            document.title = title;
            const titleMeta = document.querySelector('meta[name="apple-mobile-web-app-title"]');
            if (titleMeta && titleMeta.getAttribute('content') !== title) {
                titleMeta.setAttribute('content', title);
            }
            brandingRef.current.title = title;
        }

        const favicon = document.getElementById('dynamic-favicon');
        if (!favicon) return;
        const defaultHref = favicon.getAttribute('data-default') || favicon.getAttribute('href') || '/favicon.ico';
        const baseHref = avatarUrl || defaultHref;
        const avatarKey = avatarUrl ? `${baseHref}|${avatarVersion || ''}` : baseHref;
        if (brandingRef.current.avatarBase !== avatarKey) {
            const cacheBust = avatarUrl ? `${baseHref}${baseHref.includes('?') ? '&' : '?'}v=${avatarVersion || Date.now()}` : baseHref;
            favicon.setAttribute('href', cacheBust);
            brandingRef.current.avatarBase = avatarKey;
        }
    }, []);

    const addFileRef = useCallback((path) => {
        if (!path) return;
        setFileRefs((prev) => (prev.includes(path) ? prev : [...prev, path]));
    }, []);

    const removeFileRef = useCallback((path) => {
        setFileRefs((prev) => prev.filter((item) => item !== path));
    }, []);
    removeFileRefRef.current = removeFileRef;

    const clearFileRefs = useCallback(() => {
        setFileRefs([]);
    }, []);

    const setFileRefsFromCompose = useCallback((next) => {
        if (!Array.isArray(next)) {
            setFileRefs([]);
            return;
        }
        const deduped = [];
        const seen = new Set();
        for (const value of next) {
            if (typeof value !== 'string' || !value.trim()) continue;
            const normalized = value.trim();
            if (seen.has(normalized)) continue;
            seen.add(normalized);
            deduped.push(normalized);
        }
        setFileRefs(deduped);
    }, []);

    // TDZ-safe hook ordering note:
    // - keep handler callbacks defined before they are passed downstream,
    // - avoid forward references to uninitialized const callbacks,
    // - use useRef.current for mutable forward refs when needed.
    // See notes/piclaw-web-frontend-safety.md for the full checklist.

    const showIntentToast = useCallback((title, detail = null, kind = 'info', durationMs = 3000) => {
        clearIntentToast();
        setIntentToast({ title, detail: detail || null, kind: kind || 'info' });
        intentToastTimerRef.current = setTimeout(() => {
            setIntentToast((current) => (current?.title === title ? null : current));
        }, durationMs);
    }, [clearIntentToast]);

    const openFileFromPill = useCallback((rawPath) => {
        const result = resolveFilePillOpenAction(rawPath, {
            editorOpen,
            resolvePane: (context) => paneRegistry.resolve(context),
        });

        if (result.kind === 'open') {
            openEditor(result.path);
            return;
        }

        if (result.kind === 'toast') {
            showIntentToast(result.title, result.detail, result.level);
        }
    }, [editorOpen, openEditor, showIntentToast]);

    const attachActiveEditorFile = useCallback(() => {
        const activeId = tabStripActiveId;
        if (activeId) addFileRef(activeId);
    }, [tabStripActiveId, addFileRef]);

    const addMessageRef = useCallback((id) => {
        if (!id) return;
        setMessageRefs((prev) => (prev.includes(id) ? prev : [...prev, id]));
    }, []);

    /** Scroll to a message by ID; fetch and inject if not in current timeline. */
    const scrollToMessage = useCallback(async (id, targetChatJid = null) => {
        // Helper to highlight after scroll
        const highlight = (el) => {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.classList.add('post-highlight');
            setTimeout(() => el.classList.remove('post-highlight'), 2000);
        };
        // Try to find it in the DOM first
        const existing = document.getElementById('post-' + id);
        if (existing) { highlight(existing); return; }
        // Not in DOM - fetch via API and inject into posts
        try {
            const resolvedChatJid = typeof targetChatJid === 'string' && targetChatJid.trim()
                ? targetChatJid.trim()
                : currentChatJid;
            const result = await api.getThread(id, resolvedChatJid);
            const msg = result?.thread?.[0];
            if (!msg) return;
            setPosts((prev) => {
                if (!prev) return [msg];
                if (prev.some((p) => p.id === msg.id)) return prev;
                return [...prev, msg];
            });
            // Wait for render, then scroll
            requestAnimationFrame(() => {
                setTimeout(() => {
                    const el = document.getElementById('post-' + id);
                    if (el) highlight(el);
                }, 50);
            });
        } catch (err) {
            console.error('[scrollToMessage] Failed to fetch message', id, err);
        }
    }, [currentChatJid]);

    const removeMessageRef = useCallback((id) => {
        setMessageRefs((prev) => prev.filter((item) => item !== id));
    }, []);

    const clearMessageRefs = useCallback(() => {
        setMessageRefs([]);
    }, []);

    const setMessageRefsFromCompose = useCallback((next) => {
        if (!Array.isArray(next)) {
            setMessageRefs([]);
            return;
        }
        const deduped = [];
        const seen = new Set();
        for (const value of next) {
            if (typeof value !== 'string' || !value.trim()) continue;
            const normalized = value.trim();
            if (seen.has(normalized)) continue;
            seen.add(normalized);
            deduped.push(normalized);
        }
        setMessageRefs(deduped);
    }, []);

    const handleComposeSubmitError = useCallback((message) => {
        const detail = typeof message === 'string' && message.trim() ? message.trim() : 'Could not send your message.';
        showIntentToast('Compose failed', detail, 'error', 5000);
    }, [showIntentToast]);

    const noteAgentActivity = useCallback((options = {}) => {
        const now = Date.now();
        lastAgentEventRef.current = now;
        if (options.running) {
            isAgentRunningRef.current = true;
            // Only update state if not already active to avoid redundant re-renders
            setIsAgentTurnActive((prev) => prev ? prev : true);
        }
        if (options.clearSilence) {
            lastSilenceNoticeRef.current = 0;
        }
    }, [setIsAgentTurnActive]);

    const clearLastActivityTimer = useCallback(() => {
        if (lastActivityTimerRef.current) {
            clearTimeout(lastActivityTimerRef.current);
            lastActivityTimerRef.current = null;
        }
        lastActivityTokenRef.current = 0;
    }, []);

    // Cleanup: cancel any pending last-activity timer on unmount.
    // Placed after clearLastActivityTimer definition to avoid TDZ errors.
    useEffect(() => () => {
        clearLastActivityTimer();
    }, [clearLastActivityTimer]);

    const clearLastActivityFlag = useCallback(() => {
        clearLastActivityTimer();
        setAgentStatus((prev) => {
            if (!prev) return prev;
            if (!(prev.last_activity || prev.lastActivity)) return prev;
            const { last_activity, lastActivity, ...rest } = prev;
            return rest;
        });
    }, [clearLastActivityTimer]);

    const showLastActivity = useCallback((payload) => {
        if (!payload) return;
        clearLastActivityTimer();
        const token = Date.now();
        lastActivityTokenRef.current = token;
        // Strip tool/intent details - only show a minimal "last active" hint
        setAgentStatus({ type: payload.type || 'active', last_activity: true });
        lastActivityTimerRef.current = setTimeout(() => {
            if (lastActivityTokenRef.current !== token) return;
            setAgentStatus((prev) => {
                if (!prev || !(prev.last_activity || prev.lastActivity)) return prev;
                return null;
            });
        }, LAST_ACTIVITY_TTL_MS);
    }, [clearLastActivityTimer]);

    const clearAgentRunState = useCallback(() => {
        isAgentRunningRef.current = false;
        setIsAgentTurnActive(false);
        lastAgentEventRef.current = null;
        lastSilenceNoticeRef.current = 0;
        draftBufferRef.current = '';
        thoughtBufferRef.current = '';
        pendingRequestRef.current = null;
        lastAgentResponseRef.current = null;
        currentTurnIdRef.current = null;
        steerQueuedTurnIdRef.current = null;
        agentStatusRef.current = null;
        silentRecoveryRef.current = { inFlight: false, lastAttemptAt: 0, turnId: null };
        clearLastActivityTimer();
        setCurrentTurnId(null);
        setSteerQueuedTurnId(null);
        thoughtExpandedRef.current = false;
        draftExpandedRef.current = false;
    }, [clearLastActivityTimer, setCurrentTurnId, setSteerQueuedTurnId, setIsAgentTurnActive]);

    const clearQueuedSteerStateIfStale = useCallback((remainingQueueCount) => {
        if (!shouldClearQueuedSteerState({
            remainingQueueCount,
            currentTurnId: currentTurnIdRef.current,
            isAgentTurnActive,
        })) {
            return;
        }
        steerQueuedTurnIdRef.current = null;
        setSteerQueuedTurnId(null);
    }, [isAgentTurnActive, setSteerQueuedTurnId]);

    const createEmptyChatPaneState = useCallback(() => ({
        agentStatus: null,
        agentDraft: { text: '', totalLines: 0 },
        agentPlan: '',
        agentThought: { text: '', totalLines: 0 },
        pendingRequest: null,
        currentTurnId: null,
        steerQueuedTurnId: null,
        isAgentTurnActive: false,
        followupQueueItems: [],
        activeModel: null,
        activeThinkingLevel: null,
        supportsThinking: false,
        activeModelUsage: null,
        contextUsage: null,
        isAgentRunning: false,
        wasAgentActive: false,
        draftBuffer: '',
        thoughtBuffer: '',
        lastAgentEvent: null,
        lastSilenceNotice: 0,
        lastAgentResponse: null,
        currentTurnIdRef: null,
        steerQueuedTurnIdRef: null,
        thoughtExpanded: false,
        draftExpanded: false,
        agentStatusRef: null,
        silentRecovery: { inFlight: false, lastAttemptAt: 0, turnId: null },
    }), []);

    const snapshotCurrentChatPaneState = useCallback(() => ({
        agentStatus,
        agentDraft: agentDraft ? { ...agentDraft } : { text: '', totalLines: 0 },
        agentPlan: agentPlan || '',
        agentThought: agentThought ? { ...agentThought } : { text: '', totalLines: 0 },
        pendingRequest,
        currentTurnId,
        steerQueuedTurnId,
        isAgentTurnActive: Boolean(isAgentTurnActive),
        followupQueueItems: Array.isArray(followupQueueItems) ? followupQueueItems.map((item) => ({ ...item })) : [],
        activeModel,
        activeThinkingLevel,
        supportsThinking: Boolean(supportsThinking),
        activeModelUsage,
        contextUsage,
        isAgentRunning: Boolean(isAgentRunningRef.current),
        wasAgentActive: Boolean(wasAgentActiveRef.current),
        draftBuffer: draftBufferRef.current || '',
        thoughtBuffer: thoughtBufferRef.current || '',
        lastAgentEvent: lastAgentEventRef.current || null,
        lastSilenceNotice: lastSilenceNoticeRef.current || 0,
        lastAgentResponse: lastAgentResponseRef.current || null,
        currentTurnIdRef: currentTurnIdRef.current || null,
        steerQueuedTurnIdRef: steerQueuedTurnIdRef.current || null,
        thoughtExpanded: Boolean(thoughtExpandedRef.current),
        draftExpanded: Boolean(draftExpandedRef.current),
        agentStatusRef: agentStatusRef.current || null,
        silentRecovery: { ...(silentRecoveryRef.current || { inFlight: false, lastAttemptAt: 0, turnId: null }) },
    }), [
        activeModel,
        activeModelUsage,
        activeThinkingLevel,
        agentDraft,
        agentPlan,
        agentStatus,
        agentThought,
        contextUsage,
        currentTurnId,
        followupQueueItems,
        isAgentTurnActive,
        pendingRequest,
        steerQueuedTurnId,
        supportsThinking,
    ]);

    const restoreChatPaneState = useCallback((snapshot) => {
        const next = snapshot || createEmptyChatPaneState();
        clearLastActivityTimer();
        isAgentRunningRef.current = Boolean(next.isAgentRunning);
        wasAgentActiveRef.current = Boolean(next.wasAgentActive);
        setIsAgentTurnActive(Boolean(next.isAgentTurnActive));
        lastAgentEventRef.current = next.lastAgentEvent || null;
        lastSilenceNoticeRef.current = Number(next.lastSilenceNotice || 0);
        draftBufferRef.current = next.draftBuffer || '';
        thoughtBufferRef.current = next.thoughtBuffer || '';
        pendingRequestRef.current = next.pendingRequest || null;
        lastAgentResponseRef.current = next.lastAgentResponse || null;
        currentTurnIdRef.current = next.currentTurnIdRef || null;
        steerQueuedTurnIdRef.current = next.steerQueuedTurnIdRef || null;
        agentStatusRef.current = next.agentStatusRef || null;
        silentRecoveryRef.current = next.silentRecovery || { inFlight: false, lastAttemptAt: 0, turnId: null };
        thoughtExpandedRef.current = Boolean(next.thoughtExpanded);
        draftExpandedRef.current = Boolean(next.draftExpanded);
        setAgentStatus(next.agentStatus || null);
        setAgentDraft(next.agentDraft ? { ...next.agentDraft } : { text: '', totalLines: 0 });
        setAgentPlan(next.agentPlan || '');
        setAgentThought(next.agentThought ? { ...next.agentThought } : { text: '', totalLines: 0 });
        setPendingRequest(next.pendingRequest || null);
        setCurrentTurnId(next.currentTurnId || null);
        setSteerQueuedTurnId(next.steerQueuedTurnId || null);
        setFollowupQueueItems(Array.isArray(next.followupQueueItems) ? next.followupQueueItems.map((item) => ({ ...item })) : []);
        setActiveModel(next.activeModel || null);
        setActiveThinkingLevel(next.activeThinkingLevel || null);
        setSupportsThinking(Boolean(next.supportsThinking));
        setActiveModelUsage(next.activeModelUsage ?? null);
        setContextUsage(next.contextUsage ?? null);
    }, [clearLastActivityTimer, createEmptyChatPaneState, setCurrentTurnId, setFollowupQueueItems, setIsAgentTurnActive, setSteerQueuedTurnId]);

    const setActiveTurn = useCallback((turnId) => {
        if (!turnId) return;
        if (currentTurnIdRef.current === turnId) return;
        currentTurnIdRef.current = turnId;
        silentRecoveryRef.current = { inFlight: false, lastAttemptAt: 0, turnId };
        setCurrentTurnId(turnId);
        steerQueuedTurnIdRef.current = null;
        setSteerQueuedTurnId(null);
        draftBufferRef.current = '';
        thoughtBufferRef.current = '';
        setAgentDraft({ text: '', totalLines: 0 });
        setAgentPlan('');
        setAgentThought({ text: '', totalLines: 0 });
        setPendingRequest(null);
        pendingRequestRef.current = null;
        lastAgentResponseRef.current = null;
        thoughtExpandedRef.current = false;
        draftExpandedRef.current = false;
    }, [setCurrentTurnId, setSteerQueuedTurnId]);


    const notifyForFinalResponse = useCallback((turnId) => {
        if (typeof document !== 'undefined') {
            const hasFocus = typeof document.hasFocus === 'function' ? document.hasFocus() : true;
            if (!document.hidden && hasFocus) return;
        }
        const entry = lastAgentResponseRef.current;
        if (!entry || !entry.post) return;
        if (turnId && entry.turnId && entry.turnId !== turnId) return;
        const post = entry.post;
        if (post.id && lastNotifiedIdRef.current === post.id) return;
        const content = String(post?.data?.content || '').trim();
        if (!content) return;
        lastNotifiedIdRef.current = post.id || lastNotifiedIdRef.current;
        lastAgentResponseRef.current = null;
        const body = content.replace(/\s+/g, ' ').slice(0, 200);
        const agentsMap = agentsRef.current || {};
        const agent = post?.data?.agent_id ? agentsMap[post.data.agent_id] : null;
        const title = agent?.name || 'Pi';
        notify(title, body);
    }, [notify]);

    const handlePanelToggle = useCallback(async (panelKey, expanded) => {
        if (panelKey !== 'thought' && panelKey !== 'draft') return;
        const turnId = currentTurnIdRef.current;
        if (panelKey === 'thought') {
            thoughtExpandedRef.current = expanded;
            if (turnId) {
                try {
                    await setAgentThoughtVisibility(turnId, 'thought', expanded);
                } catch (error) {
                    console.warn('Failed to update thought visibility:', error);
                }
            }
            if (!expanded) return;
            try {
                const data = turnId ? await getAgentThought(turnId, 'thought') : null;
                if (data?.text) {
                    thoughtBufferRef.current = data.text;
                }
                setAgentThought((prev) => ({
                    ...(prev || { text: '', totalLines: 0 }),
                    fullText: thoughtBufferRef.current || prev?.fullText || '',
                    totalLines: Number.isFinite(data?.total_lines) ? data.total_lines : prev?.totalLines || 0,
                }));
            } catch (error) {
                console.warn('Failed to fetch full thought:', error);
            }
            return;
        }
        draftExpandedRef.current = expanded;
        if (turnId) {
            try {
                await setAgentThoughtVisibility(turnId, 'draft', expanded);
            } catch (error) {
                console.warn('Failed to update draft visibility:', error);
            }
        }
        if (!expanded) return;
        try {
            const data = turnId ? await getAgentThought(turnId, 'draft') : null;
            if (data?.text) {
                draftBufferRef.current = data.text;
            }
            setAgentDraft((prev) => ({
                ...(prev || { text: '', totalLines: 0 }),
                fullText: draftBufferRef.current || prev?.fullText || '',
                totalLines: Number.isFinite(data?.total_lines) ? data.total_lines : prev?.totalLines || 0,
            }));
        } catch (error) {
            console.warn('Failed to fetch full draft:', error);
        }
    }, []);


    // Scroll to bottom of timeline (column-reverse: bottom is scrollTop=0)
    // Only auto-scroll if user is already near the bottom (within 150px).
    const scrollToBottomRef = useRef(null);
    const scrollToBottom = useCallback(() => {
        const el = timelineRef.current;
        if (!el) return;
        // column-reverse: scrollTop=0 is bottom, negative values mean scrolled up
        const scrolledUp = Math.abs(el.scrollTop) > 150;
        if (!scrolledUp) {
            el.scrollTop = 0;
        }
    }, []);
    scrollToBottomRef.current = scrollToBottom;

    const preserveTimelineScroll = useCallback((mutate) => {
        const container = timelineRef.current;
        if (!container || typeof mutate !== 'function') {
            mutate?.();
            return;
        }
        const { currentHashtag: activeHashtag, searchQuery: activeSearch, searchOpen: activeSearchOpen } = viewStateRef.current || {};
        const reverseTimeline = !((activeSearch || activeSearchOpen) && !activeHashtag);
        const anchor = reverseTimeline
            ? container.scrollHeight - container.scrollTop
            : container.scrollTop;
        mutate();
        requestAnimationFrame(() => {
            const target = timelineRef.current;
            if (!target) return;
            if (reverseTimeline) {
                const nextTop = Math.max(target.scrollHeight - anchor, 0);
                target.scrollTop = nextTop;
            } else {
                const maxScroll = Math.max(target.scrollHeight - target.clientHeight, 0);
                const nextTop = Math.min(anchor, maxScroll);
                target.scrollTop = nextTop;
            }
        });
    }, []);

    const preserveTimelineScrollTop = useCallback((mutate) => {
        const container = timelineRef.current;
        if (!container || typeof mutate !== 'function') {
            mutate?.();
            return;
        }
        const anchor = container.scrollTop;
        mutate();
        requestAnimationFrame(() => {
            const target = timelineRef.current;
            if (!target) return;
            const maxScroll = Math.max(target.scrollHeight - target.clientHeight, 0);
            target.scrollTop = Math.min(anchor, maxScroll);
        });
    }, []);

    /** Ref-stable filter: hides placeholder rows and their parent user messages.
     *  Reads from refs so callback identity never changes — this breaks the
     *  re-render cascade that previously destabilised handleSseEvent → SSE.
     *  Returns the same array reference when nothing is filtered. */
    const LEGACY_QUEUE_STATUS = 'Queued as a follow-up (one-at-a-time).';
    const QUEUE_PLACEHOLDER_MARKER = '\u2063';
    const filterQueuedPosts = useCallback((items) => {
        if (!items || !Array.isArray(items)) return items;
        const queueRowIds = followupQueueRowIdsRef.current;
        const hiddenIds = new Set(queueRowIds);

        const filtered = items.filter((post) => {
            if (hiddenIds.has(post?.id)) return false;
            // Hide queue placeholder rows from timeline permanently.
            if (post?.data?.is_bot_message) {
                const content = post?.data?.content;
                if (content === LEGACY_QUEUE_STATUS || content === QUEUE_PLACEHOLDER_MARKER) return false;
            }
            return true;
        });
        return filtered.length === items.length ? items : filtered;
    }, []);

    const {
        posts: rawPosts,
        setPosts,
        hasMore,
        setHasMore,
        hasMoreRef,
        loadPosts,
        refreshTimeline,
        loadMore,
        loadMoreRef,
    } = useTimeline({ preserveTimelineScroll, preserveTimelineScrollTop, chatJid: currentChatJid });

    // Derive filtered posts: placeholder rows and their parent user messages
    // are hidden.  Recomputes when rawPosts or followupQueueItems change;
    // filterQueuedPosts is identity-stable (empty deps) so it never
    // triggers a cascade through handleSseEvent → SSE reconnection.
    const posts = useMemo(() => filterQueuedPosts(rawPosts), [rawPosts, followupQueueItems, filterQueuedPosts]);

    const removeStalledPost = useCallback(() => {
        const stalledId = stalledPostIdRef.current;
        if (!stalledId) return;
        setPosts((prev) => (prev ? prev.filter((post) => post.id !== stalledId) : prev));
        stalledPostIdRef.current = null;
    }, [setPosts]);


    const {
        handleSplitterMouseDown,
        handleSplitterTouchStart,
        handleEditorSplitterMouseDown,
        handleEditorSplitterTouchStart,
        handleDockSplitterMouseDown,
        handleDockSplitterTouchStart,
    } = useSplitters({ appShellRef, sidebarWidthRef, editorWidthRef, dockHeightRef });

    const finalizeStalledResponse = useCallback(() => {
        if (!isAgentRunningRef.current) return;
        isAgentRunningRef.current = false;
        lastSilenceNoticeRef.current = 0;
        lastAgentEventRef.current = null;
        currentTurnIdRef.current = null;
        setCurrentTurnId(null);
        thoughtExpandedRef.current = false;
        draftExpandedRef.current = false;

        const partial = (draftBufferRef.current || '').trim();
        draftBufferRef.current = '';
        thoughtBufferRef.current = '';
        setAgentDraft({ text: '', totalLines: 0 });
        setAgentPlan('');
        setAgentThought({ text: '', totalLines: 0 });
        setPendingRequest(null);
        pendingRequestRef.current = null;
        lastAgentResponseRef.current = null;

        if (!partial) {
            setAgentStatus({ type: 'error', title: 'Response stalled - No content received' });
            return;
        }

        const warning = '\n\n⚠️ Response may be incomplete - the model stopped responding';
        const content = `${partial}${warning}`;
        const id = Date.now();
        const timestamp = new Date().toISOString();
        const localPost = {
            id,
            timestamp,
            data: {
                type: 'agent_response',
                content,
                agent_id: 'default',
                is_local_stall: true,
            },
        };

        stalledPostIdRef.current = id;
        setPosts((prev) => (prev ? dedupePosts([...prev, localPost]) : [localPost]));
        scrollToBottomRef.current?.();
        setAgentStatus(null);
    }, [setCurrentTurnId]);

    useEffect(() => {
        viewStateRef.current = { currentHashtag, searchQuery, searchOpen };
    }, [currentHashtag, searchQuery, searchOpen]);


    const refreshQueueState = useCallback(() => {
        const gen = ++queueRefreshGenRef.current;
        const targetChatJid = currentChatJid;
        getAgentQueueState(targetChatJid)
            .then((payload) => {
                // Discard stale responses — a newer refresh was already issued
                if (gen !== queueRefreshGenRef.current) return;
                if (activeChatJidRef.current !== targetChatJid) return;
                const dismissed = dismissedQueueRowIdsRef.current;
                const items = Array.isArray(payload?.items)
                    ? payload.items
                        .map((item) => ({ ...item }))
                        .filter((item) => !dismissed.has(item.row_id))
                    : [];
                if (items.length) {
                    setFollowupQueueItems((prev) => {
                        if (prev.length === items.length && prev.every((p, i) => p.row_id === items[i].row_id)) return prev;
                        return items;
                    });
                    return;
                }

                // Server queue is empty (after filtering dismissed) — clear dismissed set
                dismissed.clear();
                clearQueuedSteerStateIfStale(0);
                setFollowupQueueItems((prev) => prev.length === 0 ? prev : []);
            })
            .catch(() => {
                if (gen !== queueRefreshGenRef.current) return;
                if (activeChatJidRef.current !== targetChatJid) return;
                setFollowupQueueItems((prev) => prev.length === 0 ? prev : []);
            });
    }, [clearQueuedSteerStateIfStale, currentChatJid, setFollowupQueueItems]);

    const refreshContextUsage = useCallback(async () => {
        const targetChatJid = currentChatJid;
        try {
            const ctx = await getAgentContext(targetChatJid);
            if (activeChatJidRef.current !== targetChatJid) return;
            if (ctx) setContextUsage(ctx);
        } catch (err) {
            if (activeChatJidRef.current !== targetChatJid) return;
            console.warn('Failed to fetch agent context:', err);
        }
    }, [currentChatJid]);

    const refreshAutoresearchStatus = useCallback(async () => {
        const targetChatJid = currentChatJid;
        try {
            const payload = await getAutoresearchStatus(targetChatJid);
            if (activeChatJidRef.current !== targetChatJid) return;
            const panel = Array.isArray(payload?.content)
                ? payload.content.find((item) => item?.type === 'status_panel' && item?.panel)
                : null;
            setExtensionStatusPanels((prev) => {
                const next = new Map(prev);
                if (payload?.key && panel?.panel) {
                    next.set(payload.key, panel.panel);
                } else {
                    next.delete('autoresearch');
                }
                return next;
            });
            setPendingExtensionPanelActions((prev) => {
                if (prev.size === 0) return prev;
                const next = new Set(Array.from(prev).filter((key) => !String(key).startsWith('autoresearch:')));
                return next.size === prev.size ? prev : next;
            });
        } catch (err) {
            if (activeChatJidRef.current !== targetChatJid) return;
            console.warn('Failed to fetch autoresearch status:', err);
        }
    }, [currentChatJid]);

    const refreshAgentStatus = useCallback(async () => {
        const targetChatJid = currentChatJid;
        try {
            const res = await getAgentStatus(targetChatJid);
            if (activeChatJidRef.current !== targetChatJid) return null;
            if (!res || res.status !== 'active' || !res.data) {
                // If the agent just transitioned active → idle, refresh the timeline
                // to catch any final response that arrived while SSE was gapped.
                if (wasAgentActiveRef.current) {
                    const { currentHashtag: ah, searchQuery: sq, searchOpen: so } = viewStateRef.current || {};
                    if (!ah && !sq && !so) refreshTimeline();
                }
                wasAgentActiveRef.current = false;
                clearAgentRunState();
                agentStatusRef.current = null;
                setAgentStatus(null);
                setAgentDraft({ text: '', totalLines: 0 });
                setAgentPlan('');
                setAgentThought({ text: '', totalLines: 0 });
                setPendingRequest(null);
                pendingRequestRef.current = null;
                return res ?? null;
            }
            wasAgentActiveRef.current = true;
            const payload = res.data;
            agentStatusRef.current = payload;
            const activeTurn = payload.turn_id || payload.turnId;
            if (activeTurn) setActiveTurn(activeTurn);
            noteAgentActivity({ running: true, clearSilence: true });
            clearLastActivityFlag();
            setAgentStatus(payload);

            // Restore draft/thought buffers if the server has them and the
            // client doesn't (e.g. after reconnect or SSE gap).
            if (res.thought && res.thought.text) {
                setAgentThought((prev) => {
                    if (prev && prev.text && prev.text.length >= res.thought.text.length) return prev;
                    thoughtBufferRef.current = res.thought.text;
                    return { text: res.thought.text, totalLines: res.thought.totalLines || 0 };
                });
            }
            if (res.draft && res.draft.text) {
                setAgentDraft((prev) => {
                    if (prev && prev.text && prev.text.length >= res.draft.text.length) return prev;
                    draftBufferRef.current = res.draft.text;
                    return { text: res.draft.text, totalLines: res.draft.totalLines || 0 };
                });
            }
            return res;
        } catch (err) {
            console.warn('Failed to fetch agent status:', err);
            return null;
        }
    }, [clearAgentRunState, clearLastActivityFlag, noteAgentActivity, refreshTimeline, setActiveTurn]);

    const reconcileSilentTurn = useCallback(async () => {
        if (!isAgentRunningRef.current) return null;
        if (pendingRequestRef.current) return null;

        const activeTurnId = currentTurnIdRef.current || null;
        const probe = silentRecoveryRef.current;
        const now = Date.now();
        if (probe.inFlight) return null;
        if (probe.turnId === activeTurnId && now - probe.lastAttemptAt < SILENCE_REFRESH_MS) {
            return null;
        }

        probe.inFlight = true;
        probe.lastAttemptAt = now;
        probe.turnId = activeTurnId;

        try {
            const { currentHashtag: activeHashtag, searchQuery: activeSearch, searchOpen: activeSearchOpen } = viewStateRef.current || {};
            if (!activeHashtag && !activeSearch && !activeSearchOpen) {
                await refreshTimeline();
            }
            await refreshQueueState();
            return await refreshAgentStatus();
        } finally {
            probe.inFlight = false;
        }
    }, [refreshAgentStatus, refreshQueueState, refreshTimeline]);

    // Silence watchdog — detects when the agent stream goes quiet and
    // triggers a server re-sync to surface missed terminal replies.
    // Depends on reconcileSilentTurn which is defined above.
    useEffect(() => {
        const intervalMs = Math.min(1000, Math.max(100, Math.floor(SILENCE_WARNING_MS / 2)));
        const interval = setInterval(() => {
            if (!isAgentRunningRef.current) return;
            if (pendingRequestRef.current) return;
            const lastEvent = lastAgentEventRef.current;
            if (!lastEvent) return;
            const now = Date.now();
            const silenceMs = now - lastEvent;

            const compactionActive = isCompactionStatus(agentStatusRef.current);

            if (silenceMs >= SILENCE_FINALIZE_MS) {
                if (!compactionActive) {
                    setAgentStatus({
                        type: 'waiting',
                        title: 'Re-syncing after a quiet period…',
                    });
                }
                void reconcileSilentTurn();
                return;
            }

            if (silenceMs >= SILENCE_WARNING_MS) {
                if (now - lastSilenceNoticeRef.current >= SILENCE_REFRESH_MS) {
                    if (!compactionActive) {
                        const seconds = Math.floor(silenceMs / 1000);
                        setAgentStatus({
                            type: 'waiting',
                            title: `Waiting for model… No events for ${seconds}s`,
                        });
                    }
                    lastSilenceNoticeRef.current = now;
                    void reconcileSilentTurn();
                }
            }
        }, intervalMs);

        return () => clearInterval(interval);
    }, [reconcileSilentTurn]);

    const handleConnectionStatusChange = useCallback((status) => {
        setConnectionStatus(status);
        if (status !== 'connected') {
            setAgentStatus(null);
            setAgentDraft({ text: '', totalLines: 0 });
            setAgentPlan('');
            setAgentThought({ text: '', totalLines: 0 });
            setPendingRequest(null);
            pendingRequestRef.current = null;
            clearAgentRunState();
            return;
        }
        if (!hasConnectedOnceRef.current) {
            hasConnectedOnceRef.current = true;
            // On initial page load, restore current turn + queue state and do
            // one immediate timeline resync. Reloads can land between the
            // initial timeline fetch and SSE attach, which leaves already-
            // persisted pending/follow-up messages invisible until a later
            // user action triggers another refresh.
            const { currentHashtag: activeHashtag, searchQuery: activeSearch, searchOpen: activeSearchOpen } = viewStateRef.current || {};
            if (!activeHashtag && !activeSearch && !activeSearchOpen) {
                refreshTimeline();
            }
            refreshAgentStatus();
            refreshQueueState();
            refreshContextUsage();
            return;
        }
        // On reconnect: refresh timeline for any missed posts and restore
        // in-progress agent state (status + draft/thought buffers).
        // Also refresh queue state so queued follow-ups submitted before
        // the reconnect gap are restored in the compose stack.
        const { currentHashtag: activeHashtag, searchQuery: activeSearch, searchOpen: activeSearchOpen } = viewStateRef.current;
        if (!activeHashtag && !activeSearch && !activeSearchOpen) {
            refreshTimeline();
        }
        refreshAgentStatus();
        refreshQueueState();
        refreshContextUsage();
    }, [clearAgentRunState, refreshTimeline, refreshAgentStatus, refreshQueueState, refreshContextUsage]);


    // Handle hashtag click
    const handleHashtagClick = useCallback(async (hashtag) => {
        setCurrentHashtag(hashtag);
        setPosts(null); // Show loading
        await loadPosts(hashtag);
    }, [loadPosts]);

    // Go back to timeline
    const handleBackToTimeline = useCallback(async () => {
        setCurrentHashtag(null);
        setSearchQuery(null);
        setPosts(null);
        await loadPosts();
    }, [loadPosts]);

    // Handle search
    const handleSearch = useCallback(async (query, scope = searchScope) => {
        if (!query || !query.trim()) return;
        const normalizedScope = scope === 'root' || scope === 'all' ? scope : 'current';
        setSearchScope(normalizedScope);
        setSearchQuery(query.trim());
        setCurrentHashtag(null);
        setPosts(null);
        try {
            const result = await searchPosts(query.trim(), 50, 0, currentChatJid, normalizedScope, currentRootChatJid);
            setPosts(result.results);
            setHasMore(false);
        } catch (error) {
            console.error('Failed to search:', error);
            setPosts([]);
        }
    }, [currentChatJid, currentRootChatJid, searchScope]);

    const enterSearchMode = useCallback(() => {
        setSearchOpen(true);
        setSearchQuery(null);
        setCurrentHashtag(null);
        setSearchScope('current');
        setPosts([]);
    }, []);

    const exitSearchMode = useCallback(() => {
        setSearchOpen(false);
        setSearchQuery(null);
        loadPosts();
    }, [loadPosts]);

    const navigateToSearchResult = useCallback(() => {}, []);

    const isMainTimelineView = !currentHashtag && !searchQuery && !searchOpen;

    const handleDeletePost = useCallback(async (post) => {
        if (!post) return;
        const postId = post.id;
        const targetChatJid = typeof post?.chat_jid === 'string' && post.chat_jid.trim()
            ? post.chat_jid.trim()
            : currentChatJid;
        const replyCount = posts?.filter((item) => item?.data?.thread_id === postId && item?.id !== postId).length || 0;
        if (replyCount > 0) {
            const confirmed = window.confirm(`Delete this message and its ${replyCount} replies?`);
            if (!confirmed) return;
        }

        const scheduleRemoval = (ids) => {
            if (!ids.length) return;
            setRemovingPostIds((prev) => {
                const next = new Set(prev);
                ids.forEach((id) => next.add(id));
                return next;
            });
            const delayMs = 180;
            setTimeout(() => {
                preserveTimelineScrollTop(() => {
                    setPosts((prev) => (prev ? prev.filter((item) => !ids.includes(item.id)) : prev));
                });
                setRemovingPostIds((prev) => {
                    const next = new Set(prev);
                    ids.forEach((id) => next.delete(id));
                    return next;
                });
                if (hasMoreRef.current) {
                    loadMoreRef.current?.({ preserveScroll: true, preserveMode: 'top' });
                }
            }, delayMs);
        };

        try {
            const result = await deletePost(postId, replyCount > 0, targetChatJid);
            if (result?.ids?.length) {
                scheduleRemoval(result.ids);
            }
        } catch (error) {
            const errorMessage = error?.message || '';
            if (replyCount === 0 && errorMessage.includes('Replies exist')) {
                const confirmed = window.confirm('Delete this message and its replies?');
                if (!confirmed) return;
                const result = await deletePost(postId, true, targetChatJid);
                if (result?.ids?.length) {
                    scheduleRemoval(result.ids);
                }
                return;
            }
            console.error('Failed to delete post:', error);
            alert(`Failed to delete message: ${errorMessage}`);
        }
    }, [currentChatJid, posts, preserveTimelineScrollTop]);

    const loadAgents = useCallback(async () => {
        try {
            const data = await getAgents();
            setAgents(buildAgentsMap(data));
            const nextUser = data?.user || {};
            setUserProfile((prev) => {
                const nextName = typeof nextUser.name === 'string' && nextUser.name.trim() ? nextUser.name.trim() : 'You';
                const nextAvatar = typeof nextUser.avatar_url === 'string' ? nextUser.avatar_url.trim() : null;
                const nextBg = typeof nextUser.avatar_background === 'string' && nextUser.avatar_background.trim()
                    ? nextUser.avatar_background.trim()
                    : null;
                if (prev.name === nextName && prev.avatar_url === nextAvatar && prev.avatar_background === nextBg) return prev;
                return { name: nextName, avatar_url: nextAvatar, avatar_background: nextBg };
            });
            const defaultAgent = (data?.agents || []).find((a) => a.id === 'default');
            applyBranding(defaultAgent?.name, defaultAgent?.avatar_url);
        } catch (e) {
            console.warn('Failed to load agents:', e);
        }
        // Fetch initial context usage for the pie chart indicator
        try {
            const targetChatJid = currentChatJid;
            const ctx = await getAgentContext(targetChatJid);
            if (activeChatJidRef.current !== targetChatJid) return;
            if (ctx) setContextUsage(ctx);
        } catch {
            /* expected: context widget refresh is best-effort during startup/chat switches. */
        }
    }, [applyBranding, currentChatJid]);

    useEffect(() => {
        loadAgents();
        // Also apply saved sidebar width imperatively (no state → no re-render)
        const saved = getLocalStorageNumber('sidebarWidth', null);
        const w = Number.isFinite(saved) ? Math.min(Math.max(saved, 160), 600) : 280;
        sidebarWidthRef.current = w;
        if (appShellRef.current) {
            appShellRef.current.style.setProperty('--sidebar-width', `${w}px`);
        }
    }, [loadAgents]);

    const isComposeBoxAgentActive = isAgentTurnActive || agentStatus !== null;

    const updateAgentProfile = useCallback((payload) => {
        if (!payload || typeof payload !== 'object') return;
        const agentId = payload.agent_id;
        if (!agentId) return;
        const nextName = payload.agent_name;
        const nextAvatar = payload.agent_avatar;
        if (!nextName && nextAvatar === undefined) return;

        const current = agentsRef.current?.[agentId] || { id: agentId };
        let resolvedName = current.name || null;
        let resolvedAvatar = current.avatar_url ?? current.avatarUrl ?? current.avatar ?? null;
        let avatarChanged = false;
        let nameChanged = false;

        if (nextName && nextName !== current.name) {
            resolvedName = nextName;
            nameChanged = true;
        }

        if (nextAvatar !== undefined) {
            const normalizedAvatar = typeof nextAvatar === 'string' ? nextAvatar.trim() : null;
            const normalizedCurrent = typeof resolvedAvatar === 'string' ? resolvedAvatar.trim() : null;
            const nextValue = normalizedAvatar || null;
            const currentValue = normalizedCurrent || null;
            if (nextValue !== currentValue) {
                resolvedAvatar = nextValue;
                avatarChanged = true;
            }
        }

        if (!nameChanged && !avatarChanged) return;

        setAgents((prev) => {
            const currentEntry = prev[agentId] || { id: agentId };
            const updated = { ...currentEntry };
            if (nameChanged) updated.name = resolvedName;
            if (avatarChanged) updated.avatar_url = resolvedAvatar;
            return { ...prev, [agentId]: updated };
        });

        if (agentId === 'default') {
            applyBranding(resolvedName, resolvedAvatar, avatarChanged ? Date.now() : null);
        }
    }, [applyBranding]);

    const updateUserProfile = useCallback((payload) => {
        if (!payload || typeof payload !== 'object') return;
        const nextName = payload.user_name ?? payload.userName;
        const nextAvatar = payload.user_avatar ?? payload.userAvatar;
        const nextBg = payload.user_avatar_background ?? payload.userAvatarBackground;
        if (nextName === undefined && nextAvatar === undefined && nextBg === undefined) return;

        setUserProfile((prev) => {
            const resolvedName = typeof nextName === 'string' && nextName.trim()
                ? nextName.trim()
                : prev.name || 'You';
            const resolvedAvatar = nextAvatar === undefined
                ? prev.avatar_url
                : (typeof nextAvatar === 'string' && nextAvatar.trim() ? nextAvatar.trim() : null);
            const resolvedBg = nextBg === undefined
                ? prev.avatar_background
                : (typeof nextBg === 'string' && nextBg.trim() ? nextBg.trim() : null);
            if (
                prev.name === resolvedName
                && prev.avatar_url === resolvedAvatar
                && prev.avatar_background === resolvedBg
            ) return prev;
            return { name: resolvedName, avatar_url: resolvedAvatar, avatar_background: resolvedBg };
        });
    }, []);

    const applyModelState = useCallback((payload) => {
        if (!payload || typeof payload !== 'object') return;
        const nextModel = payload.model ?? payload.current;
        if (nextModel !== undefined) setActiveModel(nextModel);
        if (payload.thinking_level !== undefined) setActiveThinkingLevel(payload.thinking_level ?? null);
        if (payload.supports_thinking !== undefined) setSupportsThinking(Boolean(payload.supports_thinking));
        if (payload.provider_usage !== undefined) setActiveModelUsage(payload.provider_usage ?? null);
    }, []);

    const refreshModelState = useCallback(() => {
        const targetChatJid = currentChatJid;
        getAgentModels(targetChatJid)
            .then((payload) => {
                if (activeChatJidRef.current !== targetChatJid) return;
                if (payload) applyModelState(payload);
            })
            .catch(() => {
                /* expected: model-state refresh is best-effort during chat switches. */
            });
    }, [applyModelState, currentChatJid]);

    const refreshActiveChatAgents = useCallback(() => {
        const targetChatJid = currentChatJid;
        const normalizeChats = (rows) => Array.isArray(rows)
            ? rows.filter((chat) => chat && typeof chat.chat_jid === 'string' && typeof chat.agent_name === 'string' && chat.agent_name.trim())
            : [];

        Promise.all([
            getActiveChatAgents().catch(() => ({ chats: [] /* expected: active-agent refresh is best-effort. */ })),
            getChatBranches(null, { includeArchived: true }).catch(() => ({ chats: [] /* expected: archived-branch refresh is best-effort. */ })),
        ])
            .then(([activePayload, branchPayload]) => {
                if (activeChatJidRef.current !== targetChatJid) return;

                const activeChats = normalizeChats(activePayload?.chats);
                const branchChats = normalizeChats(branchPayload?.chats);

                if (branchChats.length === 0) {
                    setActiveChatAgents(activeChats);
                    return;
                }

                const activeByChat = new Map(activeChats.map((chat) => [chat.chat_jid, chat]));
                const merged = branchChats.map((chat) => {
                    const active = activeByChat.get(chat.chat_jid);
                    return active
                        ? { ...chat, ...active, is_active: active.is_active ?? chat.is_active }
                        : chat;
                });

                merged.sort((a, b) => {
                    if (a.chat_jid === targetChatJid && b.chat_jid !== targetChatJid) return -1;
                    if (b.chat_jid === targetChatJid && a.chat_jid !== targetChatJid) return 1;
                    const aArchived = Boolean(a.archived_at);
                    const bArchived = Boolean(b.archived_at);
                    if (aArchived !== bArchived) return aArchived ? 1 : -1;
                    if (Boolean(a.is_active) !== Boolean(b.is_active)) return a.is_active ? -1 : 1;
                    return String(a.chat_jid).localeCompare(String(b.chat_jid));
                });

                setActiveChatAgents(merged);
            })
            .catch(() => {
                if (activeChatJidRef.current !== targetChatJid) return;
                setActiveChatAgents([]);
            });
    }, [currentChatJid]);
    const refreshCurrentChatBranches = useCallback(() => {
        getChatBranches(currentRootChatJid)
            .then((payload) => {
                const chats = Array.isArray(payload?.chats)
                    ? payload.chats.filter((chat) => chat && typeof chat.chat_jid === 'string' && typeof chat.agent_name === 'string')
                    : [];
                setCurrentChatBranches(chats);
            })
            .catch(() => {
                /* expected: branch-list refresh is best-effort while the UI is already usable. */
            });
    }, [currentRootChatJid]);
    const handleInjectQueuedFollowup = useCallback((queuedItem) => {
        const rowId = queuedItem?.row_id;
        if (rowId == null) return;
        // Optimistic removal
        dismissedQueueRowIdsRef.current.add(rowId);
        setFollowupQueueItems((current) => current.filter((item) => item?.row_id !== rowId));

        // Atomically remove the queued item server-side and convert it into
        // steering (or an immediate send if the active stream already ended).
        steerAgentQueueItem(rowId, resolveQueueActionChatJid(currentChatJid))
            .then(() => {
                void refreshQueueState();
            })
            .catch((error) => {
                console.warn('[queue] Failed to steer queued item:', error);
                showIntentToast('Failed to steer message', 'The queued message could not be sent as steering.', 'warning');
                dismissedQueueRowIdsRef.current.delete(rowId);
                void refreshQueueState();
            });
    }, [currentChatJid, refreshQueueState, setFollowupQueueItems, showIntentToast]);

    const handleRemoveQueuedFollowup = useCallback((queuedItem) => {
        const rowId = queuedItem?.row_id;
        if (rowId == null) return;
        const remainingQueueCount = followupQueueItemsRef.current.filter((item) => item?.row_id !== rowId).length;
        // Optimistic removal
        dismissedQueueRowIdsRef.current.add(rowId);
        clearQueuedSteerStateIfStale(remainingQueueCount);
        setFollowupQueueItems((current) => current.filter((item) => item?.row_id !== rowId));

        // Remove the queued item server-side without sending it as steering
        // or converting it into a message.
        removeAgentQueueItem(rowId, resolveQueueActionChatJid(currentChatJid))
            .then(() => {
                void refreshQueueState();
            })
            .catch((error) => {
                console.warn('[queue] Failed to remove queued item:', error);
                showIntentToast('Failed to remove message', 'The queued message could not be removed.', 'warning');
                dismissedQueueRowIdsRef.current.delete(rowId);
                void refreshQueueState();
            });
    }, [clearQueuedSteerStateIfStale, currentChatJid, refreshQueueState, setFollowupQueueItems, showIntentToast]);

    const handleMessageResponse = useCallback((response) => {
        if (!response || typeof response !== "object") return;

        refreshActiveChatAgents();
        refreshCurrentChatBranches();
        void refreshContextUsage();
        void refreshAutoresearchStatus();

        if (response?.queued === "followup" || response?.queued === "steer") {
            refreshQueueState();
            return;
        }

        const commandResult = response?.command;
        if (commandResult && typeof commandResult === "object" && (
            commandResult?.queued_followup || commandResult?.queued_steer
        )) {
            refreshQueueState();
        }
    }, [refreshActiveChatAgents, refreshAutoresearchStatus, refreshCurrentChatBranches, refreshContextUsage, refreshQueueState]);

    const handleExtensionPanelAction = useCallback(async (panel, action) => {
        const panelKey = typeof panel?.key === 'string' ? panel.key : '';
        const actionKey = typeof action?.key === 'string' ? action.key : '';
        const pendingKey = `${panelKey}:${actionKey}`;
        if (!panelKey || !actionKey) return;
        setPendingExtensionPanelActions((prev) => {
            if (prev.has(pendingKey)) return prev;
            const next = new Set(prev);
            next.add(pendingKey);
            return next;
        });
        try {
            if (action?.action_type === 'autoresearch.stop') {
                await stopAutoresearch(currentChatJid, { generateReport: true });
                void refreshAutoresearchStatus();
                return;
            }
            if (action?.action_type === 'autoresearch.dismiss') {
                await dismissAutoresearch(currentChatJid);
                void refreshAutoresearchStatus();
                return;
            }
            if (action?.action_type === 'autoresearch.copy_tmux') {
                const tmuxCommand = typeof panel?.tmux_command === 'string' ? panel.tmux_command.trim() : '';
                if (!tmuxCommand) throw new Error('No tmux command available.');
                await navigator.clipboard.writeText(tmuxCommand);
                showIntentToast('Copied', 'tmux command copied to clipboard.', 'success');
                return;
            }
            throw new Error(`Unsupported panel action: ${action?.action_type || actionKey}`);
        } catch (error) {
            showIntentToast('Panel action failed', error?.message || 'Could not complete that action.', 'warning');
        } finally {
            setPendingExtensionPanelActions((prev) => {
                if (!prev.has(pendingKey)) return prev;
                const next = new Set(prev);
                next.delete(pendingKey);
                return next;
            });
        }
    }, [currentChatJid, refreshAutoresearchStatus, showIntentToast]);

    const closeBtwPanel = useCallback(() => {
        if (btwAbortRef.current) {
            btwAbortRef.current.abort();
            btwAbortRef.current = null;
        }
        setBtwSession(null);
    }, []);

    const runBtwPrompt = useCallback(async (question) => {
        const trimmed = String(question || '').trim();
        if (!trimmed) {
            showIntentToast('BTW needs a question', 'Usage: /btw <question>', 'warning');
            return true;
        }

        if (btwAbortRef.current) {
            btwAbortRef.current.abort();
        }
        const controller = new AbortController();
        btwAbortRef.current = controller;

        setBtwSession({
            question: trimmed,
            answer: '',
            thinking: '',
            error: null,
            model: null,
            status: 'running',
        });

        try {
            const finalResult = await streamSidePrompt(trimmed, {
                signal: controller.signal,
                chatJid: resolveBtwChatJid(currentChatJid),
                systemPrompt: 'Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.',
                onEvent: (eventType, data) => {
                    if (eventType === 'side_prompt_start') {
                        setBtwSession((prev) => prev ? { ...prev, status: 'running' } : prev);
                    }
                },
                onThinkingDelta: (delta) => {
                    setBtwSession((prev) => prev ? { ...prev, thinking: `${prev.thinking || ''}${delta || ''}` } : prev);
                },
                onTextDelta: (delta) => {
                    setBtwSession((prev) => prev ? { ...prev, answer: `${prev.answer || ''}${delta || ''}` } : prev);
                },
            });
            if (btwAbortRef.current !== controller) return true;
            setBtwSession((prev) => prev ? {
                ...prev,
                answer: finalResult?.result || prev.answer || '',
                thinking: finalResult?.thinking || prev.thinking || '',
                model: finalResult?.model || null,
                status: 'success',
                error: null,
            } : prev);
        } catch (error) {
            if (controller.signal.aborted) return true;
            setBtwSession((prev) => prev ? {
                ...prev,
                status: 'error',
                error: error?.payload?.error || error?.message || 'BTW request failed.',
            } : prev);
        } finally {
            if (btwAbortRef.current === controller) {
                btwAbortRef.current = null;
            }
        }
        return true;
    }, [currentChatJid, showIntentToast]);

    const handleBtwIntercept = useCallback(async ({ content }) => {
        const parsed = parseBtwCommand(content);
        if (!parsed) return false;

        if (parsed.type === 'help') {
            showIntentToast('BTW usage', 'Use /btw <question> to open a side conversation.', 'info', 4000);
            return true;
        }

        if (parsed.type === 'clear') {
            closeBtwPanel();
            showIntentToast('BTW cleared', 'Closed the side conversation panel.', 'info');
            return true;
        }

        if (parsed.type === 'ask') {
            await runBtwPrompt(parsed.question);
            return true;
        }

        return false;
    }, [closeBtwPanel, runBtwPrompt, showIntentToast]);

    const handleBtwRetry = useCallback(() => {
        if (btwSession?.question) {
            void runBtwPrompt(btwSession.question);
        }
    }, [btwSession, runBtwPrompt]);

    const handleBtwInject = useCallback(async () => {
        const content = buildBtwInjectionText(btwSession);
        if (!content) return;
        try {
            const response = await api.sendAgentMessage('default', content, null, [], isComposeBoxAgentActive ? 'queue' : null, currentChatJid);
            handleMessageResponse(response);
            showIntentToast(
                response?.queued === 'followup' ? 'BTW queued' : 'BTW injected',
                response?.queued === 'followup'
                    ? 'The BTW summary was queued as a follow-up because the agent is busy.'
                    : 'The BTW summary was sent to the main chat.',
                'info',
                3500,
            );
        } catch (error) {
            showIntentToast('BTW inject failed', error?.message || 'Could not inject BTW answer into chat.', 'warning');
        }
    }, [btwSession, handleMessageResponse, isComposeBoxAgentActive, showIntentToast]);

    const buildFloatingWidgetDashboardSnapshot = useCallback(async (requestPayload = null) => {
        const [statusRes, contextRes, queueRes, modelsRes, activeChatsRes, branchesRes, timelineRes] = await Promise.allSettled([
            getAgentStatus(currentChatJid),
            getAgentContext(currentChatJid),
            getAgentQueueState(currentChatJid),
            getAgentModels(currentChatJid),
            getActiveChatAgents(),
            getChatBranches(currentRootChatJid),
            api.getTimeline(20, null, currentChatJid),
        ]);

        const statusPayload = statusRes.status === 'fulfilled' ? statusRes.value : null;
        const contextPayload = contextRes.status === 'fulfilled' ? contextRes.value : null;
        const queuePayload = queueRes.status === 'fulfilled' ? queueRes.value : null;
        const modelsPayload = modelsRes.status === 'fulfilled' ? modelsRes.value : null;
        const activeChatsPayload = activeChatsRes.status === 'fulfilled' ? activeChatsRes.value : null;
        const branchesPayload = branchesRes.status === 'fulfilled' ? branchesRes.value : null;
        const timelinePayload = timelineRes.status === 'fulfilled' ? timelineRes.value : null;

        const posts = Array.isArray(timelinePayload?.posts)
            ? timelinePayload.posts
            : (Array.isArray(rawPosts) ? rawPosts : []);
        const latestPost = posts.length ? posts[posts.length - 1] : null;
        const botPosts = posts.filter((post) => post?.data?.is_bot_message).length;
        const userPosts = posts.filter((post) => !post?.data?.is_bot_message).length;
        const queueCount = Number(queuePayload?.count ?? followupQueueItemsRef.current.length ?? 0) || 0;
        const activeChatsCount = Array.isArray(activeChatsPayload?.chats)
            ? activeChatsPayload.chats.length
            : activeChatAgents.length;
        const branchCount = Array.isArray(branchesPayload?.chats)
            ? branchesPayload.chats.length
            : currentChatBranches.length;
        const contextPercent = Number(contextPayload?.percent ?? contextUsage?.percent ?? 0) || 0;
        const contextTokens = Number(contextPayload?.tokens ?? contextUsage?.tokens ?? 0) || 0;
        const contextWindow = Number(contextPayload?.contextWindow ?? contextUsage?.contextWindow ?? 0) || 0;
        const modelName = modelsPayload?.current ?? activeModel ?? null;
        const thinkingLevel = modelsPayload?.thinking_level ?? activeThinkingLevel ?? null;
        const supportsThinkingValue = modelsPayload?.supports_thinking ?? supportsThinking;
        const agentState = statusPayload?.status || (isAgentTurnActive ? 'active' : 'idle');
        const agentPhase = statusPayload?.data?.type || statusPayload?.type || null;

        return {
            generatedAt: new Date().toISOString(),
            request: requestPayload,
            chat: {
                currentChatJid,
                rootChatJid: currentRootChatJid,
                activeChats: activeChatsCount,
                branches: branchCount,
            },
            agent: {
                status: agentState,
                phase: agentPhase,
                running: Boolean(isAgentTurnActive),
            },
            model: {
                current: modelName,
                thinkingLevel,
                supportsThinking: Boolean(supportsThinkingValue),
            },
            context: {
                tokens: contextTokens,
                contextWindow,
                percent: contextPercent,
            },
            queue: {
                count: queueCount,
            },
            timeline: {
                loadedPosts: posts.length,
                botPosts,
                userPosts,
                latestPostId: latestPost?.id ?? null,
                latestTimestamp: latestPost?.timestamp ?? null,
            },
            bars: [
                { key: 'context', label: 'Context', value: Math.max(0, Math.min(100, Math.round(contextPercent))) },
                { key: 'queue', label: 'Queue', value: Math.max(0, Math.min(100, queueCount * 18)) },
                { key: 'activeChats', label: 'Active chats', value: Math.max(0, Math.min(100, activeChatsCount * 12)) },
                { key: 'posts', label: 'Timeline load', value: Math.max(0, Math.min(100, posts.length * 5)) },
            ],
        };
    }, [activeChatAgents, activeModel, activeThinkingLevel, contextUsage, currentChatBranches, currentChatJid, currentRootChatJid, isAgentTurnActive, rawPosts, supportsThinking]);

    const refreshModelAndQueueState = useCallback(() => {
        refreshModelState();
        refreshActiveChatAgents();
        refreshCurrentChatBranches();
        refreshQueueState();
        refreshContextUsage();
        refreshAutoresearchStatus();
    }, [refreshModelState, refreshActiveChatAgents, refreshCurrentChatBranches, refreshQueueState, refreshContextUsage, refreshAutoresearchStatus]);

    useEffect(() => {
        refreshModelAndQueueState();
        const interval = setInterval(() => {
            refreshModelState();
            refreshActiveChatAgents();
            refreshCurrentChatBranches();
            refreshQueueState();
        }, 60_000);
        return () => clearInterval(interval);
    }, [refreshModelAndQueueState, refreshModelState, refreshActiveChatAgents, refreshCurrentChatBranches, refreshQueueState]);

    useEffect(() => {
        refreshCurrentChatBranches();
    }, [refreshCurrentChatBranches]);

    useEffect(() => {
        setExtensionStatusPanels(new Map());
        setPendingExtensionPanelActions(new Set());
        void refreshAutoresearchStatus();
    }, [currentChatJid, refreshAutoresearchStatus]);

    useEffect(() => {
        let cancelled = false;

        const safeScrollToBottom = () => {
            if (cancelled) return;
            requestAnimationFrame(() => {
                if (cancelled) return;
                scrollToBottom();
            });
        };

        if (currentHashtag) {
            loadPosts(currentHashtag);
            return () => {
                cancelled = true;
            };
        }

        if (searchQuery) {
            searchPosts(searchQuery, 50, 0, currentChatJid, searchScope, currentRootChatJid)
                .then((result) => {
                    if (cancelled) return;
                    setPosts(result.results);
                    setHasMore(false);
                })
                .catch((error) => {
                    if (cancelled) return;
                    console.error('Failed to search:', error);
                    setPosts([]);
                    setHasMore(false);
                });
            return () => {
                cancelled = true;
            };
        }

        loadPosts()
            .then(() => {
                safeScrollToBottom();
            })
            .catch((error) => {
                if (cancelled) return;
                console.error('Failed to load timeline:', error);
            });

        return () => {
            cancelled = true;
        };
    }, [
        currentChatJid,
        currentHashtag,
        searchQuery,
        searchScope,
        currentRootChatJid,
        loadPosts,
        scrollToBottom,
        setHasMore,
        setPosts,
    ]);

    useEffect(() => {
        const ownerChatJid = paneStateOwnerChatJidRef.current || currentChatJid;
        chatPaneStateByChatRef.current.set(ownerChatJid, snapshotCurrentChatPaneState());
    }, [currentChatJid, snapshotCurrentChatPaneState]);

    useEffect(() => {
        const ownerChatJid = paneStateOwnerChatJidRef.current || currentChatJid;
        if (ownerChatJid === currentChatJid) return;
        chatPaneStateByChatRef.current.set(ownerChatJid, snapshotCurrentChatPaneState());
        paneStateOwnerChatJidRef.current = currentChatJid;
        dismissedQueueRowIdsRef.current.clear();
        restoreChatPaneState(chatPaneStateByChatRef.current.get(currentChatJid) || null);
        void refreshQueueState();
        void refreshAgentStatus();
        void refreshContextUsage();
    }, [currentChatJid, refreshAgentStatus, refreshContextUsage, refreshQueueState, restoreChatPaneState, snapshotCurrentChatPaneState]);

    const refreshCurrentView = useCallback(() => {
        const { currentHashtag: activeHashtag, searchQuery: activeSearch, searchOpen: activeSearchOpen } = viewStateRef.current || {};
        if (!activeHashtag && !activeSearch && !activeSearchOpen) {
            refreshTimeline();
        }
        refreshModelAndQueueState();
    }, [refreshModelAndQueueState, refreshTimeline]);

    const applyLiveGeneratedWidgetUpdate = useCallback((data, fallbackStatus = 'streaming') => {
        const payload = normalizeLiveGeneratedWidgetPayload({
            ...data,
            ...((data && data.status) ? {} : { status: fallbackStatus }),
        });
        if (!payload) return;

        const sessionKey = getGeneratedWidgetSessionKey(payload);
        if (sessionKey && dismissedLiveWidgetKeysRef.current.has(sessionKey)) {
            return;
        }

        setFloatingWidget((current) => {
            const currentKey = getGeneratedWidgetSessionKey(current);
            const sameSession = Boolean(sessionKey && currentKey && sessionKey === currentKey);
            const mergedArtifact = {
                ...((sameSession && current?.artifact) ? current.artifact : {}),
                ...(payload.artifact || {}),
            };
            return {
                ...(sameSession && current ? current : {}),
                ...payload,
                artifact: mergedArtifact,
                source: 'live',
                originChatJid: payload.originChatJid || currentChatJid,
                openedAt: sameSession && current?.openedAt ? current.openedAt : new Date().toISOString(),
                liveUpdatedAt: new Date().toISOString(),
            };
        });
    }, [currentChatJid]);

    const handleSseEvent = useCallback((eventType, data) => {
        const turnId = data?.turn_id;
        const eventChatJid = typeof data?.chat_jid === 'string' && data.chat_jid.trim() ? data.chat_jid.trim() : null;
        const isGlobalUiEvent = eventType === 'connected' || eventType === 'workspace_update';
        const isCurrentChatEvent = eventChatJid ? eventChatJid === currentChatJid : isGlobalUiEvent;

        if (isCurrentChatEvent) {
            updateAgentProfile(data);
            updateUserProfile(data);
        }

        if (eventType === 'ui_theme') {
            applyThemeFromEvent(data);
            return;
        }

        if (eventType === 'generated_widget_open') {
            if (!isCurrentChatEvent) return;
            if (turnId && !currentTurnIdRef.current) {
                setActiveTurn(turnId);
            }
            applyLiveGeneratedWidgetUpdate(data, 'loading');
            return;
        }

        if (eventType === 'generated_widget_delta') {
            if (!isCurrentChatEvent) return;
            if (turnId && !currentTurnIdRef.current) {
                setActiveTurn(turnId);
            }
            applyLiveGeneratedWidgetUpdate(data, 'streaming');
            return;
        }

        if (eventType === 'generated_widget_final') {
            if (!isCurrentChatEvent) return;
            if (turnId && !currentTurnIdRef.current) {
                setActiveTurn(turnId);
            }
            applyLiveGeneratedWidgetUpdate(data, 'final');
            return;
        }

        if (eventType === 'generated_widget_error') {
            if (!isCurrentChatEvent) return;
            applyLiveGeneratedWidgetUpdate(data, 'error');
            return;
        }

        if (eventType === 'generated_widget_close') {
            if (!isCurrentChatEvent) return;
            const sessionKey = getGeneratedWidgetSessionKey(data);
            setFloatingWidget((current) => {
                if (!current || current?.source !== 'live') return current;
                const currentKey = getGeneratedWidgetSessionKey(current);
                if (sessionKey && currentKey && sessionKey !== currentKey) return current;
                return null;
            });
            return;
        }

        if (eventType?.startsWith('agent_')) {
            const noisyAgentEvent =
                eventType === 'agent_draft_delta' ||
                eventType === 'agent_thought_delta' ||
                eventType === 'agent_draft' ||
                eventType === 'agent_thought';
            if (!noisyAgentEvent) {
                clearLastActivityFlag();
            }
        }

        // Handle agent status updates
        if (eventType === 'connected') {
            setAgentStatus(null);
            setAgentDraft({ text: '', totalLines: 0 });
            setAgentPlan('');
            setAgentThought({ text: '', totalLines: 0 });
            setPendingRequest(null);
            pendingRequestRef.current = null;
            clearAgentRunState();

            const targetChatJid = currentChatJid;
            getAgentStatus(targetChatJid)
                .then((res) => {
                    if (activeChatJidRef.current !== targetChatJid) return;
                    if (!res || res.status !== 'active' || !res.data) return;
                    const payload = res.data;
                    const activeTurn = payload.turn_id || payload.turnId;
                    if (activeTurn) setActiveTurn(activeTurn);
                    noteAgentActivity({ clearSilence: true });
                    showLastActivity(payload);

                    // Restore draft/thought buffers from enriched status
                    if (res.thought && res.thought.text) {
                        thoughtBufferRef.current = res.thought.text;
                        setAgentThought({ text: res.thought.text, totalLines: res.thought.totalLines || 0 });
                    }
                    if (res.draft && res.draft.text) {
                        draftBufferRef.current = res.draft.text;
                        setAgentDraft({ text: res.draft.text, totalLines: res.draft.totalLines || 0 });
                    }
                })
                .catch((err) => {
                    console.warn('Failed to fetch agent status:', err);
                });
            const { currentHashtag: activeHashtag, searchQuery: activeSearch, searchOpen: activeSearchOpen } = viewStateRef.current || {};
            if (!activeHashtag && !activeSearch && !activeSearchOpen) {
                // One immediate timeline resync on SSE connect closes the race
                // where the client restores draft/status state after a restart
                // but misses already-persisted assistant posts from the same turn.
                refreshTimeline();
            }
            refreshModelAndQueueState();
            return;
        }

        if (eventType === 'agent_status') {
            if (!isCurrentChatEvent) {
                if (data?.type === 'done' || data?.type === 'error') {
                    void refreshActiveChatAgents();
                    void refreshCurrentChatBranches();
                }
                return;
            }
            if (data.type === 'done' || data.type === 'error') {
                if (turnId && currentTurnIdRef.current && turnId !== currentTurnIdRef.current) {
                    return;
                }
                if (data.type === 'done') {
                    notifyForFinalResponse(turnId || currentTurnIdRef.current);
                    // Refresh timeline to surface any final response that arrived
                    // during an SSE gap (agent_response event may have been missed).
                    const { currentHashtag: ah, searchQuery: sq, searchOpen: so } = viewStateRef.current || {};
                    if (!ah && !sq && !so) refreshTimeline();
                    // Update context usage indicator immediately from the done
                    // payload when available, then re-fetch canonical state so
                    // the compose pie stays in sync even if the SSE payload is
                    // absent or stale.
                    if (data.context_usage) setContextUsage(data.context_usage);
                }
                void refreshContextUsage();
                wasAgentActiveRef.current = false;
                clearAgentRunState();
                // Re-sync queue state from the server on terminal transitions.
                // This preserves any queued follow-ups that still remain after
                // an error or multi-step drain instead of blanking the stack
                // optimistically and waiting for a later incidental refresh.
                dismissedQueueRowIdsRef.current.clear();
                void refreshActiveChatAgents();
                void refreshQueueState();
                setAgentDraft({ text: '', totalLines: 0 });
                setAgentPlan('');
                setAgentThought({ text: '', totalLines: 0 });
                setPendingRequest(null);
                if (data.type === 'error') {
                    // Show error status briefly so the user sees what failed
                    setAgentStatus({ type: 'error', title: data.title || 'Agent error' });
                    setTimeout(() => setAgentStatus(null), 8000);
                } else {
                    setAgentStatus(null);
                }
            } else {
                if (turnId) setActiveTurn(turnId);
                noteAgentActivity({ running: true, clearSilence: true });
                if (data.type === 'thinking') {
                    draftBufferRef.current = '';
                    thoughtBufferRef.current = '';
                    setAgentDraft({ text: '', totalLines: 0 });
                    setAgentPlan('');
                    setAgentThought({ text: '', totalLines: 0 });
                }
                // Throttle intermediate status updates to avoid re-render storms.
                // Only update state if the status type changed (e.g. intent→tool_call→thinking).
                agentStatusRef.current = data;
                setAgentStatus((prev) => {
                    if (prev && prev.type === data.type && prev.title === data.title) return prev;
                    return data;
                });
            }
            return;
        }

        if (eventType === 'agent_steer_queued') {
            if (!isCurrentChatEvent) return;
            if (turnId && currentTurnIdRef.current && turnId !== currentTurnIdRef.current) {
                return;
            }
            const targetTurn = turnId || currentTurnIdRef.current;
            if (!targetTurn) return;
            steerQueuedTurnIdRef.current = targetTurn;
            setSteerQueuedTurnId(targetTurn);
            return;
        }

        if (eventType === 'agent_followup_queued') {
            if (!isCurrentChatEvent) return;
            const rowId = data?.row_id;
            const content = data?.content;
            if (rowId != null && typeof content === 'string' && content.trim()) {
                setFollowupQueueItems((current) => {
                    if (current.some((item) => item?.row_id === rowId)) {
                        return current;
                    }
                    return [
                        ...current,
                        {
                            row_id: rowId,
                            content,
                            timestamp: data?.timestamp || null,
                            thread_id: data?.thread_id ?? null,
                        },
                    ];
                });
            }
            void refreshQueueState();
            return;
        }

        if (eventType === 'agent_followup_consumed') {
            if (!isCurrentChatEvent) return;
            const rowId = data?.row_id;
            if (rowId != null) {
                const remainingQueueCount = followupQueueItemsRef.current.filter((item) => item.row_id !== rowId).length;
                clearQueuedSteerStateIfStale(remainingQueueCount);
                setFollowupQueueItems((current) => current.filter((item) => item.row_id !== rowId));
            }
            void refreshQueueState();
            // Refresh timeline so the replaced placeholder (now the real response)
            // appears immediately — it was filtered out while queued.
            const { currentHashtag: activeHashtag, searchQuery: activeSearch, searchOpen: activeSearchOpen } = viewStateRef.current || {};
            if (!activeHashtag && !activeSearch && !activeSearchOpen) {
                void refreshTimeline();
            }
            return;
        }

        if (eventType === 'agent_followup_removed') {
            if (!isCurrentChatEvent) return;
            const rowId = data?.row_id;
            if (rowId != null) {
                const remainingQueueCount = followupQueueItemsRef.current.filter((item) => item.row_id !== rowId).length;
                dismissedQueueRowIdsRef.current.add(rowId);
                clearQueuedSteerStateIfStale(remainingQueueCount);
                setFollowupQueueItems((current) => current.filter((item) => item.row_id !== rowId));
            }
            void refreshQueueState();
            return;
        }

        if (eventType === 'agent_draft_delta') {
            if (!isCurrentChatEvent) return;
            if (turnId && currentTurnIdRef.current && turnId !== currentTurnIdRef.current) {
                return;
            }
            if (turnId && !currentTurnIdRef.current) {
                setActiveTurn(turnId);
            }
            noteAgentActivity({ running: true, clearSilence: true });
            if (data?.reset) {
                draftBufferRef.current = '';
            }
            if (data?.delta) {
                draftBufferRef.current += data.delta;
            }
            // Throttle draft state updates to ~10fps to avoid re-render storms
            const now = Date.now();
            if (!draftThrottleRef.current || now - draftThrottleRef.current >= 100) {
                draftThrottleRef.current = now;
                const fullText = draftBufferRef.current;
                const totalLines = estimatePreviewLines(fullText);
                if (draftExpandedRef.current) {
                    setAgentDraft((prev) => ({
                        text: prev?.text || '',
                        totalLines,
                        fullText,
                    }));
                } else {
                    setAgentDraft({ text: fullText, totalLines });
                }
            }
            return;
        }

        if (eventType === 'agent_draft') {
            if (!isCurrentChatEvent) return;
            if (turnId && currentTurnIdRef.current && turnId !== currentTurnIdRef.current) {
                return;
            }
            if (turnId && !currentTurnIdRef.current) {
                setActiveTurn(turnId);
            }
            noteAgentActivity({ running: true, clearSilence: true });
            const text = data.text || '';
            const mode = data.mode || (data.kind === 'plan' ? 'replace' : 'append');
            const inferredTotal = Number.isFinite(data.total_lines)
                ? data.total_lines
                : (text ? text.replace(/\r\n/g, '\n').split('\n').length : 0);

            if (data.kind === 'plan') {
                if (mode === 'replace') setAgentPlan(text);
                else setAgentPlan((prev) => (prev || '') + text);
            } else if (!draftExpandedRef.current) {
                draftBufferRef.current = text;
                setAgentDraft({ text, totalLines: inferredTotal });
            }
            return;
        }

        if (eventType === 'agent_thought_delta') {
            if (!isCurrentChatEvent) return;
            if (turnId && currentTurnIdRef.current && turnId !== currentTurnIdRef.current) {
                return;
            }
            if (turnId && !currentTurnIdRef.current) {
                setActiveTurn(turnId);
            }
            noteAgentActivity({ running: true, clearSilence: true });
            if (data?.reset) {
                thoughtBufferRef.current = '';
            }
            if (typeof data?.delta === 'string') {
                thoughtBufferRef.current += data.delta;
            }
            // Throttle thought state updates to ~10fps
            const now = Date.now();
            if (thoughtExpandedRef.current && (!thoughtThrottleRef.current || now - thoughtThrottleRef.current >= 100)) {
                thoughtThrottleRef.current = now;
                const fullText = thoughtBufferRef.current;
                setAgentThought((prev) => ({
                    text: prev?.text || '',
                    totalLines: estimatePreviewLines(fullText),
                    fullText,
                }));
            }
            return;
        }

        if (eventType === 'agent_thought') {
            if (!isCurrentChatEvent) return;
            if (turnId && currentTurnIdRef.current && turnId !== currentTurnIdRef.current) {
                return;
            }
            if (turnId && !currentTurnIdRef.current) {
                setActiveTurn(turnId);
            }
            noteAgentActivity({ running: true, clearSilence: true });
            const text = data.text || '';
            const inferredTotal = Number.isFinite(data.total_lines)
                ? data.total_lines
                : (text ? text.replace(/\r\n/g, '\n').split('\n').length : 0);
            if (!thoughtExpandedRef.current) {
                thoughtBufferRef.current = text;
                setAgentThought({ text, totalLines: inferredTotal });
            }
            return;
        }

        if (eventType === 'model_changed') {
            if (!isCurrentChatEvent) return;
            if (data?.model !== undefined) setActiveModel(data.model);
            if (data?.thinking_level !== undefined) setActiveThinkingLevel(data.thinking_level ?? null);
            if (data?.supports_thinking !== undefined) setSupportsThinking(Boolean(data.supports_thinking));
            // Refresh context usage - the context window size changes with the model
            const targetChatJid = currentChatJid;
            getAgentContext(targetChatJid)
                .then((ctx) => {
                    if (activeChatJidRef.current !== targetChatJid) return;
                    if (ctx) setContextUsage(ctx);
                })
                .catch(() => {
                    /* expected: context usage refresh is best-effort after model switches. */
                });
            return;
        }

        if (eventType === 'extension_ui_widget' && data?.options?.surface === 'status-panel') {
            const eventChatJid = typeof data?.chat_jid === 'string' && data.chat_jid.trim() ? data.chat_jid.trim() : currentChatJid;
            if (eventChatJid !== currentChatJid) return;
            const panelKey = typeof data?.key === 'string' ? data.key : '';
            const panel = Array.isArray(data?.content)
                ? data.content.find((item) => item?.type === 'status_panel' && item?.panel)
                : null;
            if (!panelKey) return;
            setExtensionStatusPanels((prev) => {
                const next = new Map(prev);
                if (data?.options?.remove || !panel?.panel) {
                    next.delete(panelKey);
                } else {
                    next.set(panelKey, panel.panel);
                }
                return next;
            });
            if (data?.options?.remove || panel?.panel?.state !== 'running') {
                setPendingExtensionPanelActions((prev) => {
                    if (prev.size === 0) return prev;
                    const next = new Set(Array.from(prev).filter((key) => !String(key).startsWith(`${panelKey}:`)));
                    return next.size === prev.size ? prev : next;
                });
            }
            dispatchExtensionUiBrowserEvent(eventType, data);
            return;
        }

        if (eventType === 'workspace_update') {
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('workspace-update', { detail: data }));
            }
            void refreshActiveEditorFromWorkspace(data?.updates);
            return;
        }

        if (isExtensionUiEventType(eventType)) {
            if (!isCurrentChatEvent) return;
            dispatchExtensionUiBrowserEvent(eventType, data);
            if (eventType === 'extension_ui_notify' && typeof data?.message === 'string') {
                showIntentToast(data.message, null, data?.type || 'info');
            }
            if (eventType === 'extension_ui_error' && typeof data?.error === 'string') {
                showIntentToast('Extension UI error', data.error, 'error', 5000);
            }
            return;
        }

        // Add new posts/replies to timeline (only when on main timeline) - append at end for chat style
        const { currentHashtag: activeHashtag, searchQuery: activeSearch, searchOpen: activeSearchOpen } = viewStateRef.current;
        if (eventType === 'agent_response') {
            if (!isCurrentChatEvent) return;
            removeStalledPost();
            lastAgentResponseRef.current = {
                post: data,
                turnId: currentTurnIdRef.current,
            };
        }
        if (!activeHashtag && !activeSearch && !activeSearchOpen && isCurrentChatEvent && (eventType === 'new_post' || eventType === 'new_reply' || eventType === 'agent_response')) {
            setPosts((prev) => {
                if (!prev) return [data];
                if (prev.some((post) => post.id === data.id)) return prev;
                return [...prev, data];
            });
            scrollToBottomRef.current?.();
        }
        // Update existing post (e.g., when link previews are fetched)
        // Skip during search/hashtag views to avoid mutating search results.
        if (eventType === 'interaction_updated') {
            if (!isCurrentChatEvent) return;
            if (activeHashtag || activeSearch || activeSearchOpen) return;
            setPosts(prev => {
                if (!prev) return prev;
                if (!prev.some((p) => p.id === data.id)) return prev;
                return prev.map((p) => (p.id === data.id ? data : p));
            });
        }
        if (eventType === 'interaction_deleted') {
            if (!isCurrentChatEvent) return;
            if (activeHashtag || activeSearch || activeSearchOpen) return;
            const ids = data?.ids || [];
            if (ids.length) {
                preserveTimelineScrollTop(() => {
                    setPosts(prev => prev ? prev.filter(p => !ids.includes(p.id)) : prev);
                });
                if (hasMoreRef.current) {
                    loadMoreRef.current?.({ preserveScroll: true, preserveMode: 'top' });
                }
            }
        }
    }, [
        applyLiveGeneratedWidgetUpdate,
        clearAgentRunState,
        clearLastActivityFlag,
        currentChatJid,
        loadMoreRef,
        noteAgentActivity,
        notifyForFinalResponse,
        preserveTimelineScrollTop,
        refreshActiveChatAgents,
        refreshCurrentChatBranches,
        refreshTimeline,
        removeStalledPost,
        setActiveTurn,
        showLastActivity,
        updateAgentProfile,
        updateUserProfile,
        refreshModelState,
        refreshQueueState,
        setFollowupQueueItems,
        refreshContextUsage,
    ]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const api = window.__PICLAW_TEST_API || {};
        api.emit = handleSseEvent;
        api.reset = () => {
            removeStalledPost();
            clearAgentRunState();
            setAgentStatus(null);
            setAgentDraft({ text: '', totalLines: 0 });
            setAgentPlan('');
            setAgentThought({ text: '', totalLines: 0 });
            setPendingRequest(null);
        };
        api.finalize = () => finalizeStalledResponse();
        window.__PICLAW_TEST_API = api;
        return () => {
            if (window.__PICLAW_TEST_API === api) {
                window.__PICLAW_TEST_API = undefined;
            }
        };
    }, [clearAgentRunState, finalizeStalledResponse, handleSseEvent, removeStalledPost]);

    // Set up SSE connection
    useSseConnection({ handleSseEvent, handleConnectionStatusChange, loadPosts, onWake: refreshCurrentView, chatJid: currentChatJid });

    // Scroll to hash-linked message on load (e.g. #msg-123)
    useEffect(() => {
        if (!posts || posts.length === 0) return;
        const hash = location.hash;
        if (!hash || !hash.startsWith('#msg-')) return;
        const msgId = hash.slice(5); // strip '#msg-'
        scrollToMessage(msgId);
        // Clear hash after scroll so it doesn't re-trigger
        history.replaceState(null, '', location.pathname + location.search);
    }, [posts, scrollToMessage]);

    // Adaptive backstop poller - SSE is the primary event source; this is
    // a safety net only. 15 s when a turn is active (keeps compaction status
    // visible and catches SSE-gap missed turn completion or timeline updates,
    // including recovery/resume turns). 60 s when idle (timeline + status
    // refresh as a general backstop).
    const isAgentActive = agentStatus !== null;
    useEffect(() => {
        if (connectionStatus !== 'connected') return;
        const intervalMs = isAgentActive ? 15000 : 60000;
        const interval = setInterval(() => {
            const { currentHashtag: activeHashtag, searchQuery: activeSearch, searchOpen: activeSearchOpen } = viewStateRef.current || {};
            const onMainTimeline = !activeHashtag && !activeSearch && !activeSearchOpen;

            if (isAgentActive) {
                // Active turns still need an occasional timeline resync. This
                // catches cases where the client saw draft/thought activity but
                // missed the eventual persisted assistant posts during an SSE
                // gap or restart-recovery window.
                if (onMainTimeline) {
                    refreshTimeline();
                }
                refreshQueueState();
                refreshAgentStatus();
                refreshContextUsage();
                refreshAutoresearchStatus();
            } else {
                if (onMainTimeline) {
                    refreshTimeline();
                }
                refreshAgentStatus();
                refreshContextUsage();
                refreshAutoresearchStatus();
            }
        }, intervalMs);
        return () => clearInterval(interval);
    }, [connectionStatus, isAgentActive, refreshAgentStatus, refreshAutoresearchStatus, refreshContextUsage, refreshQueueState, refreshTimeline]);

    // Returning to the tab/webapp should restore current context-affordance
    // truth immediately instead of waiting for the 15s/60s backstop poller.
    useEffect(() => {
        return watchReturnToApp(() => {
            refreshAgentStatus();
            refreshContextUsage();
            refreshQueueState();
            refreshAutoresearchStatus();
        });
    }, [refreshAgentStatus, refreshAutoresearchStatus, refreshContextUsage, refreshQueueState]);

    const toggleWorkspace = useCallback(() => {
        setWorkspaceOpen((prev) => !prev);
    }, []);

    const handleBranchPickerChange = useCallback((nextChatJid) => {
        if (typeof window === 'undefined') return;
        const normalized = String(nextChatJid || '').trim();
        if (!normalized || normalized === currentChatJid) return;
        const url = buildChatWindowUrl(window.location.href, normalized, { chatOnly: chatOnlyMode });
        navigate?.(url);
    }, [chatOnlyMode, currentChatJid, navigate]);

    const openRenameCurrentBranchForm = useCallback(() => {
        if (typeof window === 'undefined' || !currentBranchRecord?.chat_jid) return;

        const now = Date.now();
        const formLock = getRenameBranchFormLock();
        if (!formLock) return;

        if (
            renameBranchInFlightRef.current
            || now < renameBranchLockUntilRef.current
            || formLock.inFlight
            || now < formLock.cooldownUntil
        ) {
            return;
        }

        setRenameBranchNameDraft(currentBranchRecord.agent_name || '');
        setIsRenameBranchFormOpen(true);
    }, [currentBranchRecord]);

    const closeRenameCurrentBranchForm = useCallback(() => {
        setIsRenameBranchFormOpen(false);
        setRenameBranchNameDraft('');
    }, []);

    const handleRenameCurrentBranch = useCallback(async (nextName) => {
        if (typeof window === 'undefined' || !currentBranchRecord?.chat_jid) return;

        if (typeof nextName !== 'string') {
            openRenameCurrentBranchForm();
            return;
        }

        const now = Date.now();
        const formLock = getRenameBranchFormLock();
        if (!formLock) return;

        if (
            renameBranchInFlightRef.current
            || now < renameBranchLockUntilRef.current
            || formLock.inFlight
            || now < formLock.cooldownUntil
        ) {
            return;
        }

        renameBranchInFlightRef.current = true;
        formLock.inFlight = true;
        setIsRenamingBranch(true);

        try {
            const currentHandle = currentBranchRecord.agent_name || '';
            const draftState = getBranchHandleDraftState(nextName, currentHandle);
            if (!draftState.canSubmit) {
                showIntentToast('Could not rename branch', draftState.message || 'Enter a valid branch handle.', 'warning', 4000);
                return;
            }
            const nextAgentName = draftState.normalized || currentHandle;

            const response = await renameChatBranch(currentBranchRecord.chat_jid, {
                agentName: nextAgentName,
            });
            await Promise.allSettled([
                refreshActiveChatAgents(),
                refreshCurrentChatBranches(),
            ]);
            const savedHandle = response?.branch?.agent_name || nextAgentName || currentHandle;
            showIntentToast('Branch renamed', `@${savedHandle}`, 'info', 3500);
            closeRenameCurrentBranchForm();
        } catch (error) {
            const rawMessage = error instanceof Error ? error.message : String(error || 'Could not rename branch.');
            const message = /already in use/i.test(rawMessage || '')
                ? `${rawMessage} Switch to or restore that existing session from the session manager.`
                : rawMessage;
            showIntentToast('Could not rename branch', message || 'Could not rename branch.', 'warning', 5000);
        } finally {
            renameBranchInFlightRef.current = false;
            setIsRenamingBranch(false);
            const unlockedAt = Date.now() + RENAME_BRANCH_FORM_GUARD_MS;
            renameBranchLockUntilRef.current = unlockedAt;
            const formLockRef = getRenameBranchFormLock();
            if (formLockRef) {
                formLockRef.inFlight = false;
                formLockRef.cooldownUntil = unlockedAt;
            }
        }
    }, [closeRenameCurrentBranchForm, currentBranchRecord, refreshActiveChatAgents, refreshCurrentChatBranches, openRenameCurrentBranchForm, setIsRenamingBranch, showIntentToast]);

    const handlePruneCurrentBranch = useCallback(async (targetChatJid = null) => {
        if (typeof window === 'undefined') return;

        const requestedChatJid = typeof targetChatJid === 'string' && targetChatJid.trim()
            ? targetChatJid.trim()
            : '';
        const fallbackCurrentChatJid = typeof currentChatJid === 'string' && currentChatJid.trim()
            ? currentChatJid.trim()
            : '';
        const chatJid = requestedChatJid || currentBranchRecord?.chat_jid || fallbackCurrentChatJid;
        if (!chatJid) {
            showIntentToast('Could not prune branch', 'No active session is selected yet.', 'warning', 4000);
            return;
        }

        const branch = (currentBranchRecord?.chat_jid === chatJid ? currentBranchRecord : null)
            || currentChatBranches.find((item) => item?.chat_jid === chatJid)
            || activeChatAgents.find((item) => item?.chat_jid === chatJid)
            || null;

        const isRootBranch = branch?.chat_jid === (branch?.root_chat_jid || branch?.chat_jid);
        if (isRootBranch) {
            showIntentToast('Cannot prune branch', 'The root chat branch cannot be pruned.', 'warning', 4000);
            return;
        }

        const label = `@${branch?.agent_name || chatJid}${branch?.chat_jid ? ` — ${branch.chat_jid}` : ''}`;
        const confirmed = window.confirm(`Prune ${label}?\n\nThis archives the branch agent and removes it from the branch picker. Chat history is preserved.`);
        if (!confirmed) return;

        try {
            await pruneChatBranch(chatJid);
            await Promise.allSettled([
                refreshActiveChatAgents(),
                refreshCurrentChatBranches(),
            ]);
            const fallbackChatJid = branch?.root_chat_jid || 'web:default';
            showIntentToast('Branch pruned', `${label} has been archived.`, 'info', 3000);
            const nextUrl = buildChatWindowUrl(window.location.href, fallbackChatJid, { chatOnly: chatOnlyMode });
            navigate?.(nextUrl);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error || 'Could not prune branch.');
            showIntentToast('Could not prune branch', message || 'Could not prune branch.', 'warning', 5000);
        }
    }, [activeChatAgents, chatOnlyMode, currentBranchRecord, currentChatBranches, currentChatJid, navigate, refreshActiveChatAgents, refreshCurrentChatBranches, showIntentToast]);

    const handleRestoreBranch = useCallback(async (targetChatJid) => {
        const normalized = typeof targetChatJid === 'string' ? targetChatJid.trim() : '';
        if (!normalized || typeof restoreChatBranch !== 'function') return;

        try {
            const previousBranch = currentChatBranches.find((item) => item?.chat_jid === normalized) || null;
            const response = await restoreChatBranch(normalized);
            await Promise.allSettled([
                refreshActiveChatAgents(),
                refreshCurrentChatBranches(),
            ]);
            const branch = response?.branch;
            const nextChatJid = typeof branch?.chat_jid === 'string' && branch.chat_jid.trim()
                ? branch.chat_jid.trim()
                : normalized;
            const restoreDetail = describeBranchRestoreResult(previousBranch?.agent_name, branch?.agent_name, nextChatJid);
            showIntentToast('Branch restored', restoreDetail, 'info', 4200);
            const nextUrl = buildChatWindowUrl(window.location.href, nextChatJid, { chatOnly: chatOnlyMode });
            navigate?.(nextUrl);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error || 'Could not restore branch.');
            showIntentToast('Could not restore branch', message || 'Could not restore branch.', 'warning', 5000);
        }
    }, [chatOnlyMode, currentChatBranches, navigate, refreshActiveChatAgents, refreshCurrentChatBranches, showIntentToast]);

    useEffect(() => {
        if (!branchLoaderMode || typeof window === 'undefined') return;
        let cancelled = false;

        (async () => {
            try {
                setBranchLoaderState({ status: 'running', message: 'Preparing a new chat branch…' });
                const response = await api.forkChatBranch(branchLoaderSourceChatJid);
                if (cancelled) return;
                const branch = response?.branch;
                const nextChatJid = typeof branch?.chat_jid === 'string' && branch.chat_jid.trim() ? branch.chat_jid.trim() : null;
                if (!nextChatJid) {
                    throw new Error('Branch fork did not return a chat id.');
                }
                const url = buildChatWindowUrl(window.location.href, nextChatJid, { chatOnly: true });
                navigate?.(url, { replace: true });
            } catch (error) {
                if (cancelled) return;
                setBranchLoaderState({
                    status: 'error',
                    message: describeBranchOpenError(error),
                });
            }
        })();

        return () => {
            cancelled = true;
        };
    }, [branchLoaderMode, branchLoaderSourceChatJid, navigate]);

    const handleOpenFloatingWidget = useCallback((widget) => {
        if (!widget || typeof widget !== 'object') return;
        const sessionKey = getGeneratedWidgetSessionKey(widget);
        if (sessionKey) {
            dismissedLiveWidgetKeysRef.current.delete(sessionKey);
        }
        setFloatingWidget({
            ...widget,
            openedAt: new Date().toISOString(),
        });
    }, []);

    const handleCloseFloatingWidget = useCallback(() => {
        setFloatingWidget((current) => {
            const sessionKey = getGeneratedWidgetSessionKey(current);
            if (current?.source === 'live' && sessionKey) {
                dismissedLiveWidgetKeysRef.current.add(sessionKey);
            }
            return null;
        });
    }, []);

    const handleFloatingWidgetEvent = useCallback((event, widget) => {
        const kind = typeof event?.kind === 'string' ? event.kind : '';
        const sessionKey = getGeneratedWidgetSessionKey(widget);
        if (!kind || !sessionKey) return;

        if (kind === 'widget.close') {
            handleCloseFloatingWidget();
            return;
        }

        if (kind === 'widget.submit') {
            const submissionText = getGeneratedWidgetSubmissionText(event?.payload);
            const closeAfterSubmit = getGeneratedWidgetShouldCloseOnSubmit(event?.payload);
            const submittedAt = new Date().toISOString();

            setFloatingWidget((current) => {
                const currentKey = getGeneratedWidgetSessionKey(current);
                if (!current || currentKey !== sessionKey) return current;
                return {
                    ...current,
                    runtimeState: {
                        ...(current.runtimeState || {}),
                        lastEventKind: kind,
                        lastEventPayload: event?.payload || null,
                        lastSubmitAt: submittedAt,
                        lastHostUpdate: {
                            type: 'submit_pending',
                            submittedAt,
                            preview: submissionText || null,
                        },
                    },
                };
            });

            if (!submissionText) {
                showIntentToast('Widget submission received', 'The widget submitted data without a message payload yet.', 'info', 3500);
                if (closeAfterSubmit) handleCloseFloatingWidget();
                return;
            }

            (async () => {
                try {
                    const response = await api.sendAgentMessage('default', submissionText, null, [], isComposeBoxAgentActive ? 'queue' : null, currentChatJid);
                    handleMessageResponse(response);
                    setFloatingWidget((current) => {
                        const currentKey = getGeneratedWidgetSessionKey(current);
                        if (!current || currentKey !== sessionKey) return current;
                        return {
                            ...current,
                            runtimeState: {
                                ...(current.runtimeState || {}),
                                lastHostUpdate: {
                                    type: response?.queued === 'followup' ? 'submit_queued' : 'submit_sent',
                                    submittedAt,
                                    preview: submissionText,
                                    queued: response?.queued || null,
                                },
                            },
                        };
                    });
                    showIntentToast(
                        response?.queued === 'followup' ? 'Widget submission queued' : 'Widget submission sent',
                        response?.queued === 'followup'
                            ? 'The widget message was queued because the agent is busy.'
                            : 'The widget message was sent to the chat.',
                        'info',
                        3500,
                    );
                    if (closeAfterSubmit) handleCloseFloatingWidget();
                } catch (error) {
                    setFloatingWidget((current) => {
                        const currentKey = getGeneratedWidgetSessionKey(current);
                        if (!current || currentKey !== sessionKey) return current;
                        return {
                            ...current,
                            runtimeState: {
                                ...(current.runtimeState || {}),
                                lastHostUpdate: {
                                    type: 'submit_failed',
                                    submittedAt,
                                    preview: submissionText,
                                    error: error?.message || 'Could not send the widget message.',
                                },
                            },
                        };
                    });
                    showIntentToast('Widget submission failed', error?.message || 'Could not send the widget message.', 'warning', 5000);
                }
            })();
            return;
        }

        if (kind === 'widget.ready' || kind === 'widget.request_refresh') {
            const eventAt = new Date().toISOString();
            const shouldBuildDashboard = Boolean(event?.payload?.buildDashboard || event?.payload?.dashboardKind === 'internal-state');
            const nextRefreshCount = Number(widget?.runtimeState?.refreshCount || 0) + 1;
            setFloatingWidget((current) => {
                const currentKey = getGeneratedWidgetSessionKey(current);
                if (!current || currentKey !== sessionKey) return current;
                return {
                    ...current,
                    runtimeState: {
                        ...(current.runtimeState || {}),
                        lastEventKind: kind,
                        lastEventPayload: event?.payload || null,
                        ...(kind === 'widget.ready'
                            ? {
                                readyAt: eventAt,
                                lastHostUpdate: {
                                    type: 'ready_ack',
                                    at: eventAt,
                                },
                            }
                            : {}),
                        ...(kind === 'widget.request_refresh'
                            ? {
                                lastRefreshRequestAt: eventAt,
                                refreshCount: nextRefreshCount,
                                lastHostUpdate: {
                                    type: shouldBuildDashboard ? 'refresh_building' : 'refresh_ack',
                                    at: eventAt,
                                    count: nextRefreshCount,
                                    echo: event?.payload || null,
                                },
                            }
                            : {}),
                    },
                };
            });

            if (kind === 'widget.request_refresh') {
                if (shouldBuildDashboard) {
                    (async () => {
                        try {
                            const dashboard = await buildFloatingWidgetDashboardSnapshot(event?.payload || null);
                            setFloatingWidget((current) => {
                                const currentKey = getGeneratedWidgetSessionKey(current);
                                if (!current || currentKey !== sessionKey) return current;
                                return {
                                    ...current,
                                    runtimeState: {
                                        ...(current.runtimeState || {}),
                                        dashboard,
                                        lastHostUpdate: {
                                            type: 'refresh_dashboard',
                                            at: new Date().toISOString(),
                                            count: nextRefreshCount,
                                            echo: event?.payload || null,
                                        },
                                    },
                                };
                            });
                            showIntentToast('Dashboard built', 'Live dashboard state pushed into the widget.', 'info', 3000);
                        } catch (error) {
                            setFloatingWidget((current) => {
                                const currentKey = getGeneratedWidgetSessionKey(current);
                                if (!current || currentKey !== sessionKey) return current;
                                return {
                                    ...current,
                                    runtimeState: {
                                        ...(current.runtimeState || {}),
                                        lastHostUpdate: {
                                            type: 'refresh_failed',
                                            at: new Date().toISOString(),
                                            count: nextRefreshCount,
                                            error: error?.message || 'Could not build dashboard.',
                                        },
                                    },
                                };
                            });
                            showIntentToast('Dashboard build failed', error?.message || 'Could not build dashboard.', 'warning', 5000);
                        }
                    })();
                } else {
                    showIntentToast('Widget refresh requested', 'The widget received a host acknowledgement update.', 'info', 3000);
                }
            }
        }
    }, [buildFloatingWidgetDashboardSnapshot, currentChatJid, handleCloseFloatingWidget, handleMessageResponse, isComposeBoxAgentActive, showIntentToast]);

    useEffect(() => {
        dismissedLiveWidgetKeysRef.current.clear();
        setFloatingWidget(null);
    }, [currentChatJid]);

    const handleCreateSessionFromCompose = useCallback(async () => {
        if (typeof window === 'undefined') return;

        try {
            const response = await api.forkChatBranch(currentChatJid);
            const branch = response?.branch;
            const nextChatJid = typeof branch?.chat_jid === 'string' && branch.chat_jid.trim() ? branch.chat_jid.trim() : null;
            if (!nextChatJid) {
                throw new Error('Branch fork did not return a chat id.');
            }

            await Promise.allSettled([
                refreshActiveChatAgents(),
                refreshCurrentChatBranches(),
            ]);

            const label = branch?.agent_name ? `@${branch.agent_name}` : nextChatJid;
            showIntentToast('New branch created', `Switched to ${label}.`, 'info', 2500);
            const url = buildChatWindowUrl(window.location.href, nextChatJid, { chatOnly: chatOnlyMode });
            navigate?.(url);
        } catch (error) {
            showIntentToast('Could not create branch', describeBranchOpenError(error), 'warning', 5000);
        }
    }, [chatOnlyMode, currentChatJid, navigate, refreshActiveChatAgents, refreshCurrentChatBranches, showIntentToast]);

    const handlePopOutPane = useCallback(async (path, label) => {
        if (typeof window === 'undefined' || isWebAppMode) return;
        const panePath = typeof path === 'string' && path.trim() ? path.trim() : '';
        if (!panePath) return;

        const closeSourcePaneIfTransferred = () => {
            const sourceTab = tabStore.get(panePath);
            if (sourceTab && !sourceTab.dirty) {
                handleTabClose(panePath);
                return;
            }
            if (panePath === TERMINAL_TAB_PATH && dockVisible) {
                setDockVisible(false);
            }
        };

        const openOptions = getPaneWindowOpenOptions(panePath);
        if (!openOptions) {
            showIntentToast('Could not open pane window', 'Opening pane windows is unavailable in standalone webapp mode.', 'warning', 5000);
            return;
        }

        const provisionalWindow = openProvisionalChatWindow(openOptions);
        if (!provisionalWindow) {
            showIntentToast('Could not open pane window', 'The browser blocked opening a new tab or window.', 'warning', 5000);
            return;
        }
        primeProvisionalChatWindow(provisionalWindow, {
            title: typeof label === 'string' && label.trim() ? `Opening ${label}…` : 'Opening pane…',
            message: 'Preparing a standalone pane window. This should only take a moment.',
        });

        let popoutParams = null;
        try {
            const activePath = typeof tabStripActiveId === 'string' ? tabStripActiveId.trim() : '';
            const sourceInstance = activePath === panePath
                ? editorInstanceRef.current
                : (panePath === TERMINAL_TAB_PATH ? dockInstanceRef.current : null);
            if (typeof sourceInstance?.preparePopoutTransfer === 'function') {
                popoutParams = await sourceInstance.preparePopoutTransfer();
            }

            const popoutUrl = buildPanePopoutUrl(window.location.href, panePath, {
                label: typeof label === 'string' && label.trim() ? label.trim() : undefined,
                chatJid: currentChatJid,
                params: popoutParams,
            });
            navigateProvisionalChatWindow(provisionalWindow, popoutUrl);
            closeSourcePaneIfTransferred();
        } catch (error) {
            closeProvisionalChatWindow(provisionalWindow);
            const detail = error?.message || 'Could not transfer pane state to the new window.';
            showIntentToast('Could not open pane window', detail, 'warning', 5000);
        }
    }, [currentChatJid, dockVisible, handleTabClose, isWebAppMode, showIntentToast, tabStripActiveId]);

    // Listen for preview-card / pane events that request opening a tab or standalone pane window.
    useEffect(() => {
        const openTabHandler = (e: CustomEvent) => {
            const path = e.detail?.path;
            const label = typeof e.detail?.label === 'string' && e.detail.label.trim() ? e.detail.label.trim() : undefined;
            if (path) openEditor(path, label ? { label } : undefined);
        };
        const popoutHandler = (e: CustomEvent) => {
            const path = e.detail?.path;
            const label = typeof e.detail?.label === 'string' && e.detail.label.trim() ? e.detail.label.trim() : undefined;
            if (path) handlePopOutPane(path, label);
        };
        document.addEventListener('office-viewer:open-tab', openTabHandler);
        document.addEventListener('drawio:open-tab', openTabHandler);
        document.addEventListener('csv-viewer:open-tab', openTabHandler);
        document.addEventListener('pdf-viewer:open-tab', openTabHandler);
        document.addEventListener('image-viewer:open-tab', openTabHandler);
        document.addEventListener('video-viewer:open-tab', openTabHandler);
        document.addEventListener('vnc:open-tab', openTabHandler);
        document.addEventListener('pane:popout', popoutHandler);
        return () => {
            document.removeEventListener('office-viewer:open-tab', openTabHandler);
            document.removeEventListener('drawio:open-tab', openTabHandler);
            document.removeEventListener('csv-viewer:open-tab', openTabHandler);
            document.removeEventListener('pdf-viewer:open-tab', openTabHandler);
            document.removeEventListener('image-viewer:open-tab', openTabHandler);
            document.removeEventListener('video-viewer:open-tab', openTabHandler);
            document.removeEventListener('vnc:open-tab', openTabHandler);
            document.removeEventListener('pane:popout', popoutHandler);
        };
    }, [handlePopOutPane, openEditor]);

    const handlePopOutChat = useCallback(async () => {
        if (typeof window === 'undefined' || isWebAppMode) return;

        const initialOpenOptions = getChatWindowOpenOptions(currentChatJid);
        if (!initialOpenOptions) {
            showIntentToast('Could not open branch window', 'Opening branch windows is unavailable in standalone webapp mode.', 'warning', 5000);
            return;
        }

        if (initialOpenOptions.mode === 'tab') {
            const loaderUrl = buildBranchLoaderUrl(window.location.href, currentChatJid, { chatOnly: true });
            const opened = window.open(loaderUrl, initialOpenOptions.target);
            if (!opened) {
                showIntentToast('Could not open branch window', 'The browser blocked opening a new tab or window.', 'warning', 5000);
            }
            return;
        }

        const provisionalWindow = openProvisionalChatWindow(initialOpenOptions);
        if (!provisionalWindow) {
            showIntentToast('Could not open branch window', 'The browser blocked opening a new tab or window.', 'warning', 5000);
            return;
        }
        primeProvisionalChatWindow(provisionalWindow, {
            title: 'Opening branch…',
            message: 'Preparing a new chat branch. This should only take a moment.',
        });

        try {
            const response = await api.forkChatBranch(currentChatJid);
            const branch = response?.branch;
            const nextChatJid = typeof branch?.chat_jid === 'string' && branch.chat_jid.trim() ? branch.chat_jid.trim() : null;
            if (!nextChatJid) {
                throw new Error('Branch fork did not return a chat id.');
            }
            try {
                const active = await api.getActiveChatAgents();
                setActiveChatAgents(Array.isArray(active?.chats) ? active.chats : []);
            } catch {
                /* expected: branch-window bootstrap can proceed even if active-agent refresh races. */
            }
            try {
                const branches = await getChatBranches(currentRootChatJid);
                setCurrentChatBranches(Array.isArray(branches?.chats) ? branches.chats : []);
            } catch {
                /* expected: branch-window bootstrap can proceed even if branch-list refresh races. */
            }
            const url = buildChatWindowUrl(window.location.href, nextChatJid, { chatOnly: true });
            navigateProvisionalChatWindow(provisionalWindow, url);
        } catch (error) {
            closeProvisionalChatWindow(provisionalWindow);
            showIntentToast('Could not open branch window', describeBranchOpenError(error), 'error', 5000);
        }
    }, [currentChatJid, currentRootChatJid, isWebAppMode, showIntentToast]);

    useEffect(() => {
        if (!editorOpen) return;
        if (typeof window === 'undefined') return;
        const shell = appShellRef.current;
        if (!shell) return;
        if (!editorWidthRef.current) {
            const stored = getLocalStorageNumber('editorWidth', null);
            const fallback = sidebarWidthRef.current || 280;
            editorWidthRef.current = Number.isFinite(stored) ? stored : fallback;
        }
        shell.style.setProperty('--editor-width', `${editorWidthRef.current}px`);
        if (!dockHeightRef.current) {
            const stored = getLocalStorageNumber('dockHeight', null);
            dockHeightRef.current = Number.isFinite(stored) ? stored : 200;
        }
        shell.style.setProperty('--dock-height', `${dockHeightRef.current}px`);
    }, [editorOpen]);


    // Keyboard shortcut: Ctrl+` to toggle dock (only when dock panes exist)
    useEffect(() => {
        if (!hasDockPanes || chatOnlyMode) return;
        const onKeyDown = (e) => {
            if (e.ctrlKey && e.key === '`') {
                e.preventDefault();
                toggleDock();
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [toggleDock, hasDockPanes, chatOnlyMode]);

    // Keyboard shortcuts: Ctrl+Shift+Z to toggle zen mode, Esc to exit zen
    useEffect(() => {
        if (chatOnlyMode) return;
        const onKeyDown = (e) => {
            if (e.ctrlKey && e.shiftKey && (e.key === 'Z' || e.key === 'z')) {
                e.preventDefault();
                toggleZenMode();
                return;
            }
            if (e.key === 'Escape' && zenMode) {
                e.preventDefault();
                exitZenMode();
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [toggleZenMode, exitZenMode, zenMode, chatOnlyMode]);

    const steerQueued = Boolean(steerQueuedTurnId && (steerQueuedTurnId === (agentStatus?.turn_id || currentTurnId)));

    if (branchLoaderMode) {
        return html`
            <div class="app-shell chat-only">
                <div class="container" style=${{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '24px' }}>
                    <div class="card" style=${{ width: 'min(560px, 100%)', padding: '24px' }}>
                        <h1 style=${{ margin: '0 0 12px', fontSize: '1.1rem' }}>
                            ${branchLoaderState.status === 'error' ? 'Could not open branch window' : 'Opening branch…'}
                        </h1>
                        <p style=${{ margin: 0, lineHeight: 1.6 }}>${branchLoaderState.message}</p>
                    </div>
                </div>
            </div>
        `;
    }

    if (panePopoutMode) {
        return html`
            <div class=${`app-shell pane-popout${editorOpen ? ' editor-open' : ''}`} ref=${appShellRef}>
                <div class="editor-pane-container pane-popout-container">
                    ${editorOpen && !hidePanePopoutControls && html`
                        <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
                            ${panePopoutHasMenuActions
                                ? html`
                                    <details class="pane-popout-controls-menu">
                                        <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                                            <span class="pane-popout-controls-title">${panePopoutTitle}</span>
                                            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <polyline points="4.5 6.5 8 10 11.5 6.5" />
                                            </svg>
                                        </summary>
                                        <div class="pane-popout-controls-panel">
                                            ${tabStripTabs.length > 1 && html`
                                                <div class="pane-popout-controls-section">
                                                    <div class="pane-popout-controls-section-title">Open panes</div>
                                                    <div class="pane-popout-controls-list">
                                                        ${tabStripTabs.map((tab) => html`
                                                            <button
                                                                type="button"
                                                                class=${`pane-popout-controls-item${tab.id === tabStripActiveId ? ' active' : ''}`}
                                                                onClick=${(e) => {
                                                                    handleTabActivate(tab.id);
                                                                    e.currentTarget.closest('details')?.removeAttribute('open');
                                                                }}
                                                            >
                                                                ${tab.label}
                                                            </button>
                                                        `)}
                                                    </div>
                                                </div>
                                            `}
                                            ${tabStripActiveId && previewTabs.has(tabStripActiveId) && html`
                                                <button type="button" class="pane-popout-controls-action" onClick=${(e) => {
                                                    handleTabTogglePreview(tabStripActiveId);
                                                    e.currentTarget.closest('details')?.removeAttribute('open');
                                                }}>
                                                    Hide preview
                                                </button>
                                            `}
                                        </div>
                                    </details>
                                `
                                : html`
                                    <div class="pane-popout-controls-label" aria-label=${panePopoutTitle}>${panePopoutTitle}</div>
                                `}
                        </div>
                    `}
                    ${editorOpen
                        ? html`<div class="editor-pane-host" ref=${editorContainerRef}></div>`
                        : html`<div class="card" style=${{ margin: '24px', padding: '24px', maxWidth: '640px' }}>
                            <h1 style=${{ margin: '0 0 12px', fontSize: '1.1rem' }}>Opening pane…</h1>
                            <p style=${{ margin: 0, lineHeight: 1.6 }}>${panePopoutPath || 'No pane path provided.'}</p>
                        </div>`}
                    ${editorOpen && tabStripActiveId && previewTabs.has(tabStripActiveId) && html`
                        <${MarkdownPreview}
                            getContent=${() => editorInstanceRef.current?.getContent?.()}
                            path=${tabStripActiveId}
                            onClose=${() => handleTabTogglePreview(tabStripActiveId)}
                        />
                    `}
                </div>
            </div>
        `;
    }

    return html`
        <div class=${`app-shell${workspaceOpen ? '' : ' workspace-collapsed'}${editorOpen ? ' editor-open' : ''}${chatOnlyMode ? ' chat-only' : ''}${zenMode ? ' zen-mode' : ''}`} ref=${appShellRef}>
            ${isRenameBranchFormOpen && html`
                <div class="rename-branch-overlay" onPointerDown=${(event) => {
                    if (event.target === event.currentTarget) {
                        closeRenameCurrentBranchForm();
                    }
                }}>
                    <form
                        class="rename-branch-panel"
                        onSubmit=${(event) => {
                            event.preventDefault();
                            void handleRenameCurrentBranch(renameBranchNameDraft);
                        }}
                    >
                        <div class="rename-branch-title">Rename branch handle</div>
                        <input
                            ref=${renameBranchNameInputRef}
                            value=${renameBranchNameDraft}
                            onInput=${(event) => {
                                const next = event.currentTarget?.value ?? '';
                                setRenameBranchNameDraft(String(next));
                            }}
                            onKeyDown=${(event) => {
                                if (event.key === 'Escape') {
                                    event.preventDefault();
                                    closeRenameCurrentBranchForm();
                                }
                            }}
                            autocomplete="off"
                            placeholder="Handle (letters, numbers, - and _ only)"
                        />
                        <div class=${`rename-branch-help ${renameBranchDraftState.kind || 'info'}`}>
                            ${renameBranchDraftState.message}
                        </div>
                        <div class="rename-branch-actions">
                            <button type="submit" class="compose-model-popup-btn primary" disabled=${isRenamingBranch || !renameBranchDraftState.canSubmit}>
                                ${isRenamingBranch ? 'Renaming…' : 'Save'}
                            </button>
                            <button
                                type="button"
                                class="compose-model-popup-btn"
                                onClick=${closeRenameCurrentBranchForm}
                                disabled=${isRenamingBranch}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            `}
            ${!chatOnlyMode && html`
                <${WorkspaceExplorer}
                    onFileSelect=${addFileRef}
                    visible=${workspaceOpen}
                    active=${workspaceOpen || editorOpen}
                    onOpenEditor=${openEditor}
                    onOpenTerminalTab=${openTerminalTab}
                    onOpenVncTab=${openVncTab}
                    onToggleTerminal=${hasDockPanes ? toggleDock : undefined}
                    terminalVisible=${Boolean(hasDockPanes && dockVisible)}
                />
                <button
                    class=${`workspace-toggle-tab${workspaceOpen ? ' open' : ' closed'}`}
                    onClick=${toggleWorkspace}
                    title=${workspaceOpen ? 'Hide workspace' : 'Show workspace'}
                    aria-label=${workspaceOpen ? 'Hide workspace' : 'Show workspace'}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${handleSplitterMouseDown} onTouchStart=${handleSplitterTouchStart}></div>
            `}
            ${showEditorPaneContainer && html`
                <div class="editor-pane-container">
                    ${zenMode && html`<div class="zen-hover-zone"></div>`}
                    ${editorOpen && html`
                        <${TabStrip}
                            tabs=${tabStripTabs}
                            activeId=${tabStripActiveId}
                            onActivate=${handleTabActivate}
                            onClose=${handleTabClose}
                            onCloseOthers=${handleTabCloseOthers}
                            onCloseAll=${handleTabCloseAll}
                            onTogglePin=${handleTabTogglePin}
                            onTogglePreview=${handleTabTogglePreview}
                            onEditSource=${handleTabEditSource}
                            previewTabs=${previewTabs}
                            paneOverrides=${tabPaneOverrides}
                            onToggleDock=${hasDockPanes ? toggleDock : undefined}
                            dockVisible=${hasDockPanes && dockVisible}
                            onToggleZen=${toggleZenMode}
                            zenMode=${zenMode}
                            onPopOutTab=${isWebAppMode ? undefined : handlePopOutPane}
                        />
                    `}
                    ${editorOpen && html`<div class="editor-pane-host" ref=${editorContainerRef}></div>`}
                    ${editorOpen && tabStripActiveId && previewTabs.has(tabStripActiveId) && html`
                        <${MarkdownPreview}
                            getContent=${() => editorInstanceRef.current?.getContent?.()}
                            path=${tabStripActiveId}
                            onClose=${() => handleTabTogglePreview(tabStripActiveId)}
                        />
                    `}
                    ${hasDockPanes && dockVisible && html`<div class="dock-splitter" onMouseDown=${handleDockSplitterMouseDown} onTouchStart=${handleDockSplitterTouchStart}></div>`}
                    ${hasDockPanes && html`<div class=${`dock-panel${dockVisible ? '' : ' hidden'}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <div class="dock-panel-actions">
                                ${!isWebAppMode && html`
                                    <button class="dock-panel-action" onClick=${() => handlePopOutPane(TERMINAL_TAB_PATH, 'Terminal')} title="Open terminal in window" aria-label="Open terminal in window">
                                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                            <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                                            <path d="M8.5 2.25h5.25v5.25"/>
                                            <path d="M13.75 2.25 7.75 8.25"/>
                                        </svg>
                                    </button>
                                `}
                                <button class="dock-panel-close" onClick=${toggleDock} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                        <line x1="4" y1="4" x2="12" y2="12"/>
                                        <line x1="12" y1="4" x2="4" y2="12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="dock-panel-body" ref=${dockContainerRef}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${handleEditorSplitterMouseDown} onTouchStart=${handleEditorSplitterTouchStart}></div>
            `}
            <div class="container">
                ${searchQuery && isIOSDevice() && html`<div class="search-results-spacer"></div>`}
                ${chatOnlyMode && html`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${currentBranchRecord?.agent_name ? `@${currentBranchRecord.agent_name}` : currentChatJid}
                            </span>
                            <span class="chat-window-header-subtitle">${currentBranchRecord?.chat_jid || currentChatJid}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${currentChatBranches.length > 1 && html`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${currentChatJid}
                                        onChange=${(e) => handleBranchPickerChange(e.currentTarget.value)}
                                    >
                                        ${currentChatBranches.map((branch) => html`
                                            <option key=${branch.chat_jid} value=${branch.chat_jid}>
                                                ${formatBranchPickerLabel(branch, { currentChatJid })}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${currentBranchRecord?.chat_jid && html`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${openRenameCurrentBranchForm}
                                    title=${isRenamingBranch ? 'Renaming branch…' : 'Rename this branch'}
                                    aria-label="Rename this branch"
                                    disabled=${isRenamingBranch}
                                >
                                    ${isRenamingBranch ? 'Renaming…' : 'Rename'}
                                </button>
                            `}
                            ${currentBranchRecord?.chat_jid && currentBranchRecord.chat_jid !== (currentBranchRecord.root_chat_jid || currentBranchRecord.chat_jid) && html`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${handlePruneCurrentBranch}
                                    title="Prune this branch agent"
                                    aria-label="Prune this branch agent"
                                >
                                    Prune
                                </button>
                            `}
                            <span class="chat-window-header-badge">Chat only</span>
                        </div>
                    </div>
                `}
                ${(currentHashtag || searchQuery) && html`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${handleBackToTimeline}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${currentHashtag ? `#${currentHashtag}` : `Search: ${searchQuery} · ${activeSearchScopeLabel}`}</span>
                    </div>
                `}
                <${Timeline}
                    posts=${posts}
                    hasMore=${isMainTimelineView ? hasMore : false}
                    onLoadMore=${isMainTimelineView ? loadMore : undefined}
                    timelineRef=${timelineRef}
                    onHashtagClick=${handleHashtagClick}
                    onMessageRef=${addMessageRef}
                    onScrollToMessage=${scrollToMessage}
                    onFileRef=${openFileFromPill}
                    onPostClick=${undefined}
                    onDeletePost=${handleDeletePost}
                    onOpenWidget=${handleOpenFloatingWidget}
                    emptyMessage=${currentHashtag ? `No posts with #${currentHashtag}` : searchQuery ? `No results for "${searchQuery}"` : undefined}
                    agents=${agents}
                    user=${userProfile}
                    reverse=${isMainTimelineView}
                    removingPostIds=${removingPostIds}
                    searchQuery=${searchQuery}
                />
                <${AgentStatus}
                    status=${isCompactionStatus(agentStatus) ? null : agentStatus}
                    draft=${agentDraft}
                    plan=${agentPlan}
                    thought=${agentThought}
                    pendingRequest=${pendingRequest}
                    intent=${intentToast}
                    turnId=${currentTurnId}
                    steerQueued=${steerQueued}
                    onPanelToggle=${handlePanelToggle}
                    showExtensionPanels=${false}
                />
                <${BtwPanel}
                    session=${btwSession}
                    onClose=${closeBtwPanel}
                    onRetry=${handleBtwRetry}
                    onInject=${handleBtwInject}
                />
                <${FloatingWidgetPane}
                    widget=${floatingWidget}
                    onClose=${handleCloseFloatingWidget}
                    onWidgetEvent=${handleFloatingWidgetEvent}
                />
                <${AgentStatus}
                    extensionPanels=${Array.from(extensionStatusPanels.values())}
                    pendingPanelActions=${pendingExtensionPanelActions}
                    onExtensionPanelAction=${handleExtensionPanelAction}
                    turnId=${currentTurnId}
                    steerQueued=${steerQueued}
                    onPanelToggle=${handlePanelToggle}
                    showCorePanels=${false}
                />
                <${QueuedFollowupStack}
                    items=${searchOpen ? [] : followupQueueItems}
                    onInjectQueuedFollowup=${handleInjectQueuedFollowup}
                    onRemoveQueuedFollowup=${handleRemoveQueuedFollowup}
                    onOpenFilePill=${openFileFromPill}
                />
                <${ComposeBox}
                    onPost=${() => {
                        const { searchQuery: sq, searchOpen: so } = viewStateRef.current || {};
                        if (!sq && !so) { loadPosts(); scrollToBottom(); }
                    }}
                    onFocus=${scrollToBottom}
                    searchMode=${searchOpen}
                    searchScope=${searchScope}
                    onSearch=${handleSearch}
                    onSearchScopeChange=${setSearchScope}
                    onEnterSearch=${enterSearchMode}
                    onExitSearch=${exitSearchMode}
                    fileRefs=${fileRefs}
                    onRemoveFileRef=${removeFileRef}
                    onClearFileRefs=${clearFileRefs}
                    onSetFileRefs=${setFileRefsFromCompose}
                    messageRefs=${messageRefs}
                    onRemoveMessageRef=${removeMessageRef}
                    onClearMessageRefs=${clearMessageRefs}
                    onSetMessageRefs=${setMessageRefsFromCompose}
                    onSwitchChat=${handleBranchPickerChange}
                    onRenameSession=${handleRenameCurrentBranch}
                    isRenameSessionInProgress=${isRenamingBranch}
                    onCreateSession=${handleCreateSessionFromCompose}
                    onDeleteSession=${handlePruneCurrentBranch}
                    onRestoreSession=${handleRestoreBranch}
                    activeEditorPath=${chatOnlyMode ? null : tabStripActiveId}
                    onAttachEditorFile=${chatOnlyMode ? undefined : attachActiveEditorFile}
                    onOpenFilePill=${openFileFromPill}
                    followupQueueCount=${followupQueueCount}
                    followupQueueItems=${followupQueueItems}
                    showQueueStack=${false}
                    onInjectQueuedFollowup=${handleInjectQueuedFollowup}
                    onRemoveQueuedFollowup=${handleRemoveQueuedFollowup}
                    onSubmitIntercept=${handleBtwIntercept}
                    onMessageResponse=${handleMessageResponse}
                    onSubmitError=${handleComposeSubmitError}
                    onPopOutChat=${isWebAppMode ? undefined : handlePopOutChat}
                    isAgentActive=${isComposeBoxAgentActive}
                    activeChatAgents=${activeChatAgents}
                    currentChatJid=${currentChatJid}
                    connectionStatus=${connectionStatus}
                    activeModel=${activeModel}
                    modelUsage=${activeModelUsage}
                    thinkingLevel=${activeThinkingLevel}
                    supportsThinking=${supportsThinking}
                    contextUsage=${contextUsage}
                    notificationsEnabled=${notificationsEnabled}
                    notificationPermission=${notificationPermission}
                    onToggleNotifications=${handleToggleNotifications}
                    onModelChange=${setActiveModel}
                    onModelStateChange=${applyModelState}
                    statusNotice=${isCompactionStatus(agentStatus) ? agentStatus : null}
                />
                <${AgentRequestModal}
                    request=${pendingRequest}
                    onRespond=${() => {
                        setPendingRequest(null);
                        pendingRequestRef.current = null;
                    }}
                />
            </div>
        </div>
    `;
}

function App() {
    const [locationHref, setLocationHref] = useState(() =>
        typeof window === 'undefined' ? 'http://localhost/' : window.location.href
    );

    useEffect(() => {
        if (typeof window === 'undefined') return undefined;
        const handlePopState = () => setLocationHref(window.location.href);
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const navigate = useCallback((nextUrl, options = {}) => {
        if (typeof window === 'undefined') return;
        const { replace = false } = options || {};
        const resolved = new URL(String(nextUrl || ''), window.location.href).toString();
        if (replace) {
            window.history.replaceState(null, '', resolved);
        } else {
            window.history.pushState(null, '', resolved);
        }
        setLocationHref(window.location.href);
    }, []);

    const locationParams = useMemo(() => new URL(locationHref).searchParams, [locationHref]);
    return html`<${MainApp} locationParams=${locationParams} navigate=${navigate} />`;
}

// Mount the app
render(html`<${App} />`, document.getElementById('app'));
