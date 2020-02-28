import { ActionType, createAction, action } from "typesafe-actions";

export const loginAction = createAction(
  "@login/LOGIN_ACTION",
  (username: string, password: string) => {
    return { username, password };
  }
)<any>();

export type LoginActionType = ActionType<typeof loginAction>;
