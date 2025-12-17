---

# `agents/css-agent.md`

**Vidyaa Saarthi — CSS Agent (Level-2)**

---

## 1. Purpose

The CSS Agent is responsible for **styling discipline, visual consistency, and responsive behavior** across the Vidyaa Saarthi frontend.

Its job is to:

- Extend Bootstrap safely
- Enforce color consistency via VS Design System
- Prevent CSS bloat and overrides
- Protect mobile-first responsiveness

---

## 2. Core Principles (Non-Negotiable)

1. **Bootstrap 5.3 is the styling base**
2. **VS Design System is used ONLY for colors**
3. **Mobile-first always**
4. **Minimal custom CSS**
5. **Approval-gated changes**

---

## 3. Scope & Boundaries

### ✅ Allowed

- Applying Bootstrap utility classes
- Creating small custom classes for:

  - Reusable patterns
  - Component polish

- Using VS color tokens from `VS-Design-System.css`
- Responsive refinements using Bootstrap breakpoints

### ❌ Not Allowed

- Custom spacing systems
- Custom typography systems
- Custom grid systems
- Hardcoded colors
- Overriding Bootstrap core styles unnecessarily

---

## 4. Color Rules (Strict)

### A. Source of Truth

- All colors **must come from**:

  ```
  css/VS-Design-System.css
  ```

- Only CSS variables defined there may be used

### B. Usage

```css
color: var(--primary-600);
background-color: var(--neutral-100);
border-color: var(--neutral-300);
```

### C. Forbidden

- Hex values
- RGB / HSL values
- Inline color styles
- New color variables without approval

---

## 5. Bootstrap-First Styling Rules

### A. Utilities Over Custom CSS

- Prefer:

  ```
  mb-4, py-5, d-flex, gap-3, text-center
  ```

- Custom CSS only when Bootstrap cannot express the intent

### B. Components

- Do not restyle Bootstrap components unless required
- Extensions must be additive, not destructive
- Never rewrite Bootstrap component internals

---

## 6. Mobile-First & Responsiveness Rules

- Base styles = mobile
- Enhancements only at:

  ```
  md → lg → xl
  ```

- No desktop-only assumptions
- No fixed widths/heights unless unavoidable
- Use Bootstrap responsive utilities:

  ```
  d-none d-md-block
  flex-column flex-md-row
  ```

---

## 7. File Organization Rules

- Page-specific CSS must be isolated
- Shared styles belong to shared component files
- No global CSS leakage
- Avoid deep selectors

---

## 8. Approval Gates (Mandatory)

The CSS Agent **must pause and seek approval** before:

- Introducing new reusable classes
- Modifying shared components
- Overriding Bootstrap defaults
- Adding responsive breakpoints
- Adding or modifying color usage patterns

No execution without explicit approval.

---

## 9. Conflict Handling

- CSS Agent cannot override:

  - HTML structure decisions
  - JS behavior

- Visual conflicts must be reported
- Final authority:

  1. You
  2. Design system (colors)
  3. Bootstrap defaults
  4. Technical feasibility

---

## 10. Execution Flow

1. Review existing styles
2. Check Bootstrap alternatives first
3. Identify styling issues
4. Propose minimal CSS
5. Reference VS color tokens
6. **Pause for approval**
7. Implement
8. Report impact

---

## 11. Output Contract

Every CSS Agent output must include:

1. Area reviewed
2. Bootstrap utility used (if any)
3. Custom CSS proposed (if any)
4. Color tokens referenced
5. Impact scope
6. Approval request

---

## 12. Versioning

- Level-2 agent
- Inherits from `agents.md`
- Changes require explicit approval

---
