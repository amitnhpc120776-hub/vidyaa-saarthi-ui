# VIS Component API — vs-checkbox

## Component Type
Dependent Primitive Component

## Component Name
vs-checkbox

## Purpose
A token-driven checkbox control for binary or mixed selections that supports VIS styling, Bootstrap-like behavior, and optional descriptive content.

## Anatomy / Structure
- **vs-checkbox** — Root wrapper that aligns the control, label, and description.
- **vs-checkbox__input** — Native `<input type="checkbox">` element that exposes the form value and accessibility hooks.
- **vs-checkbox__control** — Visual checkbox box that reflects checked, indeterminate, focus, success, error, and disabled states.
- **vs-checkbox__icon-check** — Optional checkmark icon rendered with `vs-icon` when the checkbox is checked.
- **vs-checkbox__icon-indeterminate** — Optional horizontal bar icon rendered with `vs-icon` when the checkbox is indeterminate.
- **vs-checkbox__label** — Optional text label describing the checkbox.
- **vs-checkbox__description** — Optional supporting text for additional guidance.

## Variants (BEM Modifiers)
### Visual Variants
- vs-checkbox--default
- vs-checkbox--primary
- vs-checkbox--secondary
- vs-checkbox--success
- vs-checkbox--warning
- vs-checkbox--danger
- vs-checkbox--info

### Size Variants
- vs-checkbox--sm
- vs-checkbox--md (default)
- vs-checkbox--lg

### Layout Variants
- vs-checkbox--inline
- vs-checkbox--block

## Component States
- .is-checked — Applied when the checkbox value is true.
- .is-indeterminate — Applied when the checkbox is in a mixed state.
- .is-disabled — Indicates the control cannot be interacted with.
- .is-readonly — Indicates the value is fixed; pointer events suppressed while remaining focusable.
- .is-error — Validation or error state.
- .is-success — Validation success state.
- .is-focus-visible — Applied when the control receives accessible focus (keyboard/assistive tech).

## Responsive Behavior
- Inline vs. block layout responds naturally to container width. No additional responsive breakpoints required beyond size modifiers.
