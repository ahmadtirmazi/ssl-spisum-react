import React from "react";
import { Login } from "core/features/login/Component.styles";
import { GlobalLayout } from "core/components/Layout/GlobalLayout";
import LoginForm from "./LoginForm";

const Component = () => {
  return (
    <GlobalLayout>
      <Login>
        <LoginForm/>
      </Login>
    </GlobalLayout>
  );
};

export default Component;
