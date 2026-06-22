"use client";
import React, { useState, useEffect } from 'react';

export default function FloatingActions() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggle = () => setIsVisible(window.scrollY > 400);
        window.addEventListener('scroll', toggle, { passive: true });
        return () => window.removeEventListener('scroll', toggle);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <>
            {/* ── Floating WhatsApp — visible on ALL screens ── */}
            <a
                href="https://wa.me/919770816132?text=Hi%2C+I+need+appliance+repair+service!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                title="WhatsApp: +91 97708 16132"
                className="fixed bottom-[76px] right-4 md:bottom-24 md:right-5 z-[9999] flex items-center justify-center"
            >
                {/* Pulse rings */}
                <span className="absolute inline-flex w-full h-full rounded-full bg-[#25D366] opacity-60 animate-ping"></span>
                <span className="absolute inline-flex w-[110%] h-[110%] rounded-full bg-[#25D366] opacity-30 animate-ping [animation-delay:0.4s]"></span>

                {/* Button */}
                <span className="relative flex items-center justify-center w-[54px] h-[54px] md:w-[58px] md:h-[58px] bg-[#25D366] rounded-full text-white text-[26px] md:text-[28px] shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_8px_28px_rgba(37,211,102,0.6)] transition-all duration-300">
                    <i className="fa-brands fa-whatsapp"></i>
                </span>
            </a>

            {/* ── Back to Top — desktop only ── */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-[130px] right-5 w-11 h-11 bg-ac-primary text-white rounded-full hidden md:flex items-center justify-center cursor-pointer z-[9997] shadow-lg transition-all duration-300 hover:bg-ac-primary-dark group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}`}
                aria-label="Back to top"
            >
                <i className="fa-solid fa-chevron-up transition-transform duration-200 group-hover:-translate-y-0.5"></i>
            </button>

            {/* ── Call buttons — desktop only ── */}
            <a
                href="tel:+919770816132"
                className="hidden md:flex fixed bottom-24 left-5 w-[56px] h-[56px] bg-ac-primary rounded-full items-center justify-center text-white text-[20px] z-[9998] shadow-[0_4px_16px_rgba(27,59,143,0.4)] hover:scale-110 hover:shadow-[0_8px_24px_rgba(27,59,143,0.5)] transition-all duration-300"
                aria-label="Call: 9770816132"
                title="Call: +91 97708 16132"
            >
                <i className="fa-solid fa-phone"></i>
            </a>

            <a
                href="tel:+919644494715"
                className="hidden md:flex fixed bottom-[168px] left-5 w-[56px] h-[56px] bg-[#f97316] rounded-full items-center justify-center text-white text-[20px] z-[9998] shadow-[0_4px_16px_rgba(249,115,22,0.4)] hover:scale-110 hover:shadow-[0_8px_24px_rgba(249,115,22,0.5)] transition-all duration-300"
                aria-label="Call: 9644494715"
                title="Call: +91 96444 94715"
            >
                <i className="fa-solid fa-phone"></i>
            </a>
        </>
    );
}
