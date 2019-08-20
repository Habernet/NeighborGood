import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import AUTH from "./utils/AUTH";
import Main from "./pages/Main";
import Users from "./pages/users";
import Classifieds from "./pages/classifieds";
import Events from "./pages/events";
import MapLeaflet from "./pages/Map";
import NoMatch from "./pages/NoMatch";
import RegisterUser from "./pages/register";
import LoginUser from "./pages/login";
import axios from "axios";
import ModalTest from "./pages/modaltest";

class App extends Component {
  state = {
    userState: {
      isLoggedIn: false,
      password: "",
      password2: "",
      email: "",
      address: "",
      username: ""
    },
    formState: {
      username: "",
      email: "",
      password: ""
    }
  };

  // componentDidMount() {
	// 	AUTH.getUser().then(response => {
	// 		if (response.data.user) {
	// 			this.setState({
	// 				userState: {
  //           loggedIn: true,
  //           username: response.data.user
  //         }
	// 			});
	// 		} else {
	// 			this.setState({
	// 				loggedIn: false,
	// 				user: null
	// 			});
	// 		}
	// 	});
	// };

  updateUser = res => {
    console.log("updateUser response: ")
    console.log(res);
    this.setState({
      userState: {
        isLoggedIn: true,
        email: res.email,
        address: res.address,
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
    this.setState( prevState => {
      return {
        formState: {
          ...prevState.formState,
          [name]: value
        }
      }
    });
  };

  handleRegister = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    let {password, email, username, address} = this.state.formState;
    let user = {
      password, email, username, address
      // if (this.state.userState...)
    }
    AUTH.register(
      user
    ).then(res => {
      console.log("this user was registered: ", res);
      this.setState({
        userState: {
          email: res.data.user.email,
          username: res.data.user.username,
          password: "",
          address: res.data.user.address,
          isLoggedIn: true
        }
      });
    });
  };

  handleLogin = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    let user = {
      password: this.state.formState.password,
      email: this.state.formState.email
    }
    axios
      .post("/auth/login",
        user
      )
    .then(response => {
      console.log("login response: ");
      console.log(response);
      if (response.status === 200) {
        this.updateUser({
          isLoggedIn: true,
          username: response.data.user.username,
          email: response.data.user.email,
          address: response.data.user.address
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
              <Route exact path="/map" component={MapLeaflet} />
              <Route exact path="/modal" component={ModalTest} />
            {/* </Switch>
          )} */}
          {/* {!isLoggedIn && (
            <Switch> */}
              <Route exact path="/register" 
                render={(routeProps) => (<RegisterUser 
                {...routeProps} 
                userState={this.state.userState} 
                formState={this.state.formState}
                inputChange={this.handleInputChange} 
                handleRegister={this.handleRegister}/> 
                )} />
              <Route exact path="/login" 
                render={(routeProps) => (<LoginUser 
                {...routeProps} 
                userState={this.state.userState} 
                formstate={this.state.formState}
                inputChange={this.handleInputChange} 
                updateUser={this.updateUser} 
                handleLogin={this.handleLogin} /> 
                )} />
              <Route component={NoMatch} />
            </Switch>
          {/* )} */}

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

