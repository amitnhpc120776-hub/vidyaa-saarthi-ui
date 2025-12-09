# STEP 3 — Write VIS CSS (BEM + Token Driven)

Purpose

- Convert external CSS into a token-driven, BEM-scoped component stylesheet that implements the structural rules from Step 1 and the HTML from Step 2.

Inputs (required)

- `conversion-master-agent.md`
- `css/components/vs-[component]/vs-[component]-api.md` (Step 1 API)
- `css/components/vs-[component]/vs-[component].html` (Step 2 HTML)
- Design system files under `css/vs-designSystem/`

What to create

- `css/components/vs-[component]/vs-[component].css`

Important rules

- Scope every selector to the component block: `.vs-[component] { ... }` and `.vs-[component]__element { ... }`.
- Never target primitives globally; only target them as descendants of the component (e.g., `.vs-[component] .vs-btn { ... }`).
- Use VIS tokens exclusively for colors, spacing, radii, shadows, and typography (`var(--space-12)`, `var(--primary-600)`, etc.). Do not use raw px, rem, hex, or rgba values.
- Do not restyle primitive internals (vs-btn, vs-input, vs-icon, vs-close, vs-badge, vs-divider, vs-spinner, etc.).

Component CSS bundle

- After creating `css/components/vs-[component]/vs-[component].css`, append the import to the end of `css/component.css`:

```css
@import url("./components/vs-[component]/vs-[component].css");
```

Structural validation

- Ensure selectors reference only elements from the Step 1 Canonical Anatomy.
- Do not introduce new elements, helper classes, or state classes not declared in Step 1.

Token audit

- At the end of the CSS file include a token verification comment listing tokens used and explicitly stating any missing tokens required (do NOT invent tokens). Example:

```css
/* Token Verification:
   - Spacing tokens used: --space-8, --space-12
   - Color tokens used: --primary-600, --neutral-200
   - Radius tokens used: --radius-md
   - Typography tokens used: --text-body-md-size
   - Raw values: NONE
*/
```

State CSS

- Step 3 contains static styling only. If JS toggles `.is-*` states defined in Step 1, append minimal token-driven CSS for those states in Step 4 (not here).

Deliverable

- Provide the path `css/components/vs-[component]/vs-[component].css` (full file content when requested).

```

```
