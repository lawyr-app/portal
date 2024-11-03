import { Card } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import UpgradeButton from "@/components/UpgradeButton";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Paperclip, SendHorizontal } from "lucide-react";

const Playground = () => {
  return (
    <div className="flex flex-col w-full h-full ">
      <header className="flex h-14 shrink-0 items-center gap-2 px-2 fixed top-0">
        <SidebarTrigger />
      </header>
      <div className="flex w-full h-full flex-col items-center justify-center">
        <UpgradeButton />

        <Card className="p-2 w-3/6 mt-4">
          <Textarea
            className="border-none shadow-none focus:outline-none focus-visible:ring-0 resize-none "
            placeholder="Type your message here."
          />
          <div className="flex flex-row items-center justify-between mt-2">
            <Button variant="outline" size="icon">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button size="icon">
              <SendHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Playground;
