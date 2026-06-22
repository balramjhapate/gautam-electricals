import React from 'react';

export default function ContactEmergency() {
    return (
        <section className="bg-gradient-to-r from-[#ff4d4d] to-[#ff3333] py-14" data-aos="zoom-in">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                    <div className="text-left md:text-left">
                        <div className="flex items-center gap-3 text-white mb-2 justify-center md:justify-start">
                            <i className="fa-solid fa-triangle-exclamation text-xl"></i>
                            <h2 className="text-[20px] md:text-[24px] font-bold">Emergency AC Service Available 24/7</h2>
                        </div>
                        <p className="text-white/90 text-[14px] md:text-[15px] font-medium max-w-xl">
                            AC not working? Don't suffer in the heat! Call us now for immediate assistance.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row shadow-[0_4px_24px_rgba(0,0,0,0.15)] rounded-xl overflow-hidden md:min-w-[400px]">
                        <div className="bg-white/10 backdrop-blur-md px-6 py-4 flex flex-col justify-center items-center md:items-start min-w-[200px]">
                            <span className="text-[11px] text-white/70 font-bold uppercase tracking-wider mb-1">Emergency Helpline</span>
                            <span className="text-[20px] text-white font-bold leading-none">+91 9770816132</span>
                        </div>
                        <a
                            href="tel:+919770816132"
                            className="bg-white text-red-600 px-8 py-4 font-bold text-[15px] hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                        >
                            <i className="fa-solid fa-phone"></i>
                            Call Emergency Technician
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
