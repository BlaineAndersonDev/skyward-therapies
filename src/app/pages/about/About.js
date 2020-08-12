import React, { Component } from 'react';
import './About.css';
import Profile from "./Profile/Profile.js";
import Headshot from "./Headshot/Headshot.js";

class About extends Component {
  render() {
    return (
      <div id="about">
        <div className="aboutFirstBox aboutbox">
          <Headshot />
        </div>
        <div className="aboutSecondBox aboutbox">
          <Profile />
        </div>
      </div>
    );
  }
}

export default About;
