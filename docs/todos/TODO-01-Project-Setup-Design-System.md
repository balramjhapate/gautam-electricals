# TODO 01 — Project Setup & Design System
> **Priority:** First — must be done before anything else
> **Bhopal focus, Indore secondary**

---

## Goal
Set up the Next.js project foundation: color tokens, typography, global CSS, libraries, and page structure.

---

## 1. Color Palette — CSS Variables (add to `globals.css`)

```css
:root {
  /* Primary Colors */
  --color-primary:      #1a73e8;   /* Primary Blue — buttons, links, headings */
  --color-primary-dark: #0d47a1;   /* Dark Blue — hover states, CTA buttons */
  --color-white:        #ffffff;   /* Main background, cards, text on dark */
  --color-gray-light:   #f5f5f5;   /* Section backgrounds (alternating sections) */
  --color-gray-dark:    #333333;   /* Body text, paragraphs */
  --color-gray-mid:     #666666;   /* Secondary text, descriptions */

  /* Status Colors */
  --color-green:        #10b981;   /* Available status, success messages, WhatsApp */
  --color-orange:       #f59e0b;   /* Next Slot status, warnings */
  --color-red:          #ef4444;   /* Emergency indicators, Busy status, error */

  /* Layout */
  --color-footer-bg:    #2c3e50;   /* Footer dark background */
  --color-border:       #e5e7eb;   /* Card borders */

  /* Animation Timing Tokens (from Animation Spec PDF) */
  --duration-fast:   150ms;
  --duration-normal: 300ms;
  --duration-slow:   600ms;
  --ease-standard:   cubic-bezier(0.16, 1, 0.3, 1);
  --ease-bounce:     cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## 2. Typography

| Element | Font | Size (Desktop) | Size (Mobile) | Weight |
|---------|------|----------------|---------------|--------|
| H1 (Main) | Inter / Roboto | 48–56px | 32px | Bold 700 |
| H2 (Section) | Inter / Roboto | 36–40px | 28px | Bold 700 |
| H3 (Sub) | Inter / Roboto | 24–28px | 20px | SemiBold 600 |
| Body Text | Inter / Roboto | 16px | 14px | Regular 400 |
| Small Text | Inter / Roboto | 14px | 12px | Regular 400 |
| Buttons | Inter / Roboto | 16px | 16px | Medium 500 |
| Line Height | — | 1.5–1.6 | 1.5–1.6 | — |

Add to `globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-gray-dark);
  overflow-x: hidden;
}

html {
  scroll-behavior: smooth;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
```

---

## 3. Page Structure

Single-page landing page. All sections on ONE page with anchor links.

**Order (Top to Bottom):**
1. Emergency Top Banner (`#emergency-banner`)
2. Sticky Header / Navbar (`#header`)
3. Hero Section (`#home`)
4. Service Coverage Area (`#coverage`)
5. Featured Services (`#services`)
6. AMC vs One-Time Comparison (`#amc`)
7. Customer Testimonials (`#testimonials`)
8. Why Choose Us (`#why-us`)
9. Statistics Counter (`#stats`)
10. Emergency CTA (`#contact`)
11. Footer (`#footer`)
12. Floating WhatsApp Button (fixed, always visible)
13. Back-to-Top Button (fixed, appears after 500px scroll)
14. Mobile Sticky Bottom CTA Bar (mobile only, fixed bottom)

---

## 4. Libraries to Install / Link via CDN

Add these in `_document.js` or `Layout.js`:

```html
<!-- AOS (Animate On Scroll) v2.3.4 -->
<link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />
<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>

<!-- Swiper.js v10 (Testimonials Carousel) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"/>
<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>

<!-- CountUp.js v2.6 (Statistics Counters) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.6.0/countUp.umd.js"></script>

<!-- Font Awesome 6 (All icons) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
```

**AOS initialization (in `_app.js` or component `useEffect`):**
```js
import { useEffect } from 'react';
useEffect(() => {
  AOS.init({
    duration: 600,
    easing: 'ease-out',
    once: true,
    offset: 100,
  });
}, []);
```

---

## 5. Global Responsive Breakpoints

```css
/* Desktop:     1200px+ */
/* Laptop:      992px - 1199px */
/* Tablet:      768px - 991px */
/* Mobile Lg:   576px - 767px */
/* Mobile Sm:   < 576px */
```

---

## 6. Global Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 7. Performance Rules
- Only animate `transform` and `opacity` (GPU-accelerated)
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` sparingly
- Images: WebP format, compress 80–90%
- Lazy load all images below fold
- Font loading: `font-display: swap`
- Target Google PageSpeed: **>90**

---

*Source: PDF 1 (Sections 2, 13, 14, 16) + PDF 2 (Sections 8.2, 8.3)*
