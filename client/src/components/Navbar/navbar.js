import React from "react";
import { Link } from "react-router-dom";
import "./style.css"


const Navbar = props => 
     (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
        {/* <a class="navbar-brand" href="#">NeighborGood</a> */}
        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}
         <div className="collapse navbar-collapse" id="navbarNav"> 
          <ul className="navbar-nav"> 
            <li className="nav-item active">
              <a className="nav-link" href="/"><i class="fa fa-fw fa-home"></i>Home <span class="sr-only">(current)</span></a>
              <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          
        </Link>
      </li>
            
            {/* <li className="nav-item">
              <a className="nav-link" href="/contact"><i className="fa fa-mobile" aria-hidden="true"></i>Contact</a>
              <Link to="/" className={window.location.pathname === "Contact" ? "nav-link active" : "nav-link"}>
          
        </Link>
      </li>
            
            <li className="nav-item">
              <a className="nav-link" href="/register" ><i class="fa fa-registered" aria-hidden="true"></i>Register</a>
              <Link to="/" className={window.location.pathname === "Register" ? "nav-link active" : "nav-link"}>
          
        </Link>
      </li> */}
      <li className="nav-item">
              <a className="nav-link" href="/events" ><i class="fa fa-calendar" aria-hidden="true"></i>Events</a>
              <Link to="/" className={window.location.pathname === "Events" ? "nav-link active" : "nav-link"}>
          
        </Link>
      </li>
      <li class="nav-item">
              <a class="nav-link" href="/classifieds" ><i class="fa fa-newspaper-o" aria-hidden="true"></i>Classifieds</a>
              <Link to="/" className={window.location.pathname === "Classifieds" ? "nav-link active" : "nav-link"}>
          
        </Link>
      </li>

      <li className="nav-item">
              <a className="nav-link" href="/users" ><i class="fa fa-users" aria-hidden="true"></i>Users</a>
              <Link to="/" className={window.location.pathname === "Users" ? "nav-link active" : "nav-link"}>
          
        </Link>
      </li>


            

          </ul>
        </div>
      </nav>       
    );


export default Navbar;