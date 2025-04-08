import { Footer } from "@/components/landing/Footer";
import React from "react";
import { cn } from "@/lib/utils";
import { navbarHeight } from "@/constant/style";
import Navbar from "@/components/app/Navbar";

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
