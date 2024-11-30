import React from "react";
import { AppSidebar } from "@/app/playground/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

type ProfileLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col h-full w-full text-primary">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default ProfileLayout;
