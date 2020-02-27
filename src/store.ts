import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { combineReducers, createStore } from "redux";
import { reducers } from "./reducers";

const createAppStore = () => {
  const history = createBrowserHistory();
  const middlewares = [routerMiddleware(history)];

  const development = process.env.NODE_ENV === "development";

  if (development) {
    // eslint-disable-next-line global-require
    const { createLogger } = require("redux-logger");

    const logger = createLogger({
      collapsed: true
    });

    middlewares.push(logger);
  }

  const combineReducer = combineReducers({
    ...reducers,
    router: connectRouter(history)
  });

  const store = createStore(combineReducer);

  return {
    history,
    store
  };
};

const appStore = createAppStore();

export default appStore;
