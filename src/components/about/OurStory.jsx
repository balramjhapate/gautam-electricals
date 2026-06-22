import React from 'react';

const WHATSAPP_URL = 'https://wa.me/919770816132?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20AC%20services.';

const stats = [
    { value: '10+', label: 'Years of Experience' },
    { value: '5,000+', label: 'Happy Customers' },
    { value: '15+', label: 'Service Areas' },
    { value: '8+', label: 'Expert Technicians' },
];

export default function OurStory() {
    return (
        <section className="py-20 bg-[#f8fbff]">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text Content */}
                    <div data-aos="fade-right">
                        <h2 className="text-[32px] font-[900] text-gray-900 mb-6">Our Story</h2>
                        <div className="space-y-5 text-[15.5px] text-gray-600 leading-relaxed">
                            <p>
                                Gautam Electricals was founded with a simple mission: to provide reliable, professional home appliance repair to the families of Bhopal &amp; Prayagraj. What started as a small AC repair team has grown into the region's most trusted multi-appliance service provider.
                            </p>
                            <p>
                                Today we repair AC, Washing Machine, Refrigerator, Microwave, Geyser and RO Water Purifiers — covering virtually every appliance in your home. Our certified technicians bring years of experience and use genuine spare parts on every job.
                            </p>
                            <p>
                                We believe in transparent pricing, no hidden charges, and building long-term relationships with our customers. That's why 5,000+ families in Bhopal &amp; Prayagraj trust Gautam Electricals year after year.
                            </p>
                        </div>
                    </div>

                    {/* Right: Stats Grid */}
                    <div data-aos="fade-left" className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-10">
                        <div className="text-center mb-8">
                            <p className="text-[14px] font-semibold text-gray-500 uppercase tracking-widest">Company Metrics</p>
                        </div>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                            {stats.map((stat, index) => (
                                <a
                                    key={index}
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-center block cursor-pointer hover:scale-[1.02] transition-transform"
                                >
                                    <div className="text-[42px] font-bold text-[#0ebd5e] mb-2 leading-none">{stat.value}</div>
                                    <div className="text-[14px] font-medium text-gray-600">{stat.label}</div>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
