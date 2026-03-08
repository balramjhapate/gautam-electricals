# TODO 19 — Browser Testing & QA Checklist
> **Priority:** Phase 5 — Before Launch
> **Run through this checklist before declaring the website ready**

---

## Cross-Browser Testing (from Animation Spec PDF — Section 9.1)

| Browser | Platform | Status |
|---------|----------|--------|
| Chrome (latest 2 versions) | Windows | [ ] Pass |
| Chrome (latest 2 versions) | Mac | [ ] Pass |
| Firefox (latest 2 versions) | Windows | [ ] Pass |
| Firefox (latest 2 versions) | Mac | [ ] Pass |
| Safari (latest) | Mac | [ ] Pass |
| Safari (latest) | iOS | [ ] Pass |
| Edge (latest) | Windows | [ ] Pass |
| Mobile Chrome | Android | [ ] Pass |
| Samsung Internet | Android | [ ] Pass |

---

## Performance Testing (from Animation Spec PDF — Section 9.2)

| Check | Target | Status |
|-------|--------|--------|
| Animations at 60fps | No jank/stutter | [ ] Pass |
| Page load time | < 3 seconds | [ ] Pass |
| Google PageSpeed (Mobile) | > 90 | [ ] Pass |
| Google PageSpeed (Desktop) | > 90 | [ ] Pass |
| Smooth scroll on mobile | No lag | [ ] Pass |
| First Contentful Paint | < 1.5s | [ ] Pass |

---

## Animation Timing Verification (from Animation Spec PDF — Section 9.3)

| Animation | Expected | Status |
|-----------|---------|--------|
| Emergency banner slides in on page load | 0.6s, delay 0.2s | [ ] Pass |
| Hero heading fades up | 0.8s, delay 0.3s | [ ] Pass |
| Counter animations trigger at 50% scroll | All 4 counters fire | [ ] Pass |
| Testimonial carousel auto-advances | Every 5 seconds | [ ] Pass |
| Hover states respond | < 300ms | [ ] Pass |
| Marquee scroll runs continuously | 30s cycle, pauses on hover | [ ] Pass |
| Sequential nav item stagger | 0.1s between each | [ ] Pass |
| Service cards stagger | 6 cards, 0.12s between each | [ ] Pass |

---

## Mobile Responsiveness Testing

Run on real device OR Chrome DevTools (F12 → Device toolbar):

| Screen Size | Test | Status |
|-------------|------|--------|
| 375px (iPhone SE) | Overall layout OK | [ ] Pass |
| 390px (iPhone 14) | Overall layout OK | [ ] Pass |
| 768px (iPad) | Tablet layout OK | [ ] Pass |
| 1024px (iPad Pro) | Layout transition OK | [ ] Pass |
| 1440px (Desktop) | Full layout OK | [ ] Pass |

---

## Functionality Checklist

| Feature | Expected Behavior | Status |
|---------|------------------|--------|
| Phone button (header) | Opens dialer: +91 8889539174 | [ ] Pass |
| Emergency banner "Call Now" | Opens dialer | [ ] Pass |
| WhatsApp button (floating) | Opens wa.me/918889539174 with pre-filled message | [ ] Pass |
| Hero "Call" CTA | Opens dialer | [ ] Pass |
| "Book Now" buttons (all 6 services) | Opens dialer | [ ] Pass |
| "Choose AMC" button | Opens dialer | [ ] Pass |
| "Request Quote" button | Opens email: bhopalservice998@gmail.com | [ ] Pass |
| All nav links | Smooth scroll to correct section | [ ] Pass |
| Hamburger menu (mobile) | Opens/closes drawer correctly | [ ] Pass |
| Dismiss emergency banner | Animates out + removes from DOM | [ ] Pass |
| Testimonial carousel arrows | Advance slides | [ ] Pass |
| Testimonial swipe (mobile) | Swipe left/right works | [ ] Pass |
| Back-to-top button | Appears after 500px scroll | [ ] Pass |
| Back-to-top click | Smooth scroll to top | [ ] Pass |
| Location card marquee | Pauses on hover | [ ] Pass |
| Mobile bottom CTA bar | Visible only on ≤768px | [ ] Pass |
| Footer links | All navigate correctly | [ ] Pass |
| Social media icons | Open correct pages | [ ] Pass |

---

## Content Verification

| Item | Check | Status |
|------|-------|--------|
| Phone everywhere is +91 8889539174 | All instances correct | [ ] Pass |
| WhatsApp links use 918889539174 | All instances correct | [ ] Pass |
| Email is bhopalservice998@gmail.com | All instances correct | [ ] Pass |
| "Patna" not mentioned anywhere | No Patna references | [ ] Pass |
| All 10 Bhopal areas listed | With correct pincodes + ETA | [ ] Pass |
| All 10 Indore areas listed | With correct pincodes + ETA | [ ] Pass |
| All 6 services have correct prices | Per PDF specs | [ ] Pass |
| All 5 testimonials showing | With star ratings | [ ] Pass |
| Counter: 10+, 5000+, 15000+, 30 min | Correct final values | [ ] Pass |
| Footer copyright: © 2026 | Correct year | [ ] Pass |

---

## Accessibility Checklist

| Check | Status |
|-------|--------|
| All images have alt text | [ ] Pass |
| Font sizes minimum 14px (body) | [ ] Pass |
| Sufficient color contrast (text on bg) | [ ] Pass |
| Buttons have aria-label if icon-only | [ ] Pass |
| No horizontal scroll on any breakpoint | [ ] Pass |
| `prefers-reduced-motion` CSS applied | [ ] Pass |
| Touch targets minimum 44×44px | [ ] Pass |

---

## SEO Checklist

| Check | Status |
|-------|--------|
| Single H1 on page | [ ] Pass |
| Meta title set correctly | [ ] Pass |
| Meta description set | [ ] Pass |
| LocalBusiness schema markup active | [ ] Pass |
| sitemap.xml accessible at /sitemap.xml | [ ] Pass |
| robots.txt accessible at /robots.txt | [ ] Pass |
| Google Analytics tracking active | [ ] Pass |
| Phone click events tracked in GA | [ ] Pass |
| WhatsApp click events tracked | [ ] Pass |

---

*Source: PDF 2 (Sections 9.1–9.3) + PDF 1 (Section 18, 19)*
