# vs-avatar — Component API (Step 1)

## Component Name
vs-avatar

## Component Anatomy
- **vs-avatar** — Root container that wraps a single avatar or an avatar group when the group modifier is applied.
- **vs-avatar__item** — Individual avatar wrapper used for single avatars or repeated for grouped layouts.
- **vs-avatar__media** — Visual container that defines the avatar shape and background; holds one content type (image, initials, or icon).
- **vs-avatar__image** — Image element for photo-based avatars.
- **vs-avatar__initials** — Text element used to render user initials as a fallback or primary content.
- **vs-avatar__icon** — Icon container for symbolic avatars when no photo or initials are provided.
- **vs-avatar__status** — Status indicator element that conveys presence/availability alongside optional text.
- **vs-avatar__status-label** — Accessible text label describing the status for screen readers.

## Variants (BEM Modifiers)
### Shape Variants
- vs-avatar--square
- vs-avatar--rounded
- vs-avatar--circle

### Size Variants
- vs-avatar--xs
- vs-avatar--sm
- vs-avatar--md (default)
- vs-avatar--lg
- vs-avatar--xl
- vs-avatar--xxl

### Content Variants
- vs-avatar--image
- vs-avatar--initials
- vs-avatar--icon

### Status Variants
- vs-avatar--status-online
- vs-avatar--status-offline
- vs-avatar--status-away
- vs-avatar--status-busy
- vs-avatar--status-custom

### Border / Surface Variants
- vs-avatar--bordered
- vs-avatar--no-border
- vs-avatar--ring

### Background Color Variants
- vs-avatar--primary
- vs-avatar--secondary
- vs-avatar--success
- vs-avatar--warning
- vs-avatar--danger
- vs-avatar--info
- vs-avatar--light
- vs-avatar--dark
- vs-avatar--neutral

### Group / Layout Variants
- vs-avatar--group
- vs-avatar--group-overlap
- vs-avatar--inline
- vs-avatar--stacked

## Component States
- **.is-loading** — Applied while avatar content (image/icon/initials) is loading or not yet available.
- **.is-fallback** — Indicates that the avatar is displaying a fallback (initials or icon) instead of the primary image.
- **.is-disabled** — Marks the avatar as non-interactive; reduce opacity and disable pointer interactions when avatars are clickable.
- **.is-active** — Optional active/selected state for avatars used as interactive controls (e.g., selection lists).

## Responsive Behavior
- Sizes scale fluidly via tokens; use responsive utilities to adjust group alignment on smaller viewports.
- Grouped avatars can wrap or stack vertically on small screens using the stacked variant or flex utilities from the VIS system.
- Status indicator positioning remains anchored to the avatar corner while respecting shape modifiers across breakpoints.
