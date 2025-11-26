import { FAQ } from "@/components/landing/FAQ";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/Howitworks";
import { Navbar } from "@/components/landing/Navbar";
import CommingSoon from "@/components/CommingSoon";
import Features from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/auth/signin");
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      <Navbar />
      <Hero />
      <main className="flex-grow">
        <Features />
        <HowItWorks />
        <FAQ />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
