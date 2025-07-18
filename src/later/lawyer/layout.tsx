import React from "react";
import { cn } from "@/lib/utils";
import { navbarHeight } from "@/constant/style";
import Navbar from "@/components/app/Navbar";

type ProfileLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col overflow-y-auto bg-white dark:bg-black">
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
