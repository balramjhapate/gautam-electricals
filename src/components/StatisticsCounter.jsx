"use client";
import React, { useState, useEffect, useRef } from 'react';

const StatItem = ({ icon, colorClass, end, suffix, label, desc, delay }) => {
    const [count, setCount] = useState(0);
    const itemRef = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !started.current) {
                started.current = true;
                setTimeout(() => {
                    let start = 0;
                    const duration = 2000;
                    const totalFrames = duration / 16;
                    const step = end / totalFrames;

                    const timer = setInterval(() => {
                        start = Math.min(start + step, end);
                        setCount(start);
                        if (start >= end) clearInterval(timer);
                    }, 16);
                }, delay);
            }
        }, { threshold: 0.5 });

        if (itemRef.current) observer.observe(itemRef.current);
        return () => observer.disconnect();
    }, [end, delay]);

    return (
        <a
            href={`https://wa.me/918889539174?text=Hi,%20I'm%20impressed%20by%20your%20${encodeURIComponent(label)}%20and%20wanted%20to%20discuss%20my%20AC%20needs!`}
            target="_blank"
            rel="noopener noreferrer"
            ref={itemRef}
            className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 relative group block cursor-pointer"
        >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6 ${colorClass.bg} ${colorClass.text} transition-transform group-hover:scale-110`}>
                <i className={icon}></i>
            </div>

            <div className={`text-4xl md:text-[42px] font-extrabold mb-2 leading-none ${colorClass.text}`}>
                {Math.floor(count).toLocaleString()}{suffix}
            </div>

            <h3 className="font-bold text-ac-gray-dark text-[15px] mb-2">{label}</h3>
            <p className="text-ac-text-muted text-[13px] leading-relaxed">
                {desc}
            </p>
        </a>
    );
};

export default function StatisticsCounter() {
    return (
        <section id="stats" className="py-20 bg-[#f8f9fa] relative overflow-hidden">
            <div className="max-w-container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center mb-14" data-aos="fade-up">
                    <h2 className="text-3xl md:text-[38px] font-bold text-ac-gray-dark mb-4 tracking-tight">
                        Our Track Record
                    </h2>
                    <p className="text-ac-text-muted text-[15px] max-w-2xl mx-auto">
                        Numbers that speak for our commitment to excellence and customer satisfaction across Bhopal &amp; Indore.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div data-aos="fade-up" data-aos-delay="0">
                        <StatItem
                            icon="fa-regular fa-clock"
                            colorClass={{ bg: 'bg-blue-50', text: 'text-blue-600' }}
                            end={10}
                            suffix="+"
                            label="Years in Business"
                            desc="Years of trusted AC service in Bhopal & Indore"
                            delay={0}
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100">
                        <StatItem
                            icon="fa-solid fa-users"
                            colorClass={{ bg: 'bg-emerald-50', text: 'text-emerald-600' }}
                            end={5000}
                            suffix="+"
                            label="Happy Customers"
                            desc="Satisfied customers across Bhopal & Indore"
                            delay={200}
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200">
                        <StatItem
                            icon="fa-regular fa-circle-check"
                            colorClass={{ bg: 'bg-purple-50', text: 'text-purple-600' }}
                            end={15000}
                            suffix="+"
                            label="Jobs Completed"
                            desc="Successfully completed service calls"
                            delay={400}
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <StatItem
                            icon="fa-solid fa-bolt"
                            colorClass={{ bg: 'bg-red-50', text: 'text-red-500' }}
                            end={30}
                            suffix=" min"
                            label="Avg Response Time"
                            desc="Average emergency response time"
                            delay={600}
                        />
                    </div>
                </div>

                {/* Bottom Badge */}
                <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                    <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-6 py-2.5 shadow-sm text-ac-primary font-medium text-[13px]">
                        <i className="fa-regular fa-star"></i>
                        Excellence in Every Service
                        <i className="fa-regular fa-star"></i>
                    </div>
                </div>

            </div>
        </section>
    );
}
