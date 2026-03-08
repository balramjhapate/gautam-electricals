"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" className="relative w-full bg-white overflow-hidden flex items-center py-16 lg:py-0 bg-grid-pattern" style={{ minHeight: 'calc(100vh - 64px)' }}>

            {/* Background Decorators */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-ac-primary/5 hidden lg:block rounded-bl-full z-0 transform translate-x-1/4 -translate-y-1/4"></div>

            <div className="max-w-container mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10">

                {/* MOBILE HERO IMAGE (Top) */}
                <div
                    className="w-full mb-6 lg:hidden flex items-center justify-center"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <div className="relative w-full max-w-md aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                        <img
                            src="/images/hero-family.png"
                            alt="Professional AC Servicing Bhopal & Indore"
                            className="w-full h-full object-cover object-center"
                            loading="lazy"
                        />
                        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow border border-gray-100 flex items-center gap-1.5 z-10">
                            <div className="w-1.5 h-1.5 bg-ac-green rounded-full animate-pulse"></div>
                            <span className="font-bold text-ac-gray-dark text-[10px] uppercase tracking-wide">24/7 Available</span>
                        </div>
                    </div>
                </div>

                {/* LEFT COLUMN - TEXT CONTENT (48%) */}
                <div className="w-full lg:w-[48%] flex flex-col items-center lg:items-start text-center lg:text-left">

                    {/* Main Heading */}
                    <h1
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="text-[32px] sm:text-[38px] lg:text-[68px] font-[800] text-ac-gray-dark leading-[1.05] mb-5 tracking-tight"
                    >
                        Professional <span className="text-ac-primary">AC Servicing</span> in Bhopal & Indore
                    </h1>

                    {/* Subheading */}
                    <p
                        data-aos="fade-up"
                        data-aos-delay="500"
                        className="text-[17px] text-ac-text-muted mb-6 max-w-[560px] leading-relaxed"
                    >
                        Expert air conditioning maintenance, repair, and installation services across
                        <strong> Bhopal</strong> and <strong>Indore</strong>. Serving <strong>Arera Colony</strong>,
                        <strong> MP Nagar</strong>, <strong>Vijay Nagar</strong>, and major areas with
                        certified technicians and 24/7 emergency support.
                    </p>

                    {/* Trust Badges — single row, matching reference */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="700"
                        className="flex items-center justify-center lg:justify-start gap-x-6 mb-7 w-full flex-wrap"
                    >
                        <div className="flex items-center gap-1.5 text-ac-gray-dark font-medium text-[15px]">
                            <i className="fa-solid fa-check text-ac-green text-xs"></i>
                            <span>10+ Years Experience</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-ac-gray-dark font-medium text-[15px]">
                            <i className="fa-solid fa-check text-ac-green text-xs"></i>
                            <span>Certified Technicians</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-ac-gray-dark font-medium text-[15px]">
                            <i className="fa-solid fa-check text-ac-green text-xs"></i>
                            <span>5000+ Happy Customers</span>
                        </div>
                    </div>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-stretch gap-3 sm:gap-4 mb-5 w-full max-w-sm mx-auto lg:mx-0">
                        <Link
                            href="/booking"
                            data-aos="zoom-in"
                            data-aos-delay="900"
                            className="btn-primary bg-ac-primary text-white px-7 py-3 rounded-lg text-[16px] font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-ac-primary-dark hover:-translate-y-0.5 hover:shadow-md active:scale-95 w-full"
                        >
                            <i className="fa-regular fa-calendar-check text-sm"></i> Schedule Service
                        </Link>

                        <a
                            href="tel:+918889539174"
                            data-aos="zoom-in"
                            data-aos-delay="1000"
                            className="bg-white text-ac-primary border border-ac-primary/40 px-7 py-3 rounded-lg text-[16px] font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:border-ac-primary hover:bg-ac-primary/5 hover:-translate-y-0.5 active:scale-95 w-full"
                        >
                            <i className="fa-solid fa-phone text-sm"></i> Call: +91 8889539174
                        </a>
                    </div>

                    {/* Reference Style Emergency Text */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="1100"
                        className="text-ac-text-muted text-[14px] font-medium"
                    >
                        Emergency Service Available 24/7: <a href="tel:+918889539174" className="text-ac-red font-bold hover:underline tracking-wide">+91 8889539174</a>
                    </div>

                </div>

                {/* RIGHT COLUMN - IMAGE (52%) */}
                <div
                    data-aos="fade-left"
                    data-aos-delay="600"
                    className="w-full lg:w-[52%] hidden lg:flex items-center justify-center relative group"
                >
                    <a
                        href="https://wa.me/918889539174?text=Hi,%20I'm%20interested%20in%20your%20AC%20services!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-gray-100 block hover:-translate-y-1 transition-all duration-300"
                    >
                        <img
                            src="/images/hero-family.png"
                            alt="Professional AC Servicing Bhopal"
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                            loading="lazy"
                        />

                        {/* Floating Badge (Top-Right like Patna) */}
                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full shadow border border-gray-100 flex items-center gap-1.5 z-10">
                            <div className="w-1.5 h-1.5 bg-ac-green rounded-full animate-pulse"></div>
                            <span className="font-bold text-ac-gray-dark text-[11px] uppercase tracking-wide">24/7 Available</span>
                        </div>
                    </a>
                </div>

            </div>
        </section>
    );
}
