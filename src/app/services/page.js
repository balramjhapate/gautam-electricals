import React from 'react';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceList from '../../components/services/ServiceList';
import BrandsWeService from '../../components/services/BrandsWeService';
import EmergencyCTA from '../../components/EmergencyCTA';

export const metadata = {
    title: 'Gautam Electricals — AC, Washing Machine, Fridge, Microwave, Geyser, RO Repair Bhopal',
    description: 'Washing machine repair, fridge repair, microwave oven repair, OTG oven repair, chimney repair, air conditioner repair, RO repair, geyser repair in Bhopal & Prayagraj. Certified technicians, same day service. Call 9770816132.',
    keywords: 'washing machine repair Bhopal, fridge repair Bhopal, microwave oven repair Bhopal, OTG oven repair Bhopal, chimney repair Bhopal, air conditioner repair Bhopal, RO repair Bhopal, geyser repair Bhopal, washing machine repair Prayagraj, fridge repair Prayagraj, AC repair Bhopal, refrigerator repair Bhopal, Gautam Electricals',
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
