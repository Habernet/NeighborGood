import React, { Component } from "react";
import Navbar from "../components/Navbar/navbar";
import Jumbotron from "../components/Jumbotron/jumbotron";
import About from "../components/About/about";
import Footer from "../components/Footer/footer";
import {Row,Col} from "../components/Grid";
import {Card, CardBtn, CardBody,CardContainer,CardHeading,CardImg,CardTitle,CardTitleText}  from "../components/Card";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import axios from "axios";

class Users extends Component {
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
        <div className="card">

          <div className="card-body">
          <h4 >{users.username}</h4>
          <h5>{users.password}</h5>
          <h5>{users.address}</h5>
          <h5>{users.email}</h5>
          <h5>{users.phonenumber}</h5>
          <h5>{users.name}</h5>
          <p>{users.age}</p>
          <p>{users.gender}</p>
          </div>
          </div>

          </Col>
</Row>

</ListItem>))}
</List>


        </div>
      );
    }
  
  }
  
  export default Users;
  