import React from "react";
import Card from "../Card";
import "./style.css";

function CardContainer(props) {
  return (
    <div className="jumbotron card-container">
      <Card title={props.title} image={props.image} language={props.language} 
        email={props.email} handleBtnClick={props.handleBtnClick} />
    </div>
  );
}

export default CardContainer;
