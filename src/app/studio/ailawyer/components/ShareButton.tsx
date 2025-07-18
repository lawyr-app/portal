"use client";

import PopoverButton from "@/components/PopoverButton";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import React, { useState } from "react";
import ShareModal from "./ShareModal";

type ShareButtonProps = React.FC<{
  chatId: string;
  title: string;
  isHeader?: boolean;
}>;
const ShareButton: ShareButtonProps = ({ chatId, title, isHeader = false }) => {
  const [isSharedModalOpen, setIsSharedModalOpen] = useState(false);
  return (
    <>
      <PopoverButton text="Share">
        <Button
          variant={isHeader ? "ghost" : "outline"}
          size="icon"
          onClick={() => {
            setIsSharedModalOpen(true);
          }}
        >
          <Share2 className="h-4 w-4" />
        </Button>
      </PopoverButton>
      <ShareModal
        title={title}
        chatId={chatId}
        open={isSharedModalOpen}
        setOpen={setIsSharedModalOpen}
      />
    </>
  );
};

export default ShareButton;
