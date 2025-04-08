"use client";
import { useParams } from "next/navigation";
import ContactCard from "../components/ContactCard";
import FaqSection from "../components/FaqSection";
import ReviewsSection from "../components/ReviewsSection";
import SimilarLawyers from "../components/SimilarLawyers";
import AreasOfPractice from "../components/AreasOfPractice";
import CourtAppearanceCard from "../components/CourtAppearanceCard";
import LanguagesCard from "../components/LanguagesCard";
import LawyerDetails from "../components/LawyerDetails";
import Education from "../components/Education";
import Experience from "../components/Experience";

export default function LawyerProfile() {
  const { name } = useParams<{ name: string }>();

  return (
    <>
      <div className="flex flex-row w-full gap-4">
        <div className="w-9/12">
          <LawyerDetails />
          <Education />
          <Experience />
          <ContactCard />
          <CourtAppearanceCard />
          <AreasOfPractice />
          <LanguagesCard />
          <FaqSection />
          <ReviewsSection />
        </div>
        <div className="w-3/12">
          <SimilarLawyers />
        </div>
      </div>
    </>
  );
}
