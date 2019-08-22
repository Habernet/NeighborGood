import React from "react";

function UpdateUserForm(props) {
  const formStyle = {
    width: "500px"
  };
  return (
    <form className="form">
      <input
        name="name"
        onChange={props.inputChange}
        type="text"
        placeholder="Name"
      />
      <input
        // style={formStyle}
        name="username"
        onChange={props.inputChange}
        type="text"
        placeholder="Username"
      />
      <input
        name="email"
        onChange={props.inputChange}
        type="text"
        placeholder="email"
      />
       <input
        name="address1"
        onChange={props.inputChange}
        type="text"
        placeholder="Street Address Line1"
      />
             <input
        name="address2"
        onChange={props.inputChange}
        type="text"
        placeholder="Street Address Line2"
      />
       <input
        name="city"
        onChange={props.inputChange}
        type="text"
        placeholder="City"
      />
       <input
        name="state"
        onChange={props.inputChange}
        type="text"
        placeholder="State"
      />
         <input
        name="zipcode"
        onChange={props.inputChange}
        type="text"
        placeholder="Street Address Line1"
      />

       <input
        name="phoneNumber"
        onChange={props.inputChange}
        type="text"
        placeholder="Phone number"
      />
      <input
      name="gender"
        onChange={props.inputChange}
        type="text"
        placeholder="Gender"
      />

       <input
        name="age"
        onChange={props.inputChange}
        type="text"
        placeholder="Age"
      />





      <button className="submitButton" onClick={props.formSubmit}>Submit</button>
    </form>
  );
}

export default UpdateUserForm;
