"use client";
import React from 'react';
import Link from 'next/link';

const services = [
    {
        title: '24/7 Emergency Repair',
        icon: 'fa-solid fa-bolt',
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-500',
        headerBg: 'bg-gradient-to-br from-orange-50 to-orange-100/60',
        category: 'Emergency',
        categoryBg: 'bg-orange-100 text-orange-700',
        price: '₹999',
        description: 'Round-the-clock emergency AC repair service with rapid response team',
        includes: [
            '24/7 emergency response',
            'Same day service guarantee',
        ],
        rating: '4.8 (1,200+ bookings)',
        badge: { text: '24/7 Available', type: 'available' },
        extraTag: 'Same-day service',
        isEmergency: true,
    },
    {
        title: 'AC Deep Cleaning (Jet Pump)',
        icon: 'fa-solid fa-spray-can-sparkles',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        headerBg: 'bg-gradient-to-br from-blue-50 to-indigo-50',
        category: 'Cleaning',
        categoryBg: 'bg-blue-100 text-blue-700',
        price: '₹699',
        description: 'Thorough cleaning of AC unit including filters, coils, and internal components',
        includes: [
            'Complete filter cleaning & replacement',
            'Coil inspection & maintenance',
        ],
        rating: '4.8 (1,200+ bookings)',
        badge: { text: 'Popular', type: 'popular' },
    },
    {
        title: 'AC Diagnostic Service',
        icon: 'fa-solid fa-stethoscope',
        iconBg: 'bg-red-100',
        iconColor: 'text-red-500',
        headerBg: 'bg-gradient-to-br from-red-50 to-pink-50',
        category: 'Repair',
        categoryBg: 'bg-red-100 text-red-700',
        price: '₹199',
        description: 'Complete diagnostic check to identify AC problems with detailed report',
        includes: [
            'Complete system diagnosis',
            'Detailed problem report',
        ],
        rating: '4.8 (1,200+ bookings)',
        badge: { text: 'Popular', type: 'popular' },
    },
    {
        title: 'Annual Maintenance Contract (AMC)',
        icon: 'fa-regular fa-star',
        iconBg: 'bg-purple-100',
        iconColor: 'text-purple-600',
        headerBg: 'bg-gradient-to-br from-purple-50 to-violet-50',
        category: 'Maintenance',
        categoryBg: 'bg-purple-100 text-purple-700',
        price: '₹4,999',
        description: 'Complete yearly AC maintenance package with 4 scheduled services and priority support',
        includes: [
            '4 scheduled servicing visits',
            'Priority support hotline',
        ],
        rating: '4.8 (1,200+ bookings)',
    },
    {
        title: 'Basic AC Maintenance',
        icon: 'fa-solid fa-screwdriver-wrench',
        iconBg: 'bg-sky-100',
        iconColor: 'text-sky-600',
        headerBg: 'bg-gradient-to-br from-sky-50 to-cyan-50',
        category: 'Maintenance',
        categoryBg: 'bg-sky-100 text-sky-700',
        price: '₹499',
        description: 'Complete AC checkup with filter cleaning, coil inspection, and performance optimization',
        includes: [
            'Filter cleaning & replacement',
            'Performance optimization',
        ],
        rating: '4.8 (1,200+ bookings)',
    },
    {
        title: 'Central AC Installation',
        icon: 'fa-solid fa-users-gear',
        iconBg: 'bg-emerald-100',
        iconColor: 'text-emerald-600',
        headerBg: 'bg-gradient-to-br from-emerald-50 to-teal-50',
        category: 'Installation',
        categoryBg: 'bg-emerald-100 text-emerald-700',
        price: '₹0',
        priceNote: 'Rate after site visit',
        description: 'Complete central AC system installation with ductwork, electrical setup, and commissioning',
        includes: [
            'Site assessment & planning',
            'Full electrical & duct setup',
        ],
        rating: '4.8 (1,200+ bookings)',
    },
];

