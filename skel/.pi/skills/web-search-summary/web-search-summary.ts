/**
 * web-search-summary.ts – Search via SearXNG, fetch top results, summarise.
 *
 * Queries a local SearXNG instance, fetches the top N result pages,
 * converts them to markdown via Turndown, and returns compact summaries.
 */

import TurndownService from "turndown";
import { parseHTML } from "linkedom";

type SearchResult = {
  url: string;
  title: string;
  content?: string;
  summary?: string;
};

type SearxResponse = {
  query: string;
  results: Array<{
    url: string;
    title: string;
    content?: string;
  }>;
};

const DEFAULT_SEARX_URL = process.env.SEARXNG_URL || "http://localhost:8888/search";
const DEFAULT_LIMIT = 5;
const DEFAULT_FETCH_LIMIT = 2;
const DEFAULT_TIMEOUT = 15000;
const DEFAULT_MAX_SENTENCES = 3;
const DEFAULT_MAX_CHARS = 600;

function parseArgs(argv: string[]) {
  const parsed: Record<string, string> = {};
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith("--")) continue;
    const [key, inline] = arg.slice(2).split("=");
    if (!key) continue;
    if (inline !== undefined) {
      parsed[key] = inline;
      continue;
    }
    const next = argv[i + 1];
    if (next && !next.startsWith("--")) {
      parsed[key] = next;
      i += 1;
    } else {
      parsed[key] = "true";
    }
  }
  return parsed;
}

function parseNumber(value: string | undefined, fallback: number) {
  if (!value) return fallback;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

const options = parseArgs(process.argv.slice(2));
const query = options.query || options.q;
const searxUrl = options["searx-url"] || options.searxUrl || DEFAULT_SEARX_URL;
const limit = parseNumber(options.limit, DEFAULT_LIMIT);
const fetchLimit = parseNumber(options["fetch-limit"], DEFAULT_FETCH_LIMIT);
const timeoutMs = parseNumber(options.timeout, DEFAULT_TIMEOUT);
const maxSentences = parseNumber(options["max-sentences"], DEFAULT_MAX_SENTENCES);
const maxChars = parseNumber(options["max-chars"], DEFAULT_MAX_CHARS);
const shouldFetch = options.fetch === "false" ? false : true;

if (!query) {
  console.error('Usage: bun web-search-summary.ts --query "your query" [--fetch-limit 2] [--max-sentences 3]');
  process.exit(1);
}

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});

turndown.remove(["script", "style", "noscript", "iframe"]);

turndown.addRule("stripEmptyLinks", {
  filter: (node) => node.nodeName === "A" && !(node as HTMLAnchorElement).textContent?.trim(),
  replacement: () => "",
});

function selectMain(document: Document) {
  return (
    document.querySelector("article") ||
    document.querySelector("main") ||
    document.querySelector("[role='main']") ||
    document.body ||
    document.documentElement
  );
}

async function fetchJson(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} from ${url}`);
  }
  return response.json();
}

async function fetchWithTimeout(url: string, timeout: number) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, { signal: controller.signal, redirect: "follow" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.text();
  } finally {
    clearTimeout(timer);
  }
}

function htmlToMarkdown(html: string) {
  const { document } = parseHTML(html);
  const main = selectMain(document);
  return turndown.turndown(main);
}

function summarizeMarkdown(markdown: string) {
  const cleaned = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/\[[^\]]+\]\([^\)]+\)/g, (match) => match.replace(/\[(.*?)\]\(.*?\)/g, "$1"))
    .replace(/[#>*_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleaned) return "";

  const sentences = cleaned.split(/(?<=[.!?])\s+/g).filter(Boolean);
  const selected = sentences.slice(0, maxSentences).join(" ");
  if (selected.length <= maxChars) return selected;
  return selected.slice(0, maxChars).trim() + "…";
}

async function run() {
  const params = new URLSearchParams({ q: query, format: "json" });
  const searchUrl = `${searxUrl}?${params.toString()}`;
  const data = (await fetchJson(searchUrl)) as SearxResponse;

  const results: SearchResult[] = (data.results || [])
    .slice(0, limit)
    .map((item) => ({
      url: item.url,
      title: item.title,
      content: item.content,
    }));

  if (shouldFetch) {
    const fetchTargets = results.slice(0, fetchLimit);
    for (const item of fetchTargets) {
      try {
        const html = await fetchWithTimeout(item.url, timeoutMs);
        const markdown = htmlToMarkdown(html);
        item.content = markdown.trim();
        item.summary = summarizeMarkdown(item.content);
      } catch (err) {
        item.summary = `Failed to fetch: ${err instanceof Error ? err.message : String(err)}`;
      }
    }
  }

  console.log(
    JSON.stringify(
      {
        query,
        searxUrl,
        limit,
        fetch: shouldFetch,
        maxSentences,
        maxChars,
        results,
      },
      null,
      2
    )
  );
}

run().catch((err) => {
  console.error(err.message || String(err));
  process.exit(1);
});
