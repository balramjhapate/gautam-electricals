"use client";
import React from 'react';

export default function EmergencyCTA() {
    return (
        <section id="contact" className="py-14 bg-ac-primary overflow-hidden relative">
            {/* Background blobs */}
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-ge-accent/10 blur-3xl pointer-events-none"></div>

            <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">

                    {/* Left: Text */}
                    <div className="flex-1 max-w-xl text-white w-full">
                        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 text-[12px] font-bold mb-5">
                            <i className="fa-solid fa-bolt text-ge-accent"></i>
                            24/7 Emergency Available
                        </div>

                        <h2 className="text-[28px] md:text-[36px] font-[900] mb-3 tracking-tight leading-tight">
                            Need Appliance Repair <br className="hidden md:block" />
                            <span className="text-ge-accent">Right Now?</span>
                        </h2>
                        <p className="text-white/80 text-[15px] mb-6 leading-relaxed">
                            Don't let a broken appliance disrupt your home. Gautam Electricals expert
                            technicians are ready 24/7 across Bhopal &amp; Prayagraj — AC, Fridge, Washing Machine,
                            Geyser, RO, Microwave.
                        </p>

                        {/* Emergency alert box */}
                        <a
                            href="https://wa.me/919770816132?text=Hi%2C+I+have+an+appliance+emergency!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-ge-accent hover:bg-ge-accent-dark rounded-xl p-4 flex items-start gap-4 mb-5 shadow-lg cursor-pointer block transition-all hover:-translate-y-0.5 active:scale-95"
                        >
                            <i className="fa-solid fa-triangle-exclamation text-white text-[20px] mt-0.5 animate-pulse"></i>
                            <div>
                                <h3 className="font-bold text-white text-[15px] leading-tight">Emergency Service Available</h3>
                                <p className="text-white/90 text-[13px] mt-0.5">Response time: Within 60 minutes in Bhopal &amp; Prayagraj</p>
                            </div>
                        </a>

                        {/* Action buttons */}
                        <div className="space-y-3 mb-6">
                            <a
                                href="tel:+919770816132"
                                className="flex items-center justify-center gap-2 bg-white text-ac-primary py-3.5 px-6 rounded-xl text-[15px] font-extrabold shadow-lg hover:bg-gray-50 hover:-translate-y-0.5 transition-all w-full"
                            >
                                <i className="fa-solid fa-phone-volume text-ge-accent"></i>
                                Call Now: +91 97708 16132
                            </a>
                            <a
                                href="https://wa.me/919770816132?text=Hi%2C+I+need+appliance+repair+service!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-xl text-[12.5px] font-bold hover:bg-[#20ba5a] transition-all shadow hover:-translate-y-0.5"
                            >
                                <i className="fa-brands fa-whatsapp text-lg"></i> 9770816132
                            </a>
                        </div>

                        {/* Hours */}
                        <div className="bg-white/10 rounded-xl p-5 border border-white/15">
                            <h3 className="font-bold text-white text-[14px] mb-3 flex items-center gap-2">
                                <i className="fa-regular fa-clock text-ge-accent"></i> Business Hours
                            </h3>
                            <div className="text-white/85 text-[13px] leading-[1.9]">
                                Mon – Sat: 09:00 AM – 8:00 PM<br />
                                Sunday: 10:00 AM – 6:00 PM<br />
                                <span className="text-ge-accent font-bold uppercase tracking-wide text-[12px] mt-1 block">
                                    Emergency: 24/7 Always Available
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Quote Card */}
                    <div className="w-full lg:w-[420px]">
                        <div className="bg-white rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-gray-100 flex flex-col items-center hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.3)] transition-all duration-500">

                            {/* Logo mark */}
                            <div className="w-16 h-16 rounded-2xl bg-ac-primary/10 flex items-center justify-center mb-5">
                                <svg width="36" height="36" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="40" height="40" rx="10" fill="#1B3B8F" />
                                    <polygon points="24,4 12,22 20,22 16,36 28,18 20,18" fill="#f97316" />
                                </svg>
                            </div>

                            <h3 className="text-[20px] font-[900] text-ac-gray-dark mb-1">Get a Free Quote</h3>
                            <p className="text-[13px] text-ac-text-muted mb-6 font-medium text-center">
                                Instant assessment — all 6 appliance types covered
                            </p>

                            {/* Appliance chips */}
                            <div className="flex flex-wrap gap-2 justify-center mb-6">
                                {['AC', 'Fridge', 'Washing M.', 'Geyser', 'RO', 'Microwave'].map((a) => (
                                    <span key={a} className="text-[11px] font-bold bg-ac-primary/8 text-ac-primary px-3 py-1 rounded-full border border-ac-primary/20">
                                        {a}
                                    </span>
                                ))}
                            </div>

                            <a
                                href="https://wa.me/919770816132?text=Hi%2C+I+want+a+free+quote+for+appliance+repair."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-xl text-[15px] font-extrabold shadow-md hover:bg-[#20ba5a] transition-all hover:-translate-y-0.5 mb-5"
                            >
                                <i className="fa-brands fa-whatsapp text-xl"></i> Get Free Quote on WhatsApp
                            </a>

                            <ul className="w-full space-y-2.5">
                                {['No call centre — direct to technician', 'Transparent pricing, no hidden charges', 'Genuine spare parts with warranty'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-ac-text-muted font-medium">
                                        <i className="fa-regular fa-circle-check text-ac-green text-[15px] mt-0.5 flex-shrink-0"></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
