# v1.5.1 — The Machinery Permits, Briefly, to Be Understood

There is no triumph in this release. There is only a temporary reduction in confusion.

For some time, the documents had fallen into estrangement. Word files arrived without dignity. PowerPoint decks dissolved into inert surfaces. Spreadsheets presented themselves at scales chosen by no sane intelligence. PDFs behaved like sealed rooms in abandoned state buildings. The queue, under reload, betrayed sequence and memory.

This patch does not cure the sickness. It adjusts the lighting so that the sickness can be seen more clearly.

## Highlights

### Office viewers have been stabilized
The Office viewing path has been reworked so that documents no longer depend on the old, brittle secure-context path.

Improved handling for:
- `.docx`
- `.xls`
- `.xlsx`
- `.pptx`

### Viewer panes are more coherent
Specialized preview and tab viewers now behave more consistently across file types, with clearer open-in-tab flows and fewer pane-specific surprises.

### PDFs are less dishonest
PDFs are now served with the correct MIME type, and the PDF pane uses a dedicated wrapper with a same-origin fallback path when inline preview is unavailable.

### The queue remains under suspicion
The queue issue remains open. After reload or reconnect, normal messages may still skip ahead of queued follow-ups. This has been folded into the active queue work.

## Fixed

### Office viewer migration and stabilization
- Replaced the old workspace-local Office viewer override with the packaged Office viewer path.
- Loaded the packaged Office viewer as a bundled extension during startup so the route exists reliably after install/reload.
- Disabled aggressive caching on the Office viewer route to prevent stale iframe assets from persisting after updates.
- Corrected residual references to the previous secure-context-dependent Office path.

### Word documents
- Restored reliable `.docx` rendering in the pane-hosted Office viewer.
- Added zoom controls and fit-to-pane behavior.
- Corrected a faulty DOCX fit calculation that could produce absurd scaling values.

### Excel and legacy spreadsheet formats
- Restored `.xls` and `.xlsx` viewing through the embedded Office viewer.
- Fixed spreadsheet zoom so that it scales the rendered sheet itself rather than merely updating the toolbar label.
- Added working zoom, fit, and reset controls.
- Refined CSV and adjacent tabular viewing behavior to feel more continuous with the rest of the pane system.

### PowerPoint
- Fixed a missing browser dependency required by `PptxViewJS`.
- Vendored and loaded `chart.js`, allowing PowerPoint rendering to initialize correctly.
- Added zoom and fit-to-pane controls for presentations.
- Verified that non-empty PPTX fixtures render and navigate correctly.

### PDF delivery and pane behavior
- Restored correct MIME handling for PDFs served from workspace raw routes.
- Reintroduced a dedicated PDF viewer wrapper route for pane-hosted rendering.
- Added same-origin-friendly embedding behavior and a clearer fallback path when inline preview is unavailable.

### Viewer embedding and route security
- Corrected iframe-related response headers so same-origin viewer panes can load their content.
- Fixed `frame-ancestors` and related response behavior for viewer routes and raw workspace assets used by embedded panes.

### CSV viewer polish
- Made the CSV search box theme-aware in dark mode.
- Improved toolbar contrast and dark-mode input styling.

### draw.io config delivery
- Made draw.io `PreConfig.js` and `PostConfig.js` uncached so self-hosted configuration changes take effect immediately after reload.

## Improvements

### Zoom and fit controls in Office panes
The Office viewer now exposes controls for:
- zoom out
- zoom in
- fit to pane
- 1:1

These controls are available across Word, Excel, and PowerPoint viewer flows.

### Better cache discipline
Several failures turned out not to be failures of logic, but failures of time: old assets remained in the browser. This patch tightens cache behavior so the running code is more likely to be the code the user actually experiences.

## Known limitations

### PDFs remain subject to the character of the browser
Some browser contexts still resist embedded PDF rendering. When this occurs, the viewer now offers a fallback instead of a blank pane.

### Blank templates remain blank
Some minimal Office fixtures are nearly empty by nature. They may still appear broken when in fact they contain almost nothing.

### The queue remains compromised
The queue issue is not closed. Reload and reconnect can still damage visible ordering and backend-authoritative expectations.

### draw.io PDF export remains unfinished
There is still no complete local PDF export path for draw.io. The matter remains tracked as follow-up work.

## In summary

This patch does not celebrate. It restores documents from states of partial disappearance. It grants scale where there was only indifference. It corrects names, headers, routes, and dependencies — small acts of clerical mercy in a universe that has no mercy at all.

The system continues.
The panes open.
The files appear.
The queue, however, still dreams of chaos.
