import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
// import Footer from "../components/Footer/footer";
import { Row, Col, Container } from "../components/Grid";
import { ListItem } from "../components/List";
import API from "../utils/API";
import axios from "axios";
import ClassifiedsForm from "../components/ClassifiedsForm/classifiedsform";
import EventsForm from "../components/EventsForm/eventsform";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import Moment from "react-moment";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import Button from "../components/Button";

// const EventCalendar = require('react-event-calendar');

class Users extends Component {
  state = {
    // users: [],
    // username: "",
    isShowing1: false,
    isShowing2: false,
    myEvents: [],
    myClassifieds: [],
    lat: "",
    lng: "",
    // address: "",
    classifiedsForm: {
      title: "",
      description: "",
      price: ""
    },
    eventsForm: {
      title: "",
      description: "",
      date: "",
      price: ""
    },
    // ,
    isShowing: false
  };

  componentDidMount() {
    // this.loadUsers();
    this.loadUserEvents();
    this.loadUserClassifieds();
    API.getUserAddrLatLong(this.props.userState.address)
      .then(res => {
        this.setState({
          lat: res.data.results[0].locations[0].latLng.lat,
          lng: res.data.results[0].locations[0].latLng.lng
        });
        console.log(
          `${this.props.userState.username}'s location: `,
          this.state.lat,
          this.state.lng
        );
      })
      .catch(err => console.log(err));
  }

