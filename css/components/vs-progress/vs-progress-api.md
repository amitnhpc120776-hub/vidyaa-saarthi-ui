# VIS Component API — vs-progress

## Component Name
- **vs-progress**

## Purpose
- Displays determinate or indeterminate progress for tasks with optional labels, sizes, orientations, and multi-segment support.

## Anatomy / Structure
- **vs-progress** — Root container that holds the track and optional label/value row.
- **vs-progress__label** — Optional label row that can include descriptive text and the current value.
- **vs-progress__label-text** — Optional text describing the task.
- **vs-progress__value** — Optional numeric or textual value (e.g., percentage).
- **vs-progress__track** — Track area representing the total progress range.
- **vs-progress__bar** — Filled bar for single-value progress.
- **vs-progress__segment** — Individual fills for multi-segment progress when `vs-progress--multi` is applied.

## BEM Class Names
- Block: `.vs-progress`
- Elements: `.vs-progress__label`, `.vs-progress__label-text`, `.vs-progress__value`, `.vs-progress__track`, `.vs-progress__bar`, `.vs-progress__segment`
- Modifiers:
  - Size: `vs-progress--sm`, `vs-progress--md` (default), `vs-progress--lg`
  - Color: `vs-progress--primary`, `vs-progress--secondary`, `vs-progress--success`, `vs-progress--warning`, `vs-progress--danger`, `vs-progress--info`, `vs-progress--neutral`
  - Style: `vs-progress--default`, `vs-progress--striped`, `vs-progress--animated`
  - Content: `vs-progress--with-label`, `vs-progress--no-label`
  - Layout: `vs-progress--multi`
  - Orientation: `vs-progress--horizontal` (default), `vs-progress--vertical`

## Component States
- `.is-animated` — Forces stripe animation for determinate bars regardless of the style modifier.
- `.is-indeterminate` — Indicates unknown progress; bars animate with an infinite sweep and omit `aria-valuenow`.
- `.is-paused` — Pauses animated stripes for determinate or indeterminate states.
- `.is-complete` — Optional state to signal 100% completion for styling hooks.
- `.is-disabled` — Visually dims and stops motion for non-interactive or disabled tasks.

## Accessibility
- Root uses `role="progressbar"` with `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` when determinate; omit `aria-valuenow` for indeterminate.
- Provide `aria-label` or associate external `<label for>` when the task name is not adjacent.
- Ensure sufficient color contrast between track, fill, and label text.

## Responsive Behavior
- Progress bars fill the available inline dimension; thickness scales via size modifiers.
- Vertical orientation uses a fixed length token by default and stacks labels above the track; segments stack along the block axis.
- Motion honors `prefers-reduced-motion` to disable stripe animations.
