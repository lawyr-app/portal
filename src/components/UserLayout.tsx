"use client";

import React, { useState } from "react";

type UserLayoutProps = React.FC<{
  children: React.ReactNode;
}>;

const UserLayout: UserLayoutProps = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserDetails = async () => {};

  return <div>UserLayout</div>;
};

export default UserLayout;
