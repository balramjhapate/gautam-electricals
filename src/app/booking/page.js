import React from 'react';
import BookingHero from '../../components/booking/BookingHero';
import BookingForm from '../../components/booking/BookingForm';

export const metadata = {
    title: 'Book AC Service Online - Bhopal & Prayagraj',
    description: 'Schedule your professional AC service, repair, or installation online. Quick, easy, and reliable booking in Bhopal and Prayagraj.',
};

export default function BookingPage() {
    return (
        <main className="min-h-screen bg-[#f8fbff]">
            {/* Top Blue Hero specific to the Booking page */}
            <BookingHero />

            {/* Main Booking Form */}
            <BookingForm />
        </main>
    );
}
