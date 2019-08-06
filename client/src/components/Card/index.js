import React from "react";
import CardBody from "../CardBody";
import CardBtn from "../CardBtn";
import CardImg from "../CardImage";
import CardHeading from "../CardHeading";
import "./style.css";

function Card(props) {
  return (
    <div>
      <CardHeading title={props.title} />
      <CardImg image={props.image} />
      <CardBody language={props.language} email={props.email} />
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <CardBtn
        style={{ opacity: props.image ? 1 : 0 }}
        onClick={props.handleBtnClick}
        data-value="back"
      />
      <CardBtn
        style={{ opacity: props.image ? 1 : 0 }}
        onClick={props.handleBtnClick}
        data-value="next"
      />
    </div>
  );
}

export default Card;
