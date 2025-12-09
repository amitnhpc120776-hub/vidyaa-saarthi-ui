# STEP 1 — Analyse & Create Component BEM API

This file is part of the Six-Step VIS Component Conversion Workflow.  
Follow the instructions defined in conversion-master-agent.md.

Your task in Step 1 is to define the **canonical, authoritative specification** of the component’s structure, variants, and states.  
This is the single source of truth used by Steps 2–6.

## Your Role in Step 1

Analyse the external HTML component provided by the user and create a VIS Component API using:

- VIS namespace (`vs-*`)
- Strict BEM architecture
- VIS Component design philosophy
- No Bootstrap assumptions
- No styling decisions (CSS comes later)

This step does **not** produce HTML or CSS.  
It creates the Component API, which drives everything that follows.

> **Note:**  
> Structural elements are defined here, but **no HTML attributes** (e.g., ARIA attributes) are defined at this stage.  
> Attributes are added later in **Step 2 (HTML)** or **Step 4 (JS)** as required for accessibility.

## Input Files You Must Use

- conversion-master-agent.md
- VIS Design System:
  - tokens.css
  - base.css
  - typography.css
  - utilities.css

# STEP 1 — Analyse & Create Component BEM API

Purpose

- Define the canonical component anatomy (BEM elements, variants, states). This API is the single source of truth for Steps 2–6.

Inputs (required)

- `conversion-master-agent.md`
- Design system tokens & core CSS under `css/vs-designSystem/` (`tokens.css`, `base.css`, `typography.css`, `utilities.css`)
- External HTML snippet provided by the user (if any)

What Step 1 produces

- A component API document stored at `css/components/vs-[component]/vs-[component]-api.md` that ends with the Canonical Anatomy Block (JSON-like).

Process & rules (high level)

- Classify the component as one of: Foundational Primitive, Dependent Primitive, or Composed Component.
- If the component is composed, reference existing primitives exactly (no duplication): `vs-btn`, `vs-input`, `vs-icon`, `vs-close`, `vs-badge`, `vs-divider`, `vs-spinner`, `vs-checkbox`, `vs-radio`, `vs-switch`.
- Allowed wrappers are structural/layout only (e.g., `vs-card__body`, `vs-modal__footer`). Forbidden wrappers attempt to recreate primitives (custom button wrappers, icon wrappers, fake input frames).

Required artifacts inside the API

- Component Type (one of the three categories)
- Component name (e.g., `vs-login-form`)
- Canonical anatomy: list each BEM element with a short one-line description, e.g.:
  - `vs-login-form__header` — title and optional branding
  - `vs-login-form__body` — form fields
  - `vs-login-form__actions` — submit/cancel controls
- Variants (BEM modifiers) listed as `vs-[component]--[variant]` (only variants discovered/required).
- States listed as `.is-[state]` with a one-line description (e.g., `.is-open`, `.is-loading`).
- Responsive notes only if the component changes structure across breakpoints.

Canonical Anatomy Block (mandatory)

- Produce a JSON-like block at the end of the API file. Example:

```json
{
  "block": "vs-login-form",
  "elements": [
    "vs-login-form__header",
    "vs-login-form__body",
    "vs-login-form__field",
    "vs-login-form__actions"
  ],
  "states": ["is-loading", "is-disabled"],
  "variants": ["vs-login-form--inline", "vs-login-form--compact"]
}
```

Anatomy Extension Protocol (if changes are required later)

- To change the canonical anatomy after Step 1 you MUST:
  1.  Update the API and explain the reason (accessibility, layout, JS behavior, or performance).

2.  Bump the API version (e.g., `v1.0 → v1.1`).
3.  Re-run Steps 2–6 so all artifacts remain consistent.

Validation criteria before finishing Step 1

- BEM syntax is correct and consistent.
- No element duplicates a VIS primitive; primitives are referenced directly.
- Variants and states are scoped and meaningful.
- The Canonical Anatomy Block accurately reflects the elements used.

Deliverable

- `css/components/vs-[component]/vs-[component]-api.md` containing the full API and Canonical Anatomy Block.
