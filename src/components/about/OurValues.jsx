import React from 'react';

const WHATSAPP_URL = 'https://wa.me/919770816132?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20AC%20services.';

const values = [
    {
        title: "Quality First",
        desc: "We never compromise on quality. Every service call is performed to the highest standard and comes with a guarantee.",
        icon: "fa-solid fa-award",
    },
    {
        title: "Customer Trust",
        desc: "Building lasting relationships through transparent pricing, honest communication, and reliable service.",
        icon: "fa-solid fa-handshake-simple",
    },
    {
        title: "Quick Response",
        desc: "Fast, efficient service when you need it most. Emergency support available 24/7 across Bhopal.",
        icon: "fa-solid fa-bolt",
    }
];

export default function OurValues() {
    return (
        <section className="py-24 bg-[#f2f6fa]">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-[32px] font-bold text-gray-900 mb-3">Our Values</h2>
                    <p className="text-[16px] text-gray-500 font-medium">The principles that guide everything we do</p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <a
                            key={index}
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos="fade-up"
                            data-aos-delay={100 * (index + 1)}
                            className="bg-white rounded-2xl p-10 text-center shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
                        >
                            <div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-6 text-[#0ebd5e] text-2xl">
                                <i className={value.icon}></i>
                            </div>
                            <h3 className="text-[18px] font-bold text-gray-900 mb-4">{value.title}</h3>
                            <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
                                {value.desc}
                            </p>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}
