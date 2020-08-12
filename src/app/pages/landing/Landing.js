import React, { Component } from 'react';
import "./Landing.css";
import Title from "./Title/Title.js";
import Navigation from "./Navigation/Navigation.js";
import Logo from "./Logo/Logo.js";
import Info from "./Info.js";

class Landing extends Component {
  render() {

    return (
      <div id="landing">
        <div id="landingDimmer">
          <div className="landFirstBox">
            <Navigation />
          </div>
          <div className="landSecondBox">
            <Logo />
          </div>
          <div className="landThirdBox">
            <Info />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
