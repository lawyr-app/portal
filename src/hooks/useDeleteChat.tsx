import React, { useState } from "react";
import axios from "@/lib/axios";
import { toast } from "sonner";

type useDeleteChatProps = {
  chatId: String;
  onSuccess?: () => void;
  onError?: () => void;
};
const useDeleteChat = ({
  chatId,
  onSuccess = () => {},
  onError = () => {},
}: useDeleteChatProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const { data } = await axios.delete(`/chat/${chatId}`);
      if (data.isError) {
        onError();
        toast.error("Failed to delete the Chat");
      } else {
        toast.success("Deleted the chat successfully");
        onSuccess();
      }
      setIsDeleting(false);
    } catch (error) {
      onError();
      setIsDeleting(false);
      toast.error("Failed to delete the Chat");
      console.error(`Something went wrong in handleDelete due to `, error);
    }
  };

  return {
    isDeleting,
    handleDelete,
  };
};

export default useDeleteChat;
