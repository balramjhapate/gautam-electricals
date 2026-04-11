"use client";
import { useEffect } from 'react';

export default function GlobalClickTracker() {
    useEffect(() => {
        const handleClick = (e) => {
            const getLink = (el) => {
                while (el && el.tagName !== 'A') {
                    if (el === document.body) return null;
                    el = el.parentElement;
                }
                return el;
            };
            
            const a = getLink(e.target);
            if (!a) return;
            
            const href = a.getAttribute('href');
            if (!href) return;
            
            if (href.startsWith('tel:')) {
                if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                    window.gtag('event', 'call_click', { event_category: 'contact', event_label: 'phone_call' });
                }
            } else if (href.includes('wa.me')) {
                if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                    window.gtag('event', 'whatsapp_click', { event_category: 'contact', event_label: 'whatsapp' });
                }
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    return null;
}
