# VIS Component API — vs-carousel

## Component Name
- **vs-carousel**

## Purpose
- A responsive slider for cycling through grouped media or text content with configurable animation, navigation controls, autoplay, and orientation options.

## Anatomy / Structure
- **vs-carousel** — Root container handling state, theme variables, and modifiers.
- **vs-carousel__viewport** — Clipping region that masks overflow while keeping controls on top.
- **vs-carousel__track** — Flex container that slides horizontally or vertically depending on orientation.
- **vs-carousel__slide** — Individual slide panel containing media and/or text; the active slide uses `.is-active`.
- **vs-carousel__media** — Optional image/video placeholder area for media-focused layouts.
- **vs-carousel__content** — Text wrapper for titles, paragraphs, and actions.
- **vs-carousel__title** — Heading-level text for the slide.
- **vs-carousel__text** — Supporting copy for the slide body.
- **vs-carousel__controls** — Container for navigation controls.
- **vs-carousel__button** — Previous/next buttons (`--prev`, `--next`) for manual navigation.
- **vs-carousel__indicators** — Pagination container for dots.
- **vs-carousel__indicator** — Individual pagination dot reflecting and controlling the active slide.

## Variants (BEM Modifiers)
- **Animation**
  - `vs-carousel--slide` — Default sliding transition between slides.
  - `vs-carousel--fade` — Crossfade transition overlaying slides.
- **Controls & Indicators**
  - `vs-carousel--with-controls` / `vs-carousel--no-controls` — Toggle prev/next visibility.
  - `vs-carousel--with-indicators` / `vs-carousel--no-indicators` — Toggle pagination dots.
- **Autoplay**
  - `vs-carousel--auto` — Enables timed autoplay (customize via `data-vs-interval`).
  - `vs-carousel--manual-only` — Disables autoplay even if a data interval is set.
  - `vs-carousel--pause-on-hover` — Pauses autoplay on pointer hover.
  - `vs-carousel--loop` — Enables infinite cycling; omit to stop at edges.
- **Orientation**
  - `vs-carousel--horizontal` — Slides move horizontally (default).
  - `vs-carousel--vertical` — Slides move vertically.
- **Content Type**
  - `vs-carousel--media` — Emphasizes media with supporting text.
  - `vs-carousel--text` — Hides media and centers textual content.
  - `vs-carousel--mixed` — Balanced layout for combined media + text.

## Component States
- `.is-active` — Applied to the current slide and indicator.
- `.is-paused` — Applied to the carousel while autoplay is paused via hover.

## Behavior & Accessibility
- Only one slide is active at a time; `aria-hidden` and `tabindex` update based on active state.
- Indicators are focusable tabs; clicking them moves to the corresponding slide.
- Controls are disabled at edges when looping is off; stay enabled when `vs-carousel--loop` is present.
- Autoplay interval defaults to 5000ms and respects `data-vs-interval`. Autoplay restarts after manual navigation.
- For `vs-carousel--fade`, inactive slides are hidden to avoid overlap; slide variant uses track translations.

## Responsive Behavior
- Fluid width container. On medium screens and up, mixed/media layouts display two-column grids; text-only variants center content.
- Height uses `--vs-carousel-height` token and adapts to vertical orientation.
