import React from "react";

type AuthLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return <div>AuthLayout</div>;
};

export default AuthLayout;
