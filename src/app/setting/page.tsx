"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import axios from "@/lib/axios";
import { useUser } from "@/context/userContext";
import Google from "@/assets/svg/Google";
import CopyInput from "@/components/CopyInput";

export default function GeneralSetting() {
  const { user, storeUser } = useUser();
  const [username, setUsername] = useState("johndoe");
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (user) {
      setUsername(user.username);
    }
  }, [user]);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSaveUsername = async () => {
    try {
      setIsUpdating(true);
      const { data } = await axios.put(`/user/update`, {
        username,
      });
      if (!data?.isError) {
        if (data.data) {
          storeUser(data.data);
        }
        toast.success("Updated the user successfully");
      } else {
        toast.error("Failed to update the user");
      }
      setIsUpdating(false);
    } catch (error) {
      setIsUpdating(false);
    }
  };

  return (
    <div className="flex flex-col gap-y-4">
      <Card>
        <CardContent className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 py-4">
          <span className="self-center sm:self-auto">
            <Google />
          </span>
          <div className="flex-grow text-center sm:text-left">
            <p className="text-sm font-semibold">Google Account</p>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
          </div>
          <div className="self-center sm:self-auto">
            <Button
              variant="outline"
              size="sm"
              disabled
              className="opacity-50 cursor-not-allowed"
            >
              Connected
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold">ID</CardTitle>
          <CardDescription>Your unique identifier</CardDescription>
        </CardHeader>
        <CardContent>
          <CopyInput value={String(user?._id)} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold">Username</CardTitle>
          <CardDescription>Your display name on the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
          />
        </CardContent>
        <CardFooter>
          <Button
            disabled={isUpdating || user?.username === username}
            onClick={handleSaveUsername}
          >
            Save Username
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
