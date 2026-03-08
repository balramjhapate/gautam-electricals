"use client";
import React from 'react';
import Link from 'next/link';

const bhopalLocations = [
    { name: 'Arera Colony', pin: '462016', eta: '15 mins', status: 'available' },
    { name: 'MP Nagar', pin: '462011', eta: '20 mins', status: 'available' },
    { name: 'New Market', pin: '462001', eta: '25 mins', status: 'next-slot' },
    { name: 'Kolar Road', pin: '462042', eta: '30 mins', status: 'available' },
    { name: 'Berasia Road', pin: '462038', eta: '35 mins', status: 'busy' },
    { name: 'Hoshangabad Road', pin: '462026', eta: '20 mins', status: 'available' },
    { name: 'Ayodhya Bypass', pin: '462041', eta: '40 mins', status: 'next-slot' },
    { name: 'Bawadia Kalan', pin: '462039', eta: '45 mins', status: 'busy' },
    { name: 'Jahangirabad', pin: '462008', eta: '15 mins', status: 'available' },
    { name: 'Ashoka Garden', pin: '462023', eta: '30 mins', status: 'available' }
];

const indoreLocations = [
    { name: 'Vijay Nagar', pin: '452010', eta: '15 mins', status: 'available' },
    { name: 'Rau', pin: '452012', eta: '25 mins', status: 'next-slot' },
    { name: 'Palasia', pin: '452001', eta: '20 mins', status: 'available' },
    { name: 'Rajendra Nagar', pin: '452012', eta: '30 mins', status: 'available' },
    { name: 'AB Road', pin: '452001', eta: '15 mins', status: 'available' },
    { name: 'Sapna Sangeeta', pin: '452001', eta: '20 mins', status: 'available' },
    { name: 'Bhanwarkuan', pin: '452001', eta: '25 mins', status: 'next-slot' },
    { name: 'Aerodrome Road', pin: '452005', eta: '35 mins', status: 'busy' },
    { name: 'LIG Colony', pin: '452008', eta: '40 mins', status: 'available' },
    { name: 'Bhawrasla', pin: '452013', eta: '30 mins', status: 'next-slot' }
];

const allLocations = [...bhopalLocations, ...indoreLocations];

// Status Badge Component
const StatusBadge = ({ status }) => {
    if (status === 'available') {
        return (
            <span className="status-badge bg-emerald-100 text-emerald-800 border border-emerald-200 shadow-[0_0_12px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-shadow">
                <span className="status-dot w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Available Now
            </span>
        );
    }
    if (status === 'next-slot') {
        return (
            <span className="status-badge bg-amber-100 text-amber-800 border border-amber-200">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span> Next Slot
            </span>
        );
    }
    return (
        <span className="status-badge bg-red-100 text-red-800 border border-red-200">
            <span className="w-2 h-2 rounded-full bg-red-500"></span> Busy
        </span>
    );
};

export default function CoverageArea() {
    return (
        <section id="coverage" className="py-20 bg-[#f8f9fa] overflow-hidden border-t border-ac-border/50">
            <div className="max-w-container mx-auto px-4 mb-10 text-center" data-aos="fade-up">
                <h2 className="text-2xl md:text-[32px] font-bold text-ac-gray-dark mb-3 tracking-tight">Service Coverage Across <span className="text-ac-primary">Bhopal & Indore</span></h2>
                <p className="text-ac-text-muted text-[15px] max-w-2xl mx-auto">
                    Professional AC services available in all major areas. Hover over any location to see real-time availability and estimated arrival times.
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                {/* Left/Right Fade Gradients for visual smoothness */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none"></div>

                <div className="flex gap-4 px-4 py-4 pb-8 w-max animate-[marqueeScroll_90s_linear_infinite] hover:[animation-play-state:paused]">
                    {/* Duplicate the list multiple times to ensure enough items for a seamless infinite scroll loop */}
                    {[...allLocations, ...allLocations, ...allLocations].map((loc, idx) => (
                        <a
                            key={idx}
                            href={`https://wa.me/918889539174?text=Hi,%20I%20need%20AC%20service%20in%20${encodeURIComponent(loc.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group location-card flex-shrink-0 w-[240px] bg-white rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-ac-border/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(26,115,232,0.12)] hover:border-ac-primary scroll-snap-align-start block"
                        >
                            <div className="flex items-center justify-between mb-3 border-b border-ac-border/40 pb-2.5">
                                <div className="flex items-center gap-2">
                                    <div className="w-7 h-7 rounded-full bg-ac-primary/10 flex items-center justify-center text-ac-primary group-hover:bg-ac-primary group-hover:text-white transition-colors duration-300 text-sm">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <h3 className="font-bold text-ac-gray-dark text-[15px]">{loc.name}</h3>
                                </div>
                            </div>

                            <div className="space-y-2 mb-3">
                                <p className="text-[13px] text-ac-text-muted flex justify-between">
                                    <span className="font-medium">Pincode:</span>
                                    <span>{loc.pin}</span>
                                </p>
                                <p className="text-[13px] text-ac-text-muted flex justify-between items-center">
                                    <span className="font-medium flex items-center gap-1.5"><i className="fa-regular fa-clock text-ac-primary"></i> ETA:</span>
                                    <span className="font-semibold text-ac-gray-dark">{loc.eta}</span>
                                </p>
                            </div>

                            <div className="pt-2 border-t border-ac-border/40 flex justify-center mt-auto">
                                <StatusBadge status={loc.status} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <div className="text-center mt-10 px-4" data-aos="fade-up" data-aos-offset="0">
                <p className="text-ac-text-muted text-sm mb-5">Don't see your area? We're expanding coverage daily.</p>
                <Link href="/services" className="bg-ac-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:bg-ac-primary transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 flex items-center gap-2 mx-auto w-fit">
                    <i className="fa-solid fa-map-location-dot"></i> View All Service Areas
                </Link>
            </div>
        </section>
    );
}
