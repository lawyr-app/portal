import { Footer } from "@/components/landing/Footer";
import React from "react";
import Navbar from "./components/Navbar";
import AppContainer from "@/components/AppContainer";
// import { Footerdemo } from "@/components/landing/Footer";

type HomeLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-black text-gray-600 dark:text-gray-300 ">
        <Navbar />
        <div className="mx-auto px-2 container relative">{children}</div>
        {/* <Footer className="px-0 sm:px-0 lg:px-0 py-12" /> */}
      </div>
      {/* <AppContainer>{children}</AppContainer> */}
    </>
  );
};

export default HomeLayout;
