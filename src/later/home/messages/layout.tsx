"use client";

import React, { useEffect, useMemo } from "react";
import ChatList from "./components/ChatList";
import { useIsMobile } from "@/hooks/use-mobile";
import { usePathname, useRouter } from "next/navigation";

type MessageLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
const MessageLayout: React.FC<MessageLayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const pathname = usePathname();

  const isList = useMemo(() => {
    return "/home/messages/list" === pathname;
  }, [pathname]);

  useEffect(() => {
    if (isList && !isMobile) {
      router.push("/home/messages");
    }
  }, [isMobile, router, isList]);

  return (
    <div className="flex flex-row items-center justify-center w-full h-full">
      <div className="hidden w-0 md:w-4/12 md:flex flex-col h-full  ">
        <ChatList />
      </div>
      <div className="w-full md:w-8/12 flex flex-col h-full">{children}</div>
    </div>
  );
};

export default MessageLayout;
