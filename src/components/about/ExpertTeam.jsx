import React from 'react';

const WHATSAPP_URL = 'https://wa.me/919770816132?text=Hi,%20I%20want%20to%20book%20an%20AC%20service%20with%20your%20expert%20team.';

const team = [
    {
        name: "Rajesh Kumar",
        role: "Senior Technician",
        exp: "12+ years experience",
        specialties: ["Split AC Expert", "VRV Systems"],
        certs: ["Carrier Certified", "Deep Repair Master Training"]
    },
    {
        name: "Amit Singh",
        role: "AC Expert",
        exp: "8+ years experience",
        specialties: ["Window ACs", "Gas Refill Masters"],
        certs: ["LG Digital Training", "Customer Relations Core"]
    },
    {
        name: "Pradeep Sharma",
        role: "Diagnostic Pro",
        exp: "10+ years experience",
        specialties: ["Fault Testing", "PCB Repair & Safety Control"],
        certs: ["ISO Diagnostic Course", "Management Basic Safety"]
    },
    {
        name: "Sanjay Gupta",
        role: "Lead Installer",
        exp: "9+ years experience",
        specialties: ["Emergency Support", "Ducting Central AC"],
        certs: ["Daikin Advanced Install Course", "Site Inspection Safety"]
    }
];

export default function ExpertTeam() {
    return (
        <section className="py-24 bg-[#f8fbff]">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-[32px] font-bold text-gray-900 mb-3">Meet Our Expert Team</h2>
                    <p className="text-[16px] text-gray-500 font-medium tracking-wide">Certified technicians with years of experience and expertise</p>
                </div>

                {/* Profiles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <a
                            key={index}
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos="fade-up"
                            data-aos-delay={100 * (index + 1)}
                            className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center text-center cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                        >
                            {/* Avatar */}
                            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-[#0ebd5e] text-3xl mb-5">
                                <i className="fa-regular fa-user"></i>
                            </div>

                            {/* Info */}
                            <h3 className="text-[17px] font-bold text-gray-900 mb-1">{member.name}</h3>
                            <div className="text-[13px] font-bold text-[#0ebd5e] mb-3">{member.role}</div>

                            {/* Badge */}
                            <div className="bg-blue-50 text-blue-700 text-[11px] font-bold px-3 py-1 rounded-full mb-6 border border-blue-100">
                                {member.exp}
                            </div>

                            <div className="w-full text-left bg-gray-50/50 rounded-xl p-4 border border-gray-100/50 flex-grow">
                                <div className="mb-4">
                                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Specializations</div>
                                    <ul className="text-[12.5px] text-gray-600 space-y-1 font-medium leading-relaxed">
                                        {member.specialties.map((spec, i) => (
                                            <li key={i}>{spec}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Certifications</div>
                                    <ul className="text-[12.5px] text-gray-600 space-y-1 font-medium leading-relaxed">
                                        {member.certs.map((cert, i) => (
                                            <li key={i}>{cert}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}
