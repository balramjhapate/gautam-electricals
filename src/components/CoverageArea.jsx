"use client";
import React from 'react';

const bhopalLocations = [
    { name: 'Teelajamalpura', pin: '462001', eta: '5 mins', status: 'available' },
    { name: 'Arera Colony', pin: '462016', eta: '15 mins', status: 'available' },
    { name: 'MP Nagar', pin: '462011', eta: '20 mins', status: 'available' },
    { name: 'New Market', pin: '462001', eta: '25 mins', status: 'available' },
    { name: 'Kolar Road', pin: '462042', eta: '30 mins', status: 'available' },
    { name: 'Hoshangabad Road', pin: '462026', eta: '20 mins', status: 'available' },
    { name: 'Ayodhya Bypass', pin: '462041', eta: '35 mins', status: 'next-slot' },
    { name: 'Jahangirabad', pin: '462008', eta: '15 mins', status: 'available' },
    { name: 'Ashoka Garden', pin: '462023', eta: '25 mins', status: 'available' },
    { name: 'Berasia Road', pin: '462038', eta: '35 mins', status: 'next-slot' },
    { name: 'Govindpura', pin: '462023', eta: '20 mins', status: 'available' },
    { name: 'Bawadia Kalan', pin: '462039', eta: '40 mins', status: 'busy' },
];

const prayagrajLocations = [
    { name: 'Civil Lines', pin: '211001', eta: '20 mins', status: 'available' },
    { name: 'George Town', pin: '211002', eta: '25 mins', status: 'available' },
    { name: 'Allahpur', pin: '211003', eta: '15 mins', status: 'available' },
    { name: 'Naini', pin: '211008', eta: '35 mins', status: 'next-slot' },
    { name: 'Phaphamau', pin: '211013', eta: '30 mins', status: 'available' },
    { name: 'Mumfordganj', pin: '211002', eta: '20 mins', status: 'available' },
    { name: 'Lukerganj', pin: '211001', eta: '15 mins', status: 'available' },
    { name: 'Colonelganj', pin: '211002', eta: '25 mins', status: 'next-slot' },
    { name: 'Daraganj', pin: '211006', eta: '30 mins', status: 'available' },
    { name: 'Jhunsi', pin: '211019', eta: '40 mins', status: 'busy' },
    { name: 'Kidwai Nagar', pin: '211003', eta: '25 mins', status: 'available' },
    { name: 'Tagore Town', pin: '211002', eta: '20 mins', status: 'available' },
];

const allLocations = [...bhopalLocations, ...prayagrajLocations];

const StatusBadge = ({ status }) => {
    if (status === 'available') return (
        <span className="status-badge bg-emerald-100 text-emerald-800 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Available
        </span>
    );
    if (status === 'next-slot') return (
        <span className="status-badge bg-amber-100 text-amber-800 border border-amber-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Next Slot
        </span>
    );
    return (
        <span className="status-badge bg-red-100 text-red-800 border border-red-200">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Busy
        </span>
    );
};

export default function CoverageArea() {
    return (
        <section id="coverage" className="py-20 bg-[#f8f9fa] overflow-hidden border-t border-ac-border/50">
            <div className="max-w-container mx-auto px-4 mb-10 text-center" data-aos="fade-up">
                <span className="inline-flex items-center gap-2 bg-ac-primary/10 text-ac-primary text-[12px] font-bold px-4 py-1.5 rounded-full mb-3">
                    <i className="fa-solid fa-location-dot text-xs"></i>
                    Coverage Areas
                </span>
                <h2 className="text-2xl md:text-[32px] font-[900] text-ac-gray-dark mb-3 tracking-tight">
                    Serving <span className="text-ac-primary">Bhopal</span> &amp;{' '}
                    <span className="text-ge-accent">Prayagraj</span>
                </h2>
                <p className="text-ac-text-muted text-[14px] max-w-xl mx-auto">
                    Primary base in <strong>Bhopal</strong> — also covering all major areas of Prayagraj. Tap any location to book.
                </p>

                {/* City pills */}
                <div className="flex items-center justify-center gap-3 mt-4">
                    <span className="inline-flex items-center gap-2 bg-ac-primary text-white text-[12px] font-bold px-4 py-1.5 rounded-full">
                        <i className="fa-solid fa-star text-[10px]"></i> Bhopal — Primary Base
                    </span>
                    <span className="inline-flex items-center gap-2 bg-ge-accent text-white text-[12px] font-bold px-4 py-1.5 rounded-full">
                        <i className="fa-solid fa-location-dot text-[10px]"></i> Prayagraj
                    </span>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none"></div>

                <div className="flex gap-4 px-4 py-4 pb-6 w-max animate-[marqueeScroll_90s_linear_infinite] hover:[animation-play-state:paused]">
                    {[...allLocations, ...allLocations, ...allLocations].map((loc, idx) => {
                        const isBhopal = bhopalLocations.some(b => b.name === loc.name);
                        return (
                            <a
                                key={idx}
                                href={`https://wa.me/919770816132?text=Hi%2C+I+need+appliance+repair+in+${encodeURIComponent(loc.name)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex-shrink-0 w-[220px] bg-white rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-ac-border/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(27,59,143,0.12)] hover:border-ac-primary block"
                            >
                                <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 rounded-full bg-ac-primary/10 flex items-center justify-center group-hover:bg-ac-primary transition-colors duration-300">
                                            {/* Google Maps pin SVG */}
                                            <svg viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg" className="text-ac-primary group-hover:text-white transition-colors duration-300">
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                                            </svg>
                                        </div>
                                        <h3 className="font-bold text-ac-gray-dark text-[14px]">{loc.name}</h3>
                                    </div>
                                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${isBhopal ? 'bg-ac-primary/10 text-ac-primary' : 'bg-orange-100 text-orange-600'}`}>
                                        {isBhopal ? 'Bhopal' : 'Prayagraj'}
                                    </span>
                                </div>

                                <div className="space-y-1.5 mb-3">
                                    <p className="text-[12px] text-ac-text-muted flex justify-between">
                                        <span className="font-medium">Pincode</span>
                                        <span>{loc.pin}</span>
                                    </p>
                                    <p className="text-[12px] text-ac-text-muted flex justify-between items-center">
                                        <span className="font-medium flex items-center gap-1">
                                            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ac-primary"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                            ETA
                                        </span>
                                        <span className="font-bold text-ac-gray-dark">{loc.eta}</span>
                                    </p>
                                </div>

                                <div className="pt-2 border-t border-gray-100 flex justify-center">
                                    <StatusBadge status={loc.status} />
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>

            <div className="text-center mt-10 px-4" data-aos="fade-up">
                <p className="text-ac-text-muted text-sm mb-5">Don't see your area? Call us — we come to you!</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                        href="https://wa.me/919770816132?text=Hi%2C+I+need+appliance+repair+at+my+location"
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-ac-primary text-white px-6 py-3 rounded-xl text-[14px] font-bold shadow-md hover:bg-ac-primary-dark hover:-translate-y-0.5 transition-all active:scale-95"
                    >
                        <i className="fa-brands fa-whatsapp text-lg"></i> WhatsApp: 9770816132
                    </a>
                    <a
                        href="tel:+919644494715"
                        className="inline-flex items-center justify-center gap-2 bg-white border-2 border-ac-primary text-ac-primary px-6 py-3 rounded-xl text-[14px] font-bold hover:bg-ac-primary/5 hover:-translate-y-0.5 transition-all active:scale-95"
                    >
                        <i className="fa-solid fa-phone"></i> Call: 9644494715
                    </a>
                </div>
            </div>
        </section>
    );
}
