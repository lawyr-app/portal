import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const CardLoading = () => {
  return (
    <Skeleton className="w-full sm:w-10/12 p-4">
      <Skeleton className="h-12 w-1/2 " />

      <div className="p-0 pt-2 flex flex-row items-center justify-between mt-3 gap-2 ">
        <Skeleton className="h-6 w-20 " />
        <div className="flex flex-row gap-2">
          <Skeleton className="h-10 w-10 " />
          <Skeleton className="h-10 w-10 " />
          <Skeleton className="h-10 w-10 " />
        </div>
      </div>
    </Skeleton>
  );
};

export default CardLoading;
