# STEP 6 — Create Final Reusable Component Snippet & Demo Page

This file is part of the Six-Step VIS Component Conversion Workflow.  
Follow the instructions defined in conversion-master-agent.md.

## Input Files You Must Use

- conversion-master-agent.md
- VIS Design System:
  - tokens.css
  - base.css
  - typography.css
  - utilities.css
- VIS Component Files (outputs of previous steps):
  - VIS HTML → css/components/vs-[component]/vs-[component].html
  - VIS CSS → css/components/vs-[component]/vs-[component].css
  - VIS JS → js/components/vs-[component]/vs-[component].js (if required)

Use only previous steps’ outputs.  
No new assumptions are allowed.

---

## Your Tasks (Step 6)

### 1. Produce the Final Reusable Component HTML Snippet

This snippet MUST be:

- Exactly the canonical markup defined in Step 2
- Matching the Canonical Anatomy Block from Step 1
- **Free from any variants (`vs-[component]--*`) or `.is-*` state classes**
- Free from demo wrappers, experimental markup, or layout scaffolding
- Strict VIS namespace + BEM
- Strict primitive usage (vs-icon, vs-btn, vs-input, vs-badge, etc.)

This is the **production-ready** copy-paste block for developers.

You MUST NOT:

- Add or remove elements versus Step 1 anatomy
- Introduce new wrappers or states
- Change primitive markup
- Add variant or state classes to the snippet (variants/states are demonstrated only in the demo page)

---

### 2. Produce a Fully Working Demo/Test Page

The demo page MUST:

- Import ONLY VIS system files + global `component.css`
- MUST NOT import individual component CSS files
- Use canonical import patterns, for example:

Correct:

```html
<link rel="stylesheet" href="../../component.css" />
```

Incorrect:

```html
<link rel="stylesheet" href="../vs-[component]/vs-[component].css" />
<!-- ❌ -->
```

> Note: The exact relative path may differ depending on your project root,
> but the intent is: **use the global component bundle, not per-component CSS.**

---

### Demo/Test Page Requirements

You MUST:

1. Include VIS system stylesheets in `<head>`:

   - tokens.css
   - base.css
   - typography.css
   - utilities.css
   - component.css

2. Include the component JS file (if required) at the end of `<body>`,
   using the appropriate relative path, e.g.:

   ```html
   <script src="[relative-path-to]/js/components/vs-[component]/vs-[component].js"></script>
   ```

3. Insert the component HTML snippet **exactly as-is** inside preview blocks
   (no structural modifications).

4. Use VIS utility classes for layout/spacing (`mt-24`, `mb-16`, `p-12`, flex utilities, etc.).

5. Show at minimum:

   - Default component

   - One visual variant

   - One size variant

   - One interactive state (if applicable)

   > Variants and `.is-*` states are applied **around** or **on** the canonical snippet
   > in the demo page, not baked into the snippet file itself.

6. Use NO external libraries, CDNs, or inline scripts.

7. Use NO custom wrappers around VIS primitives.

8. Add NO markup that contradicts or extends the BEM anatomy from Step 1.

---

### Strict Primitive Reuse in Demo Pages

You MUST NOT create alternative markup for core primitives:

- vs-btn
- vs-input
- vs-icon
- vs-close
- vs-checkbox
- vs-radio
- vs-switch
- vs-badge
- vs-divider
- vs-spinner

Use them exactly as defined in their own components, with their public BEM classes only.

---

## Structural Consistency Validation (Against Steps 1–5)

Before finalizing Step 6 output, Codex MUST validate:

### Snippet validation

- Snippet matches Step 1 Canonical Anatomy exactly.
- No extra/unlisted elements.
- No missing required elements.
- No invented wrappers.
- **Snippet contains no variant (`vs-[component]--*`) or `.is-*` state classes.**
- Uses primitives where Step 1/2 indicate them.

### Demo validation

- Demo renders the snippet exactly (no structural modifications).
- No conflicts between snippet, CSS, and JS behavior.
- Variants/sizes/states demoed match the Step 1 API.
- JS selectors from Step 4 match the demo HTML structure.
- The demo uses the same `.vs-[component]` root as defined previously.

If any mismatch exists, Codex MUST correct the snippet or demo before presenting output.

---

## Output Format (Mandatory)

### OUTPUT SECTION 1 → Final Reusable Component HTML Snippet

Provide the exact snippet developers will use in production:

- No demo wrappers.
- No extra containers beyond the block root and its BEM elements.
- No placeholder elements outside the defined anatomy.
- No variants or `.is-*` states baked into the snippet.
- Must match:

  - Step 1 Canonical Anatomy Block, and
  - Step 2 VIS HTML structure.

---

### OUTPUT SECTION 2 → Full Demo/Test HTML Page

Provide a complete, ready-to-run HTML page including:

- `<html>`, `<head>`, VIS system imports

- `<body>` containing:

  - one or more preview blocks
  - each block using the canonical snippet with:

    - default
    - one variant
    - one size
    - one interactive state (when applicable)

- Component JS import (if the component requires JS)

This file MUST be stored as:

```text
css/components/vs-[component]/vs-[component]-demo.html
```

---

### OUTPUT SECTION 3 → Usage Notes

Explain clearly:

- How developers should embed this component in production pages.

- How to apply variants (`vs-[component]--primary`, etc.).

- How to apply sizes (`vs-[component]--lg`, etc.).

- How the JS lifecycle works, for example:

  ```javascript
  // If using plain HTML:
  // Auto-init will run on DOMContentLoaded inside vs-[component].js

  // If dynamically inserting a component:
  initVs[ComponentName](rootElement);

  // If removing a component:
  destroyVs[ComponentName](rootElement);
  ```

- Any accessibility requirements (ARIA attributes, keyboard behavior).

- Any required parent structure (only if dictated by the API/Anatomy).

---

## OUTPUT SECTION 4 — Quality Checklist (MANDATORY BEFORE COMPLETING OUTPUT)

Before finalizing Step 6, validate:

### Snippet Requirements

- Uses ONLY VIS BEM classes.
- Matches Step 1 Canonical Anatomy EXACTLY.
- No Bootstrap classes.
- No inline styles or inline scripts.
- No invented wrappers.
- No missing BEM elements.
- **No variant (`vs-[component]--*`) or `.is-*` state classes in the snippet.**
- Correct and consistent use of primitives (vs-btn, vs-input, vs-icon, etc.).

### Demo Requirements

- Imports all required VIS system files.
- Imports only the global `component.css` (no direct per-component CSS).
- Includes at least:

  - one default example
  - one visual variant
  - one size variant
  - one interactive state (if the component is interactive)

- Does NOT introduce alternative markup for VIS primitives.
- Demonstrates correct interactive behavior where JS exists.
- Visual behavior is token-driven (no ad-hoc styling).

### Behavior & Accessibility

- Component JS file is correctly referenced.
- No JS errors when running the demo.
- ARIA attributes are present where required and updated by JS.
- Keyboard navigation and focus behavior work as expected.
- For overlays/dialogs, focus is managed correctly, and ESC closes where applicable.

### Final Storage Validation

Confirm that the demo file is stored exactly at:

```text
css/components/vs-[component]/vs-[component]-demo.html
```

and uses only the approved VIS system + component bundle imports.

```

---

```
