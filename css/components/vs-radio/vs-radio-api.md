# VIS Component API — vs-radio

## Component Name
- **vs-radio**

## Purpose
- A versatile radio control for single-selection groups supporting multiple styles, colors, sizes, and label layouts while maintaining accessible state and focus handling.

## Anatomy / Structure
- **vs-radio** — Root wrapper label that ties click area, state, and modifiers.
- **vs-radio__input** — Native radio input participating in forms and holding the checked value.
- **vs-radio__control** — Visual control (outer ring + inner dot) reflecting selection and focus states.
- **vs-radio__label** — Optional text label describing the choice; can be hidden or rearranged with layout modifiers.

## Variants (BEM Modifiers)
- **vs-radio--default** — Standard style treatment (base outline).
- **vs-radio--solid** — Filled control base with stronger contrast.
- **vs-radio--outline** — Emphasized border-focused styling.
- **vs-radio--reverse** — Places the label before the control.
- **vs-radio--sm / vs-radio--md / vs-radio--lg** — Size variants.
- **vs-radio--primary / vs-radio--secondary / vs-radio--success / vs-radio--warning / vs-radio--danger / vs-radio--info / vs-radio--neutral** — Color variants.
- **vs-radio--checked / vs-radio--unchecked** — Explicit state modifiers mirroring input state.
- **vs-radio--disabled** — Disabled appearance and interaction lock.
- **vs-radio--inline / vs-radio--block / vs-radio--no-label** — Layout modifiers controlling alignment and label visibility.
- **vs-radio--circle / vs-radio--rounded / vs-radio--square** — Shape modifiers for control geometry.

## Component States
- **.is-focused** — Input has keyboard focus; shows focus ring.
- **.is-active** — Pointer is pressed on the control.
- **.is-checked** — Mirrors checked state for styling hooks.
- **.is-disabled** — Mirrors disabled state and blocks interaction.

## Responsive Behavior
- Inline variant naturally wraps; block variant stacks full width. Token-based sizing keeps touch targets adequate on mobile without additional breakpoints.
