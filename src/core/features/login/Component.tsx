import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Button, TextField } from "@material-ui/core";

import { CoreRoutes } from "core/routes";
import { loginAction } from "./_actions";
import { selectIsLoggedIn, selectLoginError } from "selectors";

import { GlobalLayout } from "core/components/Layout/GlobalLayout";
import { Login, getLoginFormStyles } from "core/features/login/Component.styles";

const Component = () => {
  
  const isLoggedIn: Boolean = useSelector(selectIsLoggedIn);
  const errorMessage: String = useSelector(selectLoginError);
  
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const classesLoginForm = getLoginFormStyles();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (username.length && password.length) {
      dispatch(loginAction(username, password));
    }
  };

  return (
    <GlobalLayout fillWindow={true}>
      {isLoggedIn ? (
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

            {errorMessage !== undefined && errorMessage.length ? (
              <p id="errorMsg">{errorMessage}</p>
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

export default Component;
