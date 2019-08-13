import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Jumbotron from "./components/Jumbotron/jumbotron";
import About from "./components/About/about";
import Footer from "./components/Footer/footer";
import AuthForm from "./components/AuthForm/authform";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "./utils/API";

class App extends Component {

  state = {  
    userState: {
      password: "",
      password2: "",
      email: "",
      username: ""
    }
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
      console.log(prevState);
      return {
        userState: {
        ...prevState.userState,
        [name]: value
      }}
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    let user = {
      password: this.state.userState.password,
      email: this.state.userState.email,
      username: this.state.userState.username
    // if (this.state.userState...)
    };
    API.saveUser(
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

  render() { 
    return (
    <div>
    <Navbar />
  
        <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/classifieds" component={Classifieds} />
          <Route exact path="/events" component={Events} />
          <Route component={NoMatch} />
        </Switch>
        </Router>

    
    <AuthForm formSubmit={this.handleFormSubmit} inputChange={this.handleInputChange} userState={this.state.userState}> </AuthForm>
    <Jumbotron />
    <About />
    <Footer />
    </div>
    )
  };
};

export default App;
