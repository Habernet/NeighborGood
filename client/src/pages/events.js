import React, { Component } from "react";
import Navbar from "../components/Navbar/navbar";
import Jumbotron from "../components/Jumbotron/jumbotron";
// import About from "../components/About/about";
// import Footer from "../components/Footer/footer";
import {Row,Col} from "../components/Grid";
import Card  from "../components/Card";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import Button from "../components/Button"
 
 
class Events extends Component {
    state = {
      events: [],
    username:"Abhi",
    savedEvents:[],
    isEnabled:true
     };


    componentDidMount() {
      this.loadEvents();
    };
    
    loadEvents = () => {
      API.getEvents()
      .then(res =>
       {this.setState({events:res.data})}
      //  ;console.log(res.data)}
      )
      .catch(err => console.log(err));
    };
    handleClick = (id,name,title,description) => {
      API.updateUserEvent(this.state.username,{"$push":{"savedEvents":{id,title,description}}})
      .then(res=>{this.setState({savedEvents:res.data.savedEvents})}
          )
        }
  
    render() {
      return (
        <div>
                          <Jumbotron >
  <h4>Events in your neighborhood</h4>
                      
                  </Jumbotron>
  <Row>
    <Col size="md-6">
    <List >

{this.state.events.map(event => (
  <ListItem key={event._id}      >
<Row>
<Col size="md-12">   
        <div className="card" style={ {width:'80%'}
  }>

          <div className="card-body">
          <h4 >{event.title}</h4>
          <h5>{event.user_id}</h5>
          <p>{event.description}</p>
        
          </div>
          <Button
          ref="btn"
          id={event._id}
          disabled={false}
          onClick={
            () => { {this.handleClick(event._id,event.user_id,event.title,event.description)}}}>Save to my events</Button>

                      </div>



          </Col>
</Row>

</ListItem>))}
</List>
</Col>
<Col size="md-6">
<List >

{this.state.savedEvents.map(savedEvent => (
  <ListItem   >
<Row>
<Col size="md-12">   
        <div className="card" style={ {width:'80%'}
  }>

          <div className="card-body">
          <h4 >{savedEvent.title}</h4>
          <h5>{savedEvent.user_id}</h5>
          <p>{savedEvent.description}</p>
        
          </div>
                      </div>



          </Col>
</Row>

</ListItem>))}
</List>
</Col>
</Row>
</div>
 );
    };
  
  }
  export default Events;
  