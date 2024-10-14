"use client";

import { GraphQLProvider } from "@/context/graphql";
import { SearchProvider } from "@/context/search";
import React from "react";

const MainLayout = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <GraphQLProvider>
      <SearchProvider>{children}</SearchProvider>
    </GraphQLProvider>
  );
};

export default MainLayout;
