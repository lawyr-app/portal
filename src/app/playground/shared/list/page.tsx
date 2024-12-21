"use client";

import SearchInput from "@/components/SearchInput";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React, { useEffect, useState } from "react";
import EmptyList from "../../components/EmptyList";
import CardLoading from "../../components/CardLoading";
import { toast } from "sonner";
import axios from "@/lib/axios";
import Link from "next/link";
import { formatDate } from "@/lib/datetime";
import PopoverButton from "@/components/PopoverButton";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { MaybeEmptyArray } from "@/types/common";
import { ShareType } from "@/types/Share";

type ListType = MaybeEmptyArray<ShareType>;
type setListType = React.Dispatch<React.SetStateAction<ListType>>;

const SharedList = () => {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [list, setList] = useState<ListType>([]);

  const fetchSharedList = async () => {
    const showErrorToast = () => {
      toast.error("Failed to fetch the chat history", {
        description: "Please try again",
      });
    };
    try {
      setIsLoading(true);
      const { data } = await axios.get("/share/shared", {
        params: {
          limit: 10,
          skip: 0,
          search,
        },
      });
      if (data.isError) {
        showErrorToast();
      } else {
        setList(data?.data ?? []);
      }
      setIsLoading(false);
    } catch (error) {
      showErrorToast();
      setIsLoading(false);
      console.error(`Something went wrong in fetchHistory due to `, error);
    }
  };

  const handleSearch = () => {
    setSearchInput(search);
  };

  useEffect(() => {
    fetchSharedList();
  }, [searchInput]);

  const emptyMessage =
    searchInput.length > 0
      ? `No shared chat found with ${searchInput} keyword`
      : "Please share a chat by visiting history or favourites";

  console.log("List", list);

  return (
    <div className="flex flex-col w-full h-full relative">
      <header className="flex flex-col gap-2 p-2 sticky top-0 w-full bg-card">
        <SidebarTrigger />
        <div className="w-full flex flex-row items-center justify-center mb-4">
          <SearchInput
            value={search}
            setValue={setSearch}
            handleSearch={handleSearch}
          />
        </div>
      </header>
      <div className="flex w-full h-full flex-col items-center justify-center mt-5 p-3">
        <div className="flex flex-col w-full h-full items-center  gap-4">
          {isLoading ? (
            <>
              {new Array(5).fill("").map((m, i) => (
                <CardLoading key={`card-loading-${i}`} />
              ))}
            </>
          ) : (
            <>
              {list.length === 0 ? (
                <EmptyList title="No shared found" description={emptyMessage} />
              ) : (
                list?.map((m) => (
                  <SharedCard key={String(m._id)} data={m} setList={setList} />
                ))
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SharedList;

type SharedCardProps = React.FC<{
  data: ShareType;
  setList: setListType;
}>;
const SharedCard: SharedCardProps = ({ data, setList }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { title, _id } = data;

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const { data } = await axios.post(`/share/${_id}`);
      if (data.isError) {
        toast.error("Something went wrong while deleting the shared chat");
      } else {
        toast.error("Deleted successfully");
        setList((prev) => prev.filter((f) => f._id !== _id));
      }
      setIsDeleting(false);
    } catch (error) {
      console.error("Something went wrong in handleDelete due to ", error);
      setIsDeleting(false);
    }
  };

  return (
    <Card className="w-full sm:w-10/12 p-4">
      <Link href={`/playground/shared/${_id}`}>
        <CardTitle className="mb-2">{title}</CardTitle>
      </Link>

      <CardFooter className="p-0 pt-2 flex flex-row items-center justify-between mt-3 gap-2 ">
        <CardDescription className="text-[12px]">
          Updated {formatDate(data.createdAt)}
        </CardDescription>
        <div className="flex flex-row gap-2">
          <PopoverButton text="Delete">
            <Button
              disabled={isDeleting}
              variant="destructive"
              size="icon"
              onClick={handleDelete}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </PopoverButton>
        </div>
      </CardFooter>
    </Card>
  );
};
