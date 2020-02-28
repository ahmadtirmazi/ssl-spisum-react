import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const LoginForm = () => {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="username"
        name="username"
        label="Username"
        onChange={event => setUsername(event.target.value)}
      />
      <TextField
        id="password"
        name="password"
        label="Password"
        type="password"
        onChange={event => setPassword(event.target.value)}
      />

      <Button variant="contained" color="primary" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
