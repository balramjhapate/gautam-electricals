"use client";
import React, { useState } from 'react';

const WHATSAPP_NUMBER = '918889539174';
const WHATSAPP_BOOKING_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I%20want%20to%20book%20an%20AC%20service%20without%20filling%20the%20form.`;

export default function BookingForm() {
    const [selectedService, setSelectedService] = useState('AC Maintenance');
    const [urgency, setUrgency] = useState('Normal');
    const [formData, setFormData] = useState({
        fullName: '', phone: '', email: '', altPhone: '',
        addressType: 'Home', streetAddress: '', pincode: '', landmark: '',
        acBrand: '', acType: 'Split AC', acModel: '', acCapacity: '', acAge: '',
        preferredDate: '', preferredTime: '',
        acIssue: '', instructions: ''
    });

    const update = (key, value) => setFormData(prev => ({ ...prev, [key]: value }));

    const buildWhatsAppMessage = () => {
        const lines = [
            '*🔧 New AC Service Booking Enquiry*',
            '',
            '*1. Service:* ' + selectedService,
            '',
            '*2. Customer Details:*',
            '• Name: ' + (formData.fullName || '-'),
            '• Phone: ' + (formData.phone || '-'),
            '• Email: ' + (formData.email || '-'),
            '• Alternate Phone: ' + (formData.altPhone || '-'),
            '',
            '*3. Service Address:*',
            '• Address Type: ' + formData.addressType,
            '• Street: ' + (formData.streetAddress || '-'),
            '• Pincode: ' + (formData.pincode || '-'),
            '• Landmark: ' + (formData.landmark || '-'),
            '',
            '*4. AC Details:*',
            '• Brand: ' + (formData.acBrand || '-'),
            '• Type: ' + formData.acType,
            '• Model: ' + (formData.acModel || '-'),
            '• Capacity: ' + (formData.acCapacity || '-'),
            '• Age: ' + (formData.acAge || '-'),
            '',
            '*5. Schedule:*',
            '• Preferred Date: ' + (formData.preferredDate || '-'),
            '• Time Slot: ' + (formData.preferredTime || '-'),
            '• Urgency: ' + urgency,
            '',
            '*6. Additional:*',
            '• AC Issue: ' + (formData.acIssue || '-'),
            '• Instructions: ' + (formData.instructions || '-')
        ];
        return lines.join('\n');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.fullName?.trim() || !formData.phone?.trim()) {
            alert('Please enter your Full Name and Phone Number.');
            return;
        }
        const message = encodeURIComponent(buildWhatsAppMessage());
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    };

    return (
        <section id="booking-form" className="pb-20 -mt-24 relative z-10 px-4">
            <div className="max-w-[800px] mx-auto bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 md:p-10">

                <form className="space-y-10" onSubmit={handleSubmit}>

                    {/* 1. Select Service */}
                    <div>
                        <h2 className="text-[17px] font-bold text-gray-900 mb-5">1. Select Service</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { id: 'AC Maintenance', desc: 'Regular maintenance and tune-up' },
                                { id: 'AC Repair', desc: 'Fix AC problems and issues' },
                                { id: 'AC Installation', desc: 'New AC installation service' },
                                { id: 'AC Cleaning', desc: 'Deep cleaning and jet wash' },
                                { id: 'Emergency Service', desc: '24/7 emergency AC repair' },
                            ].map((service) => (
                                <div
                                    key={service.id}
                                    onClick={() => setSelectedService(service.id)}
                                    className={`p-4 rounded-lg border cursor-pointer transition-all ${selectedService === service.id
                                            ? 'border-ac-primary bg-[#f4f7ff]'
                                            : 'border-gray-200 hover:border-gray-300 bg-white'
                                        }`}
                                >
                                    <div className="font-semibold text-gray-800 text-[14px] mb-1">{service.id}</div>
                                    <div className="text-[12px] text-gray-500">{service.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 2. Customer Details */}
                    <div>
                        <h2 className="text-[17px] font-bold text-gray-900 mb-5">2. Customer Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                                <input type="text" value={formData.fullName} onChange={(e) => update('fullName', e.target.value)} placeholder="Enter your full name" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-[14px] text-gray-900 placeholder:text-gray-500 focus:bg-white focus:outline-none focus:border-ac-primary focus:ring-1 focus:ring-ac-primary/20 transition-all" required />
                            </div>
                            <div>
                                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                                <input type="tel" value={formData.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-[14px] text-gray-900 placeholder:text-gray-500 focus:bg-white focus:outline-none focus:border-ac-primary focus:ring-1 focus:ring-ac-primary/20 transition-all" required />
                            </div>
                            <div>
                                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Email Address</label>
                                <input type="email" value={formData.email} onChange={(e) => update('email', e.target.value)} placeholder="mail@example.com" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-[14px] text-gray-900 placeholder:text-gray-500 focus:bg-white focus:outline-none focus:border-ac-primary focus:ring-1 focus:ring-ac-primary/20 transition-all" />
                            </div>
                            <div>
                                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Alternate Phone</label>
                                <input type="tel" value={formData.altPhone} onChange={(e) => update('altPhone', e.target.value)} placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-[14px] text-gray-900 placeholder:text-gray-500 focus:bg-white focus:outline-none focus:border-ac-primary focus:ring-1 focus:ring-ac-primary/20 transition-all" />
                            </div>
                        </div>
                    </div>

                    {/* 3. Service Address */}
                    <div>
                        <h2 className="text-[17px] font-bold text-gray-900 mb-5">3. Service Address</h2>
                        <div className="space-y-5">
                            <div>
                                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Address Type</label>
                                <select value={formData.addressType} onChange={(e) => update('addressType', e.target.value)} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-[14px] text-gray-900 cursor-pointer focus:bg-white focus:outline-none focus:border-ac-primary transition-all">
                                    <option>Home</option>
                                    <option>Office</option>
                                    <option>Commercial</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Street Address <span className="text-red-500">*</span></label>
                                <input type="text" value={formData.streetAddress} onChange={(e) => update('streetAddress', e.target.value)} placeholder="House/Flat Number, Street Name" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-[14px] text-gray-900 placeholder:text-gray-500 focus:bg-white focus:outline-none focus:border-ac-primary focus:ring-1 focus:ring-ac-primary/20 transition-all" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Pincode <span className="text-red-500">*</span></label>
                                    <input type="text" value={formData.pincode} onChange={(e) => update('pincode', e.target.value)} placeholder="462001" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-[14px] text-gray-900 placeholder:text-gray-500 focus:bg-white focus:outline-none focus:border-ac-primary focus:ring-1 focus:ring-ac-primary/20 transition-all" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Nearby Landmark</label>
                                <input type="text" value={formData.landmark} onChange={(e) => update('landmark', e.target.value)} placeholder="Near Temple, School, Market, etc." className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-[14px] text-gray-900 placeholder:text-gray-500 focus:bg-white focus:outline-none focus:border-ac-primary focus:ring-1 focus:ring-ac-primary/20 transition-all" />
                            </div>
                        </div>
                    </div>

                    {/* 4. AC Details */}
                    <div>
                        <h2 className="text-[17px] font-bold text-gray-900 mb-5">4. AC Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">AC Brand *</label>
                                <select value={formData.acBrand} onChange={(e) => update('acBrand', e.target.value)} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-[14px] text-gray-900 cursor-pointer focus:bg-white focus:outline-none focus:border-ac-primary transition-all">
                                    <option value="">Select Brand</option>
                                    <option>LG</option>
                                    <option>Voltas</option>
                                    <option>Daikin</option>
                                    <option>Blue Star</option>
                                    <option>Carrier</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">AC Type *</label>
                                <select value={formData.acType} onChange={(e) => update('acType', e.target.value)} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-[14px] text-gray-900 cursor-pointer focus:bg-white focus:outline-none focus:border-ac-primary transition-all">
                                    <option>Split AC</option>
                                    <option>Window AC</option>
                                    <option>Cassette AC</option>
                                    <option>Tower AC</option>
                                    <option>Central AC</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">AC Model</label>
                                <input type="text" value={formData.acModel} onChange={(e) => update('acModel', e.target.value)} placeholder="Model Number (If known)" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-[14px] text-gray-900 placeholder:text-gray-500 focus:bg-white focus:outline-none focus:border-ac-primary focus:ring-1 focus:ring-ac-primary/20 transition-all" />
                            </div>
                            <div>
                                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">AC Capacity</label>
                                <select value={formData.acCapacity} onChange={(e) => update('acCapacity', e.target.value)} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-[14px] text-gray-900 cursor-pointer focus:bg-white focus:outline-none focus:border-ac-primary transition-all">
                                    <option value="">Select Capacity</option>
                                    <option>1.0 Ton</option>
                                    <option>1.5 Ton</option>
                                    <option>2.0 Ton</option>
                                    <option>Above 2.0 Ton</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">AC Age (Approx.)</label>
                                <input type="text" value={formData.acAge} onChange={(e) => update('acAge', e.target.value)} placeholder="Approximate age in years" className="w-full md:w-1/2 md:pr-4 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-[14px] text-gray-900 placeholder:text-gray-500 focus:bg-white focus:outline-none focus:border-ac-primary focus:ring-1 focus:ring-ac-primary/20 transition-all" />
                            </div>
                        </div>
                    </div>

                    {/* 5. Schedule Service */}
                    <div>
                        <h2 className="text-[17px] font-bold text-gray-900 mb-5">5. Schedule Service</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                            <div>
                                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Preferred Date <span className="text-red-500">*</span></label>
                                <input type="date" value={formData.preferredDate} onChange={(e) => update('preferredDate', e.target.value)} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-[14px] text-gray-900 focus:bg-white focus:outline-none focus:border-ac-primary focus:ring-1 focus:ring-ac-primary/20 transition-all" />
                            </div>
                            <div>
                                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Preferred Time Slot *</label>
                                <select value={formData.preferredTime} onChange={(e) => update('preferredTime', e.target.value)} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-[14px] text-gray-900 cursor-pointer focus:bg-white focus:outline-none focus:border-ac-primary transition-all">
                                    <option value="">Select Time Slot</option>
                                    <option>09:00 AM - 12:00 PM</option>
                                    <option>12:00 PM - 03:00 PM</option>
                                    <option>03:00 PM - 06:00 PM</option>
                                    <option>06:00 PM - 09:00 PM</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-[13px] font-medium text-gray-700 mb-2">Urgency Level</label>
                            <div className="flex items-center gap-6">
                                {['Normal', 'Urgent', 'Emergency'].map((level) => (
                                    <label key={level} className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="urgency"
                                            value={level}
                                            checked={urgency === level}
                                            onChange={(e) => setUrgency(e.target.value)}
                                            className="w-4 h-4 text-ac-primary border-gray-300 focus:ring-ac-primary"
                                        />
                                        <span className="text-[14px] text-gray-700">{level}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 6. Additional Information */}
                    <div>
                        <h2 className="text-[17px] font-bold text-gray-900 mb-5">6. Additional Information</h2>
                        <div className="space-y-5">
                            <div>
                                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">AC Issue/Problem</label>
                                <textarea rows="3" value={formData.acIssue} onChange={(e) => update('acIssue', e.target.value)} placeholder="Describe any problems with your AC..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-[14px] text-gray-900 placeholder:text-gray-500 focus:bg-white focus:outline-none focus:border-ac-primary focus:ring-1 focus:ring-ac-primary/20 transition-all resize-none"></textarea>
                            </div>
                            <div>
                                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Specific Instructions</label>
                                <textarea rows="2" value={formData.instructions} onChange={(e) => update('instructions', e.target.value)} placeholder="Any specific instructions for our technician..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-[14px] text-gray-900 placeholder:text-gray-500 focus:bg-white focus:outline-none focus:border-ac-primary focus:ring-1 focus:ring-ac-primary/20 transition-all resize-none"></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button + WhatsApp option */}
                    <div className="pt-2 text-center space-y-3">
                        <button
                            type="submit"
                            className="w-full bg-[#5d43ff] hover:bg-[#4a35cc] text-white font-bold py-3.5 rounded-lg text-[15px] transition-colors shadow-sm"
                        >
                            Send Enquiry to WhatsApp
                        </button>
                        <div className="flex items-center gap-3 my-1">
                            <div className="flex-1 h-px bg-gray-200" />
                            <span className="text-[12px] text-gray-400 font-medium uppercase tracking-wide">
                                or
                            </span>
                            <div className="flex-1 h-px bg-gray-200" />
                        </div>
                        <a
                            href={WHATSAPP_BOOKING_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1ebe57] text-white font-bold py-3 rounded-lg text-[14px] sm:text-[15px] leading-snug transition-colors shadow-sm text-center"
                        >
                            <i className="fa-brands fa-whatsapp text-base sm:text-lg" />
                            <span className="block">
                                Don't want to fill form? Message direct on WhatsApp
                            </span>
                        </a>
                        <p className="text-[13px] text-gray-500 font-medium">
                            Submit the form above to receive the enquiry on WhatsApp, or message us directly for quick booking.
                        </p>
                    </div>

                </form>
            </div>
        </section>
    );
}
