# STEP 4 — Add JavaScript (if required)

This file is part of the Six-Step VIS Component Conversion Workflow.  
Follow the instructions defined in conversion-master-agent.md.

## Input Files You Must Use

- conversion-master-agent.md
- VIS Design System:
  - tokens.css
  - base.css
  - typography.css
  - utilities.css
- External HTML snippet provided by the user
- Component BEM API produced in STEP 1:
  - css/components/vs-[component]/vs-[component]-api.md
- VIS HTML snippet produced in STEP 2:
  - css/components/vs-[component]/vs-[component].html
- VIS CSS produced in STEP 3:
  - css/components/vs-[component]/vs-[component].css

Only use previous steps of this workflow.  
No new assumptions are allowed.

## Your Tasks (Step 4)

Add all required JavaScript behavior to make the component **functional and accessible**, strictly following:

- The Component API and Canonical Anatomy (Step 1)
- The HTML structure (Step 2)
- The CSS and state selectors (Step 3)

---

## 1. Primitive Behavior Protection (STRICT)

JavaScript MUST NOT modify, override, or recreate the internal behavior of VIS primitive components:

- vs-btn

# STEP 4 — Add JavaScript (if required)

Purpose

- Implement component-level JavaScript to make the component functional, accessible, and re-initializable. JS must manage only component-level behavior (not primitive internals).

Inputs (required)

- `conversion-master-agent.md`
- `css/components/vs-[component]/vs-[component]-api.md` (Step 1 API)
- `css/components/vs-[component]/vs-[component].html` (Step 2 HTML)
- `css/components/vs-[component]/vs-[component].css` (Step 3 CSS)

Core constraints (summary)

- Use vanilla JS only. No external libs.
- Do not override or reach into primitive internals (`vs-btn`, `vs-input`, `vs-icon`, etc.).
- Toggle only `.is-*` state classes declared in Step 1. Do not invent or remove externally controlled states.

Required lifecycle API

- `initVs[ComponentName](rootElement)` — attach listeners scoped to `rootElement`, initialize ARIA and default state.
- `destroyVs[ComponentName](rootElement)` — remove listeners, cleanup timers/observers.

Auto-init pattern

- Include a `DOMContentLoaded` auto-init that finds `.vs-[component]` elements and initializes them.

Scoping & DOM queries

- All DOM queries must be scoped inside the `rootElement`. Global queries are allowed only for cross-component concerns such as focus management, ESC key handling, or resolving `aria-controls` targets.

Accessibility

- Add/maintain ARIA attributes as required (`aria-expanded`, `aria-hidden`, `aria-controls`, `role=dialog`, etc.).
- Implement keyboard interactions (Enter/Space activation, ESC to close overlays, arrow keys when applicable).
- For overlays, manage focus trap and restore focus to the trigger on close.

State CSS additions

- If your JS toggles `.is-*` states, append minimal token-driven CSS for those states to `css/components/vs-[component]/vs-[component].css` (this is done in Step 4). Do not add visual variants here.

Output sections (required)

1. JavaScript for Component Behavior — full JS code (to be saved as `js/components/vs-[component]/vs-[component].js`). Include `initVs[ComponentName]`, `destroyVs[ComponentName]`, and auto-init.
2. Required CSS Additions for State Classes — minimal token-driven CSS (if any) to append to the component stylesheet.
3. Usage Notes — script tag path, how to call `init`/`destroy`, data/ARIA hooks, multi-instance behavior, and accessibility expectations.

Storage

- Store JS at: `js/components/vs-[component]/vs-[component].js`.

Validation checklist

- JS uses only Step 1 BEM elements and Step 3 selectors.
- All `.is-*` states toggled by JS are declared in Step 1 and have CSS (existing or appended).
- Event listeners are removed in `destroyVs...`.
- No inline styles are applied by JS unless absolutely necessary and documented.
