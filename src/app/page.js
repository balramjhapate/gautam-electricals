import Hero from "../components/Hero";
import CoverageArea from "../components/CoverageArea";
import FeaturedServices from "../components/FeaturedServices";
import Comparison from "../components/Comparison";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import StatisticsCounter from "../components/StatisticsCounter";
import EmergencyCTA from "../components/EmergencyCTA";
import Footer from "../components/Footer";
import MobileCTA from "../components/MobileCTA";

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
      <MobileCTA />
    </main>
  );
}
