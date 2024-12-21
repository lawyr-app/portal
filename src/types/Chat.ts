import { MayBe } from "@/types/common";
import { favouriteType } from "./Favourite";
import { UserType } from "./User";
import { CommonMongoTypes } from "./common";

export type favouritedIdType = MayBe<string | favouriteType>;

type favObject = {
  favouritedId: favouritedIdType;
};

export type ChatType = {
  firstQuestion: string;
  isDeleted: boolean;
  createdBy: string | UserType;
} & CommonMongoTypes &
  favObject;
