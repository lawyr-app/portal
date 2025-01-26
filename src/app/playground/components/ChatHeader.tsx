import PopoverButton from "@/components/PopoverButton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import useDeleteChat from "@/hooks/useDeleteChat";
import useFavourite from "@/hooks/useFavourite";
import { ChatType } from "@/types/Chat";
import { MayBe } from "@/types/common";
import { Share2, Star, Trash2 } from "lucide-react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React from "react";
import ShareButton from "./ShareButton";
import { ShareType } from "@/types/Share";

type ChatHeaderProps = React.FC<{
  chatData?: MayBe<ChatType>;
  shareData?: MayBe<ShareType>;
  router: AppRouterInstance;
  isShared: boolean;
}>;
const ChatHeader: ChatHeaderProps = ({
  chatData,
  router,
  isShared = false,
  shareData,
}) => {
  const {
    handleFavourite,
    isFavouritedId,
    isLoading: isFavouriteLoading,
  } = useFavourite({
    favouritedId: chatData?.favouritedId,
    chatId: chatData?._id,
    firstQuestion: chatData?.firstQuestion,
  });

  const { handleDelete, isDeleting } = useDeleteChat({
    chatId: String(chatData?._id),
    onSuccess: () => {
      router.push("/playground");
    },
  });

  return (
    <header className="flex h-14 shrink-0 items-center gap-2 sticky top-0 z-10 w-full bg-card">
      <div className="flex flex-1 items-center gap-2 px-3">
        <PopoverButton text="Toggles the sidebar">
          <SidebarTrigger />
        </PopoverButton>
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="line-clamp-1">
                {chatData?.firstQuestion ?? shareData?.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="ml-auto px-3">
        {!isShared && (
          <div className="flex items-center gap-2 text-sm">
            <PopoverButton text="Favourite">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                disabled={isFavouriteLoading}
                onClick={() => {
                  handleFavourite();
                }}
              >
                <Star
                  style={{
                    fill: isFavouritedId ? "gold" : "",
                    border: isFavouritedId ? "gold" : "",
                    strokeWidth: isFavouritedId ? 0 : 2,
                  }}
                />
              </Button>
            </PopoverButton>
            <ShareButton
              isHeader
              chatId={isShared ? String(shareData?._id) : String(chatData?._id)}
              title={String(shareData?.title ?? "")}
            />
            <PopoverButton text="Delete">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                disabled={isDeleting}
                onClick={handleDelete}
              >
                <Trash2 />
              </Button>
            </PopoverButton>
          </div>
        )}
      </div>
    </header>
  );
};

export default ChatHeader;
