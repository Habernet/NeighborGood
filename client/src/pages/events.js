import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
import { Row, Col, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import Button from "../components/Button";
import Tabs from "../components/Tabs";
import Moment from "react-moment";

class Events extends Component {
  state = {
    events: [],
    // username:"",
    city: " ",
    state: " ",
    savedEvents: [],
    localEvents: [],
    isEnabled: true
  };
  componentDidMount() {
    this.loadUser();
    this.loadEvents();
    // this.loadLocalEvents();
  };

//This function sets state after the user logs in. The userstate props is used to get the user specific information
  loadUser = () => {
    console.log(`GETTING ${this.props.userState.username}'S SAVED EVENTS..`);
    API.getUser(this.props.userState.username)
      .then(res => {
        // const savedEvents = this.state.savedEvents.filter(savedEvents => savedEvents.date < date);

        this.setState({
          ...this.prevState,
          city: res.data.city,
          state: res.data.state,
          savedEvents: res.data.savedEvents
        },
          () => {
            this.loadLocalEvents()
          }
        )
      })
  };

  // This is an API call to Eventbrite that loads local events(within 10 miles of users address-city,state)
  loadLocalEvents = () => {
    console.log("City", this.state.city);
    console.log("State", this.state.state);
    API.getLocalEvents(this.state.city + "," + this.state.state)
      .then(res => {
        this.setState({ localEvents: res.data.events });
        console.log("LOCAL EVENTS IN PAGE STATE", this.state.localEvents)
      })
      .catch(err => console.log("ERROR IN EVENTBRITE API CALL", err));
    console.log("THIS FINISHED")
  }

  // This loads all the events that are stored in the DB
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
//This click handler saves an event(listed by a neighbor, event from EventBrite API)
  handleClick = (host_name, title, description, date) => {
    API.updateUserEvent(this.props.userState.username, {
      $push: { savedEvents: { host_name, title, description, date } }
    }).then(res => {
      this.setState(
        {
          ...this.prevState,
          savedEvents: res.data.savedEvents
        }, console.log(res.data),
        this.loadUser()

      );
    });
  };

  render() {
    return (

      <Container>
        <Jumbotron>
          <h3>Events near you</h3>
        </Jumbotron>
        {/* This tab  has all the events from database */}
        <Tabs>
          Events posted by neighbors
          <List>
            {this.state.events.map(event => (
              <ListItem key={event._id}>
                <Row>
                  <Col size="md-12">
                    <div className="card-title">
                      <h4>{event.title}</h4>
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
                      style={{ margin: "0 100px 30px 600px", width: "200px" }}
                      onClick={() => {
                        {
                          this.handleClick(
                            event.user_id,
                            event.title,
                            event.description,
                            event.date
                          );
                        }
                      }}
                    >
                      Save to my events
                    </Button>
                  </Col>
                </Row>
              </ListItem>
            ))}
          </List>
        {/* This tab that has all the events from Erentbrite, specific to city, state of the user. The slice function renders only the first 10 events in the array. The EventBrite API call renders atleast 50 events */}

          Local Events
          <List>
            {this.state.localEvents.slice(0, 10).map(localEvent => (
              <ListItem>
                <Row>
                  <Col size="md-12">
                    <div className="card-title">
                      <h4>{localEvent.name.text}</h4>
                    </div>

                    <div className="card-body">
                      <p
                        style={{
                          overflow: "scroll",
                          height: "150px",
                          width: "100%"
                        }}
                      >
                        {localEvent.description.text}
                      </p>
                      <p>
                        <Moment format="MMM-DD-YY">
                          {localEvent.start.local}
                        </Moment>
                      </p>

                      <a href={localEvent.url}>{localEvent.name.text}</a>
                    </div>
                    <Button
                      ref="btn"
                      disabled={false}
                      style={{ margin: "0 100px 30px 600px", width: "200px" }}
                      onClick={() => {
                        {
                          this.handleClick(
                            localEvent.name.text,
                            localEvent.name.text,
                            localEvent.description.text,
                            localEvent.start.local
                          );
                        }
                      }}
                    >
                      Save to my events
                    </Button>
                  </Col>
                </Row>
              </ListItem>
            ))}
          </List>

          {/* This tab  has all the saved events, loaded from database. This is specific to the logged in user*/}

          My Saved Events
          <List>
            {this.state.savedEvents.map(savedEvent => (
              <ListItem>
                <Row>
                  <Col size="md-12">
                    <div className="card-title">
                      <h4>Event title-{savedEvent.title}</h4>
                    </div>

                    <div className="card-body">
                      <h5> {savedEvent.host_name}</h5>
                      <p
                        style={{
                          overflow: "scroll",
                          height: "150px",
                          width: "100%"
                        }}
                      >
                        {savedEvent.description}>{savedEvent.description}
                      </p>
                      <p>
                        {" "}
                        <Moment format="MMM-DD-YY">{savedEvent.date}</Moment>
                      </p>
                    </div>
                  </Col>
                </Row>
              </ListItem>
            ))}
          </List>
        </Tabs>
      </Container>
    );
  }
}

export default Events;
