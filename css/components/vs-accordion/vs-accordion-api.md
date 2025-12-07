# VIS Component API — vs-accordion

## Component Name
- **vs-accordion**

## Purpose
- A collapsible disclosure surface that groups related content into toggleable panels, supporting single or multiple expanded sections and VIS visual variants.

## Anatomy / Structure
- **vs-accordion** — Root container wrapping all accordion items.
- **vs-accordion__item** — Wrapper for a single accordion entry (header + panel).
- **vs-accordion__header** — Semantic heading wrapper for the trigger button.
- **vs-accordion__trigger** — Interactive control that toggles the item; exposes label and affordance icon.
- **vs-accordion__label** — Text label describing the item.
- **vs-accordion__meta** — Optional right-aligned supplementary text (count, status).
- **vs-accordion__icon** — Optional affordance icon indicating expand/collapse state.
- **vs-accordion__panel** — Collapsible region containing the item body; controlled by the trigger.
- **vs-accordion__body** — Content container inside the panel for paragraphs, lists, or custom markup.

## Variants (BEM Modifiers)
- **vs-accordion--default** — Standard bordered accordion with contained items (single-item open by default).
- **vs-accordion--flush** — Borderless, minimal spacing variant for dense layouts.
- **vs-accordion--shadow** — Card-style accordion with elevated surface and rounded corners.
- **vs-accordion--always-open** — Allows multiple items to remain expanded concurrently.

## Component States
- **.is-open** — Applied to `vs-accordion__item` when expanded; `aria-expanded="true"` on trigger and panel visible.
- **.is-disabled** — Applied to `vs-accordion__item` (and/or `disabled` on trigger) to prevent interaction.
- **Focus-visible** — Trigger shows focus treatment on keyboard focus.

## Behavior & Accessibility
- Only one item is open at a time unless **vs-accordion--always-open** is present (or `data-vs-allow-multiple="true"`).
- Each trigger controls its paired panel via `aria-controls` and updates `aria-expanded`.
- Panels are labelled by their trigger text; panels toggle visibility without affecting DOM order.
- Keyboard: Enter/Space toggles; Up/Down arrows move focus between triggers; Home/End jump to first/last trigger.
- Recommended to wrap triggers in appropriate heading levels for document hierarchy.

## Responsive Behavior
- Fluid width; typography and spacing derive from VIS tokens. No breakpoint-specific overrides required.
