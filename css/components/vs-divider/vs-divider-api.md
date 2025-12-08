# VIS Component API — vs-divider

## Component Type
- Foundational Primitive

## Component Name
- **vs-divider**

## Purpose
- Universal horizontal or vertical separator that provides consistent spacing and stroke styling throughout the VIS design system.

## Anatomy / Structure
- **vs-divider** — Root container rendering the divider stroke and handling orientation, thickness, spacing, and inset logic.
- **vs-divider__label** — Optional inline label content centered along the divider for contextual grouping.

## Variants (BEM Modifiers)
- **vs-divider--horizontal** (default) — Renders a horizontal rule that stretches the available inline width.
- **vs-divider--vertical** — Renders a vertical rule sized by the parent block height.
- **vs-divider--light** — Uses a lighter stroke color for low-emphasis separation.
- **vs-divider--strong** — Uses a stronger stroke color for high-emphasis separation.
- **vs-divider--dashed** — Displays the stroke as a dashed pattern.
- **vs-divider--dotted** — Displays the stroke as a dotted pattern.
- **vs-divider--spaced** — Adds extra margin around the divider for breathing room between content blocks.
- **vs-divider--inset** — Applies horizontal inset on the line to align with nested content or menu groupings.

## Component States
- **.is-labeled** — Indicates a divider with an active label; centers the label and splits the stroke on either side.
- **.is-full-height** — Optional state for vertical dividers to stretch to the parent’s full height when inside flex layouts.

## Responsive Behavior
- Divider thickness, spacing, and inset rely on token-driven values and adapt fluidly within responsive layouts. Orientation is set via modifiers; vertical dividers respect flex or grid heights and can use `.is-full-height` to fill the container on responsive breakpoints.
