"use client";

import { Search, Cpu, FileText, MessageCircle } from "lucide-react";
import { Timeline } from "../ui/timeline";
import Image from "next/image";

const steps = [
  {
    icon: Search,
    img: "https://assets.aceternity.com/templates/startup-1.webp",
    title: "Ask Your Question",
    description:
      "Type your legal query into the search bar. Be as specific as you can for the best results.",
  },
  {
    icon: Cpu,
    title: "AI Analyzes",
    img: "https://assets.aceternity.com/templates/startup-1.webp",
    description:
      "Our advanced AI processes your question, searching through vast databases of Indian laws and legal precedents.",
  },
  {
    icon: FileText,
    title: "Get Your Answer",
    img: "https://assets.aceternity.com/templates/startup-1.webp",
    description:
      "Receive a clear, concise answer based on the latest Indian legal information, complete with relevant citations.",
  },
  {
    icon: MessageCircle,
    title: "Follow-up",
    img: "https://assets.aceternity.com/templates/startup-1.webp",
    description:
      "If you need more clarity, you can ask follow-up questions to dive deeper into the topic.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50  dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
          How It Works
        </h2>
        <Timeline
          data={steps.map((m) => {
            return {
              title: m.title,
              content: (
                <div>
                  <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    {m.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 relative h-[500px]">
                    <Image
                      src={m.img}
                      alt="startup template"
                      fill
                      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                  </div>
                </div>
              ),
            };
          })}
        />
      </div>
    </section>
  );
}
