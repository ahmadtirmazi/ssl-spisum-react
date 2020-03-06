import { ActionType, createAction } from "typesafe-actions";

export const loginAction = createAction(
  "@login/LOGIN_ACTION",
  (username: string, password: string) => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("isLoggedIn", "true");
      return { isValid: true, error: "" };
    } else {
      localStorage.removeItem("isLoggedIn");
      return { isValid: false, error: "Invalid credentials" };
    }
  }
)<any>();

export type LoginActionType = ActionType<typeof loginAction>;
