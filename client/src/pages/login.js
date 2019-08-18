import React, { Component } from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import { Row, Col } from "../components/Grid";

function LoginUser(props) {
  return ( 
    <Row>
      <div style={{"margin-right": "auto", "margin-left": "auto"}}>

      <Col size="md-12">
        <LoginForm {...props}/>
      </Col>
      </div>
    </Row>
  );
}
 
export default LoginUser;