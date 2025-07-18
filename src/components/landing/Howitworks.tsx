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
  // {
  //   icon: MessageCircle,
  //   title: "Follow-up",
  //   img: "https://assets.aceternity.com/templates/startup-1.webp",
  //   description:
  //     "If you need more clarity, you can ask follow-up questions to dive deeper into the topic.",
  // },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50  dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
          How It Works
        </h2>
        <div className="w-full h-[90vh] overflow-hidden rounded-xl shadow-lg">
          <video
            src="/demo.webm"
            playsInline
            autoPlay
            controls={false}
            muted
            loop
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
