/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Paperclip, SendHorizontal } from "lucide-react";
import SelectRegion from "@/components/SelectRegion";
import { cn } from "@/lib/utils";
import axios from "@/lib/axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { NEW_CHAT } from "@/constant/localKeys";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type ChatInputProps = React.FC<{
  classname?: string;
  suggestedQuestion?: string;
  isPlayground?: boolean;
  sendMessage?: () => void;
  setMessage?: React.Dispatch<React.SetStateAction<string>>;
  message?: string;
}>;
const ChatInput: ChatInputProps = ({
  classname,
  isPlayground = true,
  sendMessage = () => {},
  message = "",
  setMessage,
  suggestedQuestion = "",
}) => {
  const [isCreatingChat, setIsCreatingChat] = useState(false);
  const [question, setQuestion] = useState("");
  const router = useRouter();
  const [region, setRegion] = useState("");

  const value = isPlayground ? question : message;
  const setValue = isPlayground ? setQuestion : setMessage;

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
        router.push(`/studio/ailawyer/detail/${chatId}`);
      }
      setIsCreatingChat(false);
    } catch (error) {
      setIsCreatingChat(false);
      console.error(`Something went wrong in handleCreateChat due to `, error);
    }
  };

  const handleClick = () => {
    if (isPlayground) {
      handleCreateChat();
    } else {
      sendMessage();
    }
  };

  return (
    <Card className={cn("border shadow-none p-2", classname)}>
      <CustomRichTextEditor
        handleClick={handleClick}
        value={value}
        setValue={setValue!}
      />
      <div
        className="flex flex-row items-center justify-between mt-2"
        aria-disabled={isCreatingChat}
      >
        <div className="flex flex-row gap-2">
          {/* <Button variant="outline" size="icon">
            <Paperclip className="h-4 w-4" />
          </Button> */}
          {isPlayground && (
            <SelectRegion region={region} setRegion={setRegion} />
          )}
        </div>
        <Button size="icon" onClick={handleClick}>
          <SendHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

type CustomRichTextEditorProps = React.FC<{
  handleClick: () => void;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}>;
const CustomRichTextEditor: CustomRichTextEditorProps = ({
  handleClick,
  value,
  setValue,
}) => {
  const editorRef = useRef(null);

  console.log("value", value);

  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    editorProps: {
      handleKeyDown(_, event) {
        if (event.key === "Enter") {
          handleClick();
          return true;
        }
        return false;
      },
    },
    autofocus: true,
    onUpdate: ({ editor }) => {
      setValue!(editor.getText());
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getText()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  return (
    <div
      ref={editorRef}
      className="border-none rounded p-2 resize-none overflow-auto max-h-[8rem] " // Styling for max and min height
      style={{
        lineHeight: "1.5rem",
      }}
    >
      <EditorContent
        editor={editor}
        style={{
          border: "none",
          outline: "none",
          boxShadow: "none",
        }}
        className="focus:outline-none active:outline-none"
      />
    </div>
  );
};

export default ChatInput;
