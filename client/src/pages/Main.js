import React from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
import About from "../components/About/about";
import Home from "../components/Home/home";
import Footer from "../components/Footer/footer";


function Main() {
  return (
    <div>
      <Home backgroundImage="./images/nbrhood.jpg">
        <h1>NeighborGood</h1>
        <h2>Community.Exchanges.Privacy</h2>
      </Home>

<<<<<<< HEAD
     <Jumbotron>
     <div className="jumbotron">
      <h1>Website layout</h1>
      <p>
        Welcome to our landing pages!
      </p>
      <div className="column">
    <img src="./images/cp.jpg" className="wpmobile" alt="mobile"></img>
    <p>This way you can have everything within miles of your fingertips!</p>
    <img src="./images/lock.png"className="wplock" alt="secure"></img>
    <p>Security matters here! Everyone on this app is verified.</p>
    <img src="./images/community.png" className="wpcommunity" alt="community"></img>
    <p>A community exchange built by you and your neighbhors!</p>
    </div>
    </div>
</Jumbotron>
=======
      <Jumbotron>
        <div className="jumbotron">
          <h1>Website layout</h1>
          <p>
            Welcome to our landing pages!
            </p>
          <div className="column">
            <img src="./images/cp.jpg" className="wpmobile"></img>
            <p>This way you can have everything within miles of your fingertips!</p>
            <img src="./images/lock.png" className="wplock"></img>
            <p>Security matters here! Everyone on this app is verified.</p>
            <img src="./images/community.png" className="wpcommunity"></img>
            <p>A community exchange built by you and your neighbhors!</p>
          </div>
        </div>
      </Jumbotron>
>>>>>>> c274275339687bf0085c97e2eed3100c5cc44a9e


      <About />
      <Footer />
    </div>

  )
}
export default Main;