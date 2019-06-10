import React, { Component } from 'react';
import './Mission.css';

class Mission extends Component {
  render() {
    return (
    <div id="missionContainer" className="comContainer">
      <div className="comTitleContainer">
        <div className="comOverTitle missionTitleColor"></div>
        <h1 className="comTitle">~We Support <br /> <span className="comTextUnderline">You</span>~</h1>
        <div className="comUnderTitle"></div>
      </div>

      <div className="comSectionContainer comRows">
        <p className="comSubSectionText">
          Skyward Therapies LLC is the culmination of over a decade of hard work focusing on helping individual people with the best possible personalized care.
        </p>
        <span className="comVerticalDivider" />
        <p className="comSubSectionText">
          Our tagline: "Back to Balance" isn't just about losing pounds or permanently curing your tension headaches, it’s about making you a priority and having a supportive network behind you that is there to help you make the healthy-lifestyle changes that will allow you achieve the balance you have been looking for.
        </p>
      </div>
    </div>
    );
  }
}

export default Mission;
