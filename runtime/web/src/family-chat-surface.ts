import { ChatSurface } from './components/chat-surface.js';
import { rewriteOwnedMediaUrl } from './components/post.js';
import { FamilyApi } from './family-api.js';
import { validMemorySource } from './family-memory.js';
import { html, render } from './vendor/preact-htm.js';

export interface FamilyChatDirectoryEntry {
  branch_id?: string;
  chat_jid: string;
  root_chat_jid: string;
  parent_branch_id?: string | null;
  agent_name: string;
  archived_at?: string | null;
  model?: string | null;
  model_label?: string | null;
  is_active?: boolean;
  capabilities?: Record<string, boolean>;
}

interface FamilyChatSurfaceSnapshot {
  posts: any[];
  hasMore: boolean;
  directory: FamilyChatDirectoryEntry[];
  currentChatJid: string;
  enabled: boolean;
  identity: FamilyApi['identity'];
  modelState: Record<string, any> | null;
}

/**
 * Thin family adapter for the one shared production ChatSurface. It owns no
 * alternate renderer, compose widget, model picker, session picker or status UI.
 */
export class FamilyChatSurface {
  private readonly host = document.getElementById('family-chat-root') as HTMLElement;
  private snapshot: FamilyChatSurfaceSnapshot;
  private readonly postCapabilities: Record<string, unknown>;
  private readonly preferenceRuntime: EventTarget & { localStorage: { getItem: (key: string) => string | null; setItem: (key: string, value: string) => void } };
  private stopped = false;
  private pending: { chatJid: string; content: string; requestId: string } | null = null;

  constructor(
    private readonly api: FamilyApi,
    private readonly hooks: {
      navigate: (chatJid: string) => Promise<void>;
      changed: () => Promise<void>;
      refreshDirectory: () => Promise<void>;
      previewMemory: (source: any) => Promise<void> | void;
      submissionState: (busy: boolean) => void;
    },
  ) {
    this.snapshot = {
      posts: [], hasMore: false, directory: [], currentChatJid: '', enabled: false, identity: api.identity, modelState: null,
    };
    const preferences = new Map<string, string>();
    const runtime = new EventTarget() as FamilyChatSurface['preferenceRuntime'];
    runtime.localStorage = { getItem: key => preferences.get(key) ?? null, setItem: (key, value) => { preferences.set(key, value); } };
    this.preferenceRuntime = runtime;
    this.postCapabilities = Object.freeze({
      media: true,
      mediaActions: false,
      cards: true,
      widgets: true,
      annotations: true,
      annotationActions: false,
      cardActions: false,
      widgetActions: false,
      resourceActions: false,
      thinking: true,
      delete: false,
      rewriteImageSrc: rewriteOwnedMediaUrl,
      loadMediaInfo: (mediaId: number) => this.api.request(`/media/${mediaId}/info`),
      loadThinking: (messageId: number, chatJid: string) => this.api.request(`/agent/thinking?message_id=${encodeURIComponent(messageId)}&chat_jid=${encodeURIComponent(chatJid)}`),
    });
    this.render();
  }

  update(value: Partial<FamilyChatSurfaceSnapshot>): void {
    if (this.stopped) return;
    this.snapshot = { ...this.snapshot, ...value };
    this.host.dataset.chatJid = this.snapshot.currentChatJid;
    this.host.setAttribute('aria-busy', String(!this.snapshot.enabled));
    this.render();
  }

  clear(): void {
    this.pending = null;
    this.update({ posts: [], hasMore: false, directory: [], currentChatJid: '', enabled: false, modelState: null });
  }

  stop(): void {
    if (this.stopped) return;
    this.stopped = true;
    this.pending = null;
    render(null, this.host);
    this.host.replaceChildren();
    this.host.dataset.chatJid = '';
    this.host.setAttribute('aria-busy', 'true');
  }

