import React from 'react';

function UpdateUserForm(props) {
  
    return ( 
      <form className="form text-center">
      <input
        value={props.userState.firstName}
        name="firstName"
        onChange={props.inputChange}
        type="text"
        placeholder="First Name"
      />
      <input
        value={props.userState.lastName}
        name="lastName"
        onChange={props.inputChange}
        type="text"
        placeholder="Last Name"
      /> 
      <input
        value={props.userState.username}
        name="username"
        onChange={props.inputChange}
        type="text"
        placeholder="Username"
      />
      <input
        value={props.formState}
        name="email"
        onChange={props.inputChange}
        type="text"
        placeholder="Email"
      />
      {/* <input
        value={props.formState}
        name="password"
        onChange={props.inputChange}
        type="password"
        placeholder="Password"
      />
      <input
        value={props.userState.password2}
        name="password2"
        onChange={props.inputChange}
        type="password"
        placeholder="Verify Password"
      /> */}
      <input
        value={props.userState.address}
        name="address"
        onChange={props.inputChange}
        type="text"
        placeholder="Street Address"
      />
      <input
        value={props.userState.phoneNumber}
        name="phoneNumber"
        onChange={props.inputChange}
        type="text"
        placeholder="Phone Number"
      />
      <input
        value={props.userState.age}
        name="age"
        onChange={props.inputChange}
        type="age"
        placeholder="Age"
      />
      <input
        value={props.userState.gender}
        name="gender"
        onChange={props.inputChange}
        type="text"
        placeholder="Gender"
      />
      <button onClick={props.handleLogin}>Submit</button>
    </form>
     );
  }

 
export default UpdateUserForm;
