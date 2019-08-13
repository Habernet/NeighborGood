import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Users from "./pages/users";
import Classifieds from "./pages/classifieds";
import Events from "./pages/events";
import NoMatch from "./pages/NoMatch";

import "./App.css";
import Home from "./components/Home/home";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/classifieds" component={Classifieds} />
        <Route exact path="/events" component={Events} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
