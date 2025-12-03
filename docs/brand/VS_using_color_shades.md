# 🎯 Color Shade Decision Chart — Vidya Saarthi Design System

This guide explains **which shade (50–900)** to use in which UI situation.

---

## 🟦 Primary Color Usage (brand/primary)

### **Primary Action Buttons**

- Default: `primary-500`
- Hover: `primary-600`
- Pressed: `primary-700`
- Disabled: `neutral-300`

### **Text Using Primary Color**

- Small text: `primary-700` (meets contrast)
- Large text: `primary-600`

---

## 🟨 Accent Color Usage (brand/accent)

### **Use for emphatic but non-critical highlights:**

- Badges: `accent-500`
- Icons: `accent-400`
- Motivational highlights: `accent-300`
- Backgrounds: `accent-100`

### **NEVER use accent for:**

- Primary CTA buttons
- Error/success messages
- Navigation

---

## 🔵 Secondary (Navy) Usage (brand/secondary)

### **Use for high-importance structural elements**

- Navbars: `secondary-500`
- Header backgrounds: `secondary-700`
- Footer: `secondary-800`
- Active tab: `secondary-600`
- Hover items: `secondary-400`

### **Text on Secondary Background**

- Use `text/inverse (#FFFFFF)`

---

## ⚪ Neutral Scale (neutral/50–900)

### **Backgrounds**

- Page background: `neutral-50` or `bg/base`
- Card background: `neutral-0`
- Section background: `neutral-100`

### **Borders**

- Default border: `neutral-200`
- Strong border: `neutral-300`
- Hover border: `primary-300`

### **Text**

- Primary text: `neutral-900`
- Secondary text: `neutral-700`
- Disabled text: `neutral-400`

---

## 🟢 SUCCESS, ERROR, WARNING (semantic/\*\*\*)

Use **500 as base**, lighter tones for backgrounds, darker tones for text.

### **Success Example**

- Background: `success-100`
- Border: `success-300`
- Text: `success-700`
- Icon: `success-600`

### **Error Example**

- Background: `error-50`
- Border: `error-200`
- Text: `error-700`
- Icon: `error-600`

### **Warning Example**

- Background: `warning-100`
- Text: `warning-700`

---

## 🎨 Background + Surface Guidelines

| UI Element      | Shade                            |
| --------------- | -------------------------------- |
| Page BG         | neutral-50 or bg/base            |
| Cards           | neutral-0 or surface/default     |
| Elevated Cards  | surface/raised + soft shadow     |
| Table Row Hover | neutral-100                      |
| Disabled Fields | neutral-100 + neutral-300 border |
| Hero Background | bg/hero-contrast                 |

---

## ✨ Summary Quick Guide

| Shade Range | Use Case                               |
| ----------- | -------------------------------------- |
| **50–100**  | Soft backgrounds, hover, subtle states |
| **200–300** | Borders, dividers, subtle icons        |
| **400–500** | Main UI colors, icons, buttons         |
| **600–700** | Hover, active, text on backgrounds     |
| **800–900** | Heading text, dark surfaces            |
