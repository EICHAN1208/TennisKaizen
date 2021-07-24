import { Switch, Route } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Chart } from "../components/pages/Chart";
import { Record } from "../components/pages/Record";
import { AddCategory } from "../components/pages/AddCategory";
import { Page404 } from "../components/pages/Page404";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/chart">
        <Chart />
      </Route>
      <Route path="/new_record">
        <Record />
      </Route>
      <Route path="/new_category">
        <AddCategory />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  )
}