import React from 'react';
import "./style.css";

function LoginForm(props) {
  
    return ( 
      <form id="loginForm" className="form">
      <h3>Login:</h3>
      <input
        value={props.formState}
        name="email"
        onChange={props.inputChange}
        type="text"
        placeholder="Email"
      />
      <input
        value={props.formState}
        name="password"
        onChange={props.inputChange}
        type="password"
        placeholder="Password"
      />
      <button className="loginButton" onClick={props.handleLogin}>Submit</button>
    </form>
     );
  }

 
export default LoginForm;
