"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import SVGIcon from './SVGIcon';

const allServices = [
    {
        appliance: 'AC', title: 'AC Deep Cleaning (Jet Pump)',
        icon: 'spray', iconBg: 'bg-blue-100', iconColor: 'text-blue-600',
        headerBg: 'bg-gradient-to-br from-blue-50 to-indigo-50',
        category: 'Cleaning', categoryBg: 'bg-blue-100 text-blue-700',
        price: '₹699',
        description: 'Complete jet-pump cleaning of indoor/outdoor unit, coils, filters and drain pipe',
        includes: ['Filter cleaning & disinfection', 'Coil inspection & maintenance'],
        badge: { text: 'Popular', type: 'popular' },
        waText: 'AC+Deep+Cleaning',
    },
    {
        appliance: 'AC', title: '24/7 Emergency AC Repair',
        icon: 'bolt', iconBg: 'bg-orange-100', iconColor: 'text-orange-500',
        headerBg: 'bg-gradient-to-br from-orange-50 to-orange-100/60',
        category: 'Emergency', categoryBg: 'bg-orange-100 text-orange-700',
        price: '₹999',
        description: 'Round-the-clock emergency repair with rapid response across Bhopal & Prayagraj',
        includes: ['Same-day response guarantee', 'All brands covered'],
        badge: { text: '24/7', type: 'available' },
        isEmergency: true, waText: 'AC+Emergency+Repair',
    },
    {
        appliance: 'AC', title: 'AC Gas Refilling',
        icon: 'gaspump', iconBg: 'bg-purple-100', iconColor: 'text-purple-600',
        headerBg: 'bg-gradient-to-br from-purple-50 to-violet-50',
        category: 'Gas', categoryBg: 'bg-purple-100 text-purple-700',
        price: '₹999',
        description: 'R22 / R32 / R410A gas refilling with leak check and pressure testing',
        includes: ['Leak detection included', 'All gas types: R22, R32, R410A'],
        badge: { text: 'Popular', type: 'popular' },
        waText: 'AC+Gas+Refilling',
    },
    {
        appliance: 'Washing Machine', title: 'Washing Machine Repair',
        icon: 'rotate', iconBg: 'bg-teal-100', iconColor: 'text-teal-600',
        headerBg: 'bg-gradient-to-br from-teal-50 to-cyan-50',
        category: 'Repair', categoryBg: 'bg-teal-100 text-teal-700',
        price: '₹299',
        description: 'Full diagnosis and repair for all washing machine issues — drum, motor, PCB & more',
        includes: ['All brands: LG, Samsung, Whirlpool', 'Front-load & top-load'],
        badge: { text: 'Popular', type: 'popular' },
        waText: 'Washing+Machine+Repair',
    },
    {
        appliance: 'Washing Machine', title: 'Drum Cleaning Service',
        icon: 'soap', iconBg: 'bg-sky-100', iconColor: 'text-sky-600',
        headerBg: 'bg-gradient-to-br from-sky-50 to-blue-50',
        category: 'Cleaning', categoryBg: 'bg-sky-100 text-sky-700',
        price: '₹499',
        description: 'Deep drum cleaning, descaling, and deodorizing for hygienic washing',
        includes: ['Drum descaling & sanitizing', 'Pump filter cleaning'],
        waText: 'Washing+Machine+Drum+Cleaning',
    },
    {
        appliance: 'Refrigerator', title: 'Refrigerator Repair',
        icon: 'snowflake', iconBg: 'bg-sky-100', iconColor: 'text-sky-600',
        headerBg: 'bg-gradient-to-br from-sky-50 to-cyan-50',
        category: 'Repair', categoryBg: 'bg-sky-100 text-sky-700',
        price: '₹399',
        description: 'Expert refrigerator repair for all issues — cooling, compressor, thermostat and more',
        includes: ['All brands: Samsung, LG, Whirlpool', 'Single & double door'],
        waText: 'Refrigerator+Repair',
    },
    {
        appliance: 'Geyser', title: 'Geyser / Water Heater Repair',
        icon: 'flame', iconBg: 'bg-red-100', iconColor: 'text-red-500',
        headerBg: 'bg-gradient-to-br from-red-50 to-orange-50',
        category: 'Repair', categoryBg: 'bg-red-100 text-red-700',
        price: '₹249',
        description: 'Geyser not heating? Leaking? We fix all issues fast — electric & solar geysers',
        includes: ['Heating element replacement', 'Thermostat & safety valve fix'],
        waText: 'Geyser+Repair',
    },
    {
        appliance: 'RO', title: 'RO Water Purifier Service',
        icon: 'droplet', iconBg: 'bg-cyan-100', iconColor: 'text-cyan-600',
        headerBg: 'bg-gradient-to-br from-cyan-50 to-blue-50',
        category: 'Service', categoryBg: 'bg-cyan-100 text-cyan-700',
        price: '₹350',
        description: 'Complete RO service — filter replacement, membrane, UV lamp and flow check',
        includes: ['All brands: Kent, Aquaguard, Livpure', 'Filter & membrane replacement'],
        waText: 'RO+Water+Purifier+Service',
    },
    {
        appliance: 'Microwave', title: 'Microwave Oven Repair',
        icon: 'bolt', iconBg: 'bg-orange-100', iconColor: 'text-orange-500',
        headerBg: 'bg-gradient-to-br from-orange-50 to-amber-50',
        category: 'Repair', categoryBg: 'bg-orange-100 text-orange-700',
        price: '₹350',
        description: 'Microwave not heating, sparking or door broken? Expert repair for all brands',
        includes: ['Magnetron & PCB repair', 'All types: Solo, Grill, Convection'],
        waText: 'Microwave+Oven+Repair',
    },
];

