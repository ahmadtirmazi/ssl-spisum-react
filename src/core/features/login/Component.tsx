import React from "react";
import { Login } from "core/features/login/Component.styles";
import { GlobalLayout } from "core/components/Layout/GlobalLayout";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";

const Component = (props: any) => {
  return (
    <GlobalLayout>
      <Login>
        <LoginForm />
      </Login>
    </GlobalLayout>
  );
};

function mapStateToProps(state: any) {
  return {
    isLoggedIn : state.loginReducer.isLoggedIn
  };
}

export default connect(mapStateToProps)(Component);