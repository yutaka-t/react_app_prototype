import { VFC, memo } from "react";
import { Switch, Route } from "react-router-dom";
import { Login } from "../components/pages/Login";

export const Router: VFC = memo(() => {
  return (
<Switch>
  <Route exact path="/">
    <Login>
  </Route>
</Switch>
  )
});