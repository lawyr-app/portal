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
import { MayBe, MaybeEmptyArray } from "@/types/common";
import { ChatType, favouritedIdType } from "@/types/Chat";

type HistoryListType = MaybeEmptyArray<ChatType>;
type setHistoryListType = React.Dispatch<React.SetStateAction<HistoryListType>>;

const History = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [historyList, setHistoryList] = useState<MaybeEmptyArray<ChatType>>([]);

  const fetchHistory = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get("/chat/chats", {
        params: {
          imit: 10,
          skip: 0,
          search: "",
          needIsFavouritedFlag: true,
        },
      });
      setHistoryList(data?.data ?? []);
      setIsLoading(false);
    } catch (error) {
      console.error(`Something went wrong in fetchHistory due to `, error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
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
        <div className="flex flex-col w-full h-full items-center  gap-4">
          {historyList?.map((m, i) => (
            <HistoryCard
              key={String(m._id)}
              data={m}
              setHistoryList={setHistoryList}
              historyList={historyList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const getFavoriteId = (id: MayBe<favouritedIdType>) => {
  const typeIsString = typeof id === "string";
  if (!id) {
    return undefined;
  }
  if (typeIsString) {
    return id;
  }
  if (typeof id === "object" && "_id" in id) {
    return id._id;
  }
  return undefined;
};

type HistoryCardProps = React.FC<{
  setHistoryList: setHistoryListType;
  historyList: HistoryListType;
  data: ChatType;
}>;
const HistoryCard: HistoryCardProps = ({
  data,
  historyList,
  setHistoryList,
}) => {
  const { _id: chatId, firstQuestion, favouritedId } = data;
  const [isfavourated, setIsFavourited] =
    useState<MayBe<favouritedIdType>>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isFavLoading, setIsFavLoading] = useState<boolean>(false);

  useEffect(() => {
    if (favouritedId) {
      setIsFavourited(getFavoriteId(favouritedId));
    }
  }, [favouritedId]);

  const makefavourite = async () => {
    try {
      setIsFavLoading(true);
      const { data } = await axios.post(`/favourite/${chatId}`, {
        title: firstQuestion,
      });
      setIsFavLoading(false);
    } catch (error) {
      setIsFavLoading(false);
      console.error(`Something went wrong in favouriteAction due to `, error);
    }
  };
  const deletefavourite = async (id: String) => {
    try {
      setIsFavLoading(true);
      const { data } = await axios.delete(`/favourite/${id}`);
      setIsFavLoading(false);
    } catch (error) {
      setIsFavLoading(false);
      console.error(`Something went wrong in favouriteAction due to `, error);
    }
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const { data } = await axios.delete(`/chat/${chatId}`);
      setIsDeleting(false);
    } catch (error) {
      setIsDeleting(false);
      console.error(`Something went wrong in handleDelete due to `, error);
    }
  };

  return (
    <Card className="w-full sm:w-10/12 p-4">
      <Link href="/playground/detail/1746237">
        <CardTitle className="mb-2">{firstQuestion}</CardTitle>
      </Link>

      <CardFooter className="p-0 pt-2 flex flex-row items-center justify-between mt-3 gap-2 ">
        <CardDescription className="text-[12px]">
          Updated 2 may 2001
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
                    const favId = getFavoriteId(isfavourated);
                    if (favId) {
                      deletefavourite(favId);
                    } else {
                      makefavourite();
                    }
                  }}
                >
                  <Star
                    className="h-4 w-4"
                    style={{
                      fill: isfavourated ? "gold" : "",
                      border: isfavourated ? "gold" : "",
                      strokeWidth: isfavourated ? 0 : 2,
                    }}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Favourite</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={handleDelete}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Delete</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardFooter>
    </Card>
  );
};

export default History;
