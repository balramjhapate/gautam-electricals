import Hero from "../components/Hero";
import CoverageArea from "../components/CoverageArea";
import FeaturedServices from "../components/FeaturedServices";
import Comparison from "../components/Comparison";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import StatisticsCounter from "../components/StatisticsCounter";
import EmergencyCTA from "../components/EmergencyCTA";
import Footer from "../components/Footer";

export const metadata = {
  title: "AC Repair Bhopal | AC Service ₹499 | Same Day | 8889539174",
  description: "Best AC repair service in Bhopal & Indore. AC service ₹499 se shuru, same day available, gas refill ₹999. Call 8889539174. All brands — LG, Voltas, Daikin.",
  keywords: "AC repair Bhopal, AC service Bhopal, AC mechanic Bhopal, AC gas refill Bhopal, AC cleaning Bhopal, AC repair Indore, split AC repair Bhopal, AC not cooling Bhopal",
  alternates: {
    canonical: "https://ac-service-bhopal-indore.vercel.app/",
  },
};


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CoverageArea />
      <FeaturedServices />
      <Comparison />
      <Testimonials />
      <WhyChooseUs />
      <StatisticsCounter />
      <EmergencyCTA />
    </main>
  );
}
