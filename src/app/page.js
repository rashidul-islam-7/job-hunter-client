import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import Jobs from "@/components/Jobs/Jobs";
import StatsSection from "@/components/Stats";

export default function Home() {
  return (
    <div className="bg-black">
    <Hero />
    <StatsSection />
    <Jobs />
    <Features />
    </div>
  );
}
