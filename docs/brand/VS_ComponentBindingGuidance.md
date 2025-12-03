_Updated: 03 Dec 2025_

This document defines **how UI components must bind to the official design tokens** across the Vidyaa Saarthi design system.
It ensures a **consistent, scalable, and platform-independent** implementation for both design and engineering teams.

---

# **1. Component Color Binding Principles**

All components must use **token-based color bindings**, not hex codes.
Each component state (default, hover, active, disabled) must map to a **semantic or brand token**, not a raw color.

### General Rules

- Primary actions → use **brand/primary** tokens
- Structural surfaces → **surface/** tokens
- Text → **text/** tokens
- State (error, success, warning) → **semantic/** tokens
- Borders → **border/** tokens
- Neutrals → only for low-emphasis or background elements

---

# **2. Button Bindings**

## **2.1 Primary Button (Solid)**

| Role                 | Token               |
| -------------------- | ------------------- |
| Background (default) | `brand/primary-500` |
| Background (hover)   | `brand/primary-600` |
| Background (pressed) | `brand/primary-700` |
| Text                 | `text/inverse`      |
| Border               | none                |
| Disabled BG          | `neutral/300`       |
| Disabled Text        | `neutral/500`       |

---

## **2.2 Secondary Button (Outline)**

| Role               | Token               |
| ------------------ | ------------------- |
| Text               | `brand/primary-600` |
| Border             | `brand/primary-400` |
| Background         | `transparent`       |
| Hover Border       | `brand/primary-500` |
| Hover Background   | `brand/primary-50`  |
| Pressed Border     | `brand/primary-600` |
| Pressed Background | `brand/primary-100` |

---

## **2.3 Tertiary Button (Text Button)**

| Role          | Token               |
| ------------- | ------------------- |
| Text          | `brand/primary-600` |
| Hover Text    | `brand/primary-700` |
| Active Text   | `brand/primary-800` |
| Disabled Text | `neutral/400`       |
| Background    | `transparent`       |

**Usage:** Low-priority actions, links, filters.

---

# **3. Input Fields**

## **3.1 Text Input**

| Role            | Token               |
| --------------- | ------------------- |
| Background      | `surface/default`   |
| Border          | `neutral/300`       |
| Text            | `text/primary`      |
| Placeholder     | `text/tertiary`     |
| Hover Border    | `neutral/400`       |
| Focus Border    | `brand/primary-500` |
| Focus Outline   | `brand/primary-300` |
| Disabled BG     | `neutral/100`       |
| Disabled Border | `neutral/200`       |
| Disabled Text   | `neutral/500`       |

---

# **4. Cards & Containers**

## **4.1 Default Card**

| Role       | Token             |
| ---------- | ----------------- |
| Background | `surface/default` |
| Border     | `border/default`  |
| Shadow     | `shadow/default`  |
| Title Text | `text/primary`    |
| Body Text  | `text/secondary`  |

### **Interactive Card (Hover-enabled)**

- Background → `surface/hover`
- Border → `border/strong`
- Shadow → `shadow/raised`

---

# **5. Alerts & Semantic Components**

## **5.1 Error Alert**

| Role       | Token                |
| ---------- | -------------------- |
| Background | `semantic/error-50`  |
| Border     | `semantic/error-200` |
| Text       | `semantic/error-700` |
| Icon       | `semantic/error-600` |

## **5.2 Success Alert**

| Role       | Token                  |
| ---------- | ---------------------- |
| Background | `semantic/success-50`  |
| Border     | `semantic/success-200` |
| Text       | `semantic/success-700` |
| Icon       | `semantic/success-600` |

## **5.3 Warning Alert**

| Role       | Token                  |
| ---------- | ---------------------- |
| Background | `semantic/warning-100` |
| Border     | `semantic/warning-300` |
| Text       | `semantic/warning-700` |
| Icon       | `semantic/warning-600` |

---

# **6. Navigation Components**

## **6.1 Top Navigation Bar**

| Role        | Token                 |
| ----------- | --------------------- |
| Background  | `brand/secondary-500` |
| Text        | `text/inverse`        |
| Active Item | `brand/secondary-400` |
| Hover BG    | `brand/secondary-600` |

---

## **6.2 Sidebar (If used)**

| Role        | Token                 |
| ----------- | --------------------- |
| Background  | `brand/secondary-700` |
| Text        | `text/inverse`        |
| Divider     | `neutral/800`         |
| Active Item | `brand/secondary-500` |

---

# **7. Form Controls (Checkbox, Radio, Switch)**

## **7.1 Checkbox**

| State            | Token               |
| ---------------- | ------------------- |
| Checked          | `brand/primary-500` |
| Checked Hover    | `brand/primary-600` |
| Unchecked Border | `neutral/400`       |
| Disabled         | `neutral/300`       |

## **7.2 Radio**

Same mapping as checkbox.

## **7.3 Toggle / Switch**

| Role           | Token               |
| -------------- | ------------------- |
| On Background  | `brand/primary-500` |
| On Thumb       | `neutral/0`         |
| Off Background | `neutral/300`       |
| Off Thumb      | `neutral/0`         |
| Disabled       | `neutral/200`       |

---

# **8. Tables**

| Element           | Token              |
| ----------------- | ------------------ |
| Header Background | `neutral/100`      |
| Header Text       | `text/primary`     |
| Row BG            | `surface/default`  |
| Row Divider       | `border/default`   |
| Hover Row BG      | `neutral/50`       |
| Selected Row BG   | `brand/primary-50` |

---

# **9. Icons**

| Usage                | Token               |
| -------------------- | ------------------- |
| Default Icons        | `text/secondary`    |
| Disabled Icons       | `text/tertiary`     |
| Primary Accent Icons | `brand/primary-600` |
| Status Icons         | `semantic/*` tokens |

---

# **10. State Layer Elevation Tokens**

(This preserves values from your color file.)

```
shadow/default: 0px 4px 10px rgba(0,0,0,0.10)
shadow/raised:  0px 8px 20px rgba(0,0,0,0.15)
```

Usage:

- **default** → normal cards, dropdowns
- **raised** → hovered cards, modal surfaces

---

# **11. Component Binding Summary Table**

A compressed view for engineering teams:

| Component        | Default                                 | Hover                              | Active                              | Disabled    |
| ---------------- | --------------------------------------- | ---------------------------------- | ----------------------------------- | ----------- |
| Primary Button   | primary-500                             | primary-600                        | primary-700                         | neutral-300 |
| Secondary Button | primary-600 (text) / border-primary-400 | border-primary-500 + primary-50 BG | border-primary-600 + primary-100 BG | neutral-400 |
| Input            | white / neutral-300                     | neutral-400                        | primary-500 border                  | neutral-200 |
| Card             | white / neutral-200                     | neutral-50                         | neutral-100 / raised shadow         | —           |
| Alert            | semantic-50                             | —                                  | —                                   | —           |

---

# **Document Status**

This is the **official, production-ready Component Binding Specification** for Vidyaa Saarthi’s Design System.
It is platform-agnostic and aligns with all core tokens:
✔ Color Tokens
✔ Typography Tokens
✔ Spacing Tokens
✔ Layout/Grid Tokens

---
