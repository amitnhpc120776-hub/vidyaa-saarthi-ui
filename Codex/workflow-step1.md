# STEP 1 — Analyse & Create Component BEM API

This file is part of the Six-Step VIS Component Conversion Workflow. Follow the instructions defined in conversion-master-agent.md.

## Your Role in Step 1

You must analyse the external HTML component provided by the user and create a VIS Component API using:

VIS namespace (vs-\*)
Strict BEM architecture
VIS Component design philosophy
No Bootstrap assumptions
No styling decisions (CSS comes later)
This STEP does not produce HTML or CSS. It only produces the Component API definition, which will guide all later steps.

### Input Files You Must Use

conversion-master-agent.md
VIS Design System:
tokens.css
base.css
typography.css
utilities.css
The external HTML snippet provided by the user
Do not use any previous component context unless explicitly given.

## Tasks (Step 1)

Produce the Component BEM API definition:

Component Name
Use the VIS namespace: vs-[component-name]. Examples: vs-tooltip, vs-modal, vs-dropdown, vs-login-form.

Component Anatomy
List internal structural elements using BEM syntax and a short description for each. Format:

vs-[component-name]\_\_[element-name] — short description
Include only what is logically required for the component. Do not include styles or attributes.

Variants (BEM Modifiers)
List all relevant variants as BEM modifiers:

vs-[component-name]--[variant-name]
Examples: visual variants, behavioral variants, size variants.
Component States
List dynamic states the component may enter (e.g., .is-active, .is-open, .is-visible, .is-disabled, .is-error) and describe when they apply.

Responsive Behavior
Provide responsive guidance only if necessary (mobile-first; use VIS breakpoints).

## Output

Store output as:

css/components/vs-[component]/vs-[component]-api.md

## Rules:

Do NOT generate HTML or CSS now. Only the Component API.
Use BEM naming strictly.
No Bootstrap dependencies.
Keep everything clear, minimal, and system-driven.
========================
