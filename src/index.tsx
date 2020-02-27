import "react-app-polyfill/ie11";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import { StylesProvider } from "@material-ui/core/styles";
import { ConnectedRouter } from "connected-react-router";
import { GlobalStyles } from "core/styles/global";
import { ThemeProvider } from "emotion-theming";
import "normalize.css";
import React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Router from "./router";
import appStore from "./store";
import { theme } from "./styles";

const rootEl = document.getElementById("root") as HTMLElement;
const render = (Component: React.ComponentType) => {
  return ReactDOM.render(
    <Provider store={appStore.store}>
      <StylesProvider injectFirst={true}>
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={appStore.history}>
            <GlobalStyles />
            <Component />
          </ConnectedRouter>
        </ThemeProvider>
      </StylesProvider>
    </Provider>,
    rootEl
  );
};

render(Router);

// tslint:disable-next-line
if ((module as any).hot) {
  // tslint:disable-next-line
  (module as any).hot.accept("./router", () => {
    const NextApp = require("./router").default;
    render(NextApp);
  });
}
