"use client";
import React from 'react';

const features = [
    {
        icon: "fa-solid fa-trophy",
        color: "text-[#f59e0b]",
        bgHover: "group-hover:bg-[#f59e0b]",
        title: "10+ Years Experience",
        desc: "Gautam Electricals has been serving Bhopal & Prayagraj since 2014 with expert appliance repair solutions"
    },
    {
        icon: "fa-solid fa-certificate",
        color: "text-ac-primary",
        bgHover: "group-hover:bg-ac-primary",
        title: "Certified Technicians",
        desc: "All our technicians are certified, background-verified and regularly trained on the latest appliance technologies"
    },
    {
        icon: "fa-solid fa-clock",
        color: "text-[#10b981]",
        bgHover: "group-hover:bg-[#10b981]",
        title: "Same-Day Service",
        desc: "Quick response and same-day service across Bhopal & Prayagraj for all appliance emergencies"
    },
    {
        icon: "fa-solid fa-heart",
        color: "text-[#ef4444]",
        bgHover: "group-hover:bg-[#ef4444]",
        title: "5000+ Happy Customers",
        desc: "Trusted by thousands of homes and businesses across Bhopal & Prayagraj for reliable appliance care"
    },
    {
        icon: "fa-solid fa-tools",
        color: "text-[#8b5cf6]",
        bgHover: "group-hover:bg-[#8b5cf6]",
        title: "Genuine Spare Parts",
        desc: "We use only genuine, brand-approved spare parts to ensure long-lasting repairs with warranty"
    },
    {
        icon: "fa-solid fa-shield-halved",
        color: "text-[#0d9488]",
        bgHover: "group-hover:bg-[#0d9488]",
        title: "100% Satisfaction Guarantee",
        desc: "Transparent pricing, no hidden charges and a satisfaction guarantee on every service we perform"
    }
];

export default function WhyChooseUs() {
    return (
        <section id="why-choose-us" className="py-20 bg-gradient-to-b from-[#f0f4ff] to-white">
            <div className="max-w-container mx-auto px-4">
                <div className="text-center mb-14" data-aos="fade-up">
                    <span className="inline-flex items-center gap-2 bg-ac-primary/10 text-ac-primary text-[12px] font-bold px-4 py-1.5 rounded-full mb-3">
                        <i className="fa-solid fa-star text-xs"></i>
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
                            <div className="feature-icon w-[68px] h-[68px] rounded-full bg-[#f0f4ff] flex items-center justify-center text-[26px] mx-auto mb-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                                <i className={`${f.icon} ${f.color} transition-colors duration-300 group-hover:text-white`}></i>
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
