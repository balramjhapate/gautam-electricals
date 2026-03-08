# TODO 04 — Hero Section (Homepage Banner)
> **Priority:** Phase 1, Week 1
> **Section:** Main banner with heading, subheading, trust badges, and CTA buttons

---

## Goal
Build the main hero section — the first thing users see when they land on the website.

---

## Layout Specs
- **Height:** 600–700px (full viewport height on desktop)
- **Layout:** Split — Text **60% left** | Image **40% right**
- **Mobile:** Stacked — text on top, image below (or hidden)
- **Background:** Gradient or subtle image with blue overlay
- **Alignment:** Vertically and horizontally centered content

---

## Exact Content

```
H1: Professional AC Servicing in Bhopal & Indore, Madhya Pradesh

Subheading (paragraph):
Expert air conditioning maintenance, repair, and installation services across
Bhopal and Indore. Serving Arera Colony, MP Nagar, Vijay Nagar, and more —
certified technicians and 24/7 emergency support.

Trust Badges (3 inline icons with text):
  🏆  10+ Years Experience
  ✅  Certified Technicians
  😊  5000+ Happy Customers

Primary CTA Button (Blue, Large):
  [📅 Schedule Service]
  → scrolls to #contact

Secondary CTA Button (Green/White outline):
  [📞 Call: +91 8889539174]
  → href="tel:+918889539174"

Emergency Strip (Red, below buttons):
  🚨 Emergency Service Available 24/7  |  Call: +91 8889539174
```

---

## Animation Timeline — All on Page Load (from Animation Spec PDF — Section 1.3)

| Step | Element | Delay | Animation | Duration | Easing |
|------|---------|-------|-----------|----------|--------|
| 1 | H1 Heading | 0.3s | Fade up `translateY(30px→0)` | 0.8s | `cubic-bezier(0.16,1,0.3,1)` |
| 2 | Subheading | 0.5s | Fade up `translateY(30px→0)` | 0.8s | `cubic-bezier(0.16,1,0.3,1)` |
| 3 | Trust Badges | 0.7s | Slide up `translateY(40px→0)` | 0.6s | `ease-out` |
| 4 | Primary CTA | 0.9s | Fade + scale `(0.95→1)` | 0.5s | `cubic-bezier(0.34,1.56,0.64,1)` |
| 5 | Secondary CTA | 1.0s | Same as primary | 0.5s | same (slightly after) |
| 6 | Emergency Strip | 1.1s | Slide in from bottom | 0.5s | `ease-out` |

```css
/* Example for H1 */
.hero-heading {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
}

@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}
```

---

## Button Hover Effects (from Animation Spec PDF — Section 3.1)

```css
.btn-primary {
  background: var(--color-primary);   /* #1a73e8 */
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.btn-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  background: var(--color-primary-dark);  /* #0d47a1 */
}

.btn-primary:active {
  transform: scale(0.98);
  transition-duration: 0.15s;
}
```

---

## Trust Badges HTML Structure

```html
<div class="trust-badges">
  <div class="badge-item">
    <i class="fa-solid fa-trophy" style="color:#1a73e8"></i>
    <span>10+ Years Experience</span>
  </div>
  <div class="badge-item">
    <i class="fa-solid fa-certificate" style="color:#10b981"></i>
    <span>Certified Technicians</span>
  </div>
  <div class="badge-item">
    <i class="fa-solid fa-face-smile" style="color:#f59e0b"></i>
    <span>5000+ Happy Customers</span>
  </div>
</div>
```

```css
.trust-badges { display: flex; gap: 24px; flex-wrap: wrap; }
.badge-item { display: flex; align-items: center; gap: 8px; font-weight: 500; color: #333; }
```

---

## Emergency Strip

```html
<div class="emergency-strip">
  <i class="fa-solid fa-triangle-exclamation"></i>
  Emergency Service Available 24/7 |
  <a href="tel:+918889539174">+91 8889539174</a>
</div>
```

```css
.emergency-strip {
  background: #ef4444;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  margin-top: 16px;
  font-weight: 500;
  display: inline-flex;
  gap: 8px;
  align-items: center;
}
.emergency-strip a { color: white; font-weight: 700; text-decoration: underline; }
```

---

## Mobile Responsiveness

```css
@media (max-width: 768px) {
  .hero { flex-direction: column; height: auto; padding: 60px 0 40px; }
  .hero-text { width: 100%; text-align: center; }
  .hero-image { display: none; }  /* or show below text */
  .hero-heading { font-size: 32px; }
  .hero-subheading { font-size: 14px; }
  .hero-buttons { flex-direction: column; width: 100%; }
  .trust-badges { justify-content: center; gap: 12px; }
}
```

---

## Hero Image
- Use high quality stock image of AC technician or cool family in front of AC
- Or generate a placeholder with cool blue gradient background + snowflake icons

---

*Source: PDF 1 (Section 4) + PDF 2 (Sections 1.3, 3.1)*
