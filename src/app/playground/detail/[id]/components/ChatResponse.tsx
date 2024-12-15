import PopoverButton from "@/components/PopoverButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clipboard, ThumbsDown, ThumbsUp } from "lucide-react";
import React from "react";
import MessageLoading from "./MessageLoading";

type ChatResponseProps = React.FC<{
  isLoading?: boolean;
  message: string;
  id: string;
}>;
const ChatResponse: ChatResponseProps = ({ isLoading, message, id }) => {
  return (
    <div className="w-full flex flex-col">
      <Card className="shadow-none mb-4 p-2 text-md relative">
        {isLoading ? (
          <MessageLoading />
        ) : (
          <>
            <p>{message}</p>
            <Card className="flex shadow-sm flex-row items-center justify-end gap-1 mt-2 absolute bottom-[-10px] right-[10px]">
              <PopoverButton text="Copy">
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <Clipboard />
                </Button>
              </PopoverButton>
              <PopoverButton text="Like">
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <ThumbsUp />
                </Button>
              </PopoverButton>
              <PopoverButton text="Dislike">
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <ThumbsDown />
                </Button>
              </PopoverButton>
            </Card>
          </>
        )}
      </Card>
    </div>
  );
};

export default ChatResponse;
