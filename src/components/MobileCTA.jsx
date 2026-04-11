"use client";
import React from 'react';

export default function MobileCTA() {
    return (
        <div className="fixed bottom-0 left-0 right-0 h-[60px] bg-white border-t border-[#e5e5e5] z-[9999] shadow-[0_-2px_10px_rgba(0,0,0,0.05)] md:hidden flex items-center justify-between p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] box-content">
            <a
                href="tel:+918889539174"
                onClick={() => { if(typeof window !== 'undefined' && typeof window.gtag === 'function') window.gtag('event', 'call_click', {event_category: 'contact', event_label: 'phone_call'}); }}
                className="flex-1 flex items-center justify-center gap-2 text-[15px] font-bold text-white bg-[#10b981] h-full rounded-md mr-1 px-2"
            >
                <i className="fa-solid fa-phone"></i> Call Now
            </a>
            <a
                href="https://wa.me/918889539174?text=Hi,%20I'm%20interested%20in%20your%20AC%20services!"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { if(typeof window !== 'undefined' && typeof window.gtag === 'function') window.gtag('event', 'whatsapp_click', {event_category: 'contact', event_label: 'whatsapp'}); }}
                className="flex-1 flex items-center justify-center gap-2 text-[15px] font-bold text-white bg-[#25d366] h-full rounded-md ml-1 px-2"
            >
                <i className="fa-brands fa-whatsapp text-lg"></i> WhatsApp
            </a>
        </div>
    );
}
