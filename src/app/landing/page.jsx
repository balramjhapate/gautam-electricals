import React from 'react';
import Image from 'next/image';

export const metadata = {
    title: "AC Repair Bhopal | Same Day Service ₹499 | Call 8889539174",
    description: "AC kharab ho gayi? Bhopal mein same day AC repair service ₹499 se. Gas refill ₹999. 30 min mein technician. Call ya WhatsApp: 8889539174",
    alternates: {
        canonical: "https://ac-service-bhopal-indore.vercel.app/landing",
    },
    robots: {
        index: false,
        follow: false
    }
};

export default function LandingPage() {
    return (
        <div className="bg-white min-h-screen font-sans pb-20 md:pb-0">
            {/* TOP BAR (red background) */}
            <div className="bg-red-600 text-white text-center py-2 px-4 text-sm font-bold tracking-wide">
                🔥 Summer Special — AC Service Sirf ₹499 | Aaj Book Karo, Kal Service
            </div>

            {/* HERO SECTION */}
            <section className="px-4 py-10 md:py-16 text-center max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                    AC Repair & Service in Bhopal | <span className="text-blue-600">Same Day Service</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium">
                    Certified technicians • ₹499 se shuru • 30 min mein aayenge
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10 w-full max-w-lg mx-auto">
                    <a
                        href="tel:+918889539174"
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg text-lg flex items-center justify-center gap-2 transition-transform transform hover:scale-105"
                    >
                        <i className="fa-solid fa-phone"></i> Abhi Call Karo — 8889539174
                    </a>
                    <a
                        href="https://wa.me/918889539174?text=Hi,%20AC%20service%20chahiye%20Bhopal%20mein"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-4 px-8 rounded-lg shadow text-lg flex items-center justify-center gap-2 transition-transform transform hover:scale-105"
                    >
                        <i className="fa-brands fa-whatsapp text-xl"></i> WhatsApp pe Book Karo
                    </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm md:text-base font-semibold text-gray-700 bg-gray-50 py-4 px-2 rounded-xl border border-gray-200 shadow-sm">
                    <span className="flex items-center gap-1.5"><i className="fa-solid fa-circle-check text-green-500"></i> Same Day Service</span>
                    <span className="flex items-center gap-1.5"><i className="fa-solid fa-circle-check text-green-500"></i> ₹499 se Shuru</span>
                    <span className="flex items-center gap-1.5"><i className="fa-solid fa-circle-check text-green-500"></i> 10+ Saal Experience</span>
                    <span className="flex items-center gap-1.5"><i className="fa-solid fa-circle-check text-green-500"></i> 5000+ Customers</span>
                </div>
            </section>

            {/* PRICING SECTION */}
            <section className="bg-blue-50 py-12 px-4 border-y border-blue-100">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">Affordable Pricing</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Box 1 */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">AC Basic Service</h3>
                            <div className="text-4xl font-extrabold text-blue-600 mb-4">₹499</div>
                            <ul className="text-sm text-gray-600 mb-6 space-y-2 text-left">
                                <li><i className="fa-solid fa-check text-green-500 mr-2"></i>Filter cleaning</li>
                                <li><i className="fa-solid fa-check text-green-500 mr-2"></i>Water wash</li>
                                <li><i className="fa-solid fa-check text-green-500 mr-2"></i>Cooling check</li>
                            </ul>
                            <a href="tel:+918889539174" className="block w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">Call Now</a>
                        </div>
                        {/* Box 2 */}
                        <div className="bg-white p-6 rounded-xl shadow-xl border-2 border-blue-500 text-center relative transform md:-translate-y-2">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Most Popular</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Indoor + Outdoor Jet Wash</h3>
                            <div className="text-4xl font-extrabold text-blue-600 mb-4">₹699</div>
                            <ul className="text-sm text-gray-600 mb-6 space-y-2 text-left">
                                <li><i className="fa-solid fa-check text-green-500 mr-2"></i>High pressure foam wash</li>
                                <li><i className="fa-solid fa-check text-green-500 mr-2"></i>Deep cleaning</li>
                                <li><i className="fa-solid fa-check text-green-500 mr-2"></i>Performance optimization</li>
                            </ul>
                            <a href="tel:+918889539174" className="block w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">Call Now</a>
                        </div>
                        {/* Box 3 */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Gas Refill</h3>
                            <div className="text-4xl font-extrabold text-blue-600 mb-4">₹999</div>
                            <ul className="text-sm text-gray-600 mb-6 space-y-2 text-left">
                                <li><i className="fa-solid fa-check text-green-500 mr-2"></i>Leakage testing</li>
                                <li><i className="fa-solid fa-check text-green-500 mr-2"></i>Pure refrigerant gas</li>
                                <li><i className="fa-solid fa-check text-green-500 mr-2"></i>Optimal cooling setup</li>
                            </ul>
                            <a href="tel:+918889539174" className="block w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">Call Now</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-12 px-4 max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">Why Choose Us?</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-full"><i className="fa-solid fa-bolt text-xl"></i></div>
                        <div>
                            <h4 className="font-bold text-gray-800 mb-1">30 min response time</h4>
                            <p className="text-sm text-gray-500">Quick emergency support across the city.</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-full"><i className="fa-solid fa-wrench text-xl"></i></div>
                        <div>
                            <h4 className="font-bold text-gray-800 mb-1">Sab brands — LG, Voltas, Daikin, Blue Star</h4>
                            <p className="text-sm text-gray-500">Expertise on all major hardware.</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-full"><i className="fa-regular fa-calendar-check text-xl"></i></div>
                        <div>
                            <h4 className="font-bold text-gray-800 mb-1">Same day booking available</h4>
                            <p className="text-sm text-gray-500">We work around your schedule.</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-full"><i className="fa-solid fa-shield-halved text-xl"></i></div>
                        <div>
                            <h4 className="font-bold text-gray-800 mb-1">Satisfaction guarantee</h4>
                            <p className="text-sm text-gray-500">100% reliable service you can count on.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 SHORT REVIEWS */}
            <section className="bg-gray-50 py-12 px-4 border-y border-gray-200">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">What Our Customers Say</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex text-yellow-400 mb-3 text-sm">
                                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                            </div>
                            <p className="text-gray-700 italic mb-4 text-sm">"AC ki cooling wapas aa gayi, bahut badhiya service"</p>
                            <p className="font-bold text-sm text-gray-900">— Rahul, MP Nagar Bhopal</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex text-yellow-400 mb-3 text-sm">
                                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                            </div>
                            <p className="text-gray-700 italic mb-4 text-sm">"Same day aye, ₹699 mein poora service kiya"</p>
                            <p className="font-bold text-sm text-gray-900">— Priya, Vijay Nagar Indore</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex text-yellow-400 mb-3 text-sm">
                                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                            </div>
                            <p className="text-gray-700 italic mb-4 text-sm">"Bahut professional team hai"</p>
                            <p className="font-bold text-sm text-gray-900">— Amit, Arera Colony Bhopal</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="pb-24 pt-8 text-center text-gray-400 text-xs">
                © {new Date().getFullYear()} AC Repair. All rights reserved.
            </div>

            {/* BOTTOM CTA (sticky on mobile) */}
            <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-gray-200 md:hidden z-[9999] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex justify-center">
                <a
                    href="tel:+918889539174"
                    className="w-full bg-green-600 text-white font-bold py-3.5 rounded-lg text-center text-[16px] shadow-sm flex items-center justify-center gap-2"
                >
                    <i className="fa-solid fa-phone"></i> Call Now — Free Estimate
                </a>
            </div>
        </div>
    );
}
