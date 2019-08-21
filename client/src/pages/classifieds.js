import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
// import About from "../components/About/about";
// import Footer from "../components/Footer/footer";
import {Row,Col,Container} from "../components/Grid";
import Card from "../components/Card";
import Button from "../components/Button";

import { List, ListItem } from "../components/List";
import API from "../utils/API";
import axios from "axios";

class Classifieds extends Component {
    state = {
      classifieds: []
    };

    handleClick=(email,title)=>{
      console.log(email);
      window.location.href = `mailto:${email}?subject=NEIGHBORGOOD Email!!!  Query about your classifieds listing-${title} `;

    }
  
    componentDidMount() {
      this.loadClassifieds();
    }
  
    loadClassifieds = () => {
      API.getClassifieds()
      .then(res =>
       {this.setState({classifieds:res.data});console.log(res.data)}
      )
      .catch(err => console.log(err));
    };
  
    render() {
      return (
        <Container>
        <div> 

                          <Jumbotron
                          // backgroundImage="./images/classifieds.png"
                          >

                  <h3> Listings posted by your neighbours</h3>
                  </Jumbotron>
  
<List>

{this.state.classifieds.map(classified => (
  <ListItem key={classified._id}      >
<Row>
<Col size="md-12">   
  <div className="card-title text-center" >
  <h4 >{classified.title}</h4>

  </div>
          <div className="card-body">
          <h4> Posted by {classified.user_id} </h4>
          <h5>Listed for ${classified.price}</h5>
          <p>{classified.description}</p>
          <Button
          onClick={ () => this.handleClick(classified.email,classified.title) }
>            Contact Seller!!
          </Button>
          </div>

          </Col>
</Row>

</ListItem>))}
</List>


        </div>
        </Container>
      );
    }
  
  }
  
  export default Classifieds;
  