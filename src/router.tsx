import { CoreRoutes } from "core/routes";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./core/features/dashboard";
import Login from "./core/features/login";

const Router = () => (
  <Switch>
    <Route exact={true} path={CoreRoutes.DASHBOARD} children={<Dashboard />} />
    <Route children={<Login />} />
  </Switch>
);

export type RootRouterType = CoreRoutes;

export default Router;
