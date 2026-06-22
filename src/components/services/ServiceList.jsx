"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Using the same data model as FeaturedServices for consistency, populated with Patna equivalents
const featuredServicesData = [
    {
        title: 'AC Gas Refilling / Top-up',
        icon: 'fa-solid fa-cloud',
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
        headerBg: 'bg-gradient-to-br from-teal-50 to-teal-100/60',
        category: 'Gas Refill',
        categoryBg: 'bg-teal-100 text-teal-700',
        price: '₹999',
        priceNote: 'starting from',
        description: 'Complete gas refilling process including leak testing and performance check for optimal cooling.',
        includes: [
            'Leak detection testing',
            'Full gas recharge / top-up',
            'Cooling efficiency check'
        ],
        rating: '4.8 (850+ bookings)',
        badge: { text: 'Popular', type: 'popular' },
        extraTag: 'Guaranteed cooling',
    },
    {
        title: 'Jet Pump Full Service',
        icon: 'fa-solid fa-water',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        headerBg: 'bg-gradient-to-br from-blue-50 to-blue-100/60',
        category: 'Cleaning',
        categoryBg: 'bg-blue-100 text-blue-700',
        price: '₹699',
        priceNote: 'starting from',
        description: 'Deep pressure washing of indoor and outdoor units for maximum airflow and cooling efficiency.',
        includes: [
            'Indoor unit jet cleaning',
            'Outdoor unit pressure wash',
            'Drainage pipe clearing'
        ],
        rating: '4.9 (1,200+ bookings)',
        badge: { text: 'Best Value', type: 'value' },
        extraTag: 'Removes 99% dust',
    }
];

const allServicesData = [
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
        type: ['Split AC', 'Window AC', 'Cassette AC', 'Tower AC', 'Central AC']
    },
    {
        title: 'AC Deep Cleaning (Jet)',
        icon: 'fa-solid fa-spray-can-sparkles',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        headerBg: 'bg-gradient-to-br from-blue-50 to-indigo-50',
        category: 'Cleaning',
        categoryBg: 'bg-blue-100 text-blue-700',
        price: '₹699',
        description: 'Thorough cleaning of AC unit including filters, coils, and internal components',
        includes: [
            'Complete filter cleaning',
            'Coil inspection & wash',
        ],
        rating: '4.8 (1,200+ bookings)',
        badge: { text: 'Popular', type: 'popular' },
        type: ['Split AC', 'Window AC', 'Cassette AC']
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
        badge: { text: 'Base Fee', type: 'popular' },
        type: ['Split AC', 'Window AC', 'Cassette AC', 'Tower AC', 'Central AC']
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
        type: ['Split AC', 'Window AC', 'Cassette AC', 'Tower AC']
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
        type: ['Split AC', 'Window AC']
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
        type: ['Central AC']
    },
    {
        title: 'Split AC Installation',
        icon: 'fa-solid fa-tools',
        iconBg: 'bg-indigo-100',
        iconColor: 'text-indigo-600',
        headerBg: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
        category: 'Installation',
        categoryBg: 'bg-indigo-100 text-indigo-700',
        price: '₹1,500',
        priceNote: 'starting from',
        description: 'Professional installation of Split AC indoor and outdoor units with copper piping',
        includes: [
            'Wall bracket mounting',
            'Copper pipe connection',
        ],
        rating: '4.7 (950+ bookings)',
        type: ['Split AC']
    },
    {
        title: 'Window AC Service',
        icon: 'fa-regular fa-snowflake',
        iconBg: 'bg-cyan-100',
        iconColor: 'text-cyan-600',
        headerBg: 'bg-gradient-to-br from-cyan-50 to-cyan-100',
        category: 'Service',
        categoryBg: 'bg-cyan-100 text-cyan-700',
        price: '₹449',
        priceNote: 'starting from',
        description: 'Routine maintenance and cleaning for Window AC units to ensure proper cooling',
        includes: [
            'Front panel cleaning',
            'Filter washing',
        ],
        rating: '4.6 (600+ bookings)',
        type: ['Window AC']
    },
    {
        title: 'Cassette AC Repair',
        icon: 'fa-solid fa-fan',
        iconBg: 'bg-stone-100',
        iconColor: 'text-stone-600',
        headerBg: 'bg-gradient-to-br from-stone-50 to-stone-100',
        category: 'Repair',
        categoryBg: 'bg-stone-100 text-stone-700',
        price: '₹1,299',
        priceNote: 'starting from',
        description: 'Expert repair services for commercial cassette ceiling air conditioners',
        includes: [
            'Drain pump checking',
            'Sensor calibration',
        ],
        rating: '4.9 (400+ bookings)',
        type: ['Cassette AC']
    }
];

const FILTERS = ['All Services', 'Window AC', 'Split AC', 'Cassette AC', 'Tower AC', 'Central AC'];

