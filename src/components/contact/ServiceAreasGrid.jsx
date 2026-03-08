import React from 'react';
import Link from 'next/link';

const WHATSAPP_URL = 'https://wa.me/918889539174?text=Hi,%20I%20want%20to%20book%20AC%20service%20in%20my%20area.';

const areas = [
    { name: "MP Nagar", sub: "Zone-I & Zone-II", pincode: "462011" },
    { name: "Arera Colony", sub: "E-1 to E-8 sectors", pincode: "462016" },
    { name: "Indrapuri", sub: "BHEL, Raisen Road Area", pincode: "462021" },
    { name: "Kolar Road", sub: "Chuna Bhatti, Sarvadharam", pincode: "462042" },
    { name: "Ayodhya Nagar", sub: "Minal Residency, JK Road", pincode: "462041" },
    { name: "Gulmohar", sub: "Bawadiya Kalan, Shahpura", pincode: "462039" },
    { name: "Hoshangabad Road", sub: "Misrod, Bagsewaniya", pincode: "462026" },
    { name: "Saket Nagar", sub: "AIIMS Area, Shakti Nagar", pincode: "462024" },
    { name: "Jawahar Chowk", sub: "New Market, TT Nagar", pincode: "462003" },
    { name: "Lalghati", sub: "VIP Road, Koh-e-Fiza", pincode: "462001" },
];

export default function ServiceAreasGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">

                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-[30px] font-bold text-gray-900 mb-3">Service Areas in Bhopal</h2>
                    <p className="text-[16px] text-gray-500 font-medium tracking-wide">We provide professional AC services to all these neighborhoods</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {areas.map((area, idx) => (
                        <a
                            key={idx}
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos="fade-up"
                            data-aos-delay={idx * 50}
                            className="bg-white border border-gray-100 rounded-xl p-6 shadow-[0_2px_15px_rgba(0,0,0,0.01)] hover:border-ac-primary/30 transition-colors cursor-pointer block"
                        >
                            <h3 className="text-[15px] font-bold text-gray-900 mb-0.5">{area.name}</h3>
                            <div className="text-[11px] font-bold text-ac-primary mb-2 uppercase tracking-tight">Pincode: {area.pincode}</div>
                            <p className="text-[12px] text-gray-500 font-medium leading-tight">{area.sub}</p>
                        </a>
                    ))}
                </div>

                <div className="mt-12 text-center" data-aos="fade-up">
                    <p className="text-[14px] text-gray-500 font-medium mb-6">Don't see your area? Contact us to check availability.</p>
                    <Link
                        href="/booking"
                        className="inline-flex items-center gap-2 bg-[#5d43ff] text-white px-8 py-3 rounded-xl font-bold text-[14px] hover:bg-[#4a35cc] transition-all"
                    >
                        Check Service Availability
                    </Link>
                </div>

            </div>
        </section>
    );
}
