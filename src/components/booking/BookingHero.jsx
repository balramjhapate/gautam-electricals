import React from 'react';
import Link from 'next/link';

const WHATSAPP_BOOKING_URL = 'https://wa.me/919770816132?text=Hi,%20I%20want%20to%20book%20an%20AC%20service%20on%20WhatsApp.';

export default function BookingHero() {
    return (
        <section className="bg-gradient-to-r from-[#4433ff] to-[#3a84fe] py-20 pb-32">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                {/* Breadcrumb */}
                <div className="flex items-center justify-center gap-2 text-white/80 text-[13px] font-medium mb-6" data-aos="fade-down">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-white">Book Service</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-[32px] md:text-[42px] font-bold text-white mb-4 tracking-tight leading-tight" data-aos="fade-up" data-aos-delay="100">
                    Book Your AC Service
                </h1>

                {/* Subtitle */}
                <p className="text-white/90 text-[15px] md:text-[17px] font-medium max-w-2xl mx-auto leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="200">
                    Choose what works best for you: quick WhatsApp booking or detailed form.
                </p>

                {/* CTAs: Form vs WhatsApp */}
                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    data-aos="fade-up"
                    data-aos-delay="250"
                >
                    <a
                        href="#booking-form"
                        className="btn-primary w-full sm:w-auto px-8 py-3.5 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                    >
                        Fill Booking Form
                    </a>
                    <a
                        href={WHATSAPP_BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-5 sm:px-8 py-3 bg-[#25d366] text-white font-bold rounded-lg hover:bg-[#1ebe57] transition-colors inline-flex items-center justify-center gap-2 text-[14px] sm:text-[15px] leading-snug text-center"
                    >
                        <i className="fa-brands fa-whatsapp text-base sm:text-lg" />
                        <span className="block">
                            Don't want to fill form? Message direct on WhatsApp
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
