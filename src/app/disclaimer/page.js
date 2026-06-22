import React from 'react';

export const metadata = {
    title: 'Disclaimer - Gautam Electricals & Prayagraj',
    description: 'Disclaimer and legal notice for Gautam Electricals & Prayagraj website.',
};

export default function DisclaimerPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-20">
            <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
            <p className="mb-4 text-ac-text-muted">Last Updated: March 8, 2026</p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-ac-primary">1. General Information</h2>
                <p className="text-ac-text-muted leading-relaxed">
                    The information provided on this website (Gautam Electricals & Prayagraj) is for general
                    informational purposes only. While we endeavour to keep the information up to date
                    and correct, we make no representations or warranties of any kind, express or implied,
                    about the completeness, accuracy, reliability, suitability, or availability of the
                    website or the information, products, services, or related graphics contained on the
                    website for any purpose.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-ac-primary">2. Professional Advice</h2>
                <p className="text-ac-text-muted leading-relaxed">
                    The content on this site does not constitute professional advice. Any reliance you
                    place on such information is strictly at your own risk. For AC-related issues, we
                    recommend consulting our certified technicians or seeking appropriate professional
                    service.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-ac-primary">3. Service Area & Availability</h2>
                <p className="text-ac-text-muted leading-relaxed">
                    Our services are primarily available in Bhopal and Prayagraj. Service availability,
                    pricing, and response times may vary based on your location, demand, and other
                    factors. Please contact us directly to confirm service availability in your area.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-ac-primary">4. External Links</h2>
                <p className="text-ac-text-muted leading-relaxed">
                    This website may contain links to external sites that are not provided or maintained
                    by us. We do not guarantee the accuracy, relevance, or quality of any content on
                    such external websites. The inclusion of any links does not imply a recommendation
                    or endorsement.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-ac-primary">5. Contact Us</h2>
                <p className="text-ac-text-muted leading-relaxed">
                    If you have any questions about this Disclaimer, please contact us at:
                    <br /><br />
                    <strong>Gautam Electricals</strong><br />
                    Address: Nariyal Kheda, Near DIG Bungalow, Old Bhopal, Madhya Pradesh<br />
                    Email: gautamavnish2000@gmail.com<br />
                    Phone: +91 9770816132
                </p>
            </section>
        </div>
    );
}
