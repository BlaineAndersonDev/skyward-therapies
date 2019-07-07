import React, { Component } from 'react';
import './Mission.css';

class Mission extends Component {
  render() {
    return (
    <div id="missionContainer" className="comContainer">
      <div className="comTitleContainer">
        <h1 className="comTitle">~It's All About <br /> <span className="comTextUnderline">You</span>~</h1>
        <div className="comUnderTitle"></div>
      </div>

      <div className="missionContentContainer">

        <div className="missionBackground1">
          <p className="missionText">
            Skyward Therapies LLC is the culmination of over a decade of hard work focusing on helping individual people with the best possible personalized care.
          </p>
        </div>

        <div className="missionBackground1">
          <p className="missionText">
            Our tagline: "Back to Balance" isn't just about losing pounds or permanently curing your tension headaches, it’s about making you a priority and having a supportive network behind you that is there to help you make the healthy-lifestyle changes that will allow you achieve the balance you have been looking for.
          </p>
        </div>

      </div>

    </div>
    );
  }
}

export default Mission;
