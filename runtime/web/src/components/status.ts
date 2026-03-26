// @ts-nocheck
import { html, useEffect, useState } from '../vendor/preact-htm.js';
import { addToWhitelist, respondToAgentRequest } from '../api.js';
import { renderThinkingMarkdown } from '../markdown.js';
import { getTurnColor } from '../ui/agent-utils.js';
import { getStatusElapsedLabel, isCompactionStatus, resolveStatusPanelTitle } from '../ui/status-duration.js';

const COPY_ICON_SVG = html`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;

/** Preact component: agent status bar with draft/thought/plan panels. */
export function AgentStatus({ status, draft, plan, thought, pendingRequest, intent, extensionPanels = [], pendingPanelActions = new Set(), onExtensionPanelAction, turnId, steerQueued, onPanelToggle, showCorePanels = true, showExtensionPanels = true }) {
    const THOUGHT_MAX_LINES = 8;
    const DRAFT_MAX_LINES = 8;

    const normalizePreview = (value) => {
        if (!value) return { text: '', totalLines: 0, fullText: '' };
        if (typeof value === 'string') {
            const text = value;
            const totalLines = text ? text.replace(/\r\n/g, '\n').split('\n').length : 0;
            return { text, totalLines, fullText: text };
        }
        const text = value.text || '';
        const fullText = value.fullText || value.full_text || text;
        const totalLines = Number.isFinite(value.totalLines)
            ? value.totalLines
            : (fullText ? fullText.replace(/\r\n/g, '\n').split('\n').length : 0);
        return { text, totalLines, fullText };
    };

    const PREVIEW_MAX_CHARS_PER_LINE = 160;

    const stripInternalTags = (value) => String(value || '').replace(/<\/?internal>/gi, '');

    const countSoftLines = (line) => {
        if (!line) return 1;
        return Math.max(1, Math.ceil(line.length / PREVIEW_MAX_CHARS_PER_LINE));
    };

    const truncateLines = (text, maxLines, totalLinesOverride) => {
        const value = (text || '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
        if (!value) {
            const totalLines = Number.isFinite(totalLinesOverride) ? totalLinesOverride : 0;
            return { text: '', omitted: 0, totalLines, visibleLines: 0 };
        }
        const lines = value.split('\n');
        const clipped = lines.length > maxLines ? lines.slice(0, maxLines).join('\n') : value;
        const totalLines = Number.isFinite(totalLinesOverride) ? totalLinesOverride : lines.reduce((acc, line) => acc + countSoftLines(line), 0);
        const visibleLines = clipped
            ? clipped.split('\n').reduce((acc, line) => acc + countSoftLines(line), 0)
            : 0;
        const omitted = Math.max(totalLines - visibleLines, 0);
        return { text: clipped, omitted, totalLines, visibleLines };
    };

    const planInfo = normalizePreview(plan);
    const thoughtInfo = normalizePreview(thought);
    const draftInfo = normalizePreview(draft);
    const hasPlan = Boolean(planInfo.text) || planInfo.totalLines > 0;
    const hasThought = Boolean(thoughtInfo.text) || thoughtInfo.totalLines > 0;
    const hasDraft = Boolean(draftInfo.fullText?.trim() || draftInfo.text?.trim());

    const hasCorePanels = Boolean(status || hasDraft || hasPlan || hasThought || pendingRequest || intent);
    const hasExtensionPanels = Array.isArray(extensionPanels) && extensionPanels.length > 0;
    if ((!showCorePanels || !hasCorePanels) && (!showExtensionPanels || !hasExtensionPanels)) return null;

    const [expandedPanels, setExpandedPanels] = useState(new Set());
    const [hoveredSeriesPoint, setHoveredSeriesPoint] = useState(null);
    const [nowMs, setNowMs] = useState(() => Date.now());
    const toggleExpand = (key) =>
        setExpandedPanels(prev => {
            const next = new Set(prev);
            const willExpand = !next.has(key);
            if (willExpand) next.add(key); else next.delete(key);
            if (typeof onPanelToggle === 'function') {
                onPanelToggle(key, willExpand);
            }
            return next;
        });

    // Collapse all panels when a new turn begins
    useEffect(() => {
        setExpandedPanels(new Set());
        setHoveredSeriesPoint(null);
    }, [turnId]);

    const statusIsCompaction = isCompactionStatus(status);
    useEffect(() => {
        if (!statusIsCompaction) return;
        setNowMs(Date.now());
        const timer = setInterval(() => setNowMs(Date.now()), 1000);
        return () => clearInterval(timer);
    }, [statusIsCompaction, status?.started_at, status?.startedAt]);

    const activeTurn = status?.turn_id || turnId;
    const turnColor = getTurnColor(activeTurn);
    const dotClass = steerQueued ? 'turn-dot turn-dot-queued' : 'turn-dot';
    const panelTitle = (label) => label;
    const isLastActivity = Boolean(status?.last_activity || status?.lastActivity);
    const resolveIntentColor = (kind) => kind === 'warning'
        ? '#f59e0b'
        : kind === 'error'
            ? 'var(--danger-color)'
            : kind === 'success'
                ? 'var(--success-color)'
                : turnColor;
    const intentKind = intent?.kind || 'info';
    const intentColor = resolveIntentColor(intentKind);
    const statusIntentColor = resolveIntentColor(status?.kind || (statusIsCompaction ? 'warning' : 'info'));

    let content = '';
    const title = status?.title;
    const statusText = status?.status;
    if (status?.type === 'plan') {
        content = title ? `Planning: ${title}` : 'Planning...';
    } else if (status?.type === 'tool_call') {
        content = title ? `Running: ${title}` : 'Running tool...';
    } else if (status?.type === 'tool_status') {
        content = title ? `${title}: ${statusText || 'Working...'}` : (statusText || 'Working...');
    } else if (status?.type === 'error') {
        content = title || 'Agent error';
    } else {
        content = title || statusText || 'Working...';
    }
    if (isLastActivity) {
        content = 'Last activity just now';
    }

    const renderThinkingPanel = ({ panelTitle, text, fullText, totalLines, maxLines, titleClass, panelKey }) => {
        const isExpanded = expandedPanels.has(panelKey);
        const rawSourceText = fullText || text || '';
        const sourceText = panelKey === 'thought' || panelKey === 'draft'
            ? stripInternalTags(rawSourceText)
            : rawSourceText;
        const isCollapsible = typeof maxLines === 'number';
        const showClose = isExpanded && isCollapsible;
        const truncated = isCollapsible
            ? truncateLines(sourceText, maxLines, totalLines)
            : { text: sourceText || '', omitted: 0, totalLines: Number.isFinite(totalLines) ? totalLines : 0 };
        if (!sourceText && !(Number.isFinite(truncated.totalLines) && truncated.totalLines > 0)) return null;
        const bodyClass = `agent-thinking-body${isCollapsible ? ' agent-thinking-body-collapsible' : ''}`;
        const bodyStyle = isCollapsible ? `--agent-thinking-collapsed-lines: ${maxLines};` : '';
        return html`
            <div
                class="agent-thinking"
                data-expanded=${isExpanded ? 'true' : 'false'}
                data-collapsible=${isCollapsible ? 'true' : 'false'}
                style=${turnColor ? `--turn-color: ${turnColor};` : ''}
            >
                <div class="agent-thinking-title ${titleClass || ''}">
                    ${turnColor && html`<span class=${dotClass} aria-hidden="true"></span>`}
                    ${panelTitle}
                    ${showClose && html`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${panelTitle} panel`}
                            onClick=${() => toggleExpand(panelKey)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${bodyClass}
                    style=${bodyStyle}
                    dangerouslySetInnerHTML=${{ __html: renderThinkingMarkdown(sourceText) }}
                />
                ${!isExpanded && truncated.omitted > 0 && html`
                    <button class="agent-thinking-truncation" onClick=${() => toggleExpand(panelKey)}>
                        ▸ ${truncated.omitted} more lines
                    </button>
                `}
                ${isExpanded && truncated.omitted > 0 && html`
                    <button class="agent-thinking-truncation" onClick=${() => toggleExpand(panelKey)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `;
    };

    const pendingTitle = pendingRequest?.tool_call?.title;
    const pendingMessage = pendingTitle ? `Awaiting approval: ${pendingTitle}` : 'Awaiting approval';
    const compactionElapsedLabel = statusIsCompaction ? getStatusElapsedLabel(status, nowMs) : null;
    const renderIntentPanel = (payload, color, elapsedLabel = null) => {
        const titleText = resolveStatusPanelTitle(payload);

        return html`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${color ? `--turn-color: ${color};` : ''}
                title=${payload?.detail || ''}
            >
                <div class="agent-thinking-title intent">
                    ${color && html`<span class=${dotClass} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${titleText}</span>
                    ${elapsedLabel && html`<span class="agent-status-elapsed">${elapsedLabel}</span>`}
                </div>
                ${payload.detail && html`<div class="agent-thinking-body">${payload.detail}</div>`}
            </div>
        `;
    };

    const projectSeriesPoint = (point, width, height, minValue, maxValue, minRun, maxRun, paddingX = 8, paddingY = 8) => {
        const range = Math.max(maxValue - minValue, 1e-9);
        const innerWidth = Math.max(width - (paddingX * 2), 1);
        const innerHeight = Math.max(height - (paddingY * 2), 1);
        const runSpan = Math.max(maxRun - minRun, 1);
        const x = maxRun === minRun
            ? width / 2
            : paddingX + (((point.run - minRun) / runSpan) * innerWidth);
        const y = paddingY + (innerHeight - (((point.value - minValue) / range) * innerHeight));
        return { x, y };
    };

    const buildLinePath = (points, width, height, minValue, maxValue, minRun, maxRun, paddingX = 8, paddingY = 8) => {
        if (!Array.isArray(points) || points.length === 0) return '';
        return points.map((point, index) => {
            const { x, y } = projectSeriesPoint(point, width, height, minValue, maxValue, minRun, maxRun, paddingX, paddingY);
            return `${index === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`;
        }).join(' ');
    };

    const formatMetricValue = (value, unit = '') => {
        if (!Number.isFinite(value)) return '—';
        const rounded = Math.abs(value) >= 100
            ? value.toFixed(0)
            : value.toFixed(2).replace(/\.0+$/, '').replace(/(\.\d*[1-9])0+$/, '$1');
        return `${rounded}${unit}`;
    };

    const SERIES_COLOR_ANCHORS = [
        'var(--accent-color)',
        'var(--success-color)',
        'var(--warning-color, #f59e0b)',
        'var(--danger-color)',
    ];

    const resolveSeriesColor = (index, total) => {
        const anchors = SERIES_COLOR_ANCHORS;
        if (!Array.isArray(anchors) || anchors.length === 0) return 'var(--accent-color)';
        if (anchors.length === 1 || !Number.isFinite(total) || total <= 1) return anchors[0];
        const clampedIndex = Math.max(0, Math.min(Number.isFinite(index) ? index : 0, total - 1));
        const scaled = (clampedIndex / Math.max(1, total - 1)) * (anchors.length - 1);
        const leftIndex = Math.floor(scaled);
        const rightIndex = Math.min(anchors.length - 1, leftIndex + 1);
        const mixRatio = scaled - leftIndex;
        const left = anchors[leftIndex];
        const right = anchors[rightIndex];
        if (!right || leftIndex === rightIndex || mixRatio <= 0.001) return left;
        if (mixRatio >= 0.999) return right;
        const leftWeight = Math.round((1 - mixRatio) * 1000) / 10;
        const rightWeight = Math.round(mixRatio * 1000) / 10;
        return `color-mix(in oklab, ${left} ${leftWeight}%, ${right} ${rightWeight}%)`;
    };

    const renderCombinedSeriesChart = (seriesList, panelKey = 'autoresearch') => {
        const prepared = Array.isArray(seriesList)
            ? seriesList
                .map((series) => ({
                    ...series,
                    points: Array.isArray(series?.points)
                        ? series.points.filter((point) => Number.isFinite(point?.value) && Number.isFinite(point?.run))
                        : [],
                }))
                .filter((series) => series.points.length > 0)
            : [];
        const normalized = prepared.map((series, index) => ({
            ...series,
            color: resolveSeriesColor(index, prepared.length),
        }));
        if (normalized.length === 0) return null;

        const width = 320;
        const height = 120;
        const allPoints = normalized.flatMap((series) => series.points);
        const values = allPoints.map((point) => point.value);
        const runs = allPoints.map((point) => point.run);
        const minValue = Math.min(...values);
        const maxValue = Math.max(...values);
        const minRun = Math.min(...runs);
        const maxRun = Math.max(...runs);

        return html`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${normalized.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${width} ${height}`} preserveAspectRatio="none" aria-hidden="true">
                        ${normalized.map((series) => html`
                            <g key=${series?.key || series?.label}>
                                <path
                                    class="agent-series-chart-line"
                                    d=${buildLinePath(series.points, width, height, minValue, maxValue, minRun, maxRun)}
                                    style=${`--agent-series-color: ${series.color};`}
                                ></path>
                            </g>
                        `)}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${normalized.flatMap((series) => {
                            const unit = typeof series?.unit === 'string' ? series.unit : '';
                            const seriesKey = series?.key || series?.label || 'series';
                            return series.points.map((point, pointIndex) => {
                                const projected = projectSeriesPoint(point, width, height, minValue, maxValue, minRun, maxRun);
                                return html`
                                    <button
                                        key=${`${seriesKey}-point-${pointIndex}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${series.color}; left:${(projected.x / width) * 100}%; top:${(projected.y / height) * 100}%;`}
                                        onMouseEnter=${() => setHoveredSeriesPoint({
                                            panelKey,
                                            seriesKey,
                                            run: point.run,
                                            value: point.value,
                                            unit,
                                        })}
                                        onMouseLeave=${() => setHoveredSeriesPoint((prev) => prev?.panelKey === panelKey ? null : prev)}
                                        onFocus=${() => setHoveredSeriesPoint({
                                            panelKey,
                                            seriesKey,
                                            run: point.run,
                                            value: point.value,
                                            unit,
                                        })}
                                        onBlur=${() => setHoveredSeriesPoint((prev) => prev?.panelKey === panelKey ? null : prev)}
                                        aria-label=${`${series?.label || 'Series'} ${formatMetricValue(point.value, unit)} at run ${point.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `;
                            });
                        })}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${normalized.map((series) => {
                        const latest = series.points[series.points.length - 1]?.value;
                        const unit = typeof series?.unit === 'string' ? series.unit : '';
                        const seriesKey = series?.key || series?.label || 'series';
                        const hovered = hoveredSeriesPoint?.panelKey === panelKey && hoveredSeriesPoint?.seriesKey === seriesKey
                            ? hoveredSeriesPoint
                            : null;
                        return html`
                            <div key=${`${seriesKey}-legend`} class=${`agent-series-legend-item${hovered ? ' is-hovered' : ''}`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${series.color};`}></span>
                                <span class="agent-series-legend-label">${series?.label || 'Series'}</span>
                                ${hovered && html`<span class="agent-series-legend-run">run ${hovered.run}</span>`}
                                <span class="agent-series-legend-value">${formatMetricValue(hovered ? hovered.value : latest, hovered?.unit || unit)}</span>
                            </div>
                        `;
                    })}
                </div>
            </div>
        `;
    };

    const renderExtensionPanel = (panel) => {
        if (!panel) return null;
        const panelKey = typeof panel?.key === 'string' ? panel.key : `panel-${Math.random()}`;
        const isExpanded = expandedPanels.has(panelKey);
        const titleText = panel?.title || 'Extension status';
        const collapsedText = panel?.collapsed_text || '';
        const stateLabel = String(panel?.state || '').replace(/[-_]+/g, ' ').replace(/^./, (match) => match.toUpperCase());
        const color = resolveIntentColor(
            panel?.state === 'completed'
                ? 'success'
                : panel?.state === 'failed'
                    ? 'error'
                    : panel?.state === 'stopped'
                        ? 'warning'
                        : 'info'
        );
        const detailText = typeof panel?.detail_markdown === 'string' ? panel.detail_markdown.trim() : '';
        const lastRunText = typeof panel?.last_run_text === 'string' ? panel.last_run_text.trim() : '';
        const tmuxCommand = typeof panel?.tmux_command === 'string' ? panel.tmux_command.trim() : '';
        const series = Array.isArray(panel?.series) ? panel.series : [];
        const actions = Array.isArray(panel?.actions) ? panel.actions : [];

        const hasDetailColumn = Boolean(detailText || tmuxCommand);
        const isExpandable = Boolean(detailText || series.length > 0 || tmuxCommand);
        const collapsedTooltip = [titleText, collapsedText].filter(Boolean).join(' — ');

        return html`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${isExpanded ? 'true' : 'false'}
                style=${color ? `--turn-color: ${color};` : ''}
                title=${!isExpanded ? (collapsedTooltip || titleText) : ''}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${() => (isExpandable ? toggleExpand(panelKey) : null)}
                    >
                        ${color && html`<span class=${dotClass} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${titleText}</span>
                        ${collapsedText && html`<span class="agent-thinking-title-meta">${collapsedText}</span>`}
                    </button>
                    ${(actions.length > 0 || (isExpandable && !isExpanded)) && html`
                        <div class="agent-thinking-tools-inline">
                            ${actions.length > 0 && html`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${actions.map((action) => {
                                        const pendingKey = `${panelKey}:${action?.key || ''}`;
                                        const pending = pendingPanelActions?.has?.(pendingKey);
                                        return html`
                                            <button
                                                key=${pendingKey}
                                                class=${`agent-thinking-action-btn${action?.tone === 'danger' ? ' danger' : ''}`}
                                                onClick=${() => onExtensionPanelAction?.(panel, action)}
                                                disabled=${Boolean(pending)}
                                            >
                                                ${pending ? 'Working…' : (action?.label || 'Run')}
                                            </button>
                                        `;
                                    })}
                                </div>
                            `}
                            ${isExpandable && !isExpanded && html`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${titleText}`}
                                    title="Expand details"
                                    onClick=${() => toggleExpand(panelKey)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="4 10 8 6 12 10"></polyline>
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${isExpandable && isExpanded && html`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${titleText}`}
                        title="Collapse details"
                        onClick=${() => toggleExpand(panelKey)}
                    >
                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="4 6 8 10 12 6"></polyline>
                        </svg>
                    </button>
                `}
                ${isExpanded && html`
                    <div class=${`agent-thinking-autoresearch-layout${hasDetailColumn ? '' : ' chart-only'}`}>
                        ${hasDetailColumn && html`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${detailText && html`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{ __html: renderThinkingMarkdown(detailText) }}
                                    />
                                `}
                                ${tmuxCommand && html`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${tmuxCommand}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${() => onExtensionPanelAction?.(panel, { key: 'copy_tmux', action_type: 'autoresearch.copy_tmux', label: 'Copy tmux' })}
                                            >
                                                ${COPY_ICON_SVG}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${series.length > 0
                            ? html`
                                <div class="agent-series-chart-stack">
                                    ${renderCombinedSeriesChart(series, panelKey)}
                                    ${lastRunText && html`<div class="agent-series-chart-note">${lastRunText}</div>`}
                                </div>
                            `
                            : html`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `;
    };

    return html`
        <div class="agent-status-panel">
            ${showCorePanels && intent && renderIntentPanel(intent, intentColor)}
            ${showExtensionPanels && Array.isArray(extensionPanels) && extensionPanels.map((panel) => renderExtensionPanel(panel))}
            ${showCorePanels && status?.type === 'intent' && renderIntentPanel(status, statusIntentColor, compactionElapsedLabel)}
            ${showCorePanels && pendingRequest && html`
                <div class="agent-status agent-status-request" aria-live="polite" style=${turnColor ? `--turn-color: ${turnColor};` : ''}>
                    <span class=${dotClass} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${pendingMessage}</span>
                </div>
            `}
            ${showCorePanels && hasPlan && renderThinkingPanel({
                panelTitle: panelTitle('Planning'),
                text: planInfo.text,
                fullText: planInfo.fullText,
                totalLines: planInfo.totalLines,
                panelKey: 'plan',
            })}
            ${showCorePanels && hasThought && renderThinkingPanel({
                panelTitle: panelTitle('Thoughts'),
                text: thoughtInfo.text,
                fullText: thoughtInfo.fullText,
                totalLines: thoughtInfo.totalLines,
                maxLines: THOUGHT_MAX_LINES,
                titleClass: 'thought',
                panelKey: 'thought',
            })}
            ${showCorePanels && hasDraft && renderThinkingPanel({
                panelTitle: panelTitle('Draft'),
                text: draftInfo.text,
                fullText: draftInfo.fullText,
                totalLines: draftInfo.totalLines,
                maxLines: DRAFT_MAX_LINES,
                titleClass: 'thought',
                panelKey: 'draft',
            })}
            ${showCorePanels && status && status?.type !== 'intent' && html`
                <div class=${`agent-status${isLastActivity ? ' agent-status-last-activity' : ''}${status?.type === 'error' ? ' agent-status-error' : ''}`} aria-live="polite" style=${turnColor ? `--turn-color: ${turnColor};` : ''}>
                    ${turnColor && html`<span class=${dotClass} aria-hidden="true"></span>`}
                    ${status?.type === 'error' ? html`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>` : (!isLastActivity && html`<div class="agent-status-spinner"></div>`)}
                    <span class="agent-status-text">${content}</span>
                </div>
            `}
        </div>
    `;
}

/** Preact component: modal for agent confirmation/input requests. */
export function AgentRequestModal({ request, onRespond }) {
    if (!request) return null;

    const { request_id, tool_call, options, chat_jid } = request;
    const title = tool_call?.title || 'Agent Request';
    const kind = tool_call?.kind || 'other';

    // Extract command and explanation from tool call metadata
    const rawInput = tool_call?.rawInput || {};
    const command = rawInput.command || (rawInput.commands && rawInput.commands[0]) || null;
    const diff = rawInput.diff || null;
    const fileName = rawInput.fileName || rawInput.path || null;
    const explanation = tool_call?.description || rawInput.description || rawInput.explanation || null;
    const locations = Array.isArray(tool_call?.locations) ? tool_call.locations : [];
    const locationPaths = locations
        .map((loc) => loc?.path)
        .filter((path) => Boolean(path));
    const uniquePaths = Array.from(new Set([fileName, ...locationPaths].filter(Boolean)));

    console.log('AgentRequestModal:', { request_id, tool_call, options });

    const handleResponse = async (outcome) => {
        try {
            await respondToAgentRequest(request_id, outcome, chat_jid || null);
            onRespond();
        } catch (e) {
            console.error('Failed to respond to agent request:', e);
        }
    };

    const handleAlwaysAllow = async () => {
        try {
            // Add to whitelist with the exact title
            await addToWhitelist(title, `Auto-approved: ${title}`);
            // Then approve this request
            await respondToAgentRequest(request_id, 'approved', chat_jid || null);
            onRespond();
        } catch (e) {
            console.error('Failed to add to whitelist:', e);
        }
    };

    // ACP options format: { optionId, name, kind }
    const hasOptions = options && options.length > 0;

    return html`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${title}</div>
                </div>
                ${(explanation || command || diff || uniquePaths.length > 0) && html`
                    <div class="agent-request-body">
                        ${explanation && html`
                            <div class="agent-request-description">${explanation}</div>
                        `}
                        ${uniquePaths.length > 0 && html`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${uniquePaths.map((path, idx) => html`<li key=${idx}>${path}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${command && html`
                            <pre class="agent-request-command">${command}</pre>
                        `}
                        ${diff && html`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${diff}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${hasOptions ? (
                        options.map(opt => html`
                            <button 
                                key=${opt.optionId || opt.id || String(opt)}
                                class="agent-request-btn ${opt.kind === 'allow_once' || opt.kind === 'allow_always' ? 'primary' : ''}"
                                onClick=${() => handleResponse(opt.optionId || opt.id || opt)}
                            >
                                ${opt.name || opt.label || opt.optionId || opt.id || String(opt)}
                            </button>
                        `)
                    ) : html`
                        <button class="agent-request-btn primary" onClick=${() => handleResponse('approved')}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${() => handleResponse('denied')}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${handleAlwaysAllow}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `;
}

/** Preact component: SSE connection status indicator. */
export function ConnectionStatus({ status }) {
    if (status === 'connected') return null;

    return html`
        <div class="connection-status ${status}">
            ${status === 'disconnected' ? 'Reconnecting' : status}
        </div>
    `;
}
