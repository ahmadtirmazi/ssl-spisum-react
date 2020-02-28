import { LoginStateType } from "./_types";
import { getType } from "typesafe-actions";
import { loginAction, LoginActionType } from "./_actions";

const initialState: LoginStateType = {
  isLoggedIn: false
};

export default (
  state: LoginStateType = initialState,
  action: LoginActionType
): LoginStateType => {
  switch (action.type) {
    case getType(loginAction):
      let { username, password } = action.payload;
      return {
        ...state,
        isLoggedIn: username === "admin" && password === "admin" ? true : false
      };

    default:
      return state;
  }
};
