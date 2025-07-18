import React from "react";

type PlaygroundLayoutProps = React.FC<{
  children: React.ReactNode;
}>;
const Layout: PlaygroundLayoutProps = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
