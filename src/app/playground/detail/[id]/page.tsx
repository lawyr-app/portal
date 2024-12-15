"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React, { useEffect, useRef, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { NavActions } from "@/components/nav-actions";
import { Button } from "@/components/ui/button";
import {
  Clipboard,
  Share,
  Share2,
  Star,
  ThumbsDown,
  ThumbsUp,
  Trash2,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import PopoverButton from "@/components/PopoverButton";
import ChatInput from "@/components/ChatInput";
import { useParams, useRouter } from "next/navigation";
import { NEW_CHAT } from "@/constant/localKeys";
import axios from "@/lib/axios";
import { toast } from "sonner";
import useFavourite from "@/hooks/useFavourite";
import { MayBe } from "@/types/common";
import { ChatType } from "@/types/Chat";
import useDeleteChat from "@/hooks/useDeleteChat";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TooltipChildren from "@/components/TooltipChildren";

type sendMessageProps = {
  question: string;
  chatId: string;
};

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const footerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState("100%");
  const [footerHeight, setFooterHeight] = useState(100);
  const [isLoading, setIsLoading] = useState(false);
  const [chatData, setChatData] = useState<MayBe<ChatType>>(null);
  const router = useRouter();
  const [isMessageLoading, setIsMessageLoading] = useState(false);
  const [allMessages, setAllMessages] = useState<any[]>([]);
  const [message, setMessage] = useState("");
  const [fetchingOlderMessages, setFetchingOlderMessages] = useState(false);
  const limit = 10;
  const [skip, setSkip] = useState(0);

  const {
    handleFavourite,
    isFavouritedId,
    isLoading: isFavouriteLoading,
  } = useFavourite({
    favouritedId: chatData?.favouritedId,
    chatId: chatData?._id,
    firstQuestion: chatData?.firstQuestion,
  });

  const { handleDelete, isDeleting } = useDeleteChat({
    chatId: id,
    onSuccess: () => {
      router.push("/playground");
    },
  });

  useEffect(() => {
    const updateContainerHeight = () => {
      if (footerRef.current) {
        const footerHeight = footerRef.current.offsetHeight;
        setFooterHeight(footerHeight);
        setContainerHeight(`calc(100% - ${footerHeight}px)`);
      }
    };

    // Initial calculation
    updateContainerHeight();

    // Update height on window resize
    window.addEventListener("resize", updateContainerHeight);
    return () => window.removeEventListener("resize", updateContainerHeight);
  }, []);

  console.log("allMessages", allMessages);

  const getChatById = async (id: string) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`/chat/${id}`, {
        params: {
          fetchFavouriteId: true,
          fetchMessages: true,
        },
      });
      if (data.isError) {
        toast("Looks like Chat doesnt exists.");
        router.back();
      } else {
        setChatData(data.data);
        const messages = data?.data?.messages;
        setAllMessages(messages ?? []);
        localStorage.removeItem(NEW_CHAT);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const getChatMessages = async () => {
    try {
      setFetchingOlderMessages(true);
      const { data } = await axios.get(`/message/user/${id}`, {
        params: {
          skip: 0,
          limit: 10,
        },
      });
      if (data.isError) {
      } else {
        // setAllMessages()
      }
      setFetchingOlderMessages(false);
    } catch (error) {
      setFetchingOlderMessages(false);
    }
  };

  const sendMessage = async ({ question, chatId }: sendMessageProps) => {
    try {
      setAllMessages((prev) => [
        ...prev,
        {
          question,
        },
      ]);
      setIsMessageLoading(true);
      const { data } = await axios.post(`/message/start`, {
        question,
        chatId,
      });
      console.log("data", data);
      if (data.isError) {
      } else {
        setAllMessages((prev) => {
          const changedMessage = prev?.map((m) => {
            if (m?.question === question) {
              return data.data;
            } else {
              return m;
            }
          });
          return changedMessage;
        });
        localStorage.removeItem(NEW_CHAT);
      }
      setIsMessageLoading(false);
    } catch (error) {
      setIsMessageLoading(false);
      console.error(`Something went wrong in sendMessage due to `, error);
    }
  };

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      const checkLocal = localStorage.getItem(NEW_CHAT);
      const parsedLocal = checkLocal ? JSON.parse(checkLocal) : null;
      console.log({
        checkLocal,
        parsedLocal,
      });
      if (
        parsedLocal &&
        parsedLocal?._id === id &&
        parsedLocal?.firstQuestion
      ) {
        setChatData(parsedLocal);
        sendMessage({
          question: parsedLocal?.firstQuestion,
          chatId: parsedLocal?._id,
        });
        setIsLoading(false);
      } else {
        console.log("getting chat by id", id);
        getChatById(id);
      }
    }
  }, [id]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div className="w-full h-screen">
      <header className="flex h-14 shrink-0 items-center gap-2 sticky top-0 z-10 w-full bg-card">
        <div className="flex flex-1 items-center gap-2 px-3">
          <TooltipChildren text="Toggles the sidebar">
            <SidebarTrigger />
          </TooltipChildren>
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="line-clamp-1">
                  {chatData?.firstQuestion}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="ml-auto px-3">
          <div className="flex items-center gap-2 text-sm">
            <TooltipChildren text="Favourite">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                disabled={isFavouriteLoading}
                onClick={() => {
                  handleFavourite();
                }}
              >
                <Star
                  style={{
                    fill: isFavouritedId ? "gold" : "",
                    border: isFavouritedId ? "gold" : "",
                    strokeWidth: isFavouritedId ? 0 : 2,
                  }}
                />
              </Button>
            </TooltipChildren>
            <TooltipChildren text="Share">
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <Share2 />
              </Button>
            </TooltipChildren>
            <TooltipChildren text="Delete">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                disabled={isDeleting}
                onClick={handleDelete}
              >
                <Trash2 />
              </Button>
            </TooltipChildren>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100%-3.5rem)] flex-col gap-4 px-4 ">
        <div className="mx-auto h-full w-full max-w-3xl relative">
          <div
            className="overflow-y-scroll scrollbar-hide pt-2"
            style={{
              height: containerHeight,
            }}
          >
            {allMessages?.map((m, i) => {
              return (
                <>
                  <UserChat question={m?.question} key={`chat-${i}`} />
                  <ChatResponse
                    // isLoading
                    message={m?.answer ?? ""}
                    id={m?._id}
                    key={Date.now()}
                  />
                </>
              );
            })}
          </div>
          <footer ref={footerRef} className="absolute bottom-0 w-full">
            <ChatInput
              isPlayground={false}
              classname="w-full"
              setMessage={setMessage}
              message={message}
              sendMessage={() => {
                sendMessage({ question: message, chatId: id });
              }}
            />
            <p className="text-[12px] text-center mt-1">
              lawyrr may make mistakes. Please use with discretion.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

