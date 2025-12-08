# vs-checkbox — Component API

**Component Type:** Dependent Primitive (native checkbox control with VIS styling)

**Purpose:** Checkbox for selecting one or more options from a list or toggling settings on/off, with optional supporting text.

## Anatomy / Structure
- `vs-checkbox` — root container (label) aligning control and text.
- `vs-checkbox__input` — native `input[type="checkbox"]` handling accessibility and form state.
- `vs-checkbox__control` — visual box reflecting checkbox state.
- `vs-checkbox__icon` — checkmark or indeterminate indicator inside the control.
- `vs-checkbox__label` — primary label text for the option.
- `vs-checkbox__support` — optional helper or supporting text.

## Variants (BEM Modifiers)
- Sizes: `vs-checkbox--sm`, `vs-checkbox--md`

## States
- `.is-checked` — checkbox is checked.
- `.is-indeterminate` — checkbox represents a mixed state.
- `.is-disabled` — checkbox is not interactive (mirrors disabled input).
- `.is-invalid` — checkbox is in an error/invalid state.
- `.is-focused` — checkbox is focus-visible for keyboard navigation.

## Responsive Behavior
- Inline-friendly by default; spacing and typography use fluid tokens so no breakpoint-specific structure changes are required.

```json
{
  "block": "vs-checkbox",
  "elements": [
    "vs-checkbox__input",
    "vs-checkbox__control",
    "vs-checkbox__icon",
    "vs-checkbox__label",
    "vs-checkbox__support"
  ],
  "states": [
    "is-checked",
    "is-indeterminate",
    "is-disabled",
    "is-invalid",
    "is-focused"
  ],
  "variants": ["vs-checkbox--sm", "vs-checkbox--md"]
}
```
