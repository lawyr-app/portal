import { cn } from "@/lib/utils";
import React from "react";
import QuickActions from "./components/QuickActions";
import StudioNavbar from "./components/StudioNavbar";
import Navbar from "@/components/app/Navbar";

type StudioLayoutProps = React.FC<{
  children: React.ReactNode;
}>;
const StudioLayout: StudioLayoutProps = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-y-auto">
      <Navbar />
      <div className={cn("mx-auto px-2 container flex-col flex relative mt-4")}>
        <QuickActions />
        <StudioNavbar />
        <div className="h-full flex flex-col w-full my-4 border rounded-xl p-4 bg-white dark:bg-black">
          {children}
        </div>
      </div>
    </div>
  );
};

export default StudioLayout;
