"use client";
import React, { useState, useEffect } from 'react';

export default function FloatingActions() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggle = () => setIsVisible(window.scrollY > 400);
        window.addEventListener('scroll', toggle, { passive: true });
        return () => window.removeEventListener('scroll', toggle);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <>
            {/* ── Floating WhatsApp — visible on ALL screens ── */}
            {/* Floating WhatsApp */}
            <div style={{ position: 'fixed', bottom: '80px', right: '16px', zIndex: 99999 }}>
                <style>{`
                    @keyframes wa-ping {
                        0% { transform: scale(1); opacity: 0.6; }
                        100% { transform: scale(1.9); opacity: 0; }
                    }
                    @keyframes wa-ping2 {
                        0% { transform: scale(1); opacity: 0.35; }
                        100% { transform: scale(2.4); opacity: 0; }
                    }
                    @keyframes wa-bounce {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-6px); }
                    }
                    .wa-float-btn:hover .wa-tooltip { opacity: 1; transform: translateX(0); pointer-events: auto; }
                    .wa-float-btn:hover .wa-icon { transform: scale(1.12) rotate(-8deg); }
                    .wa-float-btn:active .wa-icon { transform: scale(0.93); }
                `}</style>

                <a
                    href="https://wa.me/919770816132?text=Hi%2C+I+need+appliance+repair+service!"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    className="wa-float-btn"
                    style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', position: 'relative' }}
                >
                    {/* Tooltip */}
                    <span
                        className="wa-tooltip"
                        style={{
                            position: 'absolute', right: '68px', top: '50%', transform: 'translateX(8px) translateY(-50%)',
                            background: '#111', color: '#fff', fontSize: '12px', fontWeight: 700,
                            padding: '6px 12px', borderRadius: '8px', whiteSpace: 'nowrap',
                            opacity: 0, transition: 'all 0.2s ease', pointerEvents: 'none',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
                        }}
                    >
                        💬 Chat with us
                        <span style={{
                            position: 'absolute', right: '-5px', top: '50%', transform: 'translateY(-50%)',
                            width: 0, height: 0, borderTop: '5px solid transparent',
                            borderBottom: '5px solid transparent', borderLeft: '5px solid #111',
                        }} />
                    </span>

                    {/* Ping rings */}
                    <span style={{
                        position: 'absolute', inset: 0, borderRadius: '50%',
                        backgroundColor: '#25D366',
                        animation: 'wa-ping 1.8s ease-out infinite',
                    }} />
                    <span style={{
                        position: 'absolute', inset: 0, borderRadius: '50%',
                        backgroundColor: '#25D366',
                        animation: 'wa-ping2 1.8s ease-out infinite 0.6s',
                    }} />

                    {/* Main button */}
                    <span
                        className="wa-icon"
                        style={{
                            position: 'relative', zIndex: 2,
                            width: '56px', height: '56px', borderRadius: '50%',
                            backgroundColor: '#25D366',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 4px 20px rgba(37,211,102,0.55)',
                            animation: 'wa-bounce 3s ease-in-out infinite',
                            transition: 'transform 0.2s ease',
                        }}
                    >
                        <svg viewBox="0 0 32 32" width="30" height="30" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.824.738 5.474 2.027 7.774L0 32l8.437-2.01A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.771-1.854l-.486-.29-5.008 1.194 1.224-4.878-.318-.502A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.353-1.161-2.718-1.293-.365-.133-.63-.199-.895.199-.265.398-1.028 1.293-1.26 1.558-.232.265-.464.299-.862.1-.398-.2-1.682-.62-3.203-1.976-1.184-1.056-1.983-2.36-2.215-2.758-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.697.199-.233.265-.399.398-.664.133-.266.066-.499-.033-.698-.1-.199-.895-2.157-1.227-2.954-.323-.776-.651-.671-.895-.683l-.762-.013c-.265 0-.696.1-1.061.499-.365.398-1.393 1.36-1.393 3.317s1.426 3.847 1.625 4.112c.199.265 2.806 4.283 6.797 6.006.95.41 1.692.655 2.27.838.954.303 1.823.26 2.51.158.765-.114 2.353-.962 2.685-1.89.332-.928.332-1.724.232-1.89-.099-.166-.364-.265-.762-.464z"/>
                        </svg>
                    </span>
                </a>
            </div>

            {/* ── Back to Top — desktop only ── */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-[130px] right-5 w-11 h-11 bg-ac-primary text-white rounded-full hidden md:flex items-center justify-center cursor-pointer z-[9997] shadow-lg transition-all duration-300 hover:bg-ac-primary-dark group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}`}
                aria-label="Back to top"
            >
                <i className="fa-solid fa-chevron-up transition-transform duration-200 group-hover:-translate-y-0.5"></i>
            </button>

            {/* ── Google Review badge — desktop only ── */}
            <a
                href="https://g.page/r/CQLMo98tOIjPEAE/review"
                target="_blank"
                rel="noopener noreferrer"
                title="Rate us on Google"
                className="hidden md:flex fixed bottom-[240px] left-5 z-[9997] flex-col items-center gap-1 bg-white border border-gray-200 rounded-xl px-3 py-2.5 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all group"
            >
                <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-[9px] font-bold text-gray-600 leading-none">Review</span>
                <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => (
                        <svg key={s} width="8" height="8" viewBox="0 0 24 24" fill="#FBBC04"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                </div>
            </a>

            {/* ── Call buttons — desktop only ── */}
            <a
                href="tel:+919770816132"
                className="hidden md:flex fixed bottom-24 left-5 w-[56px] h-[56px] bg-ac-primary rounded-full items-center justify-center text-white text-[20px] z-[9998] shadow-[0_4px_16px_rgba(27,59,143,0.4)] hover:scale-110 hover:shadow-[0_8px_24px_rgba(27,59,143,0.5)] transition-all duration-300"
                aria-label="Call: 9770816132"
                title="Call: +91 97708 16132"
            >
                <i className="fa-solid fa-phone"></i>
            </a>

            <a
                href="tel:+919644494715"
                className="hidden md:flex fixed bottom-[168px] left-5 w-[56px] h-[56px] bg-[#f97316] rounded-full items-center justify-center text-white text-[20px] z-[9998] shadow-[0_4px_16px_rgba(249,115,22,0.4)] hover:scale-110 hover:shadow-[0_8px_24px_rgba(249,115,22,0.5)] transition-all duration-300"
                aria-label="Call: 9644494715"
                title="Call: +91 96444 94715"
            >
                <i className="fa-solid fa-phone"></i>
            </a>
        </>
    );
}
