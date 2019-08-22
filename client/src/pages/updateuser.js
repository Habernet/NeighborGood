import {React,Component} from 'react';
import UpdaterUserForm from '../components/Update-User/UpdateUserForm';
import { Row, Col,Container } from "../components/Grid";



class UpdaterUserPage extends Component {
    state = {
      updateuserForm: {
name:" ",
username:"",
email:"",
address1:"",
address2:"",
city:"",
state:"",
zipcode:"",
phoneNumber:"",
age:"",
gender:" "
   }
    
};
  
  
    // Split this into two functions for each of the forms to update the state
    handleUpdateUserInputChange = event => {
      // Getting the value and name of the input which triggered the change
      let value = event.target.value;
      const name = event.target.name;
  
      // Updating the input's state
      this.setState(prevState => {
        return {
            updateuserForm: {
            ...prevState.updateuserForm,
            [name] : value
          }
        };
      });
    };
    handleUserUpdateFormSubmit = event => {

        // grab the data we need
        // make a put request to /api/users
        let formObject = this.state.updateuserForm;
        console.log("OBJECT TO SUBMIT: ", formObject);
    
        event.preventDefault();
        API.editUser(this.props.userState.username, formObject)
          .then(res => {
            console.log("POSTED SUCCESSFULLY: ", res);
          })
          .catch(err => {
            console.log("POSTED UNSUCCESSFULLY:", err);
          });
      };
    
    
  // componentDidMount() {
  //   console.log(this.props.userState.username);
  //   // this.loadUser();

  //   this.loadUsers();
  //   // this.loadUserEvents();
  //   // this.loadUserClassifieds();
  // }
  
  // loadUserAddress = () => {

  // API.getUserAddrLatLong(this.state.address)
  // .then(res => { this.setState({ lat: res.data.results[0].locations[0].latLng.lat, lng: res.data.results[0].locations[0].latLng.lng }); console.log(this.state.lat, this.state.lng) })
  // .catch(err => console.log(err));
  // }

  // // Split this into two functions for each of the forms to update the state
  // handleEventsInputChange = event => {
  //   // Getting the value and name of the input which triggered the change
  //   let value = event.target.value;
  //   const name = event.target.name;

  //   // Updating the input's state
  //   this.setState(prevState => {
  //     return {
  //       classifiedsForm: {
  //         ...prevState.classifiedsForm
  //       },
  //       eventsForm: {
  //         ...prevState.eventsForm,
  //         [name]: value
  //       }
  //     };
  //   });
  // };
  // handleClassifiedsInputChange = event => {
  //   // Getting the value and name of the input which triggered the change
  //   let value = event.target.value;
  //   const name = event.target.name;

  //   // Updating the input's state
  //   this.setState(prevState => {
  //     return {
  //       classifiedsForm: {
  //         ...prevState.classifiedsForm,
  //         [name]: value
  //       },
  //       eventsForm: {
  //         ...prevState.eventsForm
  //       }
  //     };
  //   });
  // };

render(){

  return ( 
    <Container>
    <Row>
      <div style={{"margin-right": "auto", "margin-left": "auto","padding":"200px"}}>

      <Col size="md-6">
      <UpdaterUserForm
                inputChange={this.handleUpdateUserInputChange}
                formSubmit={this.handleUserUpdateFormSubmit}
              />

      </Col>
      </div>
      </Row>
      </Container>
  );
}
}
 
export default UpdaterUserPage;