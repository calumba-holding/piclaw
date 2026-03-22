import { afterEach, expect, test } from 'bun:test';

const PreviousDOMParser = globalThis.DOMParser;

function decodeEntities(value: string) {
  return String(value || '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

afterEach(() => {
  if (PreviousDOMParser === undefined) {
    delete globalThis.DOMParser;
  } else {
    globalThis.DOMParser = PreviousDOMParser;
  }
});

test('prepareMarkdownSource preserves blockquote markers while escaping raw tags', async () => {
  globalThis.DOMParser = class {
    parseFromString(input: string) {
      return { documentElement: { textContent: decodeEntities(input) } } as any;
    }
  } as any;

  const { prepareMarkdownSource } = await import('../../web/src/markdown.ts');
  const { safeHtml } = prepareMarkdownSource('> `/login` is still a work in progress <script>alert(1)</script>');

  expect(safeHtml).toContain('> `/login` is still a work in progress');
  expect(safeHtml).toContain('&lt;script>alert(1)&lt;/script>');
  expect(safeHtml).not.toContain('&gt; `/login`');
});
