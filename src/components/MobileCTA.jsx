"use client";
import React from 'react';

export default function MobileCTA() {
    return (
        <div className="fixed bottom-0 left-0 right-0 h-[60px] bg-white border-t border-gray-200 z-[9999] shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden flex items-stretch p-1.5 pb-[calc(0.375rem+env(safe-area-inset-bottom,0px))] gap-1.5">
            <a
                href="tel:+919770816132"
                className="flex-1 flex items-center justify-center gap-2 text-[13px] font-extrabold text-white bg-ac-primary rounded-xl active:scale-95 transition-all"
            >
                <i className="fa-solid fa-phone text-sm"></i>
                9770816132
            </a>
            <a
                href={`https://wa.me/919770816132?text=Hi%2C+I+need+appliance+repair+service!`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 text-[14px] font-extrabold text-white bg-[#25D366] rounded-xl active:scale-95 transition-all"
            >
                <i className="fa-brands fa-whatsapp text-[17px]"></i>
                WhatsApp
            </a>
        </div>
    );
}
