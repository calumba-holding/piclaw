#!/usr/bin/env bun
/**
 * feeds-digest.ts – Build a deduped markdown digest from an RSS feed index.
 *
 * Fetches the feed index page, extracts individual feed URLs, fetches
 * and parses each feed, deduplicates entries using simhash, and writes
 * a markdown digest file plus a JSON links file.
 */

import { writeFileSync } from "fs";

const DEFAULT_FEED_INDEX_URL = process.env.FEED_INDEX_URL || "http://localhost:8080/feeds/index.html";
const DEFAULT_FEED_BASE_URL = process.env.FEED_BASE_URL || DEFAULT_FEED_INDEX_URL.replace(/\/[^/]*$/, "/");
const DEFAULT_OUT = "/workspace/notes/feeds-digest.md";
const DEFAULT_LINKS_OUT = "/workspace/notes/feeds-digest-links.json";
const DEFAULT_HOURS = 12;
const DEFAULT_SIMHASH_THRESHOLD = 8;

function parseArgs(argv: string[]) {
  const args = argv.slice(2);
  let out = DEFAULT_OUT;
  let linksOut = DEFAULT_LINKS_OUT;
  let hours = DEFAULT_HOURS;
  let threshold = DEFAULT_SIMHASH_THRESHOLD;
  let feedIndexUrl = DEFAULT_FEED_INDEX_URL;

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === "--out" || arg.startsWith("--out=")) {
      out = arg.includes("=") ? arg.slice("--out=".length) : args[++i];
    } else if (arg === "--links-out" || arg.startsWith("--links-out=")) {
      linksOut = arg.includes("=") ? arg.slice("--links-out=".length) : args[++i];
    } else if (arg === "--hours" || arg.startsWith("--hours=")) {
      const val = arg.includes("=") ? arg.slice("--hours=".length) : args[++i];
      const parsed = Number.parseInt(val, 10);
      if (Number.isFinite(parsed) && parsed > 0) hours = parsed;
    } else if (arg === "--simhash" || arg.startsWith("--simhash=")) {
      const val = arg.includes("=") ? arg.slice("--simhash=".length) : args[++i];
      const parsed = Number.parseInt(val, 10);
      if (Number.isFinite(parsed) && parsed >= 0) threshold = parsed;
    } else if (arg === "--feed-url" || arg.startsWith("--feed-url=")) {
      feedIndexUrl = arg.includes("=") ? arg.slice("--feed-url=".length) : args[++i];
    }
  }

  return { out, linksOut, hours, threshold, feedIndexUrl };
}

function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

async function extractFeedUrls(indexHtml: string, baseUrl: string): Promise<string[]> {
  const urls: string[] = [];
  const rewriter = new HTMLRewriter().on("a", {
    element(el) {
      const href = el.getAttribute("href") || "";
      if (href.endsWith(".xml")) {
        urls.push(new URL(href, baseUrl).toString());
      }
    },
  });

  await rewriter.transform(new Response(indexHtml)).text();
  return Array.from(new Set(urls));
}

function extractTag(block: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
  const match = regex.exec(block);
  if (!match) return "";
  return decodeEntities(match[1].trim());
}

function extractItemBlocks(xml: string): string[] {
  const blocks: string[] = [];
  const regex = /<item>([\s\S]*?)<\/item>/gi;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(xml)) !== null) {
    blocks.push(match[1]);
  }
  return blocks;
}

function normalizeSummaryText(text: string): string {
  return text
    .replace(/\blink\s*\((https?:\/\/[^)]+)\)/gi, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function stripUrlMarkers(text: string): { text: string; urls: string[] } {
  const urls: string[] = [];
  const cleaned = text.replace(/@@URL@@([^@]+)@@URL@@/g, (_, url) => {
    urls.push(url);
    return "";
  });
  return { text: normalizeSummaryText(cleaned), urls };
}

async function extractSectionsFromContent(contentHtml: string): Promise<Array<{ title: string; items: Array<{ text: string; urls: string[] }> }>> {
  if (!contentHtml) return [];
  const decoded = decodeEntities(contentHtml);

  const rewriter = new HTMLRewriter()
    .on("h2, h3, h4", {
      element(el) {
        el.before("\n@@HEADER@@", { html: false });
        el.after("\n", { html: false });
      },
    })
    .on("li", {
      element(el) {
        el.before("\n@@ITEM@@", { html: false });
      },
    })
    .on("a", {
      element(el) {
        const href = el.getAttribute("href");
        if (href) {
          el.after(`@@URL@@${href}@@URL@@`, { html: false });
        }
      },
    });

  const transformed = rewriter.transform(new Response(decoded));
  const raw = await transformed.text();
  const text = decodeEntities(raw).replace(/<[^>]+>/g, " ");
  const lines: string[] = [];
  for (const line of text.split("\n")) {
    const trimmed = line.replace(/\s+/g, " ").trim();
    if (trimmed) lines.push(trimmed);
  }

  const sections: Array<{ title: string; items: Array<{ text: string; urls: string[] }> }> = [];
  let currentTitle = "Highlights";
  let currentItems: Array<{ text: string; urls: string[] }> = [];

  const flush = () => {
    if (currentItems.length > 0) {
      sections.push({ title: currentTitle, items: currentItems });
    }
  };

  for (const line of lines) {
    if (line.startsWith("@@HEADER@@")) {
      flush();
      currentTitle = line.replace("@@HEADER@@", "").trim() || "Highlights";
      currentItems = [];
      continue;
    }
    if (line.startsWith("@@ITEM@@")) {
      const item = line.replace("@@ITEM@@", "").trim();
      if (item) currentItems.push(stripUrlMarkers(item));
    }
  }

  flush();
  return sections;
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 2);
}

