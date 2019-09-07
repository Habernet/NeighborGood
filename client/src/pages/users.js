import React, { Component } from "react";
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

class Users extends Component {
  state = {
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
    users: [],
    username: "",
    isShowing1: false,
    isShowing2: false,
    myEvents: [],
    myClassifieds: [],
    lat: "",
    lng: "",
    address1: "",
    city: "",
    state: "",
    zipcode: ""
  };

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

  componentDidMount() {
    console.log(this.props.userState.username);
    this.loadUser();
    this.loadUsers();
    this.loadUserEvents();
    this.loadUserClassifieds();
  }

  //This function grabs the user address and passes it to MapQuest Geocoder API to get the latitude,longitude coordinates as they are used by map component(React-Leaflet)
  loadUserAddress = () => {
    API.getUserAddrLatLong(
      this.state.address1 +
        "," +
        this.state.city +
        "," +
        this.state.state +
        "," +
        this.state.zipcode
    )
      .then(res => {
        this.setState({
          lat: res.data.results[0].locations[0].latLng.lat,
          lng: res.data.results[0].locations[0].latLng.lng
        });
        console.log(this.state.lat, this.state.lng);
      })
      .catch(err => console.log(err));
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

  loadUser = () => {
    // IF USERSTATE IS FILLED..LOAD INFO BASED ON THAT...IF NOT REDIRECT TO LOGIN?

    if (this.props.userState.loggedIn) {
      console.log(
        `USER IS LOGGED IN, RETRIVING ${this.props.userState.username}'s information...`
      );

      // use the API to grab the user and it's information...

      API.getUser(this.props.userState.username)
        .then(res => {
          console.log(`FOUND ${this.props.userState.username} `, res);
          this.setState(
            {
              ...this.prevState,
              username: res.data.username,
              savedEvents: res.data.savedEvents,
              address1: res.data.address1,
              city: res.data.city,
              state: res.data.state,
              zipcode: res.data.zipcode
              // createdEvents: res.data.createdEvents
            },
            () => {
              this.loadUserAddress();
            }
          );
          console.log("ADDRESS BEFORE API CALL", this.state.address);
        })
        .catch(err => {
          console.log(`ERROR FINDING ${this.props.userState.username}`, err);
        });
    } else {
      console.log(`USER ISN'T LOGGED IN, FAILED.`);
    }
  };

  loadUsers = () => {
    // This must be rewritten to check for the cookie and load from there..only one user.
    API.getUsers()
      .then(res => {
        this.setState({ users: res.data });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  //This function uses the userState props-logged in username to retreive the events posted by the logged in user
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

  //This function uses the userState props-logged in username to retreive the classifieds posted by the logged in user

  loadUserClassifieds = () => {
    API.getClassified(this.props.userState.username)
      .then(res => {
        this.setState({ myClassifieds: res.data });
        console.log(
          `${this.props.userState.username}'s CLASSIFIEDS LOADED: `,
          this.state.myClassifieds
        );
      })
      .catch(err => console.log(err));
  };

  //This handler opens the modal that has has all the classifieds posted by the logged in user
  openModalHandler1 = () => {
    this.setState({
      isShowing1: true
    });
  };
  //This handler opens the modal that has has all the events posted by the logged in user

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
        <div className="userProfileDiv" style={{ padding: "50px" }}>
          <Row>
            <Col size="sm-6">
              <div className="userData text-center">
                {/* <div className="userfront" > */}
                <h4>{this.props.userState.username}</h4>
                <div id="imgDiv">
                  <img
                    // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAL4GK6H1yYwqvXlgoPgKiHHP-Nkvz136CDHRG7BrM1gyI5-2b"
                    src="http://www.dentistdarlington.com/img/portfolio/photo.png"
                    style={{
                      borderRadius: "50%",
                      height: "250px",
                      width: "250px"
                    }}
                    alt="User profile"
                  />
                </div>
                {/* <Row>
                  <Col size="sm-2" />
                  <Col size="sm-4">
                    <Button
                      style={{ float: "none", margin: "20px 0 20px 70px" }}
                    >
                      <Link to="/updateuser" className="nav-link">
                        <i className="fa fa-user-edit" />
                        Update user info
                      </Link>
                    </Button>
                  </Col>
                </Row> */}
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
          <Row>
            <Col size="sm-1" />
            <Col size="sm-5">
              {/* Map component (React leaflet) with the user address's lat lng coordinates, Popup has the user address  */}

              <Map
                style={{ width: "400px", height: "400px" }}
                center={[this.state.lat, this.state.lng]}
                zoom={10}
                maxZoom={20}
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
                  <Popup>
                    {this.state.address1 +
                      (this.state.address2 ? "," + this.state.address2 : ",") +
                      this.state.city +
                      "," +
                      this.state.state +
                      "," +
                      this.state.zipcode}
                  </Popup>
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
          <div className="modalDiv" style={{ marginTop: "30px" }}>
            <Row>
              <Col size="sm-4">
                {/* Redirects to neighbors page where are the users in the neighborhood are listed */}
                <button className="open-modal-btn">
                  <Link
                    to="/neighbors"
                    className="nav-link"
                    style={{
                      backgroundColor: "#90cdd1",
                      color: "black",
                      padding: "0"
                    }}
                  >
                    Neighbors
                  </Link>
                </button>
              </Col>
            </Row>

            <Row>
              <Col size="sm-4">
                <button
                  className="open-modal-btn"
                  onClick={this.openModalHandler2}
                  style={{ color: "black" }}
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
                  style={{ color: "black" }}
                >
                  Classifieds
                </button>
              </Col>

              <Col size="sm-4">
                {this.state.myEvents.length ? (
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
                ) : (
                  <Modal
                    className="modal"
                    show={this.state.isShowing2}
                    close={this.closeModalHandler2}
                  >
                    <ListItem>
                      <div className="modal-body">
                        <h3>No events posted by you to check!</h3>
                      </div>
                    </ListItem>
                    ))}
                  </Modal>
                )}
              </Col>

              <Col size="sm-4">
                {this.state.myClassifieds.length ? (
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
                ) : (
                  <Modal
                    className="modal"
                    show={this.state.isShowing1}
                    close={this.closeModalHandler1}
                  >
                    <ListItem>
                      <div className="modal-body">
                        <h3>No listings posted by you to track!</h3>
                      </div>
                    </ListItem>
                    ))}
                  </Modal>
                )}
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}

export default Users;
