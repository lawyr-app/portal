"use client";

import PopoverButton from "@/components/PopoverButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  FlagTriangleRight,
  Paperclip,
  SendHorizontal,
  ShieldBan,
  Smile,
} from "lucide-react";
import React from "react";
import EmojiContainer from "../components/EmojiContainer";
import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/datetime";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useRouter } from "next/navigation";

const ChatDetails = () => {
  return (
    <div className="p-2 h-full flex flex-col">
      <ChatHeader />
      <div className="border h-full scrollbar-hide overflow-y-scroll p-3">
        {new Array(40).fill("").map((m, i) => (
          <Message key={i} isSender={i % 2 == 0} />
        ))}
      </div>
      <ChatFooter />
    </div>
  );
};

type MessageProps = React.FC<{
  isSender: boolean;
}>;
const Message: MessageProps = ({ isSender }) => {
  return (
    <div className={cn("w-full flex flex-row", isSender ? "justify-end" : "")}>
      <Card className={cn("mb-3 p-2 text-[14px]", "w-10/12")}>
        {!isSender && (
          <div className="flex flex-row items-center gap-2">
            <Avatar className="h-5 w-5">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center justify-center">
              <small className="text-sm font-bold leading-none mb-1">
                Email address
              </small>
            </div>
          </div>
        )}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          maxime sit iure velit reprehenderit. Ipsa, suscipit. Neque illum
          eveniet maiores eius nesciunt sequi ducimus ad sint dolor, cumque
          doloremque non!
        </p>
        <p className="text-[10px]">{formatDate(new Date())}</p>
      </Card>
    </div>
  );
};

const ChatHeader = () => {
  const isMobile = useIsMobile();
  const router = useRouter();
  return (
    <div className="p-3 w-full flex flex-row border gap-2 rounded-t-lg border-b-0 dark:bg-black justify-between  bg-white">
      <div className="flex flex-row items-center justify-between gap-2">
        {isMobile && (
          <PopoverButton text="Block">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => {
                router.push("/home/messages/list");
              }}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </PopoverButton>
        )}

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center justify-center">
          <small className="text-sm font-bold leading-none mb-1">
            Email address
          </small>
          <small className="text-[12px] font-medium">Email address</small>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <PopoverButton text="Block">
          <Button variant="outline" size="icon" className="rounded-full">
            <ShieldBan className="h-4 w-4" />
          </Button>
        </PopoverButton>
        <PopoverButton text="Report">
          <Button variant="outline" size="icon" className="rounded-full">
            <FlagTriangleRight className="h-4 w-4" />
          </Button>
        </PopoverButton>
      </div>
    </div>
  );
};

const ChatFooter = () => {
  return (
    <div className="border border-t-0 rounded-b-lg flex flex-row p-2 gap-2">
      <Input type="text" placeholder="Search Chat" />
      <PopoverButton text="Send">
        <Button variant="outline" size="icon" className="rounded-full">
          <SendHorizontal className="h-4 w-4" />
        </Button>
      </PopoverButton>
      <EmojiContainer />
      <PopoverButton text="attach">
        <Button variant="outline" size="icon" className="rounded-full">
          <Paperclip className="h-4 w-4" />
        </Button>
      </PopoverButton>
    </div>
  );
};

export default ChatDetails;
