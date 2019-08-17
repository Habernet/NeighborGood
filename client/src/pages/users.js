import React, {Component}from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
import {Row,Col} from "../components/Grid";
import Card  from "../components/Card";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

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


        </div>
      );
    }
  
  }
  
  export default Users;
  