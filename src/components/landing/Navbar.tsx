"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "../ThemeToggle";
import { useUser } from "@/context/userContext";

export function Navbar() {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/info/pricing", label: "Pricing" },
    { href: "/info/contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-5xl">
      <nav className="bg-white dark:bg-black rounded-full shadow-lg backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-xl font-bold text-black dark:text-white"
              >
                LegalAI
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white" />
              {/* <Button
                className="bg-black rounded-full text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
                onClick={() =>
                  router.push(user ? "/studio/ailawyer/" : "/auth/signin")
                }
              >
                Get Started
              </Button> */}
            </div>
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[80vh] rounded-t-3xl">
                  <nav className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-xl font-bold">LegalAI</span>
                    </div>
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white py-2 text-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="mt-auto space-y-4">
                      <ThemeToggle className="w-full justify-start text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white" />
                      {/* <Button
                        className="w-full bg-black rounded-full text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
                        onClick={() => {
                          router.push("/pricing");
                          setIsOpen(false);
                        }}
                      >
                        Get Started
                      </Button> */}
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
