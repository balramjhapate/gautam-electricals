# TODO 09 — Why Choose Us Section (6 Feature Cards)
> **Priority:** Phase 3, Week 3
> **Section:** Grid of 6 feature cards explaining why to pick this service

---

## Goal
Build a 3×2 grid of feature highlight cards with icons, bounce animations, and hover effects.

---

## Layout Specs
- **Background:** Light gray gradient (`#f5f5f5` to `#ffffff`)
- **Padding:** 80px vertical
- **Grid:** **3 columns × 2 rows** (total 6 cards)
- **Text Alignment:** Center

---

## Exact Section Text

```
H2: Why Choose AC Service Bhopal & Indore?

Subheading: Your trusted partner for all AC services in Bhopal & Indore with unmatched expertise,
certified professionals, and guaranteed customer satisfaction
```

---

## 6 Feature Cards — Complete Data

| # | Font Awesome Icon | Icon Color | Card Title | Description Text |
|---|-------------------|------------|------------|------------------|
| 1 | `fa-solid fa-trophy` | Gold `#f59e0b` | **10+ Years Experience** | Serving Bhopal & Indore since 2014 with expert AC solutions and customer satisfaction |
| 2 | `fa-solid fa-certificate` | Blue `#1a73e8` | **Certified Technicians** | All our technicians are certified, licensed, and regularly trained on latest AC technologies |
| 3 | `fa-solid fa-clock` | Green `#10b981` | **24/7 Emergency Service** | Quick response within 30 minutes across Bhopal & Indore for urgent AC issues |
| 4 | `fa-solid fa-heart` | Red `#ef4444` | **5000+ Happy Customers** | Trusted by thousands of residential and commercial customers across Bhopal & Indore |
| 5 | `fa-solid fa-location-dot` | Purple `#8b5cf6` | **Wide Service Coverage** | Covering 20+ areas across Bhopal & Indore with same-day service availability |
| 6 | `fa-solid fa-shield-halved` | Teal `#0d9488` | **100% Satisfaction Guarantee** | Quality guarantee on all services with transparent pricing and no hidden charges |

---

## Card HTML Template

```html
<div class="feature-card">
  <div class="feature-icon">
    <i class="fa-solid fa-trophy"></i>
  </div>
  <h3 class="feature-title">10+ Years Experience</h3>
  <p class="feature-desc">Serving Bhopal & Indore since 2014 with expert AC solutions and customer satisfaction</p>
</div>
```

---

## Card CSS

```css
.feature-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  transition: all 0.25s ease;
}

.feature-icon {
  width: 70px; height: 70px; border-radius: 50%;
  background: #f0f7ff;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 20px;
  font-size: 28px;
  transition: all 0.3s ease;
}

.feature-title {
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.feature-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* Hover Effect */
.feature-card:hover {
  background: #f0f7ff;
  border-color: #1a73e8;
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(26,115,232,0.1);
}
.feature-card:hover .feature-icon {
  transform: scale(1.1);
  background: #1a73e8;
  color: white;
}
.feature-card:hover .feature-icon i {
  animation: iconBounce 0.4s ease;
}
@keyframes iconBounce {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-6px); }
}
```

---

## Scroll-In Animation (from Animation Spec PDF — Section 2.6)

**Type:** Zoom in + fade, with bounce easing

```css
@keyframes featureCardAppear {
  from { opacity: 0; transform: scale(0.9); }
  to   { opacity: 1; transform: scale(1); }
}

/* Trigger: section 25% visible */
.feature-card:nth-child(1) { animation: featureCardAppear 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.0s forwards; opacity:0; }
.feature-card:nth-child(2) { animation: featureCardAppear 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.1s forwards; opacity:0; }
.feature-card:nth-child(3) { animation: featureCardAppear 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.2s forwards; opacity:0; }
.feature-card:nth-child(4) { animation: featureCardAppear 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.3s forwards; opacity:0; }
.feature-card:nth-child(5) { animation: featureCardAppear 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.4s forwards; opacity:0; }
.feature-card:nth-child(6) { animation: featureCardAppear 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.5s forwards; opacity:0; }
```

**Icons rotate on appearance:**
```css
.feature-icon i {
  animation: iconSpin 0.6s ease-out;
}
@keyframes iconSpin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
```

---

## Grid CSS

```css
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 991px) { .features-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 576px) { .features-grid { grid-template-columns: 1fr; } }
```

---

*Source: PDF 1 (Sections 9.1–9.4) + PDF 2 (Section 2.6)*
