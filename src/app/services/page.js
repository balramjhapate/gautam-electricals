import React from 'react';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceList from '../../components/services/ServiceList';
import BrandsWeService from '../../components/services/BrandsWeService';
import EmergencyCTA from '../../components/EmergencyCTA';

export const metadata = {
    title: 'Our AC Services - Bhopal & Indore | Expert Repair & Maintenance',
    description: 'Explore our comprehensive range of AC services in Bhopal and Indore. Specializing in Window split ACs, AMC contracts, repair, and deep cleaning.',
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
