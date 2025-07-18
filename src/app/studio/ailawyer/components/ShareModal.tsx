import { Button } from "@/components/ui/button";
import { Copy, Share2 } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import CopyInput from "@/components/CopyInput";
import { useState } from "react";
import axios from "@/lib/axios";
import { toast } from "sonner";

type ShareModalProps = React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  chatId: string;
}>;
const ShareModal: ShareModalProps = ({ open, setOpen, title, chatId }) => {
  const [link, setLink] = useState("");
  const [shareTitle, setShareTitle] = useState(title);
  const [isCreating, setIsCreating] = useState(false);

  const createSharedLink = async () => {
    try {
      setIsCreating(true);
      const { data } = await axios.post("/share/create", {
        title: shareTitle,
        chatId,
        isPublic: false,
      });
      console.log("data", data);
      if (data.isError) {
      } else {
        const shareLink = `${window.location.origin}/studio/ailawyer/shared/${data.data._id}`;
        console.log("shareLink", shareLink);
        setLink(shareLink);
        navigator.clipboard.writeText(String(shareLink)).then(
          () => {
            toast.success("Shared link copied");
          },
          () => {
            toast.error("Failed to copy");
          }
        );
      }
      console.log("data", data);
      setIsCreating(false);
    } catch (error) {
      console.error("Something went wrong in createSharedLink due to ", error);
      setIsCreating(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
      }}
    >
      <DialogTrigger asChild>&nbsp;</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        {link ? (
          <>
            <div className="flex items-center space-x-2">
              <CopyInput value={link} className="w-full" disabled={false} />
            </div>
          </>
        ) : (
          <>
            <div className="w-full flex flex-col gap-y-4">
              <Input
                type="text"
                placeholder="Enter title"
                value={shareTitle}
                onChange={(e) => {
                  const value = e.target.value;
                  setShareTitle(value);
                }}
              />
              <Button
                disabled={isCreating}
                className="w-full"
                onClick={() => {
                  createSharedLink();
                }}
              >
                Create Shared Link
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
