# VIS Component API — vs-icon

## Component Type
- Foundational Primitive

## Component Name
- **vs-icon**

## Purpose
- Universal icon wrapper that renders text-based glyphs, inline SVGs, or externally injected SVGs with token-driven sizing, color, and alignment.

## Anatomy / Structure
- **vs-icon** — Root inline wrapper controlling size, color, alignment, and rotation behaviors.
- **vs-icon__svg** — Optional wrapper for inline or injected SVG content to inherit sizing and color tokens.
- **vs-icon__text** — Optional wrapper for text or ligature-based icons to align with surrounding text.

## Variants (BEM Modifiers)
- **vs-icon--sm / vs-icon--md / vs-icon--lg** — Size variants for small, medium (default), and large icons.
- **vs-icon--spin** — Applies continuous rotation animation for loaders.
- **vs-icon--rotate-90 / vs-icon--rotate-180 / vs-icon--rotate-270** — Rotation utilities for quarter, half, and three-quarter turns.

## Component States
- **.is-inline** — Optional state to keep the icon aligned with text flow when custom alignment adjustments are needed.
- **.is-muted** — Optional tone reduction for secondary emphasis.

## Responsive Behavior
- Inline by default; sizing is token-driven so icons scale consistently across breakpoints without additional responsive overrides.
