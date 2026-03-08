# TODO 11 — Emergency CTA Section
> **Priority:** Phase 3, Week 3
> **Section:** Split section with urgent contact info left + business hours card right

---

## Goal
Build the urgency-focused CTA section with real phone numbers, WhatsApp, and business hours.

---

## Layout Specs
- **Background:** White or `#f9fafb` (very light gray)
- **Padding:** 80px vertical
- **Layout:** Split — **Text 60% left** | **Contact Card 40% right**
- **Max Width:** 1200px centered
- **Mobile:** Stacked (contact card below text)

---

## LEFT SIDE — Exact Content

```
H2: Need AC Service Right Now?

Subheading:
Don't let a broken AC ruin your comfort. Our expert technicians are 
ready to help 24/7 across Bhopal & Indore.

Features List (with icons):
  🚨  Emergency Service Available
  ⏱️  Response time: Within 30 minutes in Bhopal & Indore
  🕐  24/7 availability — Call us anytime

Phone Number Buttons (stacked vertically):
  [📞 Emergency: +91 8889539174]   ← LARGE, Red button, href="tel:+918889539174"
  [📞 Regular: +91 8889539174]     ← Blue button,     href="tel:+918889539174"
  [💬 WhatsApp]                    ← Green button,    href="https://wa.me/918889539174?text=Hi+I+need+AC+service"
```

---

## RIGHT SIDE — Contact Card (Exact Content)

```
Card Title: 🕐 Business Hours

Mon – Fri:  09:00 AM – 07:00 PM
Saturday:   09:00 AM – 05:00 PM
Sunday:     10:00 AM – 04:00 PM
Emergency:  24/7  ← Red colored text

────────── Divider ──────────

Get Detailed Quote:
  ✅ Complete assessment with instant pricing
  ✅ Detailed service assessment
  ✅ Transparent pricing breakdown
  ✅ Flexible scheduling options

📧 bhopalservice998@gmail.com

[Request Quote →]  ← Full-width, primary blue button
                   → href="mailto:bhopalservice998@gmail.com"
```

---

## HTML Structure

```html
<section id="contact" class="emergency-cta-section">
  <div class="container">
    <div class="cta-wrapper">

      <!-- LEFT -->
      <div class="cta-left">
        <h2>Need AC Service Right Now?</h2>
        <p class="cta-sub">Don't let a broken AC ruin your comfort...</p>

        <ul class="cta-features">
          <li><i class="fa-solid fa-triangle-exclamation" style="color:#ef4444"></i> Emergency Service Available</li>
          <li><i class="fa-regular fa-clock" style="color:#1a73e8"></i> Response time: Within 30 minutes</li>
          <li><i class="fa-solid fa-phone-volume" style="color:#10b981"></i> 24/7 availability</li>
        </ul>

        <div class="cta-buttons">
          <a href="tel:+918889539174" class="btn-emergency">
            <i class="fa-solid fa-phone"></i> Emergency: +91 8889539174
          </a>
          <a href="tel:+918889539174" class="btn-regular">
            <i class="fa-solid fa-phone"></i> Regular: +91 8889539174
          </a>
          <a href="https://wa.me/918889539174?text=Hi%2C+I+need+AC+service+in+Bhopal" 
             target="_blank" class="btn-whatsapp-cta">
            <i class="fa-brands fa-whatsapp"></i> WhatsApp Us
          </a>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="cta-right">
        <div class="contact-card">
          <h3><i class="fa-regular fa-clock"></i> Business Hours</h3>
          <table class="hours-table">
            <tr><td>Mon – Fri</td><td>09:00 AM – 07:00 PM</td></tr>
            <tr><td>Saturday</td><td>09:00 AM – 05:00 PM</td></tr>
            <tr><td>Sunday</td><td>10:00 AM – 04:00 PM</td></tr>
            <tr><td class="emergency-row">Emergency</td><td class="emergency-row">24/7</td></tr>
          </table>
          <hr />
          <h4>Get Detailed Quote</h4>
          <ul class="quote-features">
            <li>✅ Complete assessment with instant pricing</li>
            <li>✅ Detailed service assessment</li>
            <li>✅ Transparent pricing breakdown</li>
            <li>✅ Flexible scheduling options</li>
          </ul>
          <p class="contact-email">📧 bhopalservice998@gmail.com</p>
          <a href="mailto:bhopalservice998@gmail.com" class="btn-quote">
            Request Quote →
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
```

---

## Button CSS

```css
.btn-emergency {
  display: flex; align-items: center; gap: 10px;
  background: #ef4444; color: white;
  padding: 16px 28px; border-radius: 8px;
  font-size: 16px; font-weight: 600;
  text-decoration: none;
  animation: phonePulse 2s ease-in-out infinite;  /* Continuous pulse */
}
@keyframes phonePulse {
  0%,100% { box-shadow: 0 0 0 rgba(239,68,68,0); }
  50%      { box-shadow: 0 0 16px rgba(239,68,68,0.4); }
}

.btn-regular { background: #1a73e8; color: white; /* same structure */ }
.btn-whatsapp-cta { background: #10b981; color: white; /* same structure */ }
.btn-whatsapp-cta:hover {
  animation: whatsappBounce 0.4s ease;
}
@keyframes whatsappBounce {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-6px); }
}
```

---

## Contact Card CSS

```css
.contact-card {
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}
.hours-table { width: 100%; border-collapse: collapse; margin: 16px 0; }
.hours-table td { padding: 8px 0; border-bottom: 1px solid #f3f4f6; }
.emergency-row { color: #ef4444; font-weight: 700; }
.btn-quote {
  display: block; width: 100%;
  background: #1a73e8; color: white;
  text-align: center; padding: 14px;
  border-radius: 8px; font-weight: 600;
  text-decoration: none; margin-top: 16px;
}
```

---

## Slide-In Animation (from Animation Spec PDF — Section 2.8)

**Trigger:** Section 30% visible

```css
/* Left: slides in from left */
.cta-left {
  opacity: 0;
  transform: translateX(-40px);
  animation: slideInLeft 0.7s cubic-bezier(0.16,1,0.3,1) forwards;
}

/* Right card: slides in from right, 0.2s later */
.cta-right {
  opacity: 0;
  transform: translateX(40px);
  animation: slideInRight 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s forwards;
}

@keyframes slideInLeft  { to { opacity:1; transform:translateX(0); } }
@keyframes slideInRight { to { opacity:1; transform:translateX(0); } }
```

---

## Layout CSS

```css
.cta-wrapper {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 48px;
  align-items: start;
}
.cta-buttons { display: flex; flex-direction: column; gap: 12px; margin-top: 24px; }

@media (max-width: 768px) {
  .cta-wrapper { grid-template-columns: 1fr; }
}
```

---

*Source: PDF 1 (Sections 11.1–11.4) + PDF 2 (Section 2.8)*
