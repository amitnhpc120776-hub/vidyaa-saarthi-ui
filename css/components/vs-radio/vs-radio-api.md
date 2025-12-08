# VIS Component API — vs-radio

## Component Type
Dependent Primitive Component

## Component Name
vs-radio

## Purpose
A token-driven radio control for mutually exclusive selections that mirrors Bootstrap 5.3 flexibility while adhering to the VIS Design System.

## Anatomy / Structure
- **vs-radio** — Root wrapper aligning the control, label, and optional description.
- **vs-radio__input** — Native `<input type="radio">` providing the accessible form value.
- **vs-radio__control** — Visual radio circle reflecting checked, focus, success, error, and disabled states.
- **vs-radio__label** — Optional text label describing the option.
- **vs-radio__description** — Optional supporting text for additional guidance.

## Variants (BEM Modifiers)
### Visual Variants
- vs-radio--default
- vs-radio--primary
- vs-radio--secondary
- vs-radio--success
- vs-radio--warning
- vs-radio--danger
- vs-radio--info

### Size Variants
- vs-radio--sm
- vs-radio--md (default)
- vs-radio--lg

### Layout Variants
- vs-radio--inline
- vs-radio--block

## Component States
- .is-checked — Applied when the radio is selected.
- .is-disabled — Indicates the control cannot be interacted with.
- .is-readonly — Indicates the value is fixed; pointer events suppressed while remaining focusable.
- .is-error — Validation or error state.
- .is-success — Validation success state.
- .is-focus-visible — Applied when the control receives accessible focus (keyboard/assistive tech).

## Responsive Behavior
- Inline vs. block layout responds naturally to container width; no additional breakpoints are required beyond the size modifiers.