type UserChatProps = React.FC<{
  question: string;
}>;
const UserChat: UserChatProps = ({ question }) => {
  return (
    <div className="flex flex-row justify-end mb-4 mt-3 ">
      <Card className="max-w-fit flex flex-row gap-2 shadow-none p-2 text-md w-10/12">
        {question}
      </Card>
    </div>
  );
};

type ChatResponseProps = React.FC<{
  isLoading?: boolean;
  message: string;
  id: string;
}>;
const ChatResponse: ChatResponseProps = ({ isLoading, message, id }) => {
  return (
    <div className="w-full flex flex-col">
      <Card className="shadow-none mb-4 p-2 text-md relative">
        {isLoading ? (
          <p>loading..</p>
        ) : (
          <>
            <p>{message}</p>
            <Card className="flex shadow-sm flex-row items-center justify-end gap-1 mt-2 absolute bottom-[-10px] right-[10px]">
              <PopoverButton text="Copy">
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <Clipboard />
                </Button>
              </PopoverButton>
              <PopoverButton text="Like">
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <ThumbsUp />
                </Button>
              </PopoverButton>
              <PopoverButton text="Dislike">
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <ThumbsDown />
                </Button>
              </PopoverButton>
            </Card>
          </>
        )}
      </Card>
    </div>
  );
};

export default Detail;
