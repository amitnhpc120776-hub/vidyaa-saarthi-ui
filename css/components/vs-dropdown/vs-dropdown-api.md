# vs-dropdown Component API (v1.1)

## Component Type
Composed Component

## Description
Dropdown displays a toggle that reveals a list of contextual actions or options. Supports single or split trigger buttons, optional hover activation, aligned menus, custom arrow icons, and size adjustments while reusing VIS primitives.

## Change Log
- v1.1: Added `vs-dropdown__label` to style and align toggle text independently of icons.

## Canonical BEM Anatomy
- `vs-dropdown` — root container for the dropdown experience.
- `vs-dropdown__trigger` — flex container that holds the toggle or split buttons.
- `vs-dropdown__toggle` — primary control (built with `vs-btn`) that opens or closes the menu.
- `vs-dropdown__primary` — main action button for split dropdowns (built with `vs-btn`).
- `vs-dropdown__caret` — secondary toggle button for split dropdowns (built with `vs-btn`).
- `vs-dropdown__icon` — optional custom arrow or leading icon element inside a toggle.
- `vs-dropdown__label` — text label within a toggle button.
- `vs-dropdown__menu` — overlay surface containing the list of selectable items.
- `vs-dropdown__header` — optional non-interactive label within the menu.
- `vs-dropdown__item` — interactive option within the menu (can wrap links or buttons).
- `vs-dropdown__item-icon` — optional icon aligned with a menu item label.
- `vs-dropdown__item-label` — text label for a menu item.
- `vs-dropdown__item-meta` — optional supporting text such as shortcuts or descriptions.
- `vs-dropdown__divider` — separator within the menu using the `vs-divider` primitive.
- `vs-dropdown__footer` — optional action row at the bottom of the menu.
- `vs-dropdown__checkbox` — optional checkbox primitive when multi-select behavior is needed.
- `vs-dropdown__radio` — optional radio primitive when single-select behavior is needed.

## Variants (Modifiers)
- `vs-dropdown--split` — renders primary and caret buttons for split behavior.
- `vs-dropdown--hover` — opens the menu on hover instead of click.
- `vs-dropdown--end` — aligns the menu to the end of the trigger.
- `vs-dropdown--sm` — small sizing that aligns with small button primitives.
- `vs-dropdown--lg` — large sizing that aligns with large button primitives.

## States
- `.is-open` — menu is visible.
- `.is-disabled` — interactions are disabled for the dropdown.

## Responsive Notes
- Menu positioning should adapt to available space; alignment modifiers control horizontal attachment without changing anatomy.

```json
{
  "block": "vs-dropdown",
  "elements": [
    "vs-dropdown__trigger",
    "vs-dropdown__toggle",
    "vs-dropdown__primary",
    "vs-dropdown__caret",
    "vs-dropdown__icon",
    "vs-dropdown__label",
    "vs-dropdown__menu",
    "vs-dropdown__header",
    "vs-dropdown__item",
    "vs-dropdown__item-icon",
    "vs-dropdown__item-label",
    "vs-dropdown__item-meta",
    "vs-dropdown__divider",
    "vs-dropdown__footer",
    "vs-dropdown__checkbox",
    "vs-dropdown__radio"
  ],
  "states": ["is-open", "is-disabled"],
  "variants": ["vs-dropdown--split", "vs-dropdown--hover", "vs-dropdown--end", "vs-dropdown--sm", "vs-dropdown--lg"]
}
```
