"use client";

import Navbar from "@/components/app/Navbar";
import SettingNavbar from "@/components/app/SettingNavbar";
import { BadgeInfo, CreditCard, ChartPie } from "lucide-react";

const baseUrl = "/billing";

export default function BillingLayout({
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
            name: "Usage detail",
            icon: ChartPie,
            href: `${baseUrl}/usage-detail`,
          },
          {
            id: 3,
            name: "Payment History",
            icon: CreditCard,
            href: `${baseUrl}/payment-history`,
          },
          {
            id: 4,
            name: "Buy Tokens",
            icon: CreditCard,
            href: `${baseUrl}/buy-tokens`,
          },
        ]}
      />
      <main className="container mx-auto mt-8 px-2">{children}</main>
    </div>
  );
}
