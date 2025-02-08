"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Facebook, Instagram, Linkedin, Mail, Twitter, X } from "lucide-react";
import { MoonIcon, PaperPlaneIcon, SunIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { COMPANY_EMAIL } from "@/constant/util";
import PopoverButton from "../PopoverButton";
import { useTheme } from "@/context/themeContext";

const quickLinks = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "Pricing",
    href: "/info/pricing",
  },
  {
    id: 1,
    label: "Contact",
    href: "/info/contact",
  },
];

const socialLinks = [
  {
    id: 1,
    name: "X (formerly Twitter)",
    href: "/",
    message: "Connect with us on X",
    icon: () => <X size={20} />,
  },
  {
    id: 2,
    name: "LinkedIn",
    href: "/",
    message: "Connect with us on linkedin",
    icon: () => <Linkedin size={20} />,
  },
];

const belowLinks = [
  {
    id: 1,
    label: "Privacy Policy",
    href: "/info/privacy-policy",
  },
  {
    id: 2,
    label: "Terms of Use",
    href: "/info/terms-of-use",
  },
];

function Footer() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              LawyrHub.com
            </h2>
            <p className="mb-6 text-muted-foreground">
              Empowering legal decisions with artificial intelligence for Indian
              law.
            </p>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              {quickLinks.map((m) => (
                <Link
                  key={m.id}
                  href={m.href}
                  className="block transition-colors hover:text-primary"
                >
                  {m.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <div className="flex flex-row items-center">
              <Mail size={16} className="mr-2 text-black dark:text-white" />
              <a
                href="mailto:info@ailegalassistant.com"
                className="text-sm hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                {COMPANY_EMAIL}
              </a>
            </div>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              {socialLinks.map((m) => (
                <PopoverButton key={m.id} text={m.message}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <m.icon />
                    <span className="sr-only">{m.name}</span>
                  </Button>
                </PopoverButton>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <SunIcon className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={toggleTheme}
              />
              <MoonIcon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Your Company. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            {belowLinks.map((m) => (
              <Link href={m.href} key={m.id}>
                {m.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
