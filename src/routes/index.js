// Init
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Routes
import Home from '../containers/Home.js';
import Success from '../containers/Success';
import NavBar from '../containers/RideForm';

const index = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/success" component={Success} />
      </Switch>
    </>
  );
};

export default index;
