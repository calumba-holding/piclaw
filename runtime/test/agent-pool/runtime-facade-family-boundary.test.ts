import { expect, test } from 'bun:test';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { createTempWorkspace, setEnv } from '../helpers.js';
import { AgentRuntimeFacade } from '../../src/agent-pool/runtime-facade.js';
import { withExecutionIdentity, type ExecutionIdentity } from '../../src/core/execution-context.js';

function setup() {
  const workspace = createTempWorkspace('runtime-facade-boundary-');
  const restore = setEnv({ PICLAW_WORKSPACE: workspace.workspace, PICLAW_STORE: workspace.store, PICLAW_DATA: workspace.data });
  mkdirSync(join(workspace.workspace, '.piclaw'));
  const path = join(workspace.workspace, '.piclaw', 'config.json');
  const configure = (mode: 'single-user' | 'family-shared') => writeFileSync(path, JSON.stringify({ domains: { access: { mode } } }));
  return { configure, cleanup: () => { restore(); workspace.cleanup(); } };
}

function facade(calls: string[]) {
  const session = {
    sessionId: 'session', isStreaming: true,
    prompt: async () => { calls.push('prompt'); },
    getFollowUpMessages: () => ['queued'], clearQueue: () => ({ steering: [], followUp: ['queued'] }),
  };
  const runtime = { session } as any;
  return new AgentRuntimeFacade({
    pool: new Map([['web:alice', { runtime, lastUsed: Date.now() }]]) as any,
    getOrCreateRuntime: async () => { calls.push('hydrate'); return runtime; },
    modelRegistry: { getAll: () => [], getAvailable: () => [] } as any,
    modelRuntime: {} as any,
    authPath: '/unused',
    clearAttachments: () => calls.push('clear-attachments'),
    refreshRuntime: async () => { calls.push('refresh'); },
    applyControlCommandFn: async () => { calls.push('control'); return { status: 'success' }; },
    executeSlashCommandFn: async () => { calls.push('slash'); return { status: 'success' }; },
  });
}

const familyIdentity: ExecutionIdentity = {
  mode: 'family-shared', username: 'alice', displayName: 'Alice', role: 'member', rootChatJid: 'web:alice',
  provenance: { actorUserId: 'alice', ownerUserId: 'alice', chatJid: 'web:alice', kind: 'interactive', authenticationSessionId: 'login-a' },
};

test('direct control queue removal and slash mutations deny family mode before runtime callbacks', async () => {
  const fixture = setup();
  try {
    fixture.configure('family-shared'); const calls: string[] = []; const runtime = facade(calls);
    for (const identity of [null, familyIdentity]) for (const invoke of [
      () => runtime.applyControlCommand('web:alice', { type: 'compact', raw: '/compact' } as any),
      () => runtime.queueStreamingMessage('web:alice', 'private', 'steer'),
      () => runtime.removeQueuedFollowupMessage('web:alice', 'queued'),
      () => runtime.applySlashCommand('web:alice', '/tasks'),
    ]) await expect(withExecutionIdentity(identity, invoke)).rejects.toThrow('unavailable in multi-user mode');
    expect(calls).toEqual([]);
  } finally { fixture.cleanup(); }
});

test('retained family context cannot fall through after config changes to single-user', async () => {
  const fixture = setup();
  try {
    fixture.configure('single-user'); const calls: string[] = []; const runtime = facade(calls);
    await expect(withExecutionIdentity(familyIdentity, () => runtime.queueStreamingMessage('web:alice', 'private', 'followUp'))).rejects.toThrow('unavailable in multi-user mode');
    expect(calls).toEqual([]);
  } finally { fixture.cleanup(); }
});

test('malformed access config cannot fall through to direct session mutation', async () => {
  const fixture = setup();
  try {
    writeFileSync(join(process.env.PICLAW_WORKSPACE!, '.piclaw', 'config.json'), '{');
    const calls: string[] = []; const runtime = facade(calls);
    await expect(runtime.queueStreamingMessage('web:alice', 'private', 'steer')).rejects.toThrow('access configuration cannot default safely');
    expect(calls).toEqual([]);
  } finally { fixture.cleanup(); }
});

test('single-user direct mutations retain existing behavior', async () => {
  const fixture = setup();
  try {
    fixture.configure('single-user'); const calls: string[] = []; const runtime = facade(calls);
    await expect(runtime.applyControlCommand('web:alice', { type: 'compact', raw: '/compact' } as any)).resolves.toMatchObject({ status: 'success' });
    await expect(runtime.queueStreamingMessage('web:alice', 'private', 'steer')).resolves.toEqual({ queued: true });
    await expect(runtime.removeQueuedFollowupMessage('web:alice', 'queued')).resolves.toBe(true);
    await expect(runtime.applySlashCommand('web:alice', '/tasks')).resolves.toMatchObject({ status: 'success' });
    expect(calls).toContain('control'); expect(calls).toContain('slash'); expect(calls).toContain('prompt');
  } finally { fixture.cleanup(); }
});
