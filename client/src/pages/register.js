import React, { Component } from 'react';
import RegisterForm from '../components/RegisterForm/registerform';

function registerUser(props) {
  // console.log(props);
  return ( 
    <RegisterForm {...props}/>
  );
}
 
export default registerUser;