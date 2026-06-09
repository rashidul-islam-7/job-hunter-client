import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import Jobs from "@/components/Jobs/Jobs";
import PricingSection from "@/components/Pricing/Pricing";
import StatsSection from "@/components/Stats";

export default function Home() {
  return (
    <div className="bg-black">
    <Hero />
    <StatsSection />
    <Jobs />
    <Features />
    <PricingSection />
    </div>
  );
}
