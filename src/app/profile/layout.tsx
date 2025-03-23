import React from "react";
import { cn } from "@/lib/utils";
import { navbarHeight } from "@/constant/style";
import Navbar from "../home/components/Navbar";

type ProfileLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
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

export default ProfileLayout;
