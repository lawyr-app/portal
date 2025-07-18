"use client";

import ProfileDropdown from "@/components/ProfileDropdown";
import { COMPANY_NAME } from "@/constant/util";
import { useUser } from "@/context/userContext";
import {
  Bell,
  BriefcaseBusiness,
  Coins,
  House,
  MessageSquare,
  School,
  Settings,
  Speech,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { navbarHeight } from "@/constant/style";

const links = [
  // {
  //   id: 1,
  //   name: "Home",
  //   href: "/home",
  //   isCommingSoon: false,
  //   icon: House,
  // },
  // {
  //   id: 2,
  //   name: "Jobs",
  //   href: "/home/jobs",
  //   isCommingSoon: true,
  //   icon: BriefcaseBusiness,
  // },
  // {
  //   id: 3,
  //   name: "Forum",
  //   href: "/forum",
  //   isCommingSoon: true,
  //   icon: Speech,
  // },
  // {
  //   id: 4,
  //   name: "Messages",
  //   href: "/home/messages",
  //   isCommingSoon: false,
  //   icon: MessageSquare,
  // },
  // {
  //   id: 5,
  //   name: "Notifications",
  //   href: "/home/notification",
  //   isCommingSoon: false,
  //   icon: Bell,
  // },
  {
    id: 6,
    name: "Home",
    href: "/home",
    isCommingSoon: false,
    icon: House,
  },
  {
    id: 7,
    name: "Billing",
    href: "/billing",
    isCommingSoon: false,
    icon: Coins,
  },
  {
    id: 8,
    name: "Setting",
    href: "/setting",
    isCommingSoon: false,
    icon: Settings,
  },
];

const Navbar = ({ className = "" }) => {
  const { removeUser, user } = useUser();

  return (
    <div
      style={{
        height: navbarHeight,
      }}
      className={cn(
        "border-b flex flex-row items-center justify-center bg-white dark:bg-black w-full z-10",
        className
      )}
    >
      <div className="container px-2  flex flex-row items-center justify-between">
        <div>
          <b className="text-[18px]">{COMPANY_NAME}</b>
        </div>
        {/* <div className="flex flex-row gap-8 list-none">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="flex flex-row gap-2 items-center text-[14px]"
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.name}</span>
                </Link>
              </li>
            );
          })}
        </div> */}
        <ProfileDropdown isMobile removeUser={removeUser} user={user}>
          <Avatar className="h-8 w-8 rounded-full cursor-pointer">
            <AvatarImage src={user?.profileImageUrl} alt={user?.name} />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
        </ProfileDropdown>
      </div>
    </div>
  );
};

export default Navbar;
