"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Info } from "lucide-react";
import { useUser } from "@/context/userContext";
import { toast } from "sonner";
import axios from "axios";

const AdvancedSetting = () => {
  return (
    <div className="flex flex-col gap-y-4">
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
};

export default AdvancedSetting;

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
