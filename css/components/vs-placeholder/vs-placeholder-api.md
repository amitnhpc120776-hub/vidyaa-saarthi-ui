# vs-placeholder — Component API (Step 1)

## Component Type
Foundational Primitive

## Component Name
vs-placeholder

## Component Anatomy (BEM)
- **vs-placeholder** — root container for one or more placeholder shapes.
- **vs-placeholder__item** — individual placeholder shape; can be repeated for multiline text skeletons.

## Variants (BEM Modifiers)
- **vs-placeholder--rect** — default rectangular placeholder block.
- **vs-placeholder--text** — stacked placeholder lines representing paragraph content.
- **vs-placeholder--circle** — circular placeholder for avatars or icons.
- **vs-placeholder--rounded** — medium-radius rectangle.
- **vs-placeholder--sm** — small size placeholder dimensions.
- **vs-placeholder--md** — medium (default) placeholder dimensions.
- **vs-placeholder--lg** — large placeholder dimensions.
- **vs-placeholder--pulse** — soft fade animation.
- **vs-placeholder--wave** — shimmer sweep animation.
- **vs-placeholder--blink** — quick fade animation.
- **vs-placeholder--inline** — displays as inline-block with content-width sizing.
- **vs-placeholder--block** — displays as block-level element spanning available width.

## Component States
- **.is-static** — disables animation when applied to the root.
- **.is-hidden** — visually hides the placeholder when loading is complete.
- **data-placeholder-static="true"** — optional attribute to force static rendering, honoring reduced-motion preferences.

## Responsive Behavior
- Root width should adapt to container width; size modifiers and inline/block modifiers set base dimensions. Text variant lines wrap within 100% width and collapse naturally on smaller breakpoints.
