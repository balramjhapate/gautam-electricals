import React from 'react';
import AboutHero from '../../components/about/AboutHero';
import OurStory from '../../components/about/OurStory';
import OurValues from '../../components/about/OurValues';
import ExpertTeam from '../../components/about/ExpertTeam';
import AboutTestimonials from '../../components/about/AboutTestimonials';
import BottomCTA from '../../components/about/BottomCTA';

export const metadata = {
    title: 'About Us - AC Service Bhopal & Indore',
    description: 'Your trusted partner for professional AC services. Over a decade of experience in keeping homes and businesses comfortable.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <AboutHero />
            <OurStory />
            <OurValues />
            <ExpertTeam />
            <AboutTestimonials />
            <BottomCTA />
        </main>
    );
}
