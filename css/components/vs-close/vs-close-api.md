# VIS Component API — vs-close

- **Component Type:** Dependent Primitive Component (uses `vs-icon` internally)

## Component Name
- `vs-close`

## Component Anatomy
- `vs-close` — root interactive close control rendered as a semantic button element with `role="button"`, `aria-label="Close"`, keyboard activation, and support for all states.
- `vs-close__icon` — wraps the `vs-icon` primitive that renders the close glyph. Icon sizing and color are controlled through component tokens and modifiers.

## Variants (BEM Modifiers)
- Visual: `vs-close--default`, `vs-close--primary`, `vs-close--inverse`, `vs-close--muted`, `vs-close--danger`
- Shape: `vs-close--round` (default), `vs-close--square`, `vs-close--soft`
- Size: `vs-close--sm`, `vs-close--md` (default), `vs-close--lg`

## Component States
- `.is-hovered` — applied on pointer hover to reflect hover visuals.
- `.is-active` — applied while pressed/active to show active feedback.
- `.is-focus-visible` — applied when the control has focus-visible to render the focus ring.
- `.is-disabled` — applied when the control is disabled; suppresses interactions and lowers emphasis.

## Responsive Behavior
- No layout-specific responsive behavior required; component scales via token-based sizing. Ensure touch targets meet minimum size through tokenized dimensions.
