# vs-input — Component API (Step 1)

## Component Type
Dependent Primitive

## Component Name
vs-input

## Component Anatomy (BEM)
- **vs-input** — root wrapper controlling layout, variants, and states for the input.
- **vs-input__field** — flex container that aligns the control with optional icons or spinner.
- **vs-input__control** — the form control element (`<input>` or `<textarea>`) that captures user text.
- **vs-input__icon** — decorative or contextual icon (uses `vs-icon`); can sit on the left or right.
- **vs-input__spinner** — loading indicator displayed on the right (uses `vs-spinner`).
- **vs-input__status-icon** — validation status icon (uses `vs-icon`) for success or error messaging.
- **vs-input__help-text** — supplementary guidance or description shown below the field.
- **vs-input__counter** — character counter or custom meta info aligned with help/error text area.
- **vs-input__meta** — container that aligns help text, counter, and status messaging beneath the field.

## Variants (BEM Modifiers)
### Visual Variants
- `vs-input--default`
- `vs-input--primary`
- `vs-input--secondary`
- `vs-input--success`
- `vs-input--warning`
- `vs-input--danger`
- `vs-input--info`

### Size Variants
- `vs-input--sm`
- `vs-input--md` (default)
- `vs-input--lg`

### Layout Variants
- `vs-input--inline` — compact inline layout with minimal spacing.
- `vs-input--block` — expands to full available width.
- `vs-input--with-icon-left` — reserves space for a left icon.
- `vs-input--with-icon-right` — reserves space for a right icon or trailing adornment.

## Component States
- `.is-focused` — applied when the control has focus.
- `.is-disabled` — non-interactive; control and decorators disabled.
- `.is-readonly` — content visible but not editable; visual cue only.
- `.is-error` — validation error state; enables error styling and icon.
- `.is-success` — validation success state; enables success styling and icon.
- `.is-loading` — displays loading spinner on the right and reduces input interactions.

## Responsive Behavior
- Mobile-first design; block layout defaults to stacking help text and counter beneath the field.
- Inline variant keeps elements horizontally aligned with reduced spacing on smaller viewports.
- Full-width (`vs-input--block`) adapts fluidly to container width; size variants scale padding and typography via tokens.
