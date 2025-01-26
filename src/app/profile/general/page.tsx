"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Info } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "@/lib/axios";
import { useUser } from "@/context/userContext";
import Google from "@/assets/svg/Google";
import CopyInput from "@/components/CopyInput";

export default function ProfilePage() {
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
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      <Card>
        <CardContent className="flex items-center space-x-4 py-4">
          <Google />
          <div className="flex-grow">
            <p className="text-sm font-semibold">Google Account</p>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            disabled
            className="opacity-50 cursor-not-allowed"
          >
            Connected
          </Button>
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

      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="text-sm font-semibold">
            Delete Account
          </CardTitle>
          <CardDescription>
            Permanently remove your Personal Account and all of its contents
            from our platform. This action is irreversible, so please continue
            with caution.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DeleteUser />
        </CardContent>
      </Card>
    </div>
  );
}

const DeleteUser = () => {
  const [reason, setReason] = useState("");
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const { removeUser } = useUser();

  const handleDeleteConfirmationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDeleteConfirmation(event.target.value);
  };

  const showWarning = () => {
    toast.warning("Failed to delete user", {
      description: "Please try again",
    });
  };

  const handleDeleteAccount = async () => {
    try {
      setIsDeleting(true);
      const { data } = await axios.post(`/user/delete`, {
        reason,
      });
      if (!data?.isError) {
        removeUser();
        toast.success("Deleted the user successfully");
      } else {
        showWarning();
      }
      setIsDeleting(false);
    } catch (error) {
      showWarning();
      setIsDeleting(false);
    }
  };

  return (
    <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
      <DialogContent
        onEscapeKeyDown={(event) => {
          if (isDeleting) {
            event.preventDefault();
          }
        }}
      >
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <div className="pt-4">
          <Label htmlFor="reason" className="text-sm font-medium">
            Reason
          </Label>
          <Textarea
            id="reason"
            value={reason}
            onChange={(e) => {
              setReason(e.target.value);
            }}
            placeholder="Enter reason"
          />
          {reason.length < 5 && (
            <div className="text-red-500 text-[12px] text-end flex flex-row items-center justify-end">
              <Info className="h-[12px]" /> Enter atleas 5 characters
            </div>
          )}
        </div>
        {reason.length > 5 && (
          <div className="pt-2">
            <Label
              htmlFor="delete-confirmation"
              className="text-sm font-medium"
            >
              Type "delete my account" to confirm:
            </Label>
            <Input
              id="delete-confirmation"
              value={deleteConfirmation}
              onChange={handleDeleteConfirmationChange}
              className="mt-2"
              placeholder="delete my account"
            />
          </div>
        )}

        <DialogFooter>
          <Button
            disabled={isDeleting}
            variant="secondary"
            onClick={() => setIsDeleteDialogOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDeleteAccount}
            disabled={deleteConfirmation !== "delete my account" || isDeleting}
          >
            Delete Account
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
