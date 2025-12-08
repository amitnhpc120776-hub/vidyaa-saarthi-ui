# VIS Component API — vs-switch

## Component Type
Dependent Primitive Component (reuses native input behaviors and VIS tokens)

## Component Name
vs-switch

## Component Anatomy (BEM)
- **vs-switch** — root container wrapping the toggle control and associated content.
- **vs-switch__control** — semantic form control using `<input type="checkbox">` for state management and accessibility.
- **vs-switch__visual** — visual track representing the switch background.
- **vs-switch__thumb** — movable thumb/handle indicating the on/off position.
- **vs-switch__label** — optional label text describing the switch action.
- **vs-switch__description** — optional helper or supporting text.

## Variants (BEM Modifiers)
### Visual Variants
- vs-switch--default
- vs-switch--primary
- vs-switch--secondary
- vs-switch--success
- vs-switch--warning
- vs-switch--danger
- vs-switch--info

### Size Variants
- vs-switch--sm
- vs-switch--md (default)
- vs-switch--lg

### Layout Variants
- vs-switch--inline
- vs-switch--block

## Component States
- .is-checked — applied when the control is toggled on (mirrors input checked state).
- .is-disabled — applied when the control is non-interactive/disabled.
- .is-readonly — applied when the control is read-only and cannot change state.
- .is-error — applied to convey validation or error status.
- .is-success — applied to convey validated/success status.
- .is-focus-visible — applied when the control is focus-visible for keyboard users.

## Responsive Behavior
- Inline layout keeps label/description on a single row with the control; block layout stacks content vertically using VIS spacing tokens.
- Sizes adjust track/thumb dimensions using tokens to remain comfortable across breakpoints. No additional breakpoint-specific rules required beyond fluid token usage.
