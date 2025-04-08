"use client";

import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type SingleListItemProps = {
  id: number;
  name: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  href: string;
};

type NavIconProps = React.FC<SingleListItemProps & { currentPathName: string }>;
const NavIcon: NavIconProps = ({ href, icon, id, name, currentPathName }) => {
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

type SettingNavbarProps = React.FC<{
  list: SingleListItemProps[];
}>;
const SettingNavbar: SettingNavbarProps = ({ list }) => {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "border-b flex flex-row items-center justify-center  bg-white dark:bg-black w-full z-10"
      )}
    >
      <div className="container px-1 flex flex-row items-center justify-start gap-8 scroll-auto overflow-x-scroll scrollbar-hide">
        {list.map((m) => {
          return <NavIcon currentPathName={pathname} key={m.id} {...m} />;
        })}
      </div>
    </div>
  );
};

export default SettingNavbar;
