# TODO 05 — Service Coverage Area Section
> **Priority:** Phase 2, Week 2
> **Section:** Interactive location cards showing Bhopal & Indore coverage areas

---

## Goal
Show all service areas with infinite horizontal scroll (marquee) and status badges (Available/Next Slot/Busy).

---

## Layout Specs
- **Background:** `#f5f5f5` (Light Gray)
- **Padding:** 60px vertical
- **Grid:** 5 columns desktop → 3 tablet → 2 mobile
- **Card Count:** 20 total (10 Bhopal + 10 Indore)
- **Bhopal Priority:** Show Bhopal cards first

---

## Exact Section Text

```
H2: Service Coverage Across Bhopal & Indore

Subheading: Professional AC services available in all major areas.
Hover over any location to see real-time availability and estimated arrival times.

Bottom Note: Don't see your area? We're expanding coverage daily.

CTA Button: [View All Service Areas]  → Indigo / Blue background
```

---

## All 10 Bhopal Cards (PRIORITY — show first)

| Area Name | Pincode | ETA | Status |
|-----------|---------|-----|--------|
| Arera Colony | 462016 | ETA: 15 mins | 🟢 Available Now |
| MP Nagar | 462011 | ETA: 20 mins | 🟢 Available Now |
| New Market | 462001 | ETA: 25 mins | 🟡 Next Slot |
| Kolar Road | 462042 | ETA: 30 mins | 🟢 Available Now |
| Berasia Road | 462038 | ETA: 35 mins | 🔴 Busy |
| Hoshangabad Road | 462026 | ETA: 20 mins | 🟢 Available Now |
| Ayodhya Bypass | 462041 | ETA: 40 mins | 🟡 Next Slot |
| Bawadia Kalan | 462039 | ETA: 45 mins | 🔴 Busy |
| Jahangirabad | 462008 | ETA: 15 mins | 🟢 Available Now |
| Ashoka Garden | 462023 | ETA: 30 mins | 🟢 Available Now |

## All 10 Indore Cards (Secondary)

| Area Name | Pincode | ETA | Status |
|-----------|---------|-----|--------|
| Vijay Nagar | 452010 | ETA: 15 mins | 🟢 Available Now |
| Rau | 452012 | ETA: 25 mins | 🟡 Next Slot |
| Palasia | 452001 | ETA: 20 mins | 🟢 Available Now |
| Rajendra Nagar | 452012 | ETA: 30 mins | 🟢 Available Now |
| AB Road | 452001 | ETA: 15 mins | 🟢 Available Now |
| Sapna Sangeeta | 452001 | ETA: 20 mins | 🟢 Available Now |
| Bhanwarkuan | 452001 | ETA: 25 mins | 🟡 Next Slot |
| Aerodrome Road | 452005 | ETA: 35 mins | 🔴 Busy |
| LIG Colony | 452008 | ETA: 40 mins | 🟢 Available Now |
| Bhawrasla | 452013 | ETA: 30 mins | 🟡 Next Slot |

---

## Status Badge Colors

| Status | Color | Hex | Dot |
|--------|-------|-----|-----|
| Available Now | Green | `#10b981` | Pulsing green dot |
| Next Slot | Orange | `#f59e0b` | Static orange dot |
| Busy | Red | `#ef4444` | Static red dot |

---

## Card HTML Structure

```html
<div class="location-card">
  <div class="card-top">
    <i class="fa-solid fa-location-dot" style="color:#1a73e8"></i>
    <h3 class="area-name">Arera Colony</h3>
  </div>
  <p class="area-pincode">Pincode: 462016</p>
  <p class="area-eta"><i class="fa-regular fa-clock"></i> ETA: 15 mins</p>
  <span class="status-badge available">
    <span class="status-dot"></span> Available Now
  </span>
</div>
```

---

## Card CSS

```css
.location-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border: 1px solid #e5e7eb;
  min-width: 200px;
  transition: all 0.25s ease-out;
  cursor: pointer;
}

/* Status Badges */
.status-badge {
  display: inline-flex; align-items: center; gap: 6px;
  border-radius: 50px; padding: 4px 10px; font-size: 12px; font-weight: 600;
}
.status-badge.available { background: #d1fae5; color: #065f46; }
.status-badge.next-slot { background: #fef3c7; color: #92400e; }
.status-badge.busy      { background: #fee2e2; color: #991b1b; }

/* Available Now — pulsing status dot */
.available .status-dot {
  width: 8px; height: 8px; border-radius: 50%; background: #10b981;
  animation: availablePulse 2s ease-in-out infinite;
}
@keyframes availablePulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.05); opacity: 0.7; }
}
```

---

## Hover Effect on Location Cards (from Animation Spec PDF — Section 3.3)

```css
.location-card:hover {
  transform: scale(1.03);
  border: 2px solid var(--color-primary);  /* #1a73e8 */
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.location-card:hover .status-badge.available {
  box-shadow: 0 0 12px rgba(16,185,129,0.4);  /* green glow */
}
```

---

## Scroll-In Card Stagger Animation (from Animation Spec PDF — Section 2.1)

```css
@keyframes locationCardAppear {
  from { opacity: 0; transform: translateY(20px) scale(0.95); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

/* Trigger with AOS or IntersectionObserver when section 20% visible */
.location-card:nth-child(1)  { animation-delay: 0s; }
.location-card:nth-child(2)  { animation-delay: 0.08s; }
.location-card:nth-child(3)  { animation-delay: 0.16s; }
.location-card:nth-child(4)  { animation-delay: 0.24s; }
.location-card:nth-child(5)  { animation-delay: 0.32s; }
/* ... continue for all cards */
```

---

## Marquee Infinite Scroll (from Animation Spec PDF — Section 2.2)

Duplicate all cards so scroll loops seamlessly:

```css
@keyframes marqueeScroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-2000px); }  /* 10 cards × 200px */
}

.location-cards-wrapper {
  display: flex;
  gap: 16px;
  animation: marqueeScroll 30s linear infinite;
  width: max-content;
}

/* Pause on hover */
.location-cards-wrapper:hover {
  animation-play-state: paused;
}
```

**Mobile (< 768px):** Disable marquee, use horizontal swipe scroll:
```css
@media (max-width: 768px) {
  .location-cards-wrapper {
    animation: none;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
  }
  .location-card { scroll-snap-align: start; }
}
```

---

*Source: PDF 1 (Sections 5.2–5.6) + PDF 2 (Sections 2.1, 2.2, 3.3)*
