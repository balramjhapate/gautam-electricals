import React from 'react';

const WHATSAPP_URL = 'https://wa.me/919770816132?text=Hi,%20I%20want%20to%20book%20a%20fast%20AC%20service%20visit.';

const times = [
    { title: "Within Bhopal City", time: "30 minutes", bg: "bg-green-50", text: "text-green-600", icon: "fa-regular fa-clock" },
    { title: "Nearby Areas", time: "45 minutes", bg: "bg-green-50", text: "text-green-600", icon: "fa-solid fa-location-crosshairs" },
    { title: "Outer Areas", time: "60 minutes", bg: "bg-green-50", text: "text-green-600", icon: "fa-solid fa-users-viewfinder" },
];

export default function ResponseTimes() {
    return (
        <section className="py-24 bg-[#f2f6fa]">
            <div className="max-w-[1200px] mx-auto px-6">

                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-[30px] font-bold text-gray-900 mb-3">Our Response Times</h2>
                    <p className="text-[16px] text-gray-500 font-medium tracking-wide">Fast, reliable services when you need it most</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {times.map((item, idx) => (
                        <a
                            key={idx}
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos="fade-up"
                            data-aos-delay={idx * 150}
                            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col items-center text-center cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div className={`w-14 h-14 rounded-full ${item.bg} flex items-center justify-center ${item.text} text-2xl mb-5 shadow-inner`}>
                                <i className={item.icon}></i>
                            </div>
                            <h3 className="text-[17px] font-bold text-gray-900 mb-1">{item.title}</h3>
                            <div className="text-[26px] font-bold text-[#0ebd5e] mb-2">{item.time}</div>
                            <p className="text-[12px] text-gray-400 font-semibold uppercase tracking-wider">Average Arrival Time</p>
                        </a>
                    ))}
                </div>

                <div className="mt-12 text-center" data-aos="fade-up">
                    <p className="text-[13px] text-gray-400 font-medium italic">* Arrival times depend on traffic conditions</p>
                </div>

            </div>
        </section>
    );
}
