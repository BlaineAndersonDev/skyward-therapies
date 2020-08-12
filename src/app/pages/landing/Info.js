import React, { Component } from "react";
import "./Info.css";

class Info extends Component {
  render() {
    return (
      <div className="landInfoContainer">
        <div className="landInfoBox">
          <h2 className="landInfoTitle">Under Construction</h2>
          <p className="landInfoText">New Website Coming Soon</p>
          <p className="landInfoText2">Visit us on:</p>
          <div id="landbuttons">
            <a
              href="https://www.facebook.com/SkywardTherapies/"
              target="_blank"
              rel="noopener noreferrer"
              className="landIconContainer"
            >
              <img
                src="images/social_icons/sky_social_icon_white_facebook.png"
                alt="Skyward Facebook"
                className="landIcon landIconFacebook"
              />
            </a>
            <a
              href="https://www.instagram.com/skyward.therapies.nutrition/"
              target="_blank"
              rel="noopener noreferrer"
              className="landIconContainer"
            >
              <img
                src="images/social_icons/sky_social_icon_white_instagram.png"
                alt="Skyward Instagram"
                className="landIcon landIconInstagram"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
