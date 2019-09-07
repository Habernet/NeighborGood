import React from "react";

function ContactForm(props) {
  return (
    <form className="form">
      <h3>Contact us!</h3>
      <input
        value={props.Name}
        name="Name"
        onChange={props.inputChange}
        type="text"
        placeholder="Name"
      />
      <input
        value={props.email}
        name="email"
        onChange={props.inputChange}
        type="text"
        placeholder="Email"
      />
      <input
        value={props.comment}
        name="comments"
        onChange={props.inputChange}
        type="textbox"
        placeholder="comments"
      />
      <button className="submitButton" onClick={props.formSubmit}>
        Contact Us
      </button>
    </form>
  );
}

export default ContactForm;
