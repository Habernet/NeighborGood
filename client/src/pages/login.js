import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import { Row, Col,Container } from "../components/Grid";

function LoginUser(props) {
  return ( 
    <Container >
          <Row>
      <div style={{marginRight: "auto", marginLeft: "auto",padding:"50px"}}>
      <Col size="md-12">
        <LoginForm {...props}/>
      </Col>
      </div>
    </Row>
    </Container>

  );
}
 
export default LoginUser;