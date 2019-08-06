import React from 'react';

function CardBody(props) {
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

export default CardBody;
