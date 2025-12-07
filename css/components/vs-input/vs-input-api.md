# VIS Component API — vs-input

## Component Name
- **vs-input**

## Purpose
- A flexible text input control that supports labels, icons, helper or validation messaging, and size/semantic variants while following VIS tokens and accessibility best practices.

## Anatomy / Structure
- **vs-input** — Root container managing layout, state, and spacing.
- **vs-input__label** — Optional label describing the field.
- **vs-input__control** — Wrapper aligning the input field with optional icons.
- **vs-input__field** — The form control element (input or textarea) receiving user text.
- **vs-input__icon** — Optional decorative or status icon.
- **vs-input__icon--leading** — Positions icon before the text field content.
- **vs-input__icon--trailing** — Positions icon after the text field content.
- **vs-input__support** — Optional helper or validation message shown below the field.

## Variants (BEM Modifiers)
- **vs-input--success** — Indicates successful validation.
- **vs-input--warning** — Highlights cautionary or warning status.
- **vs-input--error** — Emphasizes validation errors.
- **vs-input--sm / vs-input--md / vs-input--lg** — Size variants adjusting spacing and typography.

## Component States
- **.is-focused** — Field is focused; shows focus ring and active border.
- **.is-disabled** — Field is non-interactive; muted visuals.
- **.is-readonly** — Field is read-only; locked visuals while still focusable.
- **.is-filled** — Field contains user input; can adjust label or supporting visuals if needed.
- **.is-success / .is-warning / .is-error** — Semantic states mirroring validation variants when toggled dynamically.

## Responsive Behavior
- Fluid width by default; field expands to its container. Typography and spacing are token-based and require no breakpoint-specific overrides under normal usage.
