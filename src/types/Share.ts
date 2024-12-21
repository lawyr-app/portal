import { ChatType } from "@/types/Chat";
import { UserType } from "./User";
import { MessageType } from "./Message";
import { CommonMongoTypes } from "./common";

export type ShareType = {
  chatId: string | ChatType;
  title: string;
  createdBy: string | UserType;
  isPublic: boolean;
  isDeleted: boolean;
  sharedMessages: [string | MessageType];
} & CommonMongoTypes;
