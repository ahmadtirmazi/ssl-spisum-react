import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { Button, TextField } from "@material-ui/core";

import { CoreRoutes } from "core/routes";
import { GlobalLayout } from "core/components/Layout/GlobalLayout";
import { Login, getLoginFormStyles } from "core/features/login/Component.styles";
import { loginAction } from "./_actions";

const Component = (props: any) => {
  const classesLoginForm = getLoginFormStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (username.length && password.length) {
      props.loginAction(username, password);
    }
  };

  return (
    <GlobalLayout fillWindow={true}>
      {props.isLoggedIn ? (
        <Redirect to={CoreRoutes.DASHBOARD} />
      ) : (
        <Login>
          <form
            className={classesLoginForm.root}
            noValidate
            autoComplete="off"
            onSubmit={event => handleSubmit(event)}
          >
            <TextField
              id="username"
              name="username"
              label="Username"
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />

            {props.error !== undefined && props.error.length ? (
              <p id="errorMsg">{props.error}</p>
            ) : (
              <></>
            )}

            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </form>
        </Login>
      )}
    </GlobalLayout>
  );
};

const mapDispatchToProps = {
  loginAction: loginAction
};

function mapStateToProps(state: any) {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn,
    error: state.loginReducer.error
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
