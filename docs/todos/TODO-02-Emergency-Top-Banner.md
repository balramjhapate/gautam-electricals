# TODO 02 — Emergency Top Banner
> **Priority:** Phase 1, Week 1
> **Section:** Fixed red announcement bar at top of page

---

## Goal
Build the red emergency banner that slides down from the top on every page load with dismiss functionality.

---

## Layout Specs
- **Position:** Above the navbar (not sticky, part of flow)
- **Background:** `#ef4444` (Red)
- **Text Color:** White
- **Height:** ~48px
- **Width:** 100% full width
- **Display:** Flex — text left, buttons right
- **z-index:** 1000 (above everything)

---

## Exact Content

```
LEFT SIDE:
  🚨  [24/7 EMERGENCY]  |  AC Emergency? We're available 24/7 in Bhopal & Indore!
                             Instant response • Certified technicians • All areas covered

RIGHT SIDE:
  [📞 Call Now: +91 8889539174]    [💬 WhatsApp Now]    [× Dismiss]
```

---

## Button Styles

| Button | Background | Text Color | Border | Icon |
|--------|-----------|------------|--------|------|
| Call Now | White | `#ef4444` (red) | none | `fa-phone` |
| WhatsApp Now | `#10b981` (green) | White | none | `fa-whatsapp` |
| Dismiss (×) | Transparent | White | none | `fa-times` |

All buttons: `border-radius: 6px`, `padding: 6px 14px`, `font-size: 14px`, `font-weight: 500`

---

## Click Actions

```html
<!-- Call Now -->
<a href="tel:+918889539174">📞 Call Now: +91 8889539174</a>

<!-- WhatsApp Now -->
<a href="https://wa.me/918889539174?text=Hi%2C+I+need+AC+service+in+Bhopal" target="_blank">
  💬 WhatsApp Now
</a>

<!-- Dismiss -->
<button id="dismiss-banner">× Dismiss</button>
```

---

## Entry Animation (from Animation Spec PDF — Section 1.1)

```css
@keyframes emergencyBannerSlideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.emergency-banner {
  animation: emergencyBannerSlideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
  /* starts 0.2s after page load, slides in over 0.6s */
}
```

---

## Dismiss Animation (from Animation Spec PDF — Section 1.1)

```js
document.getElementById('dismiss-banner').addEventListener('click', () => {
  const banner = document.querySelector('.emergency-banner');
  banner.style.transition = 'transform 0.4s ease-in, opacity 0.4s ease-in';
  banner.style.transform = 'translateY(-100%)';
  banner.style.opacity = '0';
  setTimeout(() => banner.remove(), 400); // Remove from DOM after animation
});
```

---

## Mobile Behavior (< 576px)
- Hide the long subtext: "Instant response • Certified technicians • All areas covered"
- Show only: "🚨 AC Emergency?" + Call Now button
- WhatsApp icon only (no text)
- Dismiss button hidden or very small (×)

```css
@media (max-width: 576px) {
  .banner-subtext { display: none; }
  .banner-whatsapp-text { display: none; }
}
```

---

## React/Next.js Component Structure

```jsx
// components/EmergencyBanner.jsx
import { useState } from 'react';

export default function EmergencyBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="emergency-banner">
      <div className="banner-left">
        <span className="badge">🚨 24/7 EMERGENCY</span>
        <span className="banner-main">AC Emergency? We're available 24/7 in Bhopal & Indore!</span>
        <span className="banner-subtext">Instant response • Certified technicians • All areas covered</span>
      </div>
      <div className="banner-right">
        <a href="tel:+918889539174" className="btn-call">📞 Call Now</a>
        <a href="https://wa.me/918889539174?text=Hi%2C+I+need+AC+service" 
           target="_blank" className="btn-whatsapp">💬 WhatsApp</a>
        <button onClick={() => setVisible(false)} className="btn-dismiss">×</button>
      </div>
    </div>
  );
}
```

---

*Source: PDF 1 (Section 17.3) + PDF 2 (Section 1.1)*
