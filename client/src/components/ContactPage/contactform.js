import React from 'react';
// import "./style.css";
​
function ContactForm(props) {
  console.log(props);
    return ( 
      <form className="form">
      <h3>Having a query?</h3>
      {/* <input
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
      /> */}
      <button className="submitButton" onClick={props.formSubmit}>Contact Us</button>
    </form>
     );
  }
​
 
export default ContactForm;