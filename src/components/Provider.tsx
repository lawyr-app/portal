"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

type ProviderProps = React.FC<{
  children: React.ReactNode;
}>;
const Provider: ProviderProps = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="theme"
    >
      {children}
    </ThemeProvider>
  );
};

export default Provider;
