import { ActionType, createAction } from "typesafe-actions";

export const loginAction = createAction("@login/LOGIN_ACTION")();

export type LoginActionType = ActionType<typeof loginAction>;
