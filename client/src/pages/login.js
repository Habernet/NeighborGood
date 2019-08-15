import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron/jumbotron";
import {Row,Col} from "../components/Grid";
import {Card, CardBtn, CardBody,CardContainer,CardHeading,CardImg,CardTitle,CardTitleText}  from "../components/Card";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import axios from "axios";
import LoginForm from '../components/LoginForm/LoginForm';

function loginUser(props) {
  return ( 
    <LoginForm {...props}/>
  );
}
 
export default loginUser;