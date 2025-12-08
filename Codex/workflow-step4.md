# STEP 4 — Add JavaScript (if required)

This file is part of the Six-Step VIS Component Conversion Workflow. Follow the instructions defined in conversion-master-agent.md.

## Input Files You Must Use

conversion-master-agent.md
VIS Design System:
tokens.css
base.css
typography.css
utilities.css
The external HTML snippet provided by the user
Component BEM API produced in STEP 1 (css/components/vs-[component]/vs-[component]-api.md)
VIS HTML snippet produced in STEP 2 (css/components/vs-[component]/vs-[component].html)
VIS CSS produced in STEP 3 (css/components/vs-[component]/vs-[component].css)
Only use previous steps of this workflow.

## Your Tasks (Step 4)

Add all required JavaScript behavior to make the component functional.

### Rules (strict)

#### Primitive Behavior Protection (strict)

JavaScript MUST NOT modify, override, or recreate the internal behavior of VIS
primitive components such as vs-btn, vs-input, vs-icon, vs-close, vs-checkbox,
vs-radio, vs-switch, vs-badge, vs-divider, or vs-spinner.

If a composed component requires interaction with a primitive
(e.g., clicking a button, toggling a close action, showing a spinner), you MUST
use the primitive exactly as defined. Do NOT implement duplicate logic.

Examples:

- Do NOT attach custom behavior to inner SVGs of vs-icon.
- Do NOT override focus, active, or disabled behavior of vs-btn.
- Do NOT modify typing or validation behavior of vs-input.
- Do NOT alter vs-close click handling except to trigger component-level logic.

JS in this step MUST ONLY manage component-level behavior (open/close, expand,
collapse, toggle states) and MUST NOT redefine primitive functionality.

#### Other Rules (Strict)

JS must be independent (NO Bootstrap, NO jQuery).
Use only vanilla JavaScript.
Do NOT use Bootstrap’s data-bs-\* attributes or external libraries.
All logic must work with VIS markup only (use BEM selectors).
JS must implement functional behavior defined in the component API (vs-[component]-api.md).
Handle all interactive behavior required by the component (e.g., toggle menus, open/close, form submission handling, toggles, aria updates).
JS must toggle BEM state classes such as .is-visible, .is-active, .is-open, .is-expanded, .is-disabled to trigger CSS transitions.
JS should add/remove these classes to trigger CSS transitions (no inline styles).
Required structure (module pattern) — script must support multiple component instances:

document.addEventListener("DOMContentLoaded", () => {  const components = document.querySelectorAll(".vs-[component]");  components.forEach(component => {    // Query internal elements (BEM)    // Add event listeners    // Toggle state classes    // Handle accessibility    // Provide cleanup if needed  });});
Accessibility:
Add ARIA attributes where applicable (aria-expanded, aria-hidden, aria-controls, role="alert", etc.)
Implement ESC key handling where relevant (modals, dialogs).
Ensure keyboard interactions are complete (Enter, Space, Tab management if relevant).
CSS additions required for JS state classes:
If JavaScript introduces .is-\* states, append minimal token-driven CSS to css/components/vs-[component]/vs-[component].css for those state selectors only.

## Output (format)

### Your output must contain the following sections:

Section 1 → “JavaScript for Component Behavior”: Full JS code block.
Section 2 → “Required CSS Additions for State Classes”: ONLY new CSS needed for .is-\* classes (if any).
Section 3 → “Usage Notes”: How to include the JS (script tag path), initialization notes, and any attributes required in HTML.

### Storage

Store the JS file as:

js/components/vs-[component]/vs-[component].js

### Quality Checklist

Before finalizing:

JS scoped to component root.
Uses BEM selectors only.
Manages states through .is-\* classes.
No inline styles.
Clean event lifecycle and memory-safe handlers.
Keyboard accessibility implemented.
ARIA attributes updated dynamically.
Supports multiple component instances.
Includes init() and destroy() lifecycle helpers.
Cached DOM queries and minimal DOM thrash.
No external JS dependencies.
========================
