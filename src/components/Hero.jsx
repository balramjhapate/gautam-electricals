"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PHONE1 = '+919770816132';
const PHONE2 = '+919644494715';
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
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 bg-white blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-10 bg-[#f97316] blur-[100px] pointer-events-none"></div>

            {/* Faint grid overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{ backgroundImage: 'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)', backgroundSize: '36px 36px' }}
            ></div>

            <div className="max-w-container mx-auto px-4 pt-12 pb-10 lg:pt-16 lg:pb-14 relative z-10">

                {/* Owner badge */}
                <div className="flex items-center gap-2 mb-6" data-aos="fade-down">
                    <div className="w-1 h-7 bg-[#f97316] rounded-full flex-shrink-0"></div>
                    <span className="text-white/70 text-[13px] font-semibold tracking-wide uppercase">
                        Avnish Gautam — Proprietor
                    </span>
                    <span className="ml-auto text-white/40 text-[11px] hidden sm:block">GSTIN: 230MVPG9714D1ZV</span>
                </div>

                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

                    {/* ── LEFT COLUMN ── */}
                    <div className="w-full lg:w-[54%]">

                        {/* Brand Name */}
                        <div data-aos="fade-up" data-aos-delay="100">
                            <h1 className="font-[900] leading-[0.95] tracking-tight mb-1">
                                <span
                                    className="block text-[46px] sm:text-[58px] lg:text-[70px]"
                                    style={{ color: '#ef4444', textShadow: '0 2px 20px rgba(239,68,68,0.3)' }}
                                >
                                    GAUTAM
                                </span>
                                <span className="block text-[46px] sm:text-[58px] lg:text-[70px] text-white">
                                    ELECTRICALS
                                </span>
                            </h1>
                        </div>

                        {/* Services line */}
                        <p
                            className="text-white/75 text-[14px] sm:text-[15px] font-medium mt-4 mb-5 leading-relaxed"
                            data-aos="fade-up" data-aos-delay="150"
                        >
                            A/C · Washing Machine · Microwave · Fridge · Water Purifier (RO) · Geyser Repair &amp; Fitting
                        </p>

                        {/* Location */}
                        <div
                            className="flex items-center gap-2 text-white/70 text-[13px] mb-6"
                            data-aos="fade-up" data-aos-delay="180"
                        >
                            <i className="fa-solid fa-location-dot text-[#f97316]"></i>
                            <span>Near Gopal Mandir Teelajamalpura, <strong className="text-white font-bold">Bhopal</strong></span>
                            <span className="mx-2 text-white/30">|</span>
                            <span>Also serving <strong className="text-white font-bold">Prayagraj</strong></span>
                        </div>

                        {/* Call buttons */}
                        <div
                            className="grid grid-cols-2 gap-3 mb-3"
                            data-aos="fade-up" data-aos-delay="220"
                        >
                            <a
                                href={`tel:${PHONE1}`}
                                className="flex items-center justify-center gap-2 bg-white text-ac-primary font-extrabold py-3.5 px-4 rounded-xl shadow-lg hover:bg-gray-50 hover:-translate-y-0.5 transition-all active:scale-95 text-[14px]"
                            >
                                <i className="fa-solid fa-phone text-[#f97316] text-sm"></i>
                                9770816132
                            </a>
                            <a
                                href={`tel:${PHONE2}`}
                                className="flex items-center justify-center gap-2 bg-white text-ac-primary font-extrabold py-3.5 px-4 rounded-xl shadow-lg hover:bg-gray-50 hover:-translate-y-0.5 transition-all active:scale-95 text-[14px]"
                            >
                                <i className="fa-solid fa-phone text-[#f97316] text-sm"></i>
                                9644494715
                            </a>
                        </div>

                        {/* WhatsApp buttons */}
                        <div
                            className="grid grid-cols-2 gap-3 mb-6"
                            data-aos="fade-up" data-aos-delay="260"
                        >
                            <a
                                href={`https://wa.me/${WA1}?text=Hi%2C+I+need+appliance+repair+service!`}
                                target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-4 rounded-xl shadow hover:-translate-y-0.5 transition-all active:scale-95 text-[13.5px]"
                            >
                                <i className="fa-brands fa-whatsapp text-lg"></i> WhatsApp 1
                            </a>
                            <a
                                href={`https://wa.me/${WA2}?text=Hi%2C+I+need+appliance+repair+service!`}
                                target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-4 rounded-xl shadow hover:-translate-y-0.5 transition-all active:scale-95 text-[13.5px]"
                            >
                                <i className="fa-brands fa-whatsapp text-lg"></i> WhatsApp 2
                            </a>
                        </div>

                        {/* Book button */}
                        <Link
                            href="/booking"
                            data-aos="fade-up" data-aos-delay="300"
                            className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-extrabold py-3.5 px-8 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all active:scale-95 text-[15px]"
                        >
                            <i className="fa-regular fa-calendar-check"></i> Book Service Now
                        </Link>

                        {/* Trust bar */}
                        <div
                            className="flex flex-wrap gap-x-5 gap-y-2 mt-7 pt-6 border-t border-white/10"
                            data-aos="fade-up" data-aos-delay="350"
                        >
                            {['10+ Years', 'Certified Techs', '5000+ Customers', '24/7 Emergency'].map((t) => (
                                <div key={t} className="flex items-center gap-1.5 text-white/65 text-[12px] font-medium">
                                    <i className="fa-solid fa-check text-[#f97316] text-[10px]"></i>
                                    {t}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT COLUMN — appliance grid (desktop) ── */}
                    <div
                        className="w-full lg:w-[42%] hidden lg:grid grid-cols-3 gap-3"
                        data-aos="fade-left" data-aos-delay="200"
                    >
                        {appliances.map((a, i) => (
                            <div
                                key={i}
                                className="relative bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl overflow-hidden aspect-square group hover:border-white/40 hover:bg-white/15 transition-all duration-300 cursor-pointer"
                                onClick={() => window.open(`https://wa.me/${WA1}?text=Hi%2C+I+need+${encodeURIComponent(a.label)}+repair!`, '_blank')}
                            >
                                <Image
                                    src={a.img}
                                    alt={a.label}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 1024px) 0px, 200px"
                                    priority={i < 3}
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-2 px-2">
                                    <p className="text-white text-[10px] font-bold text-center leading-tight">{a.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile appliance scroll */}
                <div
                    className="lg:hidden flex gap-3 overflow-x-auto pb-2 mt-6 snap-scroll-x"
                    data-aos="fade-up" data-aos-delay="300"
                >
                    {appliances.map((a, i) => (
                        <div
                            key={i}
                            className="relative flex-shrink-0 snap-item bg-white/10 border border-white/15 rounded-xl overflow-hidden w-20 h-20"
                            onClick={() => window.open(`https://wa.me/${WA1}?text=Hi%2C+I+need+${encodeURIComponent(a.label)}+repair!`, '_blank')}
                        >
                            <Image src={a.img} alt={a.label} fill className="object-cover" sizes="80px" priority={i === 0} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
