import React, { Component } from "react";
import Navbar from "../components/Navbar/navbar";
import Jumbotron from "../components/Jumbotron/jumbotron";
// import About from "../components/About/about";
// import Footer from "../components/Footer/footer";
import {Row,Col} from "../components/Grid";
import {Card, CardBtn, CardBody,CardContainer,CardHeading,CardImg,CardTitle,CardTitleText}  from "../components/Card";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import axios from "axios";

class Events extends Component {
    state = {
      events: []
    };
  
    componentDidMount() {
      this.loadEvents();
    }
  
    loadEvents = () => {
      axios.get("/api/events")        .then(res =>
         {this.setState({ events: res.data });console.log(res.data)}
        )
        .catch(err => console.log(err));
    };
  
    render() {
      return (
        <div>
                          <Jumbotron >
  <h4>Events in your neighborhood</h4>
                      
                  </Jumbotron>
  
<Row>
<Col size="md-12">
<List>
{this.state.events.map(event => (

    <ListItem key={event._id} >
        <Card>
        <CardHeading title={event.title} />
      <CardBody description={event.description} date={event.date}/>
      <CardBtn
        // onClick={this.handleBtnClick}
      >
Save      
</CardBtn>
  </Card>
    </ListItem>))}
    </List>
    </Col>
    </Row>
  
        </div>
      );
    }
  
  }
  
  export default Events;
  