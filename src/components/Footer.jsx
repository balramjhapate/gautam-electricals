"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const GELogoFooter = () => (
    <div className="flex items-center gap-3">
        <svg width="38" height="38" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <rect width="40" height="40" rx="10" fill="#1B3B8F" />
            <polygon points="24,4 12,22 20,22 16,36 28,18 20,18" fill="#f97316" />
        </svg>
        <div className="flex flex-col leading-none">
            <span className="font-extrabold text-white text-[18px] tracking-tight">Gautam</span>
            <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-ge-accent">Electricals</span>
        </div>
    </div>
);

export default function Footer() {
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
            { threshold: 0.1 }
        );
        if (footerRef.current) observer.observe(footerRef.current);
        return () => { if (footerRef.current) observer.unobserve(footerRef.current); };
    }, []);

    return (
        <footer id="footer" ref={footerRef} className="footer bg-[#0f172a] text-white/80 pt-[60px] overflow-hidden">

            {/* Visiting Card Banner */}
            <div className="border-b border-white/10 pb-10 mb-0">
                <div className="max-w-container mx-auto px-4">
                    <div
                        className="rounded-2xl overflow-hidden relative"
                        style={{ background: 'linear-gradient(120deg, #0a1744 0%, #1B3B8F 55%, #1e60b5 100%)' }}
                    >
                        {/* Decorative blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none"></div>

                        <div className="relative z-10 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
                            {/* Left: Card info */}
                            <div>
                                <p className="text-white/50 text-[11px] font-semibold uppercase tracking-widest mb-1">Proprietor</p>
                                <h3 className="text-white text-[20px] font-[900] mb-1">Avnish Gautam</h3>
                                <p
                                    className="font-[900] text-[28px] sm:text-[32px] leading-tight mb-3"
                                    style={{ color: '#ef4444' }}
                                >
                                    GAUTAM ELECTRICALS
                                </p>
                                <p className="text-white/70 text-[13px] mb-3">
                                    A/C · Washing Machine · Microwave · Fridge · Water Purifier (RO) · Geyser Repair &amp; Fitting
                                </p>
                                <div className="flex items-start gap-1.5 text-white/60 text-[12px] mb-1">
                                    <i className="fa-solid fa-location-dot text-ge-accent mt-0.5 text-xs"></i>
                                    <span>Near Gopal Mandir Teelajamalpura, <strong className="text-white">Bhopal</strong></span>
                                </div>
                                <p className="text-white/40 text-[11px] mt-1">GSTIN: 230MVPG9714D1ZV</p>
                            </div>

                            {/* Right: Contact */}
                            <div className="flex flex-col gap-3 shrink-0">
                                <a href="tel:+919770816132" className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3 hover:bg-white/15 transition-all group">
                                    <i className="fa-brands fa-whatsapp text-[#25D366] text-xl"></i>
                                    <div>
                                        <p className="text-white/50 text-[10px] font-semibold">Call / WhatsApp</p>
                                        <p className="text-white font-extrabold text-[16px]">9770816132</p>
                                    </div>
                                </a>
                                <a href="mailto:gautamelectricals.online@gmail.com" className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3 hover:bg-white/15 transition-all group">
                                    <i className="fa-solid fa-envelope text-white/60 text-lg"></i>
                                    <div>
                                        <p className="text-white/50 text-[10px] font-semibold">Email</p>
                                        <p className="text-white font-semibold text-[12px]">gautamelectricals.online@gmail.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main footer grid */}
            <div className="max-w-container mx-auto px-4 pt-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                    {/* Column 1: Brand */}
                    <div className="col-span-2 lg:col-span-1">
                        <GELogoFooter />
                        <p className="text-[13px] text-white/50 mt-3 mb-4 italic">"Your trusted appliance repair partner"</p>
                        <p className="text-[13px] text-white/65 leading-relaxed mb-5">
                            Expert repair for AC, Washing Machine, Refrigerator, Microwave, Geyser &amp; RO across Bhopal &amp; Prayagraj.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { href: 'https://wa.me/919770816132', icon: 'fa-brands fa-whatsapp', hover: 'hover:bg-[#25D366]' },
                                { href: 'https://www.facebook.com', icon: 'fa-brands fa-facebook-f', hover: 'hover:bg-[#1877f2]' },
                                { href: 'https://www.instagram.com', icon: 'fa-brands fa-instagram', hover: 'hover:bg-[#e1306c]' },
                            ].map((s, i) => (
                                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                                    className={`w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-400 ${s.hover} hover:rotate-[360deg] hover:scale-110`}>
                                    <i className={`${s.icon} text-sm`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-white text-[13px] font-bold mb-5 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'Home', href: '/' },
                                { label: 'Services', href: '/services' },
                                { label: 'Book Service', href: '/booking' },
                                { label: 'Coverage Areas', href: '/#coverage' },
                                { label: 'AMC Plans', href: '/#amc-comparison' },
                                { label: 'About Us', href: '/about' },
                                { label: 'Contact Us', href: '/contact' },
                            ].map((l) => (
                                <li key={l.href}>
                                    <Link href={l.href} className="text-[13px] text-white/55 hover:text-ge-accent transition-colors flex items-center gap-1.5 group">
                                        <i className="fa-solid fa-chevron-right text-[9px] text-ge-accent/40 group-hover:text-ge-accent transition-colors"></i>
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h4 className="text-white text-[13px] font-bold mb-5 uppercase tracking-wider">Our Services</h4>
                        <ul className="space-y-2.5">
                            {['AC Repair & Service', 'AC Gas Refilling', 'Washing Machine Repair', 'Refrigerator Repair', 'Geyser Repair & Fitting', 'RO Water Purifier', 'Microwave Repair', 'AMC Plans'].map((s) => (
                                <li key={s}>
                                    <Link href="/services" className="text-[13px] text-white/55 hover:text-ge-accent transition-colors flex items-center gap-1.5 group">
                                        <i className="fa-solid fa-chevron-right text-[9px] text-ge-accent/40 group-hover:text-ge-accent transition-colors"></i>
                                        {s}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="col-span-2 lg:col-span-1">
                        <h4 className="text-white text-[13px] font-bold mb-5 uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-3.5">
                            <li className="flex items-start gap-3">
                                <i className="fa-solid fa-phone text-ge-accent mt-1 text-sm"></i>
                                <div>
                                    <a href="tel:+919770816132" className="text-[13px] text-white/80 hover:text-white font-semibold block">+91 97708 16132</a>
                                    <p className="text-[11px] text-ge-accent font-bold uppercase mt-0.5">Emergency: 24/7</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="fa-brands fa-whatsapp text-[#25D366] text-sm"></i>
                                <div>
                                    <a href="https://wa.me/919770816132" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/70 hover:text-white transition-colors block">9770816132</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="fa-solid fa-envelope text-white/40 text-sm"></i>
                                <a href="mailto:gautamelectricals.online@gmail.com" className="text-[12px] text-white/65 hover:text-white transition-colors break-all">
                                    gautamelectricals.online@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fa-solid fa-location-dot text-ge-accent mt-1 text-sm"></i>
                                <p className="text-[13px] text-white/65 leading-relaxed">
                                    Near Gopal Mandir Teelajamalpura,<br />
                                    <strong className="text-white">Bhopal</strong>, Madhya Pradesh
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fa-regular fa-clock text-ac-primary-light mt-1 text-sm"></i>
                                <div className="text-[12px] text-white/60 leading-relaxed">
                                    <p>Mon–Sat: 9 AM – 8 PM</p>
                                    <p>Sunday: 10 AM – 6 PM</p>
                                    <p className="text-ge-accent font-bold">Emergency: 24/7</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Google Review CTA */}
                <div className="border-t border-white/10 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        {/* QR Code */}
                        <div className="bg-white p-2 rounded-xl shadow-lg flex-shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=https://g.page/r/CQLMo98tOIjPEAE/review&bgcolor=ffffff&color=1B3B8F"
                                alt="Google Review QR"
                                width={90}
                                height={90}
                                className="rounded-lg"
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-1.5 mb-1">
                                {[1,2,3,4,5].map(s => (
                                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#FBBC04"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                                ))}
                                <span className="text-white/60 text-[12px] ml-1">Google Reviews</span>
                            </div>
                            <p className="text-white font-bold text-[15px] mb-0.5">Happy with our service?</p>
                            <p className="text-white/55 text-[12px]">Scan QR or click to leave us a review</p>
                        </div>
                    </div>
                    <a
                        href="https://g.page/r/CQLMo98tOIjPEAE/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 bg-white text-[#1B3B8F] font-extrabold text-[14px] px-6 py-3 rounded-xl hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-lg active:scale-95 flex-shrink-0"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        Rate Us on Google
                    </a>
                </div>

                {/* Appliance tags */}
                <div className="border-t border-white/10 py-5 flex flex-wrap gap-2 justify-center">
                    {['AC', 'Washing Machine', 'Refrigerator', 'Geyser', 'RO Purifier', 'Microwave'].map((a) => (
                        <span key={a} className="text-[11px] font-bold text-white/35 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                            {a} Repair — Bhopal &amp; Prayagraj
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom border-t border-white/10 py-5">
                <div className="max-w-container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="text-[12px] text-white/35 text-center md:text-left">
                        © {new Date().getFullYear()} Gautam Electricals — Avnish Gautam. All rights reserved.
                    </span>
                    <div className="flex gap-5 text-[12px] text-white/35">
                        <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
                        <Link href="/terms-conditions" className="hover:text-white/60 transition-colors">Terms</Link>
                        <Link href="/disclaimer" className="hover:text-white/60 transition-colors">Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
