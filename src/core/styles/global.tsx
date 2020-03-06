import { Global } from "@emotion/core";
import React from "react";

export const GlobalStyles = () => {
  return <Global styles={{
    ".fill-window": {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  }} />;
};
