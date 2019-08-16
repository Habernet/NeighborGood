import React, { Component } from 'react';
import LoginForm from '../components/LoginForm/LoginForm';

function LoginUser(props) {
  return ( 
    <LoginForm {...props}/>
  );
}
 
export default LoginUser;