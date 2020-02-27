import { RouterActionType } from "connected-react-router";
import { Location, LocationState } from "history";
import { StateType } from "typesafe-actions";
import loginReducer from "./core/features/login/_reducer";

export const reducers = {
  loginReducer
};

export default reducers;

export interface RouterReducerType<T = LocationState> {
  router: {
    location: Location<T>;
    action: RouterActionType;
  };
}

export type RootStateType = StateType<typeof reducers>;
