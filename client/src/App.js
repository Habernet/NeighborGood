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
      firstName: "",
      lastName: "",
      password: "",
      password2: "",
      email: "",
      username: "",
      address: "",
      phoneNumber: "",
      age: "",
      gender: ""
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
      firstName: this.state.userState.firstName,
      lastName: this.state.userState.lastName,
      password: this.state.userState.password,
      email: this.state.userState.email,
      username: this.state.userState.username,
      address: this.state.userState.address,
      phoneNumber: this.state.userState.phoneNumber,
      age: this.state.userState.age,
      gender: this.state.userState.gender}
    // if (this.state.userState...)
    API.saveUser(
      user
    ).then(console.log)

    this.setState({
      userState: {
        firstName: "",
        lastName: "",
        password: "",
        password2: "",
        email: "",
        username: "",
        address: "",
        phoneNumber: "",
        age: "",
        gender: ""
      }
    });
  };

  render() { 
    return (
  
      <Router>
        <div>
    <Navbar />

    </div>
    <AuthForm formSubmit={this.handleFormSubmit} inputChange={this.handleInputChange} userState={this.state.userState}> </AuthForm>
    <Jumbotron />
    <About />
    <Footer />
      </Router>
  
    );
  }
}
 
export default App;
