"use client";
import React from 'react';

const BRANDS = [
    "LG", "Daikin", "Voltas", "Blue Star", "Carrier",
    "Godrej", "Panasonic", "Whirlpool", "O General", "Hitachi",
    "Lloyd", "Samsung", "Haier"
];

export default function BrandsWeService() {
    const handleBrandClick = (brand) => {
        const message = `Hi, I have an ${brand} AC and would like to book a service.`;
        const url = `https://wa.me/918889539174?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-[26px] font-bold text-gray-900 mb-2">AC Brands We Service</h2>
                    <p className="text-gray-500 font-medium text-[14px]">We provide skilled service and genuine spare parts for all major brands</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {BRANDS.map((brand, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => handleBrandClick(brand)}
                            className="bg-[#f8f9fa] border border-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-md text-[14px] hover:border-gray-300 hover:shadow-sm hover:-translate-y-0.5 transition-all cursor-pointer"
                        >
                            {brand}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