const applianceFilters = ['All', 'AC', 'Washing Machine', 'Refrigerator', 'Geyser', 'RO', 'Microwave'];

export default function FeaturedServices() {
    const [active, setActive] = useState('All');
    const filtered = active === 'All' ? allServices : allServices.filter(s => s.appliance === active);

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-container mx-auto px-4">

                <div className="text-center mb-10" data-aos="fade-up">
                    <h2 className="text-3xl md:text-[40px] font-[900] text-ac-gray-dark mb-3 tracking-tight">
                        Our <span className="text-ac-primary">Services</span>
                    </h2>
                    <p className="text-ac-text-muted text-[15px] max-w-2xl mx-auto">
                        Professional appliance services with transparent pricing and certified technicians across Bhopal &amp; Prayagraj.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-2 mb-8 snap-scroll-x" data-aos="fade-up" data-aos-delay="100">
                    {applianceFilters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActive(f)}
                            className={`snap-item flex-shrink-0 px-4 py-2 rounded-full text-[13px] font-bold transition-all border ${active === f
                                ? 'bg-ac-primary text-white border-ac-primary shadow-md'
                                : 'bg-white text-ac-text-muted border-gray-200 hover:border-ac-primary hover:text-ac-primary'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filtered.map((service, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 60}
                            onClick={() => window.open(`https://wa.me/919770816132?text=Hi%2C+I+need+${service.waText}!`, '_blank')}
                            className="group relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-[0_12px_32px_rgba(27,59,143,0.13)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
                        >
                            {/* + button */}
                            <button
                                onClick={(e) => e.stopPropagation()}
                                className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-ac-primary hover:border-ac-primary transition-colors z-20 shadow-sm"
                            >
                                <SVGIcon name="plus" size={12} />
                            </button>

                            {/* Card header */}
                            <div className={`${service.headerBg} px-5 pt-5 pb-4 border-b border-gray-100`}>
                                <div className="flex items-start gap-3">
                                    <div className={`${service.iconBg} ${service.iconColor} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
                                        <SVGIcon name={service.icon} size={22} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        {service.badge && (
                                            <span className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-full mb-1.5 ${service.badge.type === 'available' ? 'bg-ge-accent text-white' : 'bg-ac-primary text-white'}`}>
                                                {service.badge.text}
                                            </span>
                                        )}
                                        <h3 className="font-bold text-ac-gray-dark text-[15px] leading-snug">{service.title}</h3>
                                        <span className={`inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full mt-1.5 ${service.categoryBg}`}>
                                            {service.category}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="px-5 pt-4 pb-5 flex flex-col flex-grow">
                                <p className="text-ac-text-muted text-[13px] leading-relaxed mb-4">{service.description}</p>
                                <div className="mb-4">
                                    <span className="text-[26px] font-extrabold text-ac-gray-dark">{service.price}</span>
                                    <span className="text-ac-text-muted text-sm ml-1">starting from</span>
                                </div>
                                <div className="mb-4 flex-grow">
                                    <p className="font-semibold text-ac-gray-dark text-[12px] mb-2">What's Included:</p>
                                    <ul className="space-y-1.5">
                                        {service.includes.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-[12.5px] text-ac-gray-dark/80">
                                                <SVGIcon name="checkcircle" size={16} className="text-green-500 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex items-center gap-2 mt-auto">
                                    {service.isEmergency ? (
                                        <a
                                            href="tel:+919770816132"
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex-1 py-2.5 rounded-xl font-semibold text-center text-[13px] transition-all shadow flex items-center justify-center gap-1.5 bg-red-600 text-white hover:bg-red-700"
                                        >
                                            <SVGIcon name="phone" size={14} /> Call Now
                                        </a>
                                    ) : (
                                        <Link
                                            href="/booking"
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex-1 py-2.5 rounded-xl font-semibold text-center text-[13px] transition-all shadow flex items-center justify-center gap-1.5 bg-ac-primary text-white hover:bg-ac-primary-dark"
                                        >
                                            <SVGIcon name="calendar" size={14} /> Book Now
                                        </Link>
                                    )}
                                    <a
                                        href={`https://wa.me/919770816132?text=Hi%2C+I+need+${service.waText}!`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="px-3 py-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-bold text-[13px] hover:bg-[#25D366] hover:text-white transition-all flex items-center gap-1"
                                    >
                                        <SVGIcon name="whatsapp" size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
