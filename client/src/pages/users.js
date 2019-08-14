import React, {Component}from "react";
import Navbar from "../components/Navbar/navbar";
import Jumbotron from "../components/Jumbotron/jumbotron";
import About from "../components/About/about";
import Footer from "../components/Footer/footer";
import {Row,Col} from "../components/Grid";
import Card  from "../components/Card";
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
</List>

 <Row>
    
 <div className="col-sm-3">
        <div className="userfront">
        <h5>User Profile  </h5>
        <img src="./images/tp.png" className="usi"></img>
        <h5>Areas of Interest</h5>
        <ul>
          <li>Yard Sales</li>
          <li>Knick Nacks</li>
          <li>A E-Commerce Marketplace near me</li>
          <li>Events</li>
        </ul>
        </div>
      </div>
    <div class='biocolumn'>
      <div class='eventscolumn'>
       <h5>List of saved events</h5>
   <a class="nav-link" href="/events" ><i class="/" aria-hidden="true"></i>Events</a>
      </div>
    </div>
    <div class='biocolumn'>
      <div class='posteventscolumn'>
        <h5>Post an Event</h5>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        <button type="button" class="btn btn-warning">Submit</button>
      </div>
    </div>
  <div class='row'>
    <div class='biocolumn'>
      <div class='classcolumn'>
          <h5> Classifieds</h5>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        <button type="button" class="btn btn-warning">Submit</button>
      </div>
    </div>
    <div class='biocolumn'>
      <div class='posteventscolumn'>
        <p></p>
     
      </div>
    </div>
    <div class='biocolumn'>
      <div class='posteventscolumn'>
          <h5>Post a Listing</h5>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        <button type="button" class="btn btn-warning">Submit</button>
      </div>
    </div>
  </div>
</Row>
<Footer/>
</div>  );
    }
  
  }
 
  
  export default Users;
  