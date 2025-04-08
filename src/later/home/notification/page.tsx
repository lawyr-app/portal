import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import React from "react";

const Notification = () => {
  return (
    <div className="flex w-full flex-col">
      {new Array(20).fill("").map((m, i) => (
        <NotificationCard key={i} />
      ))}
    </div>
  );
};

export default Notification;

const NotificationCard = () => {
  return (
    <Card className="w-full flex flex-row p-3 mt-2 justify-between gap-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="w-10/12 text-left text-[14px]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus animi
        labore autem reiciendis odit modi quod, ipsum, voluptate ea saepe
        dolorem aliquam necessitatibus. Nemo assumenda, consequuntur est
        voluptate atque placeat. Lorem ipsum dolor sit amet consectetur
        adipisicing elit.
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Ellipsis className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem>Mark as viewed</DropdownMenuItem>
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Card>
  );
};
