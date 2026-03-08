import React from 'react';

const WHATSAPP_URL = 'https://wa.me/918889539174?text=Hi,%20I%20want%20to%20contact%20you%20for%20AC%20services.';
const LOCATION_MAP_URL = 'https://maps.app.goo.gl/PW7ZrnJDPTaAxLji8';

const methods = [
    {
        title: "Phone Support",
        info: "+91 8889539174",
        desc: "Emergency support within 30 mins",
        btnText: "Call Now",
        link: "tel:+918889539174",
        btnColor: "bg-[#25d366]", // Green as per image but the call is red in image, wait image shows green for call button too
        btnIcon: "fa-solid fa-phone",
        icon: "fa-solid fa-phone-volume",
        iconColor: "text-green-500",
        bgColor: "bg-green-50"
    },
    {
        title: "WhatsApp",
        info: "+91 8889539174",
        desc: "Instant replies for quick queries",
        btnText: "Send a Message",
        link: "https://wa.me/918889539174",
        btnColor: "bg-[#25d366]",
        btnIcon: "fa-brands fa-whatsapp",
        icon: "fa-brands fa-whatsapp",
        iconColor: "text-green-500",
        bgColor: "bg-green-50"
    },
    {
        title: "Email Support",
        info: "care@acservicebhopal.com",
        desc: "We respond within 2-4 hours",
        btnText: "Send Email",
        link: "mailto:care@acservicebhopal.com",
        btnColor: "bg-[#25d366]",
        btnIcon: "fa-regular fa-envelope",
        icon: "fa-regular fa-envelope",
        iconColor: "text-green-500",
        bgColor: "bg-green-50"
    },
    {
        title: "Visit Our Office",
        info: "MP Nagar, Zone-II, Bhopal",
        desc: "Visit us for direct consultation",
        btnText: "Get Directions",
        link: "https://maps.google.com",
        btnColor: "bg-[#25d366]",
        btnIcon: "fa-solid fa-location-dot",
        icon: "fa-solid fa-location-dot",
        iconColor: "text-green-500",
        bgColor: "bg-green-50"
    }
];

export default function ContactMethods() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1300px] mx-auto px-6">

                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-[32px] font-bold text-gray-900 mb-3">Get in Touch</h2>
                    <p className="text-[16px] text-gray-500 font-medium">Multiple ways to reach us for immediate assistance</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {methods.map((method, index) => {
                        const isLocationCard = method.title === "Visit Our Office";
                        const cardHref = isLocationCard ? LOCATION_MAP_URL : WHATSAPP_URL;

                        return (
                            <a
                                key={index}
                                href={cardHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-aos="fade-up"
                                data-aos-delay={100 * (index + 1)}
                                className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all cursor-pointer no-underline"
                            >
                                <div className={`w-14 h-14 rounded-full ${method.bgColor} flex items-center justify-center ${method.iconColor} text-2xl mb-6`}>
                                    <i className={method.icon}></i>
                                </div>
                                <h3 className="text-[17px] font-bold text-gray-900 mb-2">{method.title}</h3>
                                <div className="text-[15px] font-bold text-ac-primary mb-1">{method.info}</div>
                                <p className="text-[13px] text-gray-500 font-medium mb-8 leading-relaxed">
                                    {method.desc}
                                </p>
                                <div className={`w-full bg-[#21b44c] text-white py-2.5 rounded-lg text-[13px] font-bold flex items-center justify-center gap-2 mt-auto`}>
                                    <i className={method.btnIcon}></i>
                                    {isLocationCard ? 'Open Location' : method.btnText}
                                </div>
                            </a>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
