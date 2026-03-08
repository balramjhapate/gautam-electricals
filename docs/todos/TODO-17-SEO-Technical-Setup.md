# TODO 17 — SEO & Technical Setup
> **Priority:** Phase 4, Week 4
> **Section:** Meta tags, schema markup, sitemap, analytics, performance

---

## Goal
Implement all SEO requirements, Google Analytics, structured data, and performance optimizations.

---

## Meta Tags (in each page's `<head>`)

```jsx
// In Next.js: pages/_app.js or via next/head in each page
import Head from 'next/head';

<Head>
  <title>AC Service Bhopal & Indore | 24/7 AC Repair & Maintenance</title>
  <meta name="description" content="Professional AC servicing, repair, installation and maintenance in Bhopal and Indore, Madhya Pradesh. 24/7 emergency service available. Call +91 8889539174 now!" />
  <meta name="keywords" content="AC service Bhopal, AC repair Bhopal, AC service Indore, AC repair Indore, AC maintenance Madhya Pradesh, AC installation Bhopal, 24/7 AC service" />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://[your-domain].com/" />

  {/* Open Graph */}
  <meta property="og:title" content="AC Service Bhopal & Indore | 24/7 AC Repair" />
  <meta property="og:description" content="Professional AC services in Bhopal & Indore. Call +91 8889539174." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://[your-domain].com/" />
</Head>
```

---

## LocalBusiness Schema Markup (add to `<head>` or `_document.js`)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AC Service Bhopal & Indore",
  "description": "Professional AC servicing, repair, and installation in Bhopal and Indore",
  "telephone": "+91-8889539174",
  "email": "bhopalservice998@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bhopal",
    "addressRegion": "Madhya Pradesh",
    "addressCountry": "IN"
  },
  "areaServed": ["Bhopal", "Indore"],
  "openingHours": ["Mo-Fr 09:00-19:00", "Sa 09:00-17:00", "Su 10:00-16:00"],
  "priceRange": "₹299 - ₹2999",
  "serviceType": "AC Repair, AC Service, AC Installation",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AC Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Maintenance" }, "price": "499", "priceCurrency": "INR" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Repair" }, "price": "799", "priceCurrency": "INR" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Installation" }, "price": "2999", "priceCurrency": "INR" }
    ]
  }
}
</script>
```

---

## Sitemap (sitemap.xml in /public)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://[your-domain].com/</loc>
    <lastmod>2026-03-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## Robots.txt (in /public)

```txt
User-agent: *
Allow: /
Sitemap: https://[your-domain].com/sitemap.xml
```

---

## H1 Tag Rule
- **Only ONE H1 per page** — must be the hero heading:
  `"Professional AC Servicing in Bhopal & Indore, Madhya Pradesh"`
- All other headings must be H2, H3, H4

---

## Alt Text for Images

All images must have descriptive alt text:
```html
<img src="/images/technician.jpg" alt="AC technician servicing air conditioner in Bhopal" />
<img src="/images/ac-repair.jpg" alt="Professional AC repair service in Indore" />
```

---

## Google Analytics 4 Setup

```html
<!-- In _document.js head -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Event Tracking for Key Interactions:
```js
// Track phone button clicks
document.querySelectorAll('a[href^="tel:"]').forEach(el => {
  el.addEventListener('click', () => {
    gtag('event', 'phone_click', { event_category: 'CTA', event_label: 'Phone Call' });
  });
});

// Track WhatsApp clicks
document.querySelectorAll('a[href*="wa.me"]').forEach(el => {
  el.addEventListener('click', () => {
    gtag('event', 'whatsapp_click', { event_category: 'CTA', event_label: 'WhatsApp' });
  });
});

// Track "Book Now" button clicks
document.querySelectorAll('.btn-book-now').forEach(el => {
  el.addEventListener('click', () => {
    gtag('event', 'book_service', { event_category: 'CTA', event_label: 'Book Service' });
  });
});
```

---

## Performance Optimizations

```js
// next.config.js
module.exports = {
  images: {
    formats: ['image/webp'],  // Auto-convert to WebP
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },
  compress: true,
};
```

```html
<!-- Lazy loading for all images below fold -->
<img src="..." alt="..." loading="lazy" />

<!-- Font loading optimization -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

---

## Target Metrics
- Google PageSpeed Score: **> 90** (both mobile and desktop)
- Page load time: **< 3 seconds**
- First Contentful Paint: **< 1.5s**
- Largest Contentful Paint: **< 2.5s**

---

*Source: PDF 1 (Sections 16.2, 16.3, 16.6)*
