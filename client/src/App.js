import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Jumbotron from "./components/Jumbotron/jumbotron";
import About from "./components/About/about";
import Footer from "./components/Footer/footer";
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
