import React from "react";
import { GlobalContainer } from "./glboalLayout.styles";

interface OwnProps {
  children: React.ReactNode;
  fillWindow?: boolean;
}

export const GlobalLayout = ({ children, fillWindow = false }: OwnProps) => {
  return (
    <GlobalContainer className={ fillWindow ? "fill-window" : ""}>
      {children}
    </GlobalContainer>
  );
};
