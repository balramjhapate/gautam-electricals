"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const appliances = [
    {
        id: 'ac',
        title: 'Air Conditioner',
        subtitle: 'AC Repair & Service',
        icon: 'fa-wind',
        image: '/images/service-ac.png',
        color: 'from-blue-50 to-indigo-50',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        badge: 'Most Popular',
        badgeColor: 'bg-ac-primary text-white',
        startingPrice: '₹399',
        services: ['AC Repair', 'Deep Cleaning', 'Gas Refill', 'Installation', 'AMC'],
        waText: 'AC+Repair+%26+Service',
    },
    {
        id: 'washing',
        title: 'Washing Machine',
        subtitle: 'All Brands Covered',
        icon: 'fa-rotate',
        image: '/images/service-washing.png',
        color: 'from-teal-50 to-cyan-50',
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
        badge: null,
        startingPrice: '₹299',
        services: ['Drum Repair', 'Motor Fix', 'PCB Repair', 'Inlet Valve', 'Deep Clean'],
        waText: 'Washing+Machine+Repair',
    },
    {
        id: 'fridge',
        title: 'Refrigerator',
        subtitle: 'All Models',
        icon: 'fa-snowflake',
        image: '/images/service-fridge.png',
        color: 'from-sky-50 to-blue-50',
        iconBg: 'bg-sky-100',
        iconColor: 'text-sky-600',
        badge: null,
        startingPrice: '₹399',
        services: ['Cooling Fix', 'Gas Refill', 'Compressor', 'Thermostat', 'Door Seal'],
        waText: 'Refrigerator+Repair',
    },
    {
        id: 'geyser',
        title: 'Geyser',
        subtitle: 'Water Heater Repair',
        icon: 'fa-fire-flame-curved',
        image: '/images/service-geyser.png',
        color: 'from-red-50 to-orange-50',
        iconBg: 'bg-red-100',
        iconColor: 'text-red-500',
        badge: null,
        startingPrice: '₹249',
        services: ['Heating Element', 'Thermostat Fix', 'Leakage Repair', 'Installation', 'Safety Valve'],
        waText: 'Geyser+Repair',
    },
    {
        id: 'ro',
        title: 'RO Water Purifier',
        subtitle: 'All Brands',
        icon: 'fa-droplet',
        image: '/images/service-ro.png',
        color: 'from-cyan-50 to-teal-50',
        iconBg: 'bg-cyan-100',
        iconColor: 'text-cyan-600',
        badge: null,
        startingPrice: '₹199',
        services: ['Filter Change', 'Membrane Fix', 'Motor Repair', 'UV Lamp', 'Installation'],
        waText: 'RO+Water+Purifier+Service',
    },
    {
        id: 'microwave',
        title: 'Microwave Oven',
        subtitle: 'All Types',
        icon: 'fa-bolt',
        image: '/images/service-microwave.png',
        color: 'from-orange-50 to-amber-50',
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-500',
        badge: null,
        startingPrice: '₹199',
        services: ['No Heat Fix', 'Door Repair', 'Magnetron', 'PCB Repair', 'Turntable'],
        waText: 'Microwave+Oven+Repair',
    },
];

