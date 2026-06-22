import React from 'react';
import Link from 'next/link';

const WHATSAPP_URL = 'https://wa.me/919770816132?text=Hi,%20I%20want%20to%20talk%20about%20AC%20service.';

export default function ContactBottomCTA() {
    return (
        <section className="bg-[#1cc260] py-20">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                <h2 className="text-[28px] md:text-[34px] font-bold text-white mb-4" data-aos="fade-up">
                    Ready to Get Started?
                </h2>
                <p className="text-[16px] text-white/90 font-medium mb-10 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                    Don't wait for your AC problems to get worse. Contact us today for professional, reliable service.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
                    <Link href="/booking" className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                        Book Service Today
                    </Link>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
                    >
                        Contact on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
