import React from "react";
import { Link } from "react-router-dom";


const Navbar = props => 
     (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
        {/* <a class="navbar-brand" href="#">NeighborGood</a> */}
        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              {/* <a class="nav-link" href="/"><i class="fa fa-fw fa-home"></i>Home <span class="sr-only">(current)</span></a> */}
              <Link to="/" className="nav-link">
              <i class="fa fa-fw fa-home"></i>Home <span class="sr-only">(current)</span>
        </Link>
      </li>
            
            <li class="nav-item">
              {/* <a class="nav-link" href="/contact"><i class="fa fa-mobile" aria-hidden="true"></i>Contact</a> */}
              <Link to="/Contact" className="nav-link">
              <i class="fa fa-mobile" aria-hidden="true"></i>Contact
        </Link>
      </li>
            
            <li class="nav-item">
              {/* <a class="nav-link" href="/register" ><i class="fa fa-registered" aria-hidden="true"></i>Register</a> */}
              <Link to="/Register" className={window.location.pathname === "Register" ? "nav-link active" : "nav-link"}>
              <i class="fa fa-registered" aria-hidden="true"></i>Register
        </Link>
      </li>
      <li class="nav-item">
              {/* <a class="nav-link" href="/events" ><i class="fa fa-calendar" aria-hidden="true"></i>Events</a> */}
              <Link to="/Events" className={window.location.pathname === "Events" ? "nav-link active" : "nav-link"}>
              <i class="fa fa-calendar" aria-hidden="true"></i>Events
        </Link>
      </li>
      <li class="nav-item">
              {/* <a class="nav-link" href="/classifieds" ><i class="fa fa-newspaper-o" aria-hidden="true"></i>Classifieds</a> */}
              <Link to="/Classifieds" className={window.location.pathname === "Classifieds" ? "nav-link active" : "nav-link"}>
              <i class="fa fa-newspaper-o" aria-hidden="true"></i>Classifieds
        </Link>
      </li>

      <li class="nav-item">
              {/* <a class="nav-link" href="/users" ><i class="fa fa-users" aria-hidden="true"></i>Users</a> */}
              <Link to="/Users" className={window.location.pathname === "Users" ? "nav-link active" : "nav-link"}>
              <i class="fa fa-users" aria-hidden="true"></i>Users
        </Link>
      </li>

        <li class="nav-item">
          <Link to="/Login" className={window.location.pathname === "Login" ? "nav-link active" : "nav-link"}>
            <i class="fa fa-sign-in" area-hidden="true"></i>Login
          </Link>
        </li>

            

          </ul>
        </div>
      </nav>       
    );


export default Navbar;