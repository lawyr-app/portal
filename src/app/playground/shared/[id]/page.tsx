"use client";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import UserChat from "../../components/UserChat";
import ChatResponse from "../../components/ChatResponse";
import ChatHeader from "../../components/ChatHeader";
import { ChatType } from "@/types/Chat";
import { MayBe } from "@/types/common";
import axios from "@/lib/axios";
import { useUser } from "@/context/userContext";
import { ShareType } from "@/types/Share";
import { toast } from "sonner";

const SharedDetail = () => {
  const { user } = useUser();
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const footerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState("100%");
  const [sharedData, setSharedData] = useState<MayBe<ShareType>>(null);
  const [chatData, setChatData] = useState<MayBe<ChatType>>(null);
  const [allMessages, setAllMessages] = useState<any[]>([]);
  const [isCreating, setIsCreating] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const isUserChat = user?._id === sharedData?.createdBy;
  console.log({
    user,
    sharedData,
  });

  const getSharedById = async (id: string) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`/share/${id}`);
      if (data.isError) {
      } else {
        setSharedData(data.data);
        setAllMessages(data.data.sharedMessages);
      }
      console.log("data", data);
      setIsLoading(false);
    } catch (error) {
      console.error("Something went wrong in getSharedById due to ", error);
      setIsLoading(false);
    }
  };

  const handleContinueChat = async () => {
    try {
      setIsCreating(true);
      const { data } = await axios.post(`/share/continue`, {
        shareId: id,
      });
      if (data.isError) {
        toast("Something went wrong in continuing the chat");
      } else {
        router.push(`/playground/detail/${data.data._id}`);
      }
      setIsCreating(false);
    } catch (error) {
      toast("Something went wrong in continuing the chat");
      setIsCreating(false);
      console.error(
        "Something went wrong in handleContinueChat due to ",
        error
      );
    }
  };

  useEffect(() => {
    if (id) {
      getSharedById(id);
    }
  }, [id]);

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div className="w-full h-screen">
      <ChatHeader isShared chatData={sharedData} router={router} />

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
            <div className="flex flex-row w-full items-center justify-center">
              <Button
                disabled={isCreating}
                className="w-full rounded-2xl"
                onClick={() => {
                  if (isUserChat) {
                    router.push(`/playground/detail/${sharedData?.chatId}`);
                  } else {
                    handleContinueChat();
                  }
                }}
              >
                {isUserChat ? "View" : "Continue"} Chat
              </Button>
            </div>
            <p className="text-[12px] text-center mt-1">
              lawyrr may make mistakes. Please use with discretion.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default SharedDetail;
