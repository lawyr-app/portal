import { MayBe } from "@/types/common";
import { favouriteType } from "./Favourite";
import { UserType } from "./User";
import { CommonMongoTypes } from "./common";

export type favouritedIdType = MayBe<String | favouriteType>;

type favObject = {
  favouritedId: favouritedIdType;
};

export type ChatType = {
  firstQuestion: String;
  isDeleted: Boolean;
  createdBy: String | UserType;
} & CommonMongoTypes &
  favObject;
