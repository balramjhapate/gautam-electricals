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
  title: "Best AC Repair in Bhopal | 24/7 Emergency AC Repair & Service",
  description:
    "Professional AC repair, servicing, installation and maintenance in Bhopal and Indore, Madhya Pradesh. 24/7 emergency repair available. Call +91 8889539174 now!",
  keywords:
    "Best AC repair Bhopal, AC repair Bhopal, AC service Bhopal, AC service Indore, AC repair Indore, AC maintenance Madhya Pradesh, AC installation Bhopal, 24/7 AC repair",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://ac-service-bhopal-indore.vercel.app/",
  },
  openGraph: {
    title: "Best AC Repair in Bhopal & Indore | 24/7 AC Repair",
    description: "Professional AC repair & services in Bhopal & Indore. Call +91 8889539174.",
    type: "website",
    url: "https://ac-service-bhopal-indore.vercel.app/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AC Repair Bhopal & Indore",
  "telephone": "+918889539174",
  "priceRange": "₹499 - ₹4999",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Nariyal Kheda, Near DIG Bungalow, Old Bhopal",
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
  "url": "https://ac-service-bhopal-indore.vercel.app",
  "openingHours": "Mo-Su 08:00-21:00",
  "description": "Professional AC repair, service, and installation in Bhopal and Indore. Same day service available from ₹499.",
  "areaServed": ["Bhopal", "Indore"],
  "serviceType": ["AC Repair", "AC Service", "AC Installation", "AC Gas Refill", "AC Cleaning"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
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
