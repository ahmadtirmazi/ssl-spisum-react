import { LoginStateType } from "./_types";
import { getType } from "typesafe-actions";
import { loginAction, LoginActionType } from "./_actions";

const initialState: LoginStateType = {
  isLoggedIn: localStorage.getItem("isLoggedIn") ? true : false,
  error: ""
};

export default (
  state: LoginStateType = initialState,
  action: LoginActionType
): LoginStateType => {
  switch (action.type) {
    case getType(loginAction):
      let { isValid, error } = action.payload;
      return {
        ...state,
        isLoggedIn: isValid,
        error
      };

    default:
      return state;
  }
};
