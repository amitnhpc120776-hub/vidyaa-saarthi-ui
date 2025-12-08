# vs-switch — Component API

**Component Type:** Dependent Primitive (toggle control built on native checkbox)

**Purpose:** Switch control to toggle a binary setting with optional label and supporting text, using native checkbox semantics and VIS styling.

## Anatomy / Structure
- `vs-switch` — root label container aligning control and text.
- `vs-switch__input` — native `input[type="checkbox"]` handling form state and accessibility.
- `vs-switch__control` — visual track representing the switch background.
- `vs-switch__thumb` — circular thumb/handle that moves across the track.
- `vs-switch__label` — primary label text describing the toggle.
- `vs-switch__support` — optional helper or supporting text.

## Variants (BEM Modifiers)
- Sizes: `vs-switch--sm`, `vs-switch--md`

## States
- `.is-checked` — switch is in the on/active position.
- `.is-disabled` — switch is non-interactive (mirrors disabled input).
- `.is-focused` — focus-visible state for keyboard navigation.

## Responsive Behavior
- Inline-friendly by default; typography and spacing use fluid tokens so no breakpoint-specific structural changes are required.

```json
{
  "block": "vs-switch",
  "elements": [
    "vs-switch__input",
    "vs-switch__control",
    "vs-switch__thumb",
    "vs-switch__label",
    "vs-switch__support"
  ],
  "states": [
    "is-checked",
    "is-disabled",
    "is-focused"
  ],
  "variants": ["vs-switch--sm", "vs-switch--md"]
}
```
