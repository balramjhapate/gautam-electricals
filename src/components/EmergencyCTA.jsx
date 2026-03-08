"use client";
import React from 'react';

export default function EmergencyCTA() {
    return (
        <section id="contact" className="py-12 bg-[#4856f6] overflow-hidden">
            {/* Increased max-w to shift elements further apart */}
            <div className="max-w-[1300px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">

                    {/* LEFT SIDE: Text and Buttons */}
                    <div className="flex-1 max-w-xl text-white w-full">
                        <h2 className="text-[28px] md:text-[34px] font-bold mb-3 tracking-tight leading-tight">
                            Need AC Service Right Now?
                        </h2>
                        <p className="text-white/80 text-[15px] mb-6 leading-relaxed">
                            Don't let a broken AC ruin your comfort. Our expert technicians are
                            ready to help 24/7 across Bhopal & Indore.
                        </p>

                        {/* Red Info Box */}
                        <a
                            href="https://wa.me/918889539174?text=Hi%2C+I+have+an+AC+emergency!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#e61e26] rounded-md p-4 flex items-start gap-4 mb-5 shadow-md hover:bg-red-700 transition-all cursor-pointer block"
                        >
                            <i className="fa-solid fa-triangle-exclamation text-white text-[20px] mt-0.5"></i>
                            <div>
                                <h3 className="font-bold text-white text-[15px] leading-tight">Emergency Service Available</h3>
                                <p className="text-white/90 text-[13px] mt-1">Response time: Within 30 minutes in Bhopal & Indore</p>
                            </div>
                        </a>

                        {/* Buttons Drop */}
                        <div className="space-y-3 mb-6">
                            <a
                                href="tel:+918889539174"
                                className="flex items-center justify-center gap-2 bg-[#e61e26] text-white py-3 px-6 rounded-md text-[14.5px] font-bold shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:bg-red-700 hover:-translate-y-0.5 transition-all w-full leading-none"
                            >
                                <i className="fa-solid fa-phone-volume"></i> Emergency: +91 8889539174
                            </a>
                            <div className="grid grid-cols-2 gap-3">
                                <a
                                    href="tel:+918889539174"
                                    className="flex items-center justify-center gap-2 bg-[#5d6af7] border border-[#7a86fa] text-white py-2.5 px-5 rounded-md text-[13.5px] font-medium hover:bg-[#6874f8] transition-all w-full leading-none shadow-sm hover:-translate-y-0.5"
                                >
                                    <i className="fa-solid fa-phone"></i> Call: +91-8889539174
                                </a>
                                <a
                                    href="https://wa.me/918889539174?text=Hi%2C+I+need+AC+service+in+Bhopal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-[#18a749] text-white py-2.5 px-5 rounded-md text-[13.5px] font-medium hover:bg-[#159641] transition-all w-full leading-none shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                                >
                                    <i className="fa-brands fa-whatsapp text-lg"></i> WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Business Hours Box */}
                        <div className="bg-white/10 rounded-md p-5 border border-white/10">
                            <h3 className="font-bold text-white text-[14.5px] mb-3">Business Hours</h3>
                            <div className="text-white/90 text-[13px] leading-[1.8]">
                                Mon - Fri: 09:00 - 19:00<br />
                                Saturday: 09:00 - 17:00<br />
                                Sunday: 10:00 - 16:00<br />
                                <span className="text-[#fbbf24] font-semibold uppercase tracking-wide text-[12px] mt-1.5 block">Emergency service: 24/7</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Quote Card */}
                    <div className="w-full lg:w-[460px] lg:ml-auto lg:translate-x-6">
                        {/* Adjusted to rounded-xl to match Patna style perfectly */}
                        <div className="bg-white rounded-xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col items-center hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.3)] transition-all duration-500 cursor-default">

                            <div className="w-14 h-14 rounded-full bg-[#f0f4ff] flex items-center justify-center mb-5">
                                <i className="fa-regular fa-calendar text-[#4856f6] text-xl"></i>
                            </div>

                            <h3 className="text-[20px] font-bold text-gray-900 mb-1.5">Get Detailed Quote</h3>
                            <p className="text-[13.5px] text-gray-500 mb-6 font-medium">Complete assessment with instant pricing</p>

                            <a
                                href="https://wa.me/918889539174?text=Hi%2C+I%20want%20to%20get%20a%20quote%20for%20AC%20service."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 bg-[#4856f6] text-white py-3 rounded-md text-[14.5px] font-bold shadow-md hover:bg-blue-700 transition-all hover:shadow-xl hover:-translate-y-0.5 mb-6 leading-none"
                            >
                                Start Quote Process <i className="fa-solid fa-arrow-right text-sm"></i>
                            </a>

                            <div className="w-full flex justify-start">
                                <ul className="space-y-3.5">
                                    <li className="flex items-start gap-3 text-[13px] text-gray-600 font-medium">
                                        <i className="fa-regular fa-circle-check text-[#18a749] text-[15px] mt-0.5"></i>
                                        Detailed service assessment
                                    </li>
                                    <li className="flex items-start gap-3 text-[13px] text-gray-600 font-medium">
                                        <i className="fa-regular fa-circle-check text-[#18a749] text-[15px] mt-0.5"></i>
                                        Transparent pricing breakdown
                                    </li>
                                    <li className="flex items-start gap-3 text-[13px] text-gray-600 font-medium">
                                        <i className="fa-regular fa-circle-check text-[#18a749] text-[15px] mt-0.5"></i>
                                        Flexible scheduling options
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
