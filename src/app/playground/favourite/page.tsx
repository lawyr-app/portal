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
import useFavourite from "@/hooks/useFavourite";
import SearchInput from "@/components/SearchInput";
import { formatDate } from "@/lib/datetime";
import CardLoading from "../components/CardLoading";
import EmptyList from "../components/EmptyList";
import ShareButton from "../components/ShareButton";

type favouritesListType = MaybeEmptyArray<favouriteType>;
type setFavouritesListType = React.Dispatch<
  React.SetStateAction<MaybeEmptyArray<favouriteType>>
>;

const Favourite = () => {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [favourites, setFavourites] = useState<favouritesListType>([]);

  const fetchFavourites = async () => {
    const showErrorToast = () => {
      toast.error("Failed to fetch the Favourites", {
        description: "Please try again",
      });
    };

    try {
      setIsLoading(true);
      const { data } = await axios.get("/favourite/favourites", {
        params: {
          skip: 0,
          limit: 10,
          search: searchInput,
        },
      });
      setFavourites(data?.data ?? []);
      if (data.isError) {
        showErrorToast();
      } else {
        // toast.success("We need few more details");
      }
      setIsLoading(false);
    } catch (error) {
      console.error(`Something went wrong in fetchFavourites due to `, error);
      setIsLoading(false);
      showErrorToast();
    }
  };

  const handleSearch = () => {
    setSearchInput(search);
  };

  useEffect(() => {
    fetchFavourites();
  }, [searchInput]);

  const emptyMessage =
    searchInput.length > 0
      ? `No favourites found with ${searchInput} keyword`
      : "You can favourite chat in chat detail or in history";

  return (
    <div className="flex flex-col w-full h-full relative">
      <header className="flex flex-col gap-2 p-2 sticky top-0 w-full bg-card">
        <SidebarTrigger />
        <div className="w-full flex flex-row items-center justify-center mb-4">
          <SearchInput
            value={search}
            setValue={setSearch}
            handleSearch={handleSearch}
          />
        </div>
      </header>
      <div className="flex w-full h-full flex-col items-center justify-center mt-5 p-3">
        <div className="flex flex-col w-full h-full items-center gap-4">
          {isLoading ? (
            <>
              {new Array(5).fill("").map((m, i) => (
                <CardLoading key={i} />
              ))}
            </>
          ) : (
            <>
              {favourites.length === 0 ? (
                <EmptyList
                  title="No Favourites Found"
                  description={emptyMessage}
                />
              ) : (
                favourites?.map((m, i) => (
                  <FavouriteCard
                    key={String(m._id)}
                    data={m}
                    favourites={favourites}
                    setFavourites={setFavourites}
                  />
                ))
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

type FavouriteCardProps = React.FC<{
  data: favouriteType;
  favourites: favouritesListType;
  setFavourites: setFavouritesListType;
}>;

const FavouriteCard: FavouriteCardProps = ({
  data,
  favourites,
  setFavourites,
}) => {
  const { _id: id, title } = data;
  const { handleFavourite, isLoading } = useFavourite({
    favouritedId: String(id),
    onDeleteSuccess: () => {
      const newList = favourites.filter((f) => f._id !== id);
      setFavourites(newList);
    },
  });

  return (
    <Card className="w-full sm:w-10/12 p-4">
      <Link href={`/playground/detail/${data.chatId}`}>
        <CardTitle className="mb-2">{title}</CardTitle>
      </Link>

      <CardFooter className="p-0 pt-2 flex flex-row items-center justify-between mt-3 gap-2 ">
        <CardDescription className="text-[12px]">
          Created at {formatDate(data.createdAt)}
        </CardDescription>
        <div className="flex flex-row gap-2">
          <ShareButton
            chatId={String(data.chatId)}
            title={String(data.title)}
          />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  disabled={isLoading}
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    handleFavourite();
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
