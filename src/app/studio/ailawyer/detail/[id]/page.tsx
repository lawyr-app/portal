"use client";
import React, { useEffect, useRef, useState } from "react";
import ChatInput from "@/components/ChatInput";
import { useParams, useRouter } from "next/navigation";
import { NEW_CHAT } from "@/constant/localKeys";
import axios from "@/lib/axios";
import { toast } from "sonner";
import { MayBe } from "@/types/common";
import { ChatType } from "@/types/Chat";
import UserChat from "../../components/UserChat";
import ChatResponse from "../../components/ChatResponse";
import ChatLoading from "../../components/ChatLoading";
import ChatHeader from "../../components/ChatHeader";

type sendMessageProps = {
  question: string;
  chatId: string;
};

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const footerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState("100%");
  const [isLoading, setIsLoading] = useState(false);
  const [chatData, setChatData] = useState<MayBe<ChatType>>(null);
  const router = useRouter();
  const [isMessageLoading, setIsMessageLoading] = useState(false);
  const [allMessages, setAllMessages] = useState<any[]>([]);
  const [message, setMessage] = useState("");
  const [fetchingOlderMessages, setFetchingOlderMessages] = useState(false);
  const limit = 10;
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const updateContainerHeight = () => {
      if (footerRef.current) {
        const footerHeight = footerRef.current.offsetHeight;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isLoading) {
    return <ChatLoading />;
  }

  return (
    <div className="w-full h-screen">
      <ChatHeader chatData={chatData} router={router} isShared={false} />

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
                    allMessages={allMessages}
                    setAllMessages={setAllMessages}
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

export default Detail;
