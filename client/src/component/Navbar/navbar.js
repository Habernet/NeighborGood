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
            <li class="nav-item active">
              <a class="nav-link" href="/"><i class="fa fa-fw fa-home"></i>Home <span class="sr-only">(current)</span></a>
              <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          
        </Link>
      </li>
            
            <li class="nav-item">
              <a class="nav-link" href="/contact"><i class="fa fa-mobile" aria-hidden="true"></i>Contact</a>
              <Link to="/" className={window.location.pathname === "Contact" ? "nav-link active" : "nav-link"}>
          
        </Link>
      </li>
            
            <li class="nav-item">
              <a class="nav-link" href="/register" ><i class="fa fa-registered" aria-hidden="true"></i>Register</a>
              <Link to="/" className={window.location.pathname === "Register" ? "nav-link active" : "nav-link"}>
          
        </Link>
      </li>
            

          </ul>
        </div>
      </nav>       
    );


export default Navbar;