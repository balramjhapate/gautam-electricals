"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Footer() {
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            },
            { threshold: 0.1 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <footer id="footer" ref={footerRef} className="footer bg-[#2c3e50] text-white/85 pt-[60px] overflow-hidden">
            <div className="max-w-container">
                <div className="footer-grid grid grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

                    {/* Column 1: Company Info */}
                    <div className="footer-col group col-span-2 lg:col-span-1">
                        <div className="footer-logo flex items-center gap-2 text-xl font-bold text-white mb-3">
                            <i className="fa-solid fa-wrench text-ac-primary"></i>
                            AC REPAIR BHOPAL & INDORE
                        </div>
                        <p className="footer-tagline text-sm text-white/60 mb-3 italic">
                            "Your trusted AC repair partner since 2014"
                        </p>
                        <p className="footer-desc text-sm leading-relaxed mb-5">
                            Professional AC repair, servicing, and installation across Bhopal & Indore with certified technicians and 24/7 emergency support.
                        </p>
                        <div className="social-icons flex gap-3 mt-5">
                            <a href="https://www.facebook.com/profile.php?id=61577739039641&sk=reels_tab" target="_blank" rel="noopener noreferrer" className="social-icon fb w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-500 hover:bg-[#1877f2] hover:rotate-[360deg] hover:scale-110">
                                <i className="fa-brands fa-facebook-f text-sm"></i>
                            </a>
                            <a href="https://www.instagram.com/acservice_indore_bhopal/" target="_blank" rel="noopener noreferrer" className="social-icon ig w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-500 hover:bg-[#e1306c] hover:rotate-[360deg] hover:scale-110">
                                <i className="fa-brands fa-instagram text-sm"></i>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-heading text-white text-base font-bold mb-5">Quick Links</h4>
                        <ul className="footer-links space-y-2.5">
                            <li><Link href="/" className="text-white/70 hover:text-ac-primary transition-colors text-sm">Home</Link></li>
                            <li><Link href="/services" className="text-white/70 hover:text-ac-primary transition-colors text-sm">Services</Link></li>
                            <li><Link href="/#coverage" className="text-white/70 hover:text-ac-primary transition-colors text-sm">Coverage Areas</Link></li>
                            <li><Link href="/#amc-comparison" className="text-white/70 hover:text-ac-primary transition-colors text-sm">AMC Plans</Link></li>
                            <li><Link href="/#testimonials" className="text-white/70 hover:text-ac-primary transition-colors text-sm">Testimonials</Link></li>
                            <li><Link href="/about" className="text-white/70 hover:text-ac-primary transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/contact" className="text-white/70 hover:text-ac-primary transition-colors text-sm">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Our Services */}
                    <div className="footer-col">
                        <h4 className="footer-heading text-white text-base font-bold mb-5">Our Services</h4>
                        <ul className="footer-links space-y-2.5">
                            <li><Link href="/services" className="text-white/70 hover:text-ac-primary transition-colors text-sm">AC Maintenance</Link></li>
                            <li><Link href="/services" className="text-white/70 hover:text-ac-primary transition-colors text-sm">AC Repair</Link></li>
                            <li><Link href="/services" className="text-white/70 hover:text-ac-primary transition-colors text-sm">AC Installation</Link></li>
                            <li><Link href="/services" className="text-white/70 hover:text-ac-primary transition-colors text-sm">Deep AC Cleaning</Link></li>
                            <li><Link href="/services" className="text-white/70 hover:text-ac-primary transition-colors text-sm">Gas Refilling</Link></li>
                            <li><Link href="/services" className="text-white/70 hover:text-ac-primary transition-colors text-sm">Emergency Service</Link></li>
                            <li><Link href="/#amc-comparison" className="text-white/70 hover:text-ac-primary transition-colors text-sm">AMC Plans</Link></li>
                            <li><Link href="/services" className="text-white/70 hover:text-ac-primary transition-colors text-sm">Commercial Services</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div className="footer-col col-span-2 lg:col-span-1">
                        <h4 className="footer-heading text-white text-base font-bold mb-5">Contact Us</h4>
                        <ul className="footer-contact space-y-4">
                            <li className="flex items-start gap-3">
                                <i className="fa-solid fa-phone text-ac-primary mt-1"></i>
                                <div className="flex flex-col">
                                    <a href="tel:+918889539174" onClick={() => { if(typeof window !== 'undefined' && typeof window.gtag === 'function') window.gtag('event', 'call_click', {event_category: 'contact', event_label: 'phone_call'}); }} className="text-sm hover:text-ac-primary transition-colors font-medium">Phone: +91 8889539174</a>
                                    <a href="tel:+918889539174" onClick={() => { if(typeof window !== 'undefined' && typeof window.gtag === 'function') window.gtag('event', 'call_click', {event_category: 'contact', event_label: 'phone_call'}); }} className="text-xs text-ac-red font-bold uppercase mt-1">🚨 Emergency: +91 8889539174</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="fa-brands fa-whatsapp text-[#10b981]"></i>
                                <a href="https://wa.me/918889539174" target="_blank" rel="noopener noreferrer" onClick={() => { if(typeof window !== 'undefined' && typeof window.gtag === 'function') window.gtag('event', 'whatsapp_click', {event_category: 'contact', event_label: 'whatsapp'}); }} className="text-sm hover:text-ac-primary transition-colors">WhatsApp: +91 8889539174</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="fa-solid fa-envelope text-white/70"></i>
                                <a href="mailto:bhopalservice998@gmail.com" className="text-sm hover:text-ac-primary transition-colors break-all">bhopalservice998@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fa-solid fa-location-dot text-ac-red mt-1"></i>
                                <div className="text-sm leading-relaxed">
                                    <p>Nariyal Kheda, Near DIG Bungalow, Old Bhopal</p>
                                    <p>Madhya Pradesh, India</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fa-regular fa-clock text-ac-primary mt-1"></i>
                                <div className="text-xs opacity-80 leading-relaxed">
                                    <p>Mon–Sun: 8 AM – 9 PM</p>
                                    <p className="text-ac-red font-bold">Emergency: 24/7</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Footer Bottom Bar */}
            <div className="footer-bottom border-t border-white/10 py-5 mt-10">
                <div className="max-w-container flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="text-[12px] text-white/50 text-center md:text-left">
                        © {new Date().getFullYear()} AC Repair Bhopal & Indore. All rights reserved.
                    </span>
                    <div className="footer-legal flex gap-5 text-[12px] text-white/50">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
                        <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
