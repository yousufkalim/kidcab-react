// Init
import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Home from "../containers/Home.js";
import NavBar from "../containers/RideForm";

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={NavBar} />
    </Switch>
  );
};

export default index;
