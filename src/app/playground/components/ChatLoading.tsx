import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ChatLoading = () => {
  return (
    <div className="flex flex-col overflow-hidden max-h-screen">
      {/* HEADER  */}
      <div className="flex flex-row w-full items-center justify-between p-4">
        <div className="flex gap-2 w-1/2">
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-6 w-1/4" />
        </div>
        <div className="flex gap-2 w-1/2 items-center justify-end">
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-6 w-6" />
        </div>
      </div>

      <div className="flex h-[calc(100%-3.5rem)] flex-col gap-4 px-4 ">
        <div className="mx-auto h-full w-full max-w-3xl relative">
          <div className="overflow-y-scroll scrollbar-hide pt-2">
            <AllMessages />
          </div>
        </div>
      </div>
    </div>
  );
};

const AllMessages = () => {
  return (
    <div className="w-full overflow-hidden">
      {new Array(15).fill("").map((m, i) => (
        <Message key={i} index={i} />
      ))}
    </div>
  );
};

type MessageProps = React.FC<{ index: number }>;
const Message: MessageProps = ({ index }) => {
  const isLeft = index % 2 === 0;
  const alignmentClass = isLeft ? "justify-start" : "justify-end";

  // Generate a random height class for the skeleton
  const getRandomHeightClass = () => {
    const heights = ["h-16", "h-20", "h-24"];
    return heights[Math.floor(Math.random() * heights.length)];
  };

  // Generate a random width class for the skeleton
  const getRandomWidthClass = () => {
    const widths = ["w-1/2", "w-3/4", "w-full"];
    return widths[Math.floor(Math.random() * widths.length)];
  };

  const heightClass = getRandomHeightClass();
  const widthClass = getRandomWidthClass();

  return (
    <div className={`mb-3 flex flex-col  ${alignmentClass}`}>
      <Skeleton className={`${heightClass} ${widthClass}`} />
    </div>
  );
};

export default ChatLoading;
