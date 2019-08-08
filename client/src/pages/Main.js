import React, { Component } from "react";
import Navbar from "../components/Navbar/navbar";
import Jumbotron from "../components/Jumbotron/jumbotron";
import About from "../components/About/about";
import Footer from "../components/Footer/footer";
import Card from "../components/Card";
import { List, ListItem } from "../components/List";
import API from "../utils/API";


function Main(){
   return( 
    <div>
       <Navbar/>

     <Jumbotron>
<p>
  Welcome to our landing pages!
</p>
</Jumbotron>

<About/>
<Footer/>
</div>

   )
}
export default Main;