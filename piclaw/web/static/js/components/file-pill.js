// @ts-nocheck
import { html } from '../vendor/preact-htm.js';

export function FilePill({
  prefix = 'file',
  label,
  title,
  onRemove,
  removeTitle = 'Remove',
}) {
  const pillClass = `${prefix}-file-pill`;
  const nameClass = `${prefix}-file-name`;
  const removeClass = `${prefix}-file-remove`;
  return html`
    <span class=${pillClass} title=${title || label}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
      <span class=${nameClass}>${label}</span>
      ${onRemove && html`
        <button
          class=${removeClass}
          onClick=${(event) => {
            event.preventDefault();
            event.stopPropagation();
            onRemove();
          }}
          title=${removeTitle}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `;
}
