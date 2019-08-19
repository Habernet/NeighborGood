import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
import About from "../components/About/about";
import Footer from "../components/Footer/footer";
import { Row, Col } from "../components/Grid";
import Card from "../components/Card";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import axios from "axios";
import ClassifiedsForm from "../components/ClassifiedsForm/classifiedsform";
import EventsForm from "../components/EventsForm/eventsform";
// import MapLeaflet from "./pages/Map";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

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
    // ,
    isShowing: false
  };

  componentDidMount() {
    this.loadUser();
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

    if (this.props.userState.isLoggedIn) {
      console.log(
        `USER IS LOGGED IN, RETRIVING ${
          this.props.userState.username
        }'s information...`
      );

      // use the API to grab the user and it's information...

      API.getUser(this.props.userState.username)
        .then(res => {
          console.log(`FOUND ${this.props.userState.username} `, res);
          this.setState({
            ...this.prevState,
            username: res.data.username,
            savedEvents: res.data.savedEvents,
            createdEvents: res.data.createdEvents
          });
        })
        .catch(err => {
          console.log(`ERROR FINDING ${this.props.userState.username}`, err);
        });
    } else {
      console.log(`USER ISN'T LOGGED IN, FAILED.`);
    }
  };

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };

  render() {
    return (
      <div>
        {/* <Navbar />

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

        <Row>
          <div className="col-sm-3">
            <div className="userfront">
              <h5>{this.props.userState.username}'s User Profile</h5>
              {/* <img src="./images/tp.png" className="usi" /> */}
              {/* MY EVENTS AND SAVED EVENTS */}
              <h5>MY SAVED EVENTS</h5>
              <ul>
                {this.state.savedEvents &&
                  this.state.savedEvents.map(event => (
                    <li>
                      {event.title}: {event.description}, {event.date}
                    </li>
                  ))}
              </ul>
              <h5>MY POSTED EVENTS</h5>
              <ul>
                {this.state.createdEvents &&
                  this.state.createdEvents.map(event => <li>{event.title}</li>)}
              </ul>
            </div>
          </div>
        </Row>
        <Row>
          <div className="navbar col-sm-12">
            <ul className="navbar-nav">
              <li className="nav-item active">
                {/* { this.state.isShowing ? <div onClick={this.closeModalHandler} ></div> : null }

            <button className="open-modal-btn" onClick={this.openModalHandler}>Classifieds</button>


            <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
All user classifieds
    </Modal> */}

                {/* {/* <a className="nav-link" href="/classifieds"><i class="fa fa-newspaper"></i>Classifieds</a>
              <Link to="/" className={window.location.pathname === "Classifieds" ? "nav-link active" : "nav-link"}> */}

                {/* </Link>  */}
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/map">
                  <i class="fa fa-map-marker-alt" />
                  Map
                </a>
                <Link
                  to="/"
                  className={
                    window.location.pathname === "MapLeaflet"
                      ? "nav-link active"
                      : "nav-link"
                  }
                />
              </li>

              <li className="nav-item active">
                <a className="nav-link" href="/events">
                  <i class="fa fa-calendar-alt" />
                  Events
                </a>
                <Link
                  to="/"
                  className={
                    window.location.pathname === "Events"
                      ? "nav-link active"
                      : "nav-link"
                  }
                />
              </li>
            </ul>
          </div>
        </Row>
        <Row>
          <ClassifiedsForm
            inputChange={this.handleClassifiedsInputChange}
            formSubmit={this.handleClassifiedsFormSubmit}
          />
          <EventsForm
            inputChange={this.handleEventsInputChange}
            formSubmit={this.handleEventsFormSubmit}
          />
        </Row>
        {/* <div>

                <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>

                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>

    </Modal>
            </div>
 */}
      </div>

      /* <li className="nav-item">
              <a className="nav-link" href="/map" >Map</a>
              <Link to="/" className={window.location.pathname === "MapLeaflet" ? "nav-link active" : "nav-link"}>

              </Link>
            </li>
          <div className='biocolumn'>
            <div className='eventscolumn'>
              <h5>List of saved events</h5>
              <a className="nav-link" href="/events" ><i class="/" aria-hidden="true"></i>Events</a>
            </div>
          </div>
          <div className='biocolumn'>
            <div className='posteventscolumn'>
              <h5>Post an Event</h5>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              <button type="button" className="btn btn-warning">Submit</button>
            </div>
          </div>
          <div className='row'>
            <div className='biocolumn'>
              <div className='classcolumn'>
                <h5> Classifieds</h5>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <button type="button" class="btn btn-warning">Submit</button>
              </div>
            </div>
            <div className='biocolumn'>
              <div className='posteventscolumn'>
                <p></p>

              </div>
            </div>
            <div className='biocolumn'>
              <div className='posteventscolumn'>
                <h5>Post a Listing</h5>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <button type="button" class="btn btn-warning">Submit</button>
              </div>
            </div>
          </div> */
    );
  }
}

//  <Row>

//  <div className="col-sm-3">
//         <div className="userfront">
//         <h5>User Profile  </h5>
//         <img src="./images/tp.png" className="usi"></img>
//         <h5>Areas of Interest</h5>
//         <ul>
//           <li>Yard Sales</li>
//           <li>Knick Nacks</li>
//           <li>A E-Commerce Marketplace near me</li>
//           <li>Events</li>
//         </ul>
//         </div>
//       </div>
//     <div class='biocolumn'>
//       <div class='eventscolumn'>
//        <h5>List of saved events</h5>
//    <a class="nav-link" href="/events" ><i class="/" aria-hidden="true"></i>Events</a>
//       </div>
//     </div>
//     <div class='biocolumn'>
//       <div class='posteventscolumn'>
//         <h5>Post an Event</h5>
//     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//         <button type="button" class="btn btn-warning">Submit</button>
//       </div>
//     </div>
//   <div class='row'>
//     <div class='biocolumn'>
//       <div class='classcolumn'>
//           <h5> Classifieds</h5>
//     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//         <button type="button" class="btn btn-warning">Submit</button>
//       </div>
//     </div>
//     <div class='biocolumn'>
//       <div class='posteventscolumn'>
//         <p></p>

//       </div>
//     </div>
//     <div class='biocolumn'>
//       <div class='posteventscolumn'>
//           <h5>Post a Listing</h5>
//     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//         <button type="button" class="btn btn-warning">Submit</button>
//       </div>
//     </div>
//   </div>
// </Row>
// <Footer/>
// </div>  );
//     }

//   }

export default Users;
