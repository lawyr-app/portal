import { ChatType } from "./Chat";
import { CommonMongoTypes } from "./common";
import { UserType } from "./User";

export type favouriteType = {
  chatId: String | ChatType;
  createdBy: String | UserType;
  isDeleted: Boolean;
  title: String;
} & CommonMongoTypes;
