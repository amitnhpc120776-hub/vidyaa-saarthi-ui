# VIS Component API — vs-btn

## Component Name
- **vs-btn**

## Purpose
- A reusable action control used to trigger primary, secondary, or contextual operations across the VIS interface, supporting labels, icons, loading feedback, and toggle behavior.

## Anatomy / Structure
- **vs-btn** — Root interactive element (button or link) wrapping all content.
- **vs-btn__content** — Flex container aligning icon, label, and badges.
- **vs-btn__icon** — Optional icon wrapper for decorative or assistive glyphs.
- **vs-btn__icon--leading** — Optional modifier to position icon before the label.
- **vs-btn__icon--trailing** — Optional modifier to position icon after the label.
- **vs-btn__label** — Text label describing the action.
- **vs-btn__spinner** — Optional loading indicator shown during asynchronous actions.
- **vs-btn__badge** — Optional small badge for counts or statuses.

## Variants (BEM Modifiers)
- **vs-btn--primary** — Default primary action styling.
- **vs-btn--secondary** — Secondary emphasis.
- **vs-btn--tertiary** — Neutral surface button.
- **vs-btn--outline** — Transparent button with outlined border.
- **vs-btn--ghost** — Minimal button with no chrome until hover.
- **vs-btn--success** — Positive/confirmation actions.
- **vs-btn--danger** — Destructive or critical actions.
- **vs-btn--icon-only** — Square icon-only button with equal padding.
- **vs-btn--block** — Full-width button for dense layouts.
- **vs-btn--sm / vs-btn--md / vs-btn--lg** — Size variants (small, medium/default, large).

## Component States
- **.is-hover** — Hover feedback (visual only; typically applied via CSS pseudo-class).
- **.is-active** — Pressed or toggled state.
- **.is-focused** — Keyboard focus-visible treatment.
- **.is-disabled** — Disabled state; non-interactive (also when `disabled` attribute is present).
- **.is-loading** — Loading state; shows spinner, suppresses icon/label interaction, disables clicks.

## Responsive Behavior
- Inline by default; may expand to block layout using **vs-btn--block**. Size variants use fluid spacing tokens and typography scales; no additional breakpoint-specific rules required beyond inheriting container width.
