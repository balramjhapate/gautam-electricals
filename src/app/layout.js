import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AOSInit from "../components/AOSInit";
import Analytics from "../components/Analytics";
import LayoutWrapper from "../components/LayoutWrapper";
import GlobalClickTracker from "../components/GlobalClickTracker";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gautam Electricals | AC, Washing Machine, Fridge, Geyser, RO Repair Bhopal & Prayagraj",
  description:
    "Expert home appliance repair in Bhopal & Prayagraj. AC, Washing Machine, Refrigerator, Microwave, Geyser, RO repair & service. 24/7 emergency available. Call +91 9770816132.",
  keywords:
    "Gautam Electricals, washing machine repair Bhopal, refrigerator repair Bhopal, geyser repair Bhopal, RO repair Bhopal, appliance repair Prayagraj, Gautam Electricals, home appliance service Bhopal",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://gautamelectricals.online/",
  },
  openGraph: {
    title: "Gautam Electricals | Home Appliance Repair Bhopal & Prayagraj",
    description: "Expert AC, Washing Machine, Fridge, Geyser & RO repair in Bhopal & Prayagraj. Call +91 9770816132.",
    type: "website",
    url: "https://gautamelectricals.online/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Gautam Electricals",
  "telephone": ["+919770816132"],
  "email": "gautamelectricals.online@gmail.com",
  "founder": "Avnish Gautam",
  "taxID": "230MVPG9714D1ZV",
  "priceRange": "₹350 - ₹4999",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Gopal Mandir Teelajamalpura",
    "addressLocality": "Bhopal",
    "addressRegion": "Madhya Pradesh",
    "postalCode": "462001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 23.2599,
    "longitude": 77.4126
  },
  "url": "https://gautamelectricals.online",
  "openingHours": "Mo-Su 08:00-21:00",
  "description": "Expert home appliance repair service in Bhopal & Prayagraj. AC, Washing Machine, Refrigerator, Microwave, Geyser, RO repair with certified technicians and 24/7 emergency support.",
  "areaServed": ["Bhopal", "Prayagraj"],
  "serviceType": [
    "AC Repair", "AC Service", "AC Installation", "AC Gas Refill",
    "Washing Machine Repair", "Refrigerator Repair", "Microwave Repair",
    "Geyser Repair", "RO Water Purifier Service"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to FA CDN for faster DNS */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        {/* Load Font Awesome async — non-render-blocking */}
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          media="print"
          onLoad="this.media='all'"
          crossOrigin="anonymous"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "wa2qlbh4a6");
            `
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased flex flex-col min-h-screen`}>
        <AOSInit />
        <Analytics />
        <GlobalClickTracker />

        {/* Google Analytics - G-470T5TSRES */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-470T5TSRES"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-470T5TSRES');
            
            // Allow sending gtag events successfully if they trigger before load
            window.gtag = gtag;
          `}
        </Script>

        {/* Keep AW script as well if exist? Original had AW-18065485961 */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18065485961"
        />
        <Script id="google-ads">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18065485961');
          `}
        </Script>

        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
