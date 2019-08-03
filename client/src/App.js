import React, { Component } from "react";
import "./App.css";
import Navbar from "./component/Navbar/navbar";
import Jumbotron from "./component/Jumbotron/jumbotron";
import About from "./component/About/about";
import Footer from "./component/Footer/footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
  
        <Router>
          <div>
      <Navbar />

      </div>
      <Jumbotron />
      <About />
      <Footer />
        </Router>
     
      
    
  );
}

export default App;
