import React from 'react';
import Link from 'next/link';

export default function AboutHero() {
    return (
        <section className="bg-gradient-to-br from-ac-primary to-ac-primary-dark py-24">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                <div className="flex items-center justify-center gap-2 text-white/80 text-[13px] font-medium mb-8" data-aos="fade-down">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-white">About Us</span>
                </div>

                <h1 className="text-[36px] md:text-[46px] font-[900] text-white mb-6 tracking-tight leading-tight" data-aos="fade-up" data-aos-delay="100">
                    About <span className="text-ge-accent">Gautam Electricals</span>
                </h1>

                <p className="text-white/85 text-[16px] md:text-[18px] font-medium max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                    Your trusted partner for all home appliance repairs in Bhopal &amp; Prayagraj. Over a decade of expert service for AC, Washing Machine, Refrigerator, Geyser, RO and Microwave.
                </p>
            </div>
        </section>
    );
}
