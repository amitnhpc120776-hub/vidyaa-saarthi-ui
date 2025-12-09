# STEP 2 — Convert External HTML → VIS HTML Snippet

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

Use only previous steps' outputs.  
No new assumptions are allowed.

# 1. Primitive Reuse Enforcement (HTML-Level Rules)

When generating HTML, you MUST reuse VIS primitive components exactly as defined:

- `vs-btn`
- `vs-icon`
- `vs-close`
- `vs-input`
- `vs-checkbox`
- `vs-radio`
- `vs-switch`
- `vs-badge`
- `vs-divider`
- `vs-spinner`

ANY markup representing a button, icon, input field, close action, badge, spinner, or divider MUST be replaced by the corresponding VIS primitive.

### Forbidden:

- Custom `<button>` markup

# STEP 2 — Convert External HTML → VIS HTML Snippet

Purpose

- Convert the external HTML into a production-ready VIS HTML snippet that exactly matches the Canonical Anatomy from Step 1.

Inputs (required)

- `conversion-master-agent.md`
- `css/components/vs-[component]/vs-[component]-api.md` (Step 1 API)
- Design system files under `css/vs-designSystem/`
- External HTML provided by the user

Key rules (summary)

- Reuse VIS primitives exactly: `vs-btn`, `vs-input`, `vs-icon`, `vs-close`, `vs-badge`, `vs-divider`, `vs-spinner`, `vs-checkbox`, `vs-radio`, `vs-switch`.
- The Step 2 snippet must be pure production HTML with NO variant modifiers (`vs-[component]--*`) and NO `.is-*` state classes.
- No inline styles or scripts. No Bootstrap or other framework classes.

Allowed wrappers

- Structural/layout wrappers defined in the Step 1 anatomy (e.g., `vs-[component]__actions`, `vs-[component]__body`).

Forbidden wrappers

- Any wrapper that attempts to recreate primitive behavior (custom buttons, fake inputs, custom icon containers).

Validation requirements

- Root element must be exactly `vs-[component]`.
- All elements present in the snippet must be listed in the Step 1 Canonical Anatomy and only those elements may appear.
- Primitive usage must match published primitives (no alternative markup for a primitive).

Output file and structure
Save as: `css/components/vs-[component]/vs-[component].html`

Section 1 — VIS HTML Snippet

- Provide the exact copy-paste block developers will use. No demo scaffolding. No variant or state classes.

Section 2 — Notes for integration

- Describe required ARIA attributes, `data-*` hooks for JS (if Step 4 needs them), and any parent/container constraints.

When ready

- Validate the snippet against the Step 1 anatomy; if mismatches are found, correct them before presenting the file.
