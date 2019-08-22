import React from 'react';
// import "./style.css";

function ContactForm(props) {
  console.log(props);
    return ( 
      <form className="form">
      <h3>Contact Us:</h3>
      <input
        value={props.formState.Name}
        name="Name"
        onChange={props.inputChange}
        type="text"
        placeholder="Name"
      />
      <input
        value={props.formState.email}
        name="email"
        onChange={props.inputChange}
        type="text"
        placeholder="Email"
      />
      <input
        value={props.formState.comment}
        name="comments"
        onChange={props.inputChange}
        type="textbox"
        placeholder="comments"
      />
      <button className="submitButton" onClick={props.handleRegister}>Submit</button>
    </form>
     );
  }

 
export default ContactForm;