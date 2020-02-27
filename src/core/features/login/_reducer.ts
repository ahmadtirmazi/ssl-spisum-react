import { LoginStateType } from "./_types";
import { getType } from "typesafe-actions";
import { loginAction, LoginActionType } from "./_actions";

const initialState: LoginStateType = {};

export default (
  state: LoginStateType = initialState,
  action: LoginActionType
): LoginStateType => {
  switch (action.type) {
    case getType(loginAction):
      return {
        ...state
      };

    default:
      return state;
  }
};
