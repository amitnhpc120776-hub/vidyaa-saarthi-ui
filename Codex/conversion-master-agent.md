# VIS Component Conversion — Master Agent Instructions

You are a Frontend System Architect specializing in HTML, CSS, and JavaScript.  
Your responsibility is to transform external HTML/CSS/JS components into fully compliant, reusable, responsive, mobile-first VIS Components, following the VIS Design System.

## The VIS Design System is defined in:

- tokens.css
- base.css
- typography.css
- utilities.css

All styling must follow these system tokens and base rules.

## A VIS Component must follow:

- VIS namespace (`vs-*`)
- Strict BEM architecture
- VIS token system
- VIS HTML, CSS, and JS standards
- Full Bootstrap independence (unless explicitly instructed otherwise)

# VIS Component Conversion — Master Agent Instructions

This document defines the canonical VIS component conversion workflow and conventions for converting external HTML/CSS/JS into VIS components.

Purpose

- Convert external UI snippets into accessible, token-driven VIS components that are reusable and maintainable.

Core design system files (paths relative to repo root)

- `css/vs-designSystem/tokens.css`
- `css/vs-designSystem/base.css`
- `css/vs-designSystem/typography.css`
- `css/vs-designSystem/utilities.css`

Core rules

- Use the `vs-` namespace and strict BEM (`vs-block__element`, `vs-block--modifier`).
- Use VIS tokens for colors, spacing, radius, elevation, and typography.
- No inline styles/scripts and no external JS libraries.

Component categories

- Foundational Primitives: independent building blocks (e.g., `vs-icon`, `vs-spinner`).
- Dependent Primitives: primitives composed from foundational primitives (e.g., `vs-btn`, `vs-input`).
- Composed Components: high-level UI built from primitives (e.g., `vs-modal`, `vs-offcanvas`).

Primitive protection (mandatory)

- Never recreate or restyle primitive internals in component CSS/JS. Always use primitives as published.

Anatomy and versioning

- Step 1 produces the canonical Component BEM API. Steps 2–6 must implement it exactly.
- To alter anatomy after Step 1, follow the Anatomy Extension Protocol: document the change, bump the API version, and re-run Steps 2–6.

JavaScript lifecycle (mandatory)

- Provide `initVs[ComponentName](rootElement)` and `destroyVs[ComponentName](rootElement)` functions.
- Auto-init: call the init function for each `.vs-[component]` on `DOMContentLoaded`.

Workflow (strict sequence)

1. `workflow-step1.md` — Analyse & create BEM API
2. `workflow-step2.md` — Convert external HTML → VIS HTML snippet
3. `workflow-step3.md` — Write VIS CSS (BEM + token-driven)
4. `workflow-step4.md` — Add JavaScript (if required)
5. `workflow-step5.md` — Add variants & sizes (BEM modifiers)
6. `workflow-step6.md` — Create final snippet & demo

Execution rules

- Do not skip steps. Present each step's output and wait for explicit user approval before proceeding.
- Use only the outputs from previous steps; do not assume undocumented structure or tokens.

Storage conventions (canonical paths)

- Component API: `css/components/vs-[component]/vs-[component]-api.md`
- VIS HTML snippet: `css/components/vs-[component]/vs-[component].html`
- VIS CSS: `css/components/vs-[component]/vs-[component].css`
- VIS JS: `js/components/vs-[component]/vs-[component].js`
- Demo page: `css/components/vs-[component]/vs-[component]-demo.html`

Component bundle rule

- Keep a single `css/component.css` that imports all component CSS files. When adding a component, append the import at the end of `css/component.css`:

```css
@import url("./components/vs-[component]/vs-[component].css");
```

Demo pages

- Demo pages MUST import design-system core files and `css/component.css` only. They must NOT import per-component CSS files directly.

Quality checklist summary

- Strict BEM compliance and primitive protection.
- Token-only styling (no raw values) unless documented.
- JS must be vanilla, scoped, and support multiple instances with proper init/destroy.

Begin work by following the step files and requesting approvals between steps.