export default function ServiceCategories() {
    const scrollRef = useRef(null);

    const scroll = (dir) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
        }
    };

    return (
        <section id="appliances" className="py-16 bg-ac-gray-soft overflow-hidden">
            <div className="max-w-container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-10" data-aos="fade-up">
                    <span className="inline-flex items-center gap-2 bg-ac-primary/10 text-ac-primary text-[12px] font-bold px-4 py-1.5 rounded-full mb-3">
                        <i className="fa-solid fa-tools text-xs"></i>
                        All Appliances Covered
                    </span>
                    <h2 className="text-3xl md:text-[38px] font-[900] text-ac-gray-dark mb-3 tracking-tight">
                        What We <span className="text-ac-primary">Repair</span>
                    </h2>
                    <p className="text-ac-text-muted text-[15px] max-w-xl mx-auto">
                        One call fixes it all — expert service for every appliance in your home, across Bhopal &amp; Prayagraj.
                    </p>
                </div>

                {/* Scroll arrows desktop */}
                <div className="relative">
                    <button
                        onClick={() => scroll(-1)}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center text-ac-gray-dark hover:bg-ac-primary hover:text-white transition-all"
                        aria-label="Scroll left"
                    >
                        <i className="fa-solid fa-chevron-left text-sm"></i>
                    </button>
                    <button
                        onClick={() => scroll(1)}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center text-ac-gray-dark hover:bg-ac-primary hover:text-white transition-all"
                        aria-label="Scroll right"
                    >
                        <i className="fa-solid fa-chevron-right text-sm"></i>
                    </button>

                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-ac-gray-soft to-transparent z-10 pointer-events-none md:hidden"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-ac-gray-soft to-transparent z-10 pointer-events-none md:hidden"></div>

                    {/* Horizontal scroll container */}
                    <div
                        ref={scrollRef}
                        className="snap-scroll-x flex gap-4 pb-4 px-1 lg:grid lg:grid-cols-3 lg:overflow-visible"
                    >
                        {appliances.map((app, idx) => (
                            <div
                                key={app.id}
                                className="snap-item w-[78vw] sm:w-[55vw] md:w-[42vw] lg:w-auto flex-shrink-0 lg:flex-shrink bg-white rounded-2xl border border-gray-200 shadow-sm appliance-card overflow-hidden cursor-pointer group"
                                data-aos="fade-up"
                                data-aos-delay={idx * 60}
                                onClick={() => window.open(`https://wa.me/919770816132?text=Hi%2C+I+need+${app.waText}+in+Bhopal%2FIndore`, '_blank')}
                            >
                                {/* Image */}
                                <div className={`relative w-full aspect-[4/3] bg-gradient-to-br ${app.color} overflow-hidden`}>
                                    <Image
                                        src={app.image}
                                        alt={app.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 640px) 78vw, (max-width: 1024px) 42vw, 33vw"
                                        loading="lazy"
                                    />
                                    {app.badge && (
                                        <span className={`absolute top-3 left-3 text-[10px] font-[900] px-2.5 py-1 rounded-full uppercase tracking-wide shadow ${app.badgeColor}`}>
                                            {app.badge}
                                        </span>
                                    )}
                                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow border border-white/60">
                                        <span className="text-[11px] text-ac-text-muted font-medium">Starting</span>
                                        <p className="text-[18px] font-extrabold text-ac-primary leading-none">{app.startingPrice}</p>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="p-4">
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <div className={`w-9 h-9 rounded-lg ${app.iconBg} flex items-center justify-center flex-shrink-0`}>
                                            <i className={`fa-solid ${app.icon} ${app.iconColor} text-sm`}></i>
                                        </div>
                                        <div>
                                            <h3 className="font-extrabold text-ac-gray-dark text-[15px] leading-tight">{app.title}</h3>
                                            <p className="text-[11px] text-ac-text-muted">{app.subtitle}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {app.services.map((s, i) => (
                                            <span key={i} className="text-[10px] font-semibold bg-gray-50 border border-gray-100 text-ac-text-muted px-2 py-0.5 rounded-full">
                                                {s}
                                            </span>
                                        ))}
                                    </div>

                                    <button className="w-full flex items-center justify-center gap-2 bg-ac-primary text-white py-2.5 rounded-xl text-[13px] font-bold hover:bg-ac-primary-dark group-hover:-translate-y-0.5 transition-all active:scale-95 shadow-sm">
                                        <i className="fa-brands fa-whatsapp text-base"></i>
                                        Book on WhatsApp
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Swipe hint — mobile only */}
                <p className="text-center text-[12px] text-ac-text-muted mt-3 lg:hidden flex items-center justify-center gap-1.5">
                    <i className="fa-solid fa-hand-pointer text-ac-primary"></i>
                    Swipe to see all appliances
                </p>
            </div>
        </section>
    );
}
