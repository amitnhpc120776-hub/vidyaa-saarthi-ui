# STEP 2 — Convert External HTML → VIS HTML Snippet

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
Use only previous steps' outputs as inputs.

## Your Tasks (Step 2)

### Primitive Reuse Enforcement (HTML)

While generating the HTML, you MUST reuse existing VIS primitive components
(vs-icon, vs-btn, vs-input, vs-close, vs-badge, vs-divider, vs-spinner, etc.)
whenever the BEM API requires a button, icon, input field, close action,
badge, divider, or loading indicator.

You MUST NOT create custom HTML structures that duplicate the behavior of
a primitive component.

Examples:

- For buttons, always use <button class="vs-btn ...">...</button>.
- For icons, always use <span class="vs-icon">...</span>.
- For close actions, use vs-close or vs-btn--icon.
- For inputs, embed <div class="vs-input">...</div>.
- For dividers, use <div class="vs-divider"></div>.

### Generate the pure HTML snippet using the Component API:

Use VIS namespace and strict BEM.
No Bootstrap dependencies or attributes.
No inline CSS or JS in HTML.
Keep HTML minimal and semantic.
Demonstrate at least one variant or state in the markup if useful (use explicit BEM modifier or .is-\* class).

### HTML Requirements:

The HTML must follow the exact BEM anatomy from the Component API.
Include placeholders for text, icons, or content where required.
Do not write CSS or JS in this step.

### Forbidden HTML Structures

Do NOT introduce:

- Custom wrappers for icons (must use vs-icon)
- Custom button markup (must use vs-btn)
- Custom close-button markup (must use vs-close or vs-btn--icon)
- Custom input frame markup (must use vs-input)
- Custom badge or divider markup (must use vs-badge / vs-divider)
- Any HTML intended to replicate primitive component patterns

If the Component API calls for a primitive, reference the primitive directly
in the HTML structure.

## Output Format

Produce two sections in the output (store as css/components/vs-[component]/vs-[component].html):

Section 1 → "VIS HTML Snippet": Provide the full HTML block (only the component HTML).

Section 2 → "Notes for Integration": List any attributes or container rules needed for CSS or JS (e.g., required role attributes, data-\* hooks used by JS, ARIA expectations).

Do NOT include CSS or JS in this file.

========================
