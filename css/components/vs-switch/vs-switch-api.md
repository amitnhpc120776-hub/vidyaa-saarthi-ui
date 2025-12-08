# VIS Component API — vs-switch

## Component Name
- **vs-switch**

## Purpose
- A toggle control for binary on/off choices with customizable styles, colors, shapes, sizes, and label layouts while maintaining accessible state synchronization.

## Anatomy / Structure
- **vs-switch** — Root wrapper that holds the control, applies modifiers, and manages layout spacing.
- **vs-switch__input** — Native checkbox input with switch role for accessibility and form integration.
- **vs-switch__track** — Visual track representing the switch background and housing the thumb.
- **vs-switch__thumb** — Movable thumb that slides to indicate on/off position.
- **vs-switch__label** — Optional text label describing the toggle action; can be hidden via layout modifiers.

## Variants (BEM Modifiers)
- **vs-switch--default / vs-switch--solid / vs-switch--outline / vs-switch--subtle / vs-switch--reverse** — Style treatments for the control surface and label order.
- **vs-switch--sm / vs-switch--md / vs-switch--lg** — Size variants.
- **vs-switch--primary / vs-switch--secondary / vs-switch--success / vs-switch--warning / vs-switch--danger / vs-switch--info / vs-switch--neutral** — Color semantics for track and thumb states.
- **vs-switch--checked / vs-switch--unchecked** — Visual states reflecting toggle position.
- **vs-switch--disabled** — Disabled styling and interaction blocking.
- **vs-switch--inline / vs-switch--block / vs-switch--no-label** — Layout options for alignment and label visibility.
- **vs-switch--pill / vs-switch--rounded / vs-switch--square** — Corner geometry for track and thumb.

## Component States
- **.is-checked** — Applied when the input is checked; thumb shifts and colors adjust to the active scheme.
- **.is-unchecked** — Applied when the input is unchecked; reflects the inactive state.
- **.is-disabled** — Matches disabled input; dims visuals and disables pointer interactions.
- **.is-focused** — Indicates keyboard focus for accessible focus treatment.
- **.is-active** — Indicates active pointer press for subtle feedback.

## Responsive Behavior
- Layout defaults to inline alignment; `vs-switch--block` stacks content for narrow screens. Spacing and typography rely on tokens to remain mobile-first without breakpoint overrides.
