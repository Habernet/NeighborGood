import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Jumbotron from "./components/Jumbotron/jumbotron";
import About from "./components/About/about";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import AUTH from "./utils/AUTH";
import Main from "./pages/Main";
import Users from "./pages/users";
import Classifieds from "./pages/classifieds";
import Events from "./pages/events";
import NoMatch from "./pages/NoMatch";
import RegisterUser from "./pages/register";
import LoginUser from "./pages/login";
import axios from "axios";

class App extends Component {
  state = {
    userState: {
      isLoggedIn: true,
      password: "",
      password2: "",
      email: "",
      username: ""
    }
  };

  updateUser (userObject) {
    this.setState(userObject)
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState(prevState => {
      return {
        userState: {
          ...prevState.userState,
          [name]: value
        }
      }
    });
  };

  handleRegister = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    let user = {
      password: this.state.userState.password,
      email: this.state.userState.email,
      username: this.state.userState.username
      // if (this.state.userState...)
    }
    AUTH.register(
      user
    ).then(console.log)
    this.setState({
      userState: {
        password: "",
        password2: "",
        email: "",
        username: ""
      }
    });
  };

  handleLogin = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    let user = {
      password: this.state.userState.password,
      email: this.state.userState.email
    }
    axios
      .post("/auth/login",
        user
      )
    .then(response => {
      console.log("login response: ");
      console.log(response);
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: true,
          username: response.data.username
        })
        this.setState({
          redirectoTo: "/"
        })
      }
    }).catch(error => {
      console.log("login error: ")
      console.log(error);
    })
  };

  render() {
    const { isLoggedIn } = this.state.userState;
    return (
      <div>
        <Router>
          <Navbar />
          {/* {isLoggedIn && ( */}
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/users" component={Users} />
              <Route exact path="/classifieds" component={Classifieds} />
              <Route exact path="/events" component={Events} />
            {/* </Switch>
          )} */}
          {/* {!isLoggedIn && (
            <Switch> */}
              <Route exact path="/register" 
                render={(routeProps) => (<RegisterUser {...routeProps} 
                userState={this.state.userState} inputChange={this.handleInputChange} handleRegister={this.handleRegister}/> )} />
              <Route exact path="/login" 
                render={(routeProps) => (<LoginUser {...routeProps} userState={this.state.userState} inputChange={this.handleInputChange} handleLogin={this.handleLogin} /> )} />
              <Route component={NoMatch} />
            </Switch>
          {/* )} */}

          </Router>
        <Jumbotron />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;

