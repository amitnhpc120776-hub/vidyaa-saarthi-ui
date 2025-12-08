# STEP 6 — Create Final Reusable Component Snippet & Demo Page

This file is part of the Six-Step VIS Component Conversion Workflow. Follow the instructions defined in conversion-master-agent.md.

## Input Files You Must Use

conversion-master-agent.md
VIS Design System:
tokens.css
base.css
typography.css
utilities.css
VIS Component Files (outputs of previous steps):
VIS HTML → css/components/vs-[component]/vs-[component].html
VIS CSS → css/components/vs-[component]/vs-[component].css
VIS JS → js/components/vs-[component]/vs-[component].js (if the component requires JS)
Only use previous steps of this workflow.

## Your Tasks (Step 6)

### Produce:

Final Reusable Component HTML Snippet — exact snippet developers will copy into pages. No wrapper demo markup. Follow the BEM anatomy exactly.

A Fully Working Demo/Test Page — ready-to-run HTML page that loads VIS system files and shows the component in default + at least one variant + one size + one interactive state where applicable.

### RULES

No inline CSS, <style> blocks, inline JS, or external CDNs.
Use only VIS system + component files.
All demo/test pages MUST import css/component.css (the global component bundle).
They MUST NOT import individual component CSS files directly.

Correct:

<link rel="stylesheet" href="../../component.css">

Incorrect:

<link rel="stylesheet" href="../vs-[component]/vs-[component].css">  ❌

Demo must import VIS system CSS using canonical vs-designSystem path.
Demo/Test Page Requirements
Include VIS system stylesheet imports in <head>:
Include VIS JavaScript (if applicable) at the end of <body>:
Insert Component HTML into a preview container:
Do NOT modify the component HTML.

Do NOT create alternative or demo-only markup for VIS primitives
(vs-btn, vs-input, vs-icon, vs-close, vs-badge, vs-divider, vs-spinner, etc.).
Use primitives exactly as defined in their own components and only through
their public BEM classes.

Provide multiple preview blocks — each variant/size/state shown inside:
Show at minimum:

Default component
One visual variant
One size variant
One interactive state (if possible)
Use VIS utilities for spacing and alignment (e.g., utility classes like mt-24).

Layout Rules
No external layout frameworks
Keep page simple
Use VIS utilities only

## Output

Your output must contain the following sections:

### OUTPUT SECTION 1 → Final Reusable Component HTML Snippet

Provide the exact final snippet developers will use in production pages (no demo wrappers).

### OUTPUT SECTION 2 → Full Demo/Test HTML Page

A complete, ready-to-run HTML page including <html>, <head>, imports, component HTML, and scripts as described above. Store as:

css/components/vs-[component]/vs-[component]-demo.html

### OUTPUT SECTION 3 → Usage Notes

Explain:

How developers should use this component.
How to apply variants: vs-[component]--primary, etc.
How to apply sizes: vs-[component]--lg, etc.
JS initialization instructions (if required).
Accessibility requirements.
Quality Checklist (MANDATORY BEFORE COMPLETING OUTPUT)
HTML uses only VIS BEM classes.
No Bootstrap classes.
No inline styles or scripts.
Demo imports correct design-system files (canonical vs-designSystem).
Component uses VIS tokens.
JS (if any) is vanilla and scoped.
Storage Rule
Store final component demo as:

css/components/vs-[component]/vs-[component]-demo.html

### OUTPUT Section 4 Quality Checklist (MANDATORY BEFORE COMPLETING OUTPUT)

Demo does not introduce new markup or behavior for VIS primitive components
(vs-btn, vs-input, vs-icon, vs-close, vs-checkbox, vs-radio, vs-switch, vs-badge, vs-divider, vs-spinner).
