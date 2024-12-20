"use client";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import UserChat from "../../components/UserChat";
import ChatResponse from "../../components/ChatResponse";
import ChatHeader from "../../components/ChatHeader";
import { ChatType } from "@/types/Chat";
import { MayBe } from "@/types/common";
import axios from "axios";

const SharedDetail = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const footerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState("100%");
  const [chatData, setChatData] = useState<MayBe<ChatType>>(null);
  const [allMessages, setAllMessages] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const getSharedById = async (id: string) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`/share/${id}`);
      console.log("data", data);
      setIsLoading(false);
    } catch (error) {
      console.error("Something went wrong in getSharedById due to ", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getSharedById(id);
    }
  }, [id]);

  return (
    <div className="w-full h-screen">
      <ChatHeader chatData={chatData} router={router} />

      <div className="flex h-[calc(100%-3.5rem)] flex-col gap-4 px-4 ">
        <div className="mx-auto h-full w-full max-w-3xl relative">
          <div
            className="overflow-y-scroll scrollbar-hide pt-2"
            style={{
              height: containerHeight,
            }}
          >
            {/* {allMessages?.map((m, i) => {
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
            })} */}
          </div>
          <footer ref={footerRef} className="absolute bottom-0 w-full">
            <div className="flex flex-row w-full items-center justify-center">
              <Button className="w-full rounded-2xl">Continue Chat</Button>
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
