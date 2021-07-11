import { Switch, Route } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Chart } from "../components/pages/Chart";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/chart">
        <Chart />
      </Route>
    </Switch>
  )
}