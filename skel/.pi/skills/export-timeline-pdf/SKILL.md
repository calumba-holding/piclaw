---
name: export-timeline-pdf
description: Export a chat timeline to a PDF using the web UI renderer and Playwright.
distribution: private
---

# Export timeline PDF

Export chat history from the message database (`PICLAW_STORE/messages.db`) into a PDF using the web UI CSS and Markdown renderer.

## Steps

1. Export the default chat timeline:
   ```bash
   bun /workspace/.pi/skills/export-timeline-pdf/export-timeline-pdf.ts --chat web:default
   ```

2. Export a date range:
   ```bash
   bun /workspace/.pi/skills/export-timeline-pdf/export-timeline-pdf.ts --chat web:default \
     --from "2026-03-01T00:00:00Z" --to "2026-03-05T23:59:59Z"
   ```

3. Use the dark theme:
   ```bash
   bun /workspace/.pi/skills/export-timeline-pdf/export-timeline-pdf.ts --chat web:default --theme dark
   ```

## Notes

- Requires Playwright dependencies at `/workspace/scripts/playwright` (used to render HTML to PDF).
- Writes an HTML sidecar next to the PDF for inspection.
- Set `--embed-images false` or adjust `--max-image-bytes` to control embedded media.
- Data source path defaults to `${PICLAW_STORE}/messages.db` (or `/workspace/.piclaw/store/messages.db` if unset).
