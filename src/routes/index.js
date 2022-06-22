// Init
import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Home from "../containers/Home.js";
import NavBar from "../containers/RideForm";

const index = () => {
  return (
    <>
    <NavBar/>
    <Switch>

      <Route exact path="/" component={Home} />
    </Switch>
    </>
  );
};

export default index;
