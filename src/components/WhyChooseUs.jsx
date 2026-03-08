"use client";
import React from 'react';

const features = [
    {
        icon: "fa-solid fa-trophy",
        color: "text-[#f59e0b]",
        title: "10+ Years Experience",
        desc: "Serving Bhopal & Indore since 2014 with expert AC solutions and customer satisfaction"
    },
    {
        icon: "fa-solid fa-certificate",
        color: "text-[#1a73e8]",
        title: "Certified Technicians",
        desc: "All our technicians are certified, licensed, and regularly trained on latest AC technologies"
    },
    {
        icon: "fa-solid fa-clock",
        color: "text-[#10b981]",
        title: "24/7 Emergency Service",
        desc: "Quick response within 30 minutes across Bhopal & Indore for urgent AC issues"
    },
    {
        icon: "fa-solid fa-heart",
        color: "text-[#ef4444]",
        title: "5000+ Happy Customers",
        desc: "Trusted by thousands of residential and commercial customers across Bhopal & Indore"
    },
    {
        icon: "fa-solid fa-location-dot",
        color: "text-[#8b5cf6]",
        title: "Wide Service Coverage",
        desc: "Covering 20+ areas across Bhopal & Indore with same-day service availability"
    },
    {
        icon: "fa-solid fa-shield-halved",
        color: "text-[#0d9488]",
        title: "100% Satisfaction Guarantee",
        desc: "Quality guarantee on all services with transparent pricing and no hidden charges"
    }
];

export default function WhyChooseUs() {
    return (
        <section id="why-choose-us" className="py-20 bg-gradient-to-b from-[#f5f5f5] to-white">
            <div className="max-w-container mx-auto px-4">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-ac-gray-dark mb-4">Why Choose AC Service Bhopal & Indore?</h2>
                    <p className="text-ac-text-muted text-lg max-w-3xl mx-auto">
                        Your trusted partner for all AC services in Bhopal & Indore with unmatched expertise,
                        certified professionals, and guaranteed customer satisfaction.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((f, idx) => (
                        <a
                            key={idx}
                            href={`https://wa.me/918889539174?text=Hi,%20I'm%20interested%20in%20your%20services%20for%20${encodeURIComponent(f.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="feature-card bg-white border border-gray-200 rounded-xl p-8 text-center transition-all duration-300 hover:bg-[#f0f7ff] hover:border-[#1a73e8] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(26,115,232,0.1)] group block"
                            data-aos="zoom-in"
                            data-aos-delay={idx * 100}
                        >
                            <div className="feature-icon w-[70px] h-[70px] rounded-full bg-[#f0f7ff] flex items-center justify-center text-[28px] mx-auto mb-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1a73e8] group-hover:text-white">
                                <i className={`${f.icon} ${f.color} transition-colors duration-300 group-hover:text-white group-hover:animate-[iconBounce_0.4s_ease]`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-[#333] mb-3">{f.title}</h3>
                            <p className="text-sm text-[#666] leading-relaxed">{f.desc}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
