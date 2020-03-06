import { makeStyles } from "@material-ui/core/styles";
import styled from "styles";

export const Login = styled("div")(() => ({
  background: "#fff",
  border: "1px solid red",
  height: 400,
  margin: 10,
  width: 400,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
}));

export const getLoginFormStyles = makeStyles(theme => ({
  root: {
    "&": {
      textAlign: "center"
    },
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    },
    "& > #errorMsg": {
      width: "auto"
    }
  }
}));
