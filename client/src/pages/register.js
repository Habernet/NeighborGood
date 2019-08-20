import React from 'react';
import RegisterForm from '../components/RegisterForm/registerform';
import { Row, Col,Container } from "../components/Grid";

function registerUser(props) {
  // console.log(props);
  return ( 
    <Container>
    <Row>
      <div style={{"marginRight": "auto", "marginLeft": "auto", "padding": "50px"}}>

      <Col size="md-12">

      <RegisterForm {...props}/>
      </Col>
      </div>
      </Row>
      </Container>
  );
}
 
export default registerUser;