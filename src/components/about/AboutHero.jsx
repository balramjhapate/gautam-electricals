import React from 'react';
import Link from 'next/link';

export default function AboutHero() {
    return (
        <section className="bg-gradient-to-r from-[#177ff8] to-[#01c667] py-24">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                {/* Breadcrumb */}
                <div className="flex items-center justify-center gap-2 text-white/80 text-[13px] font-medium mb-8" data-aos="fade-down">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-white">About Us</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-[36px] md:text-[46px] font-bold text-white mb-6 tracking-tight leading-tight" data-aos="fade-up" data-aos-delay="100">
                    About AC Service Bhopal
                </h1>

                {/* Subtitle */}
                <p className="text-white/90 text-[16px] md:text-[18px] font-medium max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                    Your trusted partner for professional AC services in Bhopal. Over a decade of experience in keeping homes and businesses comfortable.
                </p>
            </div>
        </section>
    );
}
