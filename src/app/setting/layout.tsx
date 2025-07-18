"use client";

import Navbar from "@/components/app/Navbar";
import SettingNavbar from "@/components/app/SettingNavbar";
import { BadgeInfo, ShieldCheck, House } from "lucide-react";

const baseUrl = "/setting";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background min-h-screen">
      <Navbar className="border-none" />
      <SettingNavbar
        list={[
          {
            id: 1,
            name: "General",
            icon: BadgeInfo,
            href: `${baseUrl}`,
          },
          {
            id: 2,
            name: "Advanced",
            icon: ShieldCheck,
            href: `${baseUrl}/advanced`,
          },
          {
            id: 3,
            name: "Home",
            icon: House,
            href: `/studio/ailawyer`,
          },
        ]}
      />
      <main className="container mx-auto mt-8 px-2">{children}</main>
    </div>
  );
}
