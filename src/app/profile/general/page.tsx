import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const General = () => {
  return (
    <div className="flex flex-col gap-6">
      <Card className="rounded-lg">
        <CardHeader>
          <CardTitle>Name</CardTitle>
          <CardDescription>
            Please enter your full name, or a display name you are comfortable
            with.
          </CardDescription>
          <Input className="max-w-[300px]" />
        </CardHeader>
        <CardFooter className="flex flex-row items-center justify-end border p-4">
          <Button variant="default" className="w-[150px] font-semibold">
            Save
          </Button>
        </CardFooter>
      </Card>
      <LawyerId />
      <GoogleAccount />
      <DeleteAccount />
    </div>
  );
};

const DeleteAccount = () => {
  return (
    <Card className="rounded-lg">
      <CardHeader>
        <CardTitle>Delete Account</CardTitle>
        <CardDescription>
          Permanently remove your Personal Account and all of its contents from
          our platform. This action is irrreversible, so please continue with
          caution.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-row items-center justify-end border p-4">
        <Button variant="destructive" className="w-[150px] font-semibold">
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

const LawyerId = () => {
  return (
    <Card className="rounded-lg">
      <CardHeader>
        <CardTitle>Lawyrr Id</CardTitle>
        <CardDescription>This is your user ID within Lawyrr.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row items-center relative">
        <Input className="w-full" disabled />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="absolute right-[24px]"
                size="icon"
              >
                <Copy className="h-3 w-3" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>copy</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
};

const GoogleAccount = () => {
  return (
    <Card className="rounded-lg">
      <CardHeader>
        <CardTitle>Google</CardTitle>
        <CardDescription>
          Google account connected with our platform
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row items-center relative">
        <Input className="w-full" disabled />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="absolute right-[24px]"
                size="icon"
              >
                <Copy className="h-3 w-3" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>copy</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
};

export default General;
