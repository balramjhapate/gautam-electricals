"use client";
import React, { useState, useEffect } from 'react';

export default function FloatingActions() {
    const [isVisible, setIsVisible] = useState(false);
    const [isWhatsappReady, setIsWhatsappReady] = useState(false);

    useEffect(() => {
        // Back to top visibility
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="fixed-actions-container">
            {/* TODO 14: Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={`back-to-top fixed bottom-[150px] right-[20px] w-11 h-11 bg-ac-primary text-white rounded-full border-none flex items-center justify-center cursor-pointer z-[9997] transition-all duration-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
                    } hover:bg-[#0d47a1] group`}
                aria-label="Back to top"
            >
                <i className="fa-solid fa-chevron-up transition-transform duration-200 group-hover:-translate-y-0.5"></i>
            </button>

            {/* Floating Call Button - Left (desktop only) */}
            <a
                href="tel:+918889539174"
                className="hidden md:flex fixed bottom-20 md:bottom-20 left-5 w-[60px] h-[60px] md:w-[60px] md:h-[60px] bg-[#cc0000] rounded-full items-center justify-center text-white text-[24px] md:text-[26px] no-underline z-[9998] shadow-[0_4px_16px_rgba(204,0,0,0.4)] hover:scale-110 hover:shadow-[0_8px_24px_rgba(204,0,0,0.5)] transition-all duration-300"
                aria-label="Call Now"
            >
                <i className="fa-solid fa-phone"></i>
            </a>

            {/* Floating WhatsApp Button - Right (desktop only) */}
            <a
                href="https://wa.me/918889539174?text=Hi%2C+I+need+AC+service+in+Bhopal%2FIndore"
                target="_blank"
                rel="noopener noreferrer"
                className="floating-whatsapp hidden md:flex fixed bottom-20 md:bottom-20 right-5 w-[60px] h-[60px] md:w-[60px] md:h-[60px] bg-[#25D366] rounded-full items-center justify-center text-white text-[24px] md:text-[26px] no-underline z-[9998] shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:scale-110 hover:rotate-[5deg] hover:shadow-[0_8px_24px_rgba(37,211,102,0.5)] transition-all duration-300"
                aria-label="Chat on WhatsApp"
            >
                <i className="fa-brands fa-whatsapp"></i>
            </a>
        </div>
    );
}
