import React, { Component } from 'react';
import './Welcome.css';
import Profile from "./Profile/Profile.js";
import Headshot from "./Headshot/Headshot.js";

class Welcome extends Component {
  render() {
    return (
      <div id="welcome">
        <div className="welcomeFirstBox welcomebox">
          <Headshot />
        </div>
        <div className="welcomeSecondBox welcomebox">
          <Profile />
        </div>
      </div>
    );
  }
}

export default Welcome;