  // Split this into two functions for each of the forms to update the state
  handleEventsInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState(prevState => {
      return {
        classifiedsForm: {
          ...prevState.classifiedsForm
        },
        eventsForm: {
          ...prevState.eventsForm,
          [name]: value
        }
      };
    });
  };
  handleClassifiedsInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState(prevState => {
      return {
        classifiedsForm: {
          ...prevState.classifiedsForm,
          [name]: value
        },
        eventsForm: {
          ...prevState.eventsForm
        }
      };
    });
  };

  handleClassifiedsFormSubmit = event => {
    // grab the data we need
    // price, description, title from the form state.
    // make a post request to /api/classifieds
    let formObject = this.state.classifiedsForm;
    formObject.email = this.props.userState.email;
    formObject.user_id = this.props.userState.username;
    console.log("OBJECT TO SUBMIT: ", formObject);

    event.preventDefault();
    axios
      .post("/api/classifieds", formObject)
      .then(res => {
        console.log("POSTED SUCCESSFULLY: ", res);
      })
      .catch(err => {
        console.log("POSTED UNSUCCESSFULLY:", err);
      });
  };

  handleEventsFormSubmit = event => {
    event.preventDefault();

    let formObject = this.state.eventsForm;
    formObject.email = this.props.userState.email;
    formObject.user_id = this.props.userState.username;
    console.log("OBJECT TO SUBMIT: ", formObject);

    axios
      .post("/api/events", formObject)
      .then(res => {
        console.log("POSTED SUCCESSFULLY: ", res);
      })
      .catch(err => {
        console.log("POSTED UNSUCCESSFULLY: ", err);
      });
  };

  // loadUsers = () => {
  //   // This must be rewritten to check for the cookie and load from there..only one user.
  //   API.getUsers()
  //     .then(res => {
  //       this.setState({ users: res.data });
  //       console.log(res.data);
  //     })
  //     .catch(err => console.log(err));
  // };

  loadUserEvents = () => {
    console.log("LOADING USER EVENTS...");
    API.getEvent(this.props.userState.username)
      .then(res => {
        this.setState({ myEvents: res.data });
        console.log(
          `${this.props.userState.username}'s EVENTS LOADED: `,
          this.state.myEvents
        );
      })
      .catch(err => console.log(err));
  };

  loadUserClassifieds = () => {
    API.getClassified(this.props.userState.username)
      .then(res => {
        this.setState({ myClassifieds: res.data });
        console.log(
          `${this.props.userState.username}'s CLASSIFIEDS LOADED: `,
          this.state.myEvents
        );
      })
      .catch(err => console.log(err));
  };

  openModalHandler1 = () => {
    this.setState({
      isShowing1: true
    });
  };
  openModalHandler2 = () => {
    console.log("clicked!");
    this.setState({
      isShowing2: true
    });
  };

  closeModalHandler1 = () => {
    this.setState({
      isShowing1: false
    });
  };
  closeModalHandler2 = () => {
    this.setState({
      isShowing2: false
    });
  };

  render() {
    return (
      <Container>
        {/* <Jumbotron >
          <h4>
            Please sign up!!

    state = {
      users: []
    };
  
    componentDidMount() {
        this.loadUsers();
      }
    
      loadUsers = () => {
        API.getUsers()
        .then(res =>
         {this.setState({users:res.data});console.log(res.data)}
        )
        .catch(err => console.log(err));
      };
  
    render() {
      return (
        <div>
          <Navbar />

                          <Jumbotron >
  <h4>
      Please sign up!!

  </h4>

        </Jumbotron>

        <List>

          {this.state.users.map(users => (
            <ListItem key={users._id}      >
              <Row>
                <Col size="md-12">
                  <Card>          <div className="card-body">
                    <h4 >{users.username}</h4>
                    <h5>{users.password}</h5>
                    <h5>{users.address || "No Address on File"}</h5>
                    <h5>{users.email}</h5>
                    <h5>{users.phonenumber || "No Phone Number on File"}</h5>
                    <h5>{users.name || "No Name on File"}</h5>
                    <p>{users.age || "No Age on File"}</p>
                    <p>{users.gender || "No Gender on File"}</p>
                  </div>
                  </Card>

                </Col>
              </Row>

            </ListItem>))}
          </List>*/}
        <div className="userProfileDiv" style={{ padding: "50px" }}>
          <Row>
            <Col size="sm-6">
              <div className="userData text-center">
                {/* <div className="userfront" > */}
                <h4>{this.props.userState.username}</h4>
                <img
                  // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAL4GK6H1yYwqvXlgoPgKiHHP-Nkvz136CDHRG7BrM1gyI5-2b"
                  src="http://www.dentistdarlington.com/img/portfolio/photo.png"
                  style={{
                    borderRadius: "50%",
                    height: "250px",
                    width: "250px"
                  }}
                />
                {/* <Button>Update info</Button> */}
                {/* <h5>Areas of Interest</h5>
              <ul>
                <li>Yard Sales</li>
                <li>Knick Nacks</li>
                <li>A E-Commerce Marketplace near me</li>
                <li>Events</li>
              </ul> */}
              </div>
            </Col>
            <Col size="sm-1" />
            <Col size="sm-3">
              <ClassifiedsForm
                inputChange={this.handleClassifiedsInputChange}
                formSubmit={this.handleClassifiedsFormSubmit}
              />
            </Col>
          </Row>

          {/* <ul className="navbar-nav">
      <li className="nav-item active">
              <Link to="/map" className={window.location.pathname === "MapLeaflet" ? "nav-link active" : "nav-link"}><span class="fa fa-map-marker-alt"></span> Map
          
        </Link>
      </li> 

      </ul> */}
          {/* <div className="map"> */}
          <Row>
            <Col size="sm-1" />
            <Col size="sm-5">
              <Map
                style={{ width: "400px", height: "400px" }}
                center={[this.state.lat, this.state.lng]}
                zoom={6}
                maxZoom={10}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
              >
                <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />

                <Marker position={[this.state.lat, this.state.lng]}>
                  <Popup>{this.state.address}</Popup>
                </Marker>
              </Map>
            </Col>
            <Col size="sm-1" />

            <Col size="sm-3">
              <EventsForm
                inputChange={this.handleEventsInputChange}
                formSubmit={this.handleEventsFormSubmit}
              />
            </Col>
          </Row>
          {/* <div>

                <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>

                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>

    </Modal>
 */}
          <div className="modalDiv" style={{ marginTop: "30px" }}>
            <Row>
              <Col size="sm-4">
                <button
                  className="open-modal-btn"
                  onClick={this.openModalHandler2}
                >
                  Events
                </button>
              </Col>
            </Row>
            <Row>
              <Col size="sm-4">
                <button
                  className="open-modal-btn"
                  onClick={this.openModalHandler1}
                >
                  Classifieds
                </button>
              </Col>

              <Col size="sm-4">
                <Modal
                  className="modal"
                  show={this.state.isShowing2}
                  close={this.closeModalHandler2}
                >
                  {this.state.myEvents.map(myEvent => (
                    <ListItem key={myEvent._id}>
                      <div className="modal-body">
                        <h3>{myEvent.title}</h3>

                        <h4>
                          {" "}
                          <Moment format="MMM-DD-YY">{myEvent.date}</Moment>
                        </h4>
                        <h4>{myEvent.price}</h4>

                        <p>{myEvent.description}</p>
                      </div>
                    </ListItem>
                  ))}
                </Modal>
              </Col>

              <Col size="sm-4">
                <Modal
                  className="modal"
                  show={this.state.isShowing1}
                  close={this.closeModalHandler1}
                >
                  {this.state.myClassifieds.map(myClassified => (
                    <ListItem key={myClassified._id}>
                      <div className="modal-body">
                        <h3>{myClassified.title}</h3>

                        <h4>
                          {" "}
                          <Moment format="MMM-DD-YY">
                            {myClassified.date}
                          </Moment>
                        </h4>
                        <h4>{myClassified.price}</h4>

                        <p>{myClassified.description}</p>
                      </div>
                    </ListItem>
                  ))}
                </Modal>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}

export default Users;
