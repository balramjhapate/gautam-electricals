import React from 'react';

const WHATSAPP_URL = 'https://wa.me/919770816132?text=Hi,%20I%20saw%20your%20customer%20reviews%20and%20would%20like%20to%20book%20an%20AC%20service.';

const testimonials = [
    {
        quote: "Excellent service! My AC was not cooling properly for weeks. Rajesh Kumar diagnosed the issue quickly and fixed it within 30 minutes. Professional and reasonable pricing.",
        name: "Suresh Prasad",
        location: "Kolar Road, Bhopal",
        date: "12/05/2023",
    },
    {
        quote: "Had my new split AC installed by Gautam Electricals. The installation was clean, professional, and completed on time. The technician explained everything clearly.",
        name: "Neha Verma",
        location: "Arera Colony, Bhopal",
        date: "14/06/2023",
    },
    {
        quote: "I highly recommend them for emergency AC repair in summer. They came within 45 minutes and fixed the problem. Truly 24x7 service as promised.",
        name: "Dr. Ananya Singh",
        location: "Awadhpuri, Bhopal",
        date: "21/04/2023",
    },
    {
        quote: "We got the AMC contract and moving very good. From a year haven't faced a single issue. Great work members. Full satisfied and the best services.",
        name: "Gaurav Soni",
        location: "Indrapuri, Bhopal",
        date: "01/08/2023",
    }
];

export default function AboutTestimonials() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-[32px] font-bold text-gray-900 mb-3">What Our Customers Say</h2>
                    <p className="text-[16px] text-gray-500 font-medium tracking-wide">Real feedback from satisfied customers across Bhopal</p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((test, index) => (
                        <a
                            key={index}
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos="fade-up"
                            data-aos-delay={100 * (index + 1)}
                            className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col h-full cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                        >
                            {/* Stars & Badge */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex text-yellow-400 text-sm gap-1">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <div className="flex items-center gap-1.5 text-[11px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                                    <i className="fa-solid fa-circle-check"></i>
                                    <span>Verified</span>
                                </div>
                            </div>

                            {/* Quote */}
                            <p className="text-[14.5px] font-medium text-gray-600 leading-relaxed mb-8 italic flex-grow">
                                "{test.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-end justify-between border-t border-gray-100 pt-5 mt-auto">
                                <div>
                                    <div className="text-[14px] font-bold text-gray-900 mb-1">{test.name}</div>
                                    <div className="text-[12px] font-medium text-gray-500">{test.location}</div>
                                </div>
                                <div className="text-[12px] font-semibold text-gray-400">{test.date}</div>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}
