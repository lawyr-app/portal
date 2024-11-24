"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Scale, User, CreditCard, Gamepad2 } from "lucide-react";
import ProfileDropdown from "@/components/ProfileDropdown";

const GENERAL_ROUTE = "/profile/general";
const BILLING_ROUTE = "/profile/billing";

const user = {
  name: "shadcn",
  email: "m@example.com",
  avatar: "/avatars/shadcn.jpg",
};

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b">
      <div className="container mx-auto flex h-16 items-center px-4">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Scale className="h-8 w-8" />
          </Link>
        </div>
        <div className="mx-auto flex space-x-4">
          <Link href={GENERAL_ROUTE}>
            <Button
              variant={pathname === GENERAL_ROUTE ? "secondary" : "ghost"}
              className={`flex items-center space-x-2 ${
                pathname === GENERAL_ROUTE ? "bg-gray-100 text-gray-900" : ""
              }`}
            >
              <User className="h-4 w-4" />
              <span>Profile</span>
            </Button>
          </Link>
          <Link href={BILLING_ROUTE}>
            <Button
              variant={pathname === BILLING_ROUTE ? "secondary" : "ghost"}
              className={`flex items-center space-x-2 ${
                pathname === BILLING_ROUTE ? "bg-gray-100 text-gray-900" : ""
              }`}
            >
              <CreditCard className="h-4 w-4" />
              <span>Billing</span>
            </Button>
          </Link>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/playground">
            <Button variant="outline" className="flex items-center space-x-2">
              <Gamepad2 className="h-4 w-4" />
              <span>Playground</span>
            </Button>
          </Link>
          <ProfileDropdown isMobile user={user}>
            <Avatar className="h-8 w-8 rounded-full cursor-pointer">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
          </ProfileDropdown>
        </div>
      </div>
    </nav>
  );
}
