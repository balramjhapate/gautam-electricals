"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PHONE1 = '+919770816132';
const WA1 = '919770816132';
const WA2 = '919644494715';

const appliances = [
    { img: '/images/service-ac.png', label: 'A/C' },
    { img: '/images/service-washing.png', label: 'Washing Machine' },
    { img: '/images/service-fridge.png', label: 'Fridge' },
    { img: '/images/service-microwave.png', label: 'Microwave' },
    { img: '/images/service-geyser.png', label: 'Geyser' },
    { img: '/images/service-ro.png', label: 'RO Purifier' },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative w-full overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0a1744 0%, #1B3B8F 50%, #1e60b5 100%)' }}
        >
            {/* Decorative blobs — desktop only to save mobile paint */}
            <div className="hidden lg:block absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 bg-white blur-[120px] pointer-events-none"></div>
            <div className="hidden lg:block absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-10 bg-[#f97316] blur-[100px] pointer-events-none"></div>

            {/* Grid overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{ backgroundImage: 'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)', backgroundSize: '36px 36px' }}
            ></div>

            {/* ══════════════════════════════════════
                MOBILE LAYOUT  (hidden on lg+)
            ══════════════════════════════════════ */}
            <div className="lg:hidden relative z-10">

                {/* Hero image — full width at top */}
                <div className="relative w-full h-[220px] xs:h-[260px]">
                    <Image
                        src="/images/hero-main.png"
                        alt="Gautam Electricals technician"
                        fill
                        className="object-cover object-top"
                        sizes="100vw"
                        priority
                    />
                    {/* Gradient fade into blue bg */}
                    <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(to bottom, rgba(10,23,68,0.15) 0%, rgba(10,23,68,0.0) 50%, rgba(10,23,68,0.85) 100%)' }}
                    ></div>
                    {/* Proprietor tag on image */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-1.5">
                        <div className="w-0.5 h-5 bg-[#f97316] rounded-full"></div>
                        <span className="text-white/80 text-[11px] font-semibold tracking-wide uppercase">Avnish Gautam — Proprietor</span>
                    </div>
                </div>

                {/* Content below image */}
                <div className="px-4 pt-5 pb-8">

                    {/* Brand name */}
                    <h1 className="font-[900] leading-[0.92] tracking-tight mb-3">
                        <span className="block text-[40px]" style={{ color: '#ef4444', textShadow: '0 2px 16px rgba(239,68,68,0.3)' }}>
                            GAUTAM
                        </span>
                        <span className="block text-[40px] text-white">ELECTRICALS</span>
                    </h1>

                    {/* Services — compact */}
                    <p className="text-white/70 text-[13px] font-medium mb-3 leading-relaxed">
                        AC · Washing Machine · Fridge · Microwave · Geyser · RO Repair
                    </p>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-white/60 text-[12px] mb-5">
                        <i className="fa-solid fa-location-dot text-[#f97316] text-xs"></i>
                        <span>Bhopal &amp; Prayagraj</span>
                    </div>

                    {/* 2 Primary buttons */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <a
                            href={`tel:${PHONE1}`}
                            className="flex items-center justify-center gap-2 bg-white text-ac-primary font-extrabold py-3.5 rounded-xl shadow-lg active:scale-95 text-[14px]"
                        >
                            <i className="fa-solid fa-phone text-[#f97316] text-sm"></i>
                            Call Now
                        </a>
                        <a
                            href={`https://wa.me/${WA1}?text=Hi%2C+I+need+appliance+repair+service!`}
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 rounded-xl shadow active:scale-95 text-[14px]"
                        >
                            <i className="fa-brands fa-whatsapp text-lg"></i> WhatsApp
                        </a>
                    </div>

                    {/* Book CTA */}
                    <Link
                        href="/booking"
                        className="w-full flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-extrabold py-3.5 rounded-xl shadow-lg active:scale-95 text-[14px] mb-5"
                    >
                        <i className="fa-regular fa-calendar-check"></i> Book Service Now
                    </Link>

                    {/* Trust chips */}
                    <div className="flex flex-wrap gap-2">
                        {['10+ Yrs', 'Certified', '5000+ Customers', '24/7'].map((t) => (
                            <div key={t} className="flex items-center gap-1 text-white/55 text-[11px] font-medium">
                                <i className="fa-solid fa-check text-[#f97316] text-[9px]"></i>
                                {t}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════
                DESKTOP LAYOUT  (hidden on mobile)
            ══════════════════════════════════════ */}
            <div className="hidden lg:block relative z-10">
                <div className="max-w-container mx-auto px-4 pt-16 pb-14">

                    {/* Owner badge */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-1 h-7 bg-[#f97316] rounded-full flex-shrink-0"></div>
                        <span className="text-white/70 text-[13px] font-semibold tracking-wide uppercase">
                            Avnish Gautam — Proprietor
                        </span>
                        <span className="ml-auto text-white/40 text-[11px]">GSTIN: 230MVPG9714D1ZV</span>
                    </div>

                    <div className="flex items-center justify-between gap-6">

                        {/* Left */}
                        <div className="w-[48%]">
                            <h1 className="font-[900] leading-[0.95] tracking-tight mb-1">
                                <span className="block text-[70px]" style={{ color: '#ef4444', textShadow: '0 2px 20px rgba(239,68,68,0.3)' }}>
                                    GAUTAM
                                </span>
                                <span className="block text-[70px] text-white">ELECTRICALS</span>
                            </h1>

                            <p className="text-white/75 text-[15px] font-medium mt-4 mb-5 leading-relaxed">
                                A/C · Washing Machine · Microwave · Fridge · Water Purifier (RO) · Geyser Repair &amp; Fitting
                            </p>

                            <div className="flex items-center gap-2 text-white/70 text-[13px] mb-6">
                                <i className="fa-solid fa-location-dot text-[#f97316]"></i>
                                <span>Near Gopal Mandir Teelajamalpura, <strong className="text-white">Bhopal</strong></span>
                                <span className="mx-2 text-white/30">|</span>
                                <span>Also serving <strong className="text-white">Prayagraj</strong></span>
                            </div>

                            {/* Call — both numbers on desktop */}
                            <div className="grid grid-cols-2 gap-3 mb-3">
                                <a href={`tel:${PHONE1}`}
                                    className="flex items-center justify-center gap-2 bg-white text-ac-primary font-extrabold py-3.5 px-4 rounded-xl shadow-lg hover:bg-gray-50 hover:-translate-y-0.5 transition-all text-[14px]">
                                    <i className="fa-solid fa-phone text-[#f97316] text-sm"></i> 9770816132
                                </a>
                                <a href="tel:+919644494715"
                                    className="flex items-center justify-center gap-2 bg-white text-ac-primary font-extrabold py-3.5 px-4 rounded-xl shadow-lg hover:bg-gray-50 hover:-translate-y-0.5 transition-all text-[14px]">
                                    <i className="fa-solid fa-phone text-[#f97316] text-sm"></i> 9644494715
                                </a>
                            </div>

                            {/* WhatsApp — both on desktop */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <a href={`https://wa.me/${WA1}?text=Hi%2C+I+need+appliance+repair+service!`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-4 rounded-xl shadow hover:-translate-y-0.5 transition-all text-[13.5px]">
                                    <i className="fa-brands fa-whatsapp text-lg"></i> WhatsApp 1
                                </a>
                                <a href={`https://wa.me/${WA2}?text=Hi%2C+I+need+appliance+repair+service!`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-4 rounded-xl shadow hover:-translate-y-0.5 transition-all text-[13.5px]">
                                    <i className="fa-brands fa-whatsapp text-lg"></i> WhatsApp 2
                                </a>
                            </div>

                            <Link href="/booking"
                                className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-extrabold py-3.5 px-8 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all text-[15px]">
                                <i className="fa-regular fa-calendar-check"></i> Book Service Now
                            </Link>

                            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-7 pt-6 border-t border-white/10">
                                {['10+ Years', 'Certified Techs', '5000+ Customers', '24/7 Emergency'].map((t) => (
                                    <div key={t} className="flex items-center gap-1.5 text-white/65 text-[12px] font-medium">
                                        <i className="fa-solid fa-check text-[#f97316] text-[10px]"></i> {t}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — appliance grid */}
                        <div className="w-[50%] grid grid-cols-3 gap-3 self-start -mt-8 translate-x-10">
                            {appliances.map((a, i) => (
                                <div
                                    key={i}
                                    className="relative bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl overflow-hidden aspect-[4/5] group hover:border-white/40 hover:bg-white/15 transition-all duration-300 cursor-pointer"
                                    onClick={() => window.open(`https://wa.me/${WA1}?text=Hi%2C+I+need+${encodeURIComponent(a.label)}+repair!`, '_blank')}
                                >
                                    <Image
                                        src={a.img}
                                        alt={a.label}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="200px"
                                        priority={i < 3}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-2 px-2">
                                        <p className="text-white text-[10px] font-bold text-center leading-tight">{a.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
