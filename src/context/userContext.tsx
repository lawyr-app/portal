"use client";

import { USER_DATA } from "@/constant/localKeys";
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
};

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  const storeUser = (data: any) => {
    localStorage.setItem(USER_DATA, JSON.stringify(data));
    setUser(data);
  };

  useEffect(() => {
    const localData = localStorage.getItem(USER_DATA);
    const parsedData = localData ? JSON.parse(localData) : null;
    setUser(parsedData);
  }, []);

  return (
    <UserContext.Provider value={{ user, storeUser }}>
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
