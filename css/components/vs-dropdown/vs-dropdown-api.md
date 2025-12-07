# VIS Component API — vs-dropdown

## Component Name
- **vs-dropdown**

## Purpose
- A toggled overlay surface that reveals contextual actions or content when triggered, supporting multiple placements, alignments, trigger styles, sizes, and behaviors.

## Anatomy / Structure
- **vs-dropdown** — Root container controlling positioning, state, and variants.
- **vs-dropdown__toggle** — Wrapper aligning the trigger control(s) and caret affordance.
- **vs-dropdown__button** — Primary trigger button or anchor that opens/closes the dropdown.
- **vs-dropdown__split** — Optional secondary caret-only trigger for split-button variants.
- **vs-dropdown__label** — Text label inside the trigger control.
- **vs-dropdown__icon** — Optional icon within triggers.
- **vs-dropdown__menu** — Floating surface that contains dropdown content.
- **vs-dropdown__list** — Semantic list container for menu items (links, buttons, grouped items).
- **vs-dropdown__item** — Individual menu row or container for custom content.
- **vs-dropdown__link** — Action link or button-styled item within the menu.
- **vs-dropdown__text** — Static text block inside the menu.
- **vs-dropdown__form** — Wrapper for form controls inside the menu.
- **vs-dropdown__group** — Group wrapper that clusters related items.
- **vs-dropdown__header** — Optional heading/label for grouped menu sections.
- **vs-dropdown__divider** — Separator line between logical sections.

## Variants (BEM Modifiers)
- **Placement**: `vs-dropdown--down` (default), `vs-dropdown--up`, `vs-dropdown--start`, `vs-dropdown--end`.
- **Trigger type**: `vs-dropdown--button-trigger`, `vs-dropdown--split-trigger`, `vs-dropdown--link-trigger`.
- **Alignment**: `vs-dropdown--align-start`, `vs-dropdown--align-end`.
- **Surface / style**: `vs-dropdown--default`, `vs-dropdown--dark`, `vs-dropdown--bordered`, `vs-dropdown--rounded`, `vs-dropdown--square`.
- **Content**: `vs-dropdown--menu-links` (default), `vs-dropdown--menu-text`, `vs-dropdown--menu-form`, `vs-dropdown--menu-icons`, `vs-dropdown--menu-grouped`.
- **Behavior**: `vs-dropdown--auto-close` (default), `vs-dropdown--no-auto-close`, `vs-dropdown--manual`, `vs-dropdown--scrollable`.
- **Sizes**: `vs-dropdown--sm`, `vs-dropdown--md` (default), `vs-dropdown--lg`.

## Component States
- **Expanded** — Root has `.is-open`; trigger has `aria-expanded="true"`; menu visible.
- **Collapsed** — Default state; trigger `aria-expanded="false"`; menu hidden.
- **Disabled** — Triggers use `disabled` attribute or `.is-disabled` to prevent interaction.
- **Focus-visible** — Trigger and menu items show focus ring on keyboard focus.

## Behavior & Accessibility
- Each dropdown trigger controls its menu via `aria-expanded` and `aria-controls` with unique IDs.
- `role="menu"` on the menu and `role="menuitem"` on actionable links/buttons; grouped headers use `role="presentation"`.
- Keyboard: Enter/Space toggles; Escape closes; Up/Down arrows navigate menu items; Home/End jump to first/last item.
- Auto-close variants define whether menu closes on item selection and/or outside click: default is auto-close on selection and outside click; `vs-dropdown--no-auto-close` keeps menu open on selection; `vs-dropdown--manual` only responds to its triggers (ignores outside clicks/ESC).

## Responsive Behavior
- Menu width adapts to trigger; uses token spacing and radius; `vs-dropdown--scrollable` constrains height with vertical scrolling for long lists.
