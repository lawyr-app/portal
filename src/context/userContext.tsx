"use client";

import { USER_DATA } from "@/constant/localKeys";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type UserContextProps = {
  user: any;
  storeUser: (user: any) => void;
  removeUser: () => void;
};

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  const storeUser = (data: any) => {
    localStorage.setItem(USER_DATA, JSON.stringify(data));
    setUser(data);
  };

  const removeUser = () => {
    setUser(null);
    router.replace("/auth/signup");
    localStorage.clear();
  };

  useEffect(() => {
    const localData = localStorage.getItem(USER_DATA);
    const parsedData = localData ? JSON.parse(localData) : null;
    setUser(parsedData);
  }, []);

  return (
    <UserContext.Provider value={{ user, storeUser, removeUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
