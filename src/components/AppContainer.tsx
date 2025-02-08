import React from "react";

type AppContainerProps = React.FC<{
  children: React.ReactNode;
  className?: string;
}>;
const AppContainer: AppContainerProps = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-black text-gray-600 dark:text-gray-300 ">
      <div className="mx-auto px-2 container relative">{children}</div>
    </div>
  );
};

export default AppContainer;
