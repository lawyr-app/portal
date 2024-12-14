import { ChatType } from "./Chat";
import { CommonMongoTypes } from "./common";

import { UserType } from "./User";

export type MessageType = {
  question: String;
  answer: String;
  createdBy: String | UserType;
  chatId: String | ChatType;
} & CommonMongoTypes;
