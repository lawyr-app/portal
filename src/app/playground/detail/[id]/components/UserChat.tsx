import { Card } from "@/components/ui/card";
import React from "react";

type UserChatProps = React.FC<{
  question: string;
}>;
const UserChat: UserChatProps = ({ question }) => {
  return (
    <div className="flex flex-row justify-end mb-4 mt-3 ">
      <Card className="max-w-fit flex flex-row gap-2 shadow-none p-2 text-md w-10/12">
        {question}
      </Card>
    </div>
  );
};

export default UserChat;
