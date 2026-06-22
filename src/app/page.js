import Hero from "../components/Hero";
import ServiceCategories from "../components/ServiceCategories";
import CoverageArea from "../components/CoverageArea";
import FeaturedServices from "../components/FeaturedServices";
import Comparison from "../components/Comparison";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import StatisticsCounter from "../components/StatisticsCounter";
import EmergencyCTA from "../components/EmergencyCTA";
import Footer from "../components/Footer";

export const metadata = {
  title: "Gautam Electricals | AC, Fridge, Washing Machine, Geyser, RO Repair Bhopal & Prayagraj",
  description: "Expert home appliance repair in Bhopal & Prayagraj. AC, Washing Machine, Refrigerator, Microwave, Geyser, RO repair & service starting ₹199. Call +91 9770816132. Same-day available.",
  keywords: "appliance repair Bhopal, Gautam Electricals, washing machine repair Bhopal, refrigerator repair Bhopal, geyser repair Bhopal, RO repair Bhopal, Gautam Electricals, appliance service Prayagraj",
  alternates: {
    canonical: "https://gautamelectricals.online/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServiceCategories />
      <FeaturedServices />
      <CoverageArea />
      <Testimonials />
      <WhyChooseUs />
      <StatisticsCounter />
      <Comparison />
      <EmergencyCTA />
    </main>
  );
}
