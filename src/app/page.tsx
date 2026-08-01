import { FAQ } from "@/components/landing/FAQ";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/Howitworks";
import { Navbar } from "@/components/landing/Navbar";
import Features from "@/components/landing/Features";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      <Navbar />
      <Hero />
      <main className="flex-grow">
        <Features />
        <HowItWorks />
        <FAQ />
      </main>
    </div>
  );
}
