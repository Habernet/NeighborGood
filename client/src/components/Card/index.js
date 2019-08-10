import React from "react";
import "./style.css";



function Card({children}) {
    return (
      <div className="card text-center" >
      {children}
     </div>
    );
  }
  

export default Card;