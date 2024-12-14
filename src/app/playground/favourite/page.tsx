"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { NavActions } from "@/components/nav-actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Star, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import axios from "@/lib/axios";
import { toast } from "sonner";
import { MaybeEmptyArray } from "@/types/common";
import { favouriteType } from "@/types/Favourite";

const Favourite = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [favourites, setFavourites] = useState<MaybeEmptyArray<favouriteType>>(
    []
  );

  const fetchFavourites = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get("/favourite/favourites");
      setFavourites(data?.data ?? []);
      if (data.isError) {
        toast.error("Failed to fetch the Favourites", {
          description: "Please try again",
        });
      } else {
        // toast.success("We need few more details");
      }
      setIsLoading(false);
    } catch (error) {
      console.error(`Something went wrong in fetchFavourites due to `, error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFavourites();
  }, []);

  return (
    <div className="flex flex-col w-full h-full relative">
      <header className="flex flex-col gap-2 p-2 sticky top-0 w-full bg-card">
        <SidebarTrigger />
        <div className="w-full flex flex-row items-center justify-center mb-4">
          <span className="flex flex-row w-10/12">
            <Input
              type="search"
              placeholder="Searh by description"
              className="rounded-tr-none rounded-br-none"
            />
            <Button className="rounded-tl-none rounded-bl-none">Button</Button>
          </span>
        </div>
      </header>
      <div className="flex w-full h-full flex-col items-center justify-center mt-5 p-3">
        <div className="flex flex-col w-full h-full items-center gap-4">
          {favourites?.map((m, i) => (
            <FavouriteCard key={String(m._id)} data={m} />
          ))}
        </div>
      </div>
    </div>
  );
};

type FavouriteCardProps = React.FC<{
  data: favouriteType;
}>;

const FavouriteCard: FavouriteCardProps = ({ data }) => {
  const { _id: id, title } = data;

  const deletefavourite = async (favId: String) => {
    try {
      const { data } = await axios.delete(`/favourite/${favId}`);
    } catch (error) {
      console.error(`Something went wrong in favouriteAction due to `, error);
    }
  };

  return (
    <Card className="w-full sm:w-10/12 p-4">
      <Link href="/playground/detail/1746237">
        <CardTitle className="mb-2">{title}</CardTitle>
      </Link>

      <CardFooter className="p-0 pt-2 flex flex-row items-center justify-between mt-3 gap-2 ">
        <CardDescription className="text-[12px]">
          Created at 2 may 2001
        </CardDescription>
        <div className="flex flex-row gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Share</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    deletefavourite(id);
                  }}
                >
                  <Star
                    className="h-4 w-4"
                    style={{
                      fill: "gold",
                      border: "gold",
                      strokeWidth: 0,
                    }}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Favourite</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Favourite;
