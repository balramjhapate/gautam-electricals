"use client";
import React, { useState } from 'react';

export default function EmergencyBanner() {
    const [visible, setVisible] = useState(true);

    const handleDismiss = () => {
        const banner = document.querySelector('.emergency-banner');
        if (banner) {
            banner.style.transition = 'transform 0.4s ease-in, opacity 0.4s ease-in';
            banner.style.transform = 'translateY(-100%)';
            banner.style.opacity = '0';
            setTimeout(() => setVisible(false), 400);
        } else {
            setVisible(false);
        }
    };

    if (!visible) return null;

    return (
        <div className="emergency-banner w-full bg-[#cc0000] text-white py-2 px-3 md:px-6 z-[1000] sticky top-0 flex justify-center items-center overflow-hidden border-b border-white/5 shadow-[0_4px_12px_rgba(204,0,0,0.2)]">
            <div className="max-w-[1400px] w-full flex items-center justify-between gap-3 md:gap-8">

                {/* Left: Icon + Badge + Text */}
                <div className="flex items-center gap-3 overflow-hidden">
                    <div className="flex shrink-0 w-8 h-8 items-center justify-center rounded-full bg-white/10">
                        <i className="fa-solid fa-bolt text-[#f97316] text-base animate-pulse"></i>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 leading-none">
                        <span className="bg-[#f97316] text-white text-[9px] md:text-[11px] font-[900] px-2.5 py-1 rounded-full uppercase tracking-tight shrink-0 text-center shadow-inner">
                            24/7 EMERGENCY
                        </span>

                        <div className="flex flex-col leading-tight gap-0.5">
                            <span className="text-[12px] sm:text-[14px] md:text-base font-bold tracking-tight text-white line-clamp-1">
                                AC · Fridge · Washing Machine · Geyser · RO Repair — Bhopal &amp; Prayagraj!
                            </span>
                            <span className="text-[10px] sm:text-[11px] text-white/80 font-medium hidden xs:block">
                                Instant response · Certified technicians · All appliances · All areas
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right: Action Buttons */}
                <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                    <a
                        href="tel:+919770816132"
                        className="bg-white text-[#cc0000] px-3 sm:px-4 py-1.5 rounded-lg font-bold text-[11px] sm:text-[13px] flex items-center gap-2 hover:bg-gray-100 transition-all active:scale-95 shadow-lg border border-white group"
                    >
                        <i className="fa-solid fa-phone group-hover:rotate-12 transition-transform"></i>
                        <span className="hidden xs:inline">Call Now</span>
                        <span className="inline xs:hidden">Call</span>
                    </a>

                    <a
                        href="https://wa.me/919770816132?text=Hi%2C+I+need+appliance+repair+in+Bhopal%2FIndore"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#25D366] text-white px-3 sm:px-4 py-1.5 rounded-lg font-bold text-[11px] sm:text-[13px] flex items-center gap-2 hover:bg-[#20ba5a] transition-all active:scale-95 shadow-lg border border-white/10"
                    >
                        <i className="fa-brands fa-whatsapp text-sm sm:text-lg"></i>
                        <span className="hidden xs:inline">WhatsApp</span>
                        <span className="inline xs:hidden">Chat</span>
                    </a>

                    <button
                        onClick={handleDismiss}
                        className="text-white/40 hover:text-white transition-colors ml-1 p-1"
                        aria-label="Dismiss banner"
                    >
                        <i className="fa-solid fa-xmark text-lg sm:text-xl"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
