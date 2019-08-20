import React from "react";
import "./style.css";

function Card({children}) {
    return (
      <div className="card " >
<div className="card-title" >
{children}
</div> 
<div className="card-body" >
{children}
</div>    

 </div>
    );
  }
  
  export default Card;
  
