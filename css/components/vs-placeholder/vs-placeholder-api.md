# VIS Component API — vs-placeholder

## Component Name
- **vs-placeholder**

## Purpose
- Provides a token-driven loading placeholder/skeleton element that can mirror common UI shapes while content is being fetched.

## Anatomy / Structure
- **vs-placeholder** — Root block representing a single placeholder shape. Supports modifiers for shape, animation, size, and content type.
- **vs-placeholder__wave** — Optional child overlay used for wave animation sweep when the wave modifier is active.

## BEM Class Names
- Block: `.vs-placeholder`
- Element: `.vs-placeholder__wave`
- Modifiers (applied to the block): shape, animation, size, and content-type modifiers listed below.

## Variants (BEM Modifiers)
- Shape: `vs-placeholder--rect` (default), `vs-placeholder--rounded`, `vs-placeholder--pill`, `vs-placeholder--circle`
- Animation: `vs-placeholder--static` (default), `vs-placeholder--glow`, `vs-placeholder--wave`
- Size: `vs-placeholder--xs`, `vs-placeholder--sm`, `vs-placeholder--md` (default), `vs-placeholder--lg`, `vs-placeholder--xl`
- Content Type: `vs-placeholder--text-line`, `vs-placeholder--heading`, `vs-placeholder--avatar`, `vs-placeholder--button`, `vs-placeholder--card`

## Component States
- `.is-loading` — Indicates active loading; typically always true for placeholders but allows toggling visibility.
- `.is-hidden` — Hides the placeholder when content is ready.

## Responsive Behavior
- Width is fluid by default and follows the parent container. Height and spacing derive from tokens per size/content-type modifiers. Circle and avatar placeholders maintain aspect ratio using set dimensions. Animations remain performant and respect reduced-motion preferences by disabling transitions.
