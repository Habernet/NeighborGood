import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
// import About from "../components/About/about";
// import Footer from "../components/Footer/footer";
import {Row,Col,Container} from "../components/Grid";
import Card  from "../components/Card";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import Button from "../components/Button";
import Tabs from "../components/Tabs";
import Moment from "react-moment";

class Events extends Component {
    state = {
      events: [],
    username:"Abhi",
    city:"apex",
    state:"north carolina",
     savedEvents:[],
    localEvents:[],
    isEnabled:true
     };
    //  componentWillMount(){


    //  }

    componentDidMount() {
      const date=Date();
this.loadUser();
      this.loadEvents();
      API.getLocalEvents(this.state.city+","+this.state.state)
      .then(res => {this.setState({ localEvents: res.data.events });console.log(this.state.localEvents)})
      .catch(err => console.log(err));
    };


    loadUser=()=>{
      API.getUser(this.state.username)
      .then(res =>
        {
          // const savedEvents = this.state.savedEvents.filter(savedEvents => savedEvents.date < date);
          this.setState({savedEvents:res.data.savedEvents});
          console.log(res.data.savedEvents)}) 
        .catch(err => console.log(err));


        }
    
    loadEvents = () => {
      API.getEvents()
      .then(res =>
       {this.setState({events:res.data})}
      //  ;console.log(res.data)}
      )
      .catch(err => console.log(err));
      }

    
    handleClick = (host_name,title,description,date) => {

      API.updateUserEvent(this.state.username,{"$push":{"savedEvents":{host_name,title,description,date}}})
      .then(res=>{(
        this.setState( ({
          savedEvents: res.data.savedEvents
      }),       this.loadUser()

        )
      )}
       

      )
  };
      
        
  
    render() {
      return (
<Container>           
      <Jumbotron >
                 <h3>Events near you</h3>     
                  </Jumbotron>
  {/* <Row>
    <Col size="md-6">
    <List >

  loadEvents = () => {
    API.getEvents()
      .then(
        res => {
          this.setState({ events: res.data });
        }
        //  ;console.log(res.data)}
      )
      .catch(err => console.log(err));
  };

  // this.setState((prevState, props) => ({
  //   counter: prevState.counter + props.increment
  // }));

  handleClick = (host_name, title, description, date) => {
    API.updateUserEvent(this.state.username, {
      $push: { savedEvents: { host_name, title, description, date } }
    }).then(res => {
      this.setState(prevState => ({
        savedEvents: prevState.savedEvents
      }));
    });
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h4>Events in your neighborhood</h4>
        </Jumbotron>
        {/* <Row>
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
</Row> */}

<Tabs>
Events posted by neighbors  
<List >

{this.state.events.map(event => (
  <ListItem key={event._id}      >
<Row>
<Col size="md-12">   
        <div className="card-title" >
        <h4 >{event.title}</h4>
        </div>


          <div className="card-body">
          <h5>{event.user_id}</h5>
<p>{event.description}</p>
          <p>
<Moment format="MMM-DD-YY">{event.date}</Moment>
</p>


        
          </div>
          <Button
          ref="btn"
          id={event._id}
          disabled={false}
          style={{margin:'0 100px 30px 600px',width:'200px'}}

          onClick={
            () => { {this.handleClick(event.user_id,event.title,event.description,event.date)}}}>Save to my events</Button>




          </Col>
</Row>

</ListItem>))}
</List>
Local Events         
<List >

{this.state.localEvents.map(localEvent => (
  <ListItem  >
<Row>
<Col size="md-12">   
<div className="card-title" >
<h4 >{localEvent.name.text}</h4>
        </div>


          <div className="card-body">
          <p style={{overflow:'scroll',height:'150px',width:'100%'}}>{localEvent.description.text}</p>
          <p><Moment format="MMM-DD-YY">{localEvent.start.local}</Moment></p>

          <a href={localEvent.url}>{localEvent.name.text}</a>
        
          </div>
          <Button
          ref="btn"
          disabled={false}
          style={{margin:'0 100px 30px 600px',width:'200px'}}

          onClick={
            () => { {this.handleClick(localEvent.name.text,localEvent.name.text,localEvent.description.text,localEvent.start.local)}}}>Save to my events</Button>


          


          </Col>
</Row>

</ListItem>))}
</List>



My events    
<List >

{this.state.savedEvents.map(savedEvent => (
  <ListItem  >
<Row>
<Col size="md-12">   
<div className="card-title" >
<h4 >Event title-{savedEvent.title}</h4>
        </div>

          <div className="card-body">
          <h5> {savedEvent.host_name}</h5>
          <p style={{overflow:'scroll',height:'150px',width:'100%'}}>{savedEvent.description}>{savedEvent.description}</p>
        <p>     <Moment format="MMM-DD-YY">{savedEvent.date}</Moment>
</p>
          </div>


          </Col>
</Row>

</ListItem>))}
</List>

        </Tabs>
</Container> 
);
    };
  }

  
export default Events;
