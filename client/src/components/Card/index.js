import React from "react";
import "./style.css";

export function Card(props) {
  return (
    <div>
      <CardHeading title={props.title} />
      <CardImg image={props.image} />
      <CardBody decription={props.description} date={props.date} />
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

export function CardBtn(props) {
  return (
    <button onClick={props.onClick} className={`card-btn ${props["data-value"]}`} {...props} />
  );
}

export function CardBody(props) {
  return (
    <div>
      <h4>
      Favorite language: {props.language}
      </h4>
      <h4>
      Email: {props.email}
      </h4>
    </div>
  )
}

export function CardContainer(props) {
  return (
    <div className="jumbotron card-container">
      <Card title={props.title} image={props.image} language={props.language} 
        email={props.email} handleBtnClick={props.handleBtnClick} />
    </div>
  );
}

export function CardHeading(props) {
  return ( 
    <div>
      <CardTitle title={props.title} />
    </div> 
  );
}

export function CardImg(props) {
  return (
    <div>
      <img className="card-img" src={props.image} alt="user thumbnail" />
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
  );
}

export function CardTitle(props) {
  return (
    <div className="blue text-center">
      <CardTitleText title={props.title} />
    </div>
  );
}

export function CardTitleText(props) {
  return <h2>{props.title}</h2>;
}


