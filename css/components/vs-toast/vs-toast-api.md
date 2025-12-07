# vs-toast — Component API (VIS)

## Purpose
Non-modal, transient notifications that convey contextual messages and optional actions without interrupting user workflows. Supports single toasts, stacked lists, and container-managed regions positioned across the viewport.

## Anatomy / Structure
- **vs-toast** (root container; positions the toast region and manages stacking)
  - **vs-toast__list** (stack wrapper for multiple toast items; optional for single layout)
    - **vs-toast__item** (individual toast surface)
      - **vs-toast__header** (optional header row)
        - **vs-toast__title** (heading text)
        - **vs-toast__meta** (supplementary info such as timestamp; optional)
        - **vs-toast__close** (dismiss button; optional based on closable variant)
      - **vs-toast__body** (main message content)
      - **vs-toast__actions** (inline buttons or links; optional)

## BEM Class Names
- Block: `.vs-toast`
- Elements:
  - `.vs-toast__list`
  - `.vs-toast__item`
  - `.vs-toast__header`
  - `.vs-toast__title`
  - `.vs-toast__meta`
  - `.vs-toast__body`
  - `.vs-toast__actions`
  - `.vs-toast__close`
- State classes:
  - `.is-visible` (toast is shown)
  - `.is-hiding` (toast is fading out during hide animation)
  - `.is-paused` (auto-hide countdown paused)

## Variants
- **Position**: `vs-toast--top-left`, `vs-toast--top-center`, `vs-toast--top-right`, `vs-toast--middle-left`, `vs-toast--middle-center`, `vs-toast--middle-right`, `vs-toast--bottom-left`, `vs-toast--bottom-center`, `vs-toast--bottom-right`
- **Theme / Color**: `vs-toast--primary`, `vs-toast--secondary`, `vs-toast--success`, `vs-toast--warning`, `vs-toast--danger`, `vs-toast--info`, `vs-toast--light`, `vs-toast--dark`
- **Structure**: `vs-toast--with-header`, `vs-toast--no-header`
- **Close Behavior**: `vs-toast--closable`, `vs-toast--no-close`
- **Hide Behavior**: `vs-toast--auto-hide`, `vs-toast--manual`, `vs-toast--persistent`
- **Animation**: `vs-toast--fade`, `vs-toast--no-fade`
- **Layout**: `vs-toast--single`, `vs-toast--stacked`, `vs-toast--container`

## States & Behaviors
- Default state shows `.vs-toast__item` with role="status"; critical alerts may use role="alert".
- Auto-hide behavior respects `data-vs-toast-duration` (milliseconds) when `vs-toast--auto-hide` is present.
- Close button toggles visibility and emits a custom `vs-toast:dismiss` event on dismissal.
- Pausing on hover adds `.is-paused` and suspends auto-hide countdown until pointer/keyboard focus leaves.
- Stacked layout allows multiple `.vs-toast__item` children inside `.vs-toast__list`; container layout positions the list relative to viewport with spacing.

## Accessibility
- Root region: `role="region"` with `aria-live="polite"` (or `assertive` for danger/warning).
- Each toast item uses `aria-live` matching severity and includes `aria-atomic="true"`.
- Close button labeled with `aria-label="Dismiss notification"`.
- Focusable elements maintain tab order; close action is keyboard operable (Enter/Space).
- Auto-hide is paused while toast or its focusable children have hover/focus to prevent unexpected dismissal.

## Tokens & Theming
- Uses VIS tokens for spacing, radius, elevation, typography, and colors (semantic tokens for theme variants).
- Supports prefers-reduced-motion by disabling fade transitions when requested or when `vs-toast--no-fade` modifier is present.

