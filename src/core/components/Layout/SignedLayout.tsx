import React from "react";
import { GlobalLayout } from "./GlobalLayout";

interface OwnProps {
  children: React.ReactNode;
}

export const SignedLayout = ({ children }: OwnProps) => {
  return <GlobalLayout>{children}</GlobalLayout>;
};
