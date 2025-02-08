import FeaturesSectionWithHoverEffects from "@/components/newlanding/feature-section-with-hover-effects";
import { FAQ } from "@/components/landing/FAQ";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/Howitworks";
import { Navbar } from "@/components/landing/Navbar";
import { Testimonials } from "@/components/landing/Testimonials";
import { Particles } from "@/components/ui/particles";
import NewLanding from "@/components/newlanding";

export default function Home() {
  return <NewLanding />;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <main className="flex-grow">
        <Features />
        <HowItWorks />
        <FeaturesSectionWithHoverEffects />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );

  return (
    <div className="relative flex h-screen bg-black w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Comming Soon
      </span>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#fff"
        refresh
      />
    </div>
  );
}
