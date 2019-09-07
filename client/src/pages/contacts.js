import React, { Component } from "react";
import ContactForm from "../components/ContactForm/contactform";
import { Row, Col, Container } from "../components/Grid";
class ContactUser extends Component {
  handleClick = event => {
    event.preventDefault();
    console.log("YOU CLICKED THE CONTACT US BUTTON!");
    window.location.href =
      "mailto:xyz@example.com?subject=NEIGHBORGOOD Email!!!  Contact us ";
  };

  render() {
    return (
      <Container>
        <Row>
          <div
            style={{
              "margin-right": "auto",
              "margin-left": "auto",
              padding: "200px"
            }}
          >
            <Col size="md-12">
              <ContactForm formSubmit={this.handleClick} />
            </Col>
          </div>
        </Row>
      </Container>
    );
  }
}

export default ContactUser;
