"use client";
import { useEffect } from "react";

export default function Analytics() {
    useEffect(() => {
        if (typeof window !== "undefined" && window.gtag) {
            // Track phone button clicks
            const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
            phoneLinks.forEach((el) => {
                el.addEventListener("click", () => {
                    window.gtag("event", "phone_click", {
                        event_category: "CTA",
                        event_label: "Phone Call",
                    });
                });
            });

            // Track WhatsApp clicks
            const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
            whatsappLinks.forEach((el) => {
                el.addEventListener("click", () => {
                    window.gtag("event", "whatsapp_click", {
                        event_category: "CTA",
                        event_label: "WhatsApp",
                    });
                });
            });

            // Track "Book Now" button clicks
            const bookButtons = document.querySelectorAll(".btn-book-now, .btn-primary");
            bookButtons.forEach((el) => {
                el.addEventListener("click", () => {
                    window.gtag("event", "book_service", {
                        event_category: "CTA",
                        event_label: "Book Service",
                    });
                });
            });

            // Cleanup
            return () => {
                // Simple removal (in real apps, you'd use abort controllers or named functions)
            };
        }
    }, []);

    return null;
}
