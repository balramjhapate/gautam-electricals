import React from 'react';

export default function TermsConditions() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-20">
            <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
            <p className="mb-4">Last Updated: March 7, 2026</p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-ac-primary">1. Acceptable Use</h2>
                <p className="text-ac-text-muted leading-relaxed">
                    By accessing this website, you agree to be bound by these Terms & Conditions.
                    The content on this site is for your general information and use only.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-ac-primary">2. Service Bookings</h2>
                <p className="text-ac-text-muted leading-relaxed">
                    Bookings are subject to availability of technicians in your specified area
                    (Bhopal or Indore). We reserve the right to cancel or reschedule appointments.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-ac-primary">3. Payments & Warranty</h2>
                <p className="text-ac-text-muted leading-relaxed">
                    All service charges are payable upon completion of work. We provide a 30-day
                    service warranty on most repairs, unless otherwise specified.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-ac-primary">4. Contact Information</h2>
                <p className="text-ac-text-muted leading-relaxed">
                    For any legal inquiries, please contact:<br /><br />
                    <strong>AC Service Bhopal & Indore</strong><br />
                    Email: bhopalservice998@gmail.com<br />
                    Phone: +91 8889539174
                </p>
            </section>
        </div>
    );
}