function hashToken(token: string): bigint {
  let hash = 14695981039346656037n;
  const prime = 1099511628211n;
  for (const ch of token) {
    hash ^= BigInt(ch.charCodeAt(0));
    hash = (hash * prime) & ((1n << 64n) - 1n);
  }
  return hash;
}

function simhash(text: string): bigint {
  const weights = Array(64).fill(0);
  for (const token of tokenize(text)) {
    const hash = hashToken(token);
    for (let i = 0; i < 64; i += 1) {
      const bit = (hash >> BigInt(i)) & 1n;
      weights[i] += bit === 1n ? 1 : -1;
    }
  }
  let result = 0n;
  for (let i = 0; i < 64; i += 1) {
    if (weights[i] >= 0) {
      result |= 1n << BigInt(i);
    }
  }
  return result;
}

function hammingDistance(a: bigint, b: bigint): number {
  let x = a ^ b;
  let count = 0;
  while (x > 0n) {
    count += Number(x & 1n);
    x >>= 1n;
  }
  return count;
}

async function main() {
  const { out, linksOut, hours, threshold, feedIndexUrl } = parseArgs(process.argv);
  const feedBaseUrl = process.env.FEED_BASE_URL || feedIndexUrl.replace(/\/[^/]*$/, "/");
  const indexResponse = await fetch(feedIndexUrl);
  if (!indexResponse.ok) {
    throw new Error(`Failed to fetch feed index: ${indexResponse.status}`);
  }
  const indexHtml = await indexResponse.text();
  const feedUrls = await extractFeedUrls(indexHtml, feedBaseUrl);

  const now = new Date();
  const windowStart = new Date(now.getTime() - hours * 60 * 60 * 1000);

  const allItems: Array<{
    title: string;
    link: string;
    pubDate: Date;
    feedTitle: string;
    detailSections: Array<{ title: string; items: Array<{ text: string; urls: string[] }> }>;
    simhash: bigint;
    summaryText: string;
  }> = [];

  for (const url of feedUrls) {
    const response = await fetch(url);
    if (!response.ok) continue;
    const xml = await response.text();
    const feedTitle = extractTag(xml, "title") || "Unknown Feed";

    for (const block of extractItemBlocks(xml)) {
      const title = extractTag(block, "title") || "(untitled)";
      const link = extractTag(block, "link") || "";
      const pubDateRaw = extractTag(block, "pubDate") || extractTag(block, "date");
      const pubDate = pubDateRaw ? new Date(pubDateRaw) : null;
      if (!pubDate || !Number.isFinite(pubDate.getTime())) continue;
      if (pubDate < windowStart || pubDate > now) continue;
      const contentHtml = extractTag(block, "content:encoded") || extractTag(block, "description");
      const detailSections = await extractSectionsFromContent(contentHtml);
      const summaryText = detailSections
        .flatMap((section) => [section.title, ...section.items.map((item) => item.text)])
        .join(" ");
      const signature = simhash(`${title} ${summaryText}`);
      allItems.push({ title, link, pubDate, feedTitle, detailSections, simhash: signature, summaryText });
    }
  }

  const sortedItems = allItems.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
  const uniqueItems: typeof allItems = [];
  const seenKey = new Set<string>();

  for (const item of sortedItems) {
    const key = `${item.title}|${item.link}`;
    if (seenKey.has(key)) continue;
    seenKey.add(key);
    const duplicate = uniqueItems.find((existing) => hammingDistance(existing.simhash, item.simhash) <= threshold);
    if (duplicate) continue;
    uniqueItems.push(item);
  }

  const lines: string[] = [];
  for (const item of uniqueItems) {
    lines.push(`## ${item.title}`);
    lines.push(`Source: ${item.feedTitle} • ${item.pubDate.toISOString()}`);
    if (item.detailSections.length === 0) {
      lines.push("- No detailed summary available.");
    } else {
      for (const section of item.detailSections) {
        lines.push(`- **${section.title}**`);
        for (const bullet of section.items) {
          lines.push(`  - ${bullet.text}`);
        }
      }
    }
    lines.push("");
  }

  const header = [
    `# Feed digest (last ${hours} hours, deduped)`,
    `Generated: ${now.toISOString()}`,
    `Window: ${windowStart.toISOString()} – ${now.toISOString()}`,
    `Items: ${uniqueItems.length} (deduped from ${allItems.length}, simhash ≤ ${threshold})`,
    "",
  ];

  if (lines.length === 0) {
    lines.push("No items found in the requested time window.");
  }

  const content = [...header, ...lines].join("\n");
  writeFileSync(out, content, "utf-8");

  const linkIndex = uniqueItems.map((item, idx) => ({
    id: `item-${idx + 1}`,
    title: item.title,
    feed: item.feedTitle,
    published: item.pubDate.toISOString(),
    url: item.link || null,
    sections: item.detailSections.map((section) => ({
      title: section.title,
      items: section.items,
    })),
  }));

  writeFileSync(linksOut, `${JSON.stringify(linkIndex, null, 2)}\n`, "utf-8");
  console.log(out);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
