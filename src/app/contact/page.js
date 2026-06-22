import React from 'react';
import ContactHero from '../../components/contact/ContactHero';
import ContactMethods from '../../components/contact/ContactMethods';
import ContactEmergency from '../../components/contact/ContactEmergency';
import LocationInfo from '../../components/contact/LocationInfo';
import ServiceAreasGrid from '../../components/contact/ServiceAreasGrid';
import ResponseTimes from '../../components/contact/ResponseTimes';
import ContactBottomCTA from '../../components/contact/ContactBottomCTA';

export const metadata = {
    title: 'Contact Us - Gautam Electricals & Prayagraj',
    description: 'Get in touch for professional AC services. We are here to help with all your air conditioning needs across Bhopal and Prayagraj.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <ContactHero />
            <ContactMethods />
            <ContactEmergency />
            <LocationInfo />
            <ServiceAreasGrid />
            <ResponseTimes />
            <ContactBottomCTA />
        </main>
    );
}
