import React from "react";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Paperclip, SendHorizontal } from "lucide-react";
import { SelectTerrortory } from "@/components/SelectStates";
import { cn } from "@/lib/utils";

type ChatInputProps = React.FC<{
  classname: string;
}>;
const ChatInput: ChatInputProps = ({ classname }) => {
  return (
    <Card className={cn("border border-slate-300 shadow-none p-2", classname)}>
      <Textarea
        className="border-none shadow-none focus:outline-none focus-visible:ring-0 resize-none "
        placeholder="Type your message here."
      />
      <div className="flex flex-row items-center justify-between mt-2">
        <div className="flex flex-row gap-2">
          <Button variant="outline" size="icon">
            <Paperclip className="h-4 w-4" />
          </Button>
          <SelectTerrortory />
        </div>
        <Button size="icon">
          <SendHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default ChatInput;
