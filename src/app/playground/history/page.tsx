"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React, { useEffect, useState } from "react";
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
import Link from "next/link";
import axios from "@/lib/axios";

const History = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [historyList, setHistoryList] = useState([]);

  const fetchHistory = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get("/chat/chats");
      setHistoryList(data?.data ?? []);
      setIsLoading(false);
    } catch (error) {
      console.error(`Something went wrong in fetchHistory due to `, error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="flex flex-col w-full h-full relative">
      <header className="flex flex-col gap-2 p-2 sticky top-0 w-full bg-card">
        <SidebarTrigger />
        <div className="w-full flex flex-row items-center justify-center mb-4">
          <span className="flex flex-row w-10/12">
            <Input
              type="search"
              placeholder="Searh by description"
              className="rounded-tr-none rounded-br-none"
            />
            <Button className="rounded-tl-none rounded-bl-none">Button</Button>
          </span>
        </div>
      </header>
      <div className="flex w-full h-full flex-col items-center justify-center mt-5 p-3">
        <div className="flex flex-col w-full h-full items-center  gap-4">
          {historyList?.map((m, i) => (
            <HistoryCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

const HistoryCard = () => {
  return (
    <Card className="w-full sm:w-10/12 p-4">
      <Link href="/playground/detail/1746237">
        <CardTitle className="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </CardTitle>
      </Link>

      <CardFooter className="p-0 pt-2 flex flex-row items-center justify-between mt-3 gap-2 ">
        <CardDescription className="text-[12px]">
          Updated 2 may 2001
        </CardDescription>
        <div className="flex flex-row gap-2">
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
        </div>
      </CardFooter>
    </Card>
  );
};

export default History;
