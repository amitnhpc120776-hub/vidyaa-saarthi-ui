# vs-selectInput — Component API (v1.0)

## Component type
Composed Component — builds on existing VIS primitives for triggers, input affordances, and checklist indicators.

## Description
Select input allows users to make a single or multiple selection from a list of options within a compact dropdown surface.

## Canonical anatomy (BEM)
- `vs-selectInput` — root container for the select control.
- `vs-selectInput__label` — optional field label placed above the control.
- `vs-selectInput__control` — interactive control surface that opens and closes the menu.
- `vs-selectInput__value` — area within the control that displays selected value(s) or placeholder text.
- `vs-selectInput__placeholder` — hint text shown when no value is selected.
- `vs-selectInput__indicators` — container for status icons (e.g., dropdown caret, clear button).
- `vs-selectInput__indicator` — individual indicator element (e.g., caret icon, clear action).
- `vs-selectInput__menu` — dropdown panel containing selectable options.
- `vs-selectInput__option` — individual selectable option row within the menu.
- `vs-selectInput__option-label` — text label for an option.
- `vs-selectInput__option-meta` — optional supporting text for an option.
- `vs-selectInput__option-icon` — optional leading icon for an option.
- `vs-selectInput__option-check` — selection indicator inside an option (uses primitives for multi/single selection display).
- `vs-selectInput__helper` — optional helper or validation message beneath the control.

## Variants (BEM modifiers)
- `vs-selectInput--multiple` — enables multi-select behavior and selection indicators.
- `vs-selectInput--inline` — renders label and control inline for compact horizontal layouts.
- `vs-selectInput--fullWidth` — expands control to 100% of the available width.

## States
- `.is-open` — menu is visible.
- `.is-disabled` — control is non-interactive.
- `.is-focus` — control has focus.
- `.is-error` — validation error state for the control.
- `.is-loading` — indicates data is loading; options may be disabled.

## Responsive notes
- Menu width should align with control width on small viewports and may cap width on larger screens while maintaining responsive spacing.

## Canonical Anatomy Block
{
  "block": "vs-selectInput",
  "elements": [
    "vs-selectInput__label",
    "vs-selectInput__control",
    "vs-selectInput__value",
    "vs-selectInput__placeholder",
    "vs-selectInput__indicators",
    "vs-selectInput__indicator",
    "vs-selectInput__menu",
    "vs-selectInput__option",
    "vs-selectInput__option-label",
    "vs-selectInput__option-meta",
    "vs-selectInput__option-icon",
    "vs-selectInput__option-check",
    "vs-selectInput__helper"
  ],
  "states": ["is-open", "is-disabled", "is-focus", "is-error", "is-loading"],
  "variants": ["vs-selectInput--multiple", "vs-selectInput--inline", "vs-selectInput--fullWidth"]
}
