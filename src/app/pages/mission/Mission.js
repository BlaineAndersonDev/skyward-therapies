import React, { Component } from 'react';
import './Mission.css';

class Mission extends Component {
  render() {
    return (
    <div id="missionContainer" className="comContainer">
      <div className="comTitleContainer">
        <h1 className="comTitle">Covid-19 Update</h1>
        <div className="comUnderTitle"></div>
      </div>

      <div className="missionContentContainer">

        <div className="missionBackground1">
          <p className="missionText">
            Discounted Online Nutritional Consultations are available by appointment, please feel free to contact me and we will get you started. Also, please feel free to follow <a className="missionLink" href="https://www.instagram.com/skyward_therapies/">Skyward_Therapies on Instagram</a> for healthy home cooking inspiration during quarantine. 
          </p>
          <p className="missionText">
            Massage Therapy has been <a className="missionLinkRed" href="https://azgovernor.gov/governor/news/2020/04/governors-office-provides-additional-guidance-essential-services">ordered to close</a> until further notice by the State of Arizona Governing Boards. Unfortunately, the pandemic occurred right at a time when I was going to begin my search for a new location. Moving involves filing for a new City Establishment License, this sadly means that even if the restrictions are lifted, waiting for moving approval from the city may cause even more delays before I can reopen. 
          </p>
          <p className="missionText">
            Make sure to watch <a className="missionLinkBlue" href="https://www.facebook.com/SkywardTherapies/">Facebook</a>, <a className="missionLink" href="https://www.instagram.com/skyward_therapies/">Instagram</a>, and your emails for Skyward Therapies New Location and Updates on Massage Therapy Availability.
          </p>
          <p className="missionText">
            Thank you from the bottom of my heart for your continued support.
          </p>
          <p className="missionText">
            Warmest wishes,
          </p>
          <p className="missionText">
            Kelli Anderson BS-NDTR, LMT
            Owner of Skyward Therapies
          </p>
        </div>

      </div>

    </div>
    );
  }
}

export default Mission;
