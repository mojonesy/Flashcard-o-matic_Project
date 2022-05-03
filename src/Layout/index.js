import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Header from "./Header";
import NotFound from "./NotFound";

function Layout() {
  
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/">
            <Home />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
