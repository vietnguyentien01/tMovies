import React from "react";

import { Route, Switch } from "react-router-dom";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import Home from "../pages/Home";

export default function Routes() {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" component={Catalog}></Route>
      <Route path="/:category/:id" component={Detail}></Route>
      <Route path="/:category" component={Catalog}></Route>
      <Route path="/" component={Home}></Route>
    </Switch>
  );
}
