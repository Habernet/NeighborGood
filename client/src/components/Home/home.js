import React from "react";
import "./style.css";

function Home(props) {
  return (
    <div className="home text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Home;
