import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Main from "../pages/Main";
import Profile from "../pages/Profile";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
