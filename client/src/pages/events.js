import React, { Component } from "react";
import Navbar from "../components/Navbar/navbar";
import Jumbotron from "../components/Jumbotron/jumbotron";
import About from "../components/About/about";
import Footer from "../components/Footer/footer";
import Card from "../components/Card";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

class Events extends Component {
    state = {
      events: []
    };
  
    componentDidMount() {
      this.loadEvents();
    }
  
    loadBooks = () => {
      API.getEvents()
        .then(res =>
          this.setState({ events: res.data })
        )
        .catch(err => console.log(err));
    };
  
    render() {
      return (
        <div>
                          <Jumbotron >
  <h4>Events in your neighborhood</h4>
                      
                  </Jumbotron>
  
<Row>
<Col size="md-12">
<List>
{this.state.events.map(event => (

    <ListItem key={event._id} >
        <Card>
        <CardHeading title={event.title} />
      <CardBody description={event.description} date={event.date}/>
      <CardBtn
        // onClick={this.handleBtnClick}
      >
Save      
</CardBtn>
  </Card>
    </ListItem>))}
    </List>
    </Col>
    </Row>
  
        </div>
      );
    }
  
  }
  
  export default Saved;
  