"use client";

import { USER_DATA } from "@/constant/localKeys";
import { clearAuthCookie, setAuthCookie } from "@/lib/auth-cookie";
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
  isReady: boolean;
  storeUser: (user: any) => void;
  removeUser: () => void;
};

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isReady, setIsReady] = useState(false);

  const storeUser = (data: any) => {
    localStorage.setItem(USER_DATA, JSON.stringify(data));
    const token = data?.tokenDetails?.token;
    if (token) {
      setAuthCookie(token);
    }
    document.cookie = `userId=${data._id}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
    setUser(data);
  };

  const removeUser = () => {
    setUser(null);
    clearAuthCookie();
    document.cookie = "userId=; path=/; max-age=0";
    localStorage.clear();
    router.replace("/auth/signin");
  };

  useEffect(() => {
    const localData = localStorage.getItem(USER_DATA);
    const parsedData = localData ? JSON.parse(localData) : null;
    setUser(parsedData);

    const token = parsedData?.tokenDetails?.token;
    if (token) {
      setAuthCookie(token);
    } else {
      clearAuthCookie();
    }

    setIsReady(true);
  }, []);

  return (
    <UserContext.Provider value={{ user, isReady, storeUser, removeUser }}>
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
