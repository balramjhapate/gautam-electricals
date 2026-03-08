# TODO 03 — Sticky Header & Navigation
> **Priority:** Phase 1, Week 1
> **Section:** Main navbar with logo, nav links, phone, WhatsApp, and emergency badge

---

## Goal
Build the sticky header that sticks to the top on scroll, with a hamburger menu on mobile.

---

## Layout Specs
- **Position:** Sticky (becomes fixed when user scrolls past it)
- **Background:** White `#ffffff`, subtle shadow on scroll
- **Height:** 70–80px
- **Max Width:** 1200px (centered)
- **Horizontal Padding:** 15px
- **z-index:** 999

---

## Elements (Left → Right)

| # | Element | Details |
|---|---------|---------|
| 1 | Logo | "AC Service Bhopal" + wrench/AC icon, dark navy text |
| 2 | Nav Links | Home \| Services \| Coverage \| Testimonials \| Contact |
| 3 | Phone | `+91 8889539174` — click-to-call, phone icon |
| 4 | WhatsApp | Green button, WhatsApp icon |
| 5 | Emergency Badge | Small red pill badge: "24/7 Available" with pulse |

---

## Nav Links (Anchor links — all on same page)

```html
<nav>
  <a href="#home">Home</a>
  <a href="#services">Services</a>
  <a href="#coverage">Coverage</a>
  <a href="#testimonials">Testimonials</a>
  <a href="#contact">Contact</a>
</nav>

<a href="tel:+918889539174" class="nav-phone">
  <i class="fa fa-phone"></i> +91 8889539174
</a>

<a href="https://wa.me/918889539174" target="_blank" class="btn-whatsapp-nav">
  <i class="fa-brands fa-whatsapp"></i> WhatsApp
</a>

<span class="emergency-badge">
  <span class="pulse-dot"></span> 24/7 Available
</span>
```

---

## Scroll Behavior (JS)

```js
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled'); // adds shadow
  } else {
    header.classList.remove('scrolled');
  }
});
```

```css
.header { transition: box-shadow 0.3s ease; }
.header.scrolled { box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
```

---

## Navigation Link Hover Effect (from Animation Spec PDF — Section 3.5)

Underline animates from center outward:

```css
.nav-link {
  position: relative;
  text-decoration: none;
  color: var(--color-gray-dark);
  font-weight: 500;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--color-primary);  /* #1a73e8 */
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-link:hover::after {
  width: 100%;
  left: 0;
}
```

---

## Emergency Badge Pulse Animation (Continuous)

```css
.emergency-badge {
  background: #fef2f2;
  color: #ef4444;
  border: 1px solid #fecaca;
  border-radius: 50px;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #ef4444;
  border-radius: 50%;
  animation: pulseLoop 2s ease-in-out infinite;
}

@keyframes pulseLoop {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.3); opacity: 0.6; }
}
```

---

## Header Load Animations (from Animation Spec PDF — Section 1.2)

| Element | Initial State | Delay | Duration | Easing |
|---------|--------------|-------|----------|--------|
| Logo | `opacity:0; scale(0.8)` | 0.1s | 0.5s | ease-out |
| Nav item 1 (Home) | `opacity:0` | 0.1s | 0.4s | ease-out |
| Nav item 2 (Services) | `opacity:0` | 0.2s | 0.4s | ease-out |
| Nav item 3 (Coverage) | `opacity:0` | 0.3s | 0.4s | ease-out |
| Nav item 4 (Testimonials) | `opacity:0` | 0.4s | 0.4s | ease-out |
| Nav item 5 (Contact) | `opacity:0` | 0.5s | 0.4s | ease-out |
| Phone Button | `opacity:0; translateX(20px)` | 0.6s | 0.4s | ease-out |

---

## Mobile Hamburger Menu (≤ 768px)

### Hamburger Icon Transform (from Animation Spec PDF — Section 6.1):
```css
.hamburger { cursor: pointer; }
.hamburger .line { display: block; width: 25px; height: 2px; background: #333; margin: 5px 0; transition: all 0.3s ease-out; }

.hamburger.active .line-1 { transform: rotate(45deg) translateY(8px); }
.hamburger.active .line-2 { opacity: 0; }
.hamburger.active .line-3 { transform: rotate(-45deg) translateY(-8px); }
```

### Drawer (slides in from right):
```css
.mobile-menu {
  position: fixed;
  top: 0; right: 0;
  width: 280px; height: 100vh;
  background: white;
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 9999;
}

.mobile-menu.open { transform: translateX(0); }
```

### Backdrop:
```css
.menu-backdrop {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0);
  transition: background 0.3s ease;
  pointer-events: none;
}
.menu-backdrop.visible {
  background: rgba(0,0,0,0.5);
  pointer-events: all;
}
```

### Mobile nav items — stagger fade-in:
```css
.mobile-menu .nav-item {
  opacity: 0;
  transition: opacity 0.3s ease;
}
.mobile-menu.open .nav-item:nth-child(1) { opacity:1; transition-delay: 0.08s; }
.mobile-menu.open .nav-item:nth-child(2) { opacity:1; transition-delay: 0.16s; }
.mobile-menu.open .nav-item:nth-child(3) { opacity:1; transition-delay: 0.24s; }
.mobile-menu.open .nav-item:nth-child(4) { opacity:1; transition-delay: 0.32s; }
.mobile-menu.open .nav-item:nth-child(5) { opacity:1; transition-delay: 0.40s; }
```

### On Mobile — icon-only for phone/WhatsApp:
```css
@media (max-width: 768px) {
  .nav-phone-text { display: none; }   /* hide number text */
  .btn-whatsapp-text { display: none; } /* hide "WhatsApp" text */
}
```

---

*Source: PDF 1 (Section 3) + PDF 2 (Sections 1.2, 3.5, 6.1)*
