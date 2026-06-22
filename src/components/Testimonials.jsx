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
        service: "AC Repair",
        rating: 5,
        review: "Excellent service! The AC was not cooling and they fixed it same day. Technician was professional and transparent about pricing. Highly satisfied!",
        date: "10 Jan 2025",
        avatar: "RS",
        color: "bg-blue-600",
        verified: true,
    },
    {
        name: "Priya Verma",
        location: "Vijay Nagar, Prayagraj",
        service: "Washing Machine Repair",
        rating: 5,
        review: "My washing machine drum stopped working. Gautam Electricals fixed it in 2 hours at a very reasonable price. Will definitely call again!",
        date: "15 Feb 2025",
        avatar: "PV",
        color: "bg-pink-500",
        verified: true,
    },
    {
        name: "Amit Patel",
        location: "Arera Colony, Bhopal",
        service: "Refrigerator Repair",
        rating: 5,
        review: "Fridge was not cooling at all. They diagnosed the compressor issue and replaced it with a genuine part. Works perfectly now — great value!",
        date: "2 Mar 2025",
        avatar: "AP",
        color: "bg-green-600",
        verified: true,
    },
    {
        name: "Sneha Gupta",
        location: "Palasia, Prayagraj",
        service: "Geyser Installation",
        rating: 5,
        review: "Got a new geyser installed by Gautam Electricals. Very clean work, no mess, proper safety checks done. Professional team!",
        date: "18 Mar 2025",
        avatar: "SG",
        color: "bg-purple-600",
        verified: true,
    },
    {
        name: "Vikram Singh",
        location: "Kolar Road, Bhopal",
        service: "RO Service",
        rating: 5,
        review: "RO filter replacement done on time. Water quality is much better now. Technician explained everything clearly. Recommend to everyone!",
        date: "1 Apr 2025",
        avatar: "VS",
        color: "bg-orange-500",
        verified: true,
    },
    {
        name: "Neha Mishra",
        location: "Hoshangabad Road, Bhopal",
        service: "Microwave Repair",
        rating: 5,
        review: "Microwave stopped heating suddenly. They identified the magnetron issue and fixed it at a fair price within the same day. Great service!",
        date: "5 Apr 2025",
        avatar: "NM",
        color: "bg-teal-600",
        verified: true,
    },
    {
        name: "Suresh Kumar",
        location: "Scheme 54, Prayagraj",
        service: "AC Gas Refill",
        rating: 5,
        review: "AC was not cooling properly. Gas was low — they refilled it and also checked for leaks at no extra charge. AC is running perfectly now!",
        date: "12 Apr 2025",
        avatar: "SK",
        color: "bg-indigo-600",
        verified: true,
    },
];

const StarRating = ({ rating, size = 'text-sm' }) => {
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;
    return (
        <div className={`flex gap-0.5 text-amber-400 ${size}`}>
            {[...Array(full)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
            {half && <i className="fa-solid fa-star-half-stroke"></i>}
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
                const end = 4.9;
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

                <div className="text-center mb-10" data-aos="fade-up">
                    <span className="inline-flex items-center gap-2 bg-ac-primary/10 text-ac-primary text-[12px] font-bold px-4 py-1.5 rounded-full mb-3">
                        <i className="fa-solid fa-star text-xs"></i>
                        Verified Customer Reviews
                    </span>
                    <h2 className="text-3xl md:text-[38px] font-[900] text-ac-gray-dark mb-3 tracking-tight">
                        What Our <span className="text-ac-primary">Customers</span> Say
                    </h2>
                    <p className="text-ac-text-muted text-[14px] max-w-xl mx-auto mb-6">
                        Real reviews from real customers across Bhopal &amp; Prayagraj for all appliance services.
                    </p>

                    {/* Rating pill */}
                    <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm">
                        <StarRating rating={4.9} size="text-base" />
                        <span className="font-extrabold text-ac-gray-dark text-lg">{rating.toFixed(1)}</span>
                        <span className="text-ac-text-muted text-[12px] border-l border-gray-200 pl-3">Based on 500+ verified reviews</span>
                    </div>
                </div>

                <div className="relative group px-0 md:px-10">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={16}
                        loop={true}
                        centeredSlides={true}
                        autoplay={{ delay: 2800, disableOnInteraction: false }}
                        speed={600}
                        pagination={{ clickable: true, el: '.custom-pagination' }}
                        navigation={{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }}
                        breakpoints={{
                            640: { slidesPerView: 1.3, spaceBetween: 16 },
                            768: { slidesPerView: 2, centeredSlides: false },
                            1024: { slidesPerView: 3, centeredSlides: false },
                        }}
                        className="pb-14"
                    >
                        {testimonials.map((t, idx) => (
                            <SwiperSlide key={idx} className="h-auto">
                                {({ isActive }) => (
                                    <a
                                        href={`https://wa.me/919770816132?text=Hi%2C+I+saw+the+review+from+${encodeURIComponent(t.name)}+about+your+${encodeURIComponent(t.service)}+and+wanted+to+book!`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`h-full flex flex-col bg-white rounded-2xl p-5 relative transition-all duration-300 block
                                        ${isActive ? 'border-2 border-ac-primary shadow-[0_8px_32px_rgba(27,59,143,0.14)] scale-[1.02] z-10' : 'border border-gray-200 shadow-sm opacity-80'}`}
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <StarRating rating={t.rating} size="text-sm" />
                                            <span className="bg-ac-primary/10 text-ac-primary text-[10px] font-bold px-2.5 py-1 rounded-full border border-ac-primary/20">
                                                {t.service}
                                            </span>
                                        </div>

                                        <p className="text-ac-gray-dark text-[13.5px] leading-relaxed mb-4 flex-grow font-medium">
                                            "{t.review}"
                                        </p>

                                        <div className="border-t border-gray-100 pt-3 mt-auto">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-2.5">
                                                    <div className={`w-9 h-9 rounded-full ${t.color} text-white flex items-center justify-center font-bold text-xs shrink-0`}>
                                                        {t.avatar}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-ac-gray-dark text-[13px] leading-none">{t.name}</p>
                                                        <p className="text-[11px] text-ac-text-muted mt-0.5">{t.location}</p>
                                                    </div>
                                                </div>
                                                {t.verified && (
                                                    <span className="flex items-center gap-1 text-emerald-600 text-[10px] font-bold">
                                                        <i className="fa-solid fa-circle-check"></i> Verified
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-between mt-1.5">
                                                <span className="text-[11px] text-gray-400 flex items-center gap-1">
                                                    <i className="fa-regular fa-clock"></i> {t.date}
                                                </span>
                                                <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                                                    <i className="fa-solid fa-circle-check"></i> Service Done
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button className="swiper-prev absolute left-0 top-1/2 -translate-y-12 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-ac-gray-dark hover:bg-ac-primary hover:text-white transition-all z-20 hidden md:flex">
                        <i className="fa-solid fa-chevron-left text-sm"></i>
                    </button>
                    <button className="swiper-next absolute right-0 top-1/2 -translate-y-12 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-ac-gray-dark hover:bg-ac-primary hover:text-white transition-all z-20 hidden md:flex">
                        <i className="fa-solid fa-chevron-right text-sm"></i>
                    </button>

                    <div className="custom-pagination flex justify-center gap-2 mt-4"></div>
                </div>
            </div>
        </section>
    );
}
