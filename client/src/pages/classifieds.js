import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
// import About from "../components/About/about";
// import Footer from "../components/Footer/footer";
import {Row,Col} from "../components/Grid";
import Card from "../components/Card";
import Button from "../components/Button";

import { List, ListItem } from "../components/List";
import API from "../utils/API";
import axios from "axios";

class Classifieds extends Component {
    state = {
      classifieds: []
    };

    handleClick=(email)=>{
      window.location.href = `mailto:${email}`;

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
        <div>
                          <Jumbotron >
  <h4>Listings </h4>
                      
                  </Jumbotron>
  
<List>

{this.state.classifieds.map(classified => (
  <ListItem key={classified._id}      >
<Row>
<Col size="md-12">   
<Card>
          <div className="card-body">
          <h4 >{classified.title}</h4>
          <h5>{classified.user_id}</h5>
          <h5>{classified.price}</h5>
          <p>{classified.description}</p>
          <Button
          onClick={ () => this.handleClick(classified.email) }>
            Contact Seller!!
          </Button>
          </div>
          </Card>

          </Col>
</Row>

</ListItem>))}
</List>


        </div>
      );
    }
  
  }
  
  export default Classifieds;
  