# VIS Component API — vs-checkbox

## Component Name
- **vs-checkbox**

## Purpose
- A flexible checkbox control supporting standard and switch presentations, color semantics, label layouts, and accessible states including checked, unchecked, indeterminate, and disabled.

## Anatomy / Structure
- **vs-checkbox** — Root container that wraps the control, manages modifiers, and applies spacing.
- **vs-checkbox__input** — Native checkbox input element for form participation and accessibility.
- **vs-checkbox__box** — Visual box or switch track/handle reflecting the checked or indeterminate state.
- **vs-checkbox__label** — Optional text label describing the choice; can be hidden or repositioned via layout modifiers.

## Variants (BEM Modifiers)
- **vs-checkbox--default** — Standard checkbox styling.
- **vs-checkbox--solid** — Filled checkbox style.
- **vs-checkbox--outline** — Outlined checkbox style.
- **vs-checkbox--switch** — Switch-style presentation.
- **vs-checkbox--reverse** — Places the label before the control.
- **vs-checkbox--sm / vs-checkbox--md / vs-checkbox--lg** — Size variants.
- **vs-checkbox--primary / vs-checkbox--secondary / vs-checkbox--success / vs-checkbox--warning / vs-checkbox--danger / vs-checkbox--info / vs-checkbox--neutral** — Color variants.
- **vs-checkbox--checked / vs-checkbox--unchecked / vs-checkbox--indeterminate** — State modifiers reflecting control status.
- **vs-checkbox--disabled** — Disabled state styling.
- **vs-checkbox--inline / vs-checkbox--block / vs-checkbox--no-label** — Layout modifiers for alignment and label visibility.
- **vs-checkbox--square / vs-checkbox--rounded / vs-checkbox--pill** — Shape modifiers for box corners or switch geometry.

## Component States
- **.is-focused** — Input has keyboard focus; show focus ring.
- **.is-active** — Pointer is actively pressing the control.
- **.is-disabled** — Matches disabled inputs; prevent interactions.
- **.is-checked** — Reflects checked state; synchronizes visuals with vs-checkbox--checked.
- **.is-indeterminate** — Reflects indeterminate state; synchronizes visuals with vs-checkbox--indeterminate.
- **.is-error** — Optional error highlight when validation fails.

## Responsive Behavior
- Inline variant defaults to wrapping content naturally; block variant enforces full-width stacking. Token-based spacing and typography provide mobile-first sizing without breakpoint overrides.
