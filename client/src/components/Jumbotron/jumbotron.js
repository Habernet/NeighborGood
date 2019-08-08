import React from "react";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1>Website layout</h1>
      <p>
        Welcome to our landing pages!
      </p>
      <div className="column">
    <img src="./images/cp.jpg" class="wpmobile"></img>
    <p>This way you can have everything within miles of your fingertips!</p>
    <img src="./images/lock.png"class="wplock"></img>
    <p>Security matters here! Everyone on this app is verified.</p>
    <img src="./images/community.png" class="wpcommunity"></img>
    <p>A community exchange built by you and your neighbhors!</p>
    </div>
    </div>
  );
}

export default Jumbotron;
