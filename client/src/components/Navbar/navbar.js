import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = props => 
     (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
              <i className="fa fa-fw fa-home"></i>Home <span className="sr-only">(current)</span>
        </Link>
      </li>
            
            <li className="nav-item">
              <Link to="/Contact" className={window.location.pathname === "Contact" ? "nav-link active" : "nav-link"}>
              <i className="fa fa-mobile" aria-hidden="true"></i>Contact
        </Link>
      </li>
            
            <li className="nav-item">
              <Link to="/Register" className={window.location.pathname === "Register" ? "nav-link active" : "nav-link"}>
              <i className="fa fa-registered" aria-hidden="true"></i>Register
        </Link>
      </li>
      <li className="nav-item">
              <Link to="/Events" className={window.location.pathname === "Events" ? "nav-link active" : "nav-link"}>
              <i className="fa fa-calendar" aria-hidden="true"></i>Events
        </Link>
      </li>
      <li className="nav-item">
              <Link to="/Classifieds" className={window.location.pathname === "Classifieds" ? "nav-link active" : "nav-link"}>
              <i className="fa fa-newspaper-o" aria-hidden="true"></i>Classifieds
        </Link>
      </li>

      <li className="nav-item">
              <Link to="/Users" className={window.location.pathname === "Users" ? "nav-link active" : "nav-link"}>
              <i className="fa fa-users" aria-hidden="true"></i>Users
        </Link>
      </li>

        <li className="nav-item">
          <Link to="/Login" className={window.location.pathname === "Login" ? "nav-link active" : "nav-link"}>
            <i className="fa fa-sign-in" area-hidden="true"></i>Login
          </Link>
        </li>

        <li className="nav-item">
          <Link to="" className={window.location.pathname === "Logout" ? "nav-link active" : "nav-link"} onClick={props.logOut}><i className="fa fa-sign-out" area-hidden="true"></i>Log Out</Link>
        </li>

          </ul>
        </div>
      </nav>       
    );


export default Navbar;