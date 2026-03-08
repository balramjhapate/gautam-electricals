# TODO 12 — Footer Section
> **Priority:** Phase 3, Week 3
> **Section:** Dark 4-column footer with links, contact info, social icons

---

## Goal
Build a complete dark footer with 4 columns: Company Info | Quick Links | Our Services | Contact Us

---

## Layout Specs
- **Background:** `#2c3e50` (Dark charcoal/navy)
- **Text Color:** White / Light gray
- **Padding:** 60px vertical (main) + 20px bottom bar
- **Layout:** **4 columns** desktop → **2×2** tablet → **1 column stacked** mobile

---

## Column 1 — Company Info

```
Logo: AC SERVICE BHOPAL & INDORE (white version, with wrench icon)
Tagline: "Your trusted AC service partner since 2014"
Description: Professional AC servicing, repair, and installation across Bhopal & 
             Indore with certified technicians and 24/7 emergency support.

Social Media Icons (circular, slate → brand color on hover):
  Facebook   →  https://facebook.com/[page]
  Instagram  →  https://instagram.com/[profile]
  Twitter    →  https://twitter.com/[profile] (optional)
  LinkedIn   →  optional
```

---

## Column 2 — Quick Links

**Heading:** Quick Links

Links (anchor or page links):
- Home (`#home`)
- Services (`#services`)
- Coverage Areas (`#coverage`)
- AMC Plans (`#amc`)
- Testimonials (`#testimonials`)
- About Us
- Contact Us (`#contact`)

---

## Column 3 — Our Services

**Heading:** Our Services

Links (click-to-call or anchor to services section):
- AC Maintenance
- AC Repair
- AC Installation
- Deep AC Cleaning
- Gas Refilling
- Emergency Service
- AMC Plans
- Commercial Services

---

## Column 4 — Contact Info

**Heading:** Contact Us

```
📞 Phone:     +91 8889539174    → href="tel:+918889539174"
🚨 Emergency: +91 8889539174   → href="tel:+918889539174"
📧 Email:     bhopalservice998@gmail.com → href="mailto:bhopalservice998@gmail.com"
💬 WhatsApp:  +91 8889539174   → href="https://wa.me/918889539174"

📍 Service Areas:
   Bhopal, Madhya Pradesh
   Indore, Madhya Pradesh

🕐 Business Hours:
   Mon–Fri:  9 AM – 7 PM
   Sat:      9 AM – 5 PM
   Emergency: 24/7
```

---

## Footer Bottom Bar

```
─────────────────────────────────────────────────────
Left:  © 2026 AC Service Bhopal & Indore. All rights reserved.
Right: Privacy Policy  |  Terms & Conditions  |  Sitemap
─────────────────────────────────────────────────────
```
Font: 12px, color: `rgba(255,255,255,0.5)`

---

## HTML Structure

```html
<footer id="footer" class="footer">
  <div class="container">
    <div class="footer-grid">
      <!-- Column 1 -->
      <div class="footer-col">
        <div class="footer-logo">
          <i class="fa-solid fa-snowflake"></i> AC Service Bhopal & Indore
        </div>
        <p class="footer-tagline">Your trusted AC service partner since 2014</p>
        <p class="footer-desc">Professional AC servicing across Bhopal & Indore...</p>
        <div class="social-icons">
          <a href="#" class="social-icon fb"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class="social-icon ig"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" class="social-icon tw"><i class="fa-brands fa-x-twitter"></i></a>
        </div>
      </div>

      <!-- Column 2 -->
      <div class="footer-col">
        <h4 class="footer-heading">Quick Links</h4>
        <ul class="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <!-- ... -->
        </ul>
      </div>

      <!-- Column 3 -->
      <div class="footer-col">
        <h4 class="footer-heading">Our Services</h4>
        <ul class="footer-links">
          <li><a href="#services">AC Maintenance</a></li>
          <!-- ... -->
        </ul>
      </div>

      <!-- Column 4 -->
      <div class="footer-col">
        <h4 class="footer-heading">Contact Us</h4>
        <ul class="footer-contact">
          <li><i class="fa-solid fa-phone"></i> <a href="tel:+918889539174">+91 8889539174</a></li>
          <li><i class="fa-brands fa-whatsapp"></i> <a href="https://wa.me/918889539174">WhatsApp</a></li>
          <li><i class="fa-solid fa-envelope"></i> <a href="mailto:bhopalservice998@gmail.com">bhopalservice998@gmail.com</a></li>
          <li><i class="fa-solid fa-location-dot"></i> Bhopal & Indore, MP</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Bottom Bar -->
  <div class="footer-bottom">
    <div class="container">
      <span>© 2026 AC Service Bhopal & Indore. All rights reserved.</span>
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Sitemap</a>
      </div>
    </div>
  </div>
</footer>
```

---

## CSS

```css
.footer { background: #2c3e50; color: rgba(255,255,255,0.85); padding: 60px 0 0; }
.footer-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; }
.footer-heading { color: white; font-size: 16px; font-weight: 700; margin-bottom: 20px; }
.footer-links { list-style: none; padding: 0; }
.footer-links li { margin-bottom: 10px; }
.footer-links a { color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s; }
.footer-links a:hover { color: #1a73e8; }
.footer-logo { font-size: 20px; font-weight: 700; color: white; margin-bottom: 12px; }
.footer-tagline { color: rgba(255,255,255,0.6); font-size: 14px; margin-bottom: 12px; }

/* Social Icons */
.social-icons { display: flex; gap: 12px; margin-top: 20px; }
.social-icon {
  width: 36px; height: 36px; border-radius: 50%;
  background: rgba(255,255,255,0.1); color: white;
  display: flex; align-items: center; justify-content: center;
  text-decoration: none; transition: all 0.4s ease;
}
.social-icon.fb:hover { background: #1877f2; transform: rotate(360deg) scale(1.15); }
.social-icon.ig:hover { background: #e1306c; transform: rotate(360deg) scale(1.15); }
.social-icon.tw:hover { background: #000; transform: rotate(360deg) scale(1.15); }

/* Bottom Bar */
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 20px 0; margin-top: 40px;
}
.footer-bottom .container {
  display: flex; justify-content: space-between; align-items: center;
  font-size: 12px; color: rgba(255,255,255,0.5);
}
.footer-legal { display: flex; gap: 20px; }
.footer-legal a { color: rgba(255,255,255,0.5); text-decoration: none; }
.footer-legal a:hover { color: white; }

/* Responsive */
@media (max-width: 991px) { .footer-grid { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 576px) { .footer-grid { grid-template-columns: 1fr; } }
```

---

## Footer Fade-In Animation (from Animation Spec PDF — Section 2.9)

```css
/* When footer enters viewport */
.footer { opacity: 0; transform: translateY(20px); transition: all 0.6s ease-out; }
.footer.visible { opacity: 1; transform: translateY(0); }
```
**Social icons:** stagger 0.1s each, 0.4s duration per icon

---

*Source: PDF 1 (Sections 12.1–12.6) + PDF 2 (Sections 2.9, 3.6)*
