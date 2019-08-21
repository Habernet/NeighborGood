import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AUTH from "./utils/AUTH";
import Main from "./pages/Main";
import Users from "./pages/users";
import Classifieds from "./pages/classifieds";
import Events from "./pages/events";
import NoMatch from "./pages/NoMatch";
import RegisterUser from "./pages/register";

import LoginUser from "./pages/login";
import axios from "axios";
// import registerUser from "./pages/register";
import ContactUser from "./pages/contacts";

// import ContactForm from "./components/ContactPage/contactform";
import Neighbors from "./pages/neighbors";
import UpdateUserForm from "./components/Update-User/UpdateUserForm";

class App extends Component {
  state = {
    userState: {
      loggedIn: false,
      email: "",
      address1: "",
      address2: "",
      city:"",
      state:"",
      zipcode:"",
      username: ""
    },
    formState: {
      username: "",
      email: "",
      password1: "",
      password2: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipcode: ""
    }
  };

  componentDidMount() {
    AUTH.getUser().then(response => {
      if (response.data.user) {
        console.log(response.data);
        this.setState({
          userState: {
            loggedIn: true,
            username: response.data.user
          }
        });
      } else {
        this.setState({
          loggedIn: false,
          user: null
        });
      }
    });
  }

  logout = event => {
    // Sometime there won't be event (When logout is triggered after submit ratings)
    if (event) {
      event.preventDefault();
    }

    // if (this.state.userState.email === "Guest") {
    // 	this.setState({
    // 		user: null,
    // 		loggedIn: false
    // 	});
    // }
    // else {
    {
      AUTH.logout().then(response => {
        if (response.status === 200) {
          this.setState({
            userState: {
              loggedIn: false,
              username: null
            }
          });
        }
      });
    }
  };

  updateUser = res => {
    console.log("updateUser response: ");
    console.log(res);
    this.setState({
      userState: {
        loggedIn: true,
        username: res.username
      }
    });
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
        formState: {
          ...prevState.formState,
          [name]: value
        }
      };
    });
  };

  handleRegister = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    let {password, email, username, address1, address2, city, state, zipcode} = this.state.formState;
    let user = {
      username, password, email, address1, address2, city, state, zipcode
    };
    AUTH.register(user).then(res => {
      console.log("this user was registered: ", res);
      this.setState({
        userState: {
          username: res.data.user.username,
          email: res.data.user.email,
          address: res.data.user.address,
          loggedIn: true
        },
        formState: ""
      });
    });
  };

  handleLogin = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    let user = {
      password: this.state.formState.password,
      email: this.state.formState.email
    };
    axios
      .post("/auth/login", user)
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          this.updateUser({
            loggedIn: true,
            username: response.data.user.username,
            email: response.data.user.email,
            address: response.data.user.address
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  };

  render() {
    const { loggedIn } = this.state.userState;
    return (
      <div>
        <Router>
          <Navbar logOut={this.logout} />
          {loggedIn && (
            <Switch>
              <Route exact path="/" component={Main} />
              <Route
                exact
                path="/users"
                render={routeProps => (
                  <Users {...routeProps} userState={this.state.userState} />
                )}
              />
               <Route
                exact
                path="/updateuser"
                render={routeProps => (
                  <UpdateUserForm {...routeProps} userState={this.state.userState} />
                )}
              />

              <Route
                exact
                path="/classifieds"
                render={routeProps => (
                  <Classifieds
                    {...routeProps}
                    userState={this.state.userState}
                  />
                )}
              />
              <Route
                exact
                path="/events"
                render={routeProps => (
                  <Events {...routeProps} userState={this.state.userState} />
                )}
              />
                <Route
                exact
                path="/neighbors"
                render={routeProps => (
                  <Neighbors
                    {...routeProps}
                    userState={this.state.userState}
                  />
                )}
              />

                <Route
                exact
                path="/contact"
                render={routeProps => (
                  <ContactUser
                    {...routeProps}
                    userState={this.state.userState}
                    formState={this.state.formState}
                    inputChange={this.handleInputChange}
                    handleRegister={this.handleContact}
                    
                  />
                )}
              />
            </Switch>
          )}
          {!loggedIn && (
            <Switch>
          
               <Route
                exact
                path="/contact"
                render={routeProps => (
                  <ContactUser
                    {...routeProps}
                    userState={this.state.userState}
                    formState={this.state.formState}
                    inputChange={this.handleInputChange}
                    handleRegister={this.handleContact}
                    
                  />
                )}
              />

              <Route
                exact
                path="/register"
                render={routeProps => (
                  <RegisterUser
                    {...routeProps}
                    userState={this.state.userState}
                    formState={this.state.formState}
                    inputChange={this.handleInputChange}
                    handleContact={this.handleRegister}
                  />
                )}
              />
              <Route
                exact
                path="/login"
                render={routeProps => (
                  <LoginUser
                    {...routeProps}
                    userState={this.state.userState}
                    formstate={this.state.formState}
                    inputChange={this.handleInputChange}
                    updateUser={this.updateUser}
                    handleLogin={this.handleLogin}
                  />
                )}
              />
              <Route component={NoMatch} />
            </Switch>
          )}
        </Router>

        {/* <AuthForm formSubmit={this.handleFormSubmit} inputChange={this.handleInputChange} userState={this.state.userState}> </AuthForm>
        <Jumbotron /> */}
        {/* <About /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
