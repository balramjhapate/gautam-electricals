"use client";
import React from 'react';

const StatItem = ({ icon, colorClass, displayValue, label, desc, waText }) => (
    <a
        href={`https://wa.me/919770816132?text=Hi%2C+${waText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1.5 relative group block cursor-pointer border border-transparent hover:border-ac-primary/20"
    >
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6 ${colorClass.bg} ${colorClass.text} transition-transform group-hover:scale-110`}>
            <i className={icon}></i>
        </div>
        <div className={`text-[40px] md:text-[44px] font-extrabold mb-2 leading-none ${colorClass.text}`}>
            {displayValue}
        </div>
        <h3 className="font-bold text-ac-gray-dark text-[15px] mb-2">{label}</h3>
        <p className="text-ac-text-muted text-[12.5px] leading-relaxed">{desc}</p>
    </a>
);

export default function StatisticsCounter() {
    return (
        <section id="stats" className="py-20 bg-[#f8f9fa] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-ac-primary/4 blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-ge-accent/4 blur-3xl pointer-events-none"></div>

            <div className="max-w-container mx-auto px-4 relative z-10">
                <div className="text-center mb-14" data-aos="fade-up">
                    <span className="inline-flex items-center gap-2 bg-ac-primary/10 text-ac-primary text-[12px] font-bold px-4 py-1.5 rounded-full mb-3">
                        <i className="fa-solid fa-chart-simple text-xs"></i>
                        Our Track Record
                    </span>
                    <h2 className="text-3xl md:text-[38px] font-[900] text-ac-gray-dark mb-4 tracking-tight">
                        Numbers That <span className="text-ac-primary">Speak</span>
                    </h2>
                    <p className="text-ac-text-muted text-[15px] max-w-2xl mx-auto">
                        Our commitment to quality service across Bhopal &amp; Prayagraj in numbers.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
                    <div data-aos="fade-up" data-aos-delay="0">
                        <StatItem
                            icon="fa-regular fa-clock"
                            colorClass={{ bg: 'bg-blue-50', text: 'text-blue-600' }}
                            displayValue="10+"
                            label="Years in Business"
                            desc="Trusted appliance repair in Bhopal & Prayagraj since 2014"
                            waText="I+want+to+know+about+your+experience"
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100">
                        <StatItem
                            icon="fa-solid fa-users"
                            colorClass={{ bg: 'bg-emerald-50', text: 'text-emerald-600' }}
                            displayValue="5000+"
                            label="Happy Customers"
                            desc="Satisfied families and businesses across both cities"
                            waText="I+heard+about+your+5000+customers"
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200">
                        <StatItem
                            icon="fa-regular fa-circle-check"
                            colorClass={{ bg: 'bg-purple-50', text: 'text-purple-600' }}
                            displayValue="8000+"
                            label="Jobs Completed"
                            desc="Successfully repaired appliances across all 6 categories"
                            waText="I+want+to+book+a+repair+service"
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <StatItem
                            icon="fa-solid fa-tools"
                            colorClass={{ bg: 'bg-orange-50', text: 'text-orange-500' }}
                            displayValue="6"
                            label="Appliance Types"
                            desc="AC, Fridge, Washing Machine, Geyser, RO & Microwave"
                            waText="I+need+appliance+repair+service"
                        />
                    </div>
                </div>

                <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                    <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-6 py-2.5 shadow-sm text-ac-primary font-semibold text-[13px]">
                        <i className="fa-solid fa-bolt text-ge-accent"></i>
                        Gautam Electricals — Excellence in Every Repair
                        <i className="fa-solid fa-bolt text-ge-accent"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}
