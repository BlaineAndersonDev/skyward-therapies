import React, { Component } from 'react';
import "./Landing.css";
import Navigation from "./Navigation/Navigation.js";
import Logo from "./Logo/Logo.js";

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
        </div>
      </div>
    );
  }
}

export default Landing;
