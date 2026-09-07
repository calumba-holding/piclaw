import { ChatSurface } from './components/chat-surface.js';
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
}

interface FamilyChatSurfaceSnapshot {
  posts: any[];
  hasMore: boolean;
  directory: FamilyChatDirectoryEntry[];
  currentChatJid: string;
  enabled: boolean;
  identity: FamilyApi['identity'];
}

/**
 * Thin family adapter for the one shared production ChatSurface. It owns no
 * alternate renderer, compose widget, model picker, session picker or status UI.
 */
export class FamilyChatSurface {
  private readonly host = document.getElementById('family-chat-root') as HTMLElement;
  private snapshot: FamilyChatSurfaceSnapshot;
  private stopped = false;
  private pending: { chatJid: string; content: string; requestId: string } | null = null;

  constructor(
    private readonly api: FamilyApi,
    private readonly hooks: {
      navigate: (chatJid: string) => Promise<void>;
      changed: () => Promise<void>;
      previewMemory: (source: any) => Promise<void> | void;
      submissionState: (busy: boolean) => void;
    },
  ) {
    this.snapshot = {
      posts: [], hasMore: false, directory: [], currentChatJid: '', enabled: false, identity: api.identity,
    };
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
    this.update({ posts: [], hasMore: false, directory: [], currentChatJid: '', enabled: false });
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
    // ComposeBox reports its submission lock before invoking this adapter. Do
    // not reject that already-admitted submission because the lock has flipped
    // `enabled`; only lifecycle invalidation or a changed target can revoke it.
    if (this.stopped || chatJid !== this.snapshot.currentChatJid) throw new Error('This family conversation is unavailable. Refresh before sending.');
    if (mediaIds?.length || mode || !content.trim() || /^[\s]*[/@]/.test(content)) throw new Error('Only plain text prompts are supported by the current family capability policy.');
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

  private render(): void {
    if (this.stopped) return;
    const value = this.snapshot;
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
      postCapabilities=${{ media: false, cards: false, widgets: false, annotations: false, thinking: false, delete: false }}
      agents=${{}}
      user=${{ name: value.identity.displayName, user_name: value.identity.displayName }}
      reverse=${true}
      composeKey=${`${value.identity.userId}:${value.currentChatJid}`}
      composeProps=${{
        key: `${value.identity.userId}:${value.currentChatJid}`,
        currentChatJid: value.currentChatJid || value.identity.homeChatJid,
        activeChatAgents: value.directory,
        onSwitchChat: value.enabled ? (chatJid: string) => { void this.hooks.navigate(chatJid); } : undefined,
        onSubmitIntercept: value.enabled ? async (submission: any) => {
          const response = await this.sendMessage('default', submission.content, null, [], submission.submitMode, value.currentChatJid);
          return response;
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
          getAgentModels: async () => ({ models: [] }),
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
          modelPicker: false,
        },
        storageNamespace: `family:${value.identity.userId}`,
        disabled: !value.enabled,
        inputId: 'message-text',
        sendButtonId: 'send-message',
      }}
    />`, this.host);
  }
}
