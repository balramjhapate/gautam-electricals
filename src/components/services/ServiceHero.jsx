import React from 'react';
import Link from 'next/link';

export default function ServiceHero() {
    return (
        <section className="bg-gradient-to-r from-[#4433ff] to-[#3a84fe] py-20">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                {/* Breadcrumb */}
                <div className="flex items-center justify-center gap-2 text-white/80 text-[13px] font-medium mb-6" data-aos="fade-down">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-white">AC Services</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-[32px] md:text-[42px] font-bold text-white mb-4 tracking-tight leading-tight" data-aos="fade-up" data-aos-delay="100">
                    Professional AC Services in Bhopal & Prayagraj
                </h1>

                {/* Subtitle */}
                <p className="text-white/90 text-[15px] md:text-[17px] font-medium max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                    Comprehensive AC solutions including Gas Refilling, Advanced Repair, AMC Maintenance, General Service, and Professional Installation.
                </p>
            </div>
        </section>
    );
}
