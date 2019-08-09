import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import users from "./pages/users";
import classifieds from "./pages/classifieds";
import events from "./pages/events";
import NoMatch from "./pages/NoMatch";

import "./App.css";
import Home from "./components/Home/home";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/users" component={users} />
        <Route exact path="/classifieds" component={classifieds} />
        <Route exact path="/events" component={events} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
