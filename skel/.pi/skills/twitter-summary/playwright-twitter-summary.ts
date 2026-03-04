#!/usr/bin/env bun
/**
 * playwright-twitter-summary.ts – Fetch tweets via Playwright + Nitter.
 *
 * Launches a headless browser, navigates to Nitter instances, scrapes
 * recent tweets/replies/retweets for a given user, and outputs a compact
 * JSON summary.
 */

import { chromium } from "playwright";

async function run() {
  const args = process.argv.slice(2);
  const opts: Record<string, string> = {};
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (!a.startsWith("--")) continue;
    const [k, v] = a.slice(2).split("=");
    opts[k] = v === undefined ? "true" : v;
  }
  const handle = opts.handle || opts.h || "example_user";
  const hours = parseInt(opts.hours || opts.hrs || "16", 10) || 16;
  const instances = (opts.instances || "https://nitter.net,https://nitter.tiekoetter.com,https://nitter.snopyta.org,https://nitter.kavin.rocks,https://nitter.1d4.us").split(",").map(s => s.trim()).filter(Boolean);
  const cutoff = Date.now() - hours * 3600 * 1000;

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' });
  const page = await context.newPage();

  for (const base of instances) {
    const url = `${base.replace(/\/+$/, '')}/${handle}`;
    console.error(`Trying ${url}`);
    try {
      const res = await page.goto(url, { waitUntil: 'networkidle', timeout: 20000 });
      if (!res || res.status() >= 400) {
        console.error(`  -> HTTP status ${res ? res.status() : 'no-res'}`);
        continue;
      }

      try {
        await page.waitForSelector('div.timeline-item, div.status, article, li.timeline-item, .timeline', { timeout: 8000 });
      } catch (e) {
        console.error('  -> timeline selector not found (but continuing)');
      }

      const items = await page.$$eval('div.timeline-item, div.status, article, li.timeline-item, .timeline-item, .status', (nodes) => {
        const nowMs = Date.now();
        function parseDateText(t: string | null) {
          if (!t) return null;
          t = ('' + t).trim();
          const rel = t.match(/^(\d+)(s|m|h|d)$/i);
          if (rel) {
            const n = Number(rel[1]);
            const u = rel[2].toLowerCase();
            if (u === 's') return nowMs - n * 1000;
            if (u === 'm') return nowMs - n * 60 * 1000;
            if (u === 'h') return nowMs - n * 60 * 60 * 1000;
            if (u === 'd') return nowMs - n * 24 * 60 * 60 * 1000;
          }
          const parsed = Date.parse(t);
          if (!isNaN(parsed)) return parsed;
          const monthDay = t.match(/^(\d{1,2})\s+([A-Za-z]+)$/);
          if (monthDay) {
            const year = new Date().getFullYear();
            const p = Date.parse(`${t} ${year}`);
            if (!isNaN(p)) return p;
          }
          return null;
        }

        return nodes.map((n) => {
          const contentEl = n.querySelector('.tweet-content, .status__content, .tweet-body, .tweet-text, .content, p');
          const content = contentEl ? (contentEl.textContent || '').trim() : (n.textContent || '').trim();
          const timeEl = n.querySelector('time');
          let dtText: string | null = null;
          if (timeEl) dtText = timeEl.getAttribute('datetime') || timeEl.getAttribute('title') || timeEl.textContent;
          const a = n.querySelector('a[href*="/status/"]');
          let href: string | null = null;
          if (a) {
            const aText = a.textContent ? a.textContent.trim() : null;
            href = a.getAttribute('href') || null;
            if (!dtText && aText && /\d/.test(aText)) dtText = aText;
          }
          if (!dtText) {
            const dateCandidate = n.querySelector('.date, .tweet-date, .status__timestamp');
            if (dateCandidate) dtText = dateCandidate.textContent;
          }
          const ts = parseDateText(dtText);
          const isRetweet = /Retweet(ed)?|RT @/i.test(content) || Boolean(n.querySelector('.retweet'));
          const isReply = Boolean(n.querySelector('.reply')) || /in reply to/i.test(content) || /replying to/i.test(content);
          return { ts, content: content.replace(/\s+/g, ' ').trim(), isRetweet, isReply, href };
        }).filter(Boolean);
      });

      const filtered = items.filter(it => it.ts && it.ts >= cutoff);
      if (filtered.length === 0) {
        console.error('  -> no recent tweets found on this instance');
        continue;
      }

      filtered.sort((a, b) => a.ts! - b.ts!);
      const out = filtered.map(p => ({ date: new Date(p.ts!).toISOString(), type: p.isRetweet ? 'retweet' : p.isReply ? 'reply' : 'tweet', text: p.content, url: p.href }));

      console.log(JSON.stringify({ handle, instance: base, count: out.length, items: out }, null, 2));
      await browser.close();
      process.exit(0);
    } catch (err) {
      console.error('  -> error', String(err));
      continue;
    }
  }

  await browser.close();
  console.error('No instances yielded recent tweets.');
  process.exit(2);
}

run().catch((e) => { console.error(e); process.exit(1); });
