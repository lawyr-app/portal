"use client";

import { cn } from "@/lib/utils";
import {
  BadgeInfo,
  ChartPie,
  ChartSpline,
  CreditCard,
  DollarSign,
  LucideProps,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const baseUrl = "/studio";

type SingleListItemProps = {
  id: number;
  name: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  href: string;
};

const list: SingleListItemProps[] = [
  {
    id: 1,
    name: "Billing",
    icon: DollarSign,
    href: `${baseUrl}`,
  },
  {
    id: 2,
    name: "Usage detail",
    icon: ChartPie,
    href: `${baseUrl}/usage`,
  },
  {
    id: 3,
    name: "Payment History",
    icon: CreditCard,
    href: `${baseUrl}/paymenthistory`,
  },
];

type NavItemProps = React.FC<SingleListItemProps & { currentPathName: string }>;
const NavItem: NavItemProps = ({ href, icon, id, name, currentPathName }) => {
  const isActive = currentPathName === href;
  const Icon = icon;
  return (
    <Link
      href={href}
      key={id}
      className={cn(
        "text-[14px] relative flex flex-row gap-2 h-[40px] px-1 justify-center items-center",
        isActive
          ? "dark:text-gray-100 text-gray-900"
          : "dark:text-gray-400 text-gray-400"
      )}
    >
      <Icon className="h-4 w-4" />
      {name}
      {isActive && (
        <span className="absolute w-full bottom-0 h-[2px] dark:bg-white bg-black" />
      )}
    </Link>
  );
};

const StudioNavbar = () => {
  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <div className="border w-fit flex px-8 rounded-full flex-row items-center justify-start bg-white dark:bg-black gap-8 scroll-auto overflow-x-scroll scrollbar-hide">
      {list.map((m) => {
        return <NavItem currentPathName={pathname} key={m.id} {...m} />;
      })}
    </div>
  );
};

export default StudioNavbar;
