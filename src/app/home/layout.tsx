import { Footer } from "@/components/landing/Footer";
import React from "react";
import Navbar from "./components/Navbar";
import AppContainer from "@/components/AppContainer";

type HomeLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <AppContainer>
      <Navbar />
      {children}
      <Footer className="px-0 sm:px-0 lg:px-0 py-12" />
    </AppContainer>
  );
};

export default HomeLayout;
