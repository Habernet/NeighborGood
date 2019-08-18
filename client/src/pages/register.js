import React, { Component } from 'react';
import RegisterForm from '../components/RegisterForm/registerform';
import { Row, Col } from "../components/Grid";

function registerUser(props) {
  // console.log(props);
  return ( 
    <Row>
      <div style={{"margin-right": "auto", "margin-left": "auto"}}>

      <Col size="md-12">

      <RegisterForm {...props}/>
      </Col>
      </div>
      </Row>
  );
}
 
export default registerUser;