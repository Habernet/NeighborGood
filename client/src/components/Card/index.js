
import React from "react";
import "./style.css";

function Card(props){
    return(
<div className="card">
<div className="card-title">
{props.children}</div>
<img className="card-img-top" {...props} />
<div className="card-body">
{props.children})
</div>
</div>
    )
}

export default Card;
