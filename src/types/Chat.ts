import { favouriteType } from "./Favourite";
import { UserType } from "./User";
import { CommonMongoTypes } from "./common";

export type favouritedIdType = String | favouriteType;

type favObject = {
  favouritedId: favouritedIdType;
};

export type ChatType = {
  firstQuestion: String;
  isDeleted: Boolean;
  createdBy: String | UserType;
} & CommonMongoTypes &
  favObject;