export default function FeaturedServices() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-container mx-auto px-4">
                <div className="text-center mb-14" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-ac-gray-dark mb-4 tracking-tight">
                        Our Featured Services
                    </h2>
                    <p className="text-ac-text-muted text-[16px] max-w-2xl mx-auto">
                        Professional AC services across Bhopal &amp; Indore with transparent pricing and expert technicians.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                            onClick={() => window.open(`https://wa.me/918889539174?text=Hi,%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service!`, '_blank')}
                            className="group relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-[0_12px_32px_rgba(26,115,232,0.13)] hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
                        >
                            {/* Top-right + icon */}
                            <button
                                onClick={(e) => e.stopPropagation()}
                                className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-ac-primary hover:border-ac-primary transition-colors z-20 shadow-sm"
                            >
                                <i className="fa-solid fa-plus text-xs"></i>
                            </button>

                            {/* Header area */}
                            <div className={`${service.headerBg} px-5 pt-5 pb-4 border-b border-gray-100`}>
                                <div className="flex items-start gap-3">
                                    {/* Icon box */}
                                    <div className={`${service.iconBg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
                                        <i className={`${service.icon} ${service.iconColor} text-lg`}></i>
                                    </div>

                                    {/* Title + badge */}
                                    <div className="flex-1 min-w-0">
                                        {service.badge && (
                                            <span className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-full mb-1.5 ${service.badge.type === 'available' ? 'bg-orange-500 text-white' : 'bg-ac-red text-white'}`}>
                                                {service.badge.text}
                                            </span>
                                        )}
                                        <h3 className="font-bold text-ac-gray-dark text-[16px] leading-snug">{service.title}</h3>
                                        <span className={`inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full mt-1.5 ${service.categoryBg}`}>
                                            {service.category}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="px-5 pt-4 pb-5 flex flex-col flex-grow">
                                <p className="text-ac-text-muted text-[13.5px] leading-relaxed mb-4">{service.description}</p>

                                {/* Price */}
                                <div className="mb-4">
                                    <span className="text-[26px] font-extrabold text-ac-gray-dark">
                                        {service.price}
                                    </span>
                                    <span className="text-ac-text-muted text-sm ml-1">
                                        {service.priceNote ? service.priceNote : 'starting from'}
                                    </span>
                                </div>

                                {/* What's Included */}
                                <div className="mb-4 flex-grow">
                                    <p className="font-semibold text-ac-gray-dark text-[13px] mb-2">What's Included:</p>
                                    <ul className="space-y-1.5">
                                        {service.includes.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-[13px] text-ac-gray-dark/80">
                                                <i className="fa-solid fa-circle-check text-ac-green text-sm flex-shrink-0"></i>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/services"
                                        onClick={(e) => e.stopPropagation()}
                                        className="text-ac-primary text-[12.5px] font-semibold mt-2 inline-flex items-center gap-1 hover:underline"
                                    >
                                        <i className="fa-solid fa-eye text-[11px]"></i> View all inclusions
                                    </Link>
                                </div>

                                {/* Buttons + Rating */}
                                <div className="flex items-center gap-2 mt-auto flex-wrap">
                                    {service.isEmergency ? (
                                        <a
                                            href="tel:+918889539174"
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex-1 py-2.5 rounded-xl font-semibold text-center text-[13.5px] transition-all duration-300 shadow flex items-center justify-center gap-1.5 bg-ac-red text-white hover:bg-red-700"
                                        >
                                            <i className="fa-solid fa-phone-volume"></i> Book Now
                                        </a>
                                    ) : (
                                        <Link
                                            href="/booking"
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex-1 py-2.5 rounded-xl font-semibold text-center text-[13.5px] transition-all duration-300 shadow flex items-center justify-center gap-1.5 bg-ac-primary text-white hover:bg-ac-primary-dark"
                                        >
                                            <i className="fa-regular fa-calendar-check"></i> Book Now
                                        </Link>
                                    )}
                                    <Link
                                        href="/services"
                                        onClick={(e) => e.stopPropagation()}
                                        className="px-4 py-2.5 rounded-xl border border-gray-200 text-ac-gray-dark font-semibold text-[13.5px] hover:border-ac-primary hover:text-ac-primary transition-all duration-300"
                                    >
                                        Details
                                    </Link>

                                    <div className="w-full flex items-center gap-1 mt-1.5 flex-wrap">
                                        <i className="fa-solid fa-star text-yellow-400 text-xs"></i>
                                        <span className="text-[11.5px] text-ac-text-muted font-medium">{service.rating}</span>
                                        {service.extraTag && (
                                            <span className="ml-auto text-[11px] font-bold text-orange-600 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-full">
                                                {service.extraTag}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
