import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import React from "react";

type SiteLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
