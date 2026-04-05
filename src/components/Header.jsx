"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [navbar, setNavbar] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Booking', href: '/booking' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav id="navbar" className={`w-full bg-white/95 backdrop-blur-md transition-all duration-300 z-[999] top-0 border-b border-gray-100 ${navbar ? 'fixed' : 'sticky shadow-sm'}`}>
            <div className="justify-between mx-auto max-w-container md:items-center md:flex h-[56px] lg:h-[64px]">

                {/* LOGO (Left) */}
                <div className="flex items-center justify-between w-full md:w-auto h-full px-4 md:px-0">
                    <Link href="/" className="flex items-center gap-2" data-aos="fade-in" data-aos-delay="100">
                        <div className="w-9 h-9 rounded-full bg-ac-primary/10 flex items-center justify-center text-ac-primary text-xl">
                            <i className="fa-solid fa-snowflake"></i>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="font-bold text-ac-gray-dark text-base tracking-tight">AC Repair</span>
                            <span className="text-ac-primary text-[9px] font-bold tracking-[0.15em] uppercase">Bhopal & Indore</span>
                        </div>
                    </Link>

                    {/* HAMBURGER ICON (Mobile) */}
                    <button
                        className="md:hidden p-2 text-ac-gray-dark"
                        onClick={() => setNavbar(!navbar)}
                        aria-label="Toggle Menu"
                    >
                        <i className={`fa-solid ${navbar ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
                    </button>
                </div>

                {/* CENTERED NAVIGATION (Desktop) — plain links, no pill container */}
                <div className="hidden md:flex flex-1 justify-center">
                    <ul className="flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <li key={link.href} data-aos="fade-in" data-aos-delay={100 * (index + 1)}>
                                <Link
                                    href={link.href}
                                    className={`px-4 py-1.5 text-[14px] font-medium transition-all ${pathname === link.href ? 'text-ac-primary' : 'text-ac-gray-dark hover:text-ac-primary'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT ACTIONS (Desktop) */}
                <div className="hidden md:flex items-center gap-5" data-aos="fade-in" data-aos-delay="600">
                    <a href="tel:+918889539174" className="text-ac-gray-dark font-medium text-[14px] hover:text-ac-primary transition-colors flex items-center gap-1.5">
                        <i className="fa-solid fa-phone text-xs opacity-70"></i> 8889539174
                    </a>
                    <Link href="/booking" className="bg-ac-primary text-white px-5 py-2 rounded-lg font-semibold text-[14px] shadow-sm hover:bg-ac-primary-dark hover:-translate-y-0.5 transition-all active:scale-95 flex items-center gap-2">
                        <i className="fa-regular fa-calendar-check text-xs"></i> Book Now
                    </Link>
                </div>
            </div>

            {/* MOBILE NAVIGATION (Simplified) */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${navbar ? 'max-h-[400px] border-t border-ac-border/20' : 'max-h-0'}`}>
                <div className="flex flex-col p-6 space-y-4 bg-white">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-lg font-semibold ${pathname === link.href ? 'text-ac-primary' : 'text-ac-gray-dark'}`}
                            onClick={() => setNavbar(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="tel:+918889539174" className="bg-ac-primary text-white text-center py-4 rounded-xl font-bold">Call Now</a>
                </div>
            </div>
        </nav>
    );
}
