import axios from "@/lib/axios";
import { favouritedIdType } from "@/types/Chat";
import { MayBe } from "@/types/common";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const getFavoriteId = (id: MayBe<favouritedIdType>) => {
  const typeIsString = typeof id === "string";
  if (!id) {
    return undefined;
  }
  if (typeIsString) {
    return id;
  }
  if (typeof id === "object" && "_id" in id) {
    return id._id;
  }
  return undefined;
};

type useFavouriteProps = {
  firstQuestion?: String;
  chatId?: String;
  favouritedId: favouritedIdType;

  onDeleteSuccess?: () => void;
  onDeleteError?: () => void;
  onCreateError?: () => void;
  onCreateSuccess?: () => void;
};

const useFavourite = ({
  firstQuestion,
  chatId,
  favouritedId,

  onDeleteSuccess = () => {},
  onDeleteError = () => {},
  onCreateError = () => {},
  onCreateSuccess = () => {},
}: useFavouriteProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFavouritedId, setIsFavouritedId] = useState<MayBe<favouritedIdType>>(
    favouritedId ?? null
  );

  useEffect(() => {
    const favId = getFavoriteId(favouritedId);
    setIsFavouritedId(favId);
  }, [favouritedId]);

  const makefavourite = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`/favourite/${chatId}`, {
        title: firstQuestion,
      });
      if (data.message === "FAVOURITE_CREATION_SUCCESS" && !data.isError) {
        setIsFavouritedId(data.data._id);
        onCreateSuccess();
        toast.success("Favourited the chat");
      } else {
        onCreateError();
        toast.error("Failed to favourite the chat", {
          description: "Please try again",
        });
      }
      console.log("makefavourite data", data);
      setIsLoading(false);
    } catch (error) {
      onCreateError();
      setIsLoading(false);
      console.error(`Something went wrong in makefavourite due to `, error);
      toast.error("Failed to favourite the chat", {
        description: "Please try again",
      });
    }
  };

  const deletefavourite = async (id: String) => {
    try {
      setIsLoading(true);
      const { data } = await axios.delete(`/favourite/${id}`);
      if (data?.message === "FAVOURITE_DELETION_SUCCESS" && !data.isError) {
        setIsFavouritedId(null);
        onDeleteSuccess();
        toast.success("Deleted favourited the chat");
      } else {
        onDeleteError();
        toast.error("Failed to unfavourite the chat", {
          description: "Please try again",
        });
      }
      setIsLoading(false);
    } catch (error) {
      onDeleteError();
      setIsLoading(false);
      console.error(`Something went wrong in deletefavourite due to `, error);
      toast.error("Failed to unfavourite the chat", {
        description: "Please try again",
      });
    }
  };

  const handleFavourite = () => {
    if (isLoading) {
      return null;
    }
    const favId = getFavoriteId(isFavouritedId);
    if (favId) {
      deletefavourite(favId);
    } else {
      makefavourite();
    }
  };

  return {
    isLoading,
    isFavouritedId,
    handleFavourite,
  };
};

export default useFavourite;
