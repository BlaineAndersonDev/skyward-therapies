import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div id="landing" className="comContainer">
        <div id="landingDimmer" className="comContainer">
          <img src="/images/000_Navigation/newSkywardLogo01.png" alt="skywardLogo01" id="skywardLogo01" />
        </div>
      </div>
    );
  }
}

export default Landing;
