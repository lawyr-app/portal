import React from "react";
import { Particles } from "@/components/ui/particles";

const CommingSoon = () => {
  return (
    <div className="relative flex h-screen bg-black w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Comming Soon
      </span>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#fff"
        refresh
      />
    </div>
  );
};

export default CommingSoon;