// Helper render function for Service Cards (reused across Featured and Grid)
const ServiceCard = ({ service, index }) => {
    const handleCardClick = () => {
        const message = `Hi, I'm interested in your ${service.title} service!`;
        const url = `https://wa.me/919770816132?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div
            key={index}
            onClick={handleCardClick}
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
                        {service.priceNote ? service.priceNote : ''}
                    </span>
                </div>

                {/* What's Included */}
                <div className="mb-4 flex-grow">
                    <p className="font-semibold text-ac-gray-dark text-[13px] mb-2">What's Included:</p>
                    <ul className="space-y-1.5">
                        {service.includes.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-[13px] text-ac-gray-dark/80">
                                <i className="fa-solid fa-circle-check text-ac-green text-sm flex-shrink-0 mt-0.5"></i>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#contact"
                        onClick={(e) => e.stopPropagation()}
                        className="text-ac-primary text-[12.5px] font-semibold mt-2 inline-flex items-center gap-1 hover:underline"
                    >
                        <i className="fa-solid fa-eye text-[11px]"></i> View all inclusions
                    </a>
                </div>

                {/* Buttons + Rating */}
                <div className="flex flex-col gap-3 mt-auto">
                    <Link
                        href="/booking"
                        onClick={(e) => e.stopPropagation()}
                        className={`w-full py-2.5 rounded-xl font-semibold text-center text-[13.5px] transition-all duration-300 shadow flex items-center justify-center gap-1.5 ${service.isEmergency ? 'bg-ac-red text-white hover:bg-red-700' : 'bg-[#18a749] text-white hover:bg-green-700'}`}
                    >
                        <i className={service.isEmergency ? 'fa-solid fa-phone-volume' : 'fa-brands fa-whatsapp'}></i>
                        Book Now
                    </Link>

                    <div className="w-full flex items-center gap-1 flex-wrap">
                        <i className="fa-solid fa-star text-yellow-400 text-xs"></i>
                        <span className="text-[11.5px] text-ac-text-muted font-medium">{service.rating}</span>
                        {service.extraTag && (
                            <span className="ml-auto text-[11px] font-bold text-orange-600 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">
                                {service.extraTag}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function ServiceList() {
    const [activeFilter, setActiveFilter] = useState('All Services');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredServices = allServicesData.filter(service => {
        const matchesType = activeFilter === 'All Services' || service.type.includes(activeFilter);
        const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesType && matchesSearch;
    });

    return (
        <section className="py-12 bg-[#f8fbff]">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* 1. Header Area */}
                <div className="text-center mb-8 flex flex-col justify-center border-b border-gray-200 pb-6 gap-6">
                    <div>
                        <h2 className="text-[28px] font-bold text-gray-900 mb-2">Our AC Services</h2>
                        <p className="text-gray-500 text-[15px]">Select from our range of AC services across Bhopal and Prayagraj</p>
                    </div>
                </div>

                {/* 2. Featured Services (Top 2 Wide Cards) */}
                <div className="mb-14">
                    <h3 className="text-[20px] font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <i className="fa-solid fa-star text-yellow-500"></i> Featured Services
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {featuredServicesData.map((service, index) => (
                            <ServiceCard service={service} index={`feat-${index}`} key={`feat-${index}`} />
                        ))}
                    </div>
                </div>

                {/* 3. Filters & Search */}
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-8 flex flex-col lg:flex-row gap-4 lg:items-center justify-between sticky top-[64px] z-40">
                    <div className="relative flex-1 max-w-md">
                        <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <input
                            type="text"
                            placeholder="Search services..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-ac-primary focus:ring-1 focus:ring-ac-primary/20 transition-all"
                        />
                    </div>

                    {/* Horizontal scrollable filters for mobile, flex wrap for desktop */}
                    <div className="flex overflow-x-auto pb-2 lg:pb-0 hide-scrollbar gap-2 flex-nowrap lg:flex-wrap w-full lg:w-auto">
                        {FILTERS.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`whitespace-nowrap px-4 py-2 rounded-lg text-[13.5px] font-medium transition-all ${activeFilter === filter
                                    ? 'bg-ac-primary text-white shadow-sm'
                                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 4. Main Service Grid */}
                <div>
                    <h3 className="text-[20px] font-bold text-gray-800 mb-6 flex items-center justify-between">
                        <span>All Services {activeFilter !== 'All Services' && <span className="text-gray-400 font-normal text-[16px]">({activeFilter})</span>}</span>
                        <span className="text-[13px] font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{filteredServices.length} Results</span>
                    </h3>

                    {filteredServices.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredServices.map((service, index) => (
                                <ServiceCard service={service} index={`grid-${index}`} key={`grid-${index}`} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white border border-gray-200 rounded-2xl">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 text-xl">
                                <i className="fa-solid fa-search"></i>
                            </div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">No services found</h4>
                            <p className="text-gray-500 text-[14px]">Try adjusting your search query or filter category.</p>
                            <button
                                onClick={() => { setSearchQuery(''); setActiveFilter('All Services'); }}
                                className="mt-4 px-6 py-2 bg-ac-primary/10 text-ac-primary font-medium rounded-lg hover:bg-ac-primary/20 transition-all"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}
