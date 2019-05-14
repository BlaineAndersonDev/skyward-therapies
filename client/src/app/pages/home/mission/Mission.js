import React, { Component } from 'react';
import './Mission.css';

class Mission extends Component {
  render() {
    return (
    <div id="missionContainer">
      <h1 id="missionSectionTitle">Skyward Therapies Mission</h1>

      <div className="missionSubSection">
        <p className="missionText">
          Skyward Therapies LLC is the culmination of over a decade of hard work focusing on helping individual people with the best possible personalized care.
        </p>
        <p className="missionText">
          Our tagline: "Back to Balance" isn't just about losing pounds or permanently curing your tension headaches, it’s about making you a priority and having a supportive network behind you that is there to help you make the healthy-lifestyle changes that will allow you achieve the balance you have been looking for.
        </p>
        <div className="missionQuoteBox">
          <p className="missionQuote">
            Striking out on my own to help people, in the best way I can has been my dream for so long, and seeing it come to fruition is one of the proudest moments of my life. My tagline is “Back to Balance” and that exactly what I hope to help anyone I encounter with.
          </p>
          <p className="missionQuote">
            - Skyward Therapies Founder Kelli Anderson, LMT, NDTR
          </p>
        </div>
      </div>

    </div>
    );
  }
}

export default Mission;