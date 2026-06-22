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
            {/* Back to Top */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-[130px] right-5 w-11 h-11 bg-ac-primary text-white rounded-full flex items-center justify-center cursor-pointer z-[9997] shadow-lg transition-all duration-300 hover:bg-ac-primary-dark group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}`}
                aria-label="Back to top"
            >
                <i className="fa-solid fa-chevron-up transition-transform duration-200 group-hover:-translate-y-0.5"></i>
            </button>

            {/* Floating Call 1 — desktop left bottom */}
            <a
                href="tel:+919770816132"
                className="hidden md:flex fixed bottom-24 left-5 w-[56px] h-[56px] bg-ac-primary rounded-full items-center justify-center text-white text-[20px] z-[9998] shadow-[0_4px_16px_rgba(27,59,143,0.4)] hover:scale-110 hover:shadow-[0_8px_24px_rgba(27,59,143,0.5)] transition-all duration-300"
                aria-label="Call: 9770816132"
                title="Call: +91 97708 16132"
            >
                <i className="fa-solid fa-phone"></i>
            </a>

            {/* Floating Call 2 — desktop left top */}
            <a
                href="tel:+919644494715"
                className="hidden md:flex fixed bottom-[168px] left-5 w-[56px] h-[56px] bg-[#f97316] rounded-full items-center justify-center text-white text-[20px] z-[9998] shadow-[0_4px_16px_rgba(249,115,22,0.4)] hover:scale-110 hover:shadow-[0_8px_24px_rgba(249,115,22,0.5)] transition-all duration-300"
                aria-label="Call: 9644494715"
                title="Call: +91 96444 94715"
            >
                <i className="fa-solid fa-phone"></i>
            </a>

            {/* Floating WhatsApp — desktop right */}
            <a
                href="https://wa.me/919770816132?text=Hi%2C+I+need+appliance+repair+in+Bhopal%2FIndore"
                target="_blank"
                rel="noopener noreferrer"
                className="floating-whatsapp hidden md:flex fixed bottom-24 right-5 w-[58px] h-[58px] bg-[#25D366] rounded-full items-center justify-center text-white text-[26px] z-[9998] shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:scale-110 hover:rotate-[5deg] hover:shadow-[0_8px_24px_rgba(37,211,102,0.5)] transition-all duration-300"
                aria-label="WhatsApp Gautam Electricals"
                title="WhatsApp: +91 97708 16132"
            >
                <i className="fa-brands fa-whatsapp"></i>
            </a>
        </>
    );
}
