"use client";
import React from 'react';

export default function Comparison() {
    return (
        <section id="amc-comparison" className="py-20 bg-[#f0f4ff] overflow-hidden">
            <div className="max-w-container mx-auto px-4">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-[38px] font-bold text-ac-gray-dark mb-3 tracking-tight">
                        AMC vs One-Time Service
                    </h2>
                    <p className="text-ac-text-muted text-[15px] max-w-xl mx-auto">
                        Compare our Annual Maintenance Contract with one-time services to see the value
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

                    {/* AMC CARD */}
                    <div
                        className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(26,115,232,0.10)] border border-ac-primary/30 relative overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                        data-aos="fade-right"
                    >
                        {/* Recommended badge (top-right) */}
                        <div className="absolute top-3.5 right-3.5 bg-ac-primary text-white text-[11px] font-bold px-3 py-1 rounded-full shadow z-10">
                            Recommended
                        </div>

                        {/* Card header */}
                        <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-gray-100">
                            <div className="w-11 h-11 rounded-xl bg-ac-primary/10 flex items-center justify-center flex-shrink-0">
                                <i className="fa-solid fa-shield-halved text-ac-primary text-lg"></i>
                            </div>
                            <div>
                                <h3 className="font-bold text-ac-gray-dark text-[17px] leading-tight">Annual Maintenance Contract</h3>
                                <p className="text-ac-primary text-[13px] font-medium">Comprehensive Care Plan</p>
                            </div>
                        </div>

                        {/* Stats row */}
                        <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100 px-2 py-4">
                            <div className="text-center px-2">
                                <p className="text-[22px] font-extrabold text-ac-primary leading-none">4+</p>
                                <p className="text-[11px] text-ac-text-muted mt-1">visits/year</p>
                            </div>
                            <div className="text-center px-2">
                                <p className="text-[22px] font-extrabold text-emerald-500 leading-none">67%</p>
                                <p className="text-[11px] text-ac-text-muted mt-1">cost saved</p>
                            </div>
                            <div className="text-center px-2">
                                <p className="text-[22px] font-extrabold text-orange-500 leading-none">24h</p>
                                <p className="text-[11px] text-ac-text-muted mt-1">priority slots</p>
                            </div>
                        </div>

                        {/* Pricing details */}
                        <div className="px-6 py-4 border-b border-gray-100 space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="font-semibold text-ac-gray-dark text-[14px]">Annual Investment</span>
                                <span className="font-bold text-ac-primary text-[15px]">₹4,999</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-ac-text-muted text-[13px]">Per service cost</span>
                                <span className="text-ac-gray-dark text-[13px] font-medium">₹1,249</span>
                            </div>
                        </div>

                        {/* Key Benefits */}
                        <div className="px-6 py-4">
                            <p className="font-semibold text-ac-gray-dark text-[13px] mb-3">Key Benefits:</p>
                            <ul className="space-y-2">
                                {['Priority emergency response', 'Free minor repairs', 'Bi-annual deep cleaning'].map((b, i) => (
                                    <li key={i} className="flex items-center gap-2 text-[13.5px] text-ac-gray-dark">
                                        <i className="fa-solid fa-circle-check text-ac-green text-sm flex-shrink-0"></i>
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="px-6 pb-6">
                            <a
                                href="tel:+918889539174"
                                className="block w-full text-center bg-ac-primary hover:bg-ac-primary-dark text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
                            >
                                Choose AMC Plan
                            </a>
                            <div className="text-center mt-3">
                                <a href="#services" className="text-ac-primary text-[12px] font-medium hover:underline inline-flex items-center gap-1">
                                    <i className="fa-regular fa-circle-question"></i> What's included in AMC?
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ONE-TIME CARD */}
                    <div
                        className="bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-gray-200 relative overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                        data-aos="fade-left"
                        data-aos-delay="150"
                    >
                        {/* Card header */}
                        <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-gray-100">
                            <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                                <i className="fa-regular fa-clock text-gray-600 text-lg"></i>
                            </div>
                            <div>
                                <h3 className="font-bold text-ac-gray-dark text-[17px] leading-tight">One-Time Service</h3>
                                <p className="text-ac-text-muted text-[13px] font-medium">Pay-per-Visit Basis</p>
                            </div>
                        </div>

                        {/* Stats row */}
                        <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100 px-2 py-4">
                            <div className="text-center px-2">
                                <p className="text-[22px] font-extrabold text-ac-primary leading-none">2-3</p>
                                <p className="text-[11px] text-ac-text-muted mt-1">visits/year</p>
                            </div>
                            <div className="text-center px-2">
                                <p className="text-[22px] font-extrabold text-ac-red leading-none">0%</p>
                                <p className="text-[11px] text-ac-text-muted mt-1">cost saved</p>
                            </div>
                            <div className="text-center px-2">
                                <p className="text-[22px] font-extrabold text-gray-500 leading-none">48h</p>
                                <p className="text-[11px] text-ac-text-muted mt-1">standard slots</p>
                            </div>
                        </div>

                        {/* Pricing details */}
                        <div className="px-6 py-4 border-b border-gray-100 space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="font-semibold text-ac-gray-dark text-[14px]">Per Service Cost</span>
                                <span className="font-bold text-ac-gray-dark text-[15px]">₹799–₹1,999</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-ac-text-muted text-[13px]">Annual cost (3 visits)</span>
                                <span className="text-ac-gray-dark text-[13px] font-medium">₹2,397–₹5,997</span>
                            </div>
                        </div>

                        {/* What's Included */}
                        <div className="px-6 py-4">
                            <p className="font-semibold text-ac-gray-dark text-[13px] mb-3">What's Included:</p>
                            <ul className="space-y-2">
                                {['Basic cleaning & maintenance', 'Standard warranty', 'Regular response time'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-[13.5px] text-ac-text-muted">
                                        <i className="fa-solid fa-circle-check text-gray-400 text-sm flex-shrink-0"></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="px-6 pb-6 mt-auto">
                            <a
                                href="tel:+918889539174"
                                className="block w-full text-center bg-white border-2 border-gray-200 hover:border-ac-primary hover:text-ac-primary text-ac-gray-dark font-bold py-3.5 rounded-xl transition-all active:scale-95"
                            >
                                Book One-Time Service
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="300">
                    <a
                        href="https://wa.me/918889539174?text=Hi,%20I%20want%20to%20know%20more%20about%20the%20AMC%20plans!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366] text-[#25D366] font-bold px-6 py-2.5 rounded-xl hover:bg-[#25D366] hover:text-white transition-all duration-300 text-[14px] shadow-sm"
                    >
                        <i className="fa-brands fa-whatsapp text-lg"></i> Know more on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
