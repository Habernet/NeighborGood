import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Jumbotron from "./components/Jumbotron/jumbotron";
import About from "./components/About/about";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home/home";
function App() {
  return (
  
        <Router>
          <div>
 
      <Navbar />

      <Home backgroundImage="./images/nbrhood.jpg">
        <h1>NeighborGood</h1>
        <h2>Come check out our events!</h2>
      </Home>
      </div>
      <Jumbotron />
      <About />
      <Footer />
    </Router>
  );
}

export default App;
