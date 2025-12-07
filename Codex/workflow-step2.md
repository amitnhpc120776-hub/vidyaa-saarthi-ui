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

Generate the pure HTML snippet using the Component API:

Use VIS namespace and strict BEM.
No Bootstrap dependencies or attributes.
No inline CSS or JS in HTML.
Keep HTML minimal and semantic.
Demonstrate at least one variant or state in the markup if useful (use explicit BEM modifier or .is-\* class).

### HTML Requirements:

The HTML must follow the exact BEM anatomy from the Component API.
Include placeholders for text, icons, or content where required.
Do not write CSS or JS in this step.

## Output Format

Produce two sections in the output (store as css/components/vs-[component]/vs-[component].html):

Section 1 → "VIS HTML Snippet": Provide the full HTML block (only the component HTML).

Section 2 → "Notes for Integration": List any attributes or container rules needed for CSS or JS (e.g., required role attributes, data-\* hooks used by JS, ARIA expectations).

Do NOT include CSS or JS in this file.

========================
