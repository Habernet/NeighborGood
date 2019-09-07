import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Button(props) {
  return (
    <button className="button" onClick={props.handleClick} {...props}>
      <a target="_blank" rel="noopener noreferrer" href={props.href}>
        {props.children}
      </a>
    </button>
  );
}

export default Button;
