import React from 'react';
import RegisterForm from '../components/RegisterForm/registerform';
import { Row, Col,Container } from "../components/Grid";

function registerUser(props) {
  // console.log(props);
  return ( 
    <Container>
    <Row>
      <div style={{"margin-right": "auto", "margin-left": "auto","padding":"200px"}}>

      <Col size="md-12">

      <RegisterForm {...props}/>
      </Col>
      </div>
      </Row>
      </Container>
  );
}
 
export default registerUser;