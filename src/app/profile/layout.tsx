"use client";

import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type ProfileLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

type TabProps = {
  data: ProfileTabsType;
  pathname: string;
};

type ProfileTabsType = {
  id: number;
  name: string;
  href: string;
};
const profileTabs: ProfileTabsType[] = [
  {
    id: 1,
    name: "General",
    href: "/profile/general",
  },
  {
    id: 2,
    name: "Billing",
    href: "/profile/billing",
  },
];

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  console.log("pathname", pathname);

  return (
    <section className="p-4 h-full flex w-full flex-col items-center justify-center mt-6">
      <div className="h-full w-full lg:max-w-[1024px]">
        <div>
          <Link href="/playground">
            <CircleArrowLeft className="h-8 w-8 cursor-pointer" />
          </Link>
        </div>
        <div className="w-full h-full mt-6 flex flex-col sm:flex-row gap-2">
          <div className="w-full flex sm:w-3/12 sm:flex-col">
            {profileTabs.map((m, i) => (
              <Tab data={m} key={i} pathname={pathname} />
            ))}
          </div>
          <div className="w-full sm:w-9/12">{children}</div>
        </div>
      </div>
    </section>
  );
};

const Tab: React.FC<TabProps> = ({ data, pathname }) => {
  const isActive = data.href === pathname;

  return (
    <Link
      href={data.href}
      className={`flex rounded-lg mb-2 text-sm p-2 min-w-[100px] text-center flex-row items-center justify-center ${
        isActive && "bg-primary text-primary-foreground"
      }`}
    >
      {data.name}
    </Link>
  );
};

export default ProfileLayout;
