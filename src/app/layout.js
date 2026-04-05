import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import EmergencyBanner from "../components/EmergencyBanner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOSInit from "../components/AOSInit";
import FloatingActions from "../components/FloatingActions";
import Analytics from "../components/Analytics";

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
    canonical: "https://bhopal-ac-service.com/", // Placeholder domain
  },
  openGraph: {
    title: "Best AC Repair in Bhopal & Indore | 24/7 AC Repair",
    description: "Professional AC repair & services in Bhopal & Indore. Call +91 8889539174.",
    type: "website",
    url: "https://bhopal-ac-service.com/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AC Service Bhopal & Indore",
  description: "Professional AC repair, servicing, and installation in Bhopal and Indore",
  telephone: "+91-8889539174",
  email: "bhopalservice998@gmail.com",
  address: {
    "@type": "PostalAddress",
    "streetAddress": "Nariyal Kheda, Near DIG Bungalow, Old Bhopal",
    "addressLocality": "Bhopal",
    "addressRegion": "Madhya Pradesh",
    "addressCountry": "IN",
  },
  areaServed: ["Bhopal", "Indore"],
  openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-17:00", "Su 10:00-16:00"],
  priceRange: "₹299 - ₹2999",
  serviceType: "AC Repair, AC Service, AC Installation",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AC Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", "name": "AC Maintenance" },
        price: "499",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", "name": "AC Repair" },
        price: "799",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", "name": "AC Installation" },
        price: "2999",
        priceCurrency: "INR",
      },
    ],
  },
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
      </head>
      <body className={`${inter.variable} antialiased flex flex-col min-h-screen`}>
        <AOSInit />
        <Analytics />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18065485961"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18065485961');
          `}
        </Script>
        <EmergencyBanner />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
