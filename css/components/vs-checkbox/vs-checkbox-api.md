# vs-checkbox — Component API

**Component Type:** Foundational Primitive

**Purpose:** A selectable control that toggles between checked, unchecked, and indeterminate states with optional description text, inline/block layouts, and grouped usage.

## Anatomy / Structure
- `vs-checkbox` — root interactive control handling selection state and focus.
- `vs-checkbox__input` — native checkbox input for form compatibility and programmatic state.
- `vs-checkbox__box` — visual box indicating selection state.
- `vs-checkbox__icon` — optional icon within the box for checkmark or indeterminate glyph.
- `vs-checkbox__label` — primary text label for the control.
- `vs-checkbox__description` — optional helper or supporting text beneath the label.
- `vs-checkbox__group` — optional container to align multiple checkboxes with shared spacing.

## Variants (BEM Modifiers)
- Visual emphasis: `vs-checkbox--default`, `vs-checkbox--primary`, `vs-checkbox--success`, `vs-checkbox--warning`, `vs-checkbox--danger`, `vs-checkbox--info`.
- Layout: `vs-checkbox--inline`, `vs-checkbox--block`.
- Size: `vs-checkbox--sm`, `vs-checkbox--md`, `vs-checkbox--lg`.

## States
- `.is-checked` — applied when the checkbox is in the checked state.
- `.is-indeterminate` — applied when the checkbox is in an indeterminate state.
- `.is-disabled` — applied when the checkbox is disabled and non-interactive.
- `.is-focus-visible` — applied when the checkbox shows keyboard focus styling.
- `.is-error` — applied when the checkbox conveys an error/invalid state.
- `.is-success` — applied when the checkbox conveys a successful/valid state.

## Responsive Behavior
- Inline and block layouts adapt fluidly; spacing and typography scale with global tokens. No additional breakpoint-specific structures are required.

## Canonical Anatomy Block
{
  "block": "vs-checkbox",
  "elements": [
    "vs-checkbox__input",
    "vs-checkbox__box",
    "vs-checkbox__icon",
    "vs-checkbox__label",
    "vs-checkbox__description",
    "vs-checkbox__group"
  ],
  "states": [
    "is-checked",
    "is-indeterminate",
    "is-disabled",
    "is-focus-visible",
    "is-error",
    "is-success"
  ],
  "variants": [
    "vs-checkbox--default",
    "vs-checkbox--primary",
    "vs-checkbox--success",
    "vs-checkbox--warning",
    "vs-checkbox--danger",
    "vs-checkbox--info",
    "vs-checkbox--inline",
    "vs-checkbox--block",
    "vs-checkbox--sm",
    "vs-checkbox--md",
    "vs-checkbox--lg"
  ]
}
