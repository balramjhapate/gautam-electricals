import React from 'react';
import SVGIcon from '../SVGIcon';

const methods = [
    {
        title: "Phone Support",
        info: "+91 97708 16132",
        desc: "Emergency support within 30 mins",
        btnText: "Call Now",
        link: "tel:+919770816132",
        icon: 'phonering',
        iconColor: "text-blue-600",
        bgColor: "bg-blue-50",
        btnBg: "bg-ac-primary",
    },
    {
        title: "WhatsApp",
        info: "+91 97708 16132",
        desc: "Instant replies for quick queries",
        btnText: "Send a Message",
        link: "https://wa.me/919770816132?text=Hi%2C+I+need+appliance+repair+service!",
        icon: 'whatsapp',
        iconColor: "text-green-500",
        bgColor: "bg-green-50",
        btnBg: "bg-[#25D366]",
    },
    {
        title: "Email Support",
        info: "gautamelectricals.online@gmail.com",
        desc: "We respond within 2-4 hours",
        btnText: "Send Email",
        link: "mailto:gautamelectricals.online@gmail.com",
        icon: 'envelope',
        iconColor: "text-orange-500",
        bgColor: "bg-orange-50",
        btnBg: "bg-ge-accent",
    },
    {
        title: "Visit Our Shop",
        info: "Near Gopal Mandir, Teelajamalpura, Bhopal",
        desc: "Visit us for direct consultation",
        btnText: "Open in Maps",
        link: "https://maps.app.goo.gl/PW7ZrnJDPTaAxLji8",
        icon: 'mappin',
        iconColor: "text-red-500",
        bgColor: "bg-red-50",
        btnBg: "bg-red-500",
    },
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
                    {methods.map((method, index) => (
                        <a
                            key={index}
                            href={method.link}
                            target={method.link.startsWith('tel') || method.link.startsWith('mailto') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            data-aos="fade-up"
                            data-aos-delay={100 * (index + 1)}
                            className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all cursor-pointer no-underline"
                        >
                            <div className={`w-14 h-14 rounded-full ${method.bgColor} ${method.iconColor} flex items-center justify-center mb-6`}>
                                <SVGIcon name={method.icon} size={26} />
                            </div>
                            <h3 className="text-[17px] font-bold text-gray-900 mb-2">{method.title}</h3>
                            <div className="text-[14px] font-bold text-ac-primary mb-1 break-all">{method.info}</div>
                            <p className="text-[13px] text-gray-500 font-medium mb-8 leading-relaxed">{method.desc}</p>
                            <div className={`w-full ${method.btnBg} text-white py-2.5 rounded-lg text-[13px] font-bold flex items-center justify-center gap-2 mt-auto`}>
                                <SVGIcon name={method.icon} size={15} />
                                {method.btnText}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
