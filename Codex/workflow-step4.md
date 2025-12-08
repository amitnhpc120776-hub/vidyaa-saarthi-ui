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
- vs-input
- vs-icon
- vs-close
- vs-checkbox
- vs-radio
- vs-switch
- vs-badge
- vs-divider
- vs-spinner

If a composed component requires interaction with a primitive (click, toggle, show/hide):

- You MUST use the primitive exactly as implemented in its own component JS/CSS.
- You MUST NOT:
  - Attach behavior directly to internal SVGs or internal elements of a primitive.
  - Override focus/active/disabled behavior of vs-btn.
  - Modify typing/validation behavior of vs-input.
  - Change vs-close click behavior beyond using it to trigger **component-level** logic.

JS in this step MUST ONLY manage **component-level behavior** (open/close, expand/collapse, visibility, etc.), never primitive internals.

---

## 2. Allowed State Management (INTERACTIVE STATES ONLY)

JS must toggle **only** `.is-*` state classes that are defined in Step 1 for this component.

Typical examples:

- `.is-visible`
- `.is-active`
- `.is-open`
- `.is-expanded`
- `.is-collapsed`
- `.is-checked`
- `.is-disabled`
- `.is-loading`
- `.is-focus-visible`

### Strict rules:

- You MUST NOT invent new `.is-*` states in JS that are not listed in Step 1.
- You MUST NOT remove or overwrite **externally controlled** states, such as:
  - `.is-error`
  - `.is-success`
  - `.is-warning`
  - or any state marked as “externally controlled” (e.g. server/validation driven).

JS may **read** externally controlled states to adjust behavior, but must not clear them.

---

## 3. Core JS Rules

- JS must be **independent** (NO Bootstrap, NO jQuery, NO external libraries).
- Use only **vanilla JavaScript**.
- Do NOT use Bootstrap’s `data-bs-*` attributes.
- All logic must work with VIS markup only (BEM selectors).
- JS must implement the functional behavior defined in:
  - `css/components/vs-[component]/vs-[component]-api.md`
- JS should toggle `.is-*` classes to trigger visual and accessibility changes.
- JS MUST NOT inject inline styles (no `element.style.xyz = ...` unless absolutely necessary).

---

## 4. Required Structure — init/destroy Lifecycle (MANDATORY)

Each component MUST provide an explicit lifecycle API so it can be:

- initialized at `DOMContentLoaded`, and
- re-initialized or destroyed when inserted/removed dynamically.

### You MUST define at least:

```javascript
function initVs[ComponentName](rootElement) {
  // Attach listeners scoped to rootElement
  // Initialize ARIA attributes
  // Initialize default state
}

function destroyVs[ComponentName](rootElement) {
  // Remove all event listeners attached in init
  // Clean up timers, observers, etc.
}
```

Where `[ComponentName]` is PascalCase for the block, e.g.:

- `vs-radio` → `initVsRadio`, `destroyVsRadio`
- `vs-dropdown` → `initVsDropdown`, `destroyVsDropdown`

### Auto-init pattern (static DOM)

You MUST also add a DOMContentLoaded hook:

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const components = document.querySelectorAll(".vs-[component]");

  components.forEach((componentEl) => {
    initVs[ComponentName](componentEl);
  });
});
```

### Dynamic usage (documentation only, not implemented here)

In the Usage Notes (output Section 3), you MUST document how developers can:

```javascript
// For dynamically added component root:
initVs[ComponentName](rootElement);

// Before removing from DOM:
destroyVs[ComponentName](rootElement);
```

#### Additional structural requirements:

- All DOM queries MUST be scoped inside `rootElement` (the `.vs-[component]` root).
- No global queries outside the root, except for:

  - focus management,
  - ESC key handling,
  - ARIA target resolution (via `aria-controls` or IDs).

---

## 5. Accessibility Requirements

You MUST:

- Add appropriate ARIA attributes where applicable, for example:

  - `aria-expanded`
  - `aria-hidden`
  - `aria-controls`
  - `role` (`dialog`, `alert`, `menu`, `tablist`, `radiogroup`, etc.)

- Implement ESC key handling where relevant (modals, dialogs, overlays).

- Ensure keyboard interactions are correct:

  - `Enter` and/or `Space` to activate clickable controls.
  - Arrow keys for menu, toolbar, or radio-group navigation when applicable.
  - Natural and predictable `Tab` order.

- For overlay/modal/dialog patterns:

  - Keep focus trapped inside when open (if appropriate).
  - Restore focus to the triggering element when closed.

---

## 6. CSS Additions for JS State Classes

If JavaScript toggles `.is-*` states that are defined in Step 1, you MUST:

- Append minimal, token-driven CSS to:

  ```
  css/components/vs-[component]/vs-[component].css
  ```

- Only for those `.is-*` selectors.

You MUST NOT:

- Add new visual variants (belongs to Step 5).
- Modify primitive component CSS.
- Redefine core layout beyond documented behavior.
- Introduce raw px/hex values; **token rules from Step 3 still apply**.

---

## Structural Consistency Validation (Against Steps 1–3)

Before finalizing Step 4, you MUST validate that:

- All JS selectors (`.vs-[component]`, `__element`, `--modifier`, `.is-*`) exist in:

  - Step 1 Canonical Anatomy Block
  - Step 2 HTML
  - Step 3 CSS

- No new elements or states are referenced that don’t exist in the Step 1 API.

- All state classes toggled in JS:

  - either already have CSS in Step 3, or
  - will receive minimal state CSS added in this step.

If there is any mismatch, you MUST correct JS and/or request API/HTML/CSS updates before proceeding.

---

## Output (Format)

Your output MUST contain these sections:

### Section 1 → “JavaScript for Component Behavior”

- Provide the full JS code in a code block.
- This is the content for:

  ```
  js/components/vs-[component]/vs-[component].js
  ```

It MUST include:

- `initVs[ComponentName](rootElement)`
- `destroyVs[ComponentName](rootElement)`
- The DOMContentLoaded auto-init block

### Section 2 → “Required CSS Additions for State Classes”

- Provide ONLY the additional CSS needed for `.is-*` states (if any).
- This CSS MUST:

  - be token-driven, and
  - be appended to:

    ```
    css/components/vs-[component]/vs-[component].css
    ```

### Section 3 → “Usage Notes”

Explain clearly:

- How to include the JS file (script tag path).
- How `initVs[ComponentName]` and `destroyVs[ComponentName]` should be used.
- Any required `data-*` attributes or ARIA hooks.
- Assumptions about:

  - multiple instances,
  - dynamic DOM insertion/removal,
  - keyboard and accessibility expectations.

---

## Storage

Store the JS file as:

```
js/components/vs-[component]/vs-[component].js
```

---

## Quality Checklist

Before finalizing Step 4 output, verify that:

- JS is fully scoped to `.vs-[component]` roots.
- Only documented BEM elements and `.is-*` states are used.
- JS manages ONLY interactive states and does NOT remove externally controlled states.
- No inline styles are used.
- Event listeners are attached and cleaned up correctly (via `destroyVs[ComponentName]`).
- Keyboard accessibility is implemented where relevant.
- ARIA attributes are managed correctly.
- Multiple component instances are supported with no conflicts.
- DOM queries are scoped and minimal (no unnecessary global queries).
- No external JS dependencies (no Bootstrap, no jQuery, no third-party libs).
- Primitive behavior is neither overridden nor duplicated.
- Any `.is-*` states toggled by JS have corresponding CSS token-based styles.

```

---

```
