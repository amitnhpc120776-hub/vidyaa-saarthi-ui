# VS Tooltip — Component API (Step 1)

## Component Name
- **vs-tooltip**

## Component Anatomy (BEM)
- **vs-tooltip** — Root wrapper that pairs the trigger with its tooltip panel.
- **vs-tooltip__trigger** — Interactive element that opens or toggles the tooltip on hover, focus, click, or manual control.
- **vs-tooltip__panel** — Layered container that holds tooltip content; positioned relative to trigger.
- **vs-tooltip__content** — Content wrapper for text or HTML inside the tooltip.
- **vs-tooltip__arrow** — Directional arrow indicator aligned to placement (optional based on variant).

## Variants (BEM Modifiers)
### Placement Variants
- `vs-tooltip--top`
- `vs-tooltip--bottom`
- `vs-tooltip--start`
- `vs-tooltip--end`
- `vs-tooltip--auto`

### Trigger Variants
- `vs-tooltip--hover`
- `vs-tooltip--focus`
- `vs-tooltip--click`
- `vs-tooltip--manual`

### Theme / Style Variants
- `vs-tooltip--default`
- `vs-tooltip--light`
- `vs-tooltip--dark`
- `vs-tooltip--bordered`

### Arrow Variants
- `vs-tooltip--with-arrow`
- `vs-tooltip--no-arrow`

### Content Variants
- `vs-tooltip--text`
- `vs-tooltip--html`

### Behavior Variants
- `vs-tooltip--dismiss-on-blur`
- `vs-tooltip--persistent`
- `vs-tooltip--no-flip`

### Size Variants
- `vs-tooltip--sm`
- `vs-tooltip--md` (default)
- `vs-tooltip--lg`

## Component States
- `.is-visible` — Applied to `vs-tooltip` when the tooltip panel is shown.
- `.is-hidden` — Applied when the tooltip is programmatically hidden while retained in the DOM.
- `.is-disabled` — Optional state when the trigger should ignore interactions.
- `.is-hover` — Applied when visibility is driven by hover interactions.
- `.is-focus` — Applied when visibility is driven by focus interactions.
- `.is-click` — Applied when visibility is toggled by click.

## Accessibility & ARIA
- `role="tooltip"` on `vs-tooltip__panel`.
- `aria-hidden` toggled between `true`/`false` on `vs-tooltip__panel` based on visibility.
- Trigger receives `aria-describedby` referencing the tooltip panel `id`.
- Manage focus trapping only if needed for interactive HTML content variant; default allows normal blur.

## Responsive Behavior
- Mobile-first positioning; placements adjust with available space.
- Use viewport-aware offsets and max-width to avoid overflow on small screens.
