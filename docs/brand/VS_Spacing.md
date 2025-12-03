_Updated: 03 Dec 2025_

This document defines the official **spacing scale** used across all components, layouts, and surfaces of the Vidyaa Saarthi Design System.
Values follow a consistent incremental system suitable for responsive UI and engineering implementation.

---

## **1️⃣ Spacing Token Scale**

| Token      | Value |
| ---------- | ----- |
| `space/0`  | 0px   |
| `space/2`  | 2px   |
| `space/4`  | 4px   |
| `space/6`  | 6px   |
| `space/8`  | 8px   |
| `space/12` | 12px  |
| `space/16` | 16px  |
| `space/20` | 20px  |
| `space/24` | 24px  |
| `space/32` | 32px  |
| `space/40` | 40px  |
| `space/48` | 48px  |
| `space/64` | 64px  |

_All values preserved exactly as provided._

---

## **2️⃣ Naming Convention**

Tokens use a simple, extensible pattern:

```
space/{value}
```

This applies across paddings, margins, gaps, stack spacing, and component-level spacing.

---

## **3️⃣ System Usage (Platform-Agnostic)**

- **2–8px:** micro spacing, compact UI
- **12–20px:** component padding, dense layouts
- **24–32px:** card spacing, section groups
- **40–64px:** page-level and hero spacing

(These are guidelines only — not rules — and do not alter your original token file.)

---

## **4️⃣ Tailwind Mapping (for engineering teams)**

```js
theme: {
  extend: {
    spacing: {
      0:  "0px",
      2:  "2px",
      4:  "4px",
      6:  "6px",
      8:  "8px",
      12: "12px",
      16: "16px",
      20: "20px",
      24: "24px",
      32: "32px",
      40: "40px",
      48: "48px",
      64: "64px",
    }
  }
}
```

---

## **5️⃣ Status**

This is the **official Spacing Token Specification** for Vidyaa Saarthi across all platforms.
No tools, libraries, or product-specific references included.

---
