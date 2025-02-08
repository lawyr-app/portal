import React from "react";
import FeaturesSectionWithHoverEffects from "./feature-section-with-hover-effects";
import { Footerdemo } from "./footer-section";
import { HowItWorks } from "../landing/Howitworks";
import { HeroSection } from "./hero-section";
import { FAQ } from "../landing/FAQ";
import { Navbar } from "../landing/Navbar";
import { Hero } from "../landing/Hero";

const NewLanding = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      <Navbar />
      <Hero />
      <main className="flex-grow">
        <FeaturesSectionWithHoverEffects />
        <HowItWorks />
        <FAQ />
      </main>
      <Footerdemo />
    </div>
  );
};

export default NewLanding;
