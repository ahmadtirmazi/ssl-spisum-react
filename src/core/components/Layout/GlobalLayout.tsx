import React from "react";
import { GlobalContainer } from "./glboalLayout.styles";

interface OwnProps {
  children: React.ReactNode;
}

export const GlobalLayout = ({ children }: OwnProps) => {
  return <GlobalContainer>{children}</GlobalContainer>;
};
