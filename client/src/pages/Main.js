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

      <Jumbotron>
        <div className="jumbotron">
          <div className="row">
            <div className="col">
              <h1>Welcome to NeighborGood!</h1>
              <p>Key App Features</p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <img
                src="./images/community.png"
                className="wpcommunity"
                alt="Community Together"
              />
              <p>A community exchange built by you and your neighbors!</p>
            </div>
            <div className="col">
              <img
                src="./images/lock.png"
                className="wplock"
                alt="Security For ALl"
              />
              <p>Security matters here! Everyone on this app is verified.</p>
            </div>
            <div className="col">
              <img
                src="./images/cp.jpg"
                className="wpmobile"
                alt="Mobile Friendly"
              />
              <p>Mobile Friendly! Everything at your fingertips.</p>
            </div>
          </div>
        </div>
      </Jumbotron>

      <About />
      <Footer />
    </div>
  );
}
export default Main;
