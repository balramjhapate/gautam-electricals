import React from 'react';

const LOCATION_MAP_URL = 'https://maps.app.goo.gl/PW7ZrnJDPTaAxLji8';

export default function LocationInfo() {
    return (
        <section className="py-24 bg-[#f8fbff]">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Business Hours */}
                    <div data-aos="fade-right" className="bg-white rounded-2xl p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                        <div className="flex items-center gap-3 mb-8 text-ac-primary">
                            <i className="fa-regular fa-clock text-2xl"></i>
                            <h2 className="text-[22px] font-bold text-gray-900">Business Hours</h2>
                        </div>
                        <ul className="space-y-6">
                            {[
                                { day: "Monday - Friday", hours: "08:00 - 20:00" },
                                { day: "Saturday", hours: "09:00 - 18:00" },
                                { day: "Sunday", hours: "10:00 - 15:00" },
                                { day: "Emergency Service", hours: "24/7 Available", highlight: true }
                            ].map((item, idx) => (
                                <li key={idx} className={`flex items-center justify-between py-1 border-b border-dashed ${idx === 3 ? 'border-none pt-2' : 'border-gray-100'}`}>
                                    <span className={`text-[15px] font-medium ${item.highlight ? 'text-red-500 font-bold' : 'text-gray-600'}`}>{item.day}</span>
                                    <span className={`text-[15px] font-bold ${item.highlight ? 'text-red-500' : 'text-gray-900'}`}>{item.hours}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 bg-green-50 text-green-700 text-[13px] font-semibold px-4 py-3 rounded-lg border border-green-100 flex items-center gap-2">
                            <i className="fa-solid fa-circle-check"></i>
                            <span>Note: Emergency support is available throughout the night.</span>
                        </div>
                    </div>

                    {/* Office Location */}
                    <div data-aos="fade-left" className="bg-white rounded-2xl p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col">
                        <div className="flex items-center gap-3 mb-8 text-ac-primary">
                            <i className="fa-solid fa-location-dot text-2xl"></i>
                            <h2 className="text-[22px] font-bold text-gray-900">Our Office Location</h2>
                        </div>
                        <div className="flex-grow space-y-8">
                            <div>
                                <h3 className="text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-2">Address</h3>
                                <p className="text-[16px] text-gray-700 font-medium leading-relaxed">
                                    Vivek Enterprises, Zone-II, MP Nagar, Bhopal, Madhya Pradesh 462011, India
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-2">Landmark</h3>
                                <p className="text-[15px] text-gray-600 font-medium">
                                    Near Mansarovar Complex, MP Nagar
                                </p>
                            </div>
                            <div className="pt-2">
                                <a
                                    href={LOCATION_MAP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#5d43ff] text-white px-8 py-3.5 rounded-xl font-bold text-[14px] hover:bg-[#4a35cc] transition-all shadow-sm"
                                >
                                    <i className="fa-solid fa-map-location-dot"></i>
                                    Open in Google Maps
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
