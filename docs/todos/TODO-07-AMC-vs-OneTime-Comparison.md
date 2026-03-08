# TODO 07 — AMC vs One-Time Service Comparison
> **Priority:** Phase 2, Week 2
> **Section:** Two-column comparison cards showing AMC benefits vs one-time service

---

## Goal
Show the value of taking an Annual Maintenance Contract vs paying per visit.

---

## Layout Specs
- **Background:** Light gradient (white to light blue)
- **Padding:** 80px vertical
- **Layout:** **2 columns side-by-side (50-50)** — stacked on mobile (AMC on top)
- **Card Height:** Equal for both cards

---

## Exact Section Text

```
H2: AMC vs One-Time Service
Subheading: Compare our Annual Maintenance Contract with one-time services to see the value
```

---

## AMC Card — Left Side (Recommended)

| Property | Details |
|----------|---------|
| Title | **Annual Maintenance Contract** |
| Subtitle | Comprehensive Care Plan |
| Top Border | 5px solid `#1a73e8` (Blue accent) |
| Badge | "⭐ Recommended" or "Most Popular" — prominent, blue/gold |
| Price | **Starting from ₹2,999/year** |
| CTA Button | `[Choose AMC]` — Blue, prominent, full-width |

**8 Benefits (with green ✅ checkmarks):**
1. ✅ Priority emergency response
2. ✅ Free minor repairs
3. ✅ Bi-annual deep cleaning
4. ✅ 20% discount on parts
5. ✅ Dedicated technician
6. ✅ Extended warranty
7. ✅ Seasonal maintenance
8. ✅ 24/7 priority support

---

## One-Time Card — Right Side

| Property | Details |
|----------|---------|
| Title | **One-Time Service** |
| Subtitle | Pay-per-Visit Basis |
| Top Border | 5px solid `#e5e7eb` (Gray accent) |
| Price | **Starting from ₹499/visit** |
| CTA Button | `[Book Service]` — White with border |

**8 Inclusions (with neutral checkmarks):**
1. ✓ Basic cleaning & maintenance
2. ✓ Standard warranty
3. ✓ Regular response time
4. ✓ Per-visit charges
5. ✓ No commitment required
6. ✓ Pay as you use
7. ✓ Standard support
8. ✓ Regular pricing

---

## Card HTML Structure

```html
<!-- AMC Card -->
<div class="comparison-card amc-card">
  <div class="card-badge-top">⭐ Recommended</div>
  <div class="card-header">
    <h3>Annual Maintenance Contract</h3>
    <p class="subtitle">Comprehensive Care Plan</p>
  </div>
  <div class="price-display">
    <span class="price-amount">₹2,999</span>
    <span class="price-period">/year</span>
    <p class="price-note">Starting from</p>
  </div>
  <ul class="benefits-list">
    <li><i class="fa-solid fa-check" style="color:#10b981"></i> Priority emergency response</li>
    <!-- all 8 items -->
  </ul>
  <a href="tel:+918889539174" class="btn-amc">Choose AMC</a>
</div>

<!-- One-Time Card -->
<div class="comparison-card onetime-card">
  <div class="card-header">
    <h3>One-Time Service</h3>
    <p class="subtitle">Pay-per-Visit Basis</p>
  </div>
  <div class="price-display">
    <span class="price-amount">₹499</span>
    <span class="price-period">/visit</span>
    <p class="price-note">Starting from</p>
  </div>
  <ul class="benefits-list">
    <li><i class="fa-solid fa-check" style="color:#999"></i> Basic cleaning & maintenance</li>
    <!-- all 8 items -->
  </ul>
  <a href="tel:+918889539174" class="btn-onetime">Book Service</a>
</div>
```

---

## Card CSS

```css
.comparison-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  max-width: 900px;
  margin: 0 auto;
}

.comparison-card {
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  position: relative;
  transition: transform 0.25s ease;
}

.amc-card {
  border-top: 5px solid #1a73e8;
}

.onetime-card {
  border-top: 5px solid #e5e7eb;
}

.comparison-card:hover {
  transform: scale(1.02);
}

.card-badge-top {
  position: absolute;
  top: -14px; left: 50%;
  transform: translateX(-50%);
  background: #1a73e8; color: white;
  border-radius: 50px; padding: 4px 16px;
  font-size: 12px; font-weight: 700;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .comparison-wrapper { grid-template-columns: 1fr; }
}
```

---

## Slide-In Animation (from Animation Spec PDF — Section 2.4)

**AMC Card (slides in from left):**
```css
.amc-card {
  opacity: 0;
  transform: translateX(-50px);
  animation: slideFromLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
}
@keyframes slideFromLeft {
  to { opacity: 1; transform: translateX(0); }
}
```

**One-Time Card (slides in from right, slightly later):**
```css
.onetime-card {
  opacity: 0;
  transform: translateX(50px);
  animation: slideFromRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
}
@keyframes slideFromRight {
  to { opacity: 1; transform: translateX(0); }
}
```

**"Recommended" badge — scale pulse after cards arrive (delay 0.9s):**
```css
.card-badge-top {
  animation: recommendedPop 0.4s cubic-bezier(0.34,1.56,0.64,1) 0.9s both;
}
@keyframes recommendedPop {
  from { transform: translateX(-50%) scale(0); }
  to   { transform: translateX(-50%) scale(1); }
}
```

**Trigger:** When section is 30% from bottom of viewport (IntersectionObserver)

---

*Source: PDF 1 (Sections 7.1–7.5) + PDF 2 (Section 2.4)*
