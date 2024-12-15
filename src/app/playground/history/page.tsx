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
import useFavourite from "@/hooks/useFavourite";
import useDeleteChat from "@/hooks/useDeleteChat";
import SearchInput from "@/components/SearchInput";
import { formatDate } from "@/lib/datetime";
import CardLoading from "../components/CardLoading";
import EmptyList from "../components/EmptyList";
import { toast } from "sonner";

type HistoryListType = MaybeEmptyArray<ChatType>;
type setHistoryListType = React.Dispatch<React.SetStateAction<HistoryListType>>;

const History = () => {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [historyList, setHistoryList] = useState<MaybeEmptyArray<ChatType>>([]);

  const fetchHistory = async () => {
    const showErrorToast = () => {
      toast.error("Failed to fetch the chat history", {
        description: "Please try again",
      });
    };

    try {
      setIsLoading(true);
      const { data } = await axios.get("/chat/chats", {
        params: {
          imit: 10,
          skip: 0,
          search: searchInput,
          needIsFavouritedFlag: true,
        },
      });
      if (data.isError) {
        showErrorToast();
      } else {
        setHistoryList(data?.data ?? []);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(`Something went wrong in fetchHistory due to `, error);
      setIsLoading(false);
      showErrorToast();
    }
  };

  const handleSearch = () => {
    setSearchInput(search);
  };

  useEffect(() => {
    fetchHistory();
  }, [searchInput]);

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
        <div className="flex flex-col w-full h-full items-center  gap-4">
          {isLoading ? (
            <>
              {new Array(5).fill("").map((m) => (
                <CardLoading />
              ))}
            </>
          ) : (
            <>
              {historyList.length === 0 ? (
                <EmptyList
                  title="No chat history found"
                  description="Please create new chat"
                />
              ) : (
                historyList?.map((m, i) => (
                  <HistoryCard
                    key={String(m._id)}
                    data={m}
                    setHistoryList={setHistoryList}
                    historyList={historyList}
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

  const { handleFavourite, isFavouritedId, isLoading } = useFavourite({
    firstQuestion,
    chatId,
    favouritedId,
  });
  const { handleDelete, isDeleting } = useDeleteChat({
    chatId,
    onSuccess: () => {
      const newList = historyList.filter((f) => f._id !== chatId);
      setHistoryList(newList);
    },
  });

  return (
    <Card className="w-full sm:w-10/12 p-4">
      <Link href={`/playground/detail/${chatId}`}>
        <CardTitle className="mb-2">{firstQuestion}</CardTitle>
      </Link>

      <CardFooter className="p-0 pt-2 flex flex-row items-center justify-between mt-3 gap-2 ">
        <CardDescription className="text-[12px]">
          Updated {formatDate(data.createdAt)}
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
                  disabled={isLoading}
                  onClick={() => {
                    handleFavourite();
                  }}
                >
                  <Star
                    className="h-4 w-4"
                    style={{
                      fill: isFavouritedId ? "gold" : "",
                      border: isFavouritedId ? "gold" : "",
                      strokeWidth: isFavouritedId ? 0 : 2,
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
                  disabled={isDeleting}
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
