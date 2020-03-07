import { RootStateType } from "reducers";

export const selectIsLoggedIn = (state: RootStateType) => state.loginReducer.isLoggedIn;
export const selectLoginError = (state: RootStateType) => state.loginReducer.error;