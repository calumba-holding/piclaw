interface DocumentEventTargetLike {
  addEventListener(type: string, listener: (event: any) => void): void;
  removeEventListener(type: string, listener: (event: any) => void): void;
}

interface RuntimeLike {
  document?: DocumentEventTargetLike | null;
}

export interface PaneOpenEventCallbacks {
  openTab?: (path: string, label?: string) => void;
  popOutPane?: (path: string, label?: string) => void;
}

/** Register document-level open-tab and popout-pane custom event handlers. */
export function watchPaneOpenEvents(callbacks: PaneOpenEventCallbacks, runtime: RuntimeLike = {}): () => void {
  const doc = runtime.document ?? (typeof document !== 'undefined' ? document : null);
  if (!doc) return () => {};

  const openTab = callbacks?.openTab;
  const popOutPane = callbacks?.popOutPane;

  const openTabHandler = (event: { detail?: { path?: string; label?: string } }) => {
    const path = event?.detail?.path;
    const label = typeof event?.detail?.label === 'string' && event.detail.label.trim() ? event.detail.label.trim() : undefined;
    if (path) {
      openTab?.(path, label);
    }
  };

  const popoutHandler = (event: { detail?: { path?: string; label?: string } }) => {
    const path = event?.detail?.path;
    const label = typeof event?.detail?.label === 'string' && event.detail.label.trim() ? event.detail.label.trim() : undefined;
    if (path) {
      popOutPane?.(path, label);
    }
  };

  const openTabEvents = [
    'office-viewer:open-tab',
    'drawio:open-tab',
    'csv-viewer:open-tab',
    'pdf-viewer:open-tab',
    'image-viewer:open-tab',
    'video-viewer:open-tab',
    'vnc:open-tab',
  ];

  openTabEvents.forEach((type) => doc.addEventListener(type, openTabHandler));
  doc.addEventListener('pane:popout', popoutHandler);

  return () => {
    openTabEvents.forEach((type) => doc.removeEventListener(type, openTabHandler));
    doc.removeEventListener('pane:popout', popoutHandler);
  };
}

/** Register the Ctrl+` dock toggle shortcut. */
export function watchDockToggleShortcut(onToggle?: () => void, runtime: RuntimeLike = {}): () => void {
  const doc = runtime.document ?? (typeof document !== 'undefined' ? document : null);
  if (!doc) return () => {};

  const onKeyDown = (event: { ctrlKey?: boolean; key?: string; preventDefault?: () => void }) => {
    if (event?.ctrlKey && event.key === '`') {
      event.preventDefault?.();
      onToggle?.();
    }
  };

  doc.addEventListener('keydown', onKeyDown);
  return () => doc.removeEventListener('keydown', onKeyDown);
}

export interface ZenModeShortcutCallbacks {
  toggleZenMode?: () => void;
  exitZenMode?: () => void;
  zenMode?: boolean;
  isZenModeActive?: () => boolean;
}

/** Register Ctrl+Shift+Z and Escape shortcuts for zen-mode control. */
export function watchZenModeShortcuts(callbacks: ZenModeShortcutCallbacks, runtime: RuntimeLike = {}): () => void {
  const doc = runtime.document ?? (typeof document !== 'undefined' ? document : null);
  if (!doc) return () => {};

  const toggleZenMode = callbacks?.toggleZenMode;
  const exitZenMode = callbacks?.exitZenMode;
  const isZenModeActive = typeof callbacks?.isZenModeActive === 'function'
    ? callbacks.isZenModeActive
    : () => Boolean(callbacks?.zenMode);

  const onKeyDown = (event: { ctrlKey?: boolean; shiftKey?: boolean; key?: string; preventDefault?: () => void }) => {
    if (event?.ctrlKey && event.shiftKey && (event.key === 'Z' || event.key === 'z')) {
      event.preventDefault?.();
      toggleZenMode?.();
      return;
    }
    if (event?.key === 'Escape' && isZenModeActive()) {
      event.preventDefault?.();
      exitZenMode?.();
    }
  };

  doc.addEventListener('keydown', onKeyDown);
  return () => doc.removeEventListener('keydown', onKeyDown);
}
