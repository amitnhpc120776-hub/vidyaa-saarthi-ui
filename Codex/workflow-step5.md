# STEP 5 — Add Variants & Sizes (BEM Modifiers)

Purpose

- Append token-driven variant and size modifier rules to the component stylesheet. Variants and sizes must reflect only those declared in the Step 1 API.

Inputs (required)

- `css/components/vs-[component]/vs-[component]-api.md` (Step 1 API)
- `css/components/vs-[component]/vs-[component].css` (Step 3 base CSS)

Where to add

- Append CSS to `css/components/vs-[component]/vs-[component].css` under this exact header:

```css
/* ========================================================================
   VARIANTS & SIZE MODIFIERS
   ======================================================================== */
```

Variant rules (summary)

- Implement visual variants as block modifiers: `.vs-[component]--primary`, `.vs-[component]--error`, etc.
- Element overrides must be scoped, e.g. `.vs-[component]--primary .vs-[component]__element { ... }`.
- Variants may change only visual properties (colors, background, border, shadow, token-based padding if required).
- Do NOT redefine primitive variants (never add `.vs-btn--primary {}` globally); only scope changes inside the component block if necessary.

Size rules (summary)

- Implement `.vs-[component]--sm`, `.vs-[component]--md`, `.vs-[component]--lg`.
- Sizes may alter spacing, padding, typography, and dimensions only, and must use VIS tokens.

Token compliance (mandatory)

- Use VIS tokens only. No raw px/rem/hex values.
- If a needed value has no token, add a comment noting the missing token and do not use a raw value.

Validation before finalizing

- Every modifier and size must be declared in Step 1 API. Do not invent new variants or sizes.
- Selectors must reference only elements from the canonical anatomy.
- No modifier must directly restyle primitive internals.

Output structure (when presenting changes)

1. Visual Variants — token-driven CSS for each variant (minimal overrides).
2. Size Modifiers — token-based CSS for small/medium/large.
3. Notes & Rules — guidance on usage, priority (e.g., `.is-disabled`), and responsiveness.
4. Quality Checklist — confirm BEM and token compliance.

Storage

- Append the CSS to `css/components/vs-[component]/vs-[component].css` under the required header. Do not create a separate file.

```

```
