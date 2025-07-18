"use client";

import React, { useState, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
import PopoverButton from "@/components/PopoverButton";
import { Button } from "@/components/ui/button";
import { Smile } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const EmojiContainer = () => {
  return (
    <>
      <PopoverButton text="Add Emojis">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full">
              <Smile className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full">
            <EmojiPicker
              className="border-0"
              searchDisabled
              style={{ border: "none" }}
            />
          </PopoverContent>
        </Popover>
      </PopoverButton>
    </>
  );
};

export default EmojiContainer;