  private readonly sendMessage = async (
    _agentId: string,
    content: string,
    _threadId: unknown,
    mediaIds: unknown[],
    mode: string | null | undefined,
    chatJid: string,
  ): Promise<any> => {
    // ComposeBox model controls use this injected service directly. Admit only
    // exact model/thinking controls; all other slash/mention inputs stay denied.
    if (this.stopped || chatJid !== this.snapshot.currentChatJid) throw new Error('This family conversation is unavailable. Refresh before sending.');
    const command = typeof content === 'string' ? content.trim() : '';
    const modelControl = command.match(/^\/(model|thinking)\s+(.+)$/i);
    if (modelControl && !mediaIds?.length && !mode) {
      return await this.api.request(`/agent/models?chat_jid=${encodeURIComponent(chatJid)}`, 'PATCH', { action: modelControl[1].toLowerCase(), value: modelControl[2] });
    }
    if (mediaIds?.length || mode || !command || /^[\s]*[/@]/.test(command)) throw new Error('Only plain text prompts and the active model controls are supported by the current family capability policy.');
    if (!this.pending || this.pending.chatJid !== chatJid || this.pending.content !== content) {
      this.pending = { chatJid, content, requestId: crypto.randomUUID() };
    }
    const request = this.pending;
    const response = await this.api.request(`/agent/default/message?chat_jid=${encodeURIComponent(chatJid)}`, 'POST', {
      content,
      request_id: request.requestId,
    });
    if (this.pending === request) this.pending = null;
    return response;
  };

  private readonly loadModels = async (chatJid: string): Promise<any> => {
    return await this.api.request(`/agent/models?chat_jid=${encodeURIComponent(chatJid)}`);
  };

  private readonly mutateSession = async (path: string, body: Record<string, unknown>): Promise<any> => {
    const response = await this.api.request(path, 'POST', body);
    await this.hooks.refreshDirectory();
    return response;
  };

