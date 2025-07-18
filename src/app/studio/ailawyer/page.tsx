"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import React, { useState } from "react";
import ChatInput from "@/components/ChatInput";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Badge } from "@/components/ui/badge";
import { CircleArrowOutUpRight } from "lucide-react";
import { useUser } from "@/context/userContext";

const questions = [
  {
    id: 1,
    question: "How judge is appointed ?",
  },
  {
    id: 2,
    question: "How president is selected?",
  },
  {
    id: 3,
    question: "Who appoints the governer",
  },
];

const Playground = () => {
  const [selected, setSelected] = useState("");
  const { removeUser, user } = useUser();

  return (
    <div className="flex flex-col w-full h-full">
      <header className="flex h-14 shrink-0 items-center gap-2 px-2 fixed top-0 z-10">
        <SidebarTrigger />
      </header>
      <div className="flex relative w-full h-full flex-col items-center justify-center p-2">
        <span className="absolute top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-center  opacity-50">
          <TextHoverEffect text="LAWYR" />
        </span>
        <h1 className="text-[16px] sm:text-[20px] md:text-[25px] lg:text-[34px] font-bold z-10">
          Welcome to LawyrHub
        </h1>
        <p>Ask anything related to constitution,laws,acts and amendments</p>
        <ChatInput
          classname="w-full sm:w-5/6 md:w-1/2 mt-4 z-10"
          isPlayground
          suggestedQuestion={selected}
        />
        <div className="flex flex-wrap gap-2 mt-4 w-8/12 justify-center">
          {questions.map((m) => (
            <Badge
              className="cursor-pointer z-10 "
              key={m.id}
              onClick={() => {
                setSelected(m.question);
              }}
            >
              {m.question}&nbsp;
              <CircleArrowOutUpRight className="h-3 w-3" />
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playground;
