"use client";

import { ChevronsUpDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import ProfileDropdown from "@/components/ProfileDropdown";
import { useUser } from "@/context/userContext";

export function NavUser() {
  const { isMobile } = useSidebar();
  const { removeUser, user } = useUser();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <ProfileDropdown
          isMobile={isMobile}
          user={user}
          removeUser={removeUser}
        >
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={user?.profileImageUrl} alt={user?.name} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{user?.name}</span>
              <span className="truncate text-xs">{user?.email}</span>
            </div>
            <ChevronsUpDown className="ml-auto size-4" />
          </SidebarMenuButton>
        </ProfileDropdown>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
