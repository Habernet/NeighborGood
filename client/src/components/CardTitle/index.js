import React from "react";
import "./style.css";
import CardTitleText from "../CardTitleText";

function CardTitle(props) {
  return (
    <div className="blue text-center">
      <CardTitleText title={props.title} />
    </div>
  );
}

export default CardTitle;
