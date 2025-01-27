import { Footer } from "@/components/landing/Footer";
import React from "react";
import Navbar from "./components/Navbar";

type HomeLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      <Navbar />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
