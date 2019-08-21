import React from 'react';
import ContactForm from '../components/ContactPage/contactform';
import { Row, Col,Container } from "../components/Grid";
function ContactUser(props) {
  // console.log(props);
  return ( 
    <Container>
    <Row>
      <div style={{"margin-right": "auto", "margin-left": "auto","padding":"200px"}}>

      <Col size="md-12">

      <ContactForm {...props}/>
      </Col>
      </div>
      </Row>
      </Container>
  );
}
 
export default ContactUser;