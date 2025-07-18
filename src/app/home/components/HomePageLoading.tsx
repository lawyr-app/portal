import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import React from "react";

const HomeLoading = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[80px] border-b mb-4 ">
        <div
          className={cn("mx-auto px-2 container flex-col flex relative mt-4")}
        >
          <div className="flex flex-row w-full items-center justify-between">
            <div>
              <Skeleton className="h-[30px] w-[100px]" />
            </div>
            <div className="flex flex-row items-center gap-3">
              <Skeleton className="h-[30px] w-[60px]" />
              <Skeleton className="h-[30px] w-[60px]" />
              <Skeleton className="h-[30px] w-[60px]" />
            </div>
            <div>
              <Skeleton className="rounded-full h-[40px] w-[40px]" />
            </div>
          </div>
        </div>
      </div>
      <div className={cn("mx-auto px-2 container flex-col flex relative mt-4")}>
        <div className="flex flex-row gap-4">
          {new Array(4).fill("").map((m, i) => (
            <HomeCardLoading key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

const HomeCardLoading = () => {
  return (
    <Card className="w-1/4 p-4 flex flex-row gap-2">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </Card>
  );
};

export default HomeLoading;
