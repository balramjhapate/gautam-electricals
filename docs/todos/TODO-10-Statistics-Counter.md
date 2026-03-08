# TODO 10 — Statistics Counter Section
> **Priority:** Phase 3, Week 3
> **Section:** Blue gradient section with 4 animated count-up counters

---

## Goal
Build the animated statistics section that counts up when scrolled into view using CountUp.js.

---

## Layout Specs
- **Background:** Primary blue gradient: `linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)`
- **Text Color:** White
- **Padding:** 60px vertical
- **Layout:** **4 columns** desktop → **2×2 grid** tablet → **1 column** mobile

---

## Exact Section Text (White text)

```
H2: Our Track Record
Subheading: Numbers that speak for our commitment to excellence 
            and customer satisfaction across Bhopal & Indore
```

---

## 4 Counters — Full Data

| # | Font Awesome Icon | Number | Suffix | CountUp Config | Label Text |
|---|-------------------|--------|--------|----------------|------------|
| 1 | `fa-solid fa-calendar-days` | **10** | `+` | 0→10, 2s | Years of trusted AC service in Bhopal & Indore |
| 2 | `fa-solid fa-users` | **5000** | `+` | 0→5000, 2.5s | Satisfied customers across Bhopal & Indore |
| 3 | `fa-solid fa-circle-check` | **15000** | `+` | 0→15000, 2.5s | Successfully completed service calls |
| 4 | `fa-solid fa-bolt` | **30** | ` min` | 0→30, 1.5s | Average emergency response time |

Numbers: **48–56px, Bold, White**

---

## HTML Structure

```html
<section id="stats" class="stats-section">
  <div class="container">
    <h2 class="section-heading white">Our Track Record</h2>
    <p class="section-sub white">Numbers that speak for our commitment...</p>

    <div class="stats-grid">
      <!-- Counter 1 -->
      <div class="stat-item">
        <div class="stat-icon"><i class="fa-solid fa-calendar-days"></i></div>
        <div class="stat-number" id="counter-years">0</div>
        <p class="stat-label">Years of trusted AC service in Bhopal & Indore</p>
      </div>

      <!-- Counter 2 -->
      <div class="stat-item">
        <div class="stat-icon"><i class="fa-solid fa-users"></i></div>
        <div class="stat-number" id="counter-customers">0</div>
        <p class="stat-label">Satisfied customers across Bhopal & Indore</p>
      </div>

      <!-- Counter 3 -->
      <div class="stat-item">
        <div class="stat-icon"><i class="fa-solid fa-circle-check"></i></div>
        <div class="stat-number" id="counter-jobs">0</div>
        <p class="stat-label">Successfully completed service calls</p>
      </div>

      <!-- Counter 4 -->
      <div class="stat-item">
        <div class="stat-icon"><i class="fa-solid fa-bolt"></i></div>
        <div class="stat-number" id="counter-response">0</div>
        <p class="stat-label">Average emergency response time</p>
      </div>
    </div>

    <!-- 3 Quality Badges below counters -->
    <div class="quality-badges">
      <div class="quality-badge">
        <i class="fa-solid fa-circle-check"></i>
        <div>
          <strong>Quality Guarantee</strong>
          <p>100% satisfaction guarantee on all our services</p>
        </div>
      </div>
      <div class="quality-badge">
        <i class="fa-solid fa-tag"></i>
        <div>
          <strong>Transparent Pricing</strong>
          <p>No hidden charges, upfront quotes for all services</p>
        </div>
      </div>
      <div class="quality-badge">
        <i class="fa-solid fa-headset"></i>
        <div>
          <strong>24/7 Support</strong>
          <p>Round-the-clock customer support and emergency service</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## CountUp.js Implementation (from Animation Spec PDF — Section 2.7)

```js
// Trigger counters when section is 50% visible
const statsObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {

    // Counter 1: 10+ Years (0→10, 2s)
    setTimeout(() => {
      const c1 = new CountUp('counter-years', 10, {
        duration: 2, suffix: '+', useEasing: true,
        easingFn: (t, b, c, d) => { t /= d; return -c * t * (t - 2) + b; }
      });
      c1.start();
    }, 0);

    // Counter 2: 5000+ Customers (0→5000, 2.5s)
    setTimeout(() => {
      const c2 = new CountUp('counter-customers', 5000, {
        duration: 2.5, suffix: '+', useEasing: true
      });
      c2.start();
    }, 300);

    // Counter 3: 15000+ Jobs (0→15000, 2.5s)
    setTimeout(() => {
      const c3 = new CountUp('counter-jobs', 15000, {
        duration: 2.5, suffix: '+', useEasing: true
      });
      c3.start();
    }, 600);

    // Counter 4: 30 min Response (0→30, 1.5s)
    setTimeout(() => {
      const c4 = new CountUp('counter-response', 30, {
        duration: 1.5, suffix: ' min', useEasing: true
      });
      c4.start();
    }, 900);

    statsObserver.disconnect(); // Only run once
  }
}, { threshold: 0.5 });  // trigger at 50% visibility

statsObserver.observe(document.querySelector('#stats'));
```

---

## CSS

```css
.stats-section {
  background: linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%);
  color: white;
  padding: 60px 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin: 48px 0;
}

.stat-item { text-align: center; }

.stat-icon {
  font-size: 40px;
  margin-bottom: 16px;
  animation: statIconPulse 2s ease-in-out infinite;
}
.stat-item:nth-child(2) .stat-icon { animation-delay: 0.3s; }
.stat-item:nth-child(3) .stat-icon { animation-delay: 0.6s; }
.stat-item:nth-child(4) .stat-icon { animation-delay: 0.9s; }

@keyframes statIconPulse {
  0%,100% { transform: scale(1); }
  50%      { transform: scale(1.1); }
}

.stat-number { font-size: 52px; font-weight: 700; line-height: 1; }
.stat-label  { font-size: 14px; opacity: 0.9; margin-top: 8px; }

/* Quality Badges */
.quality-badges {
  display: flex; justify-content: center; gap: 32px;
  flex-wrap: wrap; margin-top: 40px;
  padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.2);
}
.quality-badge {
  display: flex; align-items: center; gap: 12px;
  font-size: 14px; opacity: 0.9;
}
.quality-badge i { font-size: 24px; }
.quality-badge strong { display: block; font-weight: 600; }

/* Responsive */
@media (max-width: 991px) { .stats-grid { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 576px) { .stats-grid { grid-template-columns: 1fr; } }
```

---

## Background Fade-In on Section Entry (from Animation Spec PDF)

```css
.stats-section {
  opacity: 0;
  animation: statsBgFadeIn 0.5s ease-out forwards;
}
/* Triggered via IntersectionObserver class toggle */
.stats-section.visible { opacity: 1; }
```

---

*Source: PDF 1 (Sections 10.1–10.4) + PDF 2 (Section 2.7)*
