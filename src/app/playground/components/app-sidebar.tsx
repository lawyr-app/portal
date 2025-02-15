"use client";

import * as React from "react";
import { History, Plus, Scale, Star } from "lucide-react";

import { NavMain } from "@/app/playground/components/nav-main";
import { NavUser } from "@/app/playground/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import PopoverButton from "@/components/PopoverButton";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Scale />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex flex-row items-center justify-end">
          <PopoverButton text="Toggles the sidebar">
            <SidebarTrigger />
          </PopoverButton>
        </div>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
