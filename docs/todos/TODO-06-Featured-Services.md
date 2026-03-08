# TODO 06 — Featured Services Section (6 Cards)
> **Priority:** Phase 2, Week 2
> **Section:** Grid of 6 service cards with pricing, inclusions, and Book Now button

---

## Goal
Show all 6 AC services with detailed cards, prices, inclusions, and animated hover effects.

---

## Layout Specs
- **Background:** White `#ffffff`
- **Padding:** 80px vertical
- **Grid:** **3 columns** desktop → **2** tablet → **1** mobile

---

## Exact Section Text

```
H2: Our Featured Services
Subheading: Professional AC services across Bhopal & Indore with transparent pricing and expert technicians
```

---

## Card Design Specs

| Property | Value |
|----------|-------|
| Background | White |
| Border | `1px solid #e5e7eb` |
| Border Radius | `12px` |
| Padding | `30px` |
| Icon | Large, colorful, top of card |
| Title | Bold, 20px |
| Description | Gray (#666666), 2-3 lines |
| Price Badge | "Starting from ₹XXX" — Blue bg, white text |
| Checklist | Green checkmarks ✅ |
| Book Now Button | Full-width, primary blue `#1a73e8` |

---

## 6 Services — Complete Details

### Service 1 — AC Maintenance & Tune-Up
- **Icon:** `fa-solid fa-wrench` (blue)
- **Price:** Starting from **₹499**
- **Description:** Complete AC servicing including filter cleaning, coil maintenance, and performance optimization
- **What's Included:**
  - ✅ Complete filter cleaning & replacement
  - ✅ Coil inspection & maintenance
  - ✅ Gas pressure check
  - ✅ Thermostat testing
  - ✅ Performance optimization
- **Badge:** "Most Popular" (red)
- **CTA:** [Book Now] → `href="tel:+918889539174"`

---

### Service 2 — AC Repair Service
- **Icon:** `fa-solid fa-screwdriver-wrench` (orange)
- **Price:** Starting from **₹799**
- **Description:** Expert diagnosis and repair of all AC issues including cooling problems, electrical faults
- **What's Included:**
  - ✅ Complete diagnosis
  - ✅ Electrical fault detection
  - ✅ Cooling problem resolution
  - ✅ Parts replacement (if needed)
  - ✅ 30-day service warranty
- **CTA:** [Book Now] → `href="tel:+918889539174"`

---

### Service 3 — AC Installation
- **Icon:** `fa-solid fa-snowflake` (blue)
- **Price:** Starting from **₹2,999**
- **Description:** Professional installation of split, window, and central AC systems with warranty
- **What's Included:**
  - ✅ Complete installation
  - ✅ Piping & wiring (up to 10 feet)
  - ✅ Gas charging
  - ✅ Testing & optimization
  - ✅ 1-year installation warranty
- **CTA:** [Book Now] → `href="tel:+918889539174"`

---

### Service 4 — Deep AC Cleaning
- **Icon:** `fa-solid fa-spray-can-sparkles` (teal)
- **Price:** Starting from **₹699**
- **Description:** Thorough cleaning of AC units including chemical wash and sanitization
- **What's Included:**
  - ✅ Chemical wash
  - ✅ Deep coil cleaning
  - ✅ Anti-bacterial treatment
  - ✅ Filter replacement
  - ✅ Sanitization
- **CTA:** [Book Now] → `href="tel:+918889539174"`

---

### Service 5 — 24/7 Emergency Service
- **Icon:** `fa-solid fa-triangle-exclamation` (red)
- **Price:** Call charges from **₹299**
- **Description:** Round-the-clock emergency AC repair service across Bhopal & Indore
- **What's Included:**
  - ✅ Immediate dispatch (30 mins)
  - ✅ Emergency diagnosis
  - ✅ On-spot repair
  - ✅ Priority service
  - ✅ 24/7 availability
- **Badge:** "24/7 Available" (red)
- **CTA:** [Call Now] → `href="tel:+918889539174"` (make it red button)

---

### Service 6 — AC Gas Refilling
- **Icon:** `fa-solid fa-temperature-half` (purple)
- **Price:** Starting from **₹1,299**
- **Description:** Professional refrigerant gas refilling and leak detection service
- **What's Included:**
  - ✅ Leak detection
  - ✅ Gas refilling (R22 / R410A / R32)
  - ✅ Pressure testing
  - ✅ Performance check
  - ✅ 30-day gas warranty
- **CTA:** [Book Now] → `href="tel:+918889539174"`

---

## Card HTML Template

```html
<div class="service-card">
  <div class="card-icon">
    <i class="fa-solid fa-wrench"></i>
  </div>
  <span class="card-badge popular">Most Popular</span>
  <h3 class="card-title">AC Maintenance & Tune-Up</h3>
  <p class="card-desc">Complete AC servicing including filter cleaning...</p>
  <div class="price-badge">Starting from ₹499</div>
  <div class="card-includes">
    <h4>What's Included</h4>
    <ul>
      <li><i class="fa-solid fa-check" style="color:#10b981"></i> Complete filter cleaning</li>
      <!-- more items -->
    </ul>
  </div>
  <a href="tel:+918889539174" class="btn-book-now">Book Now</a>
</div>
```

---

## Card Stagger Animation on Scroll (from Animation Spec PDF — Section 2.3)

```css
@keyframes serviceCardAppear {
  from { opacity: 0; transform: translateY(30px) scale(0.95); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

/* Trigger: section 25% from bottom of viewport */
.service-card:nth-child(1) { animation-delay: 0s;    animation: serviceCardAppear 0.6s var(--ease-standard) forwards; }
.service-card:nth-child(2) { animation-delay: 0.12s; }
.service-card:nth-child(3) { animation-delay: 0.24s; }
.service-card:nth-child(4) { animation-delay: 0.36s; }
.service-card:nth-child(5) { animation-delay: 0.48s; }
.service-card:nth-child(6) { animation-delay: 0.60s; }
```

---

## Card Hover Effects (from Animation Spec PDF — Section 3.2)

```css
.service-card {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.12);
}
.service-card:hover .card-icon i {
  transform: rotate(10deg);
  transition: transform 0.3s ease-out;
}
.service-card:hover .price-badge {
  animation: pricePulse 0.4s ease;
}
@keyframes pricePulse {
  0%,100% { transform: scale(1); }
  50%      { transform: scale(1.05); }
}
.service-card:hover .btn-book-now {
  background: var(--color-primary-dark); /* #0d47a1 */
  transition: background 0.2s;
}
```

---

## Badge Animations (Continuous)

```css
/* "Most Popular" badge — gentle pulse */
.card-badge.popular {
  animation: badgePulse 1.5s ease-in-out infinite;
}

/* "24/7 Available" badge — glow */
.card-badge.available {
  animation: badgeGlow 2s ease-in-out infinite;
}

@keyframes badgePulse {
  0%,100% { transform: scale(1); }
  50%      { transform: scale(1.04); }
}

@keyframes badgeGlow {
  0%,100% { box-shadow: 0 0 0 rgba(239,68,68,0); }
  50%      { box-shadow: 0 0 10px rgba(239,68,68,0.4); }
}
```

---

*Source: PDF 1 (Sections 6.2–6.5) + PDF 2 (Sections 2.3, 3.2)*
