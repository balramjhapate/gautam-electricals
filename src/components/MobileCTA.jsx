import React from 'react';
import Link from 'next/link';

export default function MobileCTA() {
    return (
        <div className="mobile-cta-bar fixed bottom-0 left-0 right-0 h-[56px] flex z-[9996] shadow-[0_-2px_8px_rgba(0,0,0,0.1)] md:hidden">
            <a
                href="tel:+918889539174"
                className="mobile-cta-call flex-1 flex items-center justify-center gap-2 text-[15px] font-semibold no-underline text-white bg-[#10b981]"
            >
                <i className="fa-solid fa-phone"></i> Call
            </a>
            <Link
                href="/booking"
                className="mobile-cta-book flex-1 flex items-center justify-center gap-2 text-[15px] font-semibold no-underline text-white bg-ac-primary border-l border-white/10"
            >
                <i className="fa-solid fa-calendar-check"></i> Book Service
            </Link>
        </div>
    );
}
