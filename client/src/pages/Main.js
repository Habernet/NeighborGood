import React, { Component } from "react";
import Navbar from "../components/Navbar/navbar";
import Jumbotron from "../components/Jumbotron/jumbotron";
import About from "../components/About/about";
import Home from "../components/Home/home";

import Footer from "../components/Footer/footer";
import Card from "../components/Card";
import { List, ListItem } from "../components/List";
import API from "../utils/API";


function Main(){
   return( 
    <div>
<Home backgroundImage="./images/nbrhood.jpg">
  <h1>NeighborGood</h1>
  <h2>Community.Exchanges.Privacy</h2>
</Home>

     <Jumbotron>
     <div className="jumbotron">
      <h1>Website layout</h1>
      <p>
        Welcome to our landing pages!
      </p>
      <div className="column">
    <img src="./images/cp.jpg" class="wpmobile"></img>
    <p>This way you can have everything within miles of your fingertips!</p>
    <img src="./images/lock.png"class="wplock"></img>
    <p>Security matters here! Everyone on this app is verified.</p>
    <img src="./images/community.png" class="wpcommunity"></img>
    <p>A community exchange built by you and your neighbhors!</p>
    </div>
    </div>
</Jumbotron>


<About/>
<Footer/>
</div>

   )
}
export default Main;