  private render(): void {
    if (this.stopped) return;
    const value = this.snapshot;
    const currentBranch = value.directory.find(branch => branch.chat_jid === value.currentChatJid) as (FamilyChatDirectoryEntry & { capabilities?: Record<string, boolean> }) | undefined;
    const renderAccessory = (post: any) => {
      const source = post?.memory_source;
      if (!validMemorySource(source) || source.chat_jid !== value.currentChatJid || source.message_rowid !== post.id) return null;
      return html`<button
        type="button"
        class="memory-preview"
        disabled=${!value.enabled}
        onClick=${() => { if (value.enabled) void this.hooks.previewMemory(source); }}
      >Preview for family memory</button>`;
    };
    render(html`<${ChatSurface}
      timelineId="timeline"
      composeId="compose-form"
      posts=${value.posts}
      hasMore=${value.hasMore}
      renderPostAccessory=${renderAccessory}
      postCapabilities=${this.postCapabilities}
      agents=${{}}
      user=${{ name: value.identity.displayName, user_name: value.identity.displayName }}
      reverse=${true}
      composeKey=${`${value.identity.userId}:${value.currentChatJid}`}
      composeProps=${{
        key: `${value.identity.userId}:${value.currentChatJid}`,
        currentChatJid: value.currentChatJid || value.identity.homeChatJid,
        activeChatAgents: value.directory,
        activeModel: value.modelState?.current ?? null,
        agentModelsPayload: value.modelState,
        thinkingLevel: value.modelState?.thinking_level ?? null,
        supportsThinking: value.modelState?.supports_thinking === true,
        preferenceRuntime: this.preferenceRuntime,
        onModelStateChange: (state: any) => { if (state && typeof state === 'object') this.update({ modelState: state }); },
        onSwitchChat: value.enabled ? (chatJid: string) => { void this.hooks.navigate(chatJid); } : undefined,
        onCreateSession: value.enabled && currentBranch?.capabilities?.fork === true ? async () => {
          const sourceChatJid = value.currentChatJid;
          const response = await this.mutateSession('/agent/branch-fork', { chat_jid: sourceChatJid, request_id: crypto.randomUUID() });
          if (this.stopped || this.snapshot.currentChatJid !== sourceChatJid) return;
          const chatJid = response?.branch?.chat_jid; if (typeof chatJid === 'string') await this.hooks.navigate(chatJid);
        } : undefined,
        onCreateRootSession: value.enabled ? async (agentName: string) => {
          const sourceChatJid = value.currentChatJid;
          const response = await this.mutateSession('/agent/root-session', { agent_name: agentName });
          if (this.stopped || this.snapshot.currentChatJid !== sourceChatJid) return;
          const chatJid = response?.branch?.chat_jid; if (typeof chatJid === 'string') await this.hooks.navigate(chatJid);
        } : undefined,
        onRenameSession: value.enabled && currentBranch?.capabilities?.rename === true ? async () => {
          const name = window.prompt('Rename current session', currentBranch.agent_name)?.trim();
          const sourceChatJid = value.currentChatJid;
          if (name) { await this.mutateSession('/agent/branch-rename', { chat_jid: sourceChatJid, agent_name: name }); if (!this.stopped && this.snapshot.currentChatJid === sourceChatJid) await this.hooks.changed(); }
        } : undefined,
        onDeleteSession: value.enabled ? async (chatJid: string, options?: { confirmed?: boolean }) => {
          const branch = value.directory.find(item => item.chat_jid === chatJid) as any;
          const confirmed = options?.confirmed === true || window.confirm(`Archive @${branch?.agent_name || chatJid}? History and files are retained.`);
          if (branch?.capabilities?.archive !== true || !confirmed) return false;
          await this.mutateSession('/agent/branch-prune', { chat_jid: chatJid });
          if (chatJid === value.currentChatJid) await this.hooks.navigate(value.identity.homeChatJid); else await this.hooks.changed();
          return true;
        } : undefined,
        onRestoreSession: value.enabled ? async (chatJid: string) => {
          const branch = value.directory.find(item => item.chat_jid === chatJid) as any;
          if (branch?.capabilities?.restore !== true) throw new Error('This session cannot be restored.');
          const sourceChatJid = value.currentChatJid;
          await this.mutateSession('/agent/branch-restore', { chat_jid: chatJid, agent_name: branch.agent_name });
          if (!this.stopped && this.snapshot.currentChatJid === sourceChatJid) await this.hooks.navigate(chatJid);
        } : undefined,
        onSubmitIntercept: value.enabled ? async (submission: any) => {
          return await this.sendMessage('default', submission.content, null, [], submission.submitMode, value.currentChatJid);
        } : async () => { throw new Error('This family conversation is unavailable. Refresh before sending.'); },
        onPost: () => { document.getElementById('family-error')!.textContent = ''; void this.hooks.changed(); },
        onSubmitError: (message: string) => {
          document.getElementById('family-error')!.textContent = `${message} Resend unchanged text to reuse the request ID; do not assume it was rejected.`;
        },
        onSubmissionStateChange: this.hooks.submissionState,
        isAgentActive: false,
        connectionStatus: value.enabled ? 'connected' : 'disconnected',
        stateAccessFailed: !value.enabled,
        showQueueStack: false,
        services: {
          sendAgentMessage: this.sendMessage,
          getAgentModels: this.loadModels,
          uploadMedia: async () => { throw new Error('Attachments are unavailable in family mode.'); },
          fetchCommands: async () => ({ commands: [] }),
        },
        capabilities: {
          persistBrowserState: false,
          commands: false,
          mentions: false,
          media: false,
          search: false,
          location: false,
          speech: false,
          notifications: false,
          modelPicker: true,
          modelSettings: false,
          modelCompaction: false,
          sessionRollup: false,
        },
        storageNamespace: `family:${value.identity.userId}`,
        disabled: !value.enabled,
        inputId: 'message-text',
        sendButtonId: 'send-message',
      }}
    />`, this.host);
  }
}
