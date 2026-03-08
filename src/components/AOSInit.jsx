"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function AOSInit() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const AOS = require("aos");
            AOS.init({
                duration: 600,
                easing: "ease-out",
                once: true,
                offset: 100,
                delay: 0,
                anchorPlacement: "top-center",
            });
        }
    }, []);

    return null;
}
