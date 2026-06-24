"use client";
import React from 'react';
import SVGIcon from './SVGIcon';

export default function Comparison() {
    return (
        <section id="amc-comparison" className="py-20 bg-[#f0f4ff] overflow-hidden">
            <div className="max-w-container mx-auto px-4">
                <div className="text-center mb-12" data-aos="fade-up">
                    <span className="inline-flex items-center gap-2 bg-ac-primary/10 text-ac-primary text-[12px] font-bold px-4 py-1.5 rounded-full mb-3">
                        <SVGIcon name="scale" size={13} />
                        Save With Our AMC Plan
                    </span>
                    <h2 className="text-3xl md:text-[38px] font-[900] text-ac-gray-dark mb-3 tracking-tight">
                        AMC vs <span className="text-ge-accent">One-Time</span> Service
                    </h2>
                    <p className="text-ac-text-muted text-[14px] max-w-xl mx-auto">
                        Annual Maintenance Contract covers all your appliances — save up to 67% vs pay-per-visit
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

                    {/* AMC Card */}
                    <div
                        className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(27,59,143,0.10)] border-2 border-ac-primary/30 relative overflow-hidden transition-transform duration-300 hover:-translate-y-1.5"
                        data-aos="fade-right"
                    >
                        <div className="absolute top-4 right-4 bg-ac-primary text-white text-[11px] font-[900] px-3 py-1 rounded-full shadow z-10 uppercase tracking-wide">
                            Recommended
                        </div>

                        <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-gray-100">
                            <div className="w-11 h-11 rounded-xl bg-ac-primary/10 flex items-center justify-center flex-shrink-0">
                                <SVGIcon name="shield" size={22} className="text-ac-primary" />
                            </div>
                            <div>
                                <h3 className="font-[900] text-ac-gray-dark text-[17px] leading-tight">Annual Maintenance Contract</h3>
                                <p className="text-ac-primary text-[13px] font-semibold">Full-Year Protection Plan</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100 px-2 py-4">
                            {[
                                { val: '4+', label: 'visits/year', color: 'text-ac-primary' },
                                { val: '67%', label: 'cost saved', color: 'text-emerald-500' },
                                { val: '24h', label: 'priority slots', color: 'text-ge-accent' },
                            ].map((s, i) => (
                                <div key={i} className="text-center px-2">
                                    <p className={`text-[22px] font-extrabold leading-none ${s.color}`}>{s.val}</p>
                                    <p className="text-[11px] text-ac-text-muted mt-1">{s.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="px-6 py-4 border-b border-gray-100 space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="font-semibold text-ac-gray-dark text-[14px]">Annual Investment</span>
                                <span className="font-extrabold text-ac-primary text-[16px]">₹4,999</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-ac-text-muted text-[13px]">Per service cost</span>
                                <span className="text-ac-gray-dark text-[13px] font-medium">~₹1,249</span>
                            </div>
                        </div>

                        <div className="px-6 py-4">
                            <p className="font-bold text-ac-gray-dark text-[13px] mb-3">Key Benefits:</p>
                            <ul className="space-y-2">
                                {['Priority emergency response', 'Free minor repairs & labour', 'Covers all 6 appliance types', 'Bi-annual deep cleaning'].map((b, i) => (
                                    <li key={i} className="flex items-center gap-2 text-[13px] text-ac-gray-dark">
                                        <SVGIcon name="checkcircle" size={16} className="text-ac-green flex-shrink-0" />
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="px-6 pb-6">
                            <a
                                href="https://wa.me/919770816132?text=Hi%2C+I+want+to+know+more+about+the+AMC+plan!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-ac-primary hover:bg-ac-primary-dark text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
                            >
                                Get AMC Plan →
                            </a>
                        </div>
                    </div>

                    {/* One-Time Card */}
                    <div
                        className="bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-gray-200 relative overflow-hidden transition-transform duration-300 hover:-translate-y-1.5"
                        data-aos="fade-left"
                        data-aos-delay="150"
                    >
                        <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-gray-100">
                            <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                                <SVGIcon name="clock" size={22} className="text-gray-500" />
                            </div>
                            <div>
                                <h3 className="font-[900] text-ac-gray-dark text-[17px] leading-tight">One-Time Service</h3>
                                <p className="text-ac-text-muted text-[13px] font-medium">Pay-per-Visit Basis</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100 px-2 py-4">
                            {[
                                { val: '2-3', label: 'visits/year', color: 'text-ac-primary' },
                                { val: '0%', label: 'cost saved', color: 'text-ac-red' },
                                { val: '48h', label: 'standard slots', color: 'text-gray-500' },
                            ].map((s, i) => (
                                <div key={i} className="text-center px-2">
                                    <p className={`text-[22px] font-extrabold leading-none ${s.color}`}>{s.val}</p>
                                    <p className="text-[11px] text-ac-text-muted mt-1">{s.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="px-6 py-4 border-b border-gray-100 space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="font-semibold text-ac-gray-dark text-[14px]">Per Service Cost</span>
                                <span className="font-bold text-ac-gray-dark text-[15px]">₹350–₹1,999</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-ac-text-muted text-[13px]">Annual cost (3 visits)</span>
                                <span className="text-ac-gray-dark text-[13px] font-medium">₹1,050–₹5,997</span>
                            </div>
                        </div>

                        <div className="px-6 py-4">
                            <p className="font-bold text-ac-gray-dark text-[13px] mb-3">What's Included:</p>
                            <ul className="space-y-2">
                                {['Single appliance service visit', 'Standard warranty on repair', 'Regular response time'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-[13px] text-ac-text-muted">
                                        <SVGIcon name="checkcircle" size={16} className="text-gray-300 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="px-6 pb-6 mt-auto">
                            <a
                                href="tel:+919770816132"
                                className="block w-full text-center bg-white border-2 border-gray-200 hover:border-ac-primary hover:text-ac-primary text-ac-gray-dark font-bold py-3.5 rounded-xl transition-all active:scale-95"
                            >
                                Book One-Time Service
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="250">
                    <a
                        href="https://wa.me/919770816132?text=Hi%2C+I+want+to+know+more+about+the+AMC+plans!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366] text-[#25D366] font-bold px-6 py-2.5 rounded-xl hover:bg-[#25D366] hover:text-white transition-all duration-300 text-[14px] shadow-sm"
                    >
                        <SVGIcon name="whatsapp" size={20} /> Ask about AMC on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
