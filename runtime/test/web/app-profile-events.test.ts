import { expect, test } from 'bun:test';

import {
  resolveAgentProfilePatch,
  resolveDefaultAgentBrandingPayload,
  resolveUserProfileFromAgentsPayload,
  resolveUserProfileUpdate,
} from '../../web/src/ui/app-profile-events.js';

test('resolveDefaultAgentBrandingPayload picks default agent branding when present', () => {
  expect(resolveDefaultAgentBrandingPayload([
    { id: 'other', name: 'Other', avatar_url: 'other.png' },
    { id: 'default', name: 'Pi', avatar_url: 'pi.png' },
  ])).toEqual({ name: 'Pi', avatarUrl: 'pi.png' });
  expect(resolveDefaultAgentBrandingPayload(null)).toEqual({ name: undefined, avatarUrl: undefined });
});

test('resolveAgentProfilePatch ignores invalid payloads and unchanged profile events', () => {
  expect(resolveAgentProfilePatch(null, null)).toBeNull();
  expect(resolveAgentProfilePatch({ agent_id: '' }, null)).toBeNull();
  expect(resolveAgentProfilePatch({ agent_id: 'default' }, { id: 'default' })).toBeNull();
  expect(resolveAgentProfilePatch({ agent_id: 'default', agent_name: 'Pi' }, { id: 'default', name: 'Pi' })).toBeNull();
  expect(resolveAgentProfilePatch({ agent_id: 'default', agent_avatar: ' avatar.png ' }, { id: 'default', avatar_url: 'avatar.png' })).toBeNull();
});

test('resolveAgentProfilePatch normalizes changed name/avatar updates', () => {
  expect(resolveAgentProfilePatch({
    agent_id: 'default',
    agent_name: 'Pi Prime',
    agent_avatar: '  avatar-next.png  ',
  }, {
    id: 'default',
    name: 'Pi',
    avatar_url: 'avatar-prev.png',
  })).toEqual({
    agentId: 'default',
    nameChanged: true,
    avatarChanged: true,
    resolvedName: 'Pi Prime',
    resolvedAvatar: 'avatar-next.png',
  });

  expect(resolveAgentProfilePatch({
    agent_id: 'default',
    agent_avatar: 123,
  }, {
    id: 'default',
    name: 'Pi',
    avatar_url: 'avatar-prev.png',
  })).toEqual({
    agentId: 'default',
    nameChanged: false,
    avatarChanged: true,
    resolvedName: 'Pi',
    resolvedAvatar: null,
  });

  expect(resolveAgentProfilePatch({
    agent_id: 42,
    agent_name: 'Numbered',
  }, {
    id: '42',
    name: 'Legacy',
  })).toEqual({
    agentId: '42',
    nameChanged: true,
    avatarChanged: false,
    resolvedName: 'Numbered',
    resolvedAvatar: null,
  });
});

test('resolveUserProfileFromAgentsPayload normalizes initial profile payloads and preserves no-op identity', () => {
  const previous = {
    name: 'You',
    avatar_url: 'avatar-prev.png',
    avatar_background: '#123456',
  };

  expect(resolveUserProfileFromAgentsPayload(previous, {
    name: ' You ',
    avatar_url: ' avatar-prev.png ',
    avatar_background: '#123456',
  })).toBe(previous);

  expect(resolveUserProfileFromAgentsPayload(previous, {
    name: ' Ada ',
    avatar_url: ' avatar-next.png ',
    avatar_background: ' #000000 ',
  })).toEqual({
    name: 'Ada',
    avatar_url: 'avatar-next.png',
    avatar_background: '#000000',
  });
});

test('resolveUserProfileUpdate preserves identity on no-op payloads and normalizes updates', () => {
  const previous = {
    name: 'You',
    avatar_url: 'avatar-prev.png',
    avatar_background: '#123456',
  };

  expect(resolveUserProfileUpdate(previous, {})).toBe(previous);

  expect(resolveUserProfileUpdate(previous, {
    user_name: '  Ada  ',
    user_avatar: '  avatar-next.png ',
    user_avatar_background: '  #000000 ',
  })).toEqual({
    name: 'Ada',
    avatar_url: 'avatar-next.png',
    avatar_background: '#000000',
  });

  expect(resolveUserProfileUpdate(previous, {
    userName: '   ',
    userAvatar: null,
    userAvatarBackground: null,
  })).toEqual({
    name: 'You',
    avatar_url: null,
    avatar_background: null,
  });
});
