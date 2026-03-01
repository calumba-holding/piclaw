export interface PreviewLinesOptions {
  maxLines: number;
  maxLineLength?: number;
  includeOmittedLine?: boolean;
}

export function normalizeLineEndings(text: string): string {
  return (text || "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}

export function splitLines(text: string): string[] {
  const normalized = normalizeLineEndings(text);
  if (normalized === "") return [];
  return normalized.split("\n");
}

export function truncateLine(line: string, maxLength?: number): string {
  if (!maxLength || maxLength <= 0) return line;
  if (line.length <= maxLength) return line;
  return `${line.slice(0, maxLength)}…`;
}

export function buildPreviewLines(
  input: string | string[],
  options: PreviewLinesOptions
): { preview: string; omittedLines: number } {
  const lines = Array.isArray(input) ? input : splitLines(input);
  if (!lines.length) return { preview: "", omittedLines: 0 };

  const maxLines = Math.max(0, options.maxLines ?? lines.length);
  const previewLines = lines.slice(0, maxLines).map((line) => truncateLine(line, options.maxLineLength));
  const omittedLines = Math.max(lines.length - maxLines, 0);
  if (options.includeOmittedLine && omittedLines > 0) {
    previewLines.push(`… (${omittedLines} more lines)`);
  }
  return { preview: previewLines.join("\n"), omittedLines };
}

export function countSoftLines(lines: string[], maxCharsPerLine: number): number {
  if (!lines.length) return 0;
  return lines.reduce((acc, line) => acc + countSoftLine(line, maxCharsPerLine), 0);
}

export function countSoftLine(line: string, maxCharsPerLine: number): number {
  if (!line) return 1;
  if (!maxCharsPerLine || maxCharsPerLine <= 0) return 1;
  return Math.max(1, Math.ceil(line.length / maxCharsPerLine));
}
