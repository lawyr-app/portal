import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const ChatList = () => {
  return (
    <>
      <div className="p-2">
        <Input type="text" placeholder="Search Chat" />
      </div>
      <div className="p-2 pt-0 h-full overflow-hidden flex flex-col overflow-y-auto scrollbar-hide">
        {new Array(40).fill("").map((m, i) => (
          <ChatCard key={i} />
        ))}
      </div>
    </>
  );
};

const ChatCard = () => {
  return (
    <Link href="/home/messages/skdkdsnk">
      <Card className="flex flex-row mb-2 p-3 gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center justify-center">
          <small className="text-sm font-bold leading-none mb-1">
            Email address
          </small>
          <small className="text-sm font-medium leading-none">
            Email address
          </small>
        </div>
      </Card>
    </Link>
  );
};

export default ChatList;
