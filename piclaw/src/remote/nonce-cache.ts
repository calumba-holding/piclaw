export class RemoteNonceCache {
  private ttlMs: number;
  private maxEntries: number;
  private entries = new Map<string, Map<string, number>>();

  constructor(ttlMs: number, maxEntries: number) {
    this.ttlMs = ttlMs;
    this.maxEntries = maxEntries;
  }

  checkAndStore(peerId: string, nonce: string, now = Date.now()): boolean {
    const peerMap = this.entries.get(peerId) ?? new Map<string, number>();
    // prune expired
    for (const [key, ts] of peerMap) {
      if (now - ts > this.ttlMs) peerMap.delete(key);
    }

    if (peerMap.has(nonce)) return false;
    peerMap.set(nonce, now);

    while (peerMap.size > this.maxEntries) {
      const oldest = peerMap.keys().next().value as string | undefined;
      if (!oldest) break;
      peerMap.delete(oldest);
    }

    this.entries.set(peerId, peerMap);
    return true;
  }
}
