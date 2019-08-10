import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Jumbotron from "./components/Jumbotron/jumbotron";
import About from "./components/About/about";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Users from "./pages/Users";
import Classifieds from "./pages/Classifieds";
import Events from "./pages/Events";
import NoMatch from "./pages/NoMatch";

import './App.css';
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
