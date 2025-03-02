import { Footer } from "@/components/landing/Footer";
import React from "react";
import Navbar from "./components/Navbar";
import { cn } from "@/lib/utils";
import { navbarHeight } from "@/constant/style";

type HomeLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col overflow-y-auto">
        <Navbar />
        <div
          style={{
            height: `calc(100vh - ${navbarHeight})`,
          }}
          className={cn("mx-auto px-2 container flex relative ")}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
