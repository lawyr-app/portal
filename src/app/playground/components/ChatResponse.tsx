/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import PopoverButton from "@/components/PopoverButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clipboard, ThumbsDown, ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import MessageLoading from "./MessageLoading";
import Markdown from "react-markdown";

type ChatResponseProps = React.FC<{
  isLoading?: boolean;
  message: string;
  id: string;
  allMessages: any;
  setAllMessages: any;
}>;
const ChatResponse: ChatResponseProps = ({
  isLoading,
  message,
  id,
  allMessages,
  setAllMessages,
}) => {
  const [showOptions, setOptions] = useState(false);
  const [localMessage, setLocalMessage] = useState(message);

  useEffect(() => {
    setLocalMessage(message);
    if (message) {
      setOptions(true);
    }
  }, [message]);

  useEffect(() => {
    if (id && !localMessage) {
      console.log("id fetched", id);
      const eventSource = new EventSource(
        `http://localhost:8000/api/message/get/${id}`
      );
      eventSource.onmessage = (e) => {
        const serverText = e.data;
        const parsedData = JSON.parse(serverText);
        const { data, isError, message } = parsedData;
        if (isError) {
          // NO_CONTEXT
          // STARTED
          // IN_PROGRESS
          // COMPLETED
          // INTERNAL_SERVER_ERROR
          if (message === "NO_CONTEXT" || message === "INTERNAL_SERVER_ERROR") {
            eventSource.close();
          }
        } else {
          if (message === "COMPLETED") {
            eventSource.close();
            setAllMessages((prev) => {
              const changedList = prev.map((m) => {
                if (m._id === id) {
                  return data;
                }
                return m;
              });
              return changedList;
            });
          } else if (message === "IN_PROGRESS") {
            setLocalMessage((p) => `${p} ${data}`);
          }
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, localMessage]);

  return (
    <div className="w-full flex flex-col">
      <Card className="shadow-none mb-4 p-2 text-md relative">
        {isLoading || !localMessage ? (
          <MessageLoading />
        ) : (
          <>
            <Markdown>{localMessage}</Markdown>
            {showOptions && (
              <Card className="flex shadow-sm flex-row items-center justify-end gap-1 mt-2 absolute bottom-[-20px] right-[10px]">
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
            )}
          </>
        )}
      </Card>
    </div>
  );
};

export default ChatResponse;
