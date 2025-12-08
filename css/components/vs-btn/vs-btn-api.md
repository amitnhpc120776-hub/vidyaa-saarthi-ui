# vs-btn — Component API

**Component Type:** Dependent Primitive (reuses vs-icon, vs-spinner)

**Purpose:** Provides the primary interactive control for actions, supporting text, icons, loading feedback, and multiple visual variants within the VIS design system.

## Anatomy / Structure
- `vs-btn` — root button element handling layout, interaction, and state.
- `vs-btn__icon` — optional region containing a `vs-icon` or `vs-spinner` for leading/trailing/icon-only usage.
- `vs-btn__label` — optional text label for the button content.

## Variants (BEM Modifiers)
- Visual: `vs-btn--primary`, `vs-btn--secondary`, `vs-btn--success`, `vs-btn--warning`, `vs-btn--danger`, `vs-btn--info`, `vs-btn--neutral`
- Outline: `vs-btn--outline-primary`, `vs-btn--outline-secondary`, `vs-btn--outline-success`, `vs-btn--outline-warning`, `vs-btn--outline-danger`, `vs-btn--outline-info`, `vs-btn--outline-neutral`
- Ghost / Soft: `vs-btn--ghost`, `vs-btn--light`
- Icon placement: `vs-btn--icon-left`, `vs-btn--icon-right`, `vs-btn--icon-only`
- Sizes: `vs-btn--sm`, `vs-btn--md`, `vs-btn--lg`

## States
- `.is-hover` — hover feedback (visual only; typically driven by `:hover`).
- `.is-focus-visible` — focus-visible treatment for keyboard navigation.
- `.is-active` — active/pressed appearance.
- `.is-loading` — replaces content with `vs-spinner` and disables pointer actions.
- `.is-disabled` — non-interactive, muted appearance.

## Responsive Behavior
- Buttons are inline-flex by default and may stretch to full width via utility or modifier; size and spacing inherit fluid typography tokens. No additional responsive breakpoints are required beyond token-based scaling.
