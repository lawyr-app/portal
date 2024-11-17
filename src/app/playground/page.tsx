import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import ChatInput from "@/components/ChatInput";

const Playground = () => {
  return (
    <div className="flex flex-col w-full h-full ">
      <header className="flex h-14 shrink-0 items-center gap-2 px-2 fixed top-0">
        <SidebarTrigger />
      </header>
      <div className="flex w-full h-full flex-col items-center justify-center">
        <ChatInput classname="w-3/6 mt-4" />
      </div>
    </div>
  );
};

export default Playground;
