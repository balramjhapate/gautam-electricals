# TODO 08 — Customer Testimonials Carousel
> **Priority:** Phase 3, Week 3
> **Section:** Auto-sliding carousel with 5 customer reviews and star ratings

---

## Goal
Build an auto-sliding testimonial carousel using Swiper.js, showing 5 real customer reviews.

---

## Layout Specs
- **Background:** White `#ffffff`
- **Padding:** 80px vertical
- **Visible Cards:** 3 (desktop) → 2 (tablet) → 1 (mobile)
- **Large Rating Display:** **"4.7 ⭐⭐⭐⭐⭐"** + "Based on 500+ reviews"

---

## Exact Section Text

```
H2: What Our Customers Say
Subheading: Trusted by thousands of customers across Bhopal & Indore for reliable AC services.
            Real experiences from real people.

Rating Display: 4.7 ★★★★★  |  Based on 500+ reviews
```

---

## 5 Testimonials — Full Data (from PDF)

### Testimonial 1
- **Name:** Rajesh Sharma
- **Location:** MP Nagar, Bhopal
- **Service:** AC Installation
- **Rating:** ⭐⭐⭐⭐⭐ (5.0 / 5.0)
- **Review:** "Excellent service! The technician was professional and installed my AC perfectly. Very satisfied with the work quality and pricing."
- **Posted:** 1 week ago
- **Avatar:** Use blue initial avatar "RS"

### Testimonial 2
- **Name:** Priya Verma
- **Location:** Vijay Nagar, Indore
- **Service:** AC Repair
- **Rating:** ⭐⭐⭐⭐½ (4.5 / 5.0)
- **Review:** "Quick response and efficient service. My AC was not cooling properly, they fixed it in no time. Highly recommended!"
- **Posted:** 3 days ago
- **Avatar:** Use pink initial avatar "PV"

### Testimonial 3
- **Name:** Amit Patel
- **Location:** Arera Colony, Bhopal
- **Service:** AMC Service
- **Rating:** ⭐⭐⭐⭐⭐ (5.0 / 5.0)
- **Review:** "Taking AMC was the best decision. Regular maintenance keeps my AC running smoothly. Great value for money!"
- **Posted:** 2 weeks ago
- **Avatar:** Use green initial avatar "AP"

### Testimonial 4
- **Name:** Sneha Gupta
- **Location:** Palasia, Indore
- **Service:** Deep Cleaning
- **Rating:** ⭐⭐⭐⭐½ (4.8 / 5.0)
- **Review:** "The deep cleaning service was thorough. AC is now cooling better and air quality has improved. Professional team!"
- **Posted:** 5 days ago
- **Avatar:** Use purple initial avatar "SG"

### Testimonial 5
- **Name:** Vikram Singh
- **Location:** Kolar Road, Bhopal
- **Service:** Emergency Service
- **Rating:** ⭐⭐⭐⭐⭐ (5.0 / 5.0)
- **Review:** "Called them for emergency service at night. They arrived within 30 minutes and fixed the issue. Excellent 24/7 support!"
- **Posted:** 1 day ago
- **Avatar:** Use orange initial avatar "VS"

---

## Testimonial Card Design

```html
<div class="testimonial-card">
  <!-- Quote icon top left -->
  <i class="fa-solid fa-quote-left quote-icon"></i>

  <!-- Star Rating -->
  <div class="stars">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
  </div>

  <!-- Review Text -->
  <p class="review-text">"Excellent service! The technician was professional..."</p>

  <!-- Customer Info -->
  <div class="customer-info">
    <div class="customer-avatar">RS</div>
    <div>
      <p class="customer-name">Rajesh Sharma</p>
      <p class="customer-meta">MP Nagar, Bhopal — AC Installation</p>
      <p class="customer-date">1 week ago</p>
    </div>
  </div>
</div>
```

```css
.testimonial-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 30px;
  position: relative;
  transition: all 0.3s ease;
}
.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}
.quote-icon { color: #dbeafe; font-size: 28px; opacity: 0.4; transition: opacity 0.3s; }
.testimonial-card:hover .quote-icon { opacity: 0.8; }

.stars { color: #f59e0b; margin: 12px 0; }
.review-text { color: #555; font-style: italic; line-height: 1.6; margin-bottom: 20px; }
.customer-name { font-weight: 700; color: #333; }
.customer-meta { color: #999; font-size: 13px; }
.customer-date { color: #bbb; font-size: 12px; }
.customer-avatar {
  width: 50px; height: 50px; border-radius: 50%;
  background: #1a73e8; color: white;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 16px;
  flex-shrink: 0;
}
.customer-info { display: flex; gap: 12px; align-items: center; }
```

---

## Swiper.js Carousel Setup (from Animation Spec PDF — Section 4.1)

```html
<div class="swiper testimonials-swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><div class="testimonial-card">...</div></div>
    <!-- repeat for all 5 -->
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-pagination"></div>
</div>
```

```js
const swiper = new Swiper('.testimonials-swiper', {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,        // infinite loop
  autoplay: {
    delay: 5000,     // 5 seconds per slide
    disableOnInteraction: false,
  },
  speed: 600,        // transition duration 0.6s
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0:   { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
  // Mobile swipe
  touchRatio: 1,
  threshold: 50,     // min 50px swipe distance
});
```

---

## Rating Count-Up Animation (from Animation Spec PDF — Section 2.5)

```js
// Trigger when testimonials section is 25% visible
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    // Count up "4.7" rating display
    let start = 0;
    const end = 4.7;
    const duration = 1500;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start = Math.min(start + step, end);
      document.getElementById('rating-number').textContent = start.toFixed(1);
      if (start >= end) clearInterval(timer);
    }, 16);
    observer.disconnect();
  }
}, { threshold: 0.25 });

observer.observe(document.querySelector('#testimonials'));
```

```js
// Stars animate sequentially: 0.3s per star, 0.1s stagger
const stars = document.querySelectorAll('.rating-stars .fa-star');
stars.forEach((star, i) => {
  setTimeout(() => {
    star.style.opacity = '1';
    star.style.transform = 'scale(1)';
  }, i * 100);
});
```

---

## Active Dot Style (from Animation Spec PDF — Section 4.2)

```css
.swiper-pagination-bullet {
  background: #ccc;
  transition: all 0.3s ease;
}
.swiper-pagination-bullet-active {
  background: #1a73e8;
  transform: scale(1.2);
}
```

---

*Source: PDF 1 (Sections 8.1–8.5) + PDF 2 (Sections 2.5, 4.1, 4.2)*
