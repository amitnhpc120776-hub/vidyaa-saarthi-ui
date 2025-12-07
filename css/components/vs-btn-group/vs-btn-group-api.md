# VIS Component API — vs-btn-group

## Component Name
- **vs-btn-group**

## Purpose
- Arranges multiple `vs-btn` instances into cohesive clusters that share alignment, spacing, and connected borders for toolbar, segmented, horizontal, or vertical layouts.

## Anatomy / Structure
- **vs-btn-group** — Root container that manages the layout direction and segmentation rules for its child buttons.
- **vs-btn-group__item** — Optional wrapper around each `vs-btn` to normalize spacing, borders, and stacking behaviors.
- **vs-btn-group__segment** — Visual grouping boundary for segmented styles, ensuring shared borders between adjacent buttons.
- **vs-btn-group__toolbar-row** — Flex row container used when composing multiple button groups inside a toolbar configuration.

## Variants (BEM Modifiers)
- **vs-btn-group--horizontal** — Default inline row layout where buttons sit side-by-side.
- **vs-btn-group--vertical** — Stacks buttons vertically with full-width alignment.
- **vs-btn-group--segmented** — Removes gaps and merges adjacent button borders for a connected control strip.
- **vs-btn-group--toolbar** — Toolbar wrapper capable of holding multiple `vs-btn-group` clusters with shared spacing and wrapping.

## Component States
- **.is-disabled** — Applied to `vs-btn-group` or `vs-btn-group__item` to convey a non-interactive cluster; individual `vs-btn` instances should also use their disabled state.
- **.is-attached** — Applied to items that need shared borders in segmented layouts (automatically handled through CSS selectors).
- **Focus-visible** — Keyboard focus on child buttons should present focus rings without disrupting group borders.

## Responsive Behavior
- Toolbar groups wrap within available space; horizontal groups stay inline until the container width forces wrapping. Vertical groups maintain stacked alignment across breakpoints.
