# TODO 13 — Floating WhatsApp Button
# TODO 14 — Back-to-Top Button
# TODO 15 — Mobile Sticky Bottom CTA Bar
> **Priority:** Phase 4, Week 4
> **Section:** Three fixed/floating UI elements

---

## TODO 13 — Floating WhatsApp Button

### Goal
A fixed circular green button (bottom-right corner), always visible, that opens WhatsApp chat.

### Specs
- **Position:** Fixed `bottom: 80px; right: 20px`
- **Size:** 60×60px (desktop), 50×50px (mobile)
- **Shape:** Circular (`border-radius: 50%`)
- **Color:** Green `#25D366` (WhatsApp brand green)
- **Icon:** `fa-brands fa-whatsapp` (white, font-size 28px)
- **z-index:** 9998
- **Click URL:** `https://wa.me/918889539174?text=Hi%2C+I+need+AC+service+in+Bhopal%2FIndore`

### Entry Animation (from Animation Spec PDF — Section 5.3)
Appears **2 seconds after page load** with bounce effect:
```css
@keyframes whatsappEntry {
  from { opacity: 0; transform: scale(0) rotate(-180deg); }
  to   { opacity: 1; transform: scale(1) rotate(0deg); }
}

.floating-whatsapp {
  position: fixed;
  bottom: 80px; right: 20px;
  width: 60px; height: 60px;
  background: #25D366;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: white; font-size: 28px;
  text-decoration: none;
  z-index: 9998;
  box-shadow: 0 4px 16px rgba(37,211,102,0.4);
  opacity: 0;
  animation: whatsappEntry 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 2s forwards;
}
```

### Continuous Bounce (every 3 seconds)
```css
@keyframes whatsappBounce {
  0%   { transform: translateY(0); }
  25%  { transform: translateY(-10px); }
  50%  { transform: translateY(0); }
  100% { transform: translateY(0); }
}

/* Apply after entry animation completes (delay: 2.6s) */
.floating-whatsapp.ready {
  animation: whatsappBounce 1s ease 0s infinite;
  animation-delay: 0s;
  /* pause 2s between bounces via animation-duration: 3s */
}
```

### Hover Effect
```css
.floating-whatsapp:hover {
  transform: scale(1.1) rotate(5deg) rotate(-5deg);
  box-shadow: 0 8px 24px rgba(37,211,102,0.5);
  transition: all 0.3s ease;
}
```

### HTML
```html
<a href="https://wa.me/918889539174?text=Hi%2C+I+need+AC+service+in+Bhopal%2FIndore"
   target="_blank" class="floating-whatsapp" aria-label="Chat on WhatsApp">
  <i class="fa-brands fa-whatsapp"></i>
</a>
```

### Mobile
```css
@media (max-width: 768px) {
  .floating-whatsapp { width: 50px; height: 50px; font-size: 24px; bottom: 70px; }
}
```

---

## TODO 14 — Back-to-Top Button

### Goal
Circular button (bottom-right, above WhatsApp) that appears after 500px scroll and smoothly scrolls to top.

### Specs
- **Position:** Fixed `bottom: 150px; right: 20px`
- **Size:** 44×44px, `border-radius: 50%`
- **Color:** `#1a73e8` (Primary Blue)
- **Icon:** `fa-solid fa-chevron-up` (white)
- **z-index:** 9997
- **Visible only:** after scroll > 500px (hidden below that)

### Appear / Disappear Animation (from Animation Spec PDF — Section 5.4)
```js
window.addEventListener('scroll', () => {
  const btn = document.querySelector('.back-to-top');
  if (window.scrollY > 500) {
    btn.classList.add('visible');
  } else {
    btn.classList.remove('visible');
  }
});
```

```css
.back-to-top {
  position: fixed;
  bottom: 150px; right: 20px;
  width: 44px; height: 44px;
  background: #1a73e8; color: white;
  border-radius: 50%; border: none;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; z-index: 9997;
  opacity: 0; transform: translateY(20px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.back-to-top.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Click: Smooth scroll to top (800ms)
```js
document.querySelector('.back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Note: CSS scroll-behavior: smooth handles the 800ms duration
});
```

### Hover Effect
```css
.back-to-top:hover {
  background: #0d47a1;
}
.back-to-top:hover .fa-chevron-up {
  transform: translateY(-3px);
  transition: transform 0.2s ease;
}
```

---

## TODO 15 — Mobile Sticky Bottom CTA Bar

### Goal
A fixed bottom bar visible ONLY on mobile (≤768px) with Call and Book Service buttons side by side.

### Layout
- **Position:** Fixed `bottom: 0; left: 0; right: 0`
- **Height:** 56px
- **z-index:** 9996
- **Background:** White with top border/shadow
- **Display:** Two buttons, side by side (50-50 split)

### Content
```
[📞 Call]          [📅 Book Service]
(Green bg)         (Blue bg)
```

### HTML
```html
<div class="mobile-cta-bar">
  <a href="tel:+918889539174" class="mobile-cta-call">
    <i class="fa-solid fa-phone"></i> Call
  </a>
  <a href="#contact" class="mobile-cta-book">
    <i class="fa-solid fa-calendar-check"></i> Book Service
  </a>
</div>
```

### CSS
```css
.mobile-cta-bar {
  position: fixed;
  bottom: 0; left: 0; right: 0;
  height: 56px;
  display: flex;
  z-index: 9996;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.1);
}

.mobile-cta-call, .mobile-cta-book {
  flex: 1; display: flex; align-items: center; justify-content: center;
  gap: 8px; font-size: 15px; font-weight: 600; text-decoration: none; color: white;
}

.mobile-cta-call { background: #10b981; }
.mobile-cta-book { background: #1a73e8; }

/* Only visible on mobile */
@media (min-width: 769px) {
  .mobile-cta-bar { display: none; }
}

/* Add padding to footer to not overlap bar on mobile */
@media (max-width: 768px) {
  body { padding-bottom: 56px; }
}
```

---

*Source: PDF 1 (Sections 17.1, 17.2) + PDF 2 (Sections 5.3, 5.4)*
