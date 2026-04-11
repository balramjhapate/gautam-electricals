"use client";
import React, { useState } from 'react';

const WHATSAPP_NUMBER = '918889539174';

export default function LandingForm() {
    const [formData, setFormData] = useState({
        name: '', phone: '', problem: ''
    });

    const update = (key, value) => setFormData(prev => ({ ...prev, [key]: value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.name?.trim() || !formData.phone?.trim()) {
            alert('Kripya apna Naam aur Phone Number daalein.');
            return;
        }

        // Track form submission
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'form_submit', { event_category: 'lead', event_label: 'landing_form' });
        }

        const message = encodeURIComponent(`Hi, mera naam ${formData.name.trim()} hai.\nProblem: ${formData.problem.trim() || 'AC Service'}\nNumber: ${formData.phone.trim()}`);
        
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    };

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 md:p-7 max-w-[500px] mx-auto w-full mb-10 relative z-10">
            <div className="text-center mb-5">
                <h2 className="text-[22px] md:text-2xl font-bold text-gray-900 mb-1">Free AC Checkup Book Karo — <span className="text-blue-600 block sm:inline">Same Day Available</span></h2>
                <p className="text-gray-500 text-[14px]">Sirf 30 second mein booking ho jayegi</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input 
                        type="text" 
                        value={formData.name} 
                        onChange={(e) => update('name', e.target.value)} 
                        placeholder="Aapka naam likhein" 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 transition-all" 
                        required 
                    />
                </div>
                <div>
                    <input 
                        type="tel" 
                        value={formData.phone} 
                        onChange={(e) => update('phone', e.target.value)} 
                        placeholder="Mobile number" 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 transition-all" 
                        required 
                    />
                </div>
                <div>
                    <textarea 
                        rows="2" 
                        value={formData.problem} 
                        onChange={(e) => update('problem', e.target.value)} 
                        placeholder="Kya problem hai? Jaise — AC thanda nahi kar raha, gas refill, service, repair, installation..." 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 transition-all resize-none"
                    ></textarea>
                </div>
                <div className="pt-2">
                    <button 
                        type="submit" 
                        className="w-full bg-[#25d366] hover:bg-[#1ebd57] text-white font-bold py-3.5 rounded-lg text-[16px] shadow-sm transform transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                        <i className="fa-brands fa-whatsapp text-xl"></i> WhatsApp pe Book Karo ✓
                    </button>
                </div>
            </form>
        </div>
    );
}
