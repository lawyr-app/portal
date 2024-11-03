import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { NavActions } from "@/components/nav-actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Star, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const History = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <header className="flex h-14 shrink-0 items-center gap-2 px-2 fixed top-0">
        <SidebarTrigger />
      </header>
      <div className="flex w-full h-full flex-col items-center justify-center mt-5 p-3">
        <div className="my-4">
          <span className="flex flex-row">
            <Input
              type="search"
              placeholder="Searh by description"
              className="rounded-tr-none rounded-br-none"
            />
            <Button className="rounded-tl-none rounded-bl-none">Button</Button>
          </span>
        </div>
        <div className="flex flex-row w-full h-full flex-wrap items-center justify-center gap-4">
          {new Array(30).fill("").map((m) => (
            <HistoryCard />
          ))}
        </div>
      </div>
    </div>
  );
};

const HistoryCard = () => {
  return (
    <Card className="w-full sm:w-[250px] p-4">
      <CardDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        reprehenderit, in ratione facilis nesciunt sunt asperiores earum
        delectus ipsum a rem unde! Sunt porro, id illum omnis soluta velit
        consequuntur?
      </CardDescription>

      <CardFooter className="p-0 mt-3 gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Share</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Star className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Favourite</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="destructive" size="icon">
                <Trash2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Delete</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
};

export default History;
