import React from 'react';
import "./style.css";

function RegisterForm(props) {
  console.log(props);
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
      <button onClick={props.handleRegister}>Submit</button>
    </form>
     );
  }

 
export default RegisterForm;
