"use client";

import { cn } from "@/lib/utils";
import Navbar from "@/components/app/Navbar";
import React, { useEffect, useState } from "react";
import { useUser } from "@/context/userContext";
import { toast } from "sonner";
import HomeLoading from "./components/HomePageLoading";
import axiosInstance from "@/lib/axios";

type HomeLayoutProps = React.FC<{
  children: React.ReactNode;
}>;
const HomeLayout: HomeLayoutProps = ({ children }) => {
  const { user, storeUser } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const userId = user?._id;

  const fetchUserDetails = async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosInstance.get(`/user/${userId}`);
      console.log("data", data);
      if (data.isError) {
        toast.error("Something went wrong. Please refresh the page");
      } else {
        storeUser(data.data);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Something went wrong in fetchUserDetails  due to ", error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserDetails();
    }
  }, [userId]);

  if (isLoading) {
    return <HomeLoading />;
  }

  return (
    <div className="min-h-screen flex flex-col overflow-y-auto">
      <Navbar />
      <div className={cn("mx-auto px-2 container flex-col flex relative mt-4")}>
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
