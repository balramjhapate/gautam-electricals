"use client";
import React, { useState } from 'react';

const WHATSAPP_NUMBER = '918889539174';

export default function BookingForm() {
    const [formData, setFormData] = useState({
        fullName: '', phone: '', serviceType: 'AC Service'
    });

    const update = (key, value) => setFormData(prev => ({ ...prev, [key]: value }));

    const buildWhatsAppMessage = () => {
        const lines = [
            '*🔧 New AC Service Booking*',
            '',
            '*Customer Details:*',
            '• Name: ' + (formData.fullName || '-'),
            '• Phone: ' + (formData.phone || '-'),
            '',
            '*Service Required:*',
            '• Type: ' + formData.serviceType
        ];
        return lines.join('\n');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.fullName?.trim() || !formData.phone?.trim()) {
            alert('Please enter your Full Name and Phone Number.');
            return;
        }
        
        // Track booking event before redirect
        if(typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'whatsapp_click', {event_category: 'booking', event_label: 'whatsapp_form_submit'});
        }

        const message = encodeURIComponent(buildWhatsAppMessage());
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    };

    return (
        <section id="booking-form" className="pb-20 -mt-24 relative z-10 px-4">
            <div className="max-w-[500px] mx-auto bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 md:p-10">

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Book Your AC Repair</h2>
                    <p className="text-gray-500 text-[14.5px]">Provide your details below and we will connect with you on WhatsApp instantly.</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Full Name</label>
                        <input type="text" value={formData.fullName} onChange={(e) => update('fullName', e.target.value)} placeholder="Full name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-[14px] text-gray-900 placeholder:text-gray-500 focus:bg-white focus:outline-none focus:border-ac-primary transition-all" />
                    </div>
                    <div>
                        <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                        <input type="tel" value={formData.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-[14px] text-gray-900 placeholder:text-gray-500 focus:bg-white focus:outline-none focus:border-ac-primary transition-all" required />
                    </div>

                    <div>
                        <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Service Type</label>
                        <select value={formData.serviceType} onChange={(e) => update('serviceType', e.target.value)} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-[14px] text-gray-900 focus:bg-white focus:outline-none focus:border-ac-primary transition-all">
                            <option value="AC Service">AC Service</option>
                            <option value="Repair">Repair</option>
                            <option value="Gas Refill">Gas Refill</option>
                            <option value="Installation">Installation</option>
                        </select>
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full bg-[#25d366] hover:bg-[#1ebe57] text-white font-bold py-3.5 rounded-lg text-[15px] transition-colors shadow flex items-center justify-center gap-2"
                        >
                            <i className="fa-brands fa-whatsapp text-lg" />
                            WhatsApp pe Book Karo
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
