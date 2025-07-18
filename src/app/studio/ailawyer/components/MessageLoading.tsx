import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const MessageLoading = () => {
  return (
    <div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full mt-2" />
      <Skeleton className="h-4 w-full mt-2" />
      <Skeleton className="h-4 w-1/2 mt-2" />
    </div>
  );
};

export default MessageLoading;
