import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
// import Footer from "../components/Footer/footer";
import { Row, Col, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import Button from "../components/Button"



class Neighbors extends Component {

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
    handleClick=(email)=>{
        window.location.href = `mailto:${email}`;
  
      }
    
  

  render() {
    return (
        <Container>
                  <div>

                        <Jumbotron >
<h4>
Get in touch with your neighbors
</h4>

      </Jumbotron>

      <List>

        {this.state.users.map(users => (
          <ListItem key={users._id}      >
            <Row>
              <Col size="md-12">
              <div className="card-title">

              <Button style={{width:'40px'}}
          onClick={ () => this.handleClick(users.email) }>
          +
          </Button>
          <h4 >{users.username}</h4> 

              </div>
                          <div className="card-body">
                  <h5>{users.address1 },{users.address2|| ""}</h5>
                  <h5>{users.city}</h5>
                  <h5>{users.state}</h5>
                  <h5>{users.phonenumber || "No Phone Number listed"}</h5>
                </div>

              </Col>
            </Row>

          </ListItem>))}
        </List>
        </div>
        </Container>


    )
        }
    }
        export default Neighbors;

