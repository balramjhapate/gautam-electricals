import React from 'react';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceList from '../../components/services/ServiceList';
import BrandsWeService from '../../components/services/BrandsWeService';
import EmergencyCTA from '../../components/EmergencyCTA';

export const metadata = {
    title: 'Gautam Electricals — Repair, Gas Refill, Cleaning | ₹499 se',
    description: 'AC repair, gas refilling, jet wash cleaning, installation in Bhopal & Prayagraj. Certified technicians, same day service. Call 9770816132.',
    alternates: {
        canonical: "https://gautamelectricals.online/services",
    },
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#f8fbff]">
            {/* 1. Top Blue Hero specific to the Services page */}
            <ServiceHero />

            {/* 2. Main Service Offerings grid (Featured + Grid) */}
            <ServiceList />

            {/* 3. Brands section */}
            <BrandsWeService />

            {/* 4. Global Emergency CTA (reused from homepage) */}
            <EmergencyCTA />
        </main>
    );
}
