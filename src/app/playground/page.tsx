import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import ChatInput from "@/components/ChatInput";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Badge } from "@/components/ui/badge";
import { CircleArrowOutUpRight } from "lucide-react";

const questions = [
  {
    id: 1,
    question:
      "Someone is blackmailing me with explicit photos. What can I do legally?",
  },
  {
    id: 2,
    question:
      "I’m receiving threats via messages. How can I stop this legally?",
  },
  {
    id: 3,
    question:
      "Someone is spreading false accusations about me. What are my options?",
  },
];

const Playground = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <header className="flex h-14 shrink-0 items-center gap-2 px-2 fixed top-0 z-10">
        <SidebarTrigger />
      </header>
      <div className="flex relative w-full h-full flex-col items-center justify-center p-2">
        <span className="absolute top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-center  opacity-50">
          <TextHoverEffect text="LAWYR" />
        </span>
        <h1 className="text-[26px] sm:text-[30px] md:text-[35px] lg:text-[44px] font-bold z-10">
          What can i help you with?
        </h1>
        <ChatInput classname="w-full sm:w-5/6 md:w-1/2 mt-4 z-10" />
        <div className="flex flex-wrap gap-2 mt-4 w-8/12 justify-center">
          {questions.map((m) => (
            <Badge className="cursor-pointer z-10" key={m.id}>
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
