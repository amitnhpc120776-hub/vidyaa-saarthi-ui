_Updated: 03 Dec 2025_

This document defines the **official responsive layout & grid system** used across all Vidyaa Sarthi web interfaces.
It is platform-agnostic and suitable for design systems, codebases, and documentation pipelines.

---

## **1️⃣ Grid System Overview**

Vidyaa Sarthi uses a **mobile-first responsive grid**, scaling across mobile, tablet, desktop, and wide-desktop breakpoints.

All grids use **Stretch Columns**, ensuring fluid resizing within breakpoints.

---

## **2️⃣ Grid Tokens**

### **Mobile Grid (360–480px)**

**Token:** `grid.mobile`

| Property | Value   |
| -------- | ------- |
| Columns  | 4       |
| Type     | Stretch |
| Gutter   | 16px    |
| Margin   | 16px    |

---

### **Tablet Grid (768–1024px)**

**Token:** `grid.tablet`

| Property | Value   |
| -------- | ------- |
| Columns  | 8       |
| Type     | Stretch |
| Gutter   | 24px    |
| Margin   | 24px    |

---

### **Desktop Grid (1280–1440px)**

**Token:** `grid.desktop`

| Property  | Value       |
| --------- | ----------- |
| Columns   | 12          |
| Type      | Stretch     |
| Gutter    | 24px        |
| Margin    | 80px        |
| Max Width | 1280–1440px |

---

### **Wide Desktop Grid (1600px+)**

**Token:** `grid.desktopWide`

| Property  | Value   |
| --------- | ------- |
| Columns   | 12      |
| Type      | Stretch |
| Gutter    | 32px    |
| Margin    | 120px   |
| Max Width | 1600px+ |

---

## **3️⃣ Responsive Breakpoint Tokens**

These breakpoints map cleanly to Tailwind and modern responsive conventions.

| Token   | Width Range | Purpose      |
| ------- | ----------- | ------------ |
| `bp.sm` | ≥ 360px     | Mobile       |
| `bp.md` | ≥ 768px     | Tablet       |
| `bp.lg` | ≥ 1280px    | Desktop      |
| `bp.xl` | ≥ 1600px    | Wide Desktop |

---

## **4️⃣ Layout Containers**

Used for centering content and maintaining readable line-lengths.

| Token               | Max Width   | Horizontal Padding |
| ------------------- | ----------- | ------------------ |
| `container.mobile`  | 100%        | 16px               |
| `container.tablet`  | 720–920px   | 24px               |
| `container.desktop` | 1200–1280px | 80px               |
| `container.wide`    | 1440–1600px | 120px              |

_Containers auto-adapt based on breakpoint tokens._

---

## **5️⃣ Tailwind Mapping (Frontend Implementation)**

These mappings follow Tailwind utility conventions.

| Grid Token   | Tailwind Equivalent |
| ------------ | ------------------- |
| gutter 16px  | `gap-4`             |
| gutter 24px  | `gap-6`             |
| gutter 32px  | `gap-8`             |
| margin 16px  | `px-4`              |
| margin 24px  | `px-6`              |
| margin 80px  | `px-20`             |
| margin 120px | `px-30`             |

---

## **6️⃣ Naming Conventions**

All grid tokens follow consistent dotted notation:

```
grid.mobile
grid.tablet
grid.desktop
grid.desktopWide

bp.sm
bp.md
bp.lg
bp.xl

container.mobile
container.tablet
container.desktop
container.wide
```

---

## **7️⃣ Usage Principles**

- **Mobile-first:** Start layout from `grid.mobile`, scale upward.
- **Consistency:** Use defined gutters/margins; avoid ad-hoc spacing.
- **Scalability:** Desktop and wide grids designed for dashboards and analytics.
- **Readability:** Container widths ensure optimal text line lengths.
- **Performance:** All grid layouts optimized for responsive rendering across devices used in India.
