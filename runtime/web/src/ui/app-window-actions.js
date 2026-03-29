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
    primeProvisionalChatWindow,
} from './chat-window.js';

/** Create a new branch from the compose box and navigate into it. */
export async function createSessionFromCompose(options) {
    const {
        currentChatJid,
        chatOnlyMode,
        forkChatBranch,
        refreshActiveChatAgents,
        refreshCurrentChatBranches,
        showIntentToast,
        navigate,
        baseHref,
    } = options || {};

    try {
        const response = await forkChatBranch(currentChatJid);
        const branch = response?.branch;
        const nextChatJid = typeof branch?.chat_jid === 'string' && branch.chat_jid.trim() ? branch.chat_jid.trim() : null;
        if (!nextChatJid) {
            throw new Error('Branch fork did not return a chat id.');
        }

        await Promise.allSettled([
            refreshActiveChatAgents?.(),
            refreshCurrentChatBranches?.(),
        ]);

        const label = branch?.agent_name ? `@${branch.agent_name}` : nextChatJid;
        showIntentToast?.('New branch created', `Switched to ${label}.`, 'info', 2500);
        const url = buildChatWindowUrl(baseHref, nextChatJid, { chatOnly: chatOnlyMode });
        navigate?.(url);
        return true;
    } catch (error) {
        showIntentToast?.('Could not create branch', describeBranchOpenError(error), 'warning', 5000);
        return false;
    }
}

/** Open the selected pane in a standalone browser window or tab. */
export async function popOutPane(options) {
    const {
        hasWindow = typeof window !== 'undefined',
        isWebAppMode = false,
        path,
        label,
        showIntentToast,
        resolveSourceTransfer,
        closeSourcePaneIfTransferred,
        currentChatJid,
        baseHref,
    } = options || {};

    if (!hasWindow || isWebAppMode) return false;
    const panePath = typeof path === 'string' && path.trim() ? path.trim() : '';
    if (!panePath) return false;

    const openOptions = getPaneWindowOpenOptions(panePath);
    if (!openOptions) {
        showIntentToast?.('Could not open pane window', 'Opening pane windows is unavailable in standalone webapp mode.', 'warning', 5000);
        return false;
    }

    const provisionalWindow = openProvisionalChatWindow(openOptions);
    if (!provisionalWindow) {
        showIntentToast?.('Could not open pane window', 'The browser blocked opening a new tab or window.', 'warning', 5000);
        return false;
    }

    primeProvisionalChatWindow(provisionalWindow, {
        title: typeof label === 'string' && label.trim() ? `Opening ${label}…` : 'Opening pane…',
        message: 'Preparing a standalone pane window. This should only take a moment.',
    });

    try {
        const popoutParams = await resolveSourceTransfer?.(panePath);
        const popoutUrl = buildPanePopoutUrl(baseHref, panePath, {
            label: typeof label === 'string' && label.trim() ? label.trim() : undefined,
            chatJid: currentChatJid,
            params: popoutParams,
        });
        navigateProvisionalChatWindow(provisionalWindow, popoutUrl);
        closeSourcePaneIfTransferred?.(panePath);
        return true;
    } catch (error) {
        closeProvisionalChatWindow(provisionalWindow);
        const detail = error?.message || 'Could not transfer pane state to the new window.';
        showIntentToast?.('Could not open pane window', detail, 'warning', 5000);
        return false;
    }
}

/** Open a new chat branch in a separate browser window/tab. */
export async function popOutChat(options) {
    const {
        hasWindow = typeof window !== 'undefined',
        isWebAppMode = false,
        currentChatJid,
        currentRootChatJid,
        forkChatBranch,
        getActiveChatAgents,
        getChatBranches,
        setActiveChatAgents,
        setCurrentChatBranches,
        showIntentToast,
        baseHref,
    } = options || {};

    if (!hasWindow || isWebAppMode) return false;

    const initialOpenOptions = getChatWindowOpenOptions(currentChatJid);
    if (!initialOpenOptions) {
        showIntentToast?.('Could not open branch window', 'Opening branch windows is unavailable in standalone webapp mode.', 'warning', 5000);
        return false;
    }

    if (initialOpenOptions.mode === 'tab') {
        const loaderUrl = buildBranchLoaderUrl(baseHref, currentChatJid, { chatOnly: true });
        const opened = window.open(loaderUrl, initialOpenOptions.target);
        if (!opened) {
            showIntentToast?.('Could not open branch window', 'The browser blocked opening a new tab or window.', 'warning', 5000);
            return false;
        }
        return true;
    }

    const provisionalWindow = openProvisionalChatWindow(initialOpenOptions);
    if (!provisionalWindow) {
        showIntentToast?.('Could not open branch window', 'The browser blocked opening a new tab or window.', 'warning', 5000);
        return false;
    }

    primeProvisionalChatWindow(provisionalWindow, {
        title: 'Opening branch…',
        message: 'Preparing a new chat branch. This should only take a moment.',
    });

    try {
        const response = await forkChatBranch(currentChatJid);
        const branch = response?.branch;
        const nextChatJid = typeof branch?.chat_jid === 'string' && branch.chat_jid.trim() ? branch.chat_jid.trim() : null;
        if (!nextChatJid) {
            throw new Error('Branch fork did not return a chat id.');
        }

        try {
            const active = await getActiveChatAgents?.();
            setActiveChatAgents?.(Array.isArray(active?.chats) ? active.chats : []);
        } catch {
            /* expected: branch-window bootstrap can proceed even if active-agent refresh races. */
        }

        try {
            const branches = await getChatBranches?.(currentRootChatJid);
            setCurrentChatBranches?.(Array.isArray(branches?.chats) ? branches.chats : []);
        } catch {
            /* expected: branch-window bootstrap can proceed even if branch-list refresh races. */
        }

        const url = buildChatWindowUrl(baseHref, nextChatJid, { chatOnly: true });
        navigateProvisionalChatWindow(provisionalWindow, url);
        return true;
    } catch (error) {
        closeProvisionalChatWindow(provisionalWindow);
        showIntentToast?.('Could not open branch window', describeBranchOpenError(error), 'error', 5000);
        return false;
    }
}
