"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function GELogo({ size = 'md' }) {
    const s = size === 'sm' ? 32 : 38;
    return (
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Gautam Electricals Home">
            <svg width={s} height={s} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <rect width="40" height="40" rx="10" fill="#1B3B8F" />
                <polygon points="24,4 12,22 20,22 16,36 28,18 20,18" fill="#f97316" />
            </svg>
            <div className="flex flex-col leading-none">
                <span className="font-extrabold text-ac-gray-dark text-[16px] tracking-tight group-hover:text-ac-primary transition-colors">
                    Gautam
                </span>
                <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-ge-accent">
                    Electricals
                </span>
            </div>
        </Link>
    );
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Booking', href: '/booking' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={`w-full bg-white/95 backdrop-blur-md z-[999] sticky top-0 border-b border-gray-100 transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
            <div className="max-w-container mx-auto flex items-center justify-between h-[56px] lg:h-[64px] px-4">

                {/* Logo */}
                <GELogo />

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-0.5">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`px-4 py-1.5 text-[14px] font-medium rounded-lg transition-all ${pathname === link.href
                                    ? 'text-ac-primary bg-ac-primary/8'
                                    : 'text-ac-gray-dark hover:text-ac-primary hover:bg-ac-primary/5'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Right Actions */}
                <div className="hidden md:flex items-center gap-2.5">
                    <a
                        href="tel:+919770816132"
                        className="flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-[13.5px] px-4 py-2 rounded-lg shadow-sm hover:-translate-y-0.5 transition-all active:scale-95"
                    >
                        <i className="fa-solid fa-phone text-xs"></i>
                        97708 16132
                    </a>
                    <Link
                        href="/booking"
                        className="flex items-center gap-1.5 bg-ac-primary hover:bg-ac-primary-dark text-white font-semibold text-[13.5px] px-4 py-2 rounded-lg shadow-sm hover:-translate-y-0.5 transition-all active:scale-95"
                    >
                        <i className="fa-regular fa-calendar-check text-xs"></i>
                        Book Now
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden p-2 text-ac-gray-dark rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${menuOpen ? 'max-h-[420px] border-t border-gray-100 shadow-lg' : 'max-h-0'}`}>
                <div className="px-5 py-4 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={`py-3 px-4 rounded-xl font-semibold text-[15px] transition-all ${pathname === link.href
                                ? 'text-ac-primary bg-ac-primary/8'
                                : 'text-ac-gray-dark hover:bg-gray-50'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex gap-2 mt-3 pt-3 border-t border-gray-100">
                        <a
                            href="tel:+919770816132"
                            className="flex-1 flex items-center justify-center gap-2 bg-ac-primary text-white py-3.5 rounded-xl font-bold text-[14px] active:scale-95 transition-all"
                        >
                            <i className="fa-solid fa-phone"></i> Call Now
                        </a>
                        <a
                            href="https://wa.me/919770816132?text=Hi%2C+I+need+appliance+service!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-xl font-bold text-[14px] active:scale-95 transition-all"
                        >
                            <i className="fa-brands fa-whatsapp text-lg"></i> WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
