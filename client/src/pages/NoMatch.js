import React from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";

function NoMatch() {
  return (
    <Jumbotron>
      <h1>Please log in or register!</h1>
      <h1>
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
          🙄
        </span>
      </h1>
    </Jumbotron>
  );
}

export default NoMatch;
