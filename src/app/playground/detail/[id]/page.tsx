"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React, { useEffect, useRef, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { NavActions } from "@/components/nav-actions";
import { Button } from "@/components/ui/button";
import { Clipboard, Share, Star, ThumbsDown, ThumbsUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import PopoverButton from "@/components/PopoverButton";
import ChatInput from "@/components/ChatInput";

const Detail = () => {
  const footerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState("100%");
  const [footerHeight, setFooterHeight] = useState(100);

  useEffect(() => {
    const updateContainerHeight = () => {
      if (footerRef.current) {
        const footerHeight = footerRef.current.offsetHeight;
        setFooterHeight(footerHeight);
        setContainerHeight(`calc(100% - ${footerHeight}px)`);
      }
    };

    // Initial calculation
    updateContainerHeight();

    // Update height on window resize
    window.addEventListener("resize", updateContainerHeight);
    return () => window.removeEventListener("resize", updateContainerHeight);
  }, []);
  return (
    <div className="w-full h-screen">
      <header className="flex h-14 shrink-0 items-center gap-2 sticky top-0 z-10 w-full bg-card">
        <div className="flex flex-1 items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="line-clamp-1">
                  Chat title
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="ml-auto px-3">
          <div className="flex items-center gap-2 text-sm">
            <div className="hidden font-medium text-muted-foreground md:inline-block">
              Edit Oct 08
            </div>
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <Star />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <Share />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100%-3.5rem)] flex-col gap-4 px-4 ">
        <div className="mx-auto h-full w-full max-w-3xl relative">
          <div
            className="overflow-y-scroll scrollbar-hide pt-2"
            style={{
              height: containerHeight,
            }}
          >
            <UserChat />
            <ChatResponse />
            <UserChat />
            <ChatResponse />
            <UserChat />
            <ChatResponse />
            <UserChat />
            <ChatResponse />
            <UserChat />
            <ChatResponse />
          </div>
          <footer ref={footerRef} className="absolute bottom-0 w-full">
            <ChatInput classname="w-full" />
            <p className="text-[12px] text-center mt-1">
              lawyrr may make mistakes. Please use with discretion.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

const UserChat = () => {
  return (
    <div className="flex flex-row justify-end mb-4">
      <Card className="flex flex-row gap-2 shadow-none p-2 text-md w-10/12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        possimus. Earum quaerat quisquam minima optio quos dolores error
        sapiente provident necessitatibus, accusamus et consequatur deleniti
        quas nihil rerum quam sint!
      </Card>
    </div>
  );
};

const ChatResponse = () => {
  return (
    <div className="w-full flex flex-col">
      <Card className="shadow-none mb-4 p-2 text-md relative">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          possimus. Earum quaerat quisquam minima optio quos dolores error
          sapiente provident necessitatibus, accusamus et consequatur deleniti
          quas nihil rerum quam sint!
        </p>
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
      </Card>
    </div>
  );
};

export default Detail;
