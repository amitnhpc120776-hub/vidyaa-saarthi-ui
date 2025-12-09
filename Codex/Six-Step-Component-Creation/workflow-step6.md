# STEP 6 — Create Final Reusable Component Snippet & Demo Page

Purpose

- Produce the final production-ready HTML snippet (pure, no variants/states) and a demo/test page that exercises default, a variant, a size, and an interactive state.

Inputs (required)

- `css/components/vs-[component]/vs-[component]-api.md`
- `css/components/vs-[component]/vs-[component].html` (Step 2)
- `css/components/vs-[component]/vs-[component].css` (Step 3 + Step 5 appended modifiers)
- `js/components/vs-[component]/vs-[component].js` (if JS is required)
- Design system files under `css/vs-designSystem/`

Final snippet rules (mandatory)

- The final snippet MUST match the Step 1 anatomy and Step 2 HTML exactly.
- The snippet MUST NOT include any `vs-[component]--*` modifier classes or `.is-*` state classes — it must be a pure copy-paste block for production use.
- No demo wrappers, no layout scaffolding, and no experimental markup.

Demo page rules (mandatory)

- Import ONLY design-system core files and the global `css/component.css` bundle. Do NOT import per-component CSS directly.
- Include the component JS file at the end of `<body>` (if required) via the canonical path `js/components/vs-[component]/vs-[component].js`.
- Insert the canonical snippet exactly as-is in preview blocks. Apply variants/sizes/states around or on the snippet within the demo only.
- Use VIS utility classes for layout (e.g., `mt-24`, `p-12`) — avoid custom styling.
- No external libraries, CDNs, or inline scripts.

Minimum demo examples

1. Default example (canonical snippet)
2. One visual variant applied using a modifier on the root block (e.g., `.vs-[component]--primary`)
3. One size variant applied with `.vs-[component]--lg` or `.vs-[component]--sm`
4. One interactive state (applied by JS or `.is-*` class) demonstrating a behavior (e.g., open/close, loading)

Validation checklist before finishing

- Snippet matches the Step 1 Canonical Anatomy exactly and contains no modifier or state classes.
- Demo imports only `tokens.css`, `base.css`, `typography.css`, `utilities.css`, and `component.css`.
- The demo uses the canonical snippet unchanged for the default example.
- JS selectors and event hooks in `js/components/...` match the demo markup and work without errors.
- Accessibility: ARIA attributes present and keyboard interactions (Enter/Space/ESC/Tab) behave as expected.

Output files

- Final snippet will be saved at `css/components/vs-[component]/vs-[component].html` (unchanged from Step 2), and the demo saved at:

```
css/components/vs-[component]/vs-[component]-demo.html
```

Documentation & usage notes

- Provide clear instructions on embedding, how to apply variants and sizes (e.g., add `.vs-[component]--primary` on the root), and how JS lifecycle works:

```javascript
// Auto-init runs at DOMContentLoaded inside the component JS
// For dynamic insertion:
initVs[ComponentName](rootElement);
// Before removing:
destroyVs[ComponentName](rootElement);
```

Deliverables

1. OUTPUT SECTION 1 — Final Reusable Component HTML Snippet (exact copy of Step 2 snippet)
2. OUTPUT SECTION 2 — Full demo/test HTML page saved at `css/components/vs-[component]/vs-[component]-demo.html`
3. OUTPUT SECTION 3 — Usage notes describing embedding, variants, sizes, JS lifecycle, and accessibility notes
4. OUTPUT SECTION 4 — Completed quality checklist confirming all validations
