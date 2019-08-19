import React, { Component } from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import { Row, Col,Container } from "../components/Grid";

function LoginUser(props) {
  return ( 
    <Container >
          <Row>
      <div style={{"margin-right": "auto", "margin-left": "auto","padding":"200px"}}>

      <Col size="md-12">
        <LoginForm {...props}/>
      </Col>
      </div>
    </Row>
    </Container>

  );
}
 
export default LoginUser;