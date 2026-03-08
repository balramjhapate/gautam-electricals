"use client";
import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
    {
        name: "Rajesh Sharma",
        location: "MP Nagar, Bhopal",
        service: "AC Installation",
        rating: 5,
        review: "Excellent service! The technician was professional and installed my AC perfectly. Very satisfied with the work quality and pricing.",
        date: "10 Jan 2025",
        avatar: "RS",
        color: "bg-blue-600",
        verified: true,
    },
    {
        name: "Priya Verma",
        location: "Vijay Nagar, Indore",
        service: "AC Repair",
        rating: 5,
        review: "Quick response and efficient service. My AC was not cooling properly, they fixed it in no time. Highly recommended!",
        date: "15 Jan 2025",
        avatar: "PV",
        color: "bg-pink-500",
        verified: true,
    },
    {
        name: "Amit Patel",
        location: "Arera Colony, Bhopal",
        service: "AMC Service",
        rating: 5,
        review: "Taking AMC was the best decision. Regular maintenance keeps my AC running smoothly. Great value for money!",
        date: "2 Feb 2025",
        avatar: "AP",
        color: "bg-green-600",
        verified: true,
    },
    {
        name: "Sneha Gupta",
        location: "Palasia, Indore",
        service: "Deep Cleaning",
        rating: 4,
        review: "The deep cleaning service was thorough. AC is now cooling better and air quality has improved. Professional team!",
        date: "18 Feb 2025",
        avatar: "SG",
        color: "bg-purple-600",
        verified: true,
    },
    {
        name: "Vikram Singh",
        location: "Kolar Road, Bhopal",
        service: "Emergency Service",
        rating: 5,
        review: "Called them for emergency service at night. They arrived within 30 minutes and fixed the issue. Excellent 24/7 support!",
        date: "1 Mar 2025",
        avatar: "VS",
        color: "bg-orange-500",
        verified: true,
    },
    {
        name: "Neha Mishra",
        location: "Hoshangabad Road, Bhopal",
        service: "Gas Refilling",
        rating: 5,
        review: "Very professional team. They refilled the AC gas and also checked for leaks thoroughly. Works perfectly now!",
        date: "3 Mar 2025",
        avatar: "NM",
        color: "bg-teal-600",
        verified: true,
    },
];

const StarRating = ({ rating, size = 'text-sm' }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    return (
        <div className={`flex gap-0.5 text-amber-400 ${size}`}>
            {[...Array(fullStars)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
            {hasHalfStar && <i className="fa-solid fa-star-half-stroke"></i>}
            {[...Array(5 - Math.ceil(rating))].map((_, i) => <i key={i} className="fa-regular fa-star text-gray-300"></i>)}
        </div>
    );
};

export default function Testimonials() {
    const [rating, setRating] = useState(0);
    const sectionRef = useRef(null);
    const countStarted = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !countStarted.current) {
                countStarted.current = true;
                let start = 0;
                const end = 4.8;
                const step = end / (1500 / 16);
                const timer = setInterval(() => {
                    start = Math.min(start + step, end);
                    setRating(start);
                    if (start >= end) clearInterval(timer);
                }, 16);
            }
        }, { threshold: 0.25 });
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="testimonials" ref={sectionRef} className="py-20 bg-[#f0f4ff]">
            <div className="max-w-container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-10" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-ac-gray-dark mb-3">What Our Customers Say</h2>
                    <p className="text-ac-text-muted text-[15px] max-w-2xl mx-auto mb-7">
                        Trusted by thousands of customers across Bhopal &amp; Indore for reliable AC services.
                        Real experiences from <span className="text-ac-primary font-medium">real people</span>.
                    </p>

                    {/* Rating pill */}
                    <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm">
                        <StarRating rating={4.8} size="text-base" />
                        <span className="font-extrabold text-ac-gray-dark text-lg">{rating.toFixed(1)}</span>
                        <span className="text-ac-text-muted text-[13px] border-l border-gray-200 pl-3">Based on 500+ verified reviews</span>
                    </div>
                </div>

                {/* Swiper */}
                <div className="relative group px-4 md:px-12">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={20}
                        loop={true}
                        centeredSlides={true}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        speed={600}
                        pagination={{ clickable: true, el: '.custom-pagination' }}
                        navigation={{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-16"
                    >
                        {testimonials.map((t, idx) => (
                            <SwiperSlide key={idx} className="h-auto">
                                {({ isActive }) => (
                                    <a
                                        href={`https://wa.me/918889539174?text=Hi,%20I%20saw%20the%20review%20from%20${encodeURIComponent(t.name)}%20about%20your%20${encodeURIComponent(t.service)}%20service%20and%20wanted%20to%20book!`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`h-full flex flex-col bg-white rounded-2xl p-6 relative transition-all duration-300 block
                                        ${isActive
                                                ? 'border-2 border-ac-primary shadow-[0_8px_32px_rgba(26,115,232,0.16)] scale-[1.02] z-10'
                                                : 'border border-gray-200 shadow-sm opacity-80'
                                            }`}
                                    >

                                        {/* Top row: stars + service badge */}
                                        <div className="flex items-center justify-between mb-3">
                                            <StarRating rating={t.rating} size="text-sm" />
                                            <span className="bg-ac-primary/10 text-ac-primary text-[11px] font-semibold px-2.5 py-1 rounded-full border border-ac-primary/20">
                                                {t.service}
                                            </span>
                                        </div>

                                        {/* Review */}
                                        <p className="text-ac-gray-dark text-[14px] leading-relaxed mb-5 flex-grow font-medium">
                                            "{t.review}"
                                        </p>

                                        {/* Divider */}
                                        <div className="border-t border-gray-100 pt-4 mt-auto">
                                            {/* Avatar + Name */}
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-10 h-10 rounded-full ${t.color} text-white flex items-center justify-center font-bold text-sm shrink-0`}>
                                                        {t.avatar}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-ac-gray-dark text-[14px] leading-none">{t.name}</p>
                                                        <p className="text-[12px] text-ac-text-muted mt-0.5">{t.location}</p>
                                                    </div>
                                                </div>
                                                {t.verified && (
                                                    <span className="flex items-center gap-1 text-emerald-600 text-[11px] font-semibold">
                                                        <i className="fa-solid fa-circle-check"></i> Verified
                                                    </span>
                                                )}
                                            </div>

                                            {/* Date + Service Completed */}
                                            <div className="flex items-center justify-between mt-2">
                                                <span className="text-[11px] text-gray-400 flex items-center gap-1">
                                                    <i className="fa-regular fa-clock"></i> {t.date}
                                                </span>
                                                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                                                    <i className="fa-solid fa-circle-check"></i> Service Completed
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation arrows */}
                    <button className="swiper-prev absolute left-0 top-1/2 -translate-y-12 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-ac-gray-dark hover:bg-ac-primary hover:text-white transition-all z-20 hidden md:flex">
                        <i className="fa-solid fa-chevron-left text-sm"></i>
                    </button>
                    <button className="swiper-next absolute right-0 top-1/2 -translate-y-12 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-ac-gray-dark hover:bg-ac-primary hover:text-white transition-all z-20 hidden md:flex">
                        <i className="fa-solid fa-chevron-right text-sm"></i>
                    </button>

                    {/* Pagination */}
                    <div className="custom-pagination flex justify-center gap-2 mt-6"></div>
                </div>

            </div>
        </section>
    );
}
