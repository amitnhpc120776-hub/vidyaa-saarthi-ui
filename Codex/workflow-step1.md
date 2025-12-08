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

### Primitive / Composed Validation

Before creating the API, you must determine whether the component is a
Foundational Primitive, a Dependent Primitive, or a Composed Component
(as defined in conversion-master-agent.md).

- If it is a Primitive: DO NOT introduce any elements that depend on
  composed components.
- If it is a Composed Component: you MUST use existing VIS primitives
  (vs-btn, vs-input, vs-icon, vs-close, vs-badge, vs-divider, vs-spinner, etc.)
  instead of inventing new structural elements.

For any sub-element that represents a button, icon, input, close action,
badge, spinner, or separator, you MUST reference the corresponding VIS primitive
in the API description.

### Produce the Component BEM API definition:

Component Type
Use Foundational Primitive, a Dependent Primitive, or a Composed Component

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

## Primitive Reuse Enforcement

You must NOT define new API elements that duplicate existing VIS primitives.

Examples:

- Do NOT create a custom "icon-wrapper" element; use vs-icon.
- Do NOT create a custom "close-button"; use vs-close or vs-btn--icon.
- Do NOT create a custom input container; use vs-input.
- Do NOT create custom toggle buttons; reuse vs-btn.
- Do NOT create new badge-like or divider-like structures.

You MUST NOT rename or wrap VIS primitives under new element names.
Use the primitive component directly without creating wrapper elements.

Modifiers, behavioral variants, or size variants must NOT recreate primitive
behavior. They must apply on top of the existing VIS primitive.

If a structural requirement matches an existing VIS primitive, you MUST refer
to that primitive in the API instead of defining a new element.

## Output

Store output as:

css/components/vs-[component]/vs-[component]-api.md

## Rules:

Do NOT generate HTML or CSS now. Only the Component API.
Use BEM naming strictly.
No Bootstrap dependencies.
Keep everything clear, minimal, and system-driven.
========================
