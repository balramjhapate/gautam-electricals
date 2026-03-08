# TODO 16 — Global Animations, Page Load Sequence & AOS Setup
> **Priority:** Phase 4, Week 4
> **Section:** All animation wiring, AOS init, page load sequence

---

## Goal
Wire up all animations globally, initialize AOS library, implement global page load sequence and IntersectionObserver for counter/section animations.

---

## Page Load Sequence (from Animation Spec PDF — Section 7.1)

This exact order must be maintained:

```
1. (0ms)    White background renders (instant)
2. (200ms)  Emergency banner slides down (see TODO 02)
3. (100ms)  Header fades in (see TODO 03)
4. (300ms+) Hero section content appears sequentially (see TODO 04)
5. (∞)      Rest of page ready for scroll-triggered animations
```

No skeleton screens — content appears with animation directly.

---

## AOS (Animate On Scroll) Global Setup

### Initialize in `_app.js` or `Layout.js`:

```js
import { useEffect } from 'react';

export default function Layout({ children }) {
  useEffect(() => {
    // AOS init
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.init({
        duration: 600,
        easing: 'ease-out',
        once: true,
        offset: 100,        // trigger 100px before element enters viewport
        delay: 0,
        anchorPlacement: 'top-center'
      });
    }
  }, []);
  return <>{children}</>;
}
```

### AOS data attributes to use on sections:

```html
<!-- Section headings -->
<h2 data-aos="fade-up" data-aos-duration="600">Section Title</h2>

<!-- Service cards (staggered) -->
<div data-aos="fade-up" data-aos-delay="0">Card 1</div>
<div data-aos="fade-up" data-aos-delay="120">Card 2</div>
<div data-aos="fade-up" data-aos-delay="240">Card 3</div>

<!-- Slide from sides -->
<div data-aos="fade-right">Left element</div>
<div data-aos="fade-left">Right element</div>

<!-- Zoom in (feature cards) -->
<div data-aos="zoom-in" data-aos-delay="100">Feature card</div>
```

---

## IntersectionObserver — All Triggers

```js
// Generic scroll observer helper
function onScrollIntoView(selector, threshold, callback) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold });

  document.querySelectorAll(selector).forEach(el => observer.observe(el));
}

// Location cards: 20% visibility
onScrollIntoView('.location-card', 0.2, (el) => {
  el.classList.add('animate');
});

// Service cards: 25% visibility
onScrollIntoView('.service-card', 0.25, (el) => {
  el.classList.add('animate');
});

// Feature cards: 25% visibility
onScrollIntoView('.feature-card', 0.25, (el) => {
  el.classList.add('animate');
});

// Stats section: 50% visibility (triggers CountUp)
onScrollIntoView('#stats', 0.5, () => {
  startCounters(); // see TODO 10
});

// AMC cards: 30% visibility
onScrollIntoView('.comparison-card', 0.3, (el) => {
  el.classList.add('animate');
});

// Emergency CTA: 30% visibility
onScrollIntoView('.cta-left, .cta-right', 0.3, (el) => {
  el.classList.add('animate');
});

// Footer: enters viewport
onScrollIntoView('.footer', 0.05, (el) => {
  el.classList.add('visible');
});
```

---

## All Hover Effect Summaries

| Element | Hover Effect | Duration |
|---------|-------------|----------|
| All primary buttons | scale(1.05) + shadow + darker bg | 0.3s bounce |
| WhatsApp buttons | scale(1.05) + slight rotate 5deg | 0.4s |
| Phone buttons | shake/vibrate left-right × 2 | 0.5s |
| Service cards | translateY(-8px) + shadow | 0.3s |
| Location cards | scale(1.03) + blue border | 0.25s |
| Feature cards | bg light blue + icon scale 1.1x | 0.25s |
| Testimonial cards | translateY(-5px) + shadow | 0.3s |
| Comparison cards | scale(1.02) | 0.25s |
| Nav links | underline from center | 0.3s |
| Social icons | rotate 360° + scale 1.15 | 0.4s |
| Back-to-top | darker bg + arrow moves up 3px | 0.2s |

---

## Continuous/Loop Animations (always running)

| Element | Animation | Duration | Iteration |
|---------|----------|----------|-----------|
| Emergency badge (red pill) | scale pulse 1→1.05→1 | 2s | Infinite |
| "Available Now" status dots | scale pulse 1→1.05→1 | 2s | Infinite |
| Emergency badge glow | box-shadow pulse | 2s | Infinite |
| Phone CTA buttons | box-shadow pulse (red glow) | 2s | Infinite |
| Stats section icons | scale 1→1.1→1 | 2s | Infinite |
| Floating WhatsApp | bounce -10px every 3s | 3s | Infinite |

---

## Click/Ripple Effect on Buttons

```css
.btn-primary { position: relative; overflow: hidden; }
.btn-primary::after {
  content: '';
  position: absolute;
  width: 0; height: 0;
  background: rgba(255,255,255,0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.4s ease, height 0.4s ease, opacity 0.4s ease;
  opacity: 1;
}
.btn-primary:active::after {
  width: 200px; height: 200px;
  opacity: 0;
}
```

---

## Performance Rules (from Animation Spec PDF — Section 8.3)

```css
/* Only use transform and opacity — GPU accelerated */
/* AVOID: width, height, top, left, margin, padding */

/* Use will-change ONLY for complex continuous animations */
.floating-whatsapp { will-change: transform; }
.back-to-top { will-change: transform, opacity; }

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## CSS Timing Variables (global)

```css
:root {
  --duration-fast:   150ms;
  --duration-normal: 300ms;
  --duration-slow:   600ms;
  --ease-standard:   cubic-bezier(0.16, 1, 0.3, 1);
  --ease-bounce:     cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-entry-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

---

*Source: PDF 2 (Sections 1–9, all animation specs)*
