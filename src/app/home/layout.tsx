import { cn } from "@/lib/utils";
import React from "react";
import Navbar from "@/components/app/Navbar";

type StudioLayoutProps = React.FC<{
  children: React.ReactNode;
}>;
const StudioLayout: StudioLayoutProps = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-y-auto">
      <Navbar />
      <div className={cn("mx-auto px-2 container flex-col flex relative mt-4")}>
        {children}
      </div>
    </div>
  );
};

export default StudioLayout;
