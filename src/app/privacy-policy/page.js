import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-20">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="mb-4">Last Updated: March 7, 2026</p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-ac-primary">1. Information We Collect</h2>
                <p className="text-ac-text-muted leading-relaxed">
                    We collect information that you provide directly to us when you request service,
                    book an appointment, or contact us. This may include your name, phone number,
                    email address, and service address.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-ac-primary">2. How We Use Your Information</h2>
                <p className="text-ac-text-muted leading-relaxed">
                    We use the information we collect to provide, maintain, and improve our services,
                    to communicate with you, and to respond to your requests.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-ac-primary">3. Data Security</h2>
                <p className="text-ac-text-muted leading-relaxed">
                    We take reasonable measures to help protect information about you from loss,
                    theft, misuse, and unauthorized access.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-ac-primary">4. Contact Us</h2>
                <p className="text-ac-text-muted leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at:
                    <br /><br />
                    <strong>Gautam Electricals</strong><br />
                    Address: Nariyal Kheda, Near DIG Bungalow, Old Bhopal, Madhya Pradesh<br />
                    Email: gautamelectricals.online@gmail.com<br />
                    Phone: +91 9770816132
                </p>
            </section>
        </div>
    );
}
