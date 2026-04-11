"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import EmergencyBanner from "./EmergencyBanner";
import Header from "./Header";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";
import MobileCTA from "./MobileCTA";

export default function LayoutWrapper({ children }) {
    const pathname = usePathname();
    const isLandingPage = pathname === '/landing' || pathname === '/ac-service-bhopal';

    if (isLandingPage) {
        return <main className="flex-grow">{children}</main>;
    }

    return (
        <>
            <EmergencyBanner />
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <FloatingActions />
            <MobileCTA />
        </>
    );
}
