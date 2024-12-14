"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Paperclip, SendHorizontal } from "lucide-react";
import { SelectTerrortory } from "@/components/SelectStates";
import { cn } from "@/lib/utils";
import axios from "@/lib/axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { NEW_CHAT } from "@/constant/localKeys";

type ChatInputProps = React.FC<{
  classname?: string;
  suggestedQuestion?: string;
  isPlayground?: Boolean;
  sendMessage?: () => void;
  setMessage?: React.Dispatch<React.SetStateAction<string>>;
  message?: string;
}>;
const ChatInput: ChatInputProps = ({
  classname,
  isPlayground = true,
  sendMessage = () => {},
  message,
  setMessage,
  suggestedQuestion = "",
}) => {
  const [isCreatingChat, setIsCreatingChat] = useState(false);
  const [question, setQuestion] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (suggestedQuestion) {
      setQuestion(suggestedQuestion);
    }
  }, [suggestedQuestion]);

  const handleCreateChat = async () => {
    try {
      setIsCreatingChat(true);
      const payload = {
        question,
        chatId: null,
      };
      const { data } = await axios.post("/chat/initiate", payload);
      const chatId = data?.data?._id;
      if (!chatId) {
        toast.error("Failed to initiate Chat", {
          description: "Please try again",
        });
      } else {
        localStorage.setItem(NEW_CHAT, JSON.stringify(data?.data));
        router.push(`/playground/detail/${chatId}`);
      }
      setIsCreatingChat(false);
    } catch (error) {
      setIsCreatingChat(false);
      console.error(`Something went wrong in handleCreateChat due to `, error);
    }
  };

  const value = isPlayground ? question : message;
  const setValue = isPlayground ? setQuestion : setMessage;

  return (
    <Card className={cn("border border-slate-300 shadow-none p-2", classname)}>
      <Textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="border-none shadow-none focus:outline-none focus-visible:ring-0 resize-none "
        placeholder="Type your message here."
      />
      <div
        className="flex flex-row items-center justify-between mt-2"
        aria-disabled={isCreatingChat}
      >
        <div className="flex flex-row gap-2">
          <Button variant="outline" size="icon">
            <Paperclip className="h-4 w-4" />
          </Button>
          <SelectTerrortory />
        </div>
        <Button
          size="icon"
          onClick={() => {
            if (isPlayground) {
              handleCreateChat();
            } else {
              sendMessage();
            }
          }}
        >
          <SendHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default ChatInput;
