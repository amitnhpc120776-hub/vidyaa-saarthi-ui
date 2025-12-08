# vs-radiogroup — Component API

**Component Type:** Composed Component (group wrapper that arranges multiple `vs-radio` primitives)

**Purpose:** Presents a labeled set of radio options where only one value can be selected, with optional helper description and validation messaging.

## Anatomy / Structure
- `vs-radiogroup` — root container for the radio group.
- `vs-radiogroup__label` — primary label describing the group.
- `vs-radiogroup__description` — optional helper text providing additional context.
- `vs-radiogroup__options` — container that arranges child radio options.
- `vs-radiogroup__option` — wrapper for each radio choice containing a `vs-radio` primitive and its supporting copy.
- `vs-radiogroup__message` — validation or status message related to the group.

## Variants (BEM Modifiers)
- `vs-radiogroup--inline` — lays out options horizontally with inline flow.
- `vs-radiogroup--segmented` — arranges options as segmented controls using contained `vs-radio` primitives.

## Sizes (BEM Modifiers)
- `vs-radiogroup--sm` — compact spacing and typography.
- `vs-radiogroup--md` — default spacing and typography.
- `vs-radiogroup--lg` — spacious spacing and typography.

## States
- `.is-disabled` — group is non-interactive; all contained radios reflect disabled state.
- `.is-invalid` — group is in an error state; message conveys the validation issue.

## Responsive Behavior
- Inline variant may wrap when horizontal space is limited; otherwise structure remains consistent across breakpoints.

```json
{
  "block": "vs-radiogroup",
  "elements": [
    "vs-radiogroup__label",
    "vs-radiogroup__description",
    "vs-radiogroup__options",
    "vs-radiogroup__option",
    "vs-radiogroup__message"
  ],
  "states": [
    "is-disabled",
    "is-invalid"
  ],
  "variants": [
    "vs-radiogroup--inline",
    "vs-radiogroup--segmented"
  ],
  "sizes": [
    "vs-radiogroup--sm",
    "vs-radiogroup--md",
    "vs-radiogroup--lg"
  ]
}
```
