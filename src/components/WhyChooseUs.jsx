"use client";
import React from 'react';

const features = [
    {
        color: '#f59e0b',
        bgLight: '#fef3c7',
        title: '10+ Years Experience',
        desc: 'Gautam Electricals has been serving Bhopal & Prayagraj since 2014 with expert appliance repair solutions',
        svg: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
            </svg>
        ),
    },
    {
        color: '#1B3B8F',
        bgLight: '#e8eefb',
        title: 'Certified Technicians',
        desc: 'All our technicians are certified, background-verified and regularly trained on the latest appliance technologies',
        svg: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4"/>
                <path d="M9 14l-4 7h14l-4-7"/>
                <path d="M9 14l3 3 3-3"/>
            </svg>
        ),
    },
    {
        color: '#10b981',
        bgLight: '#d1fae5',
        title: 'Same-Day Service',
        desc: 'Quick response and same-day service across Bhopal & Prayagraj for all appliance emergencies',
        svg: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
            </svg>
        ),
    },
    {
        color: '#ef4444',
        bgLight: '#fee2e2',
        title: '5000+ Happy Customers',
        desc: 'Trusted by thousands of homes and businesses across Bhopal & Prayagraj for reliable appliance care',
        svg: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
        ),
    },
    {
        color: '#8b5cf6',
        bgLight: '#ede9fe',
        title: 'Genuine Spare Parts',
        desc: 'We use only genuine, brand-approved spare parts to ensure long-lasting repairs with warranty',
        svg: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
            </svg>
        ),
    },
    {
        color: '#0d9488',
        bgLight: '#ccfbf1',
        title: '100% Satisfaction Guarantee',
        desc: 'Transparent pricing, no hidden charges and a satisfaction guarantee on every service we perform',
        svg: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
            </svg>
        ),
    },
];

export default function WhyChooseUs() {
    return (
        <section id="why-choose-us" className="py-20 bg-gradient-to-b from-[#f0f4ff] to-white">
            <div className="max-w-container mx-auto px-4">
                <div className="text-center mb-14" data-aos="fade-up">
                    <span className="inline-flex items-center gap-2 bg-ac-primary/10 text-ac-primary text-[12px] font-bold px-4 py-1.5 rounded-full mb-3">
                        <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/></svg>
                        Why Customers Trust Us
                    </span>
                    <h2 className="text-3xl md:text-[38px] font-[900] text-ac-gray-dark mb-4 tracking-tight">
                        Why Choose <span className="text-ac-primary">Gautam Electricals</span>?
                    </h2>
                    <p className="text-ac-text-muted text-[15px] max-w-2xl mx-auto">
                        Your trusted partner for all home appliance repairs in Bhopal &amp; Prayagraj — certified,
                        reliable and affordable every time.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {features.map((f, idx) => (
                        <a
                            key={idx}
                            href={`https://wa.me/919770816132?text=Hi%2C+I+want+to+know+more+about+${encodeURIComponent(f.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="feature-card bg-white border border-gray-200 rounded-2xl p-7 text-center transition-all duration-300 hover:bg-ac-primary hover:border-ac-primary hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(27,59,143,0.18)] group block"
                            data-aos="zoom-in"
                            data-aos-delay={idx * 80}
                        >
                            <div
                                className="w-[68px] h-[68px] rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20"
                                style={{ backgroundColor: f.bgLight, color: f.color }}
                            >
                                <span className="transition-colors duration-300 group-hover:text-white" style={{ color: f.color }}>
                                    {f.svg}
                                </span>
                            </div>
                            <h3 className="text-[17px] font-bold text-ac-gray-dark mb-3 group-hover:text-white transition-colors">{f.title}</h3>
                            <p className="text-[13px] text-ac-text-muted leading-relaxed group-hover:text-white/80 transition-colors">{f.desc}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
