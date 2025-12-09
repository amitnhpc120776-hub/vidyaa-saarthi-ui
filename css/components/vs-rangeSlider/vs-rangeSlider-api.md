# VIS Component API — vs-rangeSlider (v1.0)

## Component type
- Dependent Primitive (uses native `<input type="range">` styled via VIS tokens)

## Description
Range slider component lets users choose a numeric value within a defined interval, with optional label, ticks, and live value display.

## Anatomy
- `vs-rangeSlider` — root slider container
- `vs-rangeSlider__label` — optional field label linked via `for`/`id`
- `vs-rangeSlider__control` — wrapper for the native range input
- `vs-rangeSlider__input` — native range input for value selection
- `vs-rangeSlider__values` — optional container for value labels (min/current/max)
- `vs-rangeSlider__value` — value text node (use modifiers for min/current/max)
- `vs-rangeSlider__ticks` — optional container for tick labels along the track
- `vs-rangeSlider__tick` — individual tick label element

## Variants (modifiers)
- `vs-rangeSlider--withValue` — shows the current value label alongside the slider
- `vs-rangeSlider--withTicks` — displays tick labels beneath the track

## Sizes
- `vs-rangeSlider--sm`
- `vs-rangeSlider--md` (default)
- `vs-rangeSlider--lg`

## States
- `.is-disabled` — entire control disabled (mirrors disabled input)

## Responsive behavior
- Elements stack vertically on narrow viewports while maintaining control usability; ticks and values wrap as needed.

## Canonical Anatomy Block
{
  "block": "vs-rangeSlider",
  "elements": [
    "vs-rangeSlider__label",
    "vs-rangeSlider__control",
    "vs-rangeSlider__input",
    "vs-rangeSlider__values",
    "vs-rangeSlider__value",
    "vs-rangeSlider__ticks",
    "vs-rangeSlider__tick"
  ],
  "states": ["is-disabled"],
  "variants": ["vs-rangeSlider--withValue", "vs-rangeSlider--withTicks"],
  "sizes": ["vs-rangeSlider--sm", "vs-rangeSlider--md", "vs-rangeSlider--lg"]
}
