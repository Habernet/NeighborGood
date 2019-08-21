import React from "react";
import "./style.css";

function RegisterForm(props) {

  return (
    <form className="form">
      <h3>Register:</h3>
      <input
        value={props.formState.username}
        name="username"
        onChange={props.inputChange}
        type="text"
        placeholder="Username"
      />
      <input
        value={props.formState.email}
        name="email"
        onChange={props.inputChange}
        type="text"
        placeholder="Email"
      />
      <input
        value={props.formState.address1}
        name="address1"
        onChange={props.inputChange}
        type="text"
        placeholder="Street Address Line1"
      />
      <input
        value={props.formState.address2}
        name="address2"
        onChange={props.inputChange}
        type="text"
        placeholder="Street Address Line2"
      />
      <input
        value={props.formState.city}
        name="city"
        onChange={props.inputChange}
        type="text"
        placeholder="City"
      />
      <input
        value={props.formState.state}
        name="state"
        onChange={props.inputChange}
        type="text"
        placeholder="State"
      />
      <input
        value={props.formState.zipcode}
        name="zipcode"
        value={props.formState.address}
        name="address"
        onChange={props.inputChange}
        type="text"
        placeholder="Zipcode"
      />
       <input
        value={props.formState.city}
        name="city"
        onChange={props.inputChange}
        type="text"
        placeholder="City"
      />
             <input
        value={props.formState.state}
        name="state"
        onChange={props.inputChange}
        type="text"
        placeholder="State"
      />
       <input
        value={props.formState.zipcode}
        name="zipcode"
        onChange={props.inputChange}
        type="text"
        placeholder="Zipcode"
      />



      <input
        value={props.formState.password}
        name="password"
        onChange={props.inputChange}
        type="password"
        placeholder="Password"
      />
      <input
        value={props.formState.password2}
        name="password2"
        onChange={props.inputChange}
        type="password"
        placeholder="Verify Password"
      />
      <button className="submitButton" onClick={props.handleRegister}>
        Submit
      </button>
    </form>
  );
}

export default RegisterForm;